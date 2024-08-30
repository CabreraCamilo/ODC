import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.buildBreadcrumbs(this.activatedRoute.root))
      )
      .subscribe((breadcrumbs: Breadcrumb[]) => {
        this.breadcrumbs = breadcrumbs;
        console.log('Breadcrumbs:', this.breadcrumbs); // Añadir log para depuración
      });

    // Al iniciar el componente, también construye los breadcrumbs
    this.breadcrumbs = this.buildBreadcrumbs(this.activatedRoute.root);
  }

  private buildBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      if(child.snapshot.data['breadcrumb'] != null) {
        const breadcrumb: Breadcrumb = {
          label: child.snapshot.data['breadcrumb'] || 'Sin nombre',
          url
        };

        breadcrumbs.push(breadcrumb);
      }
      return this.buildBreadcrumbs(child, url, breadcrumbs);  // Recursivamente construye los breadcrumbs para las rutas hijas
    }

    return breadcrumbs;
  }

  isLast(index: number): boolean {
    return index === this.breadcrumbs.length - 1;
  }
}