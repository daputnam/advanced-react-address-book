import React from "react";

class UserDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                hi were in userdetail: {this.props.user.first_name}
                <br />
                Phone Num: {this.props.user.phone}
            </div>
        )
    }
}

export default UserDetail;