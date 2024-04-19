import { IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";




const Header = () => {
  //naavigate kurulumu
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    //sayfa yenilemyi engelle
    e.preventDefault();
    //aratılan metne eriş
    const text  = e.target[0].value;
    console.dir(text);
    //kullanıcıyı result sayfasına yönlendir
    navigate(`/results?search_quary=${text}`);
  }
  return (
    <header className="flex justify-between items-center p-4">
        <Link to={'/'} className="flex items-center gap-2">
        <img className="w-[35px] rounded" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/YouTube_play_button_square_%282013-2017%29.svg/2048px-YouTube_play_button_square_%282013-2017%29.svg.png" alt="" />
        <h1 className="text-2xl max-sm:hidden font-mono">YouTube</h1>
        </Link>

        <form 
        onSubmit={handleSubmit}
        className="flex group border border-gray-400 rounded-[20px] overflow-hidden ">
            <input type="text" 
            className="px-5 py-2 bg-black text-white online-none focus:border-blue-500 focus:border"
            placeholder="Aramak istediğiniz kelimeyi giriniz..." />
            <button className="bg-zinc-800 px-4 text-2xl hover:bg-gray-800">
            <IoSearchOutline />
            </button>
        </form>
    <div className="flex text-xl cursor-pointer gap-4">
    <FaBell className="hover:text-gray-400 transition duration-[250ms]" />
    <IoIosVideocam className="hover:text-gray-400 transition duration-[250ms]"/>
    <MdVideoLibrary className="hover:text-gray-400 transition duration-[250ms]"/>
    </div>

    </header>
  )
}

export default Header
