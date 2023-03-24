import Image from 'next/image'

import FotoBruno from '../assets/foto-bruno.png'
import LinkedinIcon from '../assets/linkedin.png'
import GithubIcon from '../assets/github.png'


export default function Home() {
  return (
    <>
      <div className='flex w-screen justify-center'>
        <div className='bg-boardall w-11/12 min-h-boardh rounded-3xl mt-8 flex lg:flex-row sm:flex-col mb-10'>
          <aside className='bg-gradient-to-b from-laranja to-meiolaranja min-h-boardall lg:w-1/4 sm:w-full rounded-l-3xl rounded-r-3xl lg:rounded-r-none'>
            <div className='flex justify-center'>
              <Image src={FotoBruno} alt='Foto do desenvolvedor Bruno' className='mt-10'/>
            </div>
            <div className='ml-10 mt-10'>
              <p className='font-bold text-2xl text-white underline decoration-sky-500 animate-bounce'>
                Bruno Ferreira Pedraça
              </p>
              <span className='font-bold text-xl text-white animate-pulse'>
                Desenvolvedor
              </span>
            </div>
            <div className='flex flex-row sm:pb-5'>
              <a href="https://www.linkedin.com/in/brunofpedraca/" target='_blank'>
                <button className='w-14 h-14 border-solid border-1 bg-icon rounded-full flex justify-center items-center mx-8 mt-8 hover:animate-bounce'>
                  <Image src={LinkedinIcon} alt='icon do linkedin'/>
                </button>
              </a>
              <a href="https://github.com/BrunoFerreira95" target='_blank'>
                <button className='w-14 h-14 border-solid border-1 bg-icon rounded-full flex justify-center items-center mt-8 hover:animate-bounce'>
                  <Image src={GithubIcon} alt='icon do linkedin'/>
                </button>
              </a>
            </div>
          </aside>
          <section className='m-10'>
            <h1 className='font-bold text-white text-4xl mb-5'>Tecnologias</h1>
            <div className='grid gap-4 md:grid-cols-4 sm:grid-cols-2'>
              <span className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-black to-white'>ReactJS</span>
              <span className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-black to-white'>NextJS</span>
              <span className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-black to-white'>TailWind</span>
              <span className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-black to-white'>Jest</span>
              <span className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-black to-white'>Multiplataforma</span>
              <span className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-black to-white'>Git</span>
              <span className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-black to-white'>Github</span>
              <span className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-black to-white'>Kanban</span>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
