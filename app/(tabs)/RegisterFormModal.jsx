// import * as React from "react";
// import { useState } from "react";
// import { CustomButton } from "../common/CustomButton";
// import { CustomTextField } from "../common/CustomTextField";
// import { authService } from "../../services/authService";

// export function RegisterFormModal({ navigation }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleRegister = async () => {
//     try {
//       setError("");
      
//       if (password !== confirmPassword) {
//         setError("Passwords don't match!");
//         return;
//       }

//       await authService.register({ email, password, confirmPassword });
//       navigation.navigate('Login');
//     } catch (error) {
//       setError("Registration failed. Please try again.");
//       console.error('Registration error:', error);
//     }
//   };

//   return (
//     <flexboxLayout className="flex-1 justify-center p-4 bg-white">
//       <label className="text-2xl font-bold text-center mb-6">Register</label>
      
//       <CustomTextField
//         hint="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email"
//       />
      
//       <CustomTextField
//         hint="Password"
//         value={password}
//         onChangeText={setPassword}
//         secure={true}
//       />
      
//       <CustomTextField
//         hint="Confirm Password"
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//         secure={true}
//       />
      
//       {error && (
//         <label className="text-red-500 mb-4 text-center">{error}</label>
//       )}
      
//       <CustomButton
//         text="Register"
//         onTap={handleRegister}
//       />
      
//       <CustomButton
//         text="Already have an account? Login"
//         onTap={() => navigation.navigate('Login')}
//         variant="link"
//       />
//     </flexboxLayout>
//   );
// }

//
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CustomButton } from '../../components/common/CustomButton';
import { CustomTextField } from '../../components/common/CustomTextField';
import { authService } from '../../services/authService';

const RegisterFormModal = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      setError('');

      if (password !== confirmPassword) {
        setError("Passwords don't match!");
        return;
      }

      await authService.register({ email, password, confirmPassword });
      navigation.navigate('Login');
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error('Registration error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <CustomTextField
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <CustomTextField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <CustomTextField
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <CustomButton
        text="Register"
        onPress={handleRegister}
      />
      <CustomButton
        text="Already have an account? Login"
        onPress={() => navigation.navigate('Login')}
        variant="link"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
});

export default RegisterFormModal;