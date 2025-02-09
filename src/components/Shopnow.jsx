import React from "react";

const Shopnow = () => {
  return (
    <div>
        <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Shop Now</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-4 shadow-md rounded-lg">
            <img src="https://i.pinimg.com/736x/1a/0e/07/1a0e070893f8acf86ef5a833461ebad4.jpg" alt="Product 1" className="w-full h-64 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Product 1</h3>
            <p className="text-gray-700 mt-2">$29.99</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Buy Now
            </button>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg">
            <img src="https://i.pinimg.com/736x/35/90/b1/3590b12a309de8b55f060f33ed2da609.jpg" alt="Product 2" className="w-full h-64 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Product 2</h3>
            <p className="text-gray-700 mt-2">$39.99</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
                Buy Now
            </button>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg">
            <img src="https://i.pinimg.com/736x/9e/67/d1/9e67d181cad4a1170bd75443b8e92235.jpg" alt="Product 3" className="w-full h-64 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">Product 3</h3>
            <p className="text-gray-700 mt-2">$49.99</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Buy Now
            </button>
            </div>
        </div>
        </div>
        {/* Footer */}
        <footer className="bg-gray-800 py-8">
        <div className="container mx-auto text-center text-white">
        <p>&copy; 2025 Clothing Store. All rights reserved.</p>
        <p>Contact us: <a href="https://www.instagram.com/aashish.stha007/" className="text-blue-400">Instagram</a></p>
        </div>
    </footer>
    </div>
    
  );
};

export default Shopnow;
