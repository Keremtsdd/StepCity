import React from 'react'
import { useNavigate } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';


function CategoryMan() {
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

                    <div
                        className='h-12 w-36 mt-[70px] ml-7 bg-white/95 rounded-md flex cursor-pointer select-none'
                        onClick={() => navigate('/favoriler')}
                    >

                        <FavoriteBorderOutlinedIcon className=' mt-3.5 ml-4' /> <h1 className='mt-3 ml-1'>Favorilerim</h1>

                    </div>

                    <div className='h-12 w-32 mt-[70px] ml-4 bg-white/95 rounded-md flex cursor-pointer select-none'>

                        <LocalGroceryStoreOutlinedIcon className=' mt-3.5 ml-4' /> <h1 className='mt-3 ml-1'>Sepetim</h1>

                    </div>

                </div>

                <div className='h-12 w-full bg-white/80 flex justify-center space-x-4 border-b-2 border-black/60  select-none'>

                    <h1 onClick={() => navigate('/Kadın-Ayakkabı')} className='text-2xl font-serif mt-2 cursor-pointer hover:text-orange-700 duration-300'>Kadın</h1>
                    <span className='h-7 w-0.5 mt-2.5 bg-black block'></span>
                    <h1 className='text-2xl font-serif mt-2 cursor-pointer hover:text-orange-700 duration-300'>Erkek</h1>
                    <span className='h-7 w-0.5 mt-2.5 bg-black block'></span>
                    <h1 className='text-2xl font-serif mt-2 cursor-pointer flex hover:text-orange-700 duration-300'>Giyim</h1>

                </div>

                <div className='mt-7 ml-16 flex select-none'>

                    <h1 onClick={() => navigate('/')} className='cursor-pointer text-black/80' >Anasayfa </h1> <span className='ml-2'>/</span> <h1 className='ml-2 font-bold'>Erkek</h1>

                </div>

                <div className='bg-white/80 shadow-xl h-[820px] w-96 ml-12 mt-4 rounded-lg p-6'>

                    <div className='flex'>
                        <h1 className='font-bold text-xl mb-2'>Marka</h1>
                        <span className='ml-[240px]'><FilterListIcon style={{ width: "30px", height: "30px" }} /></span>
                    </div>
                    <span className='h-0.5 w-full bg-black/60 block mb-4'></span>

                    <div className=' space-x-6'>

                        <div className='flex space-x-6'>

                            <div className='flex flex-col space-y-2 ml-5 mt-5 w-96 overflow-y-auto max-h-60'>

                                <label className='inline-flex items-center space-x-2'>
                                    <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                                    <span>Adidas</span>
                                </label>

                                <label className='inline-flex items-center space-x-2'>
                                    <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                                    <span >Nike</span>
                                </label>


                                <label className='inline-flex items-center space-x-2'>
                                    <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                                    <span >New Balance</span>
                                </label>

                                <label className='inline-flex items-center space-x-2'>
                                    <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                                    <span>Lacoste</span>
                                </label>
                                <label className='inline-flex items-center space-x-2'>
                                    <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                                    <span >Emporio Armani</span>
                                </label>

                                <label className='inline-flex items-center space-x-2'>
                                    <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                                    <span >Dolce & Gabbana</span>
                                </label>
                                <label className='inline-flex items-center space-x-2'>
                                    <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                                    <span >Alexander McQuuen</span>
                                </label>

                                <label className='inline-flex items-center space-x-2'>
                                    <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                                    <span >Louis Vuitton</span>
                                </label>

                                <label className='inline-flex items-center space-x-2'>
                                    <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                                    <span >Valentino Garavani</span>
                                </label>

                                <label className='inline-flex items-center space-x-2'>
                                    <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                                    <span >Prada</span>
                                </label>

                                <label className='inline-flex items-center space-x-2'>
                                    <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                                    <span >Off White</span>
                                </label>

                                <label className='inline-flex items-center space-x-2'>
                                    <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                                    <span >Hugo Boss</span>
                                </label>


                            </div>

                        </div>

                    </div>

                    <span className='h-0.5 w-full bg-black/30 block my-6'></span>

                    <h1 className='font-bold text-xl mb-2'>Beden</h1>

                    <div className='flex flex-col space-y-2 ml-5 mt-5 '>

                        <label className='inline-flex items-center space-x-2'>
                            <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                            <span>40</span>
                        </label>

                        <label className='inline-flex items-center space-x-2'>
                            <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                            <span>41</span>
                        </label>

                        <label className='inline-flex items-center space-x-2'>
                            <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                            <span>42</span>
                        </label>

                        <label className='inline-flex items-center space-x-2'>
                            <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                            <span>43</span>
                        </label>

                        <label className='inline-flex items-center space-x-2'>
                            <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                            <span>44</span>
                        </label>

                    </div>


                    <span className='h-0.5 w-full bg-black/30 block my-6'></span>

                    <h1 className='font-bold text-xl mb-2'>Fiyata Göre</h1>
                    <select className='w-full border border-black p-2 rounded-sm'>
                        <option>Önerilen</option>
                        <option value="asc">Artan fiyat</option>
                        <option value="desc">Azalan fiyat</option>
                    </select>

                </div>




                <div className='h-96 w-full bg-neutral-200'></div>



            </div>


        </>
    )
}

export default CategoryMan
