import React from "react";
import { userContext } from "./context";
export default function Context(){
    let user = React.useContext(userContext);
    const ContentStyle = {
        backgroundColor:'#ddd',
        textAlign:'center',
        margin:10,
        padding:10
    }
    return(
        <div style={ContentStyle}>
            Hello {user}
        </div>
    )
}