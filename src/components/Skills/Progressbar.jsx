import React from 'react';
import './progressbar.css';

const Progressbar = ({done, text}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
    <div className='progress_bar'>
    <h2>{text}</h2>
		<div className="progress">
			<div className="progress-done" style={style}>{done}%</div>
      </div>
      </div>
	)
}

export default Progressbar;