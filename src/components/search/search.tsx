// Search.jsx
import React from 'react';

const images = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  // ...más URLs de imágenes
];

export default function Search() {
  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((src, index) => (
        <div key={index} className="rounded overflow-hidden shadow-lg">
          <img src={src} alt={`Imagen ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
}

