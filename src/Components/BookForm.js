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

import '../assets/BookForm.css'

import { postBook } from '../Publics/redux/actions/book';


class BookForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			act: 0,
			book: [],
		};

		this.toggle = this.toggle.bind(this);
		this.toggleDrop = this.toggleDrop.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}
	toggleDrop() {
		this.setState((prevState) => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}

	render() {
		const bookAdd = () => {
			let fk_cat = '';
			switch (this.state.fk_cat) {
				case 'Anak':
					fk_cat = 2;
					break;
				default:
					fk_cat = 1;
			}
			let fk_loc = '';
			switch (this.state.fk_loc) {
				case 'Rak 2':
					fk_loc = 2;
					break;
				default:
					fk_loc = 1;
			}
			this.state.book.push({
				name: this.state.name,
				writer: this.state.writer,
				des: this.state.des,
				image: this.state.image,
				fk_cat,
				fk_loc,
			});

			add()
			this.setState((prevState) => ({
				modal: !prevState.modal
			}));
			console.log(this.state.book);
		};
		let add = async () => {
			await this.props.dispatch(postBook(this.state.book[0]));
		};
		return (
			<div>
				<div class="button-bar">
					<button class="button" onClick={this.toggle}>
						+
				</button>
				</div>
				<Modal isOpen={this.state.modal} toggle={this.toggle} size="lg" style={{ marginTop: '60px', }}>
					<ModalHeader toggle={this.toggle}>
						<b>Add Data</b>
					</ModalHeader>
					<ModalBody style={{ paddingLeft: '60px' }}>
						<Form>
							<FormGroup row>
								<Label sm={2} size="lg">
									Name
								</Label>
								<Col sm={8}>
									<Input
										type="text"
										name="name"
										onChange={(e) => this.setState({ name: e.target.value })}
										id="name"
										placeholder="Name..."
										bsSize="lg"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={2} size="lg">
									Writer
								</Label>
								<Col sm={8}>
									<Input
										type="text"
										name="writer"
										onChange={(e) => this.setState({ writer: e.target.value })}
										id="writer"
										placeholder="Writer..."
										bsSize="lg"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={2} size="lg">
									Image
								</Label>
								<Col sm={8}>
									<Input
										type="url"
										name="image"
										onChange={(e) => this.setState({ image: e.target.value })}
										id="image"
										placeholder="Image..."
										bsSize="lg"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={2} size="lg">
									Category
								</Label>
								<Col sm={8}>
									<select style={{
										color: 'white',
										backgroundColor: 'black',
										marginTop:'15px',
										width:'100px',}} 
										onChange={(e) => this.setState({ fk_cat: e.target.value })}>
										<option >Fiksi</option>
										<option>Anak</option>
									</select>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={2} size="lg">
									Location
								</Label>
								<Col sm={8}>
									<select style={{
										color: 'white',
										backgroundColor: 'black',
										marginTop:'15px',
										width:'100px',}}
										onChange={(e) => this.setState({ fk_loc: e.target.value })}>
										<option >Rak 1</option>
										<option>Rak 2</option>
									</select>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={2} size="lg">
									Description
								</Label>
								<Col sm={6}>
									<textarea
										type="text"
										name="Description"
										onChange={(e) => this.setState({ des: e.target.value })}
										id="description"
										placeholder="Description..."
										style={{ width: '471px', height: '60px' }}
									/>
								</Col>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<a href='/books/'><button type='submit' class="buttonSave" onClick={bookAdd.bind(this)}>
							SAVE
						</button></a>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		book: state.book
	};
};
export default connect(mapStateToProps)(BookForm);