import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/navbar";
import SmallCard from "../component/smallcard";
import logo from "../images/digi.png";
import MapComponent from "../component/map";
import Footer from "../component/footer";
import { User, Lock } from "lucide-react";
import { post } from "./services/ApiEndPoint";

const categories = [
  { title: "Students", count: 103, icon: "🎓" },
  { title: "Business", count: 9, icon: "💼" },
  { title: "Women & Children", count: 435, icon: "👩‍👧" },
  { title: "Employment", count: 25, icon: "🛠️" },
  { title: "Population", count: 765, icon: "👥" },
  { title: "Differently abled", count: 15, icon: "♿" },
];

const SearchBar = () => (
  <div className="flex justify-center mt-6">
    <input
      type="text"
      placeholder="type here to search for services"
      className="w-96 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700">
      explore now
    </button>
  </div>
);

const App = () => {

  const navigate =useNavigate();

  const [formData, setFormData] = useState({
    your_name: "",
    your_pass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await post("api/auth/login",formData)
      console.log(response.data.message);

      if(response.status==200){
        navigate("/dashboard")
      }

    } catch (error) {
       console.log(error.response.data.message)
    }
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Header />
      <main className="text-center px-6 items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <img className="h-[650px] mb-[-150px] ml-[-75px]" src={logo} alt="logo" />
            <h1 className="text-2xl font-light w-[500px] text-center">
              welcome to <span className="text-orange-500 font-semibold">hasthadi</span>, where
              digital empowerment opens doors to new opportunities for you!
            </h1>
          </div>
          <div className="flex items-center justify-center mr-[75px]">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
              {categories.map((cat, index) => (
                <SmallCard key={index} title={cat.title} count={cat.count} icon={cat.icon} />
              ))}
            </section>
          </div>
        </div>
      </main>

      <section className="flex items-center justify-center min-h-screen bg-gray-50" id="login">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto p-20">
            {/* left image */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img
                src={logo}
                alt="sign up"
                className="max-w-[500px] md:max-w-[300px] object-contain"
              />
            </div>

            {/* right form */}

            <div className="w-full md:w-1/2 px-8 py-10">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">log in</h2>
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="flex items-center border-b-2 border-gray-300 py-2">
                  <User className="text-gray-500 mr-2" size={20} />
                  <input
                    type="text"
                    name="your_name"
                    id="your_name"
                    placeholder="your name"
                    className="w-full focus:outline-none text-gray-700 bg-transparent border-0"
                    onChange = {(e)=>handleChange(e)}
                  />
                </div>

                <div className="flex items-center border-b-2 border-gray-300 py-2">
                  <Lock className="text-gray-500 mr-2" size={20} />
                  <input
                    type="password"
                    name="your_pass"
                    id="your_pass"
                    placeholder="password"
                    className="w-full focus:outline-none text-gray-700 bg-transparent border-0"
                    onChange = {(e)=>handleChange(e)}
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow"
                  >
                    log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <MapComponent />
      <Footer />
    </div>
  );
};

export default App;
