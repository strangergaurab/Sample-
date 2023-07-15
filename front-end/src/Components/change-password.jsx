import axios from "axios";
import React from "react";
import PopupMessage from "./pop-up-message";
import Cookies from 'js-cookie';

const HOST_URL = 'your_host_url_here';

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      btnEnabled: true,
      message: '',
      title: '',
      isPasswordChangeRequest: false,
    };
  }

  // Rest of your component code...

  onSubmit = (e) => {
    e.preventDefault();
    axios.post(HOST_URL + '/change_password', {
      oldPassword: this.state.oldPassword,
      newPassword: this.state.newPassword,
      confirmPassword: this.state.confirmPassword,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + Cookies.get('token'),
      },
    }).then(result => {
      if (result.status === 200) {
        if (result.data.status === 200) {
          this.setState({
            message: result.data.message,
            isPasswordChangeRequest: true,
            title: 'Success',
          });
        } else {
          this.setState({
            message: result.data.message,
            isPasswordChangeRequest: true,
            title: 'Error',
          });
        }
      }
    });
  }

  render() {
    return (
      <>
     {this.state.isPasswordChangeRequest?<PopupMessage data={{
                message: this.state.message,
                title: this.state.title,
                status: this.state.isPasswordChangeRequest,
                toggle: this.messageShowFalse


            }} />:null}  
            <h1>Change Password</h1>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="current-password">Old Password</label>
                    <input type="password" id="current-password" value={this.state.oldPassword} onChange={this.onOldPasswordChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="new-password">New Password</label>
                    <input type="password" id="new-password" value={this.state.newPassword} onChange={this.onNewPasswordChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" value={this.state.confirmPassword} onChange={this.onConfirmPasswordChange} />
                </div>
                <button type="submit" id="change-password" disabled={this.state.btnEnabled} className={this.state.btnEnabled?"btn-active":"btn-disable"} >Change Password</button>

            </form>
            <a href='/accounts/password/reset' id="forgot-password">Forgot password?</a>

      </>
    );
  }
}

export default ChangePassword;
