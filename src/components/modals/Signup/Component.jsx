import React, { useState, useEffect } from 'react';
import { Alert, Modal, Form, Button } from 'react-bootstrap';
import Countries from '../../../constants/countries';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';


const Component = props => {
    const { signupModal, closeSignupModal, isTeacher, submitTeacherRegister, error, resetTeacherRegisterError } = props;
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [gender, setGender] = useState('male');
    const [avatarId, setAvatarId] = useState('1');
    const [country, setCountry] = useState('');
    const [canTeach, setCanTeach] = useState([]);

    const isFormValidated = () => {
        return (
            name &&
            email &&
            password.length>=6 &&
            password === passwordConfirm &&
            country
        )
    }

    const handleSubmit = event => {
        event.preventDefault();
        setValidated(true);  


        if (isFormValidated()){
            submitTeacherRegister({
                name,
                email,
                password,
                password_confirmation: passwordConfirm
            });
        }
    }

    
    const toggleCanTeach = (e, skill) => {
        if(e.target.checked){
            setCanTeach([...canTeach, skill]);
        }else {
            setCanTeach(canTeach.filter(s => s !== skill))
        }
    }

    const success = response => {
        console.log(response);
    }

    return (
        <Modal
        show={signupModal}
        onHide={() => {
            setValidated(false);
            closeSignupModal();
        }}
        aria-labelledby="signup-modal"
        className="signup"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Sign up as student
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="form-wrapper">
                <Form onSubmit={handleSubmit}>
                    <Alert variant="danger" show={error}>
                        Your account is already registered with this email address 
                    </Alert>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control 
                            type="email" 
                            placeholder="Email address *" 
                            value={email} 
                            onChange={e => {
                                if (error) {
                                    resetTeacherRegisterError()
                                }
                                setEmail(e.target.value);
                            }} 
                            isInvalid={validated && email===''} 
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter your email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Control 
                            type="text" 
                            placeholder="Name *" 
                            required 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            isInvalid={validated && name===''} 
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter your name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control 
                            type="password" 
                            placeholder="Password *" 
                            isInvalid={validated && password.length < 6}  
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            The password must be at least 6 characters.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Control 
                            type="password" 
                            placeholder="Confirm password *" 
                            isInvalid={validated && password!==passwordConfirm}
                            value={passwordConfirm} 
                            onChange={e => setPasswordConfirm(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Passwords must match
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicCountry">
                        <Form.Control 
                            type="text" 
                            className="mb-3" 
                            placeholder="Country*"
                            as="select" 
                            value={country}
                            onChange={e => setCountry(e.target.value)} 
                            required
                        >
                            <option value='' disabled>Country*</option>
                            {Countries.map( c => (
                                <option key={c.code} value={c.name}>{c.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicTeach">
                        <Form.Label>I can teach *</Form.Label>
                        <Form.Check 
                            type='checkbox'
                            id='pronunciation'
                            label='Quran correct pronunciation'
                            checked={canTeach.filter(skill => skill === 'pronunciation').length}
                            onChange={e => toggleCanTeach(e, 'pronunciation')}
                        />
                        <Form.Check 
                            type='checkbox'
                            id='arabic'
                            label='Arabic Language'
                            checked={canTeach.filter(skill => skill === 'arabic').length}
                            onChange={e => toggleCanTeach(e, 'arabic')}
                        />
                        <Form.Check 
                            type='checkbox'
                            id='memorization'
                            label='Quran memorization'
                            checked={canTeach.filter(skill => skill === 'memorization').length}
                            onChange={e => toggleCanTeach(e, 'memorization')}
                        />
                        <Form.Check 
                            type='checkbox'
                            id='tajweed'
                            label='Tajweed'
                            checked={canTeach.filter(skill => skill === 'tajweed').length}
                            onChange={e => toggleCanTeach(e, 'tajweed')}
                        />
                        {/* <Form.Check.Feedback type="invalid">
                            Choose at least one
                        </Form.Check.Feedback> */}
                    </Form.Group>
                    <Form.Group controlId="formBasicGender">
                        <Form.Label>Gender *</Form.Label>
                        <Form.Check
                            type="radio"
                            label="male"
                            className="mr-5"
                            name="gender"
                            id="male"
                            isInvalid={validated && gender===''}  
                            onClick={() => setGender("male")}
                            inline
                            checked={gender==='male'}
                        />
                        <Form.Check
                            type="radio"
                            label="female"
                            name="gender"
                            id="female"
                            isInvalid={validated && gender===''}  
                            onClick={() => setGender("female")}
                            inline
                            checked={gender==='female'}
                        />
                    </Form.Group>
                    {(gender) === 'male' && (
                    <div className="avatars">
                        <div className="avatars__title">
                            <span>Select Avatar</span>
                        </div>
                        <div className="avatars__group">
                            <div 
                                className={(avatarId==='1') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='1'
                                onClick={()=> setAvatarId('1')}
                            >
                                <img src="/img/av1.svg" alt="avatar 1"/>
                            </div>
                            <div 
                                className={(avatarId==='2') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='2'
                                onClick={()=> setAvatarId('2')}
                            >
                                <img src="/img/av2.svg" alt="avatar 2"/>
                            </div>
                            <div 
                                className={(avatarId==='3') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='3'
                                onClick={()=> setAvatarId('3')}
                            >
                                <img src="/img/av3.svg" alt="avatar 3"/>
                            </div>
                            <div 
                                className={(avatarId==='4') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='4'
                                onClick={()=> setAvatarId('4')}
                            >
                                <img src="/img/av4.svg" alt="avatar 4"/>
                            </div>
                            <div 
                                className={(avatarId==='5') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='5'
                                onClick={()=> setAvatarId('5')}
                            >
                                <img src="/img/av5.svg" alt="avatar 5"/>
                            </div>
                            <div 
                                className={(avatarId==='6') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='6'
                                onClick={()=> setAvatarId('6')}
                            >
                                <img src="/img/av6.svg" alt="avatar 6"/>
                            </div>
                            <div 
                                className={(avatarId==='7') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='7'
                                onClick={()=> setAvatarId('7')}
                            >
                                <img src="/img/av7.svg" alt="avatar 7"/>
                            </div>
                            <div 
                                className={(avatarId==='8') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='8'
                                onClick={()=> setAvatarId('8')}
                            >
                                <img src="/img/av8.svg" alt="avatar 8"/>
                            </div>
                            <div 
                                className={(avatarId==='9') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='9'
                                onClick={()=> setAvatarId('9')}
                            >
                                <img src="/img/av9.svg" alt="avatar 9"/>
                            </div>
                        </div>
                    </div>
                    )}
                    {(gender) === 'female' && (
                    <div className="avatars">
                        <div className="avatars__title">
                            <span>Select Avatar</span>
                        </div>
                        <div className="avatars__group">
                            <div 
                                className={(avatarId==='1') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='1'
                                onClick={()=> setAvatarId('1')}
                            >
                                <img src="/img/f-av1.svg" alt="avatar 1"/>
                            </div>
                            <div 
                                className={(avatarId==='2') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='2'
                                onClick={()=> setAvatarId('2')}
                            >
                                <img src="/img/f-av2.svg" alt="avatar 2"/>
                            </div>
                            <div 
                                className={(avatarId==='3') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='3'
                                onClick={()=> setAvatarId('3')}
                            >
                                <img src="/img/f-av3.svg" alt="avatar 3"/>
                            </div>
                            <div 
                                className={(avatarId==='4') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='4'
                                onClick={()=> setAvatarId('4')}
                            >
                                <img src="/img/f-av4.svg" alt="avatar 4"/>
                            </div>
                            <div 
                                className={(avatarId==='5') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='5'
                                onClick={()=> setAvatarId('5')}
                            >
                                <img src="/img/f-av5.svg" alt="avatar 5"/>
                            </div>
                            <div 
                                className={(avatarId==='6') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='6'
                                onClick={()=> setAvatarId('6')}
                            >
                                <img src="/img/f-av6.svg" alt="avatar 6"/>
                            </div>
                            <div 
                                className={(avatarId==='7') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='7'
                                onClick={()=> setAvatarId('7')}
                            >
                                <img src="/img/f-av7.svg" alt="avatar 7"/>
                            </div>
                            <div 
                                className={(avatarId==='8') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='8'
                                onClick={()=> setAvatarId('8')}
                            >
                                <img src="/img/f-av8.svg" alt="avatar 8"/>
                            </div>
                            <div 
                                className={(avatarId==='9') ? "avatars__group--icon selected":"avatars__group--icon"}
                                id='9'
                                onClick={()=> setAvatarId('9')}
                            >
                                <img src="/img/f-av9.svg" alt="avatar 9"/>
                            </div>
                        </div>
                    </div>
                    )}
                    <Button type='submit' className="btn btn--primary mb-3">Create account</Button>
                </Form>
            </div>
            <div className="signup__google">
                <span className='mb-3'>OR</span>
                <div className="signup__google--btn">
                    <FacebookLogin
                        appId="431846334825837"
                        fields="name,email,picture"
                        textButton="Sign up with facebook"
                        className="facebook"
                        callback={success}
                    />
                </div>
                <div className="signup__google--btn">
                    <GoogleLogin
                        clientId="903376354255-jq2sertp2hkvjbsofo1u78n59tgq3uoh.apps.googleusercontent.com"
                        buttonText="Sign up with google"
                        onSuccess={success}
                        icon={false}
                        className="google"
                    />
                </div>
                <div className="signup__redirect">
                    
                </div>
            </div>
        </Modal.Body>
      </Modal>
    )
}

export default Component;