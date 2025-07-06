import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import b1 from './images/b1.webp';
import b2 from './images/b2.jpg';
import b3 from './images/b3.jpg';
import b4 from './images/b4.jpg';
import b5 from './images/b5.jpg';
import b6 from './images/b6.jpg';
import b7 from './images/b7.jpg';
import b8 from './images/b8.jpg';
import b9 from './images/b9.jpg';
import b10 from './images/b10.jpg';
import b11 from './images/b11.jpg';
import b12 from './images/b12.jpg';
import b13 from './images/b13.jpg';
import b14 from './images/b14.jpg';
import b15 from './images/b15.jpg';
import b16 from './images/b16.jpg';

const Deals = () => {
    const [cart, setCart] = useState({});
    const [showCart, setShowCart] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [lastClickedImage, setLastClickedImage] = useState(null); // NEW

    const vegetableItems = [
        { id: 1, img: b1, title: "Fresh Carrots", price: 15.0, offer: "10% off" },
        { id: 2, img: b2, title: "Organic Tomatoes", price: 30.0, offer: "15% off" },
        { id: 3, img: b3, title: "Green Spinach", price: 10.0, offer: "Buy 1 Get 1" },
        { id: 4, img: b4, title: "Bell Peppers", price: 20.0, offer: "5% off" },
        { id: 5, img: b5, title: "Broccoli", price: 40.0, offer: "10% off" },
        { id: 6, img: b6, title: "Cucumbers", price: 30.0, offer: "Limited Offer" },
        { id: 7, img: b7, title: "Red Onions", price: 50.0, offer: "20% off" },
        { id: 8, img: b8, title: "Garlic Bulbs", price: 200.0, offer: "5% off" },
        { id: 9, img: b9, title: "Zucchini", price: 25.0, offer: "Special Discount" },
        { id: 10, img: b10, title: "Mushrooms", price: 40.0, offer: "10% off" },
        { id: 11, img: b11, title: "Lettuce", price: 25.0, offer: "Fresh Deal" },
        { id: 12, img: b12, title: "Sweet Corn", price: 10.0, offer: "Seasonal Offer" },
        { id: 13, img: b13, title: "Potatoes", price: 30.0, offer: "Bulk Discount" },
        { id: 14, img: b14, title: "Pumpkin", price: 80.0, offer: "Limited Stock" },
        { id: 15, img: b15, title: "Eggplant", price: 15.0, offer: "10% off" },
        { id: 16, img: b16, title: "Green Beans", price: 30.0, offer: "Best Seller" }
    ];

    const addToCart = (id, img) => {
        setCart(prevCart => ({
            ...prevCart,
            [id]: (prevCart[id] || 0) + 1
        }));
        setLastClickedImage(img); 
    };

    const removeFromCart = (id) => {
        setCart(prevCart => {
            const updatedCart = { ...prevCart };
            if (updatedCart[id] > 1) {
                updatedCart[id] -= 1;
            } else {
                delete updatedCart[id];
            }
            return updatedCart;
        });
    };

    const getTotalItems = () => {
        return Object.values(cart).reduce((acc, curr) => acc + curr, 0);
    };

    const getTotalAmount = () => {
        return Object.entries(cart).reduce((total, [id, quantity]) => {
            const item = vegetableItems.find(v => v.id === parseInt(id));
            return total + (item.price * quantity);
        }, 0).toFixed(2);
    };

    return (
        <div className="container my-5">

            {}
            {selectedImage && (
                <div className="text-center mb-4">
                    <img
                        src={selectedImage}
                        alt="Selected Item"
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: "300px" }}
                    />
                </div>
            )}

            {}
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                <div className="container">
                    <a className="navbar-brand" href="#">Vegetable Mart</a>
                    <div className="d-flex align-items-center ms-auto gap-3">
                        {}
                        {lastClickedImage && (
                            <img
                                src={lastClickedImage}
                                alt="Last Clicked"
                                style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                            />
                        )}
                        {}
                        <button className="btn btn-outline-success position-relative" onClick={() => setShowCart(!showCart)}>
                            <FaShoppingCart size={24} />
                            {getTotalItems() > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {getTotalItems()}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {}
            {showCart && (
                <div className="card p-3 mb-4">
                    <h4>Cart Details</h4>
                    {Object.keys(cart).length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <ul className="list-group">
                            {Object.entries(cart).map(([id, quantity]) => {
                                const item = vegetableItems.find(v => v.id === parseInt(id));
                                return (
                                    <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <img src={item.img} alt={item.title} width="50" height="50" className="me-3 rounded" />
                                            <div>
                                                <div>{item.title}</div>
                                                <small className="text-muted">Rs {item.price.toFixed(2)}</small>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="btn btn-danger btn-sm me-2" onClick={() => removeFromCart(item.id)}>-</button>
                                            <span>{quantity}</span>
                                            <button className="btn btn-success btn-sm ms-2" onClick={() => addToCart(item.id, item.img)}>+</button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                    <h5 className="mt-3">Total Amount: Rs {getTotalAmount()}</h5>
                </div>
            )}

            {}
            <div className="row">
                {vegetableItems.map((item) => (
                    <div className="col-md-3 mb-4" key={item.id}>
                        <div
                            className="card h-100 d-flex flex-column"
                            onClick={() => {
                                setSelectedImage(item.img);
                                setLastClickedImage(item.img); 
                            }}
                            style={{ cursor: "pointer" }}
                        >
                            <img src={item.img} className="card-img-top" alt={item.title} style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body d-flex flex-column text-center">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="text-success">{item.offer}</p>
                                <h6 className="text-danger">Rs- {item.price.toFixed(2)}</h6>
                                <div className="mt-auto">
                                    <button
                                        className="btn btn-success"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart(item.id, item.img); 
                                        }}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Deals;
