import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
// import DynamicStar from './Images/DynamicStar.png'

const AverageStar = (props) => {
  let fullStars = true

  let renderStar = () => {
    let starArray = []
    for (let i = 1; i <= 5; i++) {
      if (fullStars) {
        if (props.averageRating >= i) {
          starArray.push(<div className={`star-black-filled-jr ${props.smallStar ? "smallStar" : ""}`} />)
        } else {
          fullStars = false
          let percentage = (1 - (i - props.averageRating)) * 100
          starArray.push(
            <div className="partial-star-container-jr" style={{
              background: `linear-gradient(90deg, black ${percentage}%, lightGrey ${percentage}%)`,
              // background: "black",
              color: "blue",
              clipPath: `polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)`
            }}> </div >)

          // <FontAwesomeIcon icon={faStar} className="partial-star-jr"
          //   style={{
          //     background: `linear-gradient(180deg, black ${percentage}%, lightGrey ${percentage}%)`
          //   }} />)
        }
      } else {
        starArray.push(<div className="star-grey-filled-jr" />)
      }

    }
    return starArray
  }



  // // getting in a number from 0-5
  // if (props.averageRating > 1) // then black
  //   if (props.averageRating = 0) // then grey
  //     if (props.averageRating < 1 ) // partial

  return (
    <div>
      {renderStar()}
    </div>
  )
}

export default AverageStar