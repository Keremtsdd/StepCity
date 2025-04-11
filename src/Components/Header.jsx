import React, { useState, useEffect } from 'react';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }

            if (window.scrollY < lastScrollY) {
                setIsVisible(true);
            } else if (window.scrollY > lastScrollY && window.scrollY > 50) {
                setIsVisible(false);
            }

            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

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

                <div className="flex items-center h-12 w-[450px] ml-14 mt-[70px] border-2 border-black rounded-sm bg-neutral-100 px-3">
                    <span className="text-gray-700 mr-2 cursor-pointer">
                        <SearchIcon />
                    </span>
                    <input
                        type="search"
                        className="bg-transparent outline-none flex-1 text-black placeholder-gray-700 placeholder:select-none"
                        placeholder="Aradığınız ürünü giriniz."
                    />
                </div>

                <div onClick={() => navigate('/sepetim')} className="h-12 w-32 mt-[70px] ml-10 hover:bg-neutral-300 duration-300 border-2 border-black rounded-md flex cursor-pointer select-none">
                    <LocalGroceryStoreOutlinedIcon className=" mt-3 ml-4" /><div className='cursor-pointer z-50'>
                        <div onClick={() => navigate('/sepetim')} className='absolute top-[50px] right-[80px] text-white'><LocalGroceryStoreOutlinedIcon style={{ width: "30px", height: "30px" }} /></div>
                    </div>
                    <h1 className="mt-2.5 ml-1">Sepetim</h1>
                </div>


            </div>

            <div className="h-12 w-full bg-black/95 flex justify-center space-x-4 border-b-2 border-black/60 select-none ">
                <h1
                    onClick={() => navigate('/kadın-ayakkabı')}
                    className="text-2xl font-serif mt-2 cursor-pointer text-white hover:text-neutral-400 duration-300"
                >
                    Kadın
                </h1>
                <span className="h-7 w-0.5 mt-2.5 bg-black block"></span>
                <h1
                    onClick={() => navigate('/erkek-ayakkabı')}
                    className="text-2xl font-serif mt-2 cursor-pointer text-white hover:text-neutral-400 duration-300"
                >
                    Erkek
                </h1>
                <span className="h-7 w-0.5 mt-2.5 bg-black block"></span>
                <h1
                    onClick={() => navigate('/giyim')}
                    className="text-2xl font-serif mt-2 cursor-pointer flex text-white hover:text-neutral-400 duration-300"
                >
                    Giyim
                </h1>
            </div>

        </header>
    );
}

export default Header;
