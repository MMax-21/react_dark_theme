import React, {Component} from 'react';
import Switch from "react-switch";
import './Switch.css';

const lightTheme = {
  "--primary-color": "rgb(64, 64, 64)",
  "--bg-color": "rgb(255, 255, 255)",
  "--input-color": "rgb(64,64,64)",
  "--input-bg-color": "rgb(236, 236, 236)",
  "--input-placeholder-color": "rgb(128,128,128)",
  "--switch-bg-color": "rgb(224, 224, 224)",
  "--border-container-color": "rgb(0,0,0)",
};
const darkTheme = {
  "--primary-color": "rgb(32, 32, 255)",
  "--bg-color": "rgb(0,0,0)",
  "--input-color": "rgb(192,192,192)",
  "--input-bg-color": "rgb(21, 21, 21)",
  "--input-placeholder-color": "rgb(128,128,128)",
  "--switch-bg-color": "rgb(32, 32, 32)",
  "--border-container-color": "rgb(255, 255, 255)",
};


class SwitchExample extends Component {
  constructor() {
    super();
    this.state = { changeThemeSwitch: false, hideFormSwitch: false, hideNameSwitch: false, hidePhoneSwitch: false };

    this.changeTheme = this.changeTheme.bind(this);
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
    this.handleHideForm = this.handleHideForm.bind(this);
    this.handleHideName = this.handleHideName.bind(this);
    this.handleHidePhone = this.handleHidePhone.bind(this);
    this.currentTheme = "light";

  }
 
  changeTheme() {
//    console.log(this.currentTheme);
    const theme = this.currentTheme === "light" ? lightTheme : darkTheme;
    Object.keys(theme).map(key => {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
    });

  }

  handleChangeTheme(checked) {
//    console.log("change theme");
    this.currentTheme = this.currentTheme === "light" ? "dark" : "light";
    this.changeTheme();
  
    this.setState({ changeThemeSwitch: checked });
  }

  handleHideForm(checked) {
    console.log("hide form");
    this.setState({ hideFormSwitch: checked });
  }

  handleHideName(checked) {
    console.log("hide name");
    this.setState({ hideNameSwitch: checked });
  }
  handleHidePhone(checked) {
    console.log("hide phone");
    this.setState({ hidePhoneSwitch: checked });
  }
 
  render() {
    return (
      <div className="container">
          <div className="controls">
            <div className="control">
                <label>Dark theme</label>
                <Switch 
                    onChange={this.handleChangeTheme} 
                    checked={this.state.changeThemeSwitch} 
                    uncheckedIcon={false}
                    checkedIcon={false}
                    onColor="#2020ff"
                />
            </div>
            <div className="control">
                <span>Hide form</span>
                <Switch 
                    onChange={this.handleHideForm} 
                    checked={this.state.hideFormSwitch} 
                    uncheckedIcon={false}
                    checkedIcon={false}
                    onColor="#2020ff"
                />
            </div>
            <div className="control">
                <span>Hide name</span>
                <Switch 
                    onChange={this.handleHideName} 
                    checked={this.state.hideNameSwitch} 
                    uncheckedIcon={false}
                    checkedIcon={false}
                    onColor="#2020ff"
                />
            </div>
            <div className="control">
                <span>Hide phone</span>
                <Switch 
                    onChange={this.handleHidePhone} 
                    checked={this.state.hidePhoneSwitch} 
                    uncheckedIcon={false}
                    checkedIcon={false}
                    onColor="#2020ff"
                />
            </div>
        </div>
        { this.state.hideFormSwitch ? null : this.getForm()}

      </div>
    );
  }

  getForm() {
    return (
           <form id="form">
            <div className="form-control">
                <label htmlFor="email">Your email:</label>
                <input type="text" id="email" placeholder="email"/>
            </div>
            <div className="form-control">
                <label htmlFor="password">Your password:</label>
                <input type="password" id="password" placeholder="password"/>
            </div>

            { this.state.hideNameSwitch ? null : this.getFormName()}

            { this.state.hidePhoneSwitch ? null : this.getFormPhone()}

            <div className="form-control">
                <input type="submit" value="Sign in" id="signin"/>
            </div>
          </form>
        );
  }

  getFormName(){
    return (
      <div className="form-control" id="formControlName">
        <label htmlFor="name">Your name:</label>
        <input type="text" id="name" placeholder="name"/>
      </div>
    );
  }

  getFormPhone(){
    return (
      <div className="form-control" id="formControlPhone">
        <label htmlFor="phone">Your phone:</label>
        <input type="text" id="phone" placeholder="phone"/>
      </div>
    );
  }
}


export default SwitchExample;
