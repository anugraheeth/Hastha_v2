const SmallCard = ({ title, count, icon }) => (
    <div className="flex items-center bg-white rounded-lg shadow-md p-4 w-full sm:w-64 md:w-72 lg:w-80 hover:shadow-lg transition">
      <div className="text-4xl mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{count}</p>
      </div>
    </div>
  );
  
  export default SmallCard;
  