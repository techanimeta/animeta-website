// use-is-iframe-loaded.hook.ts
import { useState, useEffect } from 'react';

export const useIsIFrameLoaded = (iframeRef) => {
    const [isIFrameLoaded, setIsIFrameLoaded] = useState(false);
    const iframeCurrent = iframeRef.current;
    useEffect(() => {
        iframeCurrent?.addEventListener('load', () => setIsIFrameLoaded(true));
        return () => {
            iframeCurrent?.removeEventListener('load', () => setIsIFrameLoaded(true));
        };
    }, [iframeCurrent]);
    
    console.log(isIFrameLoaded, iframeRef, "isIFrameLoaded");
    return isIFrameLoaded;
};