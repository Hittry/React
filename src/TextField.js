import React from 'react'


class TextField extends React.Component {
    render() {
        return (
        <div>
            <label>
                {this.props.label}
                <input
                    type="text"
                    name={this.props.name}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                />
                {this.props.error && <div>{this.props.error}</div>}
            </label>
        </div>
        );
    }
}

export default TextField;