import { RiAncientPavilionLine} from 'react-icons/ri';
import {IconContext} from 'react-icons';
import React from 'react';

function IconTest(){
    return(
      <div>
        <IconContext.Provider value={{color:'black', size: '100px'}}>
          TEST<RiAncientPavilionLine />
        </IconContext.Provider>        
      </div>
    );
  }
  export default IconTest;