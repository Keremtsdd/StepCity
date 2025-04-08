import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import SearchIcon from '@mui/icons-material/Search';

function Favorites() {
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
        <>

            <div>

                <div
                    className={`${isSticky ? 'fixed top-0 z-50 bg-white shadow-lg' : 'relative'
                        } w-full h-[170px] bg-white/50 flex border-b-2 border-black/70 transition-all duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
                        }`}
                >
                    <h1
                        onClick={() => navigate('/')}
                        style={{ height: '50px' }}
                        className="ml-[400px] pt-14 text-6xl font-serif cursor-pointer text-black select-none"
                    >
                        StepCity
                    </h1>

                    <span className="h-32 w-1 mt-5 ml-14 bg-black/90 block"></span>

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

                    <div
                        className="h-12 w-36 mt-[70px] ml-7 hover:bg-neutral-300 duration-300 border-2 border-black rounded-md flex cursor-pointer select-none"
                        onClick={() => navigate('/favoriler')}
                    >
                        <FavoriteBorderOutlinedIcon className=" mt-3 ml-4" />{' '}
                        <h1 className="mt-2.5 ml-1">Favorilerim</h1>
                    </div>

                    <div className="h-12 w-32 mt-[70px] ml-4 hover:bg-neutral-300 duration-300 border-2 border-black rounded-md flex cursor-pointer select-none">
                        <LocalGroceryStoreOutlinedIcon className=" mt-3 ml-4" />{' '}
                        <h1 className="mt-2.5 ml-1">Sepetim</h1>
                    </div>


                </div>

                <div className="h-12 w-full bg-black/95 flex justify-center space-x-4 border-b-2 border-black/60 select-none ">

                    <h1 className='text-white text-center text-3xl mt-1.5 font-serif'>Favorilerim</h1>

                </div>

            </div>




        </>
    )
}

export default Favorites
