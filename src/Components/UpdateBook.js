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

import { getBook, updateBook } from '../Publics/redux/actions/book';


class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true,
            books: [],
            tmp: []
        };

        this.toggle = this.toggle.bind(this);
    }
    componentDidMount = async () => {
        const bookid = this.props.match.params.bookid
        await this.props.dispatch(getBook(bookid));
        this.setState({
            books: this.props.book
        });
    };

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    changeHandle = (e) => {
        const name = e.currentTarget.name
        const val = e.currentTarget.value
        this.state.books.bookList[name] = val
        this.setState({ books: this.state.books })

    }
    render() {
        const editbooks = () => {
            let fk_cat = '';
			switch (list ? list.fk_cat:'') {
                case 'Anak':
					fk_cat = 1;
					break;
				default:
					fk_cat = 2;
			}
			let fk_loc = '';
			switch (list ? list.fk_loc:'') {
				case 'Rak 2':
					fk_loc = 1;
					break;
				default:
					fk_loc = 2;
			}
            this.state.tmp.push({
                name: list ? list.name:'',
				writer: list ? list.writer:'',
				image: list ? list.image:'',
				fk_cat,
				fk_loc,
            
            });
        
            
            
        edit()
            this.setState((prevState) => ({
                modal: !prevState.modal
            }));

        };
        
        let edit = async () => {
            
            await this.props.dispatch(updateBook((this.state.tmp[0]), this.props.match.params.bookid));
            
        };
        
        const list = this.state.books.bookList;
        console.log(this.state.tmp)
     

        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="{this.props.className} modal-lg">
                    <ModalHeader toggle={this.toggle}>
                        <b>Book Data</b>
                    </ModalHeader>
                    <ModalBody>
                        <Form >
                            <FormGroup row >
                                <Label sm={2} size="lg">
                                    Name
								</Label>
                                <Col sm={8}>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="title"
                                        placeholder="Name..."
                                        bsSize="lg"
                                        value={list ? list.name:''}
                                        onChange={this.changeHandle}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row >
                                <Label sm={2} size="lg">
                                    Writer
								</Label>
                                <Col sm={8}>
                                    <Input
                                        type="text"
                                        name="writer"
                                        id="title"
                                        placeholder="Writer..."
                                        bsSize="lg"
                                        value={list ? list.writer:''}
                                        onChange={this.changeHandle}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={2} size="lg">
                                    Image
								</Label>
                                <Col sm={8}>
                                <Input
										type="text"
                                        name="image"
                                        id="title"
                                        placeholder="Image..."
                                        bsSize="lg"
                                        value={list ? list.image:''}
                                        onChange={this.changeHandle}
									/>
                                </Col>
                            </FormGroup>
                            <FormGroup row >
                                <Label sm={2} size="lg">
									Category
								</Label>
								<Col sm={8}>
                                    <select style={{
                                            color: 'white',
                                            backgroundColor: 'black',
                                            marginTop:'15px',
                                            width:'100px',}} 
                                            value={list ? list.fk_cat:''}                                  
                                            onChange={this.changeHandle}>
										<option value='Fiksi' >Fiksi</option>
										<option value='Anak'>Anak</option>
									</select>
								</Col>
                            </FormGroup>
                            <FormGroup row >
                                <Label sm={2} size="lg">
									Location
								</Label>
								<Col sm={8}>
                                    <select style={{
										color: 'white',
										backgroundColor: 'black',
										marginTop:'15px',
										width:'100px',}}  
                                        value={list ? list.fk_loc:''}                                  
                                            onChange={this.changeHandle}>
										<option value={list ? list.fk_loc:'Rak 1'} >Rak 1</option>
										<option value={list ? list.fk_loc:'Rak 1'}>Rak 2</option>
									</select>
								</Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <a href='/books' ><button class="buttonSave" onClick={editbooks.bind(this)}>
                            SAVE
						</button></a>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        book: state.book
    };
};
export default connect(mapStateToProps)(Update);