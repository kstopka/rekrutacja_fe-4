import React, { JSX, useState, useCallback } from "react";
import { useActions, IAppActions, AppCtx } from "../../contexted";
import "./styles.css";
import { TaskItemProps } from "./types";
import { StatusType } from "../../../types/data";
import { Select } from "../../atoms";
import { statusOptions } from "../../../constatns";

const TaskItem: React.FC<TaskItemProps> = ({
  title,
  status,
  index,
}): JSX.Element => {
  const [statusValue, setStatusValue] = useState(status);
  const { changeStatus } = useActions<IAppActions>(AppCtx, ["changeStatus"]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newStatus = e.target.value as StatusType;
      setStatusValue(newStatus);
      changeStatus({ index, status: newStatus });
    },
    [changeStatus, index]
  );

  return (
    <li>
      <span>{title}</span>
      <Select
        name="taskStatus"
        initialValue={statusValue}
        options={statusOptions}
        handleChange={handleChange}
      />
    </li>
  );
};

export default React.memo(TaskItem);
