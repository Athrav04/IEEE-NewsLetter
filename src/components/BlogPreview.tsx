import React from 'react'

const BlogPreview = () => {
  return (
    <div className='w-11/12 h-64 flex items-start'>
         <img src='/4276.avif' className='h-2/3 place-self-start w-1/5 object-fill rounded-lg mt-2'></img>
        <div className='ml-5 w-4/5 h-full relative'>
            <h1 className='text-3xl text-white font-serif font-bold'>
                Overview of GPT-o4 model by OpenAI
            </h1>
            <h3 className='text-md quaternary-text font-roboto font-light mt-1'>November 27,2024</h3>
            <p className='text-lg font-roboto mt-5 secondary-text h-2/5 overflow-hidden leading-snug pr-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolores doloribus exercitationem pariatur voluptatibus, repellat repellendus ratione. Ab quo similique asperiores dolorem adipisci provident aspernatur facere alias reiciendis, reprehenderit illo.</p>
            <div className='absolute bottom-0 pb-2 flex justify-start items-center'>
                <img src='https://api.dicebear.com/9.x/micah/svg' className='h-8 w-8 rounded-full opacity-70 '></img>
                <h4 className='secondary-text font-light pl-2'>Atharva K</h4>
                <span className='ml-5 flex gap-2'>
                    <span className='rounded-xl border-[0.5px] border-white/55 px-2 py-1 text-sm font-roboto '>Machine Learning</span>
                    <span className='rounded-xl border-[0.5px] border-white/55 px-2 py-1 text-sm font-roboto '>Ai</span>
                    <span className='rounded-xl border-[0.5px] border-white/55 px-2 py-1 text-sm font-roboto '>Frontend</span>
                </span>
            </div>
        </div>
       
    </div>  
  )
}

export default BlogPreview