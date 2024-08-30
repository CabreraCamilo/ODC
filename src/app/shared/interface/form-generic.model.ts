import { AbstractControl, AsyncValidatorFn, FormGroup, UntypedFormGroup, ValidationErrors } from "@angular/forms";
import { BehaviorSubject, Observable, Subject } from "rxjs";

export enum InputTypeEnum {
  TEXT = 'text',
  NUMBER = 'number',
  EMAIL = 'email',
  SELECT = 'select',
  TEXTAREA = 'textarea',
  RADIO = 'radio',
  DATE = 'date',
  INPUT_ADDRESS = 'address',
  INPUT_VALIDATOR = 'inputValidator',
  INPUT_MONEY = 'inputMoney',
  INPUT_NAME = 'inputName',
}

export enum FormGroupNamesEnum {
  MAIN = 'mainForm',
  OPTIONAL = 'OptionalForm'
}

export enum CodeValidatorNameEnum {
  REQUIRED = 'required',
  MIN_LENGTH_VALIDATOR = 'minlength',
  MAX_LENGTH_VALIDATOR = 'maxlength',
  MAX_VALIDATOR = 'max',
  SAME_VALIDATOR = 'sameValueValidator',
  EMAIL_VALIDATOR = 'email',
  SPECIAL_CHARACTERS = 'specialCharacters',
  ONLY_NUMBERS = 'onlyNumbers',
  NUMBERS_CHARACTERS = 'numberCharacters',
  ALPHA_NUMERIC = 'alphaNumeric',
  ALPHA_NUMERIC_HYPHEN = 'alphaNumericHyphen',
  MATRICULAS = 'matriculas',
  CUSTOM_EMAIL_VALIDATOR = 'customEmail',
  CUSTOM_NUMBER_COLOMBIAN = 'customNumberColombian',
  CUSTOM_NAMES_VALIDATOR = 'customNamesValidator',
  CUSTOM_DOCUMENT_ID_VALIDATOR = 'customDocumentIdValidator',
  CUSTOM_CC_VALIDATOR = 'customCCValidator',
  CUSTOM_NIT_VALIDATOR = 'customNITValidator',
  CUSTOM_PASSPORT_VALIDATOR = 'customPassportValidator',
}

export enum PatternsValidatorEnum {
  ONLY_NUMBERS = '^[0-9]*$',
  NUMBERS_CHARACTERS = '^[0-9a-zA-Z]*$',
  SPECIAL_CHARACTERS = '^[a-zA-Z0-9 -]*$',
  ALPHA_NUMERIC = "^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ'\\s]+$",
  ALPHA_NUMERIC_HYPHEN = '^[a-zA-Z0-9\\-]*$',
  EMAIL = "^[\\w.-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
  INPUT_EMAIL = "^[a-zA-Z0-9.@_+-]+$", //Este patrón sirve únicamente para comprobar la presencia de caracteres válidos y no garantiza que la estructura del correo electrónico sea válida.
  MATRICULAS = "^[0-9a-zA-Z\\-\\s]+$",
  NAMES = "^(?!.*(--|[@#])).*$",
  COLOMBIAN_NUMBER = "^3\\d{9}$|^60\\d{8}$",
}

export enum FieldLength {
  // Valores Maximos
  BUSINESS_NAME = 400, // Razon Social
  COMMENTS = 400, // Observaciones
  ADDRESS = 400, // Direccion
  EMAIL = 100, // Correos
  CELLPHONE = 10, // Celulares y Telefonos
  REGISTRATION_NUMBER = 20, // Numero de matricula
  NAME_OR_SURNAME = 15, // Nombres o apellidos ej: primer nombre
  NUMBER_ID_DOCUMENT = 15, // Numero de identificacion
  CAPITAL_SMLVM = 12, // Capital en SMLVM
  DATES = 10, // Fechas
  FINISHED_HOMES = 7, // Casas terminadas y entregadas
  EXPERIENCE_YEARS = 3, // Anos de experiencia
  VERIFICATION_DIGIT = 1, // Digitos de verificacion
}

