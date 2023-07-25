import {
    ChevronLeft, 
    ChevronRight, 
    Play
} from 'lucide-react'
import Image from 'next/image'

import { SideBar } from '../components/SideBar'
import { Footer } from '../components/Footer'

export default function Home() {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex flex-1">
                {/* menu */}
                <SideBar />
                {/* principal */}
                <main className="flex-1 p-6">
                    {/* setas */}
                    <div className="flex items-center gap-4">
                        <button className="rounded-full bg-black/40  p-1">
                            <ChevronLeft size={24}/>
                        </button>
                        <button className="rounded-full bg-black/40  p-1">
                            <ChevronRight size={24}/>
                        </button>
                    </div>

                    <h1 className="text-3xl font-semibold mt-10">Good Afternoon</h1>
                    
                    {/* primeira listagem */}
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <a href='#' className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group">
                            <Image
                                src="/album/thiaguinhotardezinha.jpg"
                                alt="Thiaguinho Tardezinha"
                                width={104}
                                height={104}/>
                            <strong>Thiaguinho</strong>
                            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full ml-auto mr-8 bg-green-400 invisible group-hover:visible ">
                                <Play/>
                            </button>
                        </a>
                        <a href='#' className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group">
                            <Image
                                src="/album/thiaguinhotardezinha.jpg"
                                alt="Thiaguinho Tardezinha"
                                width={104}
                                height={104}/>
                              <strong>Thiaguinho</strong>
                              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full ml-auto mr-8 bg-green-400 invisible group-hover:visible ">
                                <Play/>
                              </button>
                        </a>
                        <a href='#' className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group">
                            <Image
                                src="/album/thiaguinhotardezinha.jpg"
                                alt="Thiaguinho Tardezinha"
                                width={104}
                                height={104}/>
                            <strong>Thiaguinho</strong>
                            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full ml-auto mr-8 bg-green-400 invisible group-hover:visible ">
                                <Play/>
                            </button>
                        </a>
                        <a href='#' className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group">
                            <Image
                                src="/album/thiaguinhotardezinha.jpg"
                                alt="Thiaguinho Tardezinha"
                                width={104}
                                height={104}/>
                              <strong>Thiaguinho</strong>
                              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full ml-auto mr-8 bg-green-400 invisible group-hover:visible ">
                                <Play/>
                              </button>
                        </a>
                        <a href='#' className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group">
                            <Image
                                src="/album/thiaguinhotardezinha.jpg"
                                alt="Thiaguinho Tardezinha"
                                width={104}
                                height={104}/>
                            <strong>Thiaguinho</strong>
                            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full ml-auto mr-8 bg-green-400 invisible group-hover:visible ">
                                <Play/>
                            </button>
                        </a>
                        <a href='#' className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group">
                            <Image
                                src="/album/thiaguinhotardezinha.jpg"
                                alt="Thiaguinho Tardezinha"
                                width={104}
                                height={104}/>
                            <strong>Thiaguinho</strong>
                            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full ml-auto mr-8 bg-green-400 invisible group-hover:visible ">
                                <Play/>
                            </button>
                        </a>
                    </div>

                    <h2 className="text-3xl font-semibold mt-10">Made for Lucas Vitória</h2>
                    
                    {/* segunda listagem */}
                    <div className="grid grid-cols-8 gap-4 mt-4">
                        <a href='#' className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
                            <Image
                                src="/album/thiaguinhotardezinha.jpg"
                                alt="Thiaguinho Tardezinha"
                                className='w-full'
                                width={200}
                                height={200}/>
                            <strong className='font-semibold'>Daily 1</strong>
                            <span className="text-sm text-zinc-400">Anita, Thiaguinho, Maria Gadu e etc..</span>
                        </a>

                        <a href='#' className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
                            <Image
                                src="/album/thiaguinhotardezinha.jpg"
                                alt="Thiaguinho Tardezinha"
                                className='w-full'
                                width={200}
                                height={200}/>
                            <strong className='font-semibold'>Daily 1</strong>
                            <span className="text-sm text-zinc-400">Anita, Thiaguinho, Maria Gadu e etc..</span>
                        </a>

                        <a href='#' className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
                            <Image
                                src="/album/thiaguinhotardezinha.jpg"
                                alt="Thiaguinho Tardezinha"
                                className='w-full'
                                width={200}
                                height={200}/>
                            <strong className='font-semibold'>Daily 1</strong>
                            <span className="text-sm text-zinc-400">Anita, Thiaguinho, Maria Gadu e etc..</span>
                        </a>

                        <a href='#' className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
                            <Image
                                src="/album/thiaguinhotardezinha.jpg"
                                alt="Thiaguinho Tardezinha"
                                className='w-full'
                                width={200}
                                height={200}/>
                            <strong className='font-semibold'>Daily 1</strong>
                            <span className="text-sm text-zinc-400">Anita, Thiaguinho, Maria Gadu e etc..</span>
                        </a>

                        <a href='#' className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
                            <Image
                                src="/album/thiaguinhotardezinha.jpg"
                                alt="Thiaguinho Tardezinha"
                                className='w-full'
                                width={200}
                                height={200}/>
                            <strong className='font-semibold'>Daily 1</strong>
                            <span className="text-sm text-zinc-400">Anita, Thiaguinho, Maria Gadu e etc..</span>
                        </a>

                    </div>
                </main>
            </div>
            {/* footer */}
            <Footer />
        </div>
    )
}
