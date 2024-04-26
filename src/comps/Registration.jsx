import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../css/index.css'

const Registration = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    zip: "",
    country: "",
  });

  const [regMessage, setRegMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/v1/fashionhub/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      if (response.ok) {
        setRegMessage("Registration successful! Redirecting you to the sign-in page...");
        setTimeout(() => {
            navigate("/login");
        }, 3000);
      } else {
        setRegMessage("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="signup template d-flex justify-content-center align-items-center">
      <div className="form_container p-5 rounded bg-white shadow-sm mb-3">
        <h3 className="text-center">Sign Up</h3>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-mb-6">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="First and last name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              required
            />{" "}
          </div>
          <div className="col-mb-6">
            <label htmlFor="email">Email</label>
            <input
              type="Email"
              id="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
            />{" "}
          </div>
          <div className="col-mb-6">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              className="form-control"
              placeholder="Set a password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              required
            />{" "}
          </div>
          <div className="col-mb-6">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              className="form-control"
              placeholder="Phone number"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              required
            />{" "}
          </div>
          <div className="col-mb-6">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              className="form-control"
              placeholder="Address"
              name="address"
              value={userData.address}
              onChange={handleChange}
              required
            />{" "}
          </div>
          <div className="col-mb-6">
            <label htmlFor="apartment">Apartment</label>
            <input
              type="text"
              id="apartment"
              className="form-control"
              placeholder="Apartment"
              name="apartment"
              value={userData.apartment}
              onChange={handleChange}
              required
            />{" "}
          </div>
          <div className="col-mb-6">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              className="form-control"
              placeholder="City"
              name="city"
              value={userData.city}
              onChange={handleChange}
              required
            />{" "}</div>
          <div className="col-mb-6">
            <label htmlFor="zip">Zip</label>
            <input
              type="text"
              id="zip"
              className="form-control"
              placeholder="Zip code"
              name="zip"
              value={userData.zip}
              onChange={handleChange}
              required
            />{" "}
          </div>
          <div className="col-mb-6">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              className="form-control"
              placeholder="Country"
              name="country"
              value={userData.country}
              onChange={handleChange}
              required
            />{" "}
          </div>
          <div className="d-grid mt-3">
            <button className="btn btn-primary">Register</button>
            <p className="text-end mt-3">
              Already registered 
              <Link to="/login"> Sign in</Link>
            </p>
            <p className="text-success mb-0">{regMessage}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
