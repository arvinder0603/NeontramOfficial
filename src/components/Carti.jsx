import React, { useState } from 'react';
import axios from 'axios';


const Carti = ({ cart, updateQuantity, closeCart }) => {

  const sendWhatsAppMessage = () => {
    const message = `New Order Details:
      Name: ${formData.name}
      Address: ${formData.address}
      Phone Number: ${formData.phoneNumber}
      Email: ${formData.email}
      Additional Details: ${formData.details}
      Total Amount: ₹${totalAmount}
      Items: 
      ${cart.map(item => `${item.name} - ₹${item.price} x ${item.quantity}`).join('\n')}`;
  
    window.open(`https://api.whatsapp.com/send?phone=+919078825885&text=${encodeURIComponent(message)}`, '_blank');

    setName('');
    setMail('');
    setText('');
  }

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
    details: ''
  });

  const [name, setName] = useState(''); // Declare 'name' state
  const [mail, setMail] = useState(''); // Declare 'mail' state
  const [text, setText] = useState(''); // Declare 'text' state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleIncreaseQuantity = (index) => {
    updateQuantity(index, 1);
  }

  const handleDecreaseQuantity = (index) => {
    updateQuantity(index, -1);
  }

  const totalAmount = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

 
      
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with order details
    const orderDetails = {
      items: cart,
      totalAmount,
      formDetails: formData
    };

  
   
  }











  return (
    <div className="max-w-md mx-auto bg- p-4 md:p-8 border border-gray-300 rounded-lg bg-[#F9EBDC]  shadow-lg">
      <div className="max-w-md mx-auto bg-[#F9EBDC] p-4 md:p-8 border border-gray-300 rounded-lg shadow-lg">
  <h2 className="text-xl font-semibold mb-4">Cart</h2>
  <ul className="mb-4">
    {cart.map((item, index) => (
      <li key={index} className="flex justify-between items-center mb-2">
        <div>{item.name} - ₹{item.price}</div>
        <div className="flex items-center">
          <button onClick={() => handleDecreaseQuantity(index)} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2">-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleIncreaseQuantity(index)} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full ml-2">+</button>
        </div>
      </li>
    ))}
  </ul>
  <p>Total Amount: ₹{totalAmount}</p>
</div>

<form className="mt-4">
  <div className="mb-4">
    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="border rounded-xl shadow-2xl px-4 py-2 w-full" required />
  </div>
  <div className="mb-4">
    <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
    <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} className="border rounded-xl shadow-2xl px-4 py-2 w-full" required />
  </div>
  <div className="mb-4">
    <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone Number</label>
    <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} className="border rounded-xl shadow-2xl px-4 py-2 w-full" required />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="border rounded-xl shadow-2xl px-4 py-2 w-full" required />
  </div>
  <div className="mb-4">
    <label htmlFor="details" className="block text-gray-700 font-bold mb-2">Additional Details</label>
    <textarea id="details" name="details" value={formData.details} onChange={handleInputChange} className="border rounded-xl shadow-2xl px-4 py-2 w-full" required></textarea>
  </div>
  <div className='flex gap-6'>
  <button onClick={sendWhatsAppMessage} type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded">Submit Order</button>
  <button onClick={closeCart} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Close Cart</button>
  </div>
 
</form>


      
    
    </div>
  );
}

export default Carti;
