import React,{Component} from 'react';

import AppBar		from '@material-ui/core/AppBar';
import Tab			from '@material-ui/core/Tab';
import Tabs			from '@material-ui/core/Tabs';
import Toolbar		from '@material-ui/core/Toolbar';
import Typography	from '@material-ui/core/Typography';

const Head = () => (<AppBar position="static" color="default"><Toolbar><Typography variant="h6">Модерация</Typography></Toolbar></AppBar>);

class HeadTabs extends Component {
	state = {
		value: 0,
	};

	change = (event,value) => this.setState({value});

	show = (value) => {
		return [
			<Typography component="div" style={{padding:25}}>1</Typography>,
			<Typography component="div" style={{padding:25}}>2</Typography>,
			<Typography component="div" style={{padding:25}}>3</Typography>,
		][value];
	}

	render() {
		let {value} = this.state;

		return (
			<AppBar position="static">
				<Tabs value={this.state.value} onChange={this.change}>
					<Tab label="Новые" />
					<Tab label="Хорошие" />
					<Tab label="Плохие" />
				</Tabs>
				<div style={{backgroundColor:'#fff'}}>{this.show(value)}</div>
			</AppBar>
		);
	}
}

export default () => (
	<div>
		<Head/>
		<HeadTabs/>
	</div>
);
