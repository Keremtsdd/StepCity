import { useState, useEffect } from 'react';
import axios from 'axios';

function WomenShoeList() {

    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5029/api/WomenShoe')
            .then(response => {
                setShoes(response.data);
            })
            .catch(error => {
                console.error('Hata:', error);
            });
    }, []);

    return (
        <>
            <h2 className="text-sm ml-11 mt-4">
                {shoes.length} Ürün bulundu.
            </h2>

            <div className="grid grid-cols-4 gap-6 pl-10 pt-2">
                {shoes.map((shoe) => (
                    <div key={shoe.id} className="bg-white h-[450px] w-[300px] shadow-md rounded-md p-4 cursor-pointer">
                        <h1 className='text-red-600 h-5 w-20 text-center -ml-4 bg-slate-200 text-sm select-none'>%40 İndirim</h1>

                        <img src={shoe.İmage1} alt={shoe.brand} className="object-cover rounded-xl mt-4 select-none" />

                        <div className='flex'>
                            <h2 className="text-lg font-bold mt-2 ml-9">{shoe.brand}</h2>
                            <h2 className='text-md font-semibold mt-[11px] ml-2 truncate w-[150px]'>{shoe.model}</h2>
                        </div>

                        {/* Eski Fiyat */}
                        <div className="ml-9 flex">

                            <p className="text-gray-900 text-lg">
                                {shoe.price.toLocaleString('tr-TR')} ₺
                            </p>

                            <p className="text-gray-600 text-lg ml-4 line-through">
                                {(shoe.price * 1.4).toLocaleString('tr-TR')} ₺
                            </p>

                            {/* Yeni Fiyat */}

                        </div>

                        <h1 className='text-sm h-5 w-[95px] text-center rounded-sm ml-9 mt-2 bg-slate-200'>Ücretsiz Kargo</h1>
                    </div>


                ))}
            </div>
        </>
    )
}

export default WomenShoeList
