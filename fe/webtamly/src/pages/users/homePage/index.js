import {memo} from "react";

const HomePage = () =>{
    return(
        <>
            <h1>header</h1>
            <h1>body</h1>
            <h1>footer</h1>
        </>
    );
};

export default memo(HomePage);