import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ManShoeDetail() {
    const { id } = useParams();
    const [shoe, setShoe] = useState(null);

    const realId = id.split('-')[0];

    useEffect(() => {
        axios.get(`http://localhost:5029/api/ManShoe/${realId}`)
            .then(res => setShoe(res.data))
            .catch(() => alert('Ürün bulunamadı'));
    }, [realId]);

    if (!shoe) return <div>Yükleniyor...</div>;

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">{shoe.brand} - {shoe.model}</h2>
            <p className="text-gray-600">{shoe.title}</p>
            <img src={shoe.image1} alt={shoe.model} className="w-64 my-4" />
            <img src={shoe.image2} alt={shoe.model} className="w-64 my-2" />
            <p className="text-lg font-semibold">Fiyat: {shoe.price.toLocaleString('tr-TR')} TL</p>
            <p>{shoe.cargo}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Sepete Ekle</button>
        </div>
    );
}

export default ManShoeDetail;