import React, { useEffect, useState } from "react";
import { SearchIcon, Menu, X, Home } from "lucide-react";
import * as XLSX from "xlsx";
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
import { saveAs } from "file-saver";
import Sidebar from "../../component/sidebar";
import DashFoot from "../../component/dashfooter";
import { get } from "../services/ApiEndPoint";
import FilterSidebar from "../../component/filter";

const Resfilter = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUser] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await get('api/auth/resfilter');
      const data = response.data.data;
      console.log(response.data.message);
      setUsers(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      const filteredUser = users.filter(
        (user) =>
          user.f_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.house_number.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUser(filteredUser);
    }
  }, [users, searchTerm]);  

  const handleDownloadCSV = () => {
    const csvData = [
      ["House NO", "Name", "Blood Group", "Contact"],
      ...filteredUsers.map((user) => [
        user.house_number,
        user.f_name,
        user.blood_group,
        user.phone_num,
      ]),
    ];

    const csvContent =
      "data:text/csv;charset=utf-8," +
      csvData.map((row) => row.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    saveAs(encodedUri, "users.csv");
  };

  const handleDownloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredUsers);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Users");
    XLSX.writeFile(wb, "users.xlsx");
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const tableData = filteredUsers.map((user) => [
      user.house_number,
      user.f_name,
      user.blood_group,
      user.phone_num,
    ]);
    doc.autoTable({
      head: [["House NO", "Name", "Blood Group", "Contact"]],
      body: tableData,
    });
    doc.save("users.pdf");
  };

  const handleDownloadJSON = () => {
    const blob = new Blob([JSON.stringify(filteredUsers, null, 2)], { type: "application/json" });
    saveAs(blob, "users.json");
  };

  const handleDownloadXML = () => {
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n<users>';
    const xmlFooter = "\n</users>";

    const xmlData = filteredUsers
      .map(
        (user) => `  
  <user>
    <House_NO>${user.house_number}</House_NO>
    <Name>${user.f_name}</Name>
    <Blood_Group>${user.blood_group}</Blood_Group>
    <Contact>${user.phone_num}</Contact>
  </user>`
      )
      .join("");

    const xmlContent = xmlHeader + xmlData + xmlFooter;
    const blob = new Blob([xmlContent], { type: "application/xml" });
    saveAs(blob, "users.xml");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSidebar =() => {setSidebarOpen(!isSidebarOpen)}

  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );

  return (
    <>
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
              <h2 className="ml-4 text-xl font-semibold text-gray-700">RESIDENTIAL FILTER</h2>
            </div>
            <div className="text-gray-600">Welcome, User</div>
          </header>
          <main className="flex p-6 bg-gray-100 overflow-y-auto">
            <div>
              <FilterSidebar setFilteredUser = {setFilteredUser} users={users} />
            </div>
            <div className="container mx-auto p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      id="search"
                      className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search for users"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="absolute top-1/3 left-3 transform -translate-y-1/2">
                      <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <select
                      value={rowsPerPage}
                      onChange={handleRowsPerPageChange}
                      className="border p-2 rounded-lg"
                    >
                      <option value={5}>5 rows per page</option>
                      <option value={10}>10 rows per page</option>
                      <option value={15}>15 rows per page</option>
                    </select>
                  </div>
                </div>
                <div className="relative">
                  <button
                    className="inline-flex items-center text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 rounded-lg text-sm px-3 py-1.5"
                    type="button"
                    onClick={toggleDropdown}
                  >
                    <span className="mr-2">Download</span>
                    <svg
                      className="w-2.5 h-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                      aria-hidden="true"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1l4 4 4-4"
                      ></path>
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefault"
                      >
                        <li>
                          <button
                            onClick={handleDownloadCSV}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 w-full"
                          >
                            CSV
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={handleDownloadExcel}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 w-full"
                          >
                            Excel
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={handleDownloadPDF}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 w-full"
                          >
                            PDF
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={handleDownloadJSON}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 w-full"
                          >
                            JSON
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={handleDownloadXML}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 w-full"
                          >
                            XML
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="min-w-full table-auto">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="p-4 text-sm text-gray-500 text-start">House No</th>
                      <th className="p-4 text-sm text-gray-500 text-start">Name</th>
                      <th className="p-4 text-sm text-gray-500 text-start">Blood Group</th>
                      <th className="p-4 text-sm text-gray-500 text-start">Contact Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentUsers.map((user) => (
                      <tr key={user.id} className="border-b hover:bg-gray-100">
                        <td className="p-4">{user.house_number}</td>
                        <td className="p-4">{user.f_name}</td>
                        <td className="p-4">{user.blood_group}</td>
                        <td className="p-4">{user.phone_num}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => changePage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
                >
                  Previous
                </button>
                <div className="text-sm">
                  Page {currentPage} of {totalPages}
                </div>
                <button
                  onClick={() => changePage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
                >
                  Next
                </button>
              </div>
              <DashFoot />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Resfilter;
