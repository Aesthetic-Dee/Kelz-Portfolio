import React from 'react';

function ContactForm() {
  return (
    <div className='bg-[#140c1c] rounded-lg p-4 sm:p-10'>
        <h1 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>
            Let's work together!
        </h1>

        <p className='text-gray-200 mt-3 lg:text-base text-xs md:text-sm'>
            Feel free to drop me a message. You can reach me via email or WhatsApp, and I'll get back to you as soon as possible.
        </p>

        {/* Input Fields */}
        <form className='mt-8 block w-full overflow-hidden'>
            <div className='flex flex-col md:flex-row items-center
             justify-between gap-4'>
                <input
                 type="text"
                 placeholder='First Name'
                 className='flex-1 bg-black text-white
                  placeholder:text-gray-600 px-6 py-3 rounded-md
                    border-[1.5px] border-gray-200 border-opacity-15
                    outline-none w-full'
                />

                <input type="text"
                    placeholder='Last Name'
                    className='flex-1 bg-black text-white
                  placeholder:text-gray-600 px-6 py-3 rounded-md 
                    border-[1.5px] border-gray-200 border-opacity-15
                    outline-none w-full'
                />
            </div>

            <div className='flex mt-5 flex-col md:flex-row items-center
             justify-between gap-4'>
                <input
                 type="email"
                 placeholder='Email address'
                 className='flex-1 bg-black text-white
                  placeholder:text-gray-600 px-6 py-3 rounded-md
                    border-[1.5px] border-gray-200 border-opacity-15
                    outline-none w-full'
                />

                <input type="text"
                    placeholder='Phone Number'
                    className='flex-1 bg-black text-white
                    placeholder:text-gray-600 px-6 py-3 rounded-md
                    border-[1.5px] border-gray-200 border-opacity-15
                    outline-none w-full'
                />
            </div>

            <textarea className='w-full mt-5 bg-black text-white
             placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px]
              border-gray-200 border-opacity-15 outline-none'
              rows={7}
              placeholder='Message'></textarea>

              <div className='mt-4'>
                <button className='px-8 py-3.5 bg-[#6aac53] text-white
                 hover:bg-[#3c7f23] transition-all duration-150 rounded-full'>
                    Send Message
                </button>
              </div>
        </form>
    </div>
  )
}

export default ContactForm;