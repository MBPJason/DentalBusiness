import { useState, useEffect } from "react";

function Layout(props){
    const {children} = props;
    const [showConcert, setShowConcert] = useState(false);

    useEffect(() => {
      
    }, [])
    

    return (
        <div className="">
            {children}
        </div>
    )
}

export default Layout;