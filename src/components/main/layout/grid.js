import React from 'react';

import GridList		from '@material-ui/core/GridList';
import GridListTile	from '@material-ui/core/GridListTile';

import Card from './card';

export default (props) => {
	let cols;
	if(window.innerWidth <= 414)		cols = 1;
	else if(window.innerWidth <=  768)	cols = 2;
	else if(window.innerWidth <= 1024)	cols = 3;
	else								cols = 4;

	return (
		<GridList cellHeight='auto' cols={cols}>
			{props.data.map((e,i) => (
				<GridListTile key={i}><Card data={e} check_look={props.check_look} block_user={props.block_user} /></GridListTile>
			))}
		</GridList>
	);
}
