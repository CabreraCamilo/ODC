/**
 * Representa un botón dentro de un modal.
 */
export interface ModalButton {
  /**
   * El texto que se mostrará en el botón.
   */
  text: string;

  /**
   * Función opcional que se ejecutará cuando se haga clic en el botón.
   * Si no se proporciona, el botón simplemente cerrará el modal.
   */
  onClick?: () => void;

  /**
   * Nombre(s) de clase(s) CSS opcionales que se aplicarán al botón.
   * Puede ser útil para aplicar estilos específicos o diferenciar
   * entre diferentes tipos de botones (por ejemplo: primario, secundario).
   */
  className?: string;
}

/**
 * Configuración para la creación y comportamiento de un modal.
 */
export interface ModalConfig {
  /**
   * Título opcional del modal.
   */
  title?: string;

  /**
   * Subtítulo opcional del modal.
   * Puede ser utilizado para proporcionar información adicional o contexto.
   */
  subtitle?: string;

  /**
   * Contenido principal del modal en formato de texto.
   * Soporta texto plano unicamente por el momento.
   */
  content?: string;

  /**
   * Lista opcional de botones que se mostrarán en el pie de página del modal.
   * Si no se proporciona, el modal tiene un botón predeterminado para cerrarlo.
   */
  buttons?: ModalButton[];

  /**
   * Función opcional que se ejecutará antes de cerrar el modal.
   * Puede ser utilizado para confirmar el cierre o realizar otras acciones previas.
   * Si la función devuelve `false` o una promesa que resuelve a `false`,
   * el modal no se cerrará.
   */
  beforeClose?: () => boolean | Promise<boolean>;
}
