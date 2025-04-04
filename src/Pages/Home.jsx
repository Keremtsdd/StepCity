import React from 'react'
import logo from '../İmages/logo.png';
import Adidas from '../İmages/adidas.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

function Home() {
    return (
        <div className='bg-neutral-100'>

            <div className='h-[960px] w-full relative'>

                <img className='h-[960px] w-full relative' src="https://cdn.pixabay.com/photo/2020/05/03/19/09/nike-5126389_1280.jpg" alt="NikeBanner" />

                <div>

                    <img className='absolute bottom-10 left-[900px] h-44 w-44 rounded-full' src={logo} alt="StepCity" />


                </div>

                <div className='cursor-pointer'>

                    <div className='absolute top-[50px] right-[230px] text-white'><SearchIcon style={{ width: "35px", height: "35px" }} /></div>
                    <div className='absolute top-[50px] right-[180px] text-white'><AccountCircleOutlinedIcon style={{ width: "30px", height: "30px" }} /></div>
                    <div className='absolute top-[50px] right-[125px] text-white'><FavoriteBorderOutlinedIcon style={{ width: "30px", height: "30px" }} /></div>
                    <div className='absolute top-[50px] right-[70px] text-white'><LocalGroceryStoreOutlinedIcon style={{ width: "30px", height: "30px" }} /></div>

                </div>

                <h1 style={{ width: "340px" }} className='absolute bottom-[400px] left-[250px] text-white font-serif font-bold text-7xl select-none'>Farklı ol, şimdi keşfet!</h1>

                <button className='absolute h-[50px] w-52 bg-blue-700 hover:bg-blue-900 duration-300 bottom-[325px] left-[255px] font-serif text-lg text-white rounded-sm'>Koleksiyona göz at!<ArrowRightAltIcon className='ml-2 text-white' style={{ width: "30px", height: "30px" }} /></button>

            </div>

            <div>

                <h1 className='font-bold text-4xl mt-20 ml-[100px]'>Öne Çıkan Ürünler</h1>
                <span className='h-1 w-[140px] ml-[103px] mt-2 rounded-sm bg-black block'></span>

                <div className='flex'>

                    <div>

                        <div className='h-80 w-80 ml-[80px] mt-14 bg-white shadow-2xl'>

                            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8604a6d6-c9c0-49e7-a485-1cc746235807/NIKE+COURT+VISION+LO.png" alt="" />

                        </div>

                        <h1 className='ml-[90px] mt-1 font-bold'>Nike Court Legacy Lift</h1>
                        <h1 className='ml-[90px] text-xs -mt-1'>Kadın ayakkabısı</h1>
                        <h1 className='ml-[90px] mt-1 text-lg'>₺3000</h1>

                    </div>

                    <div>

                        <div className='h-80 w-80 ml-10 mt-14 bg-white shadow-2xl'>

                            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8604a6d6-c9c0-49e7-a485-1cc746235807/NIKE+COURT+VISION+LO.png" alt="" />

                        </div>

                        <h1 className='ml-[50px] mt-1 font-bold'>Nike Court Legacy Lift</h1>
                        <h1 className='ml-[50px] text-xs -mt-1'>Kadın ayakkabısı</h1>
                        <h1 className='ml-[50px] mt-1 text-lg'>₺3000</h1>

                    </div>

                    <div>

                        <div className='h-80 w-80 ml-10 mt-14 bg-white shadow-2xl'>

                            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8604a6d6-c9c0-49e7-a485-1cc746235807/NIKE+COURT+VISION+LO.png" alt="" />

                        </div>

                        <h1 className='ml-[50px] mt-1 font-bold'>Nike Court Legacy Lift</h1>
                        <h1 className='ml-[50px] text-xs -mt-1'>Kadın ayakkabısı</h1>
                        <h1 className='ml-[50px] mt-1 text-lg'>₺3000</h1>

                    </div>

                    <div>

                        <div className='h-80 w-80 ml-10 mt-14 bg-white shadow-2xl'>

                            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8604a6d6-c9c0-49e7-a485-1cc746235807/NIKE+COURT+VISION+LO.png" alt="" />

                        </div>

                        <h1 className='ml-[50px] mt-1 font-bold'>Nike Court Legacy Lift</h1>
                        <h1 className='ml-[50px] text-xs -mt-1'>Kadın ayakkabısı</h1>
                        <h1 className='ml-[50px] mt-1 text-lg'>₺3000</h1>

                    </div>

                    <div>

                        <div className='h-80 w-80 ml-10 mt-14 bg-white shadow-2xl'>

                            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8604a6d6-c9c0-49e7-a485-1cc746235807/NIKE+COURT+VISION+LO.png" alt="" />

                        </div>

                        <h1 className='ml-[50px] mt-1 font-bold'>Nike Court Legacy Lift</h1>
                        <h1 className='ml-[50px] text-xs -mt-1'>Kadın ayakkabısı</h1>
                        <h1 className='ml-[50px] mt-1 text-lg'>₺3000</h1>

                    </div>

                </div>

            </div>

            <div className='flex select-none cursor-pointer text-white/80'>

                <div className="relative w-[600px] h-[800px] mt-20 ml-[300px] group overflow-hidden rounded-md shadow-xl">
                    <img
                        src='https://i.pinimg.com/736x/e4/1c/1d/e41c1df1326c559c5a5d8399acf5bb6b.jpg'
                        alt='Man'
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    <h1 className='absolute top-7 left-10 text-3xl font-bold'>Kadın</h1>
                    <h1 className='absolute top-[65px] left-10 text-lg font-bold'>Yeni Sezon Kadın Ürünleri</h1>
                    <h1 className='absolute top-[93px] left-10 text-sm font-bold'>Koleksiyonu İncele <ArrowRightAltIcon className='ml-1' style={{ width: "30px", height: "30px" }} /></h1>

                </div>

                <div className="relative w-[600px] h-[800px] mt-20 ml-20 group overflow-hidden rounded-md shadow-xl">
                    <img
                        src='https://i.pinimg.com/736x/be/55/4a/be554a91b6e237299be009d91c209061.jpg'
                        alt='Woman'
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    <h1 className='absolute bottom-24 left-10 text-3xl font-bold'>Erkek</h1>
                    <h1 className='absolute bottom-[65px] left-10 text-lg font-bold'>Yeni Sezon Erkek Ürünleri</h1>
                    <h1 className='absolute bottom-9 left-10 text-sm font-bold'>Koleksiyonu İncele <ArrowRightAltIcon className='ml-1' style={{ width: "30px", height: "30px" }} /></h1>


                </div>


            </div>

            <div className='mt-28 flex select-none'>

                <div className='bg-white border-2 border-black h-48 w-48 ml-11 rounded-full'>

                    <img className='rounded-full mt-12 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVqds5XpuvICAg9dSoXuxTrycPHH-CkYLfg&s" alt="Nike" />

                </div>

                <div className='bg-white border-2 border-black h-48 w-48 ml-10 rounded-full'>

                    <img className='rounded-full mt-5 ' src="https://i.pinimg.com/736x/3f/0c/76/3f0c767a3d4d448ffb58152f7c199842.jpg" alt="Adidas" />

                </div>

                <div className='bg-white border-2 border-black h-48 w-48 ml-10 rounded-full'>

                    <img className='rounded-full mt-1 ml-5 h-40 w-40 ' src="https://www.designenlassen.de/blog/wp-content/uploads/2024/03/Puma-585x585.png" alt="Puma" />

                </div>

                <div className='bg-white border-2 border-black h-48 w-48 ml-10 rounded-full'>

                    <img className='rounded-full mt-11 ' src="https://1000logos.net/wp-content/uploads/2017/06/Vans-Logo-1966.jpg" alt="Vans" />

                </div>

                <div className='bg-white border-2 border-black h-48 w-48 ml-10 rounded-full'>

                    <img className='rounded-full mt-3 ml-3 h-40 w-40 ' src="https://images.seeklogo.com/logo-png/9/1/new-balance-logo-png_seeklogo-98723.png" alt="NewBalence" />

                </div>

                <div className='bg-white border-2 border-black h-48 w-48 ml-10 rounded-full'>

                    <img className=' w-36 mt-12 ml-6 ' src="https://upload.wikimedia.org/wikinews/en/thumb/4/43/Lacoste_logo.svg/2560px-Lacoste_logo.svg.png" alt="Lacoste" />

                </div>

                <div className='bg-white border-2 border-black h-48 w-48 ml-10 rounded-full'>

                    <img className='rounded-full mt-9 ' src="https://i.pinimg.com/736x/11/c6/30/11c630cf05fa1e3d863e065e90972f5f.jpg" alt="GoldenRose" />

                </div>

                <div className='bg-white border-2 border-black h-48 w-48 ml-10 rounded-full'>

                    <img className='rounded-full mt-3 ml-4 w-40 ' src="https://brandlogos.net/wp-content/uploads/2022/03/ea7_emporio_armani-logo-brandlogos.net_.png" alt="EA7" />

                </div>

            </div>

            <div className='-mt-72 '>

                <div className='relative'>

                    <img className='rotate-90 ml-[500px] h-[1600px] w-[750px] rounded-sm' src="https://i.pinimg.com/736x/f1/04/66/f1046620a147d374fa8b7801f08ed8d1.jpg" alt="" />

                    <img className='absolute h-[750px] top-[425px] right-[230px] rounded-sm' src="https://i.pinimg.com/736x/94/a9/fa/94a9facc6e8732cbc06ff9c2431fa2bf.jpg" alt="" />

                    <div>

                        <img className='absolute top-[440px] left-[120px] h-44 w-44 rounded-full' src={Adidas} alt="Adidas" />
                        <h1 style={{ width: "600px" }} className='absolute top-[610px] left-[147px] font-serif text-3xl  text-amber-300'>adidas Originals , Geçmişin ikonik tarzı, geleceğin cesur adımlarıyla buluşuyor!</h1>

                        <div className='flex'>

                            <div className="relative w-72 h-[350px] -mt-[850px] ml-[100px]">
                                <img
                                    className="w-full h-full object-cover rounded-sm"
                                    src="https://i.pinimg.com/736x/98/c3/74/98c374b1d62caa80dfa1ea1c9895a538.jpg"
                                    alt="Spezial"
                                />
                                <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    Yakından İncele
                                </span>
                            </div>

                            <div className="relative w-72 h-[350px] -mt-[850px] ml-10">
                                <img
                                    className="w-full h-full object-cover rounded-sm"
                                    src="https://i.pinimg.com/736x/9f/06/7a/9f067abe5f0143af98d03ef926e0014f.jpg"
                                    alt="Samba"
                                />
                                <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    Yakından İncele
                                </span>
                            </div>

                            <div className="relative w-72 h-[350px] -mt-[850px] ml-10">
                                <img
                                    className="w-full h-full object-cover rounded-sm"
                                    src="https://i.pinimg.com/736x/98/01/82/980182e4d31a8940ce136029b2f1bc98.jpg"
                                    alt="Campus"
                                />
                                <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    Yakından İncele
                                </span>
                            </div>

                        </div>

                    </div>

                </div>



                <div className='-mt-[600px]'>

                    <div className='relative'>



                        <img className='rotate-90 ml-[500px] h-[1600px] w-[750px]' src="https://i.pinimg.com/736x/dc/8d/40/dc8d400a6ce5b0e88413d90de9f51545.jpg" alt="NikeBanner" />

                        <img className='absolute h-[750px] w-[560px] bottom-[425px] left-0 ml-[75px]' src="https://i.pinimg.com/736x/22/71/6a/22716a097468b8f70562d1c75bb79a98.jpg" alt="nike" />

                        <p className="absolute bottom-[980px] left-[750px] text-[100px] text-orange-900 font-serif tracking-wide">NIKE</p>
                        <p style={{ width: "700px" }} className='absolute bottom-[930px] left-[750px] font-serif text-orange-800 text-3xl'>Her adımın bir hikâyesi var. Nike Air Force ile geçmişten geleceğe uzanan bir efsaneyi yaşa.</p>
                    </div>

                    <div className='flex'>

                        <div className="relative w-72 h-[350px] -mt-[850px] ml-[680px]">
                            <img
                                className="w-full h-full object-cover rounded-sm"
                                src="https://i.pinimg.com/736x/1c/4d/3f/1c4d3f5c81cb88341eb98b01f9aee838.jpg"
                                alt="Panda"
                            />
                            <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                Yakından İncele
                            </span>
                        </div>

                        <div className="relative w-72 h-[350px] -mt-[850px] ml-10">
                            <img
                                className="w-full h-full object-cover rounded-sm"
                                src="https://i.pinimg.com/736x/b6/9f/13/b69f130c212424c343ebae91e8e1bb88.jpg"
                                alt="AirForce"
                            />
                            <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                Yakından İncele
                            </span>
                        </div>

                        <div className="relative w-72 h-[350px] -mt-[850px] ml-10">
                            <img
                                className="w-full h-full object-cover rounded-sm"
                                src="https://i.pinimg.com/736x/e1/79/17/e17917e8c739de154925d16e9db1fd49.jpg"
                                alt="Campus"
                            />
                            <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                Yakından İncele
                            </span>
                        </div>

                    </div>

                </div>

            </div>


            <div className='h-10 mt-[300px]'></div>


        </div>
    )
}

export default Home
