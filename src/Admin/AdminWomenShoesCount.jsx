import React, { useEffect, useState } from 'react'

function AdminWomenShoesCount() {
    const [brandCounts, setBrandCounts] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5029/api/WomenShoe')
                const data = await response.json()

                const counts = {}
                data.forEach((item) => {
                    const brand = item.brand || 'Bilinmeyen Marka'
                    counts[brand] = (counts[brand] || 0) + 1
                })

                setBrandCounts(counts)
            } catch (error) {
                console.error('Veri alınamadı:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Kadın Ayakkabı Stok Sayıları</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300 text-left">Marka</th>
                            <th className="px-4 py-2 border border-gray-300 text-left">Ürün Adedi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(brandCounts).map(([brand, count]) => (
                            <tr key={brand}>
                                <td className="px-4 py-2 border border-gray-300">{brand}</td>
                                <td className="px-4 py-2 border border-gray-300">{count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminWomenShoesCount
