import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cards({ item }) {
  const navigate = useNavigate();

  console.log("Received item in Cards:", item);

  const handleCardClick = () => {
    console.log("Navigating with item:", item);
    sessionStorage.setItem('item', JSON.stringify(item)); 
    navigate('/details');
  };

  const imageUrl = item?.image || 'https://via.placeholder.com/300'; 
  
  return (
    <div
      className="card bg-base-100 w-full sm:w-72 md:w-80 shadow-xl dark:bg-slate-900 dark:text-white dark:border cursor-pointer transform transition-all hover:scale-105 hover:rotate-2"
      onClick={handleCardClick}
    >
      
      <figure className="h-44 sm:h-52 md:h-64 flex items-center justify-center overflow-hidden mb-4">
        <img
          src={imageUrl}
          alt={item?.title || 'Product Image'}
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
        />
      </figure>

      <div className="card-body flex flex-col justify-between text-center p-4">
        <h2 className="card-title text-lg font-semibold text-gray-800 dark:text-white">
          {item?.name || 'Unnamed Product'}
          <div className="bg-green-700 text-white rounded-full px-3 py-1 text-sm ml-3 inline-block">
            {item?.category || 'Uncategorized'}
          </div>
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {item?.title || 'No description available'}
        </p>

        <div className="card-actions justify-center mt-4 space-x-4">
          <div className="badge badge-outline text-gray-800 dark:text-white">
            ₹{item?.price ? item.price.toFixed(2) : '0.00'}
          </div>
          <div className="badge badge-outline text-gray-600 dark:text-gray-300">
            {item?.rating?.rate ? `${item.rating.rate} ★` : 'No ratings'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
