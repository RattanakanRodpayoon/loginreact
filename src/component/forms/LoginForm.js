import React, {Component} from 'react';
import { View, Text,
        TextInput, Button
} from 'react-native';
import LoginPage from '../pages/LoginPage';

class LoginForm extends Component {
    
    constructor(prob){
        super(prob);

        this.state={
            email:'',
            password:''
        };

        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);

    }
    onChange=({email})=>{
            console.log(email);
            this.setState({email});
    }
    onSubmit(){
        console.log('onSubmit',this.state)
    }
    render(){
            return (
               <View style={{padding:10}}>
                    <Text>Test_UI_REACT</Text>
                    <Text>Login</Text>
                    <TextInput 
                        style={{backgroundColor: 'green', height:40, borderWidth:2}}
                        id="e-mail"
                        name="email"
                        placeholder="Email"
                        onChange={this.onChange}
                        value={this.state.email}
                    />
                    <Text>Password</Text>
                    <TextInput 
                        style={{backgroundColor: 'red', height:40, borderWidth:2}}
                        id="password"
                        name="password"
                        placeholder='Password'
                    />
                    <Button
                    title="Login"
                    />
               </View>
            );
    }
}

export default LoginForm;