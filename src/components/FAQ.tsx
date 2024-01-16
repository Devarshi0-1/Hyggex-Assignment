import { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6'

const FAQ = () => {
    const faq = [
        {
            question: 'Can education flashcards be used for all age groups?',
            answer: 'Answer 1',
        },
        {
            question: 'How do education flashcards work?',
            answer: 'Answer 2',
        },
        {
            question: 'Can education flashcards be used for test preparation?',
            answer: 'Answer 3',
        },
    ]

    const [activeTab, setActiveTab] = useState<number | null>(null)

    return (
        <div>
            <h1 className='bg-gradient-to-t mb-5 from-blue-700 to-blue-900 [-webkit-background-clip:text] text-transparent mt-8 text-4xl font-bold'>
                FAQ
            </h1>
            <div className='w-2/3 text-xl flex flex-col gap-7'>
                {faq.map(({ question, answer }, i) => (
                    <div
                        className='border rounded-xl border-blue-700 border-solid px-4 py-2 cursor-pointer'
                        key={question}
                        onClick={() => {
                            if (activeTab === i) setActiveTab(null)
                            else setActiveTab(i)
                        }}>
                        <div className='flex justify-between items-center font-semibold'>
                            <p>{question}</p>
                            <FaAngleDown />
                        </div>
                        <div className={`${activeTab === i ? 'mt-4' : 'hidden'}`}>
                            <p>{answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default FAQ
