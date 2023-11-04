import React from 'react';
import './BlogCSS/card.css';

export default function Card(props) {
  return (
    <div className='container mt-5'>
        <h3 className='mb-4'>{props.post}</h3>
        
        <div class="card">
            <img src={props.src} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.Ptext}</p>
                <a href="#" class="btn btn-primary">{props.link}</a>
            </div>
        </div>
    </div>
  )
}
