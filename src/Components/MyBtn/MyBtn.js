import React from 'react';

const MyBtn = ({children}) => {
    return (
        <div>
            <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded font-bold uppercase' type='submit'>{children}</button>
        </div>
    );
};

export default MyBtn;