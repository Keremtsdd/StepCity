import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../Context/CartContext';
import axios from 'axios';
import Header from '../Components/Header';
import HomeIcon from '@mui/icons-material/Home';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import GppGoodIcon from '@mui/icons-material/GppGood';
import CreditCardIcon from '@mui/icons-material/CreditCard';

function ManShoeDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [shoe, setShoe] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const { addToCart } = useCart();
    const [showSuccess, setShowSuccess] = useState(false);

    const realId = id.split('-')[0];

    useEffect(() => {
        axios.get(`http://localhost:5029/api/ManShoe/${realId}`)
            .then(res => setShoe(res.data))
            .catch(() => alert('Ürün bulunamadı'));
    }, [realId]);

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Lütfen bir beden seçiniz!');
            return;
        }

        const item = {
            id: shoe.id,
            model: shoe.model,
            brand: shoe.brand,
            price: shoe.price,
            image: shoe.image1,
            size: selectedSize,
            shopierLink: shoe.shopierLink
        };


        addToCart(item);
        setShowSuccess(true);

        setTimeout(() => {
            setShowSuccess(false);
        }, 3000);
    };

    if (!shoe) return <div>Yükleniyor...</div>;

    return (
        <>
            {showSuccess && (
                <div className="fixed lg:top-5 lg:left-1/2 ml-48 lg:ml-0 mt-[400px] lg:mt-1 transform -translate-x-1/2 bg-green-800 text-white px-6 py-3 rounded shadow-md z-50 transition duration-300">
                    Ürün başarıyla sepete eklendi!
                </div>
            )}

            <div>
                <Header />
            </div>

            <div className='flex flex-wrap mt-5 lg:ml-20 ml-5 cursor-pointer max-w-[700px]'>
                <h1 onClick={() => navigate('/')} className='text-black/60'>
                    <HomeIcon style={{ width: "20px", height: "20px" }} className='mr-1 mb-1' />Anasayfa /
                </h1>
                <h1 onClick={() => navigate('/erkek-ayakkabı')} className='text-black/60 ml-1'>Erkek /</h1>
                <h1 onClick={() => navigate(`/erkek-ayakkabı?brand=${encodeURIComponent(shoe.brand)}`)} className='text-black/60 ml-1'>{shoe.brand} /</h1>
                <h1 className='ml-1'>{shoe.model}</h1>
            </div>

            <div className='lg:flex mb-[100px] lg:mb-[200px] mt-10 lg:-mt-10'>
                <div className=''>
                    <div className='flex z-10 select-none'>
                        <img src={shoe.image1} alt={shoe.model} className="my-4 lg:h-[500px] lg:w-[500px] h-[200px] -ml-2 lg:ml-[250px] lg:mt-[120px] relative" />
                        <img src={shoe.image2} alt={shoe.model} className="my-4 lg:h-[500px] lg:w-[500px] h-[200px] -ml-[165px] lg:ml-[345px] lg:mt-[120px] rounded-sm absolute left-[345px]" />
                    </div>

                    <div className='flex mt-5 select-none'>
                        {shoe.image3 && (
                            <img
                                className=' lg:h-[500px] lg:w-[500px] -ml-2 lg:ml-[250px] h-[200px] relative'
                                src={shoe.image3}
                                alt={shoe.model}
                            />
                        )}
                        {shoe.image4 && (
                            <img
                                className='lg:h-[500px] lg:w-[500px] h-[200px] -ml-[165px] lg:ml-[345px] rounded-sm absolute left-[345px]'
                                src={shoe.image4}
                                alt={shoe.model}
                            />
                        )}
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold lg:w-[600px] w-80 lg:ml-[440px] ml-5 lg:mt-[130px] mt-10">{shoe.brand}</h2>
                    <h2 className="text-2xl font-semibold lg:w-[500px] w-72 lg:ml-[440px] ml-5">{shoe.model}</h2>

                    <div className="flex font-semibold lg:ml-[440px] ml-5 lg:mt-7 mt-4">
                        <p className="text-gray-900 text-2xl">
                            {shoe.price.toLocaleString('tr-TR')} ₺
                        </p>
                        <p className="text-gray-600 text-2xl ml-4 line-through">
                            {(shoe.price * 1.4).toLocaleString('tr-TR')} ₺
                        </p>
                    </div>

                    <div className="lg:ml-[440px] ml-5 mt-[30px]">
                        <h3 className="text-lg font-bold mb-2">Beden Seçiniz</h3>
                        <div className="flex flex-wrap gap-2 mt-3 font-semibold">
                            {[40, 41, 42, 43, 44].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-7 py-1 border rounded transition ${selectedSize === size
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
                        <div className="mt-5">
                            <button
                                onClick={handleAddToCart}
                                className="h-12 lg:w-[410px] w-[350px] lg:ml-[440px] ml-5 px-4 py-2 bg-blue-600 hover:bg-blue-800 duration-300 text-white rounded-sm"
                            >
                                <LocalGroceryStoreOutlinedIcon style={{ width: "20px", height: "20px" }} className='mb-0.5' /> Sepete Ekle
                            </button>
                        </div>
                    </div>

                    <div className='bg-neutral-300 lg:ml-[440px] ml-5 lg:mt-12 mt-8 h-12 lg:w-[410px] w-[350px] rounded-sm'>
                        <div className='flex'>
                            <span><LocalShippingIcon fontSize='large' className='mt-2 ml-4' /></span>
                            <h1 className='ml-4 mt-3 font-bold'>Ücretsiz Kargo</h1>
                        </div>
                    </div>

                    <div className='bg-neutral-300 lg:ml-[440px] ml-5 mt-5 h-[180px] lg:w-[410px] w-[350px] rounded-sm'>
                        <div className='flex'>
                            <span><CompareArrowsRoundedIcon fontSize='large' className='mt-4 ml-4' /></span>
                            <div>
                                <h1 className='ml-4 font-bold mt-4'>İade ve Değişim</h1>
                                <h1 style={{ width: "300px" }} className='ml-4 mt-1.5'>Siparişleriniz size ulaştıktan sonra 7 gün içinde iade veya değişim talebinde bulunabilirsiniz. Ürün kullanılmamış, kutusu zarar görmemiş olmalıdır.</h1>
                            </div>
                        </div>
                    </div>

                    <div className='flex h-16 lg:w-[410px] w-[350px] lg:ml-[440px] ml-5 rounded-sm  bg-neutral-300 mt-5'>

                        <div>
                            <h1 className='lg:ml-14 ml-9 mt-1.5'><LocalShippingIcon /></h1>
                            <h1 className='lg:ml-8 ml-3 font-semibold'>Hızlı Kargo</h1>
                        </div>

                        <div>
                            <h1 className='mt-1.5 lg:ml-[70px] ml-16'><GppGoodIcon /></h1>
                            <h1 className='lg:ml-6 ml-4 font-semibold'>Güvenli Alışveriş</h1>

                        </div>

                        <div>
                            <h1 className='lg:ml-14 ml-12 mt-1.5'><CreditCardIcon /></h1>
                            <h1 className='lg:ml-6 ml-4 font-semibold'>Kolay Ödeme</h1>
                        </div>

                    </div>

                    <div>
                        <h1 className='lg:ml-[440px] ml-5 mt-14 text-xl font-bold'>Teslimat Bilgisi</h1>
                        <p className="text-gray-800 lg:ml-[440px] ml-8 mt-1 font-semibold underline">Bu Sitedeki Tüm Ürünler Ücretsiz Kargo İle Gelmektedir.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ManShoeDetail;