import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Registration = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        apartment: '',
        city: '',
        zip: '',
        country: '',
    })

    const [regMessage, setRegMessage] = useState('');
    const navigate = useNavigate();
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
          ...prevUserData,
          [name]: value,
        }))
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/v1/fashionhub/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            if (response.ok) {
                setRegMessage('You are now registered. Please sign in')
                navigate('/login'); //Gör istället en välkommen sida
            } else {
                setRegMessage('Registration failed')
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
        


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        required
                        /> <br />
                    <label htmlFor="email">Email</label>    
                    <input 
                        type="text"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                    /> <br />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="text"
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        required
                    /> <br />
                    <label htmlFor="phone">Phone</label>
                    <input 
                        type="text"
                        id="phone"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        required
                    /> <br />
                    <label htmlFor="address">Address</label>
                    <input 
                        type="text"
                        id="address"
                        name="address"
                        value={userData.address}
                        onChange={handleChange}
                        required
                     /> <br />
                    <label htmlFor="apartment">Apartment</label>
                    <input 
                        type="text"
                        id="apartment"
                        name="apartment"
                        value={userData.apartment}
                        onChange={handleChange}
                        required
                     /> <br />
                    <label htmlFor="city">City</label>
                    <input 
                        type="text"
                        id="city"
                        name="city"
                        value={userData.city}
                        onChange={handleChange}
                        required
                     /> <br />
                    <label htmlFor="zip">Zip</label>
                    <input 
                        type="text"
                        id="zip"
                        name="zip"
                        value={userData.zip}
                        onChange={handleChange}
                        required
                     /> <br />
                    <label htmlFor="country">Country</label>
                    <input 
                        type="text"
                        id="country"
                        name="country"
                        value={userData.country}
                        onChange={handleChange}
                        required
                     /> <br />
                    <button type="submit">Register</button> 
                    <p>{regMessage}</p>
                </div>
            </form>
        </div>
    )
}

export default Registration;