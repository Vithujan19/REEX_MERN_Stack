// import React, { Component } from 'react'

// class News extends Component {
//     render() {
//         return (
//             <div id="news" class="container tab-pane fade">
//                 <h3>News</h3>
//                 <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
//             </div>
//         )
//     }
// }

// export default News;

import React,{useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios';

const News = () => {
    const [employeeId,setEmployeeId] = useState([])
    //DELETE ARTICLE BY ID
    const deleteArticle = id => {
        axios.delete(`http://localhost:3000/news/${id}`)
            .then(res => alert(res.data));
            setEmployeeId(employeeId.filter(elem => elem._id !==id));
    };

    return (
        <MainContainer>
            <div className="container">
            <table className="table">
        <thead className="thead-light">
          <tr>
            <th style={{width:"4%", alignContent:"center"}}></th>
            <th style={{width:"16%", alignContent:"center"}}>Title</th>
            <th style={{width:"16%", alignContent:"center"}}>News</th>
            <th style={{width:"16%", alignContent:"center"}}>Viewers</th>
            <th style={{width:"16%", alignContent:"center"}}>Date</th>
            <th style={{width:"16%", alignContent:"center"}}>Actions</th>
          </tr>
        </thead>
      </table>
      </div>
            {/* {!posts.length ? (
                <img  alt="loading..."/>
            ) : 
            
            
            posts.map((employeeId,key) => (
                <div className="container" key={key}>
                    <table className="table" border="1" width="100%">
                        <tbody>
                            <tr>
                                <td style={{width:"16.5%"}}>{employeeId.employeeId}</td>
                                <td style={{width:"16.5%"}}>{employeeId.managerId}</td>
                                <td style={{width:"16.5%"}}>{employeeId.amount}</td>
                                <td style={{width:"16.5%"}}>{employeeId.postDate}</td>
                                <td style={{width:"16.5%"}}>
                                    <Link to={`/update/${employeeId._id}`}>
                                        Edit Article
                                    </Link> | 
                                    <button onClick={()=> deleteArticle(employeeId._id)}>
                                        Delete Article
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))} */}
        </MainContainer>
    )
}

export default News;

//MAIN CONTAINER
const MainContainer = styled.div`
    Margin: 7em 0;

    img{
        width: 10rem;
        display: block;
        margin: 0 auto;
    }
`;
