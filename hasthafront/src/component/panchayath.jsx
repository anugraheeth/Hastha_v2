import React from 'react';

const KidangoorGramapanchayat = ({ pres, secr, memb }) => {
  return (
    <div className="min-w-full ">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 pb-4">
          <h4 className="text-2xl font-semibold text-gray-800 mb-2">KIDANGOOR GRAMAPANCHAYAT</h4>
          <h4 className="text-xl font-medium text-gray-600 mb-0">GLANCE</h4>
          <hr className='mt-2 mb-0' />
        </div>
        <div className="p-6 pt-0">
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-spacing-2">
                <tbody>
                    <tr className="border-b border-gray-300  ">
                    <td className="font-medium text-gray-700 pt-2 pb-2">WARD NO</td>
                    <td className="text-gray-600 pt-2 pb-2">12</td>
                    </tr>
                    
                    <tr className="border-b border-gray-300">
                    <td className="font-medium text-gray-700 pt-2 pb-2">WARD</td>
                    <td className="text-gray-600 pt-2 pb-2">WARDNAME</td>
                    </tr>
                    
                    <tr className="border-b border-gray-300">
                    <td className="font-medium text-gray-700 pt-2 pb-2">PRESIDENT</td>
                    <td className="text-gray-600 pt-2 pb-2">{pres}</td>
                    </tr>
                    
                    <tr className="border-b border-gray-300">
                    <td className="font-medium text-gray-700 pt-2 pb-2">SECRETARY</td>
                    <td className="text-gray-600 pt-2 pb-2">{secr}</td>
                    </tr>
                    
                    <tr className="border-b border-gray-300">
                    <td className="font-medium text-gray-700 pt-2 pb-2">WARD MEMBER</td>
                    <td className="text-gray-600 pt-2 pb-2">{memb}</td>
                    </tr>
                    
                    <tr className="border-b border-gray-300">
                    <td className="font-medium text-gray-700 pt-2 pb-2">AREA</td>
                    <td className="text-gray-600 pt-2 pb-2">2456 Sq. Km</td>
                    </tr>
                    
                    <tr className="border-b border-gray-300">
                    <td className="font-medium text-gray-700 pt-2 pb-2">DISTRICT</td>
                    <td className="text-gray-600 pt-2 pb-2">KOTTAYAM</td>
                    </tr>
                    
                    <tr className="border-b border-gray-300">
                    <td className="font-medium text-gray-700 pt-2 pb-2">POST OFFICE</td>
                    <td className="text-gray-600 pt-2 pb-2">KIDANGOOR SOUTH</td>
                    </tr>
                    
                    <tr className="border-b border-gray-300">
                    <td className="font-medium text-gray-700 pt-2 pb-2">ASSEMBLY</td>
                    <td className="text-gray-600 pt-2 pb-2">KADUTHURUTHY</td>
                    </tr>
                    
                    <tr className="border-b border-gray-300">
                    <td className="font-medium text-gray-700 pt-2 pb-2">LOKSABHA</td>
                    <td className="text-gray-600 pt-2 pb-2">KOTTAYAM</td>
                    </tr>
                    
                    <tr className="border-b border-gray-300">
                    <td className="font-medium text-gray-700 pt-2 pb-2">TALUK</td>
                    <td className="text-gray-600 pt-2 pb-2">TALUKNAME</td>
                    </tr>
                    
                    <tr className="border-b border-gray-300">
                    <td className="font-medium text-gray-700 pt-2 pb-2">BLOCK PANCHAYAT</td>
                    <td className="text-gray-600 pt-2 pb-2">BLOCK</td>
                    </tr>
                    
                    <tr>
                    <td className="font-medium text-gray-700 pt-2 pb-2">DISTRICT PANCHAYAT</td>
                    <td className="text-gray-600 pt-2 pb-2">KOTTAYAM</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>

      </div>
    </div>
  );
};

export default KidangoorGramapanchayat;
