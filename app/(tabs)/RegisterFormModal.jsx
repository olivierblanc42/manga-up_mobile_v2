







// import React, { useState } from "react";
// import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
// import { CustomButton } from "../../components/common/CustomButton";
// import { CustomTextField } from "../../components/common/CustomTextField";
// import { authService } from "../../services/authService";

// const GENDER_OPTIONS = [
//   { id: 1, label: 'H' },
//   { id: 2, label: 'F' }
// ];

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
//     gender: { id: "", label: "" }
//   });

//   const [error, setError] = useState("");

//   const handleInputChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const handleGenderSelect = (gender) => {
//     setFormData({ ...formData, gender });
//   };

//   const handleRegister = async () => {
//     try {
//       setError("");
//       await authService.register(formData);
//       // navigation.navigate("Login");
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

//             {/* Section pour la sélection du genre */}
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>Gender</Text>
//               <View style={styles.genderContainer}>
//                 {GENDER_OPTIONS.map((gender) => (
//                   <TouchableOpacity
//                     key={gender.id}
//                     style={[
//                       styles.genderButton,
//                       formData.gender.id === gender.id && styles.selectedGenderButton
//                     ]}
//                     onPress={() => handleGenderSelect(gender)}
//                   >
//                     <Text
//                       style={[
//                         styles.genderButtonText,
//                         formData.gender.id === gender.id && styles.selectedGenderButtonText
//                       ]}
//                     >
//                       {gender.label}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </View>

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
//   safeArea: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   scrollView: {
//     flexGrow: 1,
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     padding: 20,
//   },
//   formContainer: {
//     width: "100%",
//     maxWidth: 400,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     padding: 20,
//     shadowColor: "#000",
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
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 30,
//     textAlign: "center",
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#333",
//     marginBottom: 8,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 8,
//     padding: 15,
//     backgroundColor: "#fafafa",
//     fontSize: 16,
//   },
//   error: {
//     color: "#ff3333",
//     fontSize: 14,
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   registerButton: {
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   loginLink: {
//     marginTop: 10,
//   },
//   genderContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   genderButton: {
//     flex: 1,
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     marginHorizontal: 5,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   selectedGenderButton: {
//     backgroundColor: "#007AFF",
//     borderColor: "#007AFF",
//   },
//   genderButtonText: {
//     color: "#333",
//     fontSize: 16,
//   },
//   selectedGenderButtonText: {
//     color: "white",
//   },
// });

// export default RegisterFormModal;




import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { CustomButton } from "../../components/common/CustomButton";
import { CustomTextField } from "../../components/common/CustomTextField";
import { authService } from "../../services/authService";
import { Link, useRouter } from "expo-router";

const GENDER_OPTIONS = [
  { id: 1, label: "H" },
  { id: 2, label: "F" },
];

const RegisterFormModal = ({ navigation }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    line1: "",
    line2: "",
    line3: "",
    city: "",
    postalCode: "",
    gender: { id: "", label: "" },
  });

  const [error, setError] = useState("");

  const handleInputChange = (field, value) => {
    console.log("in handleInputchange");
    setFormData({ ...formData, [field]: value });
  };

  const handleGenderSelect = (gender) => {
    console.log("in handleGenderSelect");
    setFormData({ ...formData, gender });
  };

  const handleRegister = async () => {
    try {
      setError("");

      // Vérifier que les champs obligatoires sont remplis
      if (!formData.username || !formData.email || !formData.firstname || 
          !formData.lastname || !formData.password || !formData.gender.id) {
        setError("Please fill all required fields");
        return;
      }

      // Créer l'objet avec l'ordre exact des champs souhaité
      const transformedData = {
        firstname: formData.username,
        
        lastname: formData.firstname,
        username: formData.lastname,
 
        password: formData.password,
        email: formData.email,
        address: {
          line1: formData.line1 || "",
          line2: formData.line2 || "",
          line3: formData.line3 || "",
          city: formData.city || "",
          postalCode: formData.postalCode || "",
        },
        gender: formData.gender,
      };

      // Afficher les données dans la console pour vérification
      console.log('Données à envoyer:', JSON.stringify(transformedData));

      // Appeler l'API avec les données transformées
      await authService.register(transformedData);

  //     const loginData = {
  //       username: formData.username,    // Utilisation de l'email au lieu du username
  //       password: formData.password
  //     };
  
  //     // Tentative de connexion automatique
  //     const loginResponse = await authService.login(loginData);
      
  //     if (loginResponse) {
  //       console.log('Connexion réussie:', loginResponse);
  //       // Redirection vers la page homescreen après la connexion réussie
  //       navigation.navigate("HomeScreen");
  //     }
  
  //   } catch (error) {
  //     setError("Registration or login failed. Please try again.");
  //     console.error("Error:", error);
  //   }
  // };



      // Redirection après enregistrement réussi
     // navigation.navigate("Login");
     router.replace("/");
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
              { label: "First Name", field: "firstname" },
              { label: "Last Name", field: "lastname" },
              { label: "Username", field: "username" },
               { label: "Password", field: "password", secure: true },
              { label: "Email", field: "email" },      
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

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Gender</Text>
              <View style={styles.genderContainer}>
                {GENDER_OPTIONS.map((gender) => (
                  <TouchableOpacity
                    key={gender.id}
                    style={[
                      styles.genderButton,
                      formData.gender.id === gender.id && styles.selectedGenderButton,
                    ]}
                    onPress={() => handleGenderSelect(gender)}
                  >
                    <Text
                      style={[
                        styles.genderButtonText,
                        formData.gender.id === gender.id && styles.selectedGenderButtonText,
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
    shadowOffset: { width: 0, height: 2 },
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

