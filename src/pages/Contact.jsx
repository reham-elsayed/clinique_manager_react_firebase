import React from 'react'
import { assets } from '../assets/assets/assets_frontend/assets'
import {Link} from 'react-router-dom'
function Contact() {
  return (
    <div className='container mx-auto px-5' >   
      
       <div className=" lg:mx-5 card md:card-side bg-base-100 ">
    <div className="lg:w-1/3 m-2">
    <figure className=' h-full'>
<img
className=" pt-3 self-end"
  src={assets.contact_image}
  alt="contact" />
</figure>
    </div>

<div className="card-body m-2 border-1 border-gray-500 md:w-2/3 shadow-xl">
<div className='flex flex-col gap-5'>
<h2 className="card-title">Our Office:</h2>
<p>Lorem ipsum dolor sit amet.
</p>
<p>Lorem ipsum dolor sit amet.
</p>
<p>Lorem ipsum dolor sit amet.
</p>
<div>
<p>CAREERS AT PRESCRIPTO:</p>
  <p className=''>Lorem ipsum dolor sit amet.</p></div>

  </div>

  <div className="card-actions pt-5">
      <Link to="/doctors" className="btn btn-primary">book appointment</Link>
    </div>

</div>
</div></div>
  )
}

export default Contact