import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ListTask from './components/ListTask';
import { ITask } from './constants';
import AddTask from './components/AddTask';

function App() {

  const [listTodo, setListTodo] = useState<ITask[]>([{
    id: '1',
    taskName: 'viec lam hom nay',
    status: 'todo'
  },
  {
    id: '2',
    taskName: 'viec lam hom nay',
    status: 'todo'
  },
  {
    id: '3',
    taskName: 'viec lam hom nay',
    status: 'todo'
  }])

  const [listInprogess, setListInprogess] = useState<ITask[]>([]);
  const [listDone, setListDone] = useState<ITask[]>([]);

  const callbackFunction = (data:ITask) => {
    if (data.status === 'todo') {
      setListTodo([...listTodo, data])
    }
    else if (data.status === 'inprogess') {
      setListInprogess([...listInprogess, data])
    }
    else if (data.status === 'done') {
      setListDone([...listDone, data])
    }
  }

  const setEditListTask = (data:ITask[], isList: string) => {
    if(isList === 'todo') {
      setListTodo(data);
    }
    else if (isList === 'inprogress') {
      setListInprogess(data);
    }
  }

  return (
    <div className="App">
        <ListTask sendListTaskUpdate={setEditListTask} isList='todo'  listTask={listTodo} title='Danh sách việc sẽ làm'/>
        {/* a lười nên a để cách br nhé */}
        <br/>
        <br/>
        <ListTask sendListTaskUpdate={setEditListTask} isList='inprogress' listTask={listInprogess} title='Danh sách đang làm'/>
        <br/>
        <br/>
        <AddTask parentCallBackFunction={callbackFunction}/>
    </div>
  );
}

export default App;
