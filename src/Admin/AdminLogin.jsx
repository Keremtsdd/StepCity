import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:5029/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName: username, password: password }),
            });

            if (!response.ok) {
                const message = await response.text();
                setError(message);
                return;
            }

            const token = await response.text();
            localStorage.setItem("token", token);
            navigate("/Admindashboard");

        } catch (err) {
            setError("Sunucuya bağlanılamadı.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Admin Giriş</h2>

                <div className="mb-4">
                    <label className="block mb-1 text-gray-700">Kullanıcı Adı</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 text-gray-700">Şifre</label>
                    <input
                        type="password"
                        className="w-full border border-gray-300 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
                >
                    Giriş Yap
                </button>
            </form>
        </div>
    );
}
