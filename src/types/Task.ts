import type { Category } from "../components/FormSelect";

export type Task = {
  emoji: string;
  taskName: string;
  deadline: string;
  category: Category | null;
  description: string;
};