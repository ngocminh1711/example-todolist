import { useState } from "react";
import { ITask, StatusTask } from "../../constants";

export default function EditTask ({taskEditing, parentCallBackFunction}: {taskEditing: ITask, parentCallBackFunction: (editTask: ITask) => void}) {
    const [editName, setEditName] = useState<string>('');
    const [editTask, setEditTask] = useState<ITask>();
    const handleChangeEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditName(e.target.value)
    }

    const [checkStatus, setCheckStatus] = useState<StatusTask>('todo');
    const handleChangeStatus = (status: StatusTask) => {
        setCheckStatus(status)
    }

    const handleUpdate = () => {
        setEditTask(prevTask => {
            const updatedTask = { ...prevTask, id: taskEditing.id, taskName: editName, status: checkStatus };
            parentCallBackFunction(updatedTask);
            return updatedTask;
        });
    }
    
    return (
        <>
        <input onChange={(e) => handleChangeEdit(e)}/>
        <label>To do</label>
            <input 
                id='todo' 
                type='radio' 
                value='todo' 
                checked={checkStatus === 'todo'}
                onChange={() => handleChangeStatus('todo')}
                />
            <label>Inprogess</label>
            <input 
                id='inprogess' 
                type='radio' 
                value='inprogess' 
                checked={checkStatus === 'inprogess'}
                onChange={() => handleChangeStatus('inprogess')}
            />
            <label>Done</label>
            <input 
                id='done' 
                type='radio' 
                value='done' 
                checked={checkStatus === 'done'}
                onChange={() => handleChangeStatus('done')}
            />
        <button onClick={handleUpdate}>
            Update
        </button>
        </>
    )
}