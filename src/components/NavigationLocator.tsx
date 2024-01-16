import { PiHouse } from 'react-icons/pi'
import { FaChevronRight } from 'react-icons/fa6'

const NavigationLocator = () => {
    return (
        <div className='flex items-center gap-2 [&>:last-child]:text-blue-900 [&>:last-child>p]:font-bold flex-wrap'>
            <div className='flex items-center gap-2'>
                <PiHouse className='text-2xl' />
            </div>
            <div className='flex items-center gap-2'>
                <FaChevronRight className='text-blue-900 text-xs' />
                <p className='text-xl cursor-pointer'>
                    <a href='#'>Flashcard</a>
                </p>
            </div>
            <div className='flex items-center gap-2'>
                <FaChevronRight className='text-blue-900 text-xs' />
                <p className='text-xl cursor-pointer'>
                    <a href='#'>Mathematics</a>
                </p>
            </div>
            <div className='flex items-center gap-2'>
                <FaChevronRight className='text-blue-900 text-xs' />
                <p className='text-xl cursor-pointer'>
                    <a href='#'>Relation and Function</a>
                </p>
            </div>
        </div>
    )
}
export default NavigationLocator
