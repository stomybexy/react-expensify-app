import React, { Component } from 'react';
import ConfirmModal from './ConfirmModal';

export default class ConfirmButton extends Component {

    state = {
        modalOpen: false
    };

    requestConfirm = () => this.setState({ modalOpen: true });

    onCancel = () => this.setState({ modalOpen: false });

    render() {
        return (
            <div>
                <button
                    className={this.props.className}
                    onClick={this.requestConfirm}>
                    {this.props.children}
                </button>

                <ConfirmModal
                    title={this.props.confirmTitle}
                    message={this.props.confirmMessage}
                    isOpen={this.state.modalOpen}
                    onConfirm={this.props.onConfirm}
                    onCancel={this.onCancel}
                />
            </div>
        );

    }
}
