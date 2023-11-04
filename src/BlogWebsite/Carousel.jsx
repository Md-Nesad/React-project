import React, { Component } from 'react'
import './BlogCSS/Blog.css'

export default class Carousel extends Component {
  constructor(props){
    super(props)
    this.state={
      ShortTitle:{
        Stitle: "React tutorial more then easy",
        Stitle2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatum impedit aperiam dolore earum natus porro? Distinctio sint eius voluptas accusamus! Iure dicta quod possimus voluptate delectus asperiores, atque animi ullam laudantium, sit aperiam ut? Eum voluptatibus assumenda tenetur exercitationem.",
        Stitle3: "20 Jun, 2023",
      },
      LongTitle: {
        Ltitle1: "Live tutorial reacts js",
        Ltitle2: "React js advance concept",
        Ltitle3: "PSD to html",
      },
      ChannerName:{
        Cname1: 'Hablu programmer',
        Cname2: 'Learn with sumit',
        Cname3: 'Code with harry ',

      }
    }
  }
  render() {
    return (
      <div>
        <div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade container mt-5" data-bs-ride="carousel">

          <div class="carousel-inner">
            {/* first slide */}
            <div class="carousel-item active">
             <div class="row align-items-center">
                <div className="col-md-6">
                <img src="photo/images.jpg" class="d-block w-100" alt="..."/>
                </div>

                <div className="col-md-6 text-black">
                  <p className="ShortTitle">{this.state.ShortTitle.Stitle}</p>
                  <h3 className="LongTitle">{this.state.LongTitle.Ltitle1}</h3>
                  <p className="ShortTitle">{this.state.ShortTitle.Stitle2}</p>
                  <p className="ChannelName">{this.state.ChannerName.Cname1}</p>
                  <p className="ShortTitle">{this.state.ShortTitle.Stitle3}</p>
                </div>
             </div>
            </div>
            {/* second slide */}
            <div class="carousel-item">
             <div className="row align-items-center">

              <div className="col-md-6">
              <img src="photo/jjjj.jpg" class="d-block w-100" alt="..."/>
              </div>

              <div className="col-md-6 text-black">
                  <p className="ShortTitle">{this.state.ShortTitle.Stitle}</p>
                  <h3 className="LongTitle">{this.state.LongTitle.Ltitle2}</h3>
                  <p className="ShortTitle">{this.state.ShortTitle.Stitle2}</p>
                  <p className="ChannelName">{this.state.ChannerName.Cname2}</p>
                  <p className="ShortTitle">{this.state.ShortTitle.Stitle3}</p>
                </div>
             </div>
            </div>
            {/* third slide */}
            <div class="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-6">
                <img src="photo/paralax.jpg" class="d-block w-100" alt="..."/>
                </div>

                <div className="col-md-6 text-black">
                  <p className="ShortTitle">{this.state.ShortTitle.Stitle}</p>
                  <h3 className="LongTitle">{this.state.LongTitle.Ltitle3}</h3>
                  <p className="ShortTitle">
                  {this.state.ShortTitle.Stitle2}
                  </p>
                  <p className="ChannelName">{this.state.ChannerName.Cname3}</p>
                  <p className="ShortTitle">{this.state.ShortTitle.Stitle3}</p>
                </div>
              </div>
            </div>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" ></span>
          </button>

          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>

          <h3 className='mt-5'>Recent post</h3>
        </div>
    </div>
      </div>
    )
  }
}
