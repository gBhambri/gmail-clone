import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from '../features/mailSlice'
import { db } from '../Firebase/Firebase';
import firebase from 'firebase'
function SendMail() {
    const dispatch=useDispatch()
    const {register,handleSubmit,errors}=useForm()
    const onSubmit=(formData)=>{
       db.collection('emails').add({
           to:formData.to,
           subject:formData.subject,
           message:formData.message,
           timestamp:firebase.firestore.FieldValue.serverTimestamp()
       })
       dispatch(closeSendMessage())
    }
    return (
        <div className='sendMail'>
            <div className='sendMail__header'>
                <h3>New Message</h3>
                <CloseIcon className='sendMail__close' onClick={()=>dispatch(closeSendMessage())}></CloseIcon>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='to' type='email' placeholder='To'  ref={register({required:true})}></input>
                {errors.to && <p className='sendMail__errors'>To is Required!!.</p>}
                <input name='subject' type='text' placeholder='Subject'  ref={register({required:true})}></input>
                {errors.subject && <p className='sendMail__errors'>Subject is Required!!.</p>}
                <input name='message' type='text' placeholder='Message...'  className='sendMail__message' ref={register({required:true})}></input>
                {errors.message && <p className='sendMail__errors'>Message is Required!!.</p>}
                <div className='sendMail__options'>
                    <Button className='sendMail__button' type='submit' variant='contained' color='primary'>Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
