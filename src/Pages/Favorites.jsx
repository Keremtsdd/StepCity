import React from 'react'
import { useNavigate } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import SearchIcon from '@mui/icons-material/Search';

function Favorites() {
    const navigate = useNavigate();

    return (
        <>

            <div className='bg-neutral-200'>

                <div className='h-[170px] w-full  bg-orange-900 flex border-b-2 border-black/40'>

                    <h1 onClick={() => navigate('/')} style={{ height: "50px" }} className='ml-[400px] pt-14 text-6xl font-serif cursor-pointer text-neutral-300 select-none'>StepCity</h1>

                    <span className='h-32 w-0.5 mt-5 ml-14 bg-black/60 block'></span>


                    <div className="flex items-center h-12 w-[450px] ml-14 mt-[70px] rounded-sm bg-neutral-100 px-3">
                        <span className="text-gray-700 mr-2 cursor-pointer"><SearchIcon /></span>
                        <input
                            type="search"
                            className="bg-transparent outline-none flex-1 text-black placeholder-gray-700 placeholder:select-none"
                            placeholder="Aradığınız ürünü giriniz."
                        />
                    </div>

                    <div className='h-12 w-36 mt-[70px] ml-7 bg-white/95 rounded-md flex cursor-pointer select-none'>

                        <FavoriteBorderOutlinedIcon className=' mt-3.5 ml-4' /> <h1 className='mt-3 ml-1'>Favorilerim</h1>

                    </div>

                    <div className='h-12 w-32 mt-[70px] ml-4 bg-white/95 rounded-md flex cursor-pointer select-none'>

                        <LocalGroceryStoreOutlinedIcon className=' mt-3.5 ml-4' /> <h1 className='mt-3 ml-1'>Sepetim</h1>

                    </div>

                </div>

                <div className='h-12 w-full bg-white/80 flex justify-center border-b-2 border-black/60'>

                    <h1 className='text-3xl mt-1.5 font-serif'>Favorilerim</h1>

                </div>

            </div>




        </>
    )
}

export default Favorites
