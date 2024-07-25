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

            <p className='text-xl mt-20 leading-8'>
            Hello! I am a passionate frontend developer with a solid foundation in HTML, CSS, JavaScript, React, and Tailwind CSS. My journey into the world of web development began during my BTech in Computer Science and Engineering at Christ University, where I discovered a love for crafting user-friendly and visually appealing web applications. With a deep understanding of HTML and CSS, I create well-structured and aesthetically pleasing web pages, ensuring seamless user experiences across various devices. My proficiency in JavaScript allows me to build dynamic and interactive applications, enhancing the functionality and responsiveness of websites. Specializing in React, I develop complex and efficient single-page applications (SPAs), leveraging the power of this library to deliver fast and intuitive user experiences. Additionally, I utilize Tailwind CSS for styling, enjoying its utility-first approach to design, which speeds up the development process and results in clean, responsive interfaces.
            </p>

            <br />

            <p className='text-xl mt-10 leading-8'>
            In my work, I am committed to writing clean, maintainable code and adhering to best practices in web development. I believe in continuous learning and stay updated with the latest trends and technologies to ensure my skills remain cutting-edge. Over the course of my career, I have worked on a variety of projects, each presenting unique challenges and opportunities for growth. Whether creating a simple landing page or developing a complex web application, I approach each project with enthusiasm and a problem-solving mindset. I am always excited to take on new challenges and collaborate on innovative projects. If you are looking for a dedicated frontend developer to bring your ideas to life, I would love to connect and explore how we can work together.
            </p>
        </div>
    </div>
  )
}

export default About