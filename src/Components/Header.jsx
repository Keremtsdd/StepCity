import React, { useState, useEffect } from 'react';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

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
                    item.brand && typeof item.brand === 'string' && item.brand.toLowerCase().includes(searchTerm.toLowerCase())
                );

                setSearchResults(filtered.slice(0, 5)); // İlk 5 sonucu göster
                setIsSearching(false);
            } catch (error) {
                console.error('Arama hatası:', error);
                setIsSearching(false);
            }
        };

        if (searchTerm.trim()) {
            const delayDebounce = setTimeout(() => {
                fetchSearchResults();
            }, 300); // 300ms bekleme süresi (debounce)

            return () => clearTimeout(delayDebounce);
        } else {
            setSearchResults([]);
        }
    }, [searchTerm]); // searchTerm değiştiğinde çalışacak

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }

            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const slugify = (brand, model) => {
        const text = `${brand}-${model}`;
        return text
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '');
    };

    return (
        <header>
            <div
                className={`${isSticky ? 'fixed top-0 z-50 bg-white shadow-lg' : 'relative'
                    } w-full h-[170px] bg-white/95 flex border-b-4 border-black/90 transition-all duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
                    }`}
            >
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
                        <div className="absolute top-[130px] left-14 w-[450px] bg-white shadow-lg border border-black rounded z-50 max-h-64 overflow-y-auto">
                            <div className="p-2 text-center">Yükleniyor...</div>
                        </div>
                    )}

                    {searchTerm && searchResults.length > 0 && !isSearching && (
                        <div className="absolute top-[130px] left-14 w-[450px] bg-white shadow-lg border border-black rounded z-10 max-h-[400px] overflow-y-auto">
                            {searchResults.map((item, i) => (
                                <Link
                                    key={i}
                                    to={`/${item.gender === 'male' ? 'Erkek-Ayakkabı' : 'Kadın-Ayakkabı'}/${item.id}-${slugify(item.brand, item.model)}`}
                                    className="p-2 hover:bg-neutral-200 cursor-pointer"
                                >
                                    <div className='flex'>
                                        <img className='h-14 w-14' src={item.image1} alt={item.model} />

                                        <div>
                                            <span className="text-md font-bold">{item.brand}</span>
                                            <span className="font-semibold ml-1">{item.model}</span>
                                            <p className="text-sm text-gray-800 ml-0">{item.price}₺</p>
                                        </div>

                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                <div
                    onClick={() => navigate('/sepetim')}
                    className="h-12 w-32 mt-[70px] ml-10 hover:bg-neutral-300 duration-300 border-2 border-black rounded-sm flex cursor-pointer select-none"
                >
                    <LocalGroceryStoreOutlinedIcon className="mt-3 ml-4" />
                    <h1 className="mt-2.5 ml-1">Sepetim</h1>
                </div>
            </div>


        </header>
    );
}

export default Header;
