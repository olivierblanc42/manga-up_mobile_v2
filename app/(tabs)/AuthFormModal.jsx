
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
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { Link, useRouter } from "expo-router";


const AuthFormModal = ({ navigation }) => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Implement your API call here
      console.log(`${typeof(username)}`)
      console.log(`${typeof(password)}`)
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password }),
      });

      const data = await response.json();
      console.log(`${Object.keys(data)} data`);
      console.log(`${data.status} data`);
      console.log(data.address);
      // console.log('Response status:', response.status);
      // console.log('Response body:', await response.text());
      if (response.ok) {
        // Handle successful login
        // navigation.navigate('One');
        router.replace("/")
      }else {
        console.error('Login failed:', response.status, data);
      }
    } catch (error) {
      console.error('Login error:', error);
      // console.error('Failed to login:', response.status, data);
    }
  };

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="username "
        keyboardType="default"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>


<Link href="/(tabs)/RegisterFormModal" style={styles.link}><button>Register</button></Link>

      
      {/* <Pressable
        style={styles.link}
      onPress={() => navigation.navigate(('register'))}
      // onPress={() => <Link href="/(tabs)/RegisterFormModal" style={styles.link}></Link>}
      

      >
        
        <Text style={styles.linkText}>Create new account</Text>
      </Pressable> */}
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