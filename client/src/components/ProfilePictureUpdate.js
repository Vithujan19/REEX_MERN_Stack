import React from 'react';
import DefaultProf from './Admin/profImg.jpg';
import {Button} from 'reactstrap';

function ProfilePictureUpdate(props) {
    return (
        <div style={{textAlign:"center", paddingBottom:10}}>
            <img src={DefaultProf} />
            <br/>
            <br/>
            <input
              className="form-control"
              type="file"
              name="profImg"
            />
            <br/>
            <Button color="primary" type="submit">Save</Button>
        </div>
    );
}

export default ProfilePictureUpdate;