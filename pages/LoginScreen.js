import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { LoginUser, getPostDat } from '../services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/context';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const {setIsLoggedIn} = useAuth();
  // console.log(data)

  const handleLogin = () => {
    // Implement login logic here (e.g., API call)
    LoginUser({email:email, password:password}).then((res)=>{
      console.log(res.data.data.token)
        //  AsyncStorage.setItem("token", res.data.data.token);
         AsyncStorage.setItem("token", JSON.stringify(res.data.data.token));
         setIsLoggedIn(true)
    })
  };

// useEffect(()=>{
//   getPostDat().then((data)=>{
//     console.log(data,"15")
//   })
// },[])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default LoginScreen;
