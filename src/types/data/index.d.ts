import { statusValues } from "../../constatns";
export type StatusType = (typeof statusValues)[number];

export type ITaskItem = {
  title: string;
  status: StatusType;
};
