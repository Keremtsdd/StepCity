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


            <div className='p-8 mb-[350px]'>
                <h2 className='text-4xl font-bold ml-72 mt-10'>
                    Alışveriş Sepetiniz <LocalGroceryStoreOutlinedIcon style={{ width: "40px", height: "40px" }} />
                </h2>


                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center mt-32">
                        <LocalGroceryStoreOutlinedIcon style={{ width: "150px", height: "150px" }} className="mt-3 ml-4" />
                        <p className="mt-2 ml-4 text-3xl font-semibold">Alışveriş Sepetiniz Boş</p>
                        <h1 onClick={() => navigate('/kadın-ayakkabı')} className='text-xl mt-6 ml-7 cursor-pointer text-purple-900 flex items-center'>
                            Ürünleri Keşfedin <ArrowForwardIosIcon className='ml-1' />
                        </h1>
                    </div>
                ) : (
                    <ul className='space-y-5'>
                        {cartItems.map((item, index) => (
                            <li key={index} className='h-52 w-[1000px] border-2 border-black/30 rounded-md mt-14 ml-[285px] relative'>

                                <div className='flex'>

                                    <img src={item.image} alt={item.model} className='w-48 h-48 mt-1.5 ml-12 object-cover' />

                                    <div className='mt-8 ml-8'>

                                        <h3 className='font-semibold text-lg'>{item.brand} - {item.model}</h3>
                                        <p className='font-semibold mt-2'>Seçilen Beden ({item.size})</p>

                                        <a href={item.ShopierLink} target='_blank' rel='noreferrer'>

                                            <button
                                                className="h-9 w-32 font-semibold hover:bg-black hover:text-white duration-300 rounded-sm mt-4 border-2 border-black"

                                            >
                                                Hemen Al
                                            </button>

                                        </a>

                                    </div>

                                </div>

                                <div className='absolute right-8 top-6 text-right'>
                                    <p className="text-gray-900 text-2xl font-semibold">
                                        {item.price.toLocaleString('tr-TR')} TL
                                    </p>
                                    <p className="text-gray-600 text-xl line-through">
                                        {(item.price * 1.4).toLocaleString('tr-TR')} TL
                                    </p>
                                    <p className='mt-3 h-6 w-28 text-center rounded-sm bg-slate-400'>Ücretsiz Kargo</p>

                                    <button
                                        onClick={() => removeFromCart(item.id, item.size)}

                                        className="mt-5 text-red-600 font-semibold"
                                    >
                                        <DeleteOutlineOutlinedIcon style={{ width: "25px", height: "25px" }} />
                                    </button>
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
