const Header = () => (
    <header className="flex justify-between items-center bg-[#1B2C34] text-white px-8 py-4">
      <div className="text-lg font-bold text-[#F6CE3E]">മലയാളം</div>
      <nav className="flex gap-6">
        <a href="#" className="hover:text-[#F6CE3E]">hasthadi</a>
        <a href="#" className="hover:text-[#F6CE3E]">FAQ'S</a>
        <a href="#" className="hover:text-[#F6CE3E]">Feedback</a>
        <a href="#login" className="font-semibold hover:text-[#F6CE3E]">Login</a>
        <a href="#" className="font-semibold hover:text-[#F6CE3E]">Register</a>
      </nav>
    </header>
  );

export default Header