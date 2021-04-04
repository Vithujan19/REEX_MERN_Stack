import React,{useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Paper} from '@material-ui/core';

const CreateNews = () => {
// const [managerIncharge, setManagerIncharge] = useState("");
const [title,setTitle] = useState("");
const [news,setNews] = useState("");
const [postDate, setPostDate] = useState(Date());

    const changeOnClick = e => {
        e.preventDefault();

        const formData = new FormData();

        // formData.append("managerIncharge", managerIncharge);
        formData.append("title", title);
        formData.append("news", news);
        formData.append("postDate", postDate);
        

        // setManagerIncharge("");
        setTitle("");
        setNews("");
        // setPostDate("");
       
        console.log("Current Title is " + JSON.stringify(title));
        console.log("Current News is is " + JSON.stringify(news));
        console.log("Current Date is is " + JSON.stringify(postDate));

        axios.post('http://localhost:3000/news', )
          .then((response) => {
              console.log("Successfully updated");
              console.log(response);
          },
          (error) =>{
            console.log("Error : ", error);
          });
    };


    
    return (      
      <div className="container" style={{marginTop:80}}>
        <Paper elevation={3}>
          <div className="container" style={{padding: 50}}>
          <h2>Add News</h2>
          <form onSubmit={changeOnClick} encType="multipart/form-data">
            {/* <div className="form-group">
                <label htmlFor="managerid">Manager ID</label>
                <input type="text" value={managerid} onChange={e => setManagerIncharge(e.target.value)} className="form-control" placeholder="Manager ID"/>
            </div> */}
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control" placeholder="Title"/>
            </div>
            <div className="form-group">
                <label htmlFor="news">News</label>
                <textarea value={news} onChange={e => setNews(e.target.value)} className="form-control" rows="3"></textarea>

            </div>
            
            {/* <div className="form-group">
              <label>Report Date: </label>
              <div>
                <DatePicker
                  isClearable
                  dateFormat="MMMM d, yyyy"
                  selected={postDate}
                  onChange={postDate => setPostDate(postDate)}
                />
              </div>
            </div> */}
            <button type="submit" className="btn btn-primary">
              <ion-icon name="send"></ion-icon>Post News
            </button>
          </form>
          </div>
        </Paper> 
      </div>              
    )
}

export default CreateNews;