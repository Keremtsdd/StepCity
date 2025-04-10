import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../İmages/logo.png';
import FooterBanner from '../İmages/FooterBanner.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CopyrightIcon from '@mui/icons-material/Copyright';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { SiTiktok } from 'react-icons/si';


function Footer() {
    const navigate = useNavigate();
    return (
        <footer>

            <div className='flex'>

                <div className='relative h-[450px] w-[800px] bg-black border-r-2 border-white'>

                    <img className='h-72 w-72 ml-[120px]' src={logo} alt="StepCityLogo" />
                    <p className='text-white/90 ml-[146px] -mt-14 font-mono'>Adım Attıkça Farkı Hissedin!</p>

                    <div className="flex items-center space-x-5 mt-7 ml-[200px] text-white ">

                        <Link to={"https://www.instagram.com/stepcityy/"} target='_blank'>
                            <InstagramIcon style={{ width: "32px", height: "32px" }} />
                        </Link>

                        <Link to={"https://www.tiktok.com/@stepcityy?_t=ZS-8vQGDbr3YiA&_r=1"} target='_blank'>
                            <SiTiktok style={{ width: "25px", height: "25px" }} />
                        </Link>

                        <Link to={"https://www.Whatsapp.com/"} target='_blank'>
                            <WhatsAppIcon style={{ width: "32px", height: "32px" }} />
                        </Link>



                    </div>

                    <span className='h-0.5 w-[563px] rounded-sm bg-white block mt-14'></span>
                    <p className="mt-6 text-sm text-center text-white">Copyright <CopyrightIcon style={{ width: "17px", height: "17px" }} className='mb-0.5' /> 2025 StepCity. Tüm Hakları Saklıdır.</p>

                </div>

                <div className='h-[450px] w-full bg-black flex'>

                    <div className='text-white ml-36 mt-5 text-lg '>

                        <h1 className='text-white font-semibold text-2xl mt-16'>Kategoriler</h1>

                        <div className='mt-6'>

                            <p onClick={() => navigate('/kadın-ayakkabı')} className='w-[50px] cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Kadın</p>
                            <p onClick={() => navigate('/erkek-ayakkabı')} className='w-[50px] mt-1.5 cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Erkek</p>
                            <p onClick={() => navigate('/giyim')} className='w-[50px] mt-1.5 cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Giyim</p>

                        </div>

                    </div>

                    <div className='text-white ml-36 mt-5  text-lg '>

                        <h1 className='text-white font-semibold text-2xl mt-16 '>Markalar</h1>

                        <div className='mt-6'>

                            <p onClick={() => navigate('/kadın-ayakkabı?brand=Adidas')} className='w-[60px] cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Adidas</p>
                            <p onClick={() => navigate('/erkek-ayakkabı?brand=Nike')} className='w-[50px] mt-1.5 cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Nike</p>
                            <p onClick={() => navigate('/erkek-ayakkabı?brand=New+Balance')} className='w-[110px] mt-1.5 cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>New Balance</p>
                            <p onClick={() => navigate('/kadın-ayakkabı?brand=Lacoste')} className='w-[70px] mt-1.5 cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Lacoste</p>
                            <p onClick={() => navigate('/kadın-ayakkabı?brand=Golden+Goose')} className='w-[120px] mt-1.5 cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Golden Goose</p>
                            <p onClick={() => navigate('/erkek-ayakkabı?brand=Louis+Vuitton')} className='w-[110px] mt-1.5 cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Louis Vuitton</p>
                            <p onClick={() => navigate('/erkek-ayakkabı')} className='mt-1.5 cursor-pointer font-semibold duration-300 underline'>Tüm Markalar</p>
                        </div>

                    </div>

                    <div className='text-white ml-36 mt-5  text-lg '>

                        <h1 className='text-white font-semibold text-2xl mt-16 '>İletişim</h1>

                        <div className='mt-6'>

                            <p className='cursor-pointer transition-transform hover:translate-x-1.5 duration-300'><LocationOnOutlinedIcon />Lorem ipsum dolor sit amet.</p>
                            <p className='mt-4 cursor-pointer transition-transform hover:translate-x-1.5 duration-300'><LocalPhoneOutlinedIcon />11111111111</p>
                            <p className='mt-4 cursor-pointer transition-transform hover:translate-x-1.5 duration-300'><MailOutlineOutlinedIcon />stepcityy@gmail.com</p>

                        </div>

                    </div>



                    <div>
                        <img className='h-[450px] w-[330px] ml-[91px] opacity-30' src={FooterBanner} alt="FooterBanner" />
                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer
