import React, { useEffect, useState } from 'react'
import './EmailList.css'
import {IconButton,Checkbox } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RedoIcon from '@material-ui/icons/Redo';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import Sections from './Sections';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow'
import { db } from '../Firebase/Firebase';
function EmailList() {
    const [emails,setEmails]=useState([])
    useEffect(()=>{
        db.collection('emails').orderBy('timestamp','desc').onSnapshot((snapshot)=>{
            setEmails(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        })
    },[])
    return (
        <div className='emailList'>
            <div className='emailList__settings'>
                <div className='emailList__settingsLeft'>
                <Checkbox></Checkbox>
                    <IconButton>
                        <ArrowDropDownIcon></ArrowDropDownIcon>
                    </IconButton>
                    <IconButton>
                       <RedoIcon></RedoIcon>
                    </IconButton>
                    <IconButton>
                       <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                </div>
                <div className='emailList__settingsRight'>
                    <IconButton>
                       <ChevronLeftIcon></ChevronLeftIcon>
                    </IconButton>
                    <IconButton>
                      <ChevronRightIcon></ChevronRightIcon>
                    </IconButton>
                    <IconButton>
                      <KeyboardHideIcon></KeyboardHideIcon>
                    </IconButton>
                    <IconButton>
                      <SettingsIcon></SettingsIcon>
                    </IconButton>
                </div>
            </div>
            <div className='emailList__sections'>
                <Sections Icon={InboxIcon} title='Primary' color='red' selected></Sections>
                <Sections Icon={PeopleIcon} title='Social' color='#1A73EB'></Sections>
                <Sections Icon={LocalOfferIcon} title='Promotions' color='green'></Sections>
            </div>
            <div className='emailList__list'>
                {emails.map((email)=>{
                    return(
                        <EmailRow title={email?.data?.to} id={email?.id} Subject={email?.data?.subject} description={email?.data?.message}key={email?.id} time={new Date(email?.data?.timestamp?.seconds*1000).toUTCString()}></EmailRow>
                    )
                })}
                
            </div>
        </div>
    )
}

export default EmailList
