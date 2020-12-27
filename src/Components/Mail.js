import React from 'react'
import './Mail.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {IconButton } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { LabelImportantOutlined } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { selectOpenMail } from '../features/mailSlice';
function Mail() {
    const history=useHistory()
    const selectedMail=useSelector(selectOpenMail)
    return (
        <div className='mail'> 
            <div className='email__tools'>
                <div className='email__toolsLeft'>
                    <IconButton onClick={()=>history.push('/')}><ArrowBackIcon></ArrowBackIcon></IconButton>
                    <IconButton><MoveToInboxIcon></MoveToInboxIcon></IconButton>
                    <IconButton><ErrorIcon></ErrorIcon></IconButton>
                    <IconButton><DeleteIcon></DeleteIcon></IconButton>
                    <IconButton><EmailIcon></EmailIcon></IconButton>
                    <IconButton><WatchLaterIcon></WatchLaterIcon></IconButton>
                    <IconButton><MoreVertIcon></MoreVertIcon></IconButton>
                </div>
                <div className='email__toolsRight'>
                    <IconButton><UnfoldMoreIcon></UnfoldMoreIcon></IconButton>
                    <IconButton><PrintIcon></PrintIcon></IconButton>
                    <IconButton><ExitToAppIcon></ExitToAppIcon></IconButton>
                </div>
            </div>
            <div className='mail__body'>
                <div className='mail__bodyHeader'>
                    <h2>{selectedMail?.Subject}</h2>
                    <LabelImportantOutlined className='mail__important'></LabelImportantOutlined>
                    <p>{selectedMail?.title}</p>
                    <p className='mail__time'>{selectedMail?.time}</p>
                </div>
                <div className='mail__message'>
                    <p>{selectedMail?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail
