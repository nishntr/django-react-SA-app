import React from 'react';
import TopBar from "./topbar"
import Footer from "./footer"
import CssBaseline from '@material-ui/core/CssBaseline';


function Layout(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <TopBar />
            <div>
                {props.children}
            </div>
            <Footer />
        </React.Fragment>
    )
}
export default Layout