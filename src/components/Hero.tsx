import { useState } from 'react'
import { AiOutlineBulb } from 'react-icons/ai'
import { FaVolumeUp } from 'react-icons/fa'
import { FaArrowRotateRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { RxEnterFullScreen } from 'react-icons/rx'
import { TiPlusOutline } from 'react-icons/ti'
import LogoSymbol from './../assets/logoSymbol.png'
import LogoText from './../assets/logoText.png'

const Hero = () => {
    const [slide, setSlide] = useState<number>(1)
    const maxSlides = 10

    const [activeTab, setActiveTab] = useState<string>('quiz')

    const ActiveTabContent = () => {
        switch (activeTab) {
            case 'quiz':
                return <p className='mt-5 text-3xl font-semibold'>Quiz Content</p>
            case 'test':
                return <p className='mt-5 text-3xl font-semibold'>Test Content</p>
            case 'game':
                return <p className='mt-5 text-3xl font-semibold'>Game Content</p>
            case 'others':
                return <p className='mt-5 text-3xl font-semibold'>Others Content</p>
        }
    }

    return (
        <main className='mb-16'>
            <h1 className='text-3xl text-blue-900 font-bold'>
                Relations and Function ( Mathematics )
            </h1>
            <div className='flex flex-col items-center mt-16'>
                <div>
                    <ul className='flex gap-10 text-2xl flex-wrap'>
                        <li
                            className={`${activeTab === 'study' ? 'text-blue-900 after:scale-x-100' : ''} after:content-[""] after:block after:bg-blue-900 after:w-full after:h-[2px] after:rounded-xl after:scale-x-0 hover:after:scale-x-100 cursor-pointer`}
                            onClick={() => setActiveTab('study')}>
                            Study
                        </li>
                        <li
                            className={`${activeTab === 'quiz' ? 'text-blue-900 after:scale-x-100' : ''} after:content-[""] after:block after:bg-blue-900 after:w-full after:h-[2px] after:rounded-xl after:scale-x-0 hover:after:scale-x-100 cursor-pointer`}
                            onClick={() => setActiveTab('quiz')}>
                            Quiz
                        </li>
                        <li
                            className={`${activeTab === 'test' ? 'text-blue-900 after:scale-x-100' : ''} after:content-[""] after:block after:bg-blue-900 after:w-full after:h-[2px] after:rounded-xl after:scale-x-0 hover:after:scale-x-100 cursor-pointer`}
                            onClick={() => setActiveTab('test')}>
                            Test
                        </li>
                        <li
                            className={`${activeTab === 'game' ? 'text-blue-900 after:scale-x-100' : ''} after:content-[""] after:block after:bg-blue-900 after:w-full after:h-[2px] after:rounded-xl after:scale-x-0 hover:after:scale-x-100 cursor-pointer`}
                            onClick={() => setActiveTab('game')}>
                            Game
                        </li>
                        <li
                            className={`${activeTab === 'others' ? 'text-blue-900 after:scale-x-100' : ''} after:content-[""] after:block after:bg-blue-900 after:w-full after:h-[2px] after:rounded-xl after:scale-x-0 hover:after:scale-x-100 cursor-pointer`}
                            onClick={() => setActiveTab('others')}>
                            Others
                        </li>
                    </ul>
                </div>
                {activeTab === 'study' ? (
                    <>
                        <div className='bg-gradient-to-tr from-blue-600 to-blue-900 w-2/5 mt-14 aspect-video min-w-[20rem] rounded-3xl overflow-hidden relative text-white'>
                            <div className='flex justify-between w-full px-6 py-7 text-3xl absolute top-3'>
                                <div className='cursor-pointer'>
                                    <AiOutlineBulb />
                                </div>
                                <div className='cursor-pointer'>
                                    <FaVolumeUp />
                                </div>
                            </div>
                            <div className='flex justify-center items-center flex-col w-full h-full text-3xl font-bold'>
                                <p>9 + 6 + 7x - 2x - 3</p>
                            </div>
                        </div>
                        <div className='w-1/3 flex justify-between mt-4 items-center'>
                            <div className='flex gap-24 text-2xl items-center'>
                                <div className='cursor-pointer'>
                                    <FaArrowRotateRight />
                                </div>
                                <div
                                    className='aspect-square rounded-full bg-gradient-to-t from-blue-600 to-blue-900 p-2 text-white cursor-pointer'
                                    onClick={() =>
                                        setSlide((prevTab) => (prevTab > 1 ? prevTab - 1 : maxSlides))
                                    }>
                                    <FaChevronLeft />
                                </div>
                            </div>
                            <div className='font-bold text-xl select-none'>{slide}/10</div>
                            <div className='flex gap-24 text-2xl items-center'>
                                <div
                                    className='aspect-square rounded-full bg-gradient-to-t from-blue-600 to-blue-900 p-2 text-white cursor-pointer'
                                    onClick={() =>
                                        setSlide((prevTab) =>
                                            prevTab < maxSlides ? prevTab + 1 : 1,
                                        )
                                    }>
                                    <FaChevronRight />
                                </div>
                                <div className='cursor-pointer'>
                                    <RxEnterFullScreen />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <ActiveTabContent />
                )}
            </div>
            <div className='flex justify-between items-center select-none'>
                <div className='flex justify-center items-center'>
                    <div>
                        <img src={LogoSymbol} alt='Hyggex Logo' width='100px' />
                    </div>
                    <div>
                        <div>
                            <p className='font-semibold text-zinc-500'>Published by</p>
                        </div>
                        <img src={LogoText} alt='Hyggex' />
                    </div>
                </div>
                <div className='flex justify-center items-center gap-6 text-2xl cursor-pointer'>
                    <div className='bg-gradient-to-t from-blue-700 to-blue-900 rounded-full text-white p-2'>
                        <TiPlusOutline />
                    </div>
                    <p className='bg-gradient-to-t from-blue-700 to-blue-900 [-webkit-background-clip:text] text-transparent font-semibold'>
                        Create Flashcard
                    </p>
                </div>
            </div>
        </main>
    )
}
export default Hero
