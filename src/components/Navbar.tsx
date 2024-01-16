import Logo from './../assets/logo.svg'

const Navbar = () => {
    return (
        <nav className='flex justify-between py-5 items-center mb-8 flex-wrap text-xl'>
            <div>
                <img src={Logo} alt='HyggeX Logo' width='150px' />
            </div>
            <div>
                <ul className='flex gap-8 items-center flex-wrap hover:[&>li]:text-zinc-600'>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>FlashCard</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                    <li>
                        <a href='#'>FAQ</a>
                    </li>
                    <li>
                        <a href='/#login'>
                            <button className='px-4 py-1 bg-gradient-to-b from-blue-900 to-blue-500 text-white rounded-2xl'>
                                Login
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
