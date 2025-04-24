import React, { useEffect } from 'react';
import Header from '../Components/Header';
import { useCart } from '../Context/CartContext';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

function ShoeStore() {
    const { cartItems, setCartItems, removeFromCart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        const savedCart = localStorage.getItem("cartItems");
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, [setCartItems]);

    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        } else {
            localStorage.removeItem("cartItems");
        }
    }, [cartItems]);

    return (
        <>
            <Header />

            <div className='p-4 lg:p-8 lg:mb-[300px] mb-40'>
                <h2 className='text-3xl lg:text-4xl font-bold ml-8 lg:ml-72 mt-10 flex items-center'>
                    Alışveriş Sepetiniz <LocalGroceryStoreOutlinedIcon className="ml-2" style={{ width: "32px", height: "32px" }} />
                </h2>

                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center mt-10 lg:mt-44  text-center">
                        <LocalGroceryStoreOutlinedIcon className="text-gray-500" style={{ width: "120px", height: "120px" }} />
                        <p className="mt-4 text-2xl lg:text-3xl font-semibold">Alışveriş Sepetiniz Boş</p>
                        <h1
                            onClick={() => navigate('/kadın-ayakkabı')}
                            className='text-lg lg:text-xl mt-6 cursor-pointer text-purple-900 flex items-center hover:underline'
                        >
                            Ürünleri Keşfedin <ArrowForwardIosIcon className='ml-1' />
                        </h1>
                    </div>
                ) : (
                    <ul className='space-y-5'>
                        {cartItems.map((item, index) => (
                            <li
                                key={index}
                                className='border-2 border-black/30 rounded-md mt-10 lg:ml-[285px] mx-2 lg:mx-0 p-4 lg:w-[1000px] bg-white'
                            >
                                <div className='flex flex-col lg:flex-row justify-between'>
                                    <div className='flex flex-col lg:flex-row'>
                                        <img
                                            src={item.image}
                                            alt={item.model}
                                            className='w-36 h-36 lg:w-48 lg:h-48 mx-auto lg:mx-0 object-cover select-none'
                                        />

                                        <div className='mt-4 lg:mt-8 lg:ml-8 text-center lg:text-left'>
                                            <h3 className='font-semibold text-lg'>{item.brand} - {item.model}</h3>
                                            <p className='font-semibold mt-2'>Seçilen Beden ({item.size})</p>

                                            <a href={item.ShopierLink || item.shopierLink} target='_blank' rel='noreferrer'>
                                                <button className="h-9 w-32 mt-6 lg:mt-14 font-semibold hover:bg-black hover:text-white duration-300 rounded-sm border-2 border-black">
                                                    Hemen Al
                                                </button>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Sağ kısım: fiyat ve silme butonu */}
                                    <div className='mt-6 lg:mt-8 lg:text-right text-center'>
                                        <p className="text-gray-900 text-2xl font-semibold">
                                            {item.price.toLocaleString('tr-TR')} TL
                                        </p>
                                        <p className="text-gray-600 text-xl line-through">
                                            {(item.price * 1.4).toLocaleString('tr-TR')} TL
                                        </p>
                                        <p className='mt-3 h-6 w-28 mx-auto lg:mx-0 text-center rounded-sm bg-slate-400'>Ücretsiz Kargo</p>

                                        <button
                                            onClick={() => removeFromCart(item.id, item.size)}
                                            className="mt-5 text-red-600 font-semibold"
                                        >
                                            <DeleteOutlineOutlinedIcon style={{ width: "25px", height: "25px" }} />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}

export default ShoeStore;
