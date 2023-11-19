import { Carousel } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';

import Text from '@/components/text/text'

const customTheme: CustomFlowbiteTheme['carousel'] = {
    "root": {
        "leftControl": "none",
        "rightControl": "none"
    },
    "indicators": {
        "active": {
            "off": "bg-grayoff hover:grayoff",
            "on": "bg-darkpurple"
        },
        "base": "h-3 w-3 rounded-full",
    },
    "item": {
        "base": "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
        "wrapper": "w-full flex-shrink-0 transform cursor-grab snap-center"
    },
    "scrollContainer": {
        "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
        "snap": "snap-x"
    }
};

type props = {
    windowWidth: number
}

const Mobile = ({ windowWidth }: props) => {
    return (
        <div className="flex flex-col">
            <div>
                <div>
                    <div>
                        <Text className="text-[50px] leading-normal font-normal text-lightgray pt-5 pl-5" words={'ATHLETS'} />
                        <div className='relative w-full pt-4 hero container max-w-screen-lg mx-auto flex h-64 justify-center z-10'>
                            <div className='absolute'>
                                <img
                                    src="athletsStar.svg"
                                    alt="athletsStar"
                                    className="m-auto"
                                />
                            </div>
                        </div>
                        <div className="relative h-72 z-0">
                            <Carousel theme={customTheme} slide={false}>
                                <div className='h-full w-full bg-gray1'>
                                    <div className='flex flex-col items-start gap-2.5 px-5 py-16'>
                                        <div className='flex flex-row gap-2.5'>
                                            <img src="number1.svg" alt="number1" className='m-auto' width={18} height={21}></img>
                                            <div className="text-gray-300 text-left font-normal text-3xl">CONNECTION</div>
                                        </div>
                                        <div className="text-black text-left font-normal text-15 left-0 top-4 w-full flex items-center justify-start">
                                            Connect with coaches directly, you can ping coaches to view profile.
                                        </div>
                                    </div>
                                </div>

                                <div className='h-full w-full bg-gray1'>
                                    <div className='flex flex-col items-start gap-2.5 px-5 py-16'>
                                        <div className='flex flex-row gap-2.5'>
                                            <img src="number2.svg" alt="number2" className='m-auto' width={18} height={21}></img>
                                            <div className="text-gray-300 text-left font-normal text-3xl">COLLABORATION</div>
                                        </div>
                                        <div className="text-black text-left font-normal text-15 left-0 top-4 w-full flex items-center justify-start">
                                            Work with other student athletes to increase visibility. When you share and like other players' videos, it will increase your visibility as a player. This is the teamwork aspect of Surface 1.
                                        </div>
                                    </div>
                                </div>

                                <div className='h-full w-full bg-gray1'>
                                    <div className='flex flex-col items-start gap-2.5 px-5 py-16'>
                                        <div className='flex flex-row gap-2.5'>
                                            <img src="number3.svg" alt="number3" className='m-auto' width={18} height={21}></img>
                                            <div className="text-gray-300 text-left font-normal text-3xl">GROWTH</div>
                                        </div>
                                        <div className="text-black text-left font-normal text-15 left-0 top-4 w-full flex items-center justify-start">
                                            Resources and tools for you to get better as a student Athelte.
                                            Access to training classes, tutor sessions, etc</div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>

                    <div className='pt-5'>
                        <Text className="text-[50px] leading-normal font-normal text-lightgray pl-5" words={'PLAYERS'} />
                        <div className='relative w-full pt-4 hero container max-w-screen-lg mx-auto flex h-64 justify-center z-10'>
                            <div className='absolute'>
                                <img
                                    src="playersStar.svg"
                                    alt="playersStar"
                                    className="m-auto"
                                />
                            </div>
                        </div>
                        <div className="relative h-72 z-0">
                            <Carousel theme={customTheme} slide={false}>
                                <div className='h-full w-full bg-gray1'>
                                    <div className='flex flex-col items-start gap-2.5 px-5 py-16'>
                                        <div className='flex flex-row gap-2.5'>
                                            <img src="number1.svg" alt="number1" className='m-auto' width={18} height={21}></img>
                                            <div className="text-gray-300 text-left font-normal text-3xl">CONNECTION</div>
                                        </div>
                                        <div className="text-black text-left font-normal text-15 left-0 top-4 w-full flex items-center justify-start">
                                            Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.
                                        </div>
                                    </div>
                                </div>

                                <div className='h-full w-full bg-gray1'>
                                    <div className='flex flex-col items-start gap-2.5 px-5 py-16'>
                                        <div className='flex flex-row gap-2.5'>
                                            <img src="number2.svg" alt="number2" className='m-auto' width={18} height={21}></img>
                                            <div className="text-gray-300 text-left font-normal text-3xl">COLLABORATION</div>
                                        </div>
                                        <div className="text-black text-left font-normal text-15 left-0 top-4 w-full flex items-center justify-start">
                                            Work with recruiter to increase your chances of findingtalented athlete.</div>
                                    </div>
                                </div>

                                <div className='h-full w-full bg-gray1'>
                                    <div className='flex flex-col items-start gap-2.5 px-5 py-16'>
                                        <div className='flex flex-row gap-2.5'>
                                            <img src="number3.svg" alt="number3dark" className='m-auto' width={18} height={21}></img>
                                            <div className="text-gray-300 text-left font-normal text-3xl">GROWTH</div>
                                        </div>
                                        <div className="text-black text-left font-normal text-15 left-0 top-4 w-full flex items-center justify-start">
                                            Save your time, recruit proper athlets for your team.</div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobile