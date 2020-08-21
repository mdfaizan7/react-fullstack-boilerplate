import React from 'react'
import { Link } from 'react-router-dom'

const page2 = () => {
	return (
		<div>
			page 2
			<br />
			<button>
				<Link to='/'>Go back</Link>
			</button>
		</div>
	)
}

export default page2
