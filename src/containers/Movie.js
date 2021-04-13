import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

class Movie extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item">Movie</li>
                            <li className="breadcrumb-item active" aria-current="page">Classroom of the Elite</li>
                        </ol>
                    </nav>
                    <div className="row">
                        <div className="col-md-4">
                            <img className="img-fluid img-thumbnail" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn8pDzFF1Vx-YLrILl1-G4YippDq4qqZfk4GJI2Q6-cfLah_gf" />
                        </div>
                        <div className="col-md-8">
                            <h2>"เรื่องย่อ"</h2>
                            <blockquote className="blockquote">
                                <p className="mb-2">เมื่อคิโยทากะได้เข้าเรียนที่โรงเรียนมัธยมของชนชั้นสูงที่รัฐบาลให้การสนับสนุน สิ่งที่เขาค้นพบมีเพียงความจริงที่ว่าระบบการศึกษาบนพื้นฐานของคุณธรรมนั้นเป็นแค่ภาพมายา</p>
                                <footer className="blockquote-footer">เรื่องย่อ โดย <cite title="Source Title">Netflix</cite></footer>
                            </blockquote>
                        </div>
                        <div className="col-md-12"><hr /></div>
                        <div className="col-md-4">
                            <h3>Cast นักแสดง</h3>
                        </div>
                        <div className="col-md-8">
                        <iframe width="100%" height="450" src="https://www.youtube.com/embed/766qmHTc2ro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Movie;