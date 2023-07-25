import { 
    Shuffle, 
    SkipForward,
    Mic2, 
    Laptop2,
    Volume2,
    Maximize2,
    LayoutList,
    Repeat,
    SkipBack,
    Play
} from 'lucide-react'
import Image from 'next/image'

export function Footer() {
    return (
        <footer className="bg-zinc-800 border-t border-zinc-500 px-6 py-6 flex items-center justify-between">
            {/* musica tocando no momento */}
            <div className='flex items-center gap-3'>
                <Image
                    src="/album/thiaguinhotardezinha.jpg"
                    alt="Thiaguinho Tardezinha"
                    width={56}
                    height={56}/>
                <div className="flex flex-col gap-1">
                    <strong className='font-normal'>Tardezinha</strong>
                    <span className="text-sm text-zinc-500">Thiaguinho</span>
                </div>
            </div>
            {/* player */}
            <div className='flex flex-col items-center gap-2'>
                <div className='flex items-center gap-6'>
                    <Shuffle size={20} className='text-zinc-500'/>
                    <SkipBack size={20} className='text-zinc-500'/>

                    <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
                        <Play/>
                    </button>

                    <SkipForward size={20} className='text-zinc-500'/>
                    <Repeat size={20} className='text-zinc-500'/>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-sm text-zinc-500">0:31</span>
                    <div className="h-1 rounded-full w-96 bg-zinc-500 ">
                        <div className="h-1 rounded-full w-40 bg-white "></div>
                    </div>
                    <span className="text-sm text-zinc-500">2:14</span>
                </div>

            </div>
            {/* volume */}
            <div className='flex items-center gap-4'>
                <Mic2 size={20} className='text-zinc-500'/>
                <LayoutList size={20} className='text-zinc-500'/>
                <Laptop2 size={20} className='text-zinc-500'/>
                <div className='flex items-center gap-2'>
                    <Volume2 size={20} className='text-zinc-500'/>
                    <div className="h-1 rounded-full w-20 bg-zinc-500 ">
                        <div className="h-1 rounded-full w-10 bg-white "></div>
                    </div>
                </div>
                <Maximize2 size={20} className='text-zinc-500'/>
            </div>
        </footer>
    )
}