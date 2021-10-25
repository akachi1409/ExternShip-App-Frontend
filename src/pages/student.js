import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBAlert } from 'mdbreact';
import Header from "../layout/header";

class StudentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_verify: false,
            name: '',
            email:'',
            mobile: '',
            error_message: '',
        };
        this.submit_number = this.submit_number.bind(this);
      }

    submit_number() {
        this.setState({show_verify: true})
        const {name,email, mobile } = this.state;
        if ( name ==''){
            // this.setState({error_message: 'The fields should be inserted.'})
        }
    }
    handleChangeName = (e) =>{
        this.setState({name:e.target.value});
    }
    handleChangeEmail = (e) =>{
        this.setState({email: e.target.value});
    }
    handleChangeMobile = (e) => {
        this.setState({mobile : e.target.value})
    }
    render() {
        const {name, email, mobile} = this.state;
        return (
            <>
            <Header role="This is a student."/>
            <MDBContainer className="mt-5 shadow-lg py-5 student-reg-box">
                <MDBRow>
                    <MDBCol md="6" >
                        <form className="px-4">
                            <p className="h4 text-center mb-4">Student Register</p>
                            <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                Your name
                            </label>
                            <input type="text" id="defaultFormContactNameEx" className="form-control" value = {name} onChange = {(e) => this.handleChangeName(e)} required/>
                            <br />
                            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                Your email
                            </label>
                            <input type="email" id="defaultFormContactEmailEx" className="form-control" value = {email} onChange = {(e) => this.handleChangeEmail(e)} required />
                            <br />
                            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                Phone number
                            </label>
                            <input type="text" id="defaultFormContactSubjectEx" className="form-control" value = {mobile} onChange = {(e) => this.handleChangeMobile(e)} required />
                            <br />
                            {/* <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                Your message
                            </label>
                            <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" /> */}
                            <div className="text-center mt-4">
                                <button type="submit" onClick={()=>this.submit_number} className="btn btn-primary">
                                    Send
                                    <MDBIcon far icon="paper-plane" className="ml-2" />
                                </button>
                            </div>
                        </form>
                    </MDBCol>
                    <MDBCol md="6" className="text-center">
                            <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg"></img>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </>
        );
    }
} 

export default StudentPage;
