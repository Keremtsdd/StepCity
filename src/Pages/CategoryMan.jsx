import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ManShoeList from '../Components/ManShoeList';
import Header from '../Components/Header';

const brands = [
    'Adidas', 'Nike', 'New Balance', 'Lacoste', 'EA7',
    'Dolce&Gabbana', 'Alexander McQueen', 'Louis Vuitton',
    'Valentino Garavani', 'Prada', 'Off White', 'Hugo Boss'
];

function CategoryMan() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const handleBrandChange = (brand) => {
        const currentBrands = searchParams.getAll("brand");
        const isSelected = currentBrands.includes(brand);

        const updatedBrands = isSelected
            ? currentBrands.filter((b) => b !== brand)
            : [...currentBrands, brand];

        const params = new URLSearchParams(searchParams);
        params.delete("brand");
        updatedBrands.forEach((b) => params.append("brand", b));
        setSearchParams(params);
    };

    const handlePriceChange = (e) => {
        const priceSort = e.target.value;
        const params = new URLSearchParams(searchParams);
        params.set("price", priceSort);
        setSearchParams(params);
    };

    return (
        <div className='bg-white'>
            <Header />

            <div className='mt-7 lg:ml-16 ml-7 flex select-none'>
                <h1 onClick={() => navigate('/')} className='cursor-pointer text-black/80'>Anasayfa</h1>
                <span className='ml-2'>/</span>
                <h1 className='ml-2 font-bold'>Erkek</h1>
            </div>

            <div className='lg:flex'>

                <div className='bg-white shadow-xl h-[820px] lg:w-96 w-full lg:ml-12 mt-4 lg:rounded-lg p-6'>

                    <div className="flex">
                        <h1 className='font-bold text-xl mb-2 ml-5'>Marka</h1>
                    </div>

                    <span className='h-0.5 w-full bg-black/60 block mb-4'></span>

                    <div style={{ width: "330px" }} className='flex flex-col space-y-2 ml-5 mt-5 w-96 overflow-y-auto max-h-64 max-w-[315px]'>
                        {brands.map((brand) => (
                            <label key={brand} className='inline-flex items-center space-x-2 cursor-pointer'>
                                <input
                                    type='checkbox'
                                    className='w-5 h-5 text-blue-600 rounded cursor-pointer'
                                    checked={searchParams.getAll("brand").includes(brand)}
                                    onChange={() => handleBrandChange(brand)}
                                />
                                <span style={{ width: "150px" }}>{brand}</span>
                            </label>
                        ))}
                    </div>

                    <span className='h-0.5 w-full bg-black/30 block my-6'></span>

                    <h1 className='font-bold text-xl mb-2 ml-5'>Beden</h1>
                    <div className='flex flex-col space-y-2 ml-5 mt-5'>
                        {[36, 37, 38, 39, 40].map(size => (
                            <label key={size} className='inline-flex items-center space-x-2 cursor-pointer'>
                                <input type='checkbox' className='w-5 h-5 text-blue-600 rounded cursor-pointer' />
                                <span>{size}</span>
                            </label>
                        ))}
                    </div>

                    <span className='h-0.5 w-full bg-black/30 block my-6'></span>

                    <h1 className='font-bold text-xl mb-2'>Fiyata Göre</h1>
                    <select
                        className='w-full border border-black p-2 rounded-sm cursor-pointer'
                        value={searchParams.get("price") || "Onerilen"}
                        onChange={handlePriceChange}
                    >
                        <option>Önerilen</option>
                        <option value="asc">Artan fiyat</option>
                        <option value="desc">Azalan fiyat</option>
                    </select>
                </div>

                <div>
                    <ManShoeList searchParams={searchParams} />
                </div>
            </div>

            <div className='h-40 w-full bg-white'></div>
        </div>
    );
}

export default CategoryMan;
