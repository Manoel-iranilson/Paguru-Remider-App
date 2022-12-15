import React, { createContext, useContext, useState } from 'react';
import { ITask, IReminderProvider, IReminderContext } from './types';

const ReminderContext = createContext({} as IReminderContext);

function ReminderProvider({ children }: IReminderProvider) {
    const [tasks, setTasks] = useState<ITask[]>([] as ITask[]);

    return (
        <ReminderContext.Provider value={{ tasks, setTasks }}>
            {children}
        </ReminderContext.Provider>
    )
}

export function useReminder() {
    const { tasks, setTasks } = useContext(ReminderContext);
    return { tasks, setTasks }
}


export default ReminderProvider;