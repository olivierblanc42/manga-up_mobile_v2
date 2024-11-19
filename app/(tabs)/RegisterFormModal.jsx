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
// import React, { useState } from 'react';
// import { StyleSheet, View, Text , TextInput} from 'react-native';
// import { CustomButton } from '../../components/common/CustomButton';
// import { CustomTextField } from '../../components/common/CustomTextField';
// import { authService } from '../../services/authService';

// const RegisterFormModal = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleRegister = async () => {
//     try {
//       setError('');

//       if (password !== confirmPassword) {
//         setError("Passwords don't match!");
//         return;
//       }

//       await authService.register({ username, password, confirmPassword });
//       navigation.navigate('Login');
//     } catch (error) {
//       setError('Registration failed. Please try again.');
//       console.error('Registration error:', error);
//     }
//   };

//   return (
    








//     <>
//     <View style={styles.container}>
    
      
//       <Text style={styles.title}>Register</Text>
   
      
//       <CustomTextField
//        style={styles.input}
//         placeholder="username"
//         value={username}
//         onChangeText={setUsername}
//         keyboardType="default"
//       />
//       <CustomTextField
//        style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <CustomTextField
//        style={styles.input}
//         placeholder="Confirm Password"
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//         secureTextEntry
//       />
//       {error && <Text style={styles.error}>{error}</Text>}
//       <CustomButton
//         text="Register"
//         onPress={handleRegister}
//       />
       
//       <CustomButton
//         text="Already have an account? Login"
//         onPress={() => navigation.navigate('Login')}
//         variant="link"
//       />
//     </View>
//   </>);
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 16,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//     padding: 12,
//     width: '100%',
//     marginBottom: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 24,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 16,
//   },
// });

// export default RegisterFormModal;
// import React, { useState } from 'react';
// import { StyleSheet, View, Text, TextInput, ScrollView, SafeAreaView } from 'react-native';
// import { CustomButton } from '../../components/common/CustomButton';
// import { CustomTextField } from '../../components/common/CustomTextField';
// import { authService } from '../../services/authService';

// const RegisterFormModal = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   // const [confirmPassword, setConfirmPassword] = useState('');
//   // const [error, setError] = useState('');

//   const handleRegister = async () => {
//     try {
//       // setError('');

//       // if (password !== confirmPassword) {
//       //   setError("Passwords don't match!");
//       //   return;
//       // }

//       await authService.register({ username, password});
//       navigation.navigate('Login');
//     } catch (error) {
//       setError('Registration failed. Please try again.');
//       console.error('Registration error:', error);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         <View style={styles.container}>
//           <View style={styles.formContainer}>
//             <Text style={styles.title}>Create Account</Text>
            
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>Username</Text>
//               <CustomTextField
//                 style={styles.input}
//                 placeholder="Enter your username"
//                 value={username}
//                 onChangeText={setUsername}
//                 keyboardType="default"
//               />
//             </View>

//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>Password</Text>
//               <CustomTextField
//                 style={styles.input}
//                 placeholder="Enter your password"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry
//               />
//             </View>

//             {/* <View style={styles.inputContainer}>
//               <Text style={styles.label}>Confirm Password</Text>
//               <CustomTextField
//                 style={styles.input}
//                 placeholder="Confirm your password"
//                 value={confirmPassword}
//                 onChangeText={setConfirmPassword}
//                 secureTextEntry
//               />
//             </View> */}

//             {error && <Text style={styles.error}>{error}</Text>}

//             <CustomButton
//               text="Register"
//               onPress={handleRegister}
//               style={styles.registerButton}
//             />
            
