import React, { createContext, useState } from 'react';

type ToastProviderProps = {
    children: React.ReactNode;
}

type ToastContextProps = [
    Toast[],
    React.Dispatch<React.SetStateAction<Toast[]>>
]

const ToastContext = createContext<ToastContextProps>(undefined)

export function ToastProvider({ children }: ToastProviderProps) {
    const [toastData, setToastData] = useState<Toast[]>([]);

    return (
        <ToastContext.Provider value={[toastData, setToastData]}>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastContext;
