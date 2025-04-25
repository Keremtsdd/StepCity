import React, { useState } from 'react';
import AdminWomenShoes from './AdminWomenShoes';
import AdminWomenAddShoes from './AdminWomenAddShoes';
import AdminWomenShoesCount from './AdminWomenShoesCount';
import AdminManShoes from './AdminManShoes';
import AdminManAddShoes from './AdminManAddShoes';
import AdminManShoesCount from './AdminManShoesCount';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
    const [isWomenOpen, setIsWomenOpen] = useState(false);
    const [isMenOpen, setIsMenOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("WomenShoeList");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/AdminLogin");
    };

    return (
        <div className='lg:flex'>
            <div className="lg:h-[959px] lg:w-[400px] h-[850px] w-full bg-gradient-to-b from-blue-500 to-blue-600 shadow-lg">
                <div className="p-6">
                    <h1 className="text-center text-2xl font-semibold text-white">KADIN ÜRÜN PANELİ</h1>

                    <div className="mt-8">
                        <button
                            className="w-full bg-white text-lg font-semibold p-3 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 mb-4"
                            onClick={() => setIsWomenOpen(!isWomenOpen)}
                        >
                            Kadın Ürünleri Yönet
                        </button>
                        {isWomenOpen && (
                            <div className="space-y-3">
                                <button onClick={() => setSelectedCategory("WomenShoeList")} className="w-full bg-gray-800 hover:bg-gray-700 text-white text-lg font-semibold p-3 rounded-lg">
                                    Ürün Listesi Güncelleme ve Silme
                                </button>
                                <button onClick={() => setSelectedCategory("WomenAddShoes")} className="w-full bg-gray-800 hover:bg-green-600 text-white text-lg font-semibold p-3 rounded-lg">
                                    Ürün Yükle
                                </button>
                                <button onClick={() => setSelectedCategory("WomenShoesCount")} className="w-full bg-gray-800 hover:bg-orange-500 text-white text-lg font-semibold p-3 rounded-lg">
                                    Güncel Ürün Sayısı
                                </button>
                            </div>
                        )}
                    </div>

                    <hr className="my-8 border-t-2 border-gray-200" />
                    <h1 className="text-center text-2xl font-semibold text-white">ERKEK ÜRÜN PANELİ</h1>
                    <div className="mt-6">
                        <button
                            className="w-full bg-white text-lg font-semibold p-3 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 mb-4"
                            onClick={() => setIsMenOpen(!isMenOpen)}
                        >
                            Erkek Ürünleri Yönet
                        </button>
                        {isMenOpen && (
                            <div className="space-y-3">
                                <button onClick={() => setSelectedCategory("ManShoesList")} className="w-full bg-gray-800 hover:bg-gray-700 text-white text-lg font-semibold p-3 rounded-lg">
                                    Ürün Listesi Güncelleme ve Silme
                                </button>
                                <button onClick={() => setSelectedCategory("ManAddShoes")} className="w-full bg-gray-800 hover:bg-green-600 text-white text-lg font-semibold p-3 rounded-lg">
                                    Ürün Yükle
                                </button>
                                <button onClick={() => setSelectedCategory("ManShoesCount")} className="w-full bg-gray-800 hover:bg-orange-500 text-white text-lg font-semibold p-3 rounded-lg">
                                    Güncel Ürün Sayısı
                                </button>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={handleLogout}
                        className='bg-red-600 text-white font-semibold h-10 w-[300px] mt-10 lg:ml-5 ml-8 rounded-md hover:bg-red-700 transition'
                    >
                        Çıkış Yap
                    </button>
                </div>
            </div>

            <div className='lg:ml-20'>
                {selectedCategory === "WomenShoeList" && <AdminWomenShoes />}
                {selectedCategory === "WomenAddShoes" && <AdminWomenAddShoes />}
                {selectedCategory === "WomenShoesCount" && <AdminWomenShoesCount />}

                {selectedCategory === "ManShoesList" && <AdminManShoes />}
                {selectedCategory === "ManAddShoes" && <AdminManAddShoes />}
                {selectedCategory === "ManShoesCount" && <AdminManShoesCount />}
            </div>
        </div>
    );
}

export default AdminDashboard;
