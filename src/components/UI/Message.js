import React, {useState} from 'react';
import classes from './Message.module.css'

const Message =(props)=>{
    
    return( 
            <div className={`${classes.basicStyle} ${props.className}`}>
                {props.children} 
            </div>
    )
}
export default Message