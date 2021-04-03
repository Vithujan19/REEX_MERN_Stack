import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import spinner from '../spinner.gif';
import { Link } from 'react-router-dom';
//import { set } from 'mongoose';

const ViewNews = props => {
    const [title,setTitle] = useState('');
    const [article, setArticle] = useState('');
    const [authorname, setAuthorName] = useState('');
    const [fileName, setFileName] = useState("");
    //const [postDate, setPostDate] = useState(new Date());

    useEffect(() => {
        axios.get(`http://localhost:8080/articles/`+props.match.params.id)
        .then((response) => [
            setTitle(response.data.title),
            setArticle(response.data.article),
            setAuthorName(response.data.authorname),
            setFileName(response.data.articleImage),
            //setPostDate(new Date(response.data.postDate))
        ])
        .catch((error) => console.log(error))
    }, [props.match.params.id]);

    return (
        <MainContainer>
            {!title || !article || !authorname ? (<img src={spinner} alt="loading..."/>):
                <>
                <img src={`/uploads/${fileName}`} alt="..." style={{margin: "0 auto", width: "100%"}}></img>
                <h2>{title}</h2>
                <p>{article}</p>
                {/* <p>{postDate}</p> */}
                <p className="badge badge-secondary">{authorname}</p>
                <br/>
                <Link to="/" type="submit" className="btn btn-primary">
                    Back to Home
                </Link>
                </>
            }
        </MainContainer>
    )
}

export default ViewNews;

//MAIN CONTAINER
const MainContainer = styled.div`
    margin: 6rem auto;
    padding: 3rem 14rem;

    h2{
        text-align: center;
        font-weight: 900;
        color: var(--dark-green);
    }

    img{
        width: 10rem;
        display: block;
        margin: auto;
    }
`;
