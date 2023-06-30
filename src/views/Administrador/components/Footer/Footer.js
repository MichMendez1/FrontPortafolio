// import React from 'react';
// import './Footer.css';


// const Footer = () => {
//   return (
//     <div className='footer'>
//         <div className='sb_footer section_padding'>
//             <div className='sb_footer-links'>
//                 <div className='sb_footer-links_div'>
//                     <h4>For Bussines</h4>
//                     <a href='/Inicio'>
//                         <p>Trabajadores</p>
//                     </a>
//                 </div>
//                 <div className='sb_footer-links_div'>
//                     <h4>Proximamanete</h4>
//                     <div className='socialmedia'>
//                         <p>f</p>
//                     </div>
//                 </div>
//             </div>
//             <hr></hr>
//             <div className='sb_footer-below'>
//                 <div className='sb_footer-copyright'>
//                     <p>
//                         @{new Date().getFullYear()} CNH. Todos los derechos reservados.
//                     </p>
//                 </div>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer







import React from 'react'

const Footer = () => {
    return (
<div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
    <p class="text-center text-body-secondary">@{new Date().getFullYear()} CNH. Todos los derechos reservados.</p>
  </footer>
</div>
    )
}

export default Footer
