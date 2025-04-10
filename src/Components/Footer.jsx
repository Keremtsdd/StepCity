import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../İmages/logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import CopyrightIcon from '@mui/icons-material/Copyright';


function Footer() {
    const navigate = useNavigate();
    return (
        <footer>

            <div className='flex'>

                <div className='relative h-[450px] w-[800px] bg-black border-r-2 border-white'>

                    <img className='h-72 w-72 ml-[120px]' src={logo} alt="StepCityLogo" />
                    <p className='text-white/90 ml-[146px] -mt-14 font-mono'>Adım Attıkça Farkı Hissedin!</p>

                    <div className="flex items-center space-x-5 mt-7 ml-[190px] text-white ">

                        <Link to={"https://www.instagram.com/"} target='_blank'>
                            <InstagramIcon style={{ width: "32px", height: "32px" }} />
                        </Link>

                        <Link to={"https://www.Whatsapp.com/"} target='_blank'>
                            <WhatsAppIcon style={{ width: "32px", height: "32px" }} />
                        </Link>

                        <Link to={"https://www.x.com/"} target='_blank'>
                            <XIcon style={{ width: "28px", height: "28px" }} />
                        </Link>

                    </div>

                    <span className='h-0.5 w-[563px] rounded-sm bg-white block mt-14'></span>
                    <p className="mt-6 text-sm text-center text-white">Copyright <CopyrightIcon style={{ width: "17px", height: "17px" }} className='mb-0.5' /> 2025 StepCity. Tüm Hakları Saklıdır.</p>

                </div>

                <div className='h-[450px] w-full bg-black flex'>

                    <div className='text-white ml-36 mt-5 space-y-2 text-lg '>

                        <h1 className='text-white font-semibold text-2xl mt-16 '>Kategoriler</h1>

                        <p onClick={() => navigate('/kadın-ayakkabı')} className='w-[50px] cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Kadın</p>
                        <p onClick={() => navigate('/erkek-ayakkabı')} className='w-[50px] cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Erkek</p>
                        <p onClick={() => navigate('/giyim')} className='w-[50px] cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Giyim</p>

                    </div>

                    <div className='text-white ml-36 mt-5 space-y-2 text-lg '>

                        <h1 className='text-white font-semibold text-2xl mt-16 '>Markalar</h1>

                        <p onClick={() => navigate('/kadın-ayakkabı?brand=Adidas')} className=' cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Adidas</p>
                        <p onClick={() => navigate('/erkek-ayakkabı?brand=Nike')} className=' cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Nike</p>
                        <p onClick={() => navigate('/erkek-ayakkabı?brand=New+Balance')} className=' cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>New Balance</p>
                        <p onClick={() => navigate('/kadın-ayakkabı?brand=Lacoste')} className=' cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Lacoste</p>
                        <p onClick={() => navigate('/kadın-ayakkabı?brand=Golden+Goose')} className=' cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Golden Goose</p>
                        <p onClick={() => navigate('/erkek-ayakkabı?brand=Louis+Vuitton')} className=' cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Louis Vuitton</p>
                        <p onClick={() => navigate('/erkek-ayakkabı')} className=' cursor-pointer  duration-300 underline'>Tüm Markalar</p>

                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer
