
// import * as React from "react";
// import { useState } from "react";
// import { StyleSheet } from "react-nativescript";

// export function AuthFormModal({ navigation }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       // Implement your API call here
//       const response = await fetch('http://localhost:8080/api/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
      
//       const data = await response.json();
//       if (response.ok) {
//         // Handle successful login
//         navigation.navigate('One');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <flexboxLayout className="flex-1 justify-center p-4 bg-white">
//       <label className="text-2xl font-bold text-center mb-6">Login</label>
      
//       <textField
//         className="border rounded p-2 mb-4"
//         hint="Email"
//         keyboardType="email"
//         text={email}
//         onTextChange={(e) => setEmail(e.value)}
//       />
      
//       <textField
//         className="border rounded p-2 mb-6"
//         hint="Password"
//         secure={true}
//         text={password}
//         onTextChange={(e) => setPassword(e.value)}
//       />
      
//       <button
//         className="bg-blue-500 text-white p-3 rounded-lg mb-4"
//         onTap={handleLogin}
//       >
//         Login
//       </button>
      
//       <button
//         className="text-blue-500"
//         onTap={() => navigation.navigate('Register')}
//       >
//         Create new account
//       </button>
//     </flexboxLayout>
//   );
// }

import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const AuthFormModal = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Implement your API call here
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Handle successful login
        navigation.navigate('One');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.linkText}>Create new account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    width: '100%',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 4,
    padding: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    alignSelf: 'flex-end',
  },
  linkText: {
    color: '#007AFF',
  },
});

export default AuthFormModal;