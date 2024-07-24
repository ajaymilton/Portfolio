import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>

            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quisquam aut natus impedit fuga maiores distinctio perspiciatis facilis. Rerum dolor repudiandae, et dolorum quidem voluptatem ex a doloremque dolore cumque perferendis, quasi mollitia. Libero facere labore velit rerum dolores praesentium animi vero nobis eum. Alias nisi temporibus qui reprehenderit asperiores?
            </p>

            <br />

            <p className='text-xl mt-10'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet vitae accusantium repellat ipsum quos fuga, cumque blanditiis sint dolore mollitia natus deserunt atque aliquam nemo velit maxime fugiat praesentium dolor. Repellendus ex pariatur sequi aliquam, atque saepe illum aut. Nobis, pariatur veritatis in doloribus fuga quidem ut distinctio nulla. Possimus.
            </p>
        </div>
    </div>
  )
}

export default About