//             <CustomButton
//               text="Already have an account? Login"
//               onPress={() => navigation.navigate('Login')}
//               variant="link"
//               style={styles.loginLink}
//             />
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollView: {
//     flexGrow: 1,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   formContainer: {
//     width: '100%',
//     maxWidth: 400,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 8,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     padding: 15,
//     backgroundColor: '#fafafa',
//     fontSize: 16,
//   },
//   error: {
//     color: '#ff3333',
//     fontSize: 14,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   registerButton: {
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   loginLink: {
//     marginTop: 10,
//   }
// });

// export default RegisterFormModal;
// import React, { useState } from "react";
// import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
// import { CustomButton } from "../../components/common/CustomButton";
// import { CustomTextField } from "../../components/common/CustomTextField";
// import { authService } from "../../services/authService";

// const RegisterFormModal = ({ navigation }) => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     firstname: "",
//     lastname: "",
//     password: "",
//     line1: "",
//     line2: "",
//     line3: "",
//     city: "",
//     postalCode: "",
//     gender: {id:"", label:""}
//   });

//   const [error, setError] = useState("");

//   const handleInputChange = (field, value) => {
//     if(field ==='gender'){

//       if(value == "H"){
//         value = {id:1, label:'H'}
//       }

//       else{
//         value = {id:2, label:'F'}

//       }


//       setFormData({ ...formData,[field]:value});

//     } else {
//       setFormData({ ...formData, [field]: value });

      
   
//     }


   
//   };

//   const handleRegister = async () => {
//     console.log("hello");
//     try {
//       console.log("in handle register");
     
//       setError("");
//       await authService.register(formData);
//      // navigation.navigate("Login");
//       console.log("in formData");
//     } catch (error) {
//       setError("Registration failed. Please try again.");
//       console.error("Registration error:", error);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         <View style={styles.container}>
//           <View style={styles.formContainer}>
//             <Text style={styles.title}>Create Account</Text>

//             {[
//               { label: "Username", field: "username" },
//               { label: "Email", field: "email" },
//               { label: "First Name", field: "firstname" },
//               { label: "Last Name", field: "lastname" },
//               { label: "Password", field: "password", secure: true },
//               { label: "Address Line 1", field: "line1" },
//               { label: "Address Line 2", field: "line2" },
//               { label: "Address Line 3", field: "line3" },
//               { label: "City", field: "city" },
//               { label: "Postal Code", field: "postalCode" },
              
//               { label: "Gender", field: "gender" },
//             ].map(({ label, field, secure = false }) => (
//               <View style={styles.inputContainer} key={field}>
//                 <Text style={styles.label}>{label}</Text>
//                 <CustomTextField
//                   style={styles.input}
//                   placeholder={`Enter your ${label.toLowerCase()}`}
//                   value={formData[field]}
//                   onChangeText={(value) => handleInputChange(field, value)}
//                   secureTextEntry={secure}
//                 />
//               </View>
//             ))}

//             {error && <Text style={styles.error}>{error}</Text>}

//             <CustomButton
//               text="Register"
//               onPress={handleRegister}
//               style={styles.registerButton}
//             />

//             <CustomButton
//               text="Already have an account? Login"
//               onPress={() => navigation.navigate("Login")}
//               variant="link"
//               style={styles.loginLink}
//             />
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   // (Votre style reste inchangé)
//     safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollView: {
//     flexGrow: 1,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   formContainer: {
//     width: '100%',
//     maxWidth: 400,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 8,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     padding: 15,
//     backgroundColor: '#fafafa',
//     fontSize: 16,
//   },
//   error: {
//     color: '#ff3333',
//     fontSize: 14,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   registerButton: {
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   loginLink: {
//     marginTop: 10,
//   }
// });

// export default RegisterFormModal;







import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { CustomButton } from "../../components/common/CustomButton";
import { CustomTextField } from "../../components/common/CustomTextField";
import { authService } from "../../services/authService";

const GENDER_OPTIONS = [
  { id: 1, label: 'H' },
  { id: 2, label: 'F' }
];

const RegisterFormModal = ({ navigation }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    line1: "",
    line2: "",
    line3: "",
    city: "",
    postalCode: "",
    gender: { id: "", label: "" }
  });

  const [error, setError] = useState("");

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleGenderSelect = (gender) => {
    setFormData({ ...formData, gender });
  };

  const handleRegister = async () => {
    try {
      setError("");
      await authService.register(formData);
      // navigation.navigate("Login");
    } catch (error) {
      setError("Registration failed. Please try again.");
      console.error("Registration error:", error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Create Account</Text>

            {[
              { label: "Username", field: "username" },
              { label: "Email", field: "email" },
              { label: "First Name", field: "firstname" },
              { label: "Last Name", field: "lastname" },
              { label: "Password", field: "password", secure: true },
              { label: "Address Line 1", field: "line1" },
              { label: "Address Line 2", field: "line2" },
              { label: "Address Line 3", field: "line3" },
              { label: "City", field: "city" },
              { label: "Postal Code", field: "postalCode" },
            ].map(({ label, field, secure = false }) => (
              <View style={styles.inputContainer} key={field}>
                <Text style={styles.label}>{label}</Text>
                <CustomTextField
                  style={styles.input}
                  placeholder={`Enter your ${label.toLowerCase()}`}
                  value={formData[field]}
                  onChangeText={(value) => handleInputChange(field, value)}
                  secureTextEntry={secure}
                />
              </View>
            ))}

            {/* Section pour la sélection du genre */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Gender</Text>
              <View style={styles.genderContainer}>
                {GENDER_OPTIONS.map((gender) => (
                  <TouchableOpacity
                    key={gender.id}
                    style={[
                      styles.genderButton,
                      formData.gender.id === gender.id && styles.selectedGenderButton
                    ]}
                    onPress={() => handleGenderSelect(gender)}
                  >
                    <Text
                      style={[
                        styles.genderButtonText,
                        formData.gender.id === gender.id && styles.selectedGenderButtonText
                      ]}
                    >
                      {gender.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {error && <Text style={styles.error}>{error}</Text>}

            <CustomButton
              text="Register"
              onPress={handleRegister}
              style={styles.registerButton}
            />

            <CustomButton
              text="Already have an account? Login"
              onPress={() => navigation.navigate("Login")}
              variant="link"
              style={styles.loginLink}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    backgroundColor: "#fafafa",
    fontSize: 16,
  },
  error: {
    color: "#ff3333",
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
  },
  registerButton: {
    marginTop: 10,
    marginBottom: 20,
  },
  loginLink: {
    marginTop: 10,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  genderButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    alignItems: "center",
  },
  selectedGenderButton: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  genderButtonText: {
    color: "#333",
    fontSize: 16,
  },
  selectedGenderButtonText: {
    color: "white",
  },
});

export default RegisterFormModal;
