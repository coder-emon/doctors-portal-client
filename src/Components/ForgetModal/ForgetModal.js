import React, { useContext } from 'react';
import MyBtn from '../MyBtn/MyBtn';
import { AuthContext } from '../../Context/Auth.Context';
import { toast } from 'react-hot-toast';

const ForgetModal = () => {
    const {user, resetPassword} = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        resetPassword(email)
        .then(resut =>{
            toast.success("Reset password mail sent successfully")
        })
        .catch(err => {
            console.error(err)
            toast.error(err.message)
        })
    }
    return (
        <div>
            <input type="checkbox" id="forget-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="forget-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-accent">✕</label>
                    <h3 className="text-lg font-bold text-center">{user?.email}</h3>
                    <form className='flex flex-col items-center justify-center gap-5 mt-3' onSubmit={handleSubmit}>
                       
                        <input type="text" placeholder='Email' className='bg-white focus:border-transparent border-gray border-2 rounded px-4 py-2 w-full lg:w-96 focus:ring-primary focus:ring-2 outline-none' name='email'/>
                      <MyBtn>Send Reset Mail</MyBtn>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetModal;