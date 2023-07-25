import {
    Home as HomeICon, 
    Search, 
    Library
} from 'lucide-react'

export function SideBar() {
    return (
        <aside className="w-72 bg-zinc-950 p-6">

            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"/>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
                <div className="w-3 h-3 bg-green-500 rounded-full"/>
            </div>

            <nav className='space-y-5 mt-5'>
                <a
                    href="http://"
                    className='flex items-center gap-3 text-xs font-semibold text-zinc-200'>
                    <HomeICon/>
                    Home
                </a>
                <a
                    href="http://"
                    className='flex items-center gap-3 text-xs font-semibold text-zinc-200'>
                    <Search/>
                    Search
                </a>
                <a
                    href="http://"
                    className='flex items-center gap-3 text-xs font-semibold text-zinc-200'>
                    <Library/>
                    Your Library
                </a>
            </nav>

            <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3">
                <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-200'>Brasil</a>
                <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-200'>Pagode</a>
                <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-200'>Samba</a>
                <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-200'>Funk</a>
                <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-200'>As mais pedidas</a>
                <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-200'>Animadas</a>
                <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-200'>Sertanejo</a>
                <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-200'>Rock</a>
                <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-200'>Pop</a>
                <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-200'>Eletrônica</a>
                <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-200'>Hip Hop</a>
                <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-200'>Rap</a>
                <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-200'>Indie</a>
                <a href="http://" className='text-sm text-zinc-400 hover:text-zinc-200'>MPB</a>
            </nav>

        </aside>
    )
}