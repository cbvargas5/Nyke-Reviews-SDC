import React from 'react'
import AverageStar from './AverageStars.jsx'

export default class ReviewPreview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewingMore: false
    }
    this.handleViewMore = this.handleViewMore.bind(this)
  }

  handleViewMore() {
    this.setState({
      viewingMore: !this.state.viewingMore
    })
  }

  renderComment() {
    if (this.state.viewingMore) {
      return (
        this.props.aReview.comment
      )
    } else if (this.props.aReview.comment.length < 121) {
      return this.props.aReview.comment
    } else {
      let commentPreview = `${this.props.aReview.comment.slice(0, 121)}...`
      return (
        commentPreview
      )
    }
  }

  render() {
    console.log()
    let data = this.props.aReview
    return (
      <div className="default-extended-preview-main-jr" >

        <div className="default-extended-preview-header-jr" >
          {data.header}
        </div>

        <div className="default-extended-preview-rating-subheader-jr" >
          <div className="default-extended-preview-stars-container-jr" >
            <AverageStar averageRating={data.star} smallStar={true} />
          </div>

          <div className="default-extended-preview-username-jr" >
            {data.username} - {data.dateWritten}
          </div>
        </div>

        <div className="default-extended-preview-comment-jr" >
          {this.renderComment()}
          <div
            onClick={() => this.handleViewMore()}
            className={(this.props.aReview.comment.length > 121) ? ("default-extended-preview-moreOrLess-jr") : ("default-extended-preview-noMoreOrLess")}>
            {(this.props.aReview.comment.length > 121) ? ((!this.state.viewingMore) ? 'More' : 'Less') : ''}
          </div>
        </div>



      </div>
    )
  }
}

// we want handleViewMore to be able to return partial or all comment body
// on click, handleView more will return either data.comment and Less
// or DefaultComment component from other page which will render partial info