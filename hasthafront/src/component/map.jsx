import React from 'react';

const MapComponent = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="w-full lg:w-11/12">
        <div className="bg-white shadow-lg rounded-lg">
          <div className="p-4">
            <h4 className="text-xl font-semibold">Map</h4>
          </div>
          <div className="p-4">
            <div className="relative text-right" style={{ height: '400px', width: '100%' }}>
              <div className="overflow-hidden bg-none absolute inset-0">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://maps.google.com/maps?q=kidangoor&t=k&z=15&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
