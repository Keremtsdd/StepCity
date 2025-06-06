import React, { useState } from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import { useNavigate } from 'react-router-dom';

function Home() {

    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();

    const shoes = [
        { id: 1, image: 'https://cdn.shopier.app/pictures_large/stepcity_27c7639afd03f2bae880c0ba908395c1.jpeg', link: '/Kadın-Ayakkabı/23-nike-air-jordan-1-low-kadn-sneaker' },
        { id: 2, image: 'https://cdn.shopier.app/pictures_large/stepcity_428d88ec4361a4845fb41300b28284f5.jpeg', link: '/Kadın-Ayakkabı/12-adidas-handball-spezial-kadn-sneaker' },
        { id: 3, image: 'https://cdn.shopier.app/pictures_large/stepcity_7f83f3fdaf99de7fa66a1fed69567b77.jpeg', link: '/Kadın-Ayakkabı/25-new-balance-530-kadn-sneaker' },
        { id: 4, image: 'https://cdn.shopier.app/pictures_large/stepcity_c5ca9e1d4adf1ef0d3afa021a18d71a8.jpeg', link: '/Kadın-Ayakkabı/7-adidas-kadn-sneaker' },
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

    const brands = [
        { brand: 'Nike', gender: 'erkek', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVqds5XpuvICAg9dSoXuxTrycPHH-CkYLfg&s' },
        { brand: 'Adidas', gender: 'kadın', img: 'https://i.pinimg.com/736x/3f/0c/76/3f0c767a3d4d448ffb58152f7c199842.jpg' },
        { brand: 'Puma', gender: 'kadın', img: 'https://www.designenlassen.de/blog/wp-content/uploads/2024/03/Puma-585x585.png' },
        { brand: 'New Balance', gender: 'erkek', img: 'https://images.seeklogo.com/logo-png/9/1/new-balance-logo-png_seeklogo-98723.png' },
        { brand: 'Lacoste', gender: 'kadın', img: 'https://logowik.com/content/uploads/images/522_lacoste.jpg' },
        { brand: 'Golden Goose', gender: 'kadın', img: 'https://i.pinimg.com/736x/53/14/87/531487f5c990664e1b3ae14f35e26131.jpg' },
        { brand: 'Dolce&Gabbana', gender: 'erkek', img: 'https://toplist.info/images/800px/dolce-amp-gabbana-dampg-769123.jpg' },
        { brand: 'EA7', gender: 'erkek', img: 'https://brandlogos.net/wp-content/uploads/2022/03/ea7_emporio_armani-logo-brandlogos.net_.png' },
        { brand: 'Louis Vuitton', gender: 'erkek', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9KMHiWBaRVE8bHzHeiwy0fcIvUMXVJm0OtOADWmAPp5_5wLOrC-Al2YpR1r-vTtVZzNc&usqp=CAU' }
    ];

    return (
        <div className='bg-white'>

            <div
                onClick={() => navigate('erkek-ayakkabı?brand=Nike')}
                className='relative  h-[500px] md:h-[750px] lg:h-[960px] sm:h-[600px] sm:w-40  md:w-32  lg:w-full  xl:w-full cursor-pointer z-40'
            >
                <img
                    className='w-full h-full object-cover select-none'
                    src="https://cdn.pixabay.com/photo/2020/05/03/19/09/nike-5126389_1280.jpg"
                    alt="NikeBanner"
                />

                <div className='absolute inset-0 flex flex-col items-start justify-center gap-4 px-4 sm:px-6 pt-72 md:px-10 lg:px-0'>
                    <h1 className='text-white font-serif font-bold text-2xl sm:text-3xl md:text-5xl lg:text-7xl lg:absolute lg:bottom-[400px] lg:left-[250px] max-w-[340px] mb-2 lg:mb-0 select-none'>
                        Farklı ol, şimdi keşfet!
                    </h1>

                    <button className='flex items-center gap-2 bg-blue-700 hover:bg-blue-900 duration-300 text-white font-serif text-sm sm:text-base md:text-lg px-5 py-2 rounded-sm lg:absolute lg:bottom-[325px] lg:left-[255px]'>
                        Koleksiyona göz at!
                        <ArrowRightAltIcon className='text-white w-6 h-6' />
                    </button>
                </div>

            </div>


            <div className='bg-white'>

                <h1 className="font-bold text-2xl sm:text-4xl lg:mt-20 mt-10 ml-8 sm:ml-[205px]">Öne Çıkan Ürünler</h1>
                <span className="h-1 w-32 sm:w-[140px] ml-8 sm:ml-[210px] mt-2 rounded-sm bg-black block"></span>

                <div className="ml-8 sm:hidden flex items-center gap-1 text-gray-600 text-sm mt-3 animate-pulse">
                    Kaydır
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>

                <div className="flex overflow-x-auto mt-10 ml-4 sm:ml-[155px] scrollbar-hide">
                    {displayedShoes.map((shoe) => (
                        <div key={shoe.id} className="flex-none w-[40vw] sm:w-[400px]">
                            {shoe.link ? (
                                <a href={shoe.link}>
                                    <div className="h-[200px] sm:h-[400px] bg-white select-none cursor-pointer relative">
                                        <img src={shoe.image} alt={`Shoe ${shoe.id}`} className="h-full w-full object-cover" />
                                        <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 lg:ml-[50px] lg:w-[300px] text-white text-sm sm:text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                            Yakından İncele
                                        </span>
                                    </div>
                                </a>
                            ) : (
                                <div className="h-[200px] sm:h-[400px] bg-white select-none cursor-pointer">
                                    <img src={shoe.image} alt={`Shoe ${shoe.id}`} className="h-full w-full object-cover" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-10 select-none">
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

            <div className="flex flex-wrap justify-center gap-3 sm:gap-8 select-none text-white/90">

                <div className="relative w-full sm:w-[600px] md:w-[500px] lg:w-[600px] h-[600px] sm:h-[800px] mt-10 sm:mt-20 group overflow-hidden lg:rounded-md shadow-xl">
                    <img
                        src="https://i.pinimg.com/736x/e4/1c/1d/e41c1df1326c559c5a5d8399acf5bb6b.jpg"
                        alt="Kadın"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                        onClick={() => navigate("/kadın-ayakkabı")}
                    />
                    <div onClick={() => navigate("/kadın-ayakkabı")} className="absolute top-0 left-0 p-8 sm:p-10 cursor-pointer">
                        <h1 className="text-2xl sm:text-3xl font-bold">Kadın</h1>
                        <h1 className="text-lg sm:text-xl font-bold">Yeni Sezon Kadın Ürünleri</h1>
                        <h1 className="text-sm sm:text-base font-bold">
                            Koleksiyonu İncele <ArrowRightAltIcon className="ml-1" style={{ width: "30px", height: "30px" }} />
                        </h1>
                    </div>
                </div>

                <div className="relative w-full sm:w-[600px] md:w-[500px] lg:w-[600px] h-[600px] sm:h-[800px] mt-10 sm:mt-20 lg:ml-8 group overflow-hidden lg:rounded-md shadow-xl">
                    <img
                        src="https://i.pinimg.com/736x/be/55/4a/be554a91b6e237299be009d91c209061.jpg"
                        alt="Erkek"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                        onClick={() => navigate("/Erkek-Ayakkabı")}
                    />
                    <div onClick={() => navigate("/Erkek-Ayakkabı")} className="absolute bottom-0 left-0 p-8 sm:p-10 cursor-pointer">
                        <h1 className="text-2xl sm:text-3xl font-bold">Erkek</h1>
                        <h1 className="text-lg sm:text-xl font-bold">Yeni Sezon Erkek Ürünleri</h1>
                        <h1 className="text-sm sm:text-base font-bold">
                            Koleksiyonu İncele <ArrowRightAltIcon className="ml-1" style={{ width: "30px", height: "30px" }} />
                        </h1>
                    </div>
                </div>

            </div>

            <div className="w-full overflow-hidden lg:mt-20 mt-16">
                <div className="flex animate-marquee w-max gap-10 px-10">
                    {[...brands, ...brands, ...brands].map(({ brand, gender, img }, i) => (
                        <div
                            key={`${brand}-${i}`}
                            onClick={() => navigate(`/${gender}-ayakkabı?brand=${encodeURIComponent(brand)}`)}
                            className="bg-white border-2 border-black h-36 w-36 flex-shrink-0 rounded-full duration-300 flex items-center justify-center cursor-pointer"
                        >
                            <img src={img} alt={brand} className="h-28 w-28 object-contain rounded-full" />
                        </div>
                    ))}
                </div>
            </div>


            <div className='cursor-pointer'>
                <div className='mt-16 lg:mt-28 relative'>
                    <img
                        onClick={() => navigate('/Kadın-Ayakkabı?brand=Adidas')}
                        className='h-[300px] w-full sm:h-[600px] md:h-[650px] lg:h-[700px] sm:w-[600px] md:w-[900px] lg:w-[1500px] lg:ml-[100px] z-30 rounded-sm select-none'
                        src="https://lowerblock.com/wp-content/uploads/2024/03/663742.jpg"
                        alt="AdidasBanner"
                    />

                    <div className='absolute top-[55%] left-0 right-0 lg:right-[200px] transform -translate-y-[50%]'>
                        <div className='flex justify-center gap-6'>
                            <div
                                onClick={() => navigate('/Kadın-Ayakkabı/11-adidas-handball-spezial-kadn-sneaker')}
                                className="relative w-[100px] md:w-[300px] lg:h-[400px] h-[150px]"
                            >
                                <img
                                    className="w-full h-full object-cover rounded-sm select-none z-50"
                                    src="https://cdn.shopier.app/pictures_large/stepcity_a62080b40b135ac643e616d1cde782c6.jpeg"
                                    alt="Samba"
                                />
                                <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    Yakından İncele
                                </span>
                            </div>

                            <div
                                onClick={() => navigate('/Kadın-Ayakkabı/12-adidas-handball-spezial-kadn-sneaker')}
                                className="relative w-[100px] md:w-[300px] lg:h-[400px] h-[150px]"
                            >
                                <img
                                    className="w-full h-full object-cover rounded-sm select-none z-50"
                                    src="https://cdn.shopier.app/pictures_large/stepcity_428d88ec4361a4845fb41300b28284f5.jpeg"
                                    alt="Spezial"
                                />
                                <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    Yakından İncele
                                </span>
                            </div>

                            <div
                                onClick={() => navigate('/Kadın-Ayakkabı/14-adidas-handball-spezial-kadn-sneaker')}
                                className="relative w-[100px] md:w-[300px] lg:h-[400px] h-[150px]"
                            >
                                <img
                                    className="w-full h-full object-cover rounded-sm select-none z-50"
                                    src="https://cdn.shopier.app/pictures_large/stepcity_1e3c2e73b23d74bfb981319bdc9cdb25.jpeg"
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


            <div className="w-full overflow-hidden bg-gray-900 text-white py-7 lg:mt-20 mt-10 h-[100px]">
                <div className="flex whitespace-nowrap animate-marquee text-4xl font-serif">
                    <span className="mx-4">Yolunuzu şıklıkla keşfedin, her adımda rahatlıkla ilerleyin!<StarBorderPurple500Icon className='ml-6 mb-1' style={{ width: "30px", height: "30px" }} /></span>
                    <span className="mx-4">Adımlarınızı tarz ve konforla buluşturun!<StarBorderPurple500Icon className='ml-6 mb-1' style={{ width: "30px", height: "30px" }} /></span>
                    <span className="mx-4">Her adımda kalite, her yürüyüşte şıklık!<StarBorderPurple500Icon className='ml-6 mb-1' style={{ width: "30px", height: "30px" }} /></span>
                    <span className="mx-4">Tarzınızı tamamlayan ayakkabılar, en iyi fiyatlarla burada!<StarBorderPurple500Icon className='ml-6 mb-1' style={{ width: "30px", height: "30px" }} /></span>
                    <span className="mx-4">Şıklık ve rahatlık, her adımda sizinle<StarBorderPurple500Icon className='ml-6 mb-1' style={{ width: "30px", height: "30px" }} /></span>
                </div>
            </div>

            <div className='cursor-pointer'>
                <div className='mt-10 lg:mb-32 mb-20  lg:mt-20 relative'>
                    <img
                        onClick={() => navigate('/Erkek-Ayakkabı?brand=Nike')}
                        className='h-[300px] w-full sm:h-[600px] md:h-[650px] lg:h-[700px] sm:w-[600px] md:w-[900px] lg:w-[1500px] lg:ml-[100px] z-30 rounded-sm select-none'
                        src="https://i.pinimg.com/736x/36/18/c9/3618c986ef3d05d8fd67851c75a646fe.jpg"
                        alt="NikeBanner"
                    />
                    <h1 className='absolute top-0 lg:left-52 left-6 lg:text-9xl lg:mt-10 mt-7 text-5xl font-serif select-none'>
                        NIKE
                    </h1>

                    <div className='absolute top-[55%] left-0 right-0 lg:right-[200px] transform -translate-y-[50%]'>
                        <div className='flex justify-center gap-6'>
                            <div
                                onClick={() => navigate('/Erkek-Ayakkabı/5-nike-dunk-low-panda-erkek')}
                                className="relative w-[100px] md:w-[300px] lg:h-[400px] h-[150px]"
                            >
                                <img
                                    className="w-full h-full object-cover rounded-sm select-none z-50"
                                    src="https://cdn.shopier.app/pictures_large/stepcity_7c80d95212ea1f999a660cf98deb687e.jpeg"
                                    alt="Nike"
                                />
                                <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    Yakından İncele
                                </span>
                            </div>

                            <div
                                onClick={() => navigate('/Erkek-Ayakkabı/62-nike-dunk-low-erkek-sneaker')}
                                className="relative w-[100px] md:w-[300px] lg:h-[400px] h-[150px]"
                            >
                                <img
                                    className="w-full h-full object-cover rounded-sm select-none z-50"
                                    src="https://cdn.shopier.app/pictures_large/stepcity_9118e3628ccea080e7fe991d72f82ec8.jpeg"
                                    alt="AirForce"
                                />
                                <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    Yakından İncele
                                </span>
                            </div>

                            <div
                                onClick={() => navigate('/Erkek-Ayakkabı/61-nike-dunk-low-erkek-sneaker')}
                                className="relative w-[100px] md:w-[300px] lg:h-[400px] h-[150px]"
                            >
                                <img
                                    className="w-full h-full object-cover rounded-sm select-none z-50"
                                    src="https://cdn.shopier.app/pictures_large/stepcity_f4a8f9191a6f58f3ebebbe97ac22bfc7.jpeg"
                                    alt="Nike"
                                />
                                <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    Yakından İncele
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home
