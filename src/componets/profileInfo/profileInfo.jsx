import { useEffect, useState } from 'react'
import "./profileInfo.css";
const ProfileInfo = () => {
    const [name, setName] = useState("");

    // Загружаем имя из localStorage при монтировании
    useEffect(() => {
        const storedName = localStorage.getItem("userName") || "";
        setName(storedName);
    }, []);

    const handleSave = () => {
        localStorage.setItem("userName", name);
        alert("Name saved!");
    };
    return (
        <>
            <div className="profileInfoCard">
                <h2>User Profile</h2>

                <div className="profile-field">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </div>

                <button className="save-btn" onClick={handleSave}>Save</button>
            </div>
        </>
    )
}

export default ProfileInfo