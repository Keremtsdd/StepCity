import React from 'react'
import { useNavigate } from 'react-router-dom';
import FilterListIcon from '@mui/icons-material/FilterList';
import WomenShoeList from '../Components/WomenShoeList';
import Header from '../Components/Header';



function CategoryWomen() {
    const navigate = useNavigate();
    return (
        <>

            <div className='bg-neutral-200'>

                <div className="">
                    <Header />
                </div>

                <div className='mt-7 ml-16 flex select-none'>

                    <h1 onClick={() => navigate('/')} className='cursor-pointer text-black/80' >Anasayfa </h1> <span className='ml-2'>/</span> <h1 className='ml-2 font-bold'>Kadın</h1>

                </div>

                <div className='flex'>

                    <div className='bg-white/80 shadow-xl h-[720px] w-96 ml-12 mt-4 rounded-lg p-6'>

                        <div className="flex">
                            <h1 className='font-bold text-xl mb-2'>Marka</h1>
                            <span className='ml-[240px]'><FilterListIcon style={{ width: "30px", height: "30px" }} /></span>

                        </div>
                        <span className='h-0.5 w-full bg-black/60 block mb-4'></span>

                        <div className=' space-x-6'>

                            <div className='flex flex-col space-y-2 ml-5 mt-5 '>

                                <label className='inline-flex items-center space-x-2'>
                                    <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                                    <span>Adidas</span>
                                </label>

                                <label className='inline-flex items-center space-x-2'>
                                    <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                                    <span>Nike</span>
                                </label>


                                <label className='inline-flex items-center space-x-2'>
                                    <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                                    <span>Lacoste</span>
                                </label>

                                <label className='inline-flex items-center space-x-2'>
                                    <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                                    <span>Golden Goose</span>
                                </label>

                            </div>

                        </div>

                        <span className='h-0.5 w-full bg-black/30 block my-6'></span>

                        <h1 className='font-bold text-xl mb-2'>Beden</h1>

                        <div className='flex flex-col space-y-2 ml-5 mt-5 '>

                            <label className='inline-flex items-center space-x-2'>
                                <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                                <span>36</span>
                            </label>

                            <label className='inline-flex items-center space-x-2'>
                                <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                                <span>37</span>
                            </label>

                            <label className='inline-flex items-center space-x-2'>
                                <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                                <span>38</span>
                            </label>

                            <label className='inline-flex items-center space-x-2'>
                                <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                                <span>39</span>
                            </label>

                            <label className='inline-flex items-center space-x-2'>
                                <input type='checkbox' className='w-5 h-5 text-blue-600 rounded' />
                                <span>40</span>
                            </label>

                        </div>



                        <span className='h-0.5 w-full bg-black/30 block my-6'></span>

                        <h1 className='font-bold text-xl mt-5 mb-3'>Fiyata Göre</h1>
                        <select className='w-full border border-black p-2 rounded-sm'>
                            <option>Önerilen</option>
                            <option value="asc">Artan fiyat</option>
                            <option value="desc">Azalan fiyat</option>
                        </select>

                    </div>

                    <div>
                        <WomenShoeList />
                    </div>



                </div>

                <div className='h-96 w-full bg-neutral-200'></div>

            </div>

        </>
    )
}

export default CategoryWomen