/**
 * Verifica si el valor del control de formulario es un correo electrónico válido.
 *
 * @remarks
 * Esta función utiliza una expresión regular para validar el formato del correo electrónico.
 * Si el valor del control no es un correo electrónico válido, retorna un objeto de error.
 *
 * @param control - El control de formulario cuyo valor se debe validar.
 * @returns Un objeto de error si el valor del control no es válido, de lo contrario retorna null.
 */
export const customEmailValidator = (control: AbstractControl) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (control.value && !emailRegex.test(control.value)) {
    const error = { [CodeValidatorNameEnum.CUSTOM_EMAIL_VALIDATOR]: true };
    return error;
  }
  return null;
};

/**
 * Verifica si el valor del control de formulario es un número de teléfono colombiano válido.
 *
 * @remarks
 * Esta función utiliza una expresión regular para validar el formato del número de teléfono.
 * Si el valor del control no es un número válido, retorna un objeto de error.
 *
 * @param control - El control de formulario cuyo valor se debe validar.
 * @returns Un objeto de error si el valor del control no es válido, de lo contrario retorna null.
 */
export const customNumberColombian = (control: AbstractControl) => {
  const numeroColombianoReguex = /^3\d{9}$|^60\d{8}$/;
  if (control.value && !numeroColombianoReguex.test(control.value)) {
    const error = { [CodeValidatorNameEnum.CUSTOM_NUMBER_COLOMBIAN]: true };
    return error;
  }
  return null;
};

/**
 * Verifica si el valor del control de formulario es un nombre válido.
 *
 * @remarks
 * Esta función utiliza una expresión regular para validar el formato del nombre.
 * Si el valor del control no es un nombre válido, retorna un objeto de error.
 *
 * @param control - El control de formulario cuyo valor se debe validar.
 * @returns Un objeto de error si el valor del control no es válido, de lo contrario retorna null.
 */
export const customNamesValidator = (control: AbstractControl) => {
  const namesRegex = new RegExp(PatternsValidatorEnum.NAMES);
  if (control.value && !namesRegex.test(control.value)) {
    const error = { [CodeValidatorNameEnum.CUSTOM_NAMES_VALIDATOR]: true };
    return error;
  }
  return null;
};

/**
 * Compara el valor de dos controles de formulario y verifica si son iguales.
 *
 * @remarks
 * Si los valores no son iguales, se establece un error en el control de coincidencia.
 *
 * @param controlName - El nombre del primer control de formulario para comparar.
 * @param matchingControlName - El nombre del segundo control de formulario para comparar.
 * @returns Una función validadora que compara los valores de los dos controles de formulario.
 */
export const SameValueValidator = (
  controlName: string,
  matchingControlName: string
) => {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (
      matchingControl?.errors &&
      !matchingControl?.errors[`${CodeValidatorNameEnum.SAME_VALIDATOR}`]
    ) {
      return;
    }
    if (control?.value !== matchingControl?.value) {
      const error = { [CodeValidatorNameEnum.SAME_VALIDATOR]: true };
      matchingControl.setErrors(error);
    } else {
      matchingControl.setErrors(null);
    }
  };
};

/**
 * Verifica si el valor del control de formulario contiene caracteres especiales.
 *
 * @remarks
 * Esta función utiliza una expresión regular para validar la presencia de caracteres especiales.
 * Si el valor del control contiene caracteres especiales, retorna un objeto de error.
 *
 * @param control - El control de formulario cuyo valor se debe validar.
 * @returns Un objeto de error si el valor del control no es válido, de lo contrario retorna null.
 */
export const specialCharactersValidator = (control: AbstractControl) => {
  const specialCharactersRegexp = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
  if (control.value && specialCharactersRegexp.test(control.value)) {
    const error = { [CodeValidatorNameEnum.SPECIAL_CHARACTERS]: true };
    return error;
  }
  return null;
};

