import React from 'react'
import Header from '../Components/Header'
import { useCart } from '../Context/CartContext';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';




function ShoeStore() {

    const navigate = useNavigate();
    const { cartItems } = useCart();

    return (
        <>

            <div>
                <Header />
            </div>

            <div className='p-8 mb-[300px]'>
                <h2 className='text-4xl font-bold ml-72 mt-10'>Alışveriş Sepetiniz <LocalGroceryStoreOutlinedIcon style={{ width: "40px", height: "40px" }} /></h2>
                {cartItems.length === 0 ? (
                    <>
                        <div className="flex flex-col items-center justify-center mt-32">
                            <p><LocalGroceryStoreOutlinedIcon style={{ width: "150px", height: "150px" }} className="mt-3 ml-4" /></p>

                            <p className="mt-2 ml-4 text-3xl font-semibold">Alışveriş Sepetiniz Boş</p>

                            <h1 onClick={() => navigate('/kadın-ayakkabı')} className='text-xl mt-6 ml-7 cursor-pointer text-purple-900'>Ürünleri Keşfedin<ArrowForwardIosIcon style={{ width: "20px", height: "20px" }} className='ml-1 ' /></h1>
                        </div>

                    </>
                ) : (
                    <ul className='space-y-5'>
                        {cartItems.map((item, index) => (

                            <li key={index} className='h-52 w-[1000px] border-2 border-black/30 rounded-md mt-14 ml-[285px]'>

                                <div className='flex'>

                                    <img src={item.image} alt={item.model} className='w-48 h-48 mt-1.5 ml-12 object-cover' />

                                    <h3 className='font-semibold text-lg mt-8'>{item.brand} - {item.model}</h3>

                                </div>

                                <div>
                                    <p className='ml-[240px] -mt-28 font-semibold'>Seçilen Beden ({item.size})</p>
                                </div>

                                <div>

                                    <button className='h-9 w-32 font-semibold hover:bg-black hover:text-white duration-300 rounded-sm ml-[240px] mt-5 border-2 border-black'>Hemen Al</button>


                                </div>


                                <div className='ml-[850px] -mt-32 '>

                                    <p className="text-gray-900 text-2xl ml-1 font-semibold">
                                        {item.price.toLocaleString('tr-TR')} TL
                                    </p>

                                    <p className="text-gray-600 text-xl line-through">
                                        {(item.price * 1.4).toLocaleString('tr-TR')} TL
                                    </p>

                                    <p className='mt-5 -ml-3 h-6 w-28 text-center rounded-sm  bg-slate-400'>Ücretsiz Kargo</p>

                                </div>

                            </li>

                        ))}

                    </ul>
                )}
            </div>
        </>
    )
}

export default ShoeStore