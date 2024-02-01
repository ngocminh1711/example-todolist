import { useState } from "react"
import { ITask, StatusTask } from "../../constants"
import { v4 as uuidv4 } from 'uuid';



export default function AddTask ({parentCallBackFunction}: {parentCallBackFunction: (data:ITask) => void}) {
    const [newTask, setNewTask] = useState<ITask>({
        id: '',
        taskName: '',
        status: 'todo'
    });

    const [taskName, setTaskName] = useState<string>('');

    const handleAdd = () => {
        let newId = uuidv4();
        setNewTask(prevTask => {
        const updatedTask = { ...prevTask, id: newId, taskName: taskName, status: checkStatus };
        parentCallBackFunction(updatedTask);
        return updatedTask;
    });
    };

    const [checkStatus, setCheckStatus] = useState<StatusTask>('todo');
    const handleChangeStatus = (status: StatusTask) => {
        setCheckStatus(status)
    }
    return (
        <div>
            <input onChange={(e) => setTaskName(e.target.value)}/>
            <div>
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
            </div>
            
            <button onClick={handleAdd}>Thêm mới việc làm</button>
        </div>
    )
}