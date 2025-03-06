export interface Question {
  id: number;
  text: string;
  type: "text" | "email" | "number" | "select";
  options?: string[];
  condition?: (responses: Record<number, string>) => boolean;
}
