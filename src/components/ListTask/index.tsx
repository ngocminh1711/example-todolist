import { useState } from "react";
import { ITask } from "../../constants";
import EditTask from "../EditTask";

export default function ListTask({
  listTask,
  title,
  sendListTaskUpdate,
  isList,
}: {
  listTask: ITask[];
  title: string;
  isList: string;
  
  sendListTaskUpdate: (
    updatedListTask: ITask[],
    isList: string,
  ) => void;
}) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const getEditTask = (data: ITask) => {
    const updatedListTask = listTask.map((item) => {
      if (item.id === data.id) {
        return { ...item, taskName: data.taskName, status: data.status };
      }
      return item;
    });

    sendListTaskUpdate(updatedListTask, isList);
  };

  return (
    <>
      <div>{title}</div>
      <div>
        {listTask.map((item) => (
          <div>
            <div>{item.taskName}</div>
            <button onClick={() => handleEdit()}>Edit</button>
            {isEdit ? (
              <EditTask
                parentCallBackFunction={getEditTask}
                taskEditing={item}
              />
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}
