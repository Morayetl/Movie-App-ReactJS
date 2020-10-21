import React from 'react';
import { Card, Col, Row, Rate, Button } from 'antd';
import './BrowserSideBar.css';

const categories:Array<string> = [
    'Recent releases',
    'TV',
    'Action',
    'Anime',
    'Children & Family',
    'Classics',
    'Comedy',
    'Documentaries',
    'Dramas',
    'Horror',
    'Independent',
    'International Movies',
    'Music'
]
class BrowserSideBar extends React.Component {
    render(){
        return (
            <Row>
                <Row className="BrowserCard">
                    <Row>
                        <span className="heading">
                            Browse
                        </span>              
                    </Row>    
                    {
                        categories.map((category) => {
                            return (
                                <Row className="w-100 mt-10">
                                    <a href="#" className="category-item">
                                        {category}
                                    </a>              
                                </Row>                        
                            )
                        })
                    }                
                </Row>
          </Row>
        );        
    }

}


export default BrowserSideBar;