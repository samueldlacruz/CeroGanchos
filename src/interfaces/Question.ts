interface IOption {
  slug: string; 
  label: string; 
  score: number; 
}

export interface Question {
  id: number;
  text: string;
  type: "text" | "email" | "number" | "select";
  options?: IOption[];
  link?: string;
  linkDescription?: string;
  condition?: (responses: Record<number, { slug: string; isValid: boolean }>) => boolean;
  validate?: (value: string, responses: Record<number, { slug: string; isValid: boolean }>) => boolean;
  weight?: number;
}
