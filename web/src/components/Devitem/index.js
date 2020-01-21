import React from 'react';
import Delete from '@material-ui/icons/DeleteOutlined';

import './style.css';

function DevItem({dev}) {


    async function handleDelete(e){

    }

    return (
        <li className="dev-item">
        <header>
          <img src={dev.avatar_url} alt={dev.name} />

    

          <div className="user-info">
            <strong>{dev.name}</strong>
            <span>{dev.techs.join(',')}</span>
          </div>

        </header>


        <p>
          {dev.bio}
        </p>

        <div className="test">
          <a href={`https://github.com/${dev.github_username}`}>Github profile</a>
          <Delete onClick={handleDelete()} className="delete-user"></Delete>
        </div>



      </li>
    );
}



export default DevItem;