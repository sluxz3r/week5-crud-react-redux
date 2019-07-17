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
			book: [],
			dropdownOpen: false
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
			this.state.book.push({
				name: this.state.name,
				writer: this.state.writer,
				image: this.state.image,
                fk_cat:this.state.fk_cat,
                fk_loc:this.state.fk_loc
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
				<button class="button" onClick={this.toggle}>
					ADD
				</button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className="{this.props.className} modal-lg">
					<ModalHeader toggle={this.toggle}>
						<b>Add Data</b>
					</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup row>
								<Label sm={3} size="lg">
									Title
								</Label>
								<Col sm={9}>
									<Input
										type="text"
										name="name"
										onChange={(e) => this.setState({ name: e.target.value })}
										id="name"
										placeholder="Name"
										bsSize="lg"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={3} size="lg">
									Author
								</Label>
								<Col sm={9}>
									<Input
										type="text"
										name="title"
										onChange={(e) => this.setState({ writer: e.target.value })}
										id="title"
										placeholder="Author..."
										bsSize="lg"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={3} size="lg">
									Image
								</Label>
								<Col sm={9}>
									<Input
										type="text"
										name="title"
										onChange={(e) => this.setState({ image: e.target.value })}
										id="title"
										placeholder="Image..."
										bsSize="lg"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={3} size="lg">
									Category
								</Label>
								<Col sm={9}>
									<Input
										type="text"
										name="title"
										onChange={(e) => this.setState({ fk_cat: e.target.value })}
										id="title"
										placeholder="Category..."
										bsSize="lg"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label sm={3} size="lg">
									Location
								</Label>
								<Col sm={9}>
									<Input
										type="text"
										name="title"
										onChange={(e) => this.setState({ fk_loc: e.target.value })}
										id="title"
										placeholder="Location..."
										bsSize="lg"
									/>
								</Col>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<a  href={"/books/"} ><button class="buttonSave" onClick={bookAdd.bind(this)}>
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
export default connect(mapStateToProps) (BookForm);