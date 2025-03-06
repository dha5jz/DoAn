import { memo } from "react";
import Header from "../header";
import Footer from "../footer";


const MasterLayout = ({children, ...props}) => {
    return (
        <div {...props}>
            <Header/>
            <main style={{ marginTop: '150px' }}> 
            {children}
            </main>
            <Footer/> 
        </div>
    );
};

export default memo(MasterLayout);