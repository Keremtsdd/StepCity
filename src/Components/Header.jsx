import React, { useState, useEffect } from 'react';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

function Header() {
    const { cartItems, isCartReady } = useCart();
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
            <div className="w-full bg-white/95 flex flex-col lg:flex-row items-center justify-center border-b-4 border-black/90 px-4 py-4 space-y-4 lg:space-y-0 lg:space-x-8">

                <div className="flex items-center space-x-1 cursor-pointer" onClick={() => navigate('/')}>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl lg:mt-10 lg:mb-10 lg:-ml-[100px] font-serif text-black select-none">StepCity</h1>
                    <h1 className="text-lg sm:text-2xl mt-3 font-semibold text-black select-none">.tr</h1>

                </div>

                <span className="h-32 w-1 rounded-md bg-black sm:block hidden"></span>

                <div className="w-[350px] lg:w-[600px] flex items-center gap-3">
                    <div className="relative flex flex-1 lg:h-12 lg:mt-5 items-center border-2 border-black rounded bg-neutral-100 px-3 py-2">
                        <SearchIcon className="text-gray-700 mr-2" />
                        <input
                            type="search"
                            className="bg-transparent outline-none w-full text-black placeholder-gray-700"
                            placeholder="Aradığınız ürünü giriniz."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        {searchTerm && (isSearching || searchResults.length > 0) && (
                            <div className="absolute top-full left-0 w-[350px] lg:w-full bg-white shadow-lg border border-black rounded mt-1 z-[9999] max-h-64 overflow-y-auto">
                                {isSearching ? (
                                    <div className="p-2 text-center">Yükleniyor...</div>
                                ) : (
                                    searchResults.map((item, i) => (
                                        <Link
                                            key={i}
                                            to={`/${determineCategory(item.model)}/${item.id}-${slugify(item.brand, item.model)}`}
                                            className="block p-2 hover:bg-gray-100"
                                            onClick={handleProductClick}
                                        >
                                            <div className="flex items-center space-x-2">
                                                <img className="h-12 w-12 object-cover" src={item.image1} alt={item.model} />
                                                <div>
                                                    <span className="block font-bold">{item.brand}</span>
                                                    <span className="block">{item.model}</span>
                                                    <p className="text-gray-900 font-semibold">{item.price}₺</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                )}
                            </div>
                        )}
                    </div>

                    <div
                        onClick={() => navigate('/sepetim')}
                        className="flex items-center border-2 lg:mt-5 lg:h-12 border-black rounded px-2 py-2 hover:bg-neutral-300 duration-300 cursor-pointer select-none relative h-11 w-[100px] lg:w-[120px]"
                    >
                        <div className="relative">
                            <LocalGroceryStoreOutlinedIcon style={{ width: "30px", height: "30px" }} />
                            {isCartReady && cartItems.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                                    {cartItems.length}
                                </span>
                            )}
                        </div>
                        <h1 className="ml-0 lg:ml-2 text-sm sm:text-base">Sepetim</h1>
                    </div>
                </div>

            </div>

            <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 bg-black text-white lg:text-2xl sm:text-xl py-2 px-4 select-none">
                <h1 onClick={() => navigate('/Kadın-Ayakkabı')} className="cursor-pointer hover:text-neutral-400 duration-200 mb-1">Kadın</h1>
                <span className="hidden sm:block h-8 w-0.5 bg-white" />
                <h1 onClick={() => navigate('/Erkek-Ayakkabı')} className="cursor-pointer hover:text-neutral-400 duration-200">Erkek</h1>
                <span className="hidden sm:block h-8 w-0.5 bg-white" />
                <h1 onClick={() => navigate('/Giyim')} className="cursor-pointer hover:text-neutral-400 duration-200">Giyim</h1>
            </div>
        </header>
    );
}

export default Header;
