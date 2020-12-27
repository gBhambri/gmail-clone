import React from 'react'
import './EmailRow.css'
import {IconButton,Checkbox } from '@material-ui/core'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../features/mailSlice';
function EmailRow({id,title,Subject,description,time}) {
    const history=useHistory()
    const dispatch=useDispatch()
    const openMail=()=>{
        dispatch(selectMail({
            id,title,Subject,description,time
        }))
        history.push('/mail')
    }
    return (
        <div className='emailRow' onClick={openMail}>
            <div className="emailRow__options">
                <Checkbox></Checkbox>
                <IconButton><StarBorderIcon></StarBorderIcon></IconButton>
                <IconButton><LabelImportantIcon></LabelImportantIcon></IconButton>
            </div>
            <div className="emailRow__title">
                <h3>{title}</h3>
            </div>
            <div className="emailRow__message">
                <h4>{Subject} {" "}
                <span className='emailRow__description'>-{description}</span>
                </h4>
            </div>
            <p className="emailRow__time">
                {time}
            </p>
        </div>
    )
}

export default EmailRow
