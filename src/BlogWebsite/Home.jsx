
import React from 'react';
import Card from "./Card";
import Navigation from "./Navigation";
import Carousel from './Carousel';
import Pasination from './Pasination';

export default function Home() {
  return (
    <div>
        <Navigation />
        <div className='container'>
        <Carousel />
      <div className='row'>
        <div className='col-md-4'>
          <Card src='photo/gold.jpg' title='First card title' Ptext="Some quick example text to build on the card title and make up the bulk of the card'" link="Go somehere"/>
        </div>

        <div className='col-md-4'>
          <Card src='photo/Gold platinum.jpg' title='Second card title' Ptext="Some quick example text to build on the card title and make up the bulk of the card'" link="Go Anywhere"/>
        </div>

        <div className='col-md-4'>
        <Card src='photo/coding 2.jpg' title='Third card title' Ptext="Some quick example text to build on the card title and make up the bulk of the card'" link="Go Live"/>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-4'>
          <Card src='photo/gold.jpg' title='First card title' Ptext="Some quick example text to build on the card title and make up the bulk of the card'" link="Go somehere"/>
        </div>

        <div className='col-md-4'>
          <Card src='photo/Gold platinum.jpg' title='Second card title' Ptext="Some quick example text to build on the card title and make up the bulk of the card'" link="Go Anywhere"/>
        </div>

        <div className='col-md-4'>
        <Card src='photo/coding 2.jpg' title='Third card title' Ptext="Some quick example text to build on the card title and make up the bulk of the card'" link="Go Live"/>
        </div>
      </div>
      </div>
      <Pasination />
    </div>
  )
}