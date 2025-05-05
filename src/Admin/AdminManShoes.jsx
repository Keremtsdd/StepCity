import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminManShoes() {
    const [womenShoes, setWomenShoes] = useState([]);
    const [selectedShoe, setSelectedShoe] = useState(null);
    const [formData, setFormData] = useState({
        id: '',
        brand: '',
        model: '',
        price: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        shopierLink: ''
    });

    useEffect(() => {
        axios.get('http://localhost:5029/api/ManShoe')
            .then(response => {
                setWomenShoes(response.data);
            })
            .catch(error => {
                console.error('Bir hata oluştu:', error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5029/api/ManShoe/${id}`)
            .then(response => {
                alert('Ayakkabı başarıyla silindi!');
                setWomenShoes(womenShoes.filter(shoe => shoe.id !== id));
            })
            .catch(error => {
                console.error('Silme işlemi sırasında bir hata oluştu:', error);
            });
    };

    const handleUpdate = (id) => {
        const shoe = womenShoes.find(shoe => shoe.id === id);
        setSelectedShoe(shoe);
        setFormData({
            id: shoe.id,
            brand: shoe.brand,
            model: shoe.model,
            price: shoe.price,
            image1: shoe.image1 || '',
            image2: shoe.image2 || '',
            image3: shoe.image3 || '',
            image4: shoe.image4 || '',
            shopierLink: shoe.shopierLink || ''
        });
    };

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

        axios.put(`http://localhost:5029/api/ManShoe/${formData.id}`, dataToSend)
            .then(response => {
                alert('Ayakkabı başarıyla güncellendi!');
                setWomenShoes(womenShoes.map(shoe => shoe.id === formData.id ? response.data : shoe));
                setSelectedShoe(null);
            })
            .catch(error => {
                console.error('Güncelleme sırasında bir hata oluştu:', error);
                console.log('Backend hatası:', error.response?.data);
            });
    };

    return (
        <div className="container mx-auto px-4 py-6 lg:w-[1400px] w-full">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Erkek Ayakkabıları</h1>
            <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600">
                            <th className="py-3 px-6 text-left">Marka</th>
                            <th className="py-3 px-6 text-left">Model</th>
                            <th className="py-3 px-6 text-left">Fiyat</th>
                            <th className="py-3 px-6 text-left">Görsel</th>
                            <th className="py-3 px-6 text-left">İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {womenShoes.map(shoe => (
                            <tr key={shoe.id} className="hover:bg-gray-100 transition duration-300">
                                <td className="py-4 px-6 border-b text-gray-800">{shoe.brand}</td>
                                <td className="py-4 px-6 border-b text-gray-800">{shoe.model}</td>
                                <td className="py-4 px-6 border-b text-gray-800">{shoe.price}₺</td>
                                <td className="py-4 px-6 border-b text-gray-800">
                                    <img src={shoe.image1} alt={shoe.model} className="w-16 h-16 object-cover rounded-lg" />
                                </td>
                                <td className="py-4 px-6 border-b text-gray-800">
                                    <button
                                        onClick={() => handleUpdate(shoe.id)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 mr-2"
                                    >
                                        Güncelle
                                    </button>
                                    <button
                                        onClick={() => handleDelete(shoe.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                                    >
                                        Sil
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedShoe && (
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Ayakkabı Güncelle</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="brand" className="block text-gray-700">Marka</label>
                            <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} className="mt-2 p-2 w-full border border-gray-300 rounded-lg" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="model" className="block text-gray-700">Model</label>
                            <input type="text" id="model" name="model" value={formData.model} onChange={handleChange} className="mt-2 p-2 w-full border border-gray-300 rounded-lg" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="price" className="block text-gray-700">Fiyat</label>
                            <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} className="mt-2 p-2 w-full border border-gray-300 rounded-lg" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="image1" className="block text-gray-700">Görsel 1</label>
                            <input type="text" id="image1" name="image1" value={formData.image1} onChange={handleChange} className="mt-2 p-2 w-full border border-gray-300 rounded-lg" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="image2" className="block text-gray-700">Görsel 2</label>
                            <input type="text" id="image2" name="image2" value={formData.image2} onChange={handleChange} className="mt-2 p-2 w-full border border-gray-300 rounded-lg" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="image3" className="block text-gray-700">Görsel 3</label>
                            <input type="text" id="image3" name="image3" value={formData.image3} onChange={handleChange} className="mt-2 p-2 w-full border border-gray-300 rounded-lg" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="image4" className="block text-gray-700">Görsel 4</label>
                            <input type="text" id="image4" name="image4" value={formData.image4} onChange={handleChange} className="mt-2 p-2 w-full border border-gray-300 rounded-lg" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="shopierLink" className="block text-gray-700">Shopier Link</label>
                            <input type="text" id="shopierLink" name="shopierLink" value={formData.shopierLink} onChange={handleChange} className="mt-2 p-2 w-full border border-gray-300 rounded-lg" />
                        </div>
                        <div className="mt-6">
                            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                                Güncelle
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default AdminManShoes;
