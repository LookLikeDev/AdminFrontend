import React from 'react';

import {withStyles}		from '@material-ui/core/styles';

import Tab	from '@material-ui/core/Tab';
import Tabs	from '@material-ui/core/Tabs';

const styles = {
	tab: {
		fontSize: 15,
	},
};

const tab = [
	'Новые',
	'Хорошие',
	'Плохие',
];

export default withStyles(styles)((props) => (
	<Tabs value={props.selected_page} onChange={(event,value) => props.select_page(value)}>
		{tab.map((e,i) => (<Tab key={i} className={props.classes.tab} label={e} />))}
	</Tabs>
));
