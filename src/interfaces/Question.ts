interface IOption {
  slug: string;
  label: string;
  score: number;
}

export type QuestionCategory =
  | "plataforma"
  | "vendedor"
  | "pago"
  | "producto"
  | "empresa"
  | "legalidad"
  | "transparencia"
  | "regulacion"
  | "operaciones";

export interface Question {
  id: number;
  text: string;
  type: "text" | "email" | "number" | "select";
  options?: IOption[];
  link?: string | Array<{ label: string; url: string }>;
  linkDescription?: string;
  condition?: (
    responses: Record<number, { slug: string; isValid: boolean }>
  ) => boolean;
  validate?: (
    value: string,
    responses: Record<number, { slug: string; isValid: boolean }>
  ) => boolean;
  weight?: number;
  category?: QuestionCategory;
  tip?: string;
}
