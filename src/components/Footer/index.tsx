import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8 bg-sky-600 h-24 text-white">
      <div className="h-full flex flex-col justify-center items-center">
        <p>© 2024 Clorian. Frontend Test.</p>
        <NavLink to='https://josecenteno-personal-website.vercel.app' className='text-xs' target='_blank'>by Jose Centeno ❤️💻</NavLink>
      </div>
    </footer>
  );
};

export default Footer;
