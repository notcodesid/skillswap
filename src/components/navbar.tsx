export default function Navbar() {
  return (
    <nav className=" bg-black w-full z-50 flex justify-between items-center py-4 px-6">
      <div className="text-white text-xl font-semibold">SkillSwap</div>
      <div className="flex gap-4">
        <button className="text-gray-300 hover:text-white transition-colors">
          Join Waitlist
        </button>
        {/* <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
          Sign up
        </button> */}
      </div>
    </nav>
  );
}