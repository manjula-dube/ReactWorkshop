import React, { Component } from "react"

import starSVG from "./star.svg"

const langMap = {
	en: "English",
}

class Card extends Component {
	constructor() {
		super()
		this.state = { showMore: true }
		this.CHAR_LIMIT = 200

		this.onShowMoreClick = this.onShowMoreClick.bind(this)
	}

	onShowMoreClick() {
		this.setState(prevState => ({ showMore: !prevState.showMore }))
	}

	render() {
		const { data } = this.props

		if (!data) {
			return
		}

		const { CHAR_LIMIT } = this
		const { showMore } = this.state

		return (
			<div className="card">
				<div className="img-container">
					<img className="poster-img" src={`http://image.tmdb.org/t/p/w185/${data.poster_path}`} />
				</div>
				<div className="card-detail">
					<div className="card-title">{data.title}</div>
					<div className="card-lang">{langMap[data.original_language]}</div>
					<div className="card-vote">votes : {data.vote_count}</div>
					<div className="card-vote">
						<img src={starSVG} />
						{data.vote_average}
					</div>
					<div className="card-desc">
						{data.overview.substr(0, showMore ? CHAR_LIMIT : data.overview.length)}
						{data.overview.length > CHAR_LIMIT && (
							<div className="show-more" onClick={this.onShowMoreClick}>
								{showMore ? "Show more" : "Show less"}
							</div>
						)}
					</div>
					<div className="card-release">{data.release_data}</div>
				</div>
			</div>
		)
	}
}

export default Card