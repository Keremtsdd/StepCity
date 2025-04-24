import React from 'react'
import { useState } from 'react';
import AdminWomenShoes from './AdminWomenShoes';


function AdminDashboard() {
    const [isWomenOpen, setIsWomenOpen] = useState(false);
    const [isMenOpen, setIsMenOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState();
    return (


        <>
            <div className='flex'>

                <div className="h-[959px] w-[400px] bg-gradient-to-b from-blue-500 to-blue-600  shadow-lg">
                    <div className="p-6">
                        <h1 className="text-center text-2xl font-semibold text-white">KADIN ÜRÜN PANELİ</h1>

                        <div className="mt-8">
                            <button
                                className="w-full bg-white   text-lg font-semibold p-3 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 mb-4"
                                onClick={() => setIsWomenOpen(!isWomenOpen)}
                            >
                                Kadın Ürünleri Yönet
                            </button>
                            {isWomenOpen && (
                                <div className="space-y-3">
                                    <button onClick={() => setSelectedCategory("WomenShoeList")} className="w-full bg-gray-800 hover:bg-gray-700 text-white text-lg font-semibold p-3 rounded-lg transition duration-200 ease-in-out transform hover:scale-105">
                                        Ürün Listesi Güncelleme ve Silme
                                    </button>
                                    <button className="w-full bg-gray-800 hover:bg-green-600 text-white text-lg font-semibold p-3 rounded-lg transition duration-200 ease-in-out transform hover:scale-105">
                                        Ürün Yükle
                                    </button>
                                    <button className="w-full bg-gray-800 hover:bg-orange-500 text-white text-lg font-semibold p-3 rounded-lg transition duration-200 ease-in-out transform hover:scale-105">
                                        Güncel Ürün Sayısı
                                    </button>

                                </div>
                            )}
                        </div>

                        <hr className="my-8 border-t-2 border-gray-200" />

                        {/* Erkek Ürün Paneli */}
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
                                    <button className="w-full bg-gray-800 hover:bg-gray-700 text-white text-lg font-semibold p-3 rounded-lg transition duration-200 ease-in-out transform hover:scale-105">
                                        Ürün Listesi Güncelleme ve Silme
                                    </button>
                                    <button className="w-full bg-gray-800 hover:bg-green-600 text-white text-lg font-semibold p-3 rounded-lg transition duration-200 ease-in-out transform hover:scale-105">
                                        Ürün Yükle
                                    </button>
                                    <button className="w-full bg-gray-800 hover:bg-orange-500 text-white text-lg font-semibold p-3 rounded-lg transition duration-200 ease-in-out transform hover:scale-105">
                                        Güncel Ürün Sayısı
                                    </button>

                                </div>
                            )}
                        </div>
                    </div>
                </div>


                <div className='ml-20'>

                    {selectedCategory === "WomenShoeList" && <AdminWomenShoes />}



                </div>



            </div>








        </>

    )
}

export default AdminDashboard
