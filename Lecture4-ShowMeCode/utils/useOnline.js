import { useState, useEffect } from "react";

const useIsOnline = () =>{
    
    const [ isOnline, setIsOnline]=useState(true);

    const [visible, setVisible]=useState(true);

    let handleOnline = ()=>{
        setIsOnline(true);
        setVisible(true);
        setTimeout(()=>{
            setVisible(false);
        },2000);
    }
    
    let handleOffline = ()=>{
        setIsOnline(false);
        setVisible(true);
    }
    
    useEffect(()=>{
        window.addEventListener('online',handleOnline);
        window.addEventListener('offline',handleOffline);
        let timer=setTimeout(()=>{
            setVisible(false);
        },2000);

        return ()=>{
            window.removeEventListener('online',handleOnline);
            window.removeEventListener('offline',handleOffline);
            clearTimeout(timer);
        }

    },[])

    return [isOnline,visible];
}

export default useIsOnline;