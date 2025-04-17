import React, { useState } from 'react'
import logo from '../İmages/logo.png';
import Adidas from '../İmages/adidas.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import { useNavigate } from 'react-router-dom';

function Home() {

    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();

    const shoes = [
        { id: 1, image: 'https://cdn.shopier.app/pictures_large/stepcity_b0c4c8378f1bf57d5320b0475abf170b.jpeg', link: '/Erkek-Ayakkabı/8-nike-dunk-low-retro-erkek-sneaker' },
        { id: 2, image: 'https://cdn.shopier.app/pictures_large/stepcity_428d88ec4361a4845fb41300b28284f5.jpeg', link: '/Kadın-Ayakkabı/12-adidas-handball-spezial-kadn-sneaker' },
        { id: 3, image: 'https://cdn.shopier.app/pictures_large/stepcity_7f83f3fdaf99de7fa66a1fed69567b77.jpeg', link: '/Kadın-Ayakkabı/25-new-balance-530-kadn-sneaker' },
        { id: 4, image: 'https://cdn.shopier.app/pictures_large/stepcity_55ef3b9a370ce6ad5c9ceaa5cd369e46.jpeg', link: '/Kadın-Ayakkabı/32-christian-dior-kadn-sneaker' },
        { id: 5, image: 'https://cdn.shopier.app/pictures_large/stepcity_962bc9523bd322a16703f7d693400e84.jpeg', link: '/Kadın-Ayakkabı/31-golden-goose-super-star-kadn-sneaker' },
        { id: 6, image: 'https://cdn.shopier.app/pictures_large/stepcity_ba3047550391c3459f14815bdb9e6c4d.jpeg', link: '/Kadın-Ayakkabı/4-new-balance-9060-kadn-sneaker' },
        { id: 7, image: 'https://cdn.shopier.app/pictures_large/stepcity_3da1030c40045a0acc0f1266047c6e69.jpeg', link: '/Erkek-Ayakkabı/4-nike-air-force-1-erkek-sneaker' },
        { id: 8, image: 'https://cdn.shopier.app/pictures_large/stepcity_d75ae8b8a7c5648c7e77416c0a356062.jpeg', link: '/Erkek-Ayakkabı/6-nike--air-force-1-07-petrol-yeili-erkek-sneaker' },
        { id: 9, image: 'https://cdn.shopier.app/pictures_large/stepcity_7fd76f0ece7092d6cec9877f6db3d2b0.jpeg', link: '/Erkek-Ayakkabı/7-adidas-handball-spezial-erkek-sneaker' },
        { id: 10, image: 'https://cdn.shopier.app/pictures_large/stepcity_122e103f44e5ed6f7018fda14e05cba9.jpeg', link: '/Erkek-Ayakkabı/14-ea7-emporio-armani-erkek-sneaker' },
        { id: 11, image: 'https://cdn.shopier.app/pictures_large/stepcity_6a332c268ccdceca2b69a213540cb5e7.jpeg', link: '/Erkek-Ayakkabı/17-dolcegabbana-erkek-sneaker' },
        { id: 12, image: 'https://cdn.shopier.app/pictures_large/stepcity_4bf5cb057a02561ea000b845b998f78a.jpeg', link: '/Erkek-Ayakkabı/24-louis-vuitton-trainer-sneaker-blue-erkek-sneaker' },
    ];

    const shoesPerPage = 4;

    const displayedShoes = shoes.slice(currentPage * shoesPerPage, (currentPage + 1) * shoesPerPage);

    const nextPage = () => {
        if ((currentPage + 1) * shoesPerPage < shoes.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='bg-white'>

            <div onClick={() => navigate('erkek-ayakkabı?brand=Nike')} className='h-[960px] w-full relative cursor-pointer z-40'>

                <img className='h-[960px] w-full relative select-none' src="https://cdn.pixabay.com/photo/2020/05/03/19/09/nike-5126389_1280.jpg" alt="NikeBanner" />

                <img className='absolute bottom-[400px] right-[200px] h-44 w-44 rounded-full select-none' src={logo} alt="StepCity" />

                <h1 style={{ width: "340px" }} className='absolute bottom-[400px] left-[250px] text-white font-serif font-bold text-7xl select-none'>Farklı ol, şimdi keşfet!</h1>

                <button className='absolute h-[50px] w-52 bg-blue-700 hover:bg-blue-900 duration-300 bottom-[325px] left-[255px] font-serif text-lg text-white rounded-sm'>Koleksiyona göz at!<ArrowRightAltIcon className='ml-2 text-white' style={{ width: "30px", height: "30px" }} /></button>

            </div>


            <div className='bg-white'>
                <h1 className="font-bold text-4xl mt-20 ml-[205px]">Öne Çıkan Ürünler</h1>
                <span className="h-1 w-[140px] ml-[210px] mt-2 rounded-sm bg-black block"></span>

                <div className="flex overflow-x-auto mt-10 ml-[155px]">
                    {displayedShoes.map((shoe) => (
                        <div key={shoe.id} className="flex-none">
                            {shoe.link ? (
                                <a href={shoe.link}>
                                    <div className="h-[400px] w-[400px] bg-white select-none cursor-pointer relative">
                                        <img src={shoe.image} alt={`Shoe ${shoe.id}`} />
                                        <span className="absolute w-[301px] ml-12 inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                            Yakından İncele
                                        </span>
                                    </div>
                                </a>
                            ) : (
                                <div className="h-[400px] w-[400px] bg-white select-none cursor-pointer">
                                    <img src={shoe.image} alt={`Shoe ${shoe.id}`} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>



                <div className="flex justify-center mt-10">
                    <button
                        onClick={prevPage}
                        className="text-4xl text-gray-600 mr-4 disabled:text-gray-400"
                        disabled={currentPage === 0}
                    >
                        ←
                    </button>
                    <button
                        onClick={nextPage}
                        className="text-4xl text-gray-600 disabled:text-gray-400"
                        disabled={(currentPage + 1) * shoesPerPage >= shoes.length}
                    >
                        →
                    </button>
                </div>
            </div>

            <div className='flex select-none  text-white/90 '>

                <div className="relative w-[600px] h-[800px] mt-20 ml-[315px] group overflow-hidden rounded-md shadow-xl">
                    <img
                        src='https://i.pinimg.com/736x/e4/1c/1d/e41c1df1326c559c5a5d8399acf5bb6b.jpg'
                        alt='Man'
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                        onClick={() => navigate("/kadın-ayakkabı")}
                    />

                    <h1 className='absolute top-7 left-10 text-3xl font-bold'>Kadın</h1>
                    <h1 className='absolute top-[65px] left-10 text-lg font-bold'>Yeni Sezon Kadın Ürünleri</h1>
                    <h1 className='absolute top-[93px] left-10 text-sm font-bold'>Koleksiyonu İncele <ArrowRightAltIcon className='ml-1' style={{ width: "30px", height: "30px" }} /></h1>
                </div>

                <div className="relative w-[600px] h-[800px] mt-20 ml-20 group overflow-hidden rounded-md shadow-xl">

                    <img
                        src='https://i.pinimg.com/736x/be/55/4a/be554a91b6e237299be009d91c209061.jpg'
                        alt='Woman'
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                        onClick={() => navigate("/Erkek-Ayakkabı")}
                    />

                    <h1 className='absolute top-7 left-10 text-3xl font-bold'>Erkek</h1>
                    <h1 className='absolute top-[65px] left-10 text-lg font-bold'>Yeni Sezon Erkek Ürünleri</h1>
                    <h1 className='absolute top-[93px] left-10 text-sm font-bold'>Koleksiyonu İncele <ArrowRightAltIcon className='ml-1' style={{ width: "30px", height: "30px" }} /></h1>


                </div>

            </div>

            <div className='mt-32 flex select-none z-40 cursor-pointer'>

                <div onClick={() => navigate('/erkek-ayakkabı?brand=Nike')} className='bg-white border-2 border-black h-48 w-48 ml-11 rounded-full z-50 hover:scale-105 duration-300'>

                    <img className='rounded-full mt-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVqds5XpuvICAg9dSoXuxTrycPHH-CkYLfg&s" alt="Nike" />

                </div>

                <div onClick={() => navigate('/kadın-ayakkabı?brand=Adidas')} className='bg-white border-2 border-black h-48 w-48 ml-10 rounded-full z-50 hover:scale-105 duration-300'>

                    <img className='rounded-full  mt-5 pl-1 ' src="https://i.pinimg.com/736x/3f/0c/76/3f0c767a3d4d448ffb58152f7c199842.jpg" alt="Adidas" />

                </div>

                <div onClick={() => navigate('/kadın-ayakkabı?brand=Puma')} className='bg-white border-2 border-black h-48 w-48 ml-10 rounded-full z-50 hover:scale-105 duration-300'>

                    <img className='rounded-full mt-1 ml-5 h-40 w-40 ' src="https://www.designenlassen.de/blog/wp-content/uploads/2024/03/Puma-585x585.png" alt="Puma" />

                </div>



                <div onClick={() => navigate('/erkek-ayakkabı?brand=New+Balance')} className='bg-white border-2 border-black h-48 w-48 ml-10 rounded-full z-50 hover:scale-105 duration-300'>

                    <img className='rounded-full mt-3 ml-3 h-40 w-40' src="https://images.seeklogo.com/logo-png/9/1/new-balance-logo-png_seeklogo-98723.png" alt="NewBalence" />

                </div>

                <div onClick={() => navigate('/kadın-ayakkabı?brand=Lacoste')} className='bg-white border-2 border-black h-48 w-48 ml-10 rounded-full z-50 hover:scale-105 duration-300'>

                    <img className=' w-36 mt-12 ml-6 ' src="https://upload.wikimedia.org/wikinews/en/thumb/4/43/Lacoste_logo.svg/2560px-Lacoste_logo.svg.png" alt="Lacoste" />

                </div>

                <div onClick={() => navigate('/kadın-ayakkabı?brand=Golden+Goose')} className='bg-white border-2 border-black h-48 w-48 ml-10 rounded-full z-50 hover:scale-105 duration-300'>

                    <img className='rounded-full' src="https://i.pinimg.com/736x/53/14/87/531487f5c990664e1b3ae14f35e26131.jpg" alt="GoldenGoose" />

                </div>

                <div onClick={() => navigate('/Erkek-Ayakkabı?brand=Dolce%26Gabbana')} className='bg-white border-2 border-black h-48 w-48 ml-10 rounded-full z-50 hover:scale-105 duration-300'>

                    <img className='h-40 w-40 rounded-full mt-5 ml-3.5 ' src="https://toplist.info/images/800px/dolce-amp-gabbana-dampg-769123.jpg" alt="Vans" />

                </div>

                <div onClick={() => navigate('/erkek-ayakkabı?brand=EA7')} className='bg-white border-2 border-black h-48 w-48 ml-10 rounded-full z-40 hover:scale-105 duration-300'>

                    <img className='rounded-full mt-3 ml-4 w-40 ' src="https://brandlogos.net/wp-content/uploads/2022/03/ea7_emporio_armani-logo-brandlogos.net_.png" alt="EA7" />

                </div>

            </div>

            <div className='-mt-72 '>

                <div className='relative'>

                    <img className='rotate-90 ml-[500px] h-[1600px] w-[750px] rounded-sm select-none' src="https://i.pinimg.com/736x/f1/04/66/f1046620a147d374fa8b7801f08ed8d1.jpg" alt="AdidasBanner" />

                    <img onClick={() => navigate('/kadın-ayakkabı?brand=Adidas')} className='absolute h-[750px] top-[425px] right-[230px] rounded-sm select-none cursor-pointer' src="https://i.pinimg.com/736x/94/a9/fa/94a9facc6e8732cbc06ff9c2431fa2bf.jpg" alt="Spezial" />

                    <div className='cursor-pointer'>

                        <img className='absolute top-[440px] left-[120px] h-44 w-44 rounded-full select-none' src={Adidas} alt="Adidas" />
                        <h1 style={{ width: "600px" }} className='absolute top-[610px] left-[147px] font-serif text-3xl  text-amber-300'>adidas Originals , Geçmişin ikonik tarzı, geleceğin cesur adımlarıyla buluşuyor!</h1>

                        <div className='flex'>

                            <div onClick={() => navigate('/Kadın-Ayakkabı/15-adidas-handball-spezial-kadn-sneaker')} className="relative w-72 h-[350px] -mt-[850px] ml-[100px]">
                                <img
                                    className="w-[400px] h-full object-cover rounded-sm select-none "
                                    src="https://cdn.shopier.app/pictures_large/stepcity_e042b913ff6babc52382141156f098f0.jpeg"
                                    alt="Spezial"
                                />
                                <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    Yakından İncele
                                </span>
                            </div>

                            <div onClick={() => navigate('/Kadın-Ayakkabı/7-adidas-kadn-sneaker')} className="relative w-72 h-[350px] -mt-[850px] ml-10">
                                <img
                                    className="w-full h-full object-cover rounded-sm select-none"
                                    src="https://cdn.shopier.app/pictures_large/stepcity_c5ca9e1d4adf1ef0d3afa021a18d71a8.jpeg"
                                    alt="Flow"
                                />
                                <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    Yakından İncele
                                </span>
                            </div>

                            <div onClick={() => navigate('/Kadın-Ayakkabı/8-adidas-superstar-kadn-sneaker')} className="relative w-72 h-[350px] -mt-[850px] ml-10">
                                <img
                                    className="w-full h-full object-cover rounded-sm select-none"
                                    src="https://cdn.shopier.app/pictures_large/stepcity_874f97bf12b5d8cf04b461fb54ac4e0f.jpeg"
                                    alt="Superstar"

                                />
                                <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    Yakından İncele
                                </span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <div className="w-full overflow-hidden bg-gray-900 text-white py-10 -mt-[330px]">
                <div className="flex whitespace-nowrap animate-marquee text-4xl font-serif">
                    <span className="mx-4">Yolunuzu şıklıkla keşfedin, her adımda rahatlıkla ilerleyin!<StarBorderPurple500Icon className='ml-6 mb-1' style={{ width: "30px", height: "30px" }} /></span>
                    <span className="mx-4">Adımlarınızı tarz ve konforla buluşturun!<StarBorderPurple500Icon className='ml-6 mb-1' style={{ width: "30px", height: "30px" }} /></span>
                    <span className="mx-4">Her adımda kalite, her yürüyüşte şıklık!<StarBorderPurple500Icon className='ml-6 mb-1' style={{ width: "30px", height: "30px" }} /></span>
                    <span className="mx-4">Tarzınızı tamamlayan ayakkabılar, en iyi fiyatlarla burada!<StarBorderPurple500Icon className='ml-6 mb-1' style={{ width: "30px", height: "30px" }} /></span>
                    <span className="mx-4">Şıklık ve rahatlık, her adımda sizinle<StarBorderPurple500Icon className='ml-6 mb-1' style={{ width: "30px", height: "30px" }} /></span>
                </div>
            </div>


            <div className='-mt-[330px] '>

                <div className='relative'>

                    <img className='rotate-90 ml-[500px] h-[1600px] w-[750px] select-none' src="https://i.pinimg.com/736x/dc/8d/40/dc8d400a6ce5b0e88413d90de9f51545.jpg" alt="NikeBanner" />

                    <img onClick={() => navigate('/erkek-ayakkabı?brand=Nike')} className='absolute h-[750px] w-[560px] bottom-[425px] left-0 ml-[75px] select-none cursor-pointer' src="https://i.pinimg.com/736x/22/71/6a/22716a097468b8f70562d1c75bb79a98.jpg" alt="nike" />

                    <p className="absolute bottom-[980px] left-[750px] text-[100px] text-orange-900 font-serif tracking-wide select-none">NIKE</p>
                    <p style={{ width: "700px" }} className='absolute bottom-[930px] left-[750px] font-serif text-orange-800 text-3xl'>Her adımın bir hikâyesi var. Nike Air Force ile geçmişten geleceğe uzanan bir efsaneyi yaşa.</p>
                </div>

                <div className='flex cursor-pointer'>

                    <div onClick={() => navigate('/Erkek-Ayakkabı/5-nike-dunk-low-panda-erkek')} className="relative w-72 h-[350px] -mt-[850px] ml-[680px]">
                        <img
                            className="w-full h-full object-cover rounded-sm select-none"
                            src="https://cdn.shopier.app/pictures_large/stepcity_7c80d95212ea1f999a660cf98deb687e.jpeg"
                            alt="Panda"
                        />
                        <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                            Yakından İncele
                        </span>
                    </div>

                    <div onClick={() => navigate('/Erkek-Ayakkabı/4-nike-air-force-1-erkek')} className="relative w-72 h-[350px] -mt-[850px] ml-10">
                        <img
                            className="w-full h-full object-cover rounded-sm select-none"
                            src="https://cdn.shopier.app/pictures_large/stepcity_3da1030c40045a0acc0f1266047c6e69.jpeg"
                            alt="AirForce"
                        />
                        <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                            Yakından İncele
                        </span>
                    </div>

                    <div onClick={() => navigate('/Erkek-Ayakkabı/64-nike-dunk-low-triple-white-erkek-sneaker')} className="relative w-72 h-[350px] -mt-[850px] ml-10 select-none">
                        <img
                            className="w-full h-full object-cover rounded-sm"
                            src="https://cdn.shopier.app/pictures_large/stepcity_c5d53588536e7844201f3d636e6442c4.jpeg"
                            alt="Campus"
                        />
                        <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                            Yakından İncele
                        </span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home
