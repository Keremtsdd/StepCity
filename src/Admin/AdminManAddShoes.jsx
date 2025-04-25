import React, { useState } from 'react';
import axios from 'axios';

function AdminManAddShoes() {

    const [formData, setFormData] = useState({
        brand: '',
        model: '',
        price: '',
        title: '',
        cargo: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        shopierLink: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSend = {
            ...formData,
            price: parseFloat(formData.price),
        };

        axios.post('http://localhost:5029/api/ManShoe', dataToSend)
            .then(response => {
                alert('Yeni ayakkabı başarıyla eklendi!');

                setFormData({
                    brand: '',
                    model: '',
                    price: '',
                    title: '',
                    cargo: '',
                    image1: '',
                    image2: '',
                    image3: '',
                    image4: '',
                    shopierLink: ''
                });
            })
            .catch(error => {
                console.error('Yükleme sırasında bir hata oluştu:', error);
                alert('Bir hata oluştu. Lütfen tekrar deneyin.');
            });
    };
    return (
        <div className="container mx-auto px-4 py-6 lg:w-[800px] w-full ">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Yeni Ayakkabı Ekle</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Ayakkabı Bilgileri</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="brand" className="block text-gray-700">Marka</label>
                        <input
                            type="text"
                            id="brand"
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="model" className="block text-gray-700">Model</label>
                        <input
                            type="text"
                            id="model"
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="price" className="block text-gray-700">Fiyat</label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="title" className="block text-gray-700">Başlık</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="cargo" className="block text-gray-700">Kargo</label>
                        <input
                            type="text"
                            id="cargo"
                            name="cargo"
                            value={formData.cargo}
                            onChange={handleChange}
                            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="image1" className="block text-gray-700">Görsel 1</label>
                        <input
                            type="text"
                            id="image1"
                            name="image1"
                            value={formData.image1}
                            onChange={handleChange}
                            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="image2" className="block text-gray-700">Görsel 2</label>
                        <input
                            type="text"
                            id="image2"
                            name="image2"
                            value={formData.image2}
                            onChange={handleChange}
                            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="image3" className="block text-gray-700">Görsel 3</label>
                        <input
                            type="text"
                            id="image3"
                            name="image3"
                            value={formData.image3}
                            onChange={handleChange}
                            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="image4" className="block text-gray-700">Görsel 4</label>
                        <input
                            type="text"
                            id="image4"
                            name="image4"
                            value={formData.image4}
                            onChange={handleChange}
                            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="shopierLink" className="block text-gray-700">Shopier Link</label>
                        <input
                            type="text"
                            id="shopierLink"
                            name="shopierLink"
                            value={formData.shopierLink}
                            onChange={handleChange}
                            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
                        >
                            Ekle
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminManAddShoes
