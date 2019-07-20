import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Form,
	FormGroup,
	Label,
	Col,
	Input
} from 'reactstrap';

import '../assets/borrow.css'
import { postBorrow } from '../Publics/redux/actions/borrow';

class BorrowForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id:this.props.id,
			modal: false,
			borrow: [],
		};

		this.toggle = this.toggle.bind(this);
		console.log(this.state.id)
	};
	
	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	render() {
		const borrow = () => {
			this.state.borrow.push({        
            bookid: this.state.id,
            user_id: this.state.user_id,
			});
			add()
			this.setState((prevState) => ({
				modal: !prevState.modal
			}));
		};
		let add = async () => {
			await this.props.dispatch(postBorrow(this.state.borrow[0]));				
		};
		return (
			<div>
				<button style={{
                            color: 'white',
                            backgroundColor: 'black',
                            marginBottom: '10px',
							width:'100px'}} 
						onClick={this.toggle}>
					Borrow
				</button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className="{this.props.className} modal-lg">
					<ModalHeader toggle={this.toggle}>
						<b>User Data</b>
					</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup row>
								<Label sm={3} size="lg">
									No KTP
								</Label>
								<Col sm={9}>
									<Input
										type="text"
										name="title"
										onChange={(e) => this.setState({ user_id: e.target.value })}
										id="title"
										placeholder="No KTP"
										bsSize="lg"
									/>
								</Col>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<a href={`/book/${this.state.id}`}><button class="buttonSave" onClick={borrow.bind(this)}>
							SAVE
						</button>
                        </a>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		borrow: state.borrow
	};
};
export default connect(mapStateToProps)(BorrowForm);