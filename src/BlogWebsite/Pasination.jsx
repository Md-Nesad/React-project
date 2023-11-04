import React from 'react'
import {Link} from "react-router-dom";

export default function Pasination() {
  return (
    <>
      <nav className='mt-5'>
       <ul class="pagination justify-content-center">
         <li class="page-item">
           <a class="page-link" href="#" aria-label="Previous">
              <span>&laquo;</span>
           </a>
    </li>
    <li class="page-item"><Link class="page-link" to="/">1</Link></li>
    <li class="page-item"><Link class="page-link" to="/politics">2</Link></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span>&raquo;</span>
      </a>
    </li>
  </ul>
    </nav>
    </>
  )
}
