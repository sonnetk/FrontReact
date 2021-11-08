import React from "react";


class Images extends React.Component {
    render() {
        return <img src={this.props.src} alt={this.props.alt} width="160" height="160" />
    }
}