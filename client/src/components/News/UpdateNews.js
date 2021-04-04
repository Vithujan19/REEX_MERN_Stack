import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UpdateNews = props => {
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

        axios.put(`http://localhost:8080/articles/update/`+props.match.params.id, formData)
        .then((response) => {
            console.log("Successfully updated");
            console.log(response);
        },
        (error) =>{
          console.log("Error : ", error);
        });
    
    };

    useEffect(() => {
        axios.get(`http://localhost:8080/articles/`+props.match.params.id)
        .then(res => [
            setEmployeeId(res.data.employeeId),
            setManagerId(res.data.managerId),
            setAmount(res.data.amount),
            setPostDate(new Date(res.data.postDate))
        ])
        .catch(error => console.log(error))
    }, [props.match.params.id]);


    
    return (
        <EditNewsContainer>
            <div className="container">
                <h1>Update Article</h1>
                <span className="message">{message}</span>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="form-group">
             <label htmlFor="employeeId">Author Name</label>
                <input type="text" value={employeeId} onChange={e => setEmployeeId(e.target.value)} className="form-control" placeholder="Requester ID"/>
            </div>
            <div className="form-group">
                <label htmlFor="managerId">Title</label>
                <input type="text" value={managerId} onChange={e => setManagerId(e.target.value)} className="form-control" placeholder="Manager ID"/>
            </div>
            <div className="form-group">
                <label htmlFor="amount">Article</label>
                <input type="text" value={amount} onChange={e => setAmount(e.target.value)} className="form-control" placeholder="IN LKR"/>
            </div>
            <div className="form-group">
                <label>Date: </label>
                <div>
                    <DatePicker
                        selected={postDate}
                        onChange={postDate => setPostDate(postDate)}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">
                Update News
            </button>
        </form>
        </div>
        </EditNewsContainer>
    )
}

export default UpdateNews;

//MAIN CONTAINER
const EEditNewsContainer = styled.div`
    margin: 3rem auto;
    padding: 4rem;
    width: 31.25rem;

    h1{
        font-weight: 900;
        color: var(--dark-green);
        
    }

    .btn-primary {
        margin-top: 2rem;
        background: var(--dark-green);
        border: none;
        &:hover{
            background: var(--light-green);
        }
    }

    .message{
        font-weight: 900;
        color: tomato;
        padding: 1rem 1rem 1rem 0;
    }
`;

