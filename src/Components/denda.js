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
            updates:[],
            denda: 0,
            hari: 0,
        };

        this.toggle = this.toggle.bind(this);
    }

    componentDidMount = async () => {
        const bookid = this.props.match.params.bookid
        await this.props.dispatch(getBorrows(bookid));
        this.setState({
            borrow: this.props.borrow
        });
        const { borrow } = this.state;
        const list = borrow.borrowList;

        {
        list &&
            list.length > 0 &&
            list.map((item, index) => {
                const a = Date.parse(item.tanggal_kembali);
                const b = Date.parse(item.harus_kembali);
                const biaya = 1000;
                return this.setState({
                    denda: ((a - b) / 86400000) * (biaya),
                    hari: (a - b) / 86400000
                })
            })
        }
        console.log(this.state.denda)
    };

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const editBorrows = () => {
            this.state.updates.push({
				denda: this.state.denda
			})
                
            update()
			this.setState((prevState) => ({
				modal: !prevState.modal
			}));
		};

        let update = async () => {
            await this.props.dispatch(updateBorrow((this.state.updates[0]), this.props.match.params.bookid))
        };

        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="{this.props.className} modal-lg">
                    <ModalHeader toggle={this.toggle}>
                        <b>Denda</b>
                    </ModalHeader>
                    <ModalBody>
                        {this.state.denda < 0 ? (<p>Terima Kasih</p>) :
                        (<p>Maaf Anda Terlambat {this.state.hari} Hari <br />Rp. {this.state.denda}</p>)}
                    </ModalBody>
                    <ModalFooter>
                        <a href={`/book/${this.props.match.params.bookid}`}><button class="buttonSave" onClick={editBorrows.bind(this)}>
                            Confirm
						</button></a>
                    </ModalFooter>
                </Modal>

                })}
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
