export interface ITask {
    id: string;
    taskName: string;
    status: StatusTask
}

export type StatusTask  = 'todo' | 'inprogess' | 'done'