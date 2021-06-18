import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import StarIcon from "@material-ui/icons/Star"
function SearchResult({img,location,title,description,star,price,total}) {
    return (
        <div className="SearchResult">
            <img src={img} alt=""/>
            <FavoriteBorderIcon  className="searchResult__heart" />
            <div className="search__info">
                <div className="searchResult__infotop">
              <p>{location}</p>
              <h3>{title}</h3>
              <p>____________</p>
              <p>{description}</p>
                </div>
                <div className="searchResult__infobottom">
                    <div className="serachResult__stars">
                        <StarIcon className="searchresult__star" />
                        <p><strong>{star}</strong></p>
                    </div>
                    <div className="searchResults__price">
                        <h2>{price}</h2>
                        <p>{total}TOTAL</p>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default SearchResult
