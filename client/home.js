import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const home = () => {
	const [greet, setGreet] = useState('')

	useEffect(() => {
		axios
			.get('/api/greet')
			.then(res => {
				setGreet(res.data.greet)
			})
			.catch(err => console.error(err))
	}, [])

	return (
		<div>
			Welcome to {greet}!
			<br />
			<button>
				<Link to='/2'>Go to page 2</Link>
			</button>
		</div>
	)
}

export default home
