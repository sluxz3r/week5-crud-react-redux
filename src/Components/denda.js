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

import '../assets/restore.css';
import { getBorrows, updateBorrow } from '../Publics/redux/actions/borrow';

class Denda extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: true,
			borrow: [],
		};

		this.toggle = this.toggle.bind(this);
	}

	componentDidMount = async () => {
		const bookid = this.props.id
		await this.props.dispatch(getBorrows(bookid));
		this.setState({
			borrow: this.props.borrow
		});
	};

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	changeHandle = (e) => {
		const name = e.currentTarget.name;
		let val = e.currentTarget.value;
		this.state.borrow.borrowList[name] = val;
		this.setState({ borrow: this.state.borrow })
	};

	render() {
		const editBorrow = () => {
			this.state.update.push({
				tanggal_kembali: new Date()
			})

			update()
			this.setState((prevState) => ({
				modal: !prevState.modal
			}));
		};
		let update = async () => {
			await this.props.dispatch(updateBorrow((this.state.update[0]), this.props.id))
		};

		const { borrow } = this.state;
		const list = borrow.borrowList;
		console.log("list", list)
		console.log(this.state.update)
		console.log("props", this.props.match.params.bookid)

		return (
			<div>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className="{this.props.className} modal-lg">
					
					<ModalHeader toggle={this.toggle}>
						<b>Denda</b>
					</ModalHeader>

					<ModalBody>
						<b>Tidak Ada Biaya Denda</b>
					</ModalBody>

					<ModalFooter>
						<a href={`/book/${this.props.match.params.bookid}`}><button class="buttonSave">
							Confirm
						</button></a>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		borrow: state.borrow
	};
};
export default connect(mapStateToProps)(Denda);
