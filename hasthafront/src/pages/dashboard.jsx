import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import KidangoorGramapanchayat from "../component/panchayath";
import SmallCard from "../component/smallcard";
import MarqueeSlider from "../component/carousel";
import Sidebar from "../component/sidebar";
import { get } from "./services/ApiEndPoint";
import DashFoot from "../component/dashfooter";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [pop, setPop] = useState(0);
  const [houses, setHouses] = useState(0);
  const [com, setCom] = useState(0);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await get("api/auth/dashboard");
      if (response.status === 200) {
        const dashboardData = response.data.data;
        setData(dashboardData);
        setPop(dashboardData.population);
        setHouses(dashboardData.houses);
        setCom(dashboardData.comersial);
        // localStorage.setItem("dashboardData", JSON.stringify(dashboardData));
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // const storedData = localStorage.getItem("dashboardData");
    // if (storedData) {
    //   const parsedData = JSON.parse(storedData);
    //   setData(parsedData);
    //   setPop(parsedData.population);
    //   setHouses(parsedData.houses);
    //   setCom(parsedData.comersial);
    // } else {
      getData();
    // }
  }, []);

  const categories = [
    { title: "Population", count: pop, icon: "👥" },
    { title: "Houses", count: houses, icon: "🏡" },
    { title: "Commercial Buildings", count: com, icon: "🏢" },
  ];

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );

  return (
    <div className="h-screen flex bg-gray-100 overflow-y-hidden">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <header className="w-full flex items-center justify-between bg-white shadow-md p-4">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="text-gray-700 focus:outline-none"
            >
              {isSidebarOpen ? <X size={28} color="black" /> : <Menu size={28} color="black" />}
            </button>
            <h2 className="ml-4 text-xl font-semibold text-gray-700">🏠 Home</h2>
          </div>
          <div className="text-gray-600">Welcome, User</div>
        </header>
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-full flex justify-around">
              {categories.map((cat, index) => (
                <SmallCard key={index} title={cat.title} count={cat.count} icon={cat.icon} />
              ))}
            </div>
            <div className="md:row-span-2 rounded-lg shadow-lg h-full text-white">
              <KidangoorGramapanchayat />
            </div>
            <div className="bg-white rounded-lg shadow-lg h-auto md:col-span-2">
              <div className="p-4">
                <h4 className="text-2xl font-semibold text-gray-800 pl-4 pb-4">STATS</h4>
                <div className="table-responsive pl-3 pr-3">
                  <table className="min-w-full table-auto border-spacing-2">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <td className="font-bold text-gray-700">Category</td>
                        <td className="font-bold text-gray-700">MALE</td>
                        <td className="font-bold text-gray-700">FEMALE</td>
                        <td className="font-bold text-gray-700">TRANS</td>
                        <td className="font-bold text-gray-700">TOTAL</td>
                      </tr>
                    </thead>
                    <tbody>
                      {data && (
                        <>
                          <tr className="py-2 border-b border-gray-300">
                            <td className="text-gray-600 pt-2 pb-2">SENIOR CITIZEN</td>
                            <td className="text-gray-600 pt-2 pb-2">{data.seniormale}</td>
                            <td className="text-gray-600 pt-2 pb-2">{data.seniorfemale}</td>
                            <td className="text-gray-600 pt-2 pb-2">{data.seniortrans}</td>
                            <td className="text-gray-600 pt-2 pb-2">{data.seniorcitizens}</td>
                          </tr>
                          <tr className="py-2 border-b border-gray-300">
                            <td className="text-gray-600 pt-2 pb-2">STUDENTS</td>
                            <td className="text-gray-600 pt-2 pb-2">{data.edumale}</td>
                            <td className="text-gray-600 pt-2 pb-2">{data.edufemale}</td>
                            <td className="text-gray-600 pt-2 pb-2">{data.edutrans}</td>
                            <td className="text-gray-600 pt-2 pb-2">{data.edutotal}</td>
                          </tr>
                          <tr className="py-2 border-b border-gray-300">
                            <td className="text-gray-600 pt-2 pb-2">WIDOW</td>
                            <td className="text-gray-600 pt-2 pb-2">{data.widower}</td>
                            <td className="text-gray-600 pt-2 pb-2">{data.widow}</td>
                            <td className="text-gray-600 pt-2 pb-2">{data.transwidow}</td>
                            <td className="text-gray-600 pt-2 pb-2">{data.widowtotal}</td>
                          </tr>
                          <tr className="py-2 border-b border-gray-300">
                            <td className="text-gray-600 pt-2 pb-2">GOVT</td>
                            <td className="text-gray-600 pt-2 pb-2">{data.govempmale}</td>
                            <td className="text-gray-600 pt-2 pb-2">{data.govempfemale}</td>
                            <td className="text-gray-600 pt-2 pb-2">{data.govemptrans}</td>
                            <td className="text-gray-600">{data.govtotal}</td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg h-full md:col-span-2">
              <MarqueeSlider />
            </div>
              <DashFoot/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
