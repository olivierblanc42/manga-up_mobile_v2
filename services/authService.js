const API_URL = "http://localhost:8080/api";

export const authService = {
  async login({ email, password }) {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    return response.json();
  },

//   async register({
//     username,
//     email,
//     firtsname,
//     lastname,
//     password,
//     line1,
//     line2,
//     line3,
//     city,
//     PostalCode,
//     gender,
//   }) {
//     const response = await fetch(`${API_URL}/register`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username,
//         email,
//         firtsname,
//         lastname,
//         password,
//         line1,
//         line2,
//         line3,
//         city,
//         PostalCode,
//         gender,}),
//     });

//     if (!response.ok) {
//       throw new Error("Registration failed");
//     }

//     return response.json();
//   },
// };
async register({
  username,
  email,
  firstname,
  lastname,
  password,
  line1,
  line2,
  line3,
  city,
  PostalCode,
  gender,

}) {
  const response = await fetch(`${API_URL}/register`, {
    
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username,
      email,
      firstname,
      lastname,
      password,
      line1,
      line2,
      line3,
      city,
      PostalCode,
      gender,
      }),
  });

  console.log(response);

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return response.json();
},
};

