export interface IFileUploadConfig {
    validExtensions: string[];
    validSize: number;
    maximumQuantity: number;
}

export interface IFileValidationResult {
    invalidExtensions: number;
    invalidSize: number;
}