export interface Validation {
  // arg como any indicando que receberá qualquer objeto de validação
  validate: (input: any) => Error | undefined | null
}
