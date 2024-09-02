import React from 'react';
import Sidebar from './components/sidebar/sidebar';

export default function App() {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-grow p-5">
        <h1 className="text-3xl font-bold">Contenido Principal</h1>
      </div>
    </div>
  );
}

