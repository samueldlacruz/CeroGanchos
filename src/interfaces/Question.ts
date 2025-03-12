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
  weight?: number;
  condition?: (responses: Record<number, string>) => boolean;
}
