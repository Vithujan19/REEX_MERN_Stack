import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Paper } from '@material-ui/core';
import { Row, Col } from 'reactstrap';

const CreateNews = () => {
  // const [managerIncharge, setManagerIncharge] = useState("");
  const [title, setTitle] = useState('');
  const [news, setNews] = useState('');
  const [newsImg, setNewsImg] = useState('');
  const [viewOn, setViewOn] = useState('');
  const [hideOn, setHideOn] = useState('');
  const [viewers, setViewers] = useState([]);

  const onChecked = (e) => {
    const target = e.target;
    var value = target.value;

    if (target.checked) {
      setViewers[value] = value;
    } else {
      this.state.hobbies.splice(value, 1);
    }
  };

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('title', title);
    formData.append('news', news);
    formData.append('newsImg', newsImg);
    formData.append('viewOn', viewOn);
    formData.append('hideOn', hideOn);

    // setTitle("");
    // setNews("");
    // setNewsImg("");
    // setViewOn("");
    // setHideOn("");

    // console.log("Current Title is " + JSON.stringify(title));
    // console.log("Current News is is " + JSON.stringify(news));

    // axios.post('http://localhost:3000/news',)
    //     .then((response) => {
    //         console.log("Successfully updated");
    //         console.log(response);
    //     },
    //         (error) => {
    //             console.log("Error : ", error);
    //         });
  };

  return (
    <div className="container" style={{ marginTop: 40 }}>
      <Paper elevation={8}>
        <div className="container" style={{ padding: 50 }}>
          <h2 style={{ textAlign: 'center' }}>Add News</h2>
          <br />
          <form onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                placeholder="Title"
              />
            </div>
            <hr />
            <div className="form-group">
              <label htmlFor="viewers">Viewers</label>
              <Row>
                <Col xs={12} sm={2}>
                  <label class="container">
                    Manager
                    <input type="checkbox" value="manager" />
                    <span class="checkmark"></span>
                  </label>
                </Col>
                <Col xs={12} sm={2}>
                  <label class="container">
                    Employee
                    <input type="checkbox" value="employee" />
                    <span class="checkmark"></span>
                  </label>
                </Col>
              </Row>
            </div>
            <hr />
            <div className="form-group">
              <label htmlFor="news">News</label>
              <textarea
                value={news}
                onChange={(e) => setNews(e.target.value)}
                className="form-control"
                rows="3"
              ></textarea>
            </div>
            <br />
            <Row>
              <Col xs={12} sm={4}>
                <div className="form-group">
                  <input
                    type="file"
                    name="newsImg"
                    onChange={(e) => setNewsImg(e.target.files[0])}
                    id="newsImg"
                  />
                  <br />
                  <label for="newsImg">Attach Image</label>
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div className="form-group">
                  <label>Publish On:</label>
                  <input
                    className="form-control"
                    name="viewOn"
                    type="date"
                    onChange={(e) => setViewOn(e.target.value)}
                  />
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div className="form-group">
                  <label>Hide On:</label>
                  <input
                    className="form-control"
                    name="hideOn"
                    type="date"
                    onChange={(e) => setHideOn(e.target.value)}
                  />
                </div>
              </Col>
            </Row>
            <button type="submit" className="btn btn-primary">
              <ion-icon name="send"></ion-icon>Post News
            </button>
          </form>
        </div>
      </Paper>
    </div>
  );
};

export default CreateNews;
