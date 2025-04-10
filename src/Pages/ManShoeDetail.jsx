import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

function ManShoeDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [shoe, setShoe] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const realId = id.split('-')[0];

    useEffect(() => {
        axios.get(`http://localhost:5029/api/ManShoe/${realId}`)
            .then(res => setShoe(res.data))
            .catch(() => alert('Ürün bulunamadı'));
    }, [realId]);


    if (!shoe) return <div>Yükleniyor...</div>;

    return (
        <>
            <div>
                <Header />
            </div>

            <div className='flex flex-wrap mt-5 ml-20 cursor-pointer max-w-[625px]'>

                <h1 onClick={() => navigate('/')} className='text-black/60'><HomeIcon style={{ width: "20px", height: "20px" }} className='mr-1 mb-1' />Anasayfa / </h1>
                <h1 onClick={() => navigate('/Erkek-Ayakkabı')} className='text-black/60 ml-1'>Erkek /</h1>
                <h1 onClick={() => navigate(`/Erkek-Ayakkabı?brand=${encodeURIComponent(shoe.brand)}`)} className='text-black/60 ml-1'>{shoe.brand} /</h1>
                <h1 className='ml-1'>{shoe.model}</h1>
            </div>

            <div className='flex'>
                <div className='flex '>
                    <img src={shoe.image1} alt={shoe.model} className="my-4 h-[500px] w-[450px] ml-[350px] mt-[120px] relative " />
                    <img src={shoe.image2} alt={shoe.model} className="my-4 h-[500px] w-[450px] ml-[400px] mt-[120px] rounded-sm absolute left-[345px]" />
                </div>

                <div>
                    <h2 className="text-3xl font-bold w-[600px] ml-[395px] mt-[130px]">{shoe.brand} - {shoe.model}</h2>

                    <div className="flex font-semibold ml-[400px] mt-[10px]">
                        <p className="text-gray-900 text-2xl">
                            {shoe.price.toLocaleString('tr-TR')} ₺
                        </p>

                        <p className="text-gray-600 text-2xl ml-4 line-through">
                            {(shoe.price * 1.4).toLocaleString('tr-TR')} ₺
                        </p>
                    </div>

                    <h1 className='text-sm h-5 w-[95px] ml-[400px] mt-[20px] text-center font-semibold rounded-sm bg-slate-300'>Ücretsiz Kargo</h1>

                    <div className="ml-[400px] mt-[30px]">
                        <h3 className="text-lg font-medium mb-2">Beden Seçiniz</h3>
                        <div className="flex gap-2 mt-2">
                            {[40, 41, 42, 43, 44].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-3 py-1 border rounded transition ${selectedSize === size
                                        ? 'bg-black text-white border-black'
                                        : 'border-gray-400 text-black hover:bg-gray-200'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='mt-10 font-semibold'>

                        <div className="mt-4">
                            <button className="w-[300px] rounded-full ml-[400px] px-4 py-2 bg-green-700 hover:bg-green-900 duration-300 text-white">
                                <FavoriteBorderOutlinedIcon style={{ width: "20px", height: "20px" }} className='mb-0.5' /> Favorilere Ekle
                            </button>
                        </div>

                        <div className="mt-5">
                            <button className="w-[300px] ml-[400px] px-4 py-2 bg-blue-600 hover:bg-blue-800 duration-300 text-white rounded-full">
                                <LocalGroceryStoreOutlinedIcon style={{ width: "20px", height: "20px" }} className='mb-0.5' />  Sepete Ekle
                            </button>
                        </div>

                    </div>

                    <div>
                        <h1 className='ml-[400px] mt-14 text-xl'>Teslimat Bilgisi</h1>
                        <p className="text-gray-800 ml-[390px] mt-1"><KeyboardArrowRightIcon style={{ width: "20px", height: "20px" }} className='mb-0.5' />{shoe.title}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ManShoeDetail;