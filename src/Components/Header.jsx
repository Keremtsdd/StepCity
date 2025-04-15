import React, { useState, useEffect } from 'react';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

function Header() {
    const { cartItems } = useCart();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const normalizeString = (str) => {
        return str
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    };

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (searchTerm.trim() === '') {
                setSearchResults([]);
                return;
            }

            try {
                setIsSearching(true);
                const [kadinRes, erkekRes] = await Promise.all([
                    fetch('http://localhost:5029/api/WomenShoe'),
                    fetch('http://localhost:5029/api/ManShoe'),
                ]);
                const kadinData = await kadinRes.json();
                const erkekData = await erkekRes.json();

                const allProducts = [...kadinData, ...erkekData];


                const filtered = allProducts.filter(item =>
                    item.brand && typeof item.brand === 'string' &&
                    normalizeString(item.brand).includes(normalizeString(searchTerm))
                );

                setSearchResults(filtered.slice(0, 5));
                setIsSearching(false);
            } catch (error) {
                console.error('Arama hatası:', error);
                setIsSearching(false);
            }
        };

        if (searchTerm.trim()) {
            const delayDebounce = setTimeout(() => {
                fetchSearchResults();
            }, 300);
            return () => clearTimeout(delayDebounce);
        } else {
            setSearchResults([]);
        }
    }, [searchTerm]);

    const slugify = (brand, model) => {
        const text = `${brand}-${model}`;
        return text
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '');
    };


    const determineCategory = (model) => {
        if (model.toLowerCase().includes('kadın')) {
            return 'Kadın-Ayakkabı';
        }
        if (model.toLowerCase().includes('erkek')) {
            return 'Erkek-Ayakkabı';
        }
        return '';
    };


    const handleProductClick = () => {
        setSearchTerm('');
        setSearchResults([]);
    };

    return (
        <header className="w-full top-0 bg-white shadow-md z-50">
            <div className="w-full h-[170px] bg-white/95 flex border-b-4 border-black/90">
                <h1
                    onClick={() => navigate('/')}
                    style={{ height: '50px' }}
                    className="ml-[400px] pt-14 text-6xl font-serif cursor-pointer text-black select-none"
                >
                    StepCity
                </h1>

                <span className="h-32 w-1 mt-5 ml-14 bg-black/80 block"></span>

                <div className="relative flex flex-col items-start">
                    <div className="flex items-center h-12 w-[450px] ml-14 mt-[70px] border-2 border-black rounded-sm bg-neutral-100 px-3">
                        <span className="text-gray-700 mr-2 cursor-pointer">
                            <SearchIcon />
                        </span>
                        <input
                            type="search"
                            className="bg-transparent outline-none flex-1 text-black placeholder-gray-700 placeholder:select-none"
                            placeholder="Aradığınız ürünü giriniz."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {isSearching && (
                        <div className="absolute top-[130px] left-14 w-[450px] bg-white shadow-lg border border-black rounded max-h-64 overflow-y-auto z-[9999]">
                            <div className="p-2 text-center">Yükleniyor...</div>
                        </div>
                    )}

                    {searchTerm && searchResults.length > 0 && !isSearching && (
                        <div className="absolute top-[130px] left-14 w-[450px] bg-white shadow-lg border border-black rounded max-h-[400px] overflow-y-auto z-[9999]">
                            {searchResults.map((item, i) => (
                                <Link
                                    key={i}
                                    to={`/${determineCategory(item.model)}/${item.id}-${slugify(item.brand, item.model)}`}
                                    className="p-1  cursor-pointer"
                                    onClick={handleProductClick}
                                >
                                    <div className='flex '>
                                        <img className='h-14 w-14' src={item.image1} alt={item.model} />
                                        <div>
                                            <span className="text-md font-bold">{item.brand}</span>
                                            <span className="font-semibold ml-1">{item.model}</span>
                                            <p className="text-md font-semibold text-gray-900 ">{item.price}₺</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                <div
                    onClick={() => navigate('/sepetim')}
                    className="h-12 w-32 mt-[70px] ml-10 hover:bg-neutral-300 duration-300 border-2 border-black rounded-sm flex items-center cursor-pointer select-none relative"
                >
                    <div className="relative">
                        <LocalGroceryStoreOutlinedIcon style={{ width: "30px", height: "30px" }} className="ml-4" />

                        {cartItems.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                                {cartItems.length}
                            </span>
                        )}
                    </div>

                    <h1 className="ml-1 ">Sepetim</h1>
                </div>


            </div>

            <div className='flex justify-center h-11 bg-black text-white text-2xl space-x-3'>
                <h1 onClick={() => navigate('/Kadın-Ayakkabı')} className='cursor-pointer mt-0.5 hover:text-neutral-400 duration-200'>Kadın</h1>
                <span className='h-7 w-0.5 mt-1.5 bg-white block '></span>
                <h1 onClick={() => navigate('/Erkek-Ayakkabı')} className='cursor-pointer mt-0.5 hover:text-neutral-400 duration-200'>Erkek</h1>
                <span className='h-7 w-0.5 mt-1.5 bg-white block'></span>
                <h1 onClick={() => navigate('/Giyim')} className='cursor-pointer mt-0.5 hover:text-neutral-400 duration-200'>Giyim</h1>
            </div>

        </header>
    );
}

export default Header;
