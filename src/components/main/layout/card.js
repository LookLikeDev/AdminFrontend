import React from 'react';

import {withStyles}		from '@material-ui/core/styles';

import Button			from '@material-ui/core/Button';
import Card				from '@material-ui/core/Card';
import CardActionArea	from '@material-ui/core/CardActionArea';
import CardActions		from '@material-ui/core/CardActions';
import CardContent		from '@material-ui/core/CardContent';
import Typography		from '@material-ui/core/Typography';

import VoiceOverOff		from '@material-ui/icons/VoiceOverOff';

const styles = {
	block: {
		margin: 10,
	},
	area: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	image_area: {
		position: 'relative',
		height: 350, minWidth: 60,
		width: 'fit-content',
	},
	image: {
		maxHeight: 350, maxWidth: '100%',
	},
	reported: {
		position: 'absolute', top: 15, right: 15,
		height: 30, width: 30,
		borderRadius: '50%',
		backgroundColor: '#fc4600', color: '#fff',
		fontSize: 24,
		textAlign: 'center',
	},
	buttons: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
};

export default withStyles(styles)((props) => {
	let {classes,data} = props;
	return (
		<Card className={classes.block}>
			<CardActionArea>
				<CardContent className={classes.area}>
					{/*<Typography gutterBottom variant="h5" component="h2">ид {data.id}</Typography>*/}
					<div className={classes.image_area}>
						<img className={classes.image} src={data.picture_uri} alt="" />
						{data.is_reported && (<div className={classes.reported}>!</div>)}
					</div>
					<Typography component="p">{new Date(data.date_published.seconds*1000).toLocaleString()}</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={classes.buttons}>
				{(!data.is_checked || data.is_blocked) && (
					<Button size="small" color="primary"   onClick={_ => props.check_look(data,false)}>Хорошая</Button>
				)}
				{(!data.is_checked || !data.is_blocked) && (
					<Button size="small" color="secondary" onClick={_ => props.check_look(data,true )}>Плохая</Button>
				)}
				<div style={{marginBottom:2,cursor:'pointer'}} onClick={_ => props.block_user(data)}>
					<VoiceOverOff color="action" />
				</div>
			</CardActions>
		</Card>
	);
})
