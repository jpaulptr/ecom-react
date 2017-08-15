import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

 const Teaser = (prop) =>  (
     <div>
         <div> 
             <img alt={prop.props.description} src={prop.props.imageUrl} />
         </div>
         <div> 
             <p>{prop.props.description}</p>
             <Link to={`/item/${prop.props.id}`}>{prop.props.caption}</Link>             
         </div>         
     </div>
)

Teaser.propTypes = {
    props: PropTypes.shape({
    id: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    }).isRequired,
};

export default Teaser;
