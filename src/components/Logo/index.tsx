import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <NavLink to='/' className='font-bold text-lg hidden md:block'>Clorian Frontend Test</NavLink>
  )
}

export default Logo