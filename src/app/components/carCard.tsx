'use client'
import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Calendar, Users, Star, Heart, Settings, User, LogOut } from 'lucide-react';

export default function CarCard(car:any){
     const [viewMode, setViewMode] = useState('grid'); 
       const [favoriteCars, setFavoriteCars] = useState(new Set());
     
    <div
              key={car.id}
              className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              {/* Car Image/Icon */}
              <div className={`${
                viewMode === 'list' ? 'w-48 flex-shrink-0' : 'h-48'
              } bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center relative`}>
                <div className="text-6xl">{car.image}</div>
                
                {car.popular && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                )}
                
                <button
                  onClick={() => toggleFavorite(car.id)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                >
                  <Heart 
                    className={`w-4 h-4 ${
                      favoriteCars.has(car.id) 
                        ? 'fill-pink-500 text-pink-500' 
                        : 'text-gray-400'
                    }`} 
                  />
                </button>

                {!car.available && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Not Available
                    </span>
                  </div>
                )}
              </div>

              {/* Car Details */}
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{car.name}</h3>
                    <p className="text-gray-600 text-sm">{car.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                      ${car.price}
                    </div>
                    <div className="text-gray-500 text-sm">/day</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{car.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{car.passengers} seats</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{car.rating} ({car.reviews})</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {car.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                  <div>Transmission: {car.transmission}</div>
                  <div>Fuel: {car.fuel}</div>
                </div>

                <button
                  disabled={!car.available}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    car.available
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transform hover:scale-105'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {car.available ? 'Book Now ✨' : 'Not Available'}
                </button>
              </div>
            </div>
}