import React,{Component} from 'react';

import {config,firestore as db} from '../../config';

import API from '../../services/api';

import Layout from './layout';

export default class Main extends Component {
	state = {
		selected_page: 0,
		loading: true,
		data: [],
	};

	async componentDidMount() {
		await this.get_data();
	}

	get_data = async () => {
		let {selected_page} = this.state;
		let data;

		await this.setState({loading:true});

		// Новые
		if(selected_page === 0) {
			data = await API(db.collection('looks').where('is_checked','==',false).limit(config.main.limit));
		} else {
			data = await API(db.collection('looks').where('is_checked','==',true ).limit(config.main.limit));

			// Хорошие
			if(selected_page === 1) {
				data = data.filter(row => !row.is_blocked);

			// Плохие
		} else if(selected_page === 2) {
				data = data.filter(row => row.is_blocked);
			}
		}
		data.sort((a,b) => (b.date_published.seconds-a.date_published.seconds));

		await this.setState({data,loading:false});
	}
	check_look = async (look,is_blocked) => {
		console.log(look,is_blocked);
		await db.collection('looks').doc(look.id).set({is_checked:true,is_blocked},{merge:true});
		let data = this.state.data;
		data = data.filter(e => e.id!==look.id);
		await this.setState({data});
	}
	block_user = async (look) => {
		if(window.confirm("Хотите заблокировать пользователя?")) {
			await db.collection('users').doc(look.user.id).set({is_blocked:true},{merge:true});
		}
	}

	select_page = async (page) => {
		await this.setState({selected_page:page,data:[]});
		this.get_data();
	}

	render() {
		return (
			<Layout
				state={this.state}
				select_page={this.select_page}
				check_look={this.check_look}
				block_user={this.block_user}
			/>
		);
	}
}
