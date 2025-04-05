import React from 'react'
import { useNavigate } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';



function CategoryWomen() {
    const navigate = useNavigate();
    return (
        <>

            <div className='h-[170px] w-full  bg-neutral-600 flex'>

                <h1 onClick={() => navigate('/')} style={{ height: "50px" }} className='ml-[400px] pt-14 text-6xl font-serif cursor-pointer'>StepCity</h1>

                <span className='h-32 w-0.5 mt-5 ml-14 bg-black block'></span>


                <input type="search" className='h-12 w-[450px] ml-14 mt-[70px] rounded-md' placeholder='  Aradığınız ürünü giriniz' />

                <div className='h-12 w-36 mt-[70px] ml-7 bg-white rounded-sm flex cursor-pointer'>

                    <FavoriteBorderOutlinedIcon className=' mt-3.5 ml-4' /> <h1 className='mt-3 ml-1'>Favorilerim</h1>

                </div>

                <div className='h-12 w-32 mt-[70px] ml-7 bg-white rounded-sm flex cursor-pointer'>

                    <LocalGroceryStoreOutlinedIcon className=' mt-3.5 ml-4' /> <h1 className='mt-3 ml-1'>Sepetim</h1>

                </div>

            </div>

            <div className='h-12 w-full bg-neutral-400 flex justify-center space-x-4 '>

                <h1 className='text-2xl font-serif mt-2 cursor-pointer'>Kadın</h1>
                <span className='h-7 w-0.5 mt-2.5 bg-black block'></span>
                <h1 className='text-2xl font-serif mt-2 cursor-pointer'>Erkek</h1>
                <span className='h-7 w-0.5 mt-2.5 bg-black block'></span>
                <h1 className='text-2xl font-serif mt-2 cursor-pointer flex'>Giyim</h1>

            </div>

            <div className='bg-neutral-700 h-[600px] w-96 m-12'>

                <h1 className='pt-10 ml-5 font-bold text-xl'>Marka</h1>

                <div className='flex space-x-6'>

                    <div className='flex flex-col space-y-2 ml-5 mt-5'>

                        <label className='inline-flex items-center space-x-2'>
                            <input type='checkbox' className='w-4 h-4 text-blue-600 rounded' />
                            <span className='text-white'>Adidas</span>
                        </label>

                        <label className='inline-flex items-center space-x-2'>
                            <input type='checkbox' className='w-4 h-4 text-blue-600 rounded' />
                            <span className='text-white'>Nike</span>
                        </label>

                        <label className='inline-flex items-center space-x-2'>
                            <input type='checkbox' className='w-4 h-4 text-blue-600 rounded' />
                            <span className='text-white'>Puma</span>
                        </label>

                        <label className='inline-flex items-center space-x-2'>
                            <input type='checkbox' className='w-4 h-4 text-blue-600 rounded' />
                            <span className='text-white'>New Balance</span>
                        </label>

                        <label className='inline-flex items-center space-x-2'>
                            <input type='checkbox' className='w-4 h-4 text-blue-600 rounded' />
                            <span className='text-white'>Lacoste</span>
                        </label>
                        <label className='inline-flex items-center space-x-2'>
                            <input type='checkbox' className='w-4 h-4 text-blue-600 rounded' />
                            <span className='text-white'>Emporio Armani</span>
                        </label>

                        <label className='inline-flex items-center space-x-2'>
                            <input type='checkbox' className='w-4 h-4 text-blue-600 rounded' />
                            <span className='text-white'>Dolce & Gabbana</span>
                        </label>

                    </div>

                    <div className='flex flex-col space-y-2 mt-5'>

                        <label className='inline-flex items-center space-x-2'>
                            <input type='checkbox' className='w-4 h-4 text-blue-600 rounded' />
                            <span className='text-white'>Alexander McQuuen</span>
                        </label>

                        <label className='inline-flex items-center space-x-2'>
                            <input type='checkbox' className='w-4 h-4 text-blue-600 rounded' />
                            <span className='text-white'>Louis Vuitton</span>
                        </label>

                        <label className='inline-flex items-center space-x-2'>
                            <input type='checkbox' className='w-4 h-4 text-blue-600 rounded' />
                            <span className='text-white'>Valentino Garavani</span>
                        </label>

                        <label className='inline-flex items-center space-x-2'>
                            <input type='checkbox' className='w-4 h-4 text-blue-600 rounded' />
                            <span className='text-white'>Prada</span>
                        </label>

                        <label className='inline-flex items-center space-x-2'>
                            <input type='checkbox' className='w-4 h-4 text-blue-600 rounded' />
                            <span className='text-white'>Off White</span>
                        </label>

                        <label className='inline-flex items-center space-x-2'>
                            <input type='checkbox' className='w-4 h-4 text-blue-600 rounded' />
                            <span className='text-white'>Hugo Boss</span>
                        </label>

                        <label className='inline-flex items-center space-x-2'>
                            <input type='checkbox' className='w-4 h-4 text-blue-600 rounded' />
                            <span className='text-white'>Golden Goose</span>
                        </label>

                    </div>

                </div>

                <span className='h-0.5 w-[300px] mt-10 ml-10 bg-black/40 block'></span>


                <div>

                    <h1 className='font-bold text-xl mt-5 ml-5'>Beden</h1>

                    <div className='grid grid-cols-4' >

                        <div className='bg-white border-2 border-black text-center pt-1 h-9 w-16 mt-5 ml-5 cursor-pointer '>36</div>

                        <div className='bg-white border-2 border-black text-center pt-1 h-9 w-16 mt-5 ml-4 cursor-pointer'>37</div>

                        <div className='bg-white border-2 border-black text-center pt-1 h-9 w-16 mt-5 ml-4 cursor-pointer'>38</div>

                        <div className='bg-white border-2 border-black text-center pt-1 h-9 w-16 mt-5 ml-4 cursor-pointer'>39</div>

                        <div className='bg-white border-2 border-black text-center pt-1 h-9 w-16 mt-5 ml-5 cursor-pointer'>40</div>

                    </div>

                </div>


            </div>










        </>
    )
}

export default CategoryWomen
