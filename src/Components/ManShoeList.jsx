import { useState, useEffect } from 'react';
import axios from 'axios';

function ManShoeList({ searchParams }) {
    const [shoes, setShoes] = useState([]);
    const [filteredShoes, setFilteredShoes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5029/api/ManShoe')
            .then(response => {
                setShoes(response.data);
            })
            .catch(error => {
                console.error('Hata:', error);
            });
    }, []);

    useEffect(() => {
        let filtered = [...shoes];


        const selectedBrands = searchParams.getAll('brand');
        if (selectedBrands.length > 0) {
            filtered = filtered.filter(shoe => selectedBrands.includes(shoe.brand));
        }

        const priceSort = searchParams.get('price');
        if (priceSort === 'asc') {
            filtered = filtered.sort((a, b) => a.price - b.price);
        } else if (priceSort === 'desc') {
            filtered = filtered.sort((a, b) => b.price - a.price);
        }

        setFilteredShoes(filtered);
    }, [shoes, searchParams]);

    return (
        <>
            <h2 className="text-sm ml-11 mt-4">
                {filteredShoes.length} Ürün bulundu.
            </h2>

            <div className="grid grid-cols-4 gap-6 pl-10 pt-2">
                {filteredShoes.map((shoe) => (
                    <div key={shoe.id} className="bg-white h-[450px] w-[300px] shadow-md rounded-md p-4 cursor-pointer">
                        <h1 className='text-red-600 h-5 w-20 text-center -ml-4 bg-slate-200 text-sm select-none'>%40 İndirim</h1>

                        <img src={shoe.İmage1} alt={shoe.brand} className="object-cover rounded-xl mt-4 select-none" />

                        <div className="truncate w-[250px]">
                            <span className="text-lg font-bold ml-9">{shoe.brand}</span>
                            <span className="text-md font-semibold ml-1">{shoe.model}</span>
                        </div>

                        <div className="ml-9 flex">
                            <p className="text-gray-900 text-lg">
                                {shoe.price.toLocaleString('tr-TR')} ₺
                            </p>

                            <p className="text-gray-600 text-lg ml-4 line-through">
                                {(shoe.price * 1.4).toLocaleString('tr-TR')} ₺
                            </p>
                        </div>
                        <h1 className='text-sm h-5 w-[95px] text-center rounded-sm ml-9 mt-2 bg-slate-200'>Ücretsiz Kargo</h1>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ManShoeList;
