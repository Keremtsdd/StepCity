import React, { useState } from 'react'
import logo from '../İmages/logo.png';
import Adidas from '../İmages/adidas.png';
import SpezialBlack from '../İmages/SpezialBlack.png';
import SpezialRed from '../İmages/SpezialRed.png';
import SambaWhite from '../İmages/SambaWhite.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import { useNavigate } from 'react-router-dom';

function Home() {

    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();

    const shoes = [
        { id: 1, name: 'Nike Court Legacy Lift', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8604a6d6-c9c0-49e7-a485-1cc746235807/NIKE+COURT+VISION+LO.png', price: '₺3000', description: 'Kadın ayakkabısı' },
        { id: 2, name: 'Nike Air Force 1', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8604a6d6-c9c0-49e7-a485-1cc746235807/NIKE+COURT+VISION+LO.png', price: '₺3500', description: 'Erkek ayakkabısı' },
        { id: 3, name: 'Adidas Ultraboost', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8604a6d6-c9c0-49e7-a485-1cc746235807/NIKE+COURT+VISION+LO.png', price: '₺4000', description: 'Unisex ayakkabısı' },
        { id: 4, name: 'Puma RS-X', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8604a6d6-c9c0-49e7-a485-1cc746235807/NIKE+COURT+VISION+LO.png', price: '₺3200', description: 'Erkek ayakkabısı' },
        { id: 5, name: 'Converse Chuck Taylor', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8604a6d6-c9c0-49e7-a485-1cc746235807/NIKE+COURT+VISION+LO.png', price: '₺1500', description: 'Kadın ayakkabısı' },
        { id: 6, name: 'Nike React Element', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8604a6d6-c9c0-49e7-a485-1cc746235807/NIKE+COURT+VISION+LO.png', price: '₺3600', description: 'Kadın ayakkabısı' },
        { id: 7, name: 'Adidas NMD', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8604a6d6-c9c0-49e7-a485-1cc746235807/NIKE+COURT+VISION+LO.png', price: '₺3800', description: 'Unisex ayakkabısı' },
        { id: 8, name: 'Reebok Classic', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8604a6d6-c9c0-49e7-a485-1cc746235807/NIKE+COURT+VISION+LO.png', price: '₺2800', description: 'Kadın ayakkabısı' },
        { id: 9, name: 'New Balance 990', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8604a6d6-c9c0-49e7-a485-1cc746235807/NIKE+COURT+VISION+LO.png', price: '₺4200', description: 'Erkek ayakkabısı' },
        { id: 10, name: 'Vans Old Skool', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8604a6d6-c9c0-49e7-a485-1cc746235807/NIKE+COURT+VISION+LO.png', price: '₺2500', description: 'Unisex ayakkabısı' },
        { id: 11, name: 'Saucony Jazz', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8604a6d6-c9c0-49e7-a485-1cc746235807/NIKE+COURT+VISION+LO.png', price: '₺3300', description: 'Kadın ayakkabısı' },
        { id: 12, name: 'Nike Zoom', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8604a6d6-c9c0-49e7-a485-1cc746235807/NIKE+COURT+VISION+LO.png', price: '₺3900', description: 'Unisex ayakkabısı' },
    ];

    const shoesPerPage = 5;

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
        <div className='bg-neutral-100'>

            <div onClick={() => navigate('erkek-ayakkabı?brand=Nike')} className='h-[960px] w-full relative cursor-pointer'>

                <img className='h-[960px] w-full relative select-none' src="https://cdn.pixabay.com/photo/2020/05/03/19/09/nike-5126389_1280.jpg" alt="NikeBanner" />

                <img className='absolute bottom-[400px] right-[200px] h-44 w-44 rounded-full select-none' src={logo} alt="StepCity" />

                <div className='cursor-pointer'>

                    <div className='absolute top-[50px] right-[80px] text-white'><LocalGroceryStoreOutlinedIcon style={{ width: "30px", height: "30px" }} /></div>

                </div>

                <h1 style={{ width: "340px" }} className='absolute bottom-[400px] left-[250px] text-white font-serif font-bold text-7xl select-none'>Farklı ol, şimdi keşfet!</h1>

                <button className='absolute h-[50px] w-52 bg-blue-700 hover:bg-blue-900 duration-300 bottom-[325px] left-[255px] font-serif text-lg text-white rounded-sm'>Koleksiyona göz at!<ArrowRightAltIcon className='ml-2 text-white' style={{ width: "30px", height: "30px" }} /></button>

            </div>


            <div>
                <h1 className="font-bold text-4xl mt-20 ml-[100px]">Öne Çıkan Ürünler</h1>
                <span className="h-1 w-[140px] ml-[103px] mt-2 rounded-sm bg-black block"></span>

                <div className="flex overflow-x-auto mt-10 ">
                    {displayedShoes.map((shoe) => (
                        <div key={shoe.id} className="flex-none ml-12">
                            <div className="h-80 w-80 bg-white shadow-2xl select-none cursor-pointer">
                                <img src={shoe.image} alt={shoe.name} />
                            </div>
                            <h1 className="ml-[10px] mt-1 font-bold">{shoe.name}</h1>
                            <h1 className="ml-[10px] text-xs -mt-1">{shoe.description}</h1>
                            <h1 className="ml-[10px] mt-1 text-lg">{shoe.price}</h1>
                        </div>
                    ))}
                </div>


                <div className="flex justify-center mt-6">
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

                <div onClick={() => navigate('/erkek-ayakkabı?brand=Nike')} className='bg-white border-2 border-black h-48 w-48 ml-11 rounded-full z-50'>

                    <img className='rounded-full mt-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVqds5XpuvICAg9dSoXuxTrycPHH-CkYLfg&s" alt="Nike" />

                </div>

                <div onClick={() => navigate('/kadın-ayakkabı?brand=Adidas')} className='bg-white border-2 border-black h-48 w-48 ml-10 rounded-full z-50'>

                    <img className='rounded-full  mt-5 pl-1 ' src="https://i.pinimg.com/736x/3f/0c/76/3f0c767a3d4d448ffb58152f7c199842.jpg" alt="Adidas" />

                </div>

                <div className='bg-white border-2 border-black h-48 w-48 ml-10 rounded-full z-50'>

                    <img className='rounded-full mt-1 ml-5 h-40 w-40 ' src="https://www.designenlassen.de/blog/wp-content/uploads/2024/03/Puma-585x585.png" alt="Puma" />

                </div>

                <div className='bg-white border-2 border-black h-48 w-48 ml-10 rounded-full z-50'>

                    <img className='rounded-full mt-11 ' src="https://1000logos.net/wp-content/uploads/2017/06/Vans-Logo-1966.jpg" alt="Vans" />

                </div>

                <div onClick={() => navigate('/erkek-ayakkabı?brand=New+Balance')} className='bg-white border-2 border-black h-48 w-48 ml-10 rounded-full z-50'>

                    <img className='rounded-full mt-3 ml-3 h-40 w-40' src="https://images.seeklogo.com/logo-png/9/1/new-balance-logo-png_seeklogo-98723.png" alt="NewBalence" />

                </div>

                <div onClick={() => navigate('/kadın-ayakkabı?brand=Lacoste')} className='bg-white border-2 border-black h-48 w-48 ml-10 rounded-full z-50'>

                    <img className=' w-36 mt-12 ml-6 ' src="https://upload.wikimedia.org/wikinews/en/thumb/4/43/Lacoste_logo.svg/2560px-Lacoste_logo.svg.png" alt="Lacoste" />

                </div>

                <div onClick={() => navigate('/kadın-ayakkabı?brand=Golden+Goose')} className='bg-white border-2 border-black h-48 w-48 ml-10 rounded-full z-50'>

                    <img className='rounded-full' src="https://i.pinimg.com/736x/53/14/87/531487f5c990664e1b3ae14f35e26131.jpg" alt="GoldenGoose" />

                </div>

                <div onClick={() => navigate('/erkek-ayakkabı?brand=EA7')} className='bg-white border-2 border-black h-48 w-48 ml-10 rounded-full z-40'>

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

                            <div onClick={() => navigate('/kadın-ayakkabı/6-adidas-handball-spezial-sneaker')} className="relative w-72 h-[350px] -mt-[850px] ml-[100px]">
                                <img
                                    className="w-full h-full object-cover rounded-sm select-none "
                                    src={SpezialBlack}
                                    alt="Spezial"
                                />
                                <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    Yakından İncele
                                </span>
                            </div>

                            <div onClick={() => navigate('/kadın-ayakkabı/9-adidas-handball-spezial-sneaker')} className="relative w-72 h-[350px] -mt-[850px] ml-10">
                                <img
                                    className="w-full h-full object-cover rounded-sm select-none"
                                    src={SpezialRed}
                                    alt="Spezial"
                                />
                                <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    Yakından İncele
                                </span>
                            </div>

                            <div onClick={() => navigate('/kadın-ayakkabı/12-adidas--samba-sneaker')} className="relative w-72 h-[350px] -mt-[850px] ml-10">
                                <img
                                    className="w-full h-full object-cover rounded-sm select-none"
                                    src={SambaWhite}
                                    alt="Samba"

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

                    <div onClick={() => navigate('/erkek-ayakkabı/1-nike-dunk-low-panda')} className="relative w-72 h-[350px] -mt-[850px] ml-[680px]">
                        <img
                            className="w-full h-full object-cover rounded-sm select-none"
                            src="https://i.pinimg.com/736x/1c/4d/3f/1c4d3f5c81cb88341eb98b01f9aee838.jpg"
                            alt="Panda"
                        />
                        <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                            Yakından İncele
                        </span>
                    </div>

                    <div onClick={() => navigate('/erkek-ayakkabı/47-nike-air-force-1')} className="relative w-72 h-[350px] -mt-[850px] ml-10">
                        <img
                            className="w-full h-full object-cover rounded-sm select-none"
                            src="https://i.pinimg.com/736x/b6/9f/13/b69f130c212424c343ebae91e8e1bb88.jpg"
                            alt="AirForce"
                        />
                        <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                            Yakından İncele
                        </span>
                    </div>

                    <div onClick={() => navigate('/erkek-ayakkabı/45-nike-dunk-low-triple-white')} className="relative w-72 h-[350px] -mt-[850px] ml-10 select-none">
                        <img
                            className="w-full h-full object-cover rounded-sm"
                            src="https://sparkystore.nl/cdn/shop/files/nike-sb-dunk-low-pro-white-fj1674-100-release-date_9742e1da-89ba-4d10-940f-cf90d3c0f619_1445x.webp?v=1725270892"
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
