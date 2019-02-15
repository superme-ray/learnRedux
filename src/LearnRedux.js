import React,{Component, Fragment} from 'react';
import {Input,Button,List} from 'antd';
import './learRedux.css';
import store from './store/index.js';
import {changeInputValueAction,addItemAction,deleteItemAction} from './store/actionCreators';

class LearnRedux extends Component{
	constructor(props){
		super(props);
		this.state = store.getState();
		this.handleChange = this.handleChange.bind(this);
		this.handleClick= this.handleClick.bind(this);
		this.listenerState = this.listenerState.bind(this);
		store.subscribe(this.listenerState);
	}
	listenerState(){
		this.setState(store.getState());
	};
	render(){
		return (
			<Fragment>
				<div className='header'>
					<Input
						placeholder="input value"
						value={this.state.inputValue}
						style={{paddingLeft:'22px', width:'60%',marginRight:'20px',marginBottom:'20px'}}
						onChange={this.handleChange}
					/>
					<Button type="primary" onClick={this.handleClick}>提交</Button>
				</div>
				<div>
					<List
						style={{marginLeft:'20px',width:'59%'}}
						size="large"
						bordered
						dataSource={this.state.list}
						renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this,index)} key={index}>{item}</List.Item>)}
					/>
				</div>
			</Fragment>
		)
	}
	handleChange(e){
		store.dispatch(changeInputValueAction(e.target.value));
	}
	handleClick(){
		store.dispatch(addItemAction())
	}
	deleteItem (index) {
		store.dispatch(deleteItemAction(index));
	}
}

export default LearnRedux;

