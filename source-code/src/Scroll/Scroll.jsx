import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToId = () =>{
    const {hash} = useLocation();

    useEffect(()=>{
        if(hash){
            const id = hash.replace("#", "");
            const scrolling = document.getElementById(id);
            if(scrolling){
                scrolling.scrollIntoView({behavior: "smooth"})
            }else{
                window.scrollTo(0,0)
            }
        }
    }, [hash])
    return null;
}
export default ScrollToId;