/**
 * Verifica si el valor del control de formulario contiene solo números.
 *
 * @remarks
 * Esta función utiliza una expresión regular para validar la presencia exclusiva de números.
 * Si el valor del control contiene caracteres que no son números, retorna un objeto de error.
 *
 * @param control - El control de formulario cuyo valor se debe validar.
 * @returns Un objeto de error si el valor del control no es válido, de lo contrario retorna null.
 */
export const onlyNumbersValidator = (control: AbstractControl) => {
  const onlyNumbersRegexp = /^[0-9]*$/;
  if (control.value && !onlyNumbersRegexp.test(control.value)) {
    const error = { [CodeValidatorNameEnum.ONLY_NUMBERS]: true };
    return error;
  }
  return null;
};

/**
 * Verifica si el valor del control de formulario contiene solo números y puntos, pero no permite múltiples puntos consecutivos.
 *
 * @remarks
 * Esta función utiliza una expresión regular para validar la presencia de números y puntos.
 * Si el valor del control no cumple con estas reglas, retorna un objeto de error.
 *
 * @param control - El control de formulario cuyo valor se debe validar.
 * @returns Un objeto de error si el valor del control no es válido, de lo contrario retorna null.
 */
export const numberCharactersValidator = (control: AbstractControl) => {
  const numberCharactersRegexp = /^(?!.*\.\..*)[0-9.]+$/;
  if (control.value && !numberCharactersRegexp.test(control.value)) {
    const error = { [CodeValidatorNameEnum.NUMBERS_CHARACTERS]: true };
    return error;
  }
  return null;
};

/**
 * Valida el ID de un documento personalizado.
 * Esta función es útil para validar cédulas de ciudadanía, cédulas de extranjería.
 *
 * @remarks
 * Esta función está destinada a ser usada como un validador personalizado para los formularios de Angular.
 *
 * @param control - El FormControl que contiene el valor del ID del documento a validar.
 *
 * @returns Un objeto de error si el valor de control no pasa la validación, null de lo contrario.
 * El objeto de error tiene una única propiedad, `CodeValidatorNameEnum.CUSTOM_DOCUMENT_ID_VALIDATOR`, que será true si la validación falla.
 *
 * @example
 * Aquí hay un ejemplo de cómo utilizar este validador en un formulario de Angular:
 *
 * ```typescript
 * this.form = this.formBuilder.group({
 *   documentId: ['', [Validators.required, customDocumentIdValidator]]
 * });
 * ```
 */
export const customDocumentIdValidator = (control: AbstractControl) => {
  const documentIdRegexp = /^[a-zA-Z]*\d{6,}$/;
  if (control.value && !documentIdRegexp.test(control.value)) {
    const error = { [CodeValidatorNameEnum.CUSTOM_DOCUMENT_ID_VALIDATOR]: true };
    return error;
  }
  return null;
}


// Cédula de Ciudadanía (CC)
export const customCCValidator = (control: AbstractControl) => {
  const ccRegexp = /^\d{6,10}$/;
  if (control.value && !ccRegexp.test(control.value)) {
    const error = { [CodeValidatorNameEnum.CUSTOM_CC_VALIDATOR]: true };
    return error;
  }
  return null;
};

// Tax Identification Number (NIT)
export const customNITValidator = (control: AbstractControl) => {
  const nitRegexp = /^\d{9,10}$/;
  if (control.value && !nitRegexp.test(control.value)) {
    const error = { [CodeValidatorNameEnum.CUSTOM_NIT_VALIDATOR]: true };
    return error;
  }
  return null;
};

// Passport
export const customPassportValidator = (control: AbstractControl) => {
  const passportRegexp = /^(?:([A-Z\d])(?!.*\1)){5,20}$/;
  if (control.value && !passportRegexp.test(control.value)) {
    const error = { [CodeValidatorNameEnum.CUSTOM_PASSPORT_VALIDATOR]: true };
    return error;
  }
  return null;
};
