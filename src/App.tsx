import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieCard from './components/MovieCard/MovieCard';
import { Row, Col, Input, Carousel, Button } from 'antd';
import BrowserSideBar from './components/BrowserSideBar/BrowserSideBar';
import { SearchOutlined, PlayCircleFilled, PlusSquareFilled } from '@ant-design/icons';
import NavBar from './components/NavBar/NavBar';
import movies from './test-data/movies';
import carouselSlides from './test-data/carousel-slide';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
                                          {/* 
                        // @ts-ignore */}
          <Carousel effect="fade" className="carousel" autoplay>
            {
              carouselSlides.map((slide) => {
                return(
                  <div>
                    <img src={slide.thumbnailUrl}/>
                    <div className="content">
                      <h1>
                        {slide.title}
                      </h1>
                      <p>
                        {slide.description}
                      </p>
                      <div>
                      <Row gutter={12}>
                          <Col className="mt-10">
                              <Button block icon={<PlayCircleFilled/>} className="play-button" size="large">
                                  Play
                              </Button>
                          </Col>
                          <Col className="mt-10">
                              <Button block icon={<PlusSquareFilled />} className="add-tolist-button" size="large">
                                  Add to list
                              </Button>
                          </Col>
                      </Row>
                      </div>
                    </div>
                  </div>                  
                )
              })
            }
          </Carousel>          
      </header>
      <Row  gutter={24} style={{padding: '20px', overflow:'hidden', margin: 0}}>
        <Col md={{span: 6}} className="mt-30">
          <BrowserSideBar/>
        </Col>
        <Col md={{span: 18}} className="mt-30">
          <Row>
            <Input prefix={<SearchOutlined/>} placeholder="Search for movie" size="large"/>
          </Row>
          <Row gutter={24} >
            {
              movies.map((movie)=> {
                return(
                  <Col sm={{span: 24}} md={{span: 12}} lg={{span: 6}}>
                    <MovieCard data={movie}/>
                  </Col>                  
                )
              })
            }
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
