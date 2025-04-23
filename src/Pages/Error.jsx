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

                <h1 className='text-9xl lg:ml-[840px] ml-20 font-bold lg:mt-32 mt-10 select-none'>404</h1>
                <h1 className='lg:text-4xl text-2xl lg:ml-[730px] ml-12 lg:mt-3 lg:font-semibold'>Aradığın sayfa bulunamadı!</h1>

                <button onClick={() => navigate('/')} className='h-12 w-60 lg:ml-[830px] ml-[70px] lg:mt-10 mt-5 lg:mb-[200px] mb-20 border-2 border-black text-black hover:text-white hover:bg-black duration-300 text-xl font-semibold rounded-sm'>Anasayfa'ya dön</button>

            </div>

        </>
    )
}

export default Error
