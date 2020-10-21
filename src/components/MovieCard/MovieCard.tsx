import React from 'react';
import { Card, Col, Row, Rate, Button } from 'antd';
import {PlayCircleFilled, PlusSquareFilled} from '@ant-design/icons';
import './MovieCard.css';
import { Movie } from '../../test-data/movies';

type Props = {
    data: Movie
};

class MovieCard extends React.Component<Props> {
    render(){
        return (
            <Card
            className="MovieCard mt-20"
            hoverable
            cover={<img alt="example" src={ this.props.data.thumbnailUrl || "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}  height="200" />}
          >
            <Row>
                <span className="title">
                    {this.props.data.name}
                </span>              
            </Row>
            <Row>
                <Col>
                    <Rate 
                        defaultValue={this.props.data.rating}
                        allowHalf
                        disabled
                    />
                </Col>
                <Col className="movie-meta-column">
                    <span className="movie-meta">
                        {this.props.data.year}
                    </span>
                    <span className="movie-meta">
                        {this.props.data.type}
                    </span>
                    <span className="movie-meta">
                        {`${this.props.data.duration} minutes`}
                    </span>
                </Col>
            </Row>
            <Row>
                <p className="description">
                    {this.props.data.description}
                </p>
            </Row>
            <Row gutter={12}>
                <Col className="mt-10">
                    <Button block icon={<PlayCircleFilled/>} className="play-button">
                        Play
                    </Button>
                </Col>
                <Col className="mt-10">
                    <Button block icon={<PlusSquareFilled />} className="add-tolist-button">
                        Add to list
                    </Button>
                </Col>
            </Row>
          </Card>
        );        
    }

}

export default MovieCard;