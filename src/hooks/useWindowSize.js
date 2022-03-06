import { useState, useEffect } from 'react';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    })

    useEffect(() => {

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        /* 
            useEffect has a method to prevent memory leaks by using a clean
            up function. It will run only when the dependancy changes with
            useEffect. So when the window closes.
        */
        // const cleanUp = () => {
        //     console.log("runs if a useEffect depen changes");
        //     window.removeEventListener("resize", handleResize);
        // }

        // return cleanUp;

        /* When you see a cleanup at the end of a useEffect, its usually a clean up function */
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return windowSize;
}

export default useWindowSize;