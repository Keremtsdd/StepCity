import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../İmages/logo.png';
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

            <div className='flex flex-col lg:flex-row '>

                <div className='relative w-full lg:h-[450px] lg:w-[800px] bg-black lg:border-r-2 border-white flex flex-col items-center justify-center text-center'>
                    <img className='h-72 w-72 select-none' src={logo} alt="StepCityLogo" />
                    <p className='text-white/90 -mt-14 font-mono text-center'>Adım Attıkça Farkı Hissedin!</p>

                    <div className="flex items-center space-x-5 mt-7 text-white">
                        <Link to={"https://www.instagram.com/stepcitytr/"} target='_blank'>
                            <InstagramIcon style={{ width: "32px", height: "32px" }} />
                        </Link>
                        <Link to={"https://www.tiktok.com/@stepcityy?_t=ZS-8vQGDbr3YiA&_r=1"} target='_blank'>
                            <SiTiktok style={{ width: "25px", height: "25px" }} />
                        </Link>
                        <Link to={"https://wa.me/905363956847"} target='_blank'>
                            <WhatsAppIcon style={{ width: "32px", height: "32px" }} />
                        </Link>
                    </div>

                    <span className='h-0.5 w-full rounded-sm bg-white block mt-14'></span>
                    <p className="mt-6 mb-6 text-sm text-white">
                        <CopyrightIcon style={{ width: "17px", height: "17px" }} className='mb-0.5' />
                        2025 <span className='font-semibold'>StepCity.</span> Tüm Hakları Saklıdır.
                    </p>
                </div>

                <div className='h-[1150px] lg:h-[450px] md:w-full lg:w-full sm:w-full bg-black sm:flex md:flex flex flex-col sm:flex-row '>

                    <div className='text-white ml-[20%] lg:ml-20 mt-5 text-lg '>

                        <h1 className='text-white font-semibold text-2xl mt-16'>Kategoriler</h1>

                        <div className='mt-5'>

                            <p onClick={() => navigate('/kadın-ayakkabı')} className='w-[50px] cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Kadın</p>
                            <p onClick={() => navigate('/erkek-ayakkabı')} className='w-[50px] mt-1.5 cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Erkek</p>
                            <p onClick={() => navigate('/giyim')} className='w-[50px] mt-1.5 cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Giyim</p>

                        </div>

                    </div>

                    <div className='text-white ml-[20%] lg:ml-20 mt-5  text-lg '>

                        <h1 className='text-white font-semibold text-2xl mt-16 '>Markalar</h1>

                        <div className='mt-5'>

                            <p onClick={() => navigate('/kadın-ayakkabı?brand=Adidas')} className='w-[60px] cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Adidas</p>
                            <p onClick={() => navigate('/erkek-ayakkabı?brand=Nike')} className='w-[50px] mt-1.5 cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Nike</p>
                            <p onClick={() => navigate('/erkek-ayakkabı?brand=New+Balance')} className='w-[110px] mt-1.5 cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>New Balance</p>
                            <p onClick={() => navigate('/kadın-ayakkabı?brand=Lacoste')} className='w-[70px] mt-1.5 cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Lacoste</p>
                            <p onClick={() => navigate('/kadın-ayakkabı?brand=Golden+Goose')} className='w-[120px] mt-1.5 cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Golden Goose</p>
                            <p onClick={() => navigate('/erkek-ayakkabı?brand=Louis+Vuitton')} className='w-[110px] mt-1.5 cursor-pointer transition-transform hover:translate-x-1.5 duration-300'>Louis Vuitton</p>
                            <p onClick={() => navigate('/erkek-ayakkabı')} className='mt-1.5 cursor-pointer font-semibold duration-300 underline'>Tüm Markalar</p>
                        </div>

                    </div>

                    <div className='text-white ml-[20%] lg:ml-20 mt-5  text-lg '>

                        <h1 className='text-white font-semibold text-2xl mt-16 '>İletişim</h1>

                        <div className='mt-5'>
                            <Link target='_blank' to={"https://www.google.pl/maps/place/Denizk%C3%B6%C5%9Fkler,+Denizk%C3%B6%C5%9Fkler+Cd.+No:61,+34315+Avc%C4%B1lar%2F%C4%B0stanbul/@40.9760717,28.7311019,3a,90y,15.28h,80.14t/data=!3m7!1e1!3m5!1suKADlEnw12zNMmVjB_3ahA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D9.859798247140716%26panoid%3DuKADlEnw12zNMmVjB_3ahA%26yaw%3D15.284265559104721!7i16384!8i8192!4m15!1m8!3m7!1s0x14caa1b07e906093:0xe2def87e5423e11d!2zRGVuaXprw7bFn2tsZXIsIERlbml6a8O2xZ9rbGVyIENkLiBObzo2MSwgMzQzMTUgQXZjxLFsYXIvxLBzdGFuYnVs!3b1!8m2!3d40.976158!4d28.7311483!16s%2Fg%2F11hzz3z4nk!3m5!1s0x14caa1b07e906093:0xe2def87e5423e11d!8m2!3d40.976158!4d28.7311483!16s%2Fg%2F11hzz3z4nk?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D"}>
                                <p
                                    style={{ width: "300px" }}
                                    className='cursor-pointer flex items-center'
                                >
                                    <LocationOnOutlinedIcon className='mr-1' />
                                    Denizköşkler, Denizköşkler Cd. No:61, 34315 Avcılar/İstanbul
                                </p>
                            </Link>
                            <Link to={"https://wa.me/905363956847"} target='_blank'>
                                <p style={{ width: "180px" }} className='mt-3 cursor-pointer'><LocalPhoneOutlinedIcon className='mr-1 mb-0.5' />+90 536 395 68 47</p>
                            </Link>
                            <p style={{ width: "205px" }} className='mt-3 cursor-pointer'><MailOutlineOutlinedIcon className='mr-1 mb-0.5' />stepcityy@gmail.com</p>

                        </div>

                    </div>

                    <div className="flex justify-center items-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d376.53032098776185!2d28.73090369814754!3d40.976168999757725!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa1b07e906093%3A0xe2def87e5423e11d!2zRGVuaXprw7bFn2tsZXIgQ2QuIE5vOjYx!5e0!3m2!1str!2str!4v1745063236041!5m2!1str!2str"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map showing coffee shop location"
                            className="select-none mt-[50px] h-[200px] w-[380px] lg:h-[300px] lg:w-[480px]"
                        ></iframe>
                    </div>


                </div>

            </div>

        </footer>
    )
}

export default Footer
