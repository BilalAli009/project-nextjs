import React from 'react'

const page = () => {
  return(
     <div>
     <figure className="md:flex bg-green-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
       <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/bilal.jpg.jpeg" alt="" width="384" height="512"/>
       <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
         <blockquote>
           <p className="text-lg font-medium">
             “My name is Bilal Ali. I am a student of FSc. I have a great interest in IT and I am committed to my work. My aim is to work hard in the feild of IT and achive my goals. ”
           </p>
         </blockquote>
         <figcaption className="font-medium">
           <div className="text-sky-500 dark:text-sky-400">
             Bilal Ali
           </div>
           <div className="text-slate-700 dark:text-slate-500">
             Student of Fsc
           </div>
         </figcaption>
       </div>
     </figure></div>
  )
}

export default page