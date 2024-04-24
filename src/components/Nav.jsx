import { Link } from 'react-router-dom';
import { Botao } from '../components/Botao';
import { useState } from 'react';

export const Nav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [icone, setIcone] = useState("menu")
  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIcone(icone === "menu" ? "close" : "menu");

  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setIcone("menu");
  };


  return (
    <nav className='flex z-10 justify-between mx-auto items-center py-6'>
      <p className='text-3xl font-bold'>LOGO</p>

      <div className={`absolute bg-[#242125] lg:bg-[#1C1A1D] min-h-[45vh] left-0 z-10 ${isMenuOpen ? 'top-[10%]' : 'top-[-100%]'} w-full flex items-center px-4 lg:static lg:items-center lg:min-h-fit lg:w-auto duration-500 gap-12 flex-col lg:flex-row justify-center`}>
        <div className=''>
          <ul className='flex flex-col items-center lg:flex-row gap-4'>
            <Link to="/" onClick={handleCloseMenu}><li className='text-xl font-bold transition-all hover:text-sky-600'>Início</li></Link>
            <Link to="/trilhas" onClick={handleCloseMenu}><li className='text-xl font-bold transition-all hover:text-sky-600'>Trilhas</li></Link>
            <Link to="/colabore" onClick={handleCloseMenu}><li className='text-xl font-bold transition-all hover:text-sky-600'>Colabore</li></Link>
          </ul>

        </div>

        <div className='flex flex-col lg:flex-row gap-6'>
          <button className='border-2 border-sky-600 rounded-lg px-4 py-1'>Entrar</button>
          <Botao prop="Cadastre-se" />
        </div>
      </div>

      <div className='lg:hidden'>
        <div className='flex justify-end lg:hidden'>
          <div className="text-5xl cursor-pointer " >
            <ion-icon name={icone} onClick={onToggleMenu}></ion-icon>
          </div>
        </div>
      </div>

    </nav>
  )
}