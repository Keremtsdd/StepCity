import React from 'react'
import Header from '../Components/Header'
import { useCart } from '../Context/CartContext';


function ShoeStore() {

    const { cartItems } = useCart();
    return (
        <>

            <div>
                <Header />
            </div>

            <div className='p-8'>
                <h2 className='text-2xl font-bold mb-4'>Sepetim</h2>
                {cartItems.length === 0 ? (
                    <p>Sepet boş</p>
                ) : (
                    <ul className='space-y-4'>
                        {cartItems.map((item, index) => (
                            <li key={index} className='border p-4 rounded flex items-center gap-4'>
                                <img src={item.image} alt={item.model} className='w-24 h-24 object-cover' />
                                <div>
                                    <h3 className='font-semibold'>{item.brand} - {item.model}</h3>
                                    <p>Beden: {item.size}</p>
                                    <p className='text-gray-600'>{item.price.toLocaleString('tr-TR')} ₺</p>
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
