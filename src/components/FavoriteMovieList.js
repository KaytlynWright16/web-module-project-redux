import React from 'react';

import { Link } from 'react-router-dom';

import { removeFavorite } from '../actions/favoritesActions';
import { connect } from 'react-redux';


const FavoriteMovieList = (props) => {
    const {favorites, removeFavorite} = props;
    const handleeClick = () => {
        removeFavorite(id)
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={() => {handleeClick(movie.id)}} ><span class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favoriteRducer.favorites
    }
}


export default connect(mapStateToProps, removeFavorite)(FavoriteMovieList);