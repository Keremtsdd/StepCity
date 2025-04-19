import React from 'react'
import Header from '../Components/Header'
import { useNavigate } from 'react-router-dom'


function Error() {
    const navigate = useNavigate();
    return (
        <>

            <div>
                <Header />
            </div>

            <div>

                <h1 className='text-9xl ml-[840px] font-bold mt-32 select-none'>404</h1>
                <h1 className='text-4xl ml-[730px] mt-3 font-semibold'>Aradığın sayfa Bulunamadı</h1>

                <button onClick={() => navigate('/')} className='h-12 w-60 ml-[830px] mt-20 mb-80 border-2 border-black text-black hover:text-white hover:bg-black duration-300 text-xl font-semibold rounded-sm'>Anasayfa'ya dön</button>

            </div>

        </>
    )
}

export default Error
