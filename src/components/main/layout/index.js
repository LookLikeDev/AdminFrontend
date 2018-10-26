import React	from 'react';

import AppBar		from '@material-ui/core/AppBar';
import Typography	from '@material-ui/core/Typography';

import Title	from './title';
import Tabs		from './tabs';
import Grid		from './grid';

export default (props) => (
	<div>
		<Title/>
		<AppBar position="static">
			<Tabs selected_page={props.state.selected_page} select_page={props.select_page} />
			<div style={{padding:2,backgroundColor:'#fff'}}>
			{
				props.state.data.length
				? (<Grid data={props.state.data} check_look={props.check_look} block_user={props.block_user} />)
				: (<Typography component="p">{props.state.loading ? 'Загружается...' : 'Луков нет'}</Typography>)
			}
			</div>
		</AppBar>
	</div>
);
