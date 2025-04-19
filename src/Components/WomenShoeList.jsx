import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cargo from '../İmages/Cargo.jpg';

const slugify = (brand, model) => {
    const text = `${brand}-${model}`;
    return text
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
};

function WomenShoeList({ searchParams }) {
    const [shoes, setShoes] = useState([]);
    const [filteredShoes, setFilteredShoes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5029/api/WomenShoe')
            .then(response => {
                setShoes(response.data);
            })
            .catch(error => {
                console.error('Hata:', error);
            });
    }, []);

    useEffect(() => {
        shoes.forEach(shoe => {
            console.log("👉 Sepete Eklenen Ürün:", shoe.shopierLink);
        });
    }, [shoes]);

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
            <h2 className="text-sm ml-10 mt-4 font-semibold">
                {filteredShoes.length} Ürün bulundu.
            </h2>

            <div className="grid grid-cols-4 gap-1 pl-2 -mb-16">
                {filteredShoes.map((shoe) => (
                    <Link
                        key={shoe.id}
                        to={`/Kadın-Ayakkabı/${shoe.id}-${slugify(shoe.brand, shoe.model)}`}
                    >
                        <div className="">

                            <img src={shoe.image1} alt={shoe.brand} className="h-[400px] w-[800px] object-cover rounded-xl mt-4 select-none" />

                            <div className='flex'>

                                <div className='mt-3 ml-8'>
                                    <h1 className='h-10 w-10 text-center font-bold pt-2 bg-black text-white select-none'>%40</h1>
                                </div>

                                <div className="truncate w-[260px] mt-2">
                                    <h1 className="text-xl font-bold ml-2">{shoe.brand}</h1>
                                    <h1 className="text-lg font-semibold -mt-1.5 ml-2">{shoe.model}</h1>
                                </div>

                            </div>

                            <div className='flex'>

                                <img className='h-12 w-12 ml-7 select-none' src={Cargo} alt="KargoBedava" />

                                <div className="ml-1 mt-2.5 flex">

                                    <p className="text-gray-900 text-lg font-semibold">
                                        {shoe.price.toLocaleString('tr-TR')} ₺
                                    </p>

                                    <p className="text-gray-600 text-lg ml-4 line-through">
                                        {(shoe.price * 1.4).toLocaleString('tr-TR')} ₺
                                    </p>

                                </div>

                            </div>

                            <div className='mb-3'>
                                <button className='h-10 w-[300px] ml-8 mt-2 border-2 text-lg font-semibold rounded-sm border-black hover:bg-black hover:text-white duration-300'>Hemen İncele </button>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default WomenShoeList;
