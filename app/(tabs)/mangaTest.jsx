// import ParallaxScrollView from "@/components/ParallaxScrollView";
// import React, { useEffect, useState } from "react";
// import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

// const mangas = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [title, setTitle] = useState(null);
//   const [summary, setSummary] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`http://localhost:8080/api/mangas/nine`);
//         const mangaData = await res.json();
//         console.log(`mangaData : ${mangaData}`);
//         setData(mangaData);
//         setLoading(false);
//       } catch (e) {
//         console.log(`Error: ${e}`);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const displayCard = ({ img }) => {
//     // Décoder la chaîne base64 en un objet Blob
//     const blobData = atob(img);
//     const arrayBuffer = new ArrayBuffer(blobData.length);
//     const uint8Array = new Uint8Array(arrayBuffer);

//     for (let i = 0; i < blobData.length; i++) {
//       uint8Array[i] = blobData.charCodeAt(i);
//     }

//     const blob = new Blob([uint8Array], { type: "image/webp" });
//     const imageUrl = URL.createObjectURL(blob);

//     return (
//       <View style={styles.card}>
//         <Image source={{ uri: imageUrl }} style={styles.image} />
//         <View style={styles.cardContent}>
//           <Text style={styles.title}>{title}</Text>
//           <Text style={styles.summary}>{summary}</Text>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
//       headerImage={
//         <View style={styles.container}>
//           <Text style={[styles.title, styles.summary]}>Mangas !</Text>
//         </View>
//       }
//       contentContainerStyle={{ paddingTop: 300 }}
//     >
//       <ScrollView contentContainerStyle={styles.cardsContainer}>
//         {loading ? (
//           <Text>Loading...</Text>
//         ) : (
//           data.map((item, index) => (
//             <View key={index}>{displayCard(item.pictures[0])}</View>
//           ))
//         )}
//       </ScrollView>
//     </ParallaxScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//   },
//   cardsContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     padding: 16,
//   },
//   card: {
//     width: "45%",
//     marginHorizontal: 8,
//     marginVertical: 16,
//     backgroundColor: "white",
//     borderRadius: 8,
//     elevation: 2,
//   },
//   image: {
//     width: "100%",
//     height: 150,
//     borderTopLeftRadius: 8,
//     borderTopRightRadius: 8,
//   },
//   cardContent: {
//     padding: 12,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   summary: {
//     fontSize: 14,
//     color: "#666",
//   },
// });

// export default mangas;
// import ParallaxScrollView from "@/components/ParallaxScrollView";
// import React, { useEffect, useState } from "react";
// import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

// const Mangas = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [title, setTitle] = useState(null);
//   const [summary, setSummary] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`http://localhost:8080/api/mangas/nine`);
//         const data = await res.json();
        
//         setData(data[0].pictures[0]);
//         setTitle(data[0].title);
//         setSummary(data[0].summary);

//         setLoading(false);
//       } catch (e) {
//         console.log(`Error: ${e}`);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const displayImage = () => {
//     if (data && data.img) {
//       const blobData = atob(data.img);
//       const arrayBuffer = new ArrayBuffer(blobData.length);
//       const uint8Array = new Uint8Array(arrayBuffer);

//       for (let i = 0; i < blobData.length; i++) {
//         uint8Array[i] = blobData.charCodeAt(i);
//       }

//       const blob = new Blob([uint8Array], { type: "image/webp" });
//       const imageUrl = URL.createObjectURL(blob);

//       return <Image source={{ uri: imageUrl }} style={styles.image} />;
//     }
//     return null;
//   };

//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
//       headerImage={
//         <View style={styles.container}>
//           <Text style={styles.title}>Mangas !</Text>
//           {loading ? (
//             <Text>Chargement...</Text>
//           ) : (
//             <ScrollView style={styles.scrollContainer}>
//               <View style={styles.card}>
//                 {displayImage()}
//                 <Text style={styles.cardTitle}>{title}</Text>
//                 <Text style={styles.cardSummary}>{summary}</Text>
//               </View>
//             </ScrollView>
//           )}
//         </View>
//       }
//     ></ParallaxScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//   },
//   scrollContainer: {
//     width: "100%",
//     maxHeight: 400, // Ajustez la hauteur maximale pour contrôler l'espace de défilement
//   },
//   card: {
//     width: "90%",
//     padding: 16,
//     borderRadius: 8,
//     backgroundColor: "#fff",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//     alignItems: "center",
//   },
//   image: {
//     width: "100%",
//     height: 200,
//     borderRadius: 8,
//     marginBottom: 16,
//   },
//   cardTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 8,
//   },
//   cardSummary: {
//     fontSize: 16,
//     color: "#666",
//     textAlign: "center",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 20,
//   },
// });

// export default Mangas;
// import ParallaxScrollView from "@/components/ParallaxScrollView";
// import React, { useEffect, useState } from "react";
// import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

// const Mangas = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [summary, setSummary] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`http://localhost:8080/api/mangas/nine`);
//         const data = await res.json();
        
//         setData(data[0].pictures[0]);
//         setTitle(data[0].title);
//         setSummary(data[0].summary);

//         setLoading(false);
//       } catch (e) {
//         console.log(`Error: ${e}`);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const displayImage = () => {
//     if (data && data.img) {
//       const blobData = atob(data.img);
//       const arrayBuffer = new ArrayBuffer(blobData.length);
//       const uint8Array = new Uint8Array(arrayBuffer);

//       for (let i = 0; i < blobData.length; i++) {
//         uint8Array[i] = blobData.charCodeAt(i);
//       }

//       const blob = new Blob([uint8Array], { type: "image/webp" });
//       const imageUrl = URL.createObjectURL(blob);

//       return <Image source={{ uri: imageUrl }} style={styles.image} />;
//     }
//     return null;
//   };

//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
//       headerImage={
//         <View style={styles.container}>
//           <Text style={styles.title}>Mangas !</Text>
//           {loading ? (
//             <Text>Chargement...</Text>
//           ) :(data.map ((item, index) =>()
//             <ScrollView style={styles.scrollContainer}>
//               <View style={styles.card}>
//                 {displayImage()}
//                 <Text style={styles.cardTitle}>{title}</Text>
//                 <Text style={styles.cardSummary}>{summary}</Text>
//               </View>
//             </ScrollView>
//           )}
//         </View>
//       }
//     ></ParallaxScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//   },
//   scrollContainer: {
//     width: "100%",
//     maxHeight: 400, // Ajustez la hauteur maximale pour contrôler l'espace de défilement
//   },
//   card: {
//     width: "90%",
//     padding: 16,
//     borderRadius: 8,
//     backgroundColor: "#fff",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//     alignItems: "center",
//   },
//   image: {
//     width: "100%",
//     height: 200,
//     borderRadius: 8,
//     marginBottom: 16,
//   },
//   cardTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 8,
//   },
//   cardSummary: {
//     fontSize: 16,
//     color: "#666",
//     textAlign: "center",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 20,
//   },
// });

// export default Mangas;



import ParallaxScrollView from "@/components/ParallaxScrollView";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const Mangas = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/mangas/nine`);
        const data = await res.json();
        
        setData(data);  // Stockez directement tous les mangas renvoyés
        setLoading(false);
      } catch (e) {
        console.log(`Error: ${e}`);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const displayImage = (imgData) => {
    if (imgData) {
      const blobData = atob(imgData);
      const arrayBuffer = new ArrayBuffer(blobData.length);
      const uint8Array = new Uint8Array(arrayBuffer);

      for (let i = 0; i < blobData.length; i++) {
        uint8Array[i] = blobData.charCodeAt(i);
      }

      const blob = new Blob([uint8Array], { type: "image/webp" });
      const imageUrl = URL.createObjectURL(blob);

      return <Image source={{ uri: imageUrl }} style={styles.image} />;
    }
    return null;
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <View style={styles.container}>
          <Text style={styles.title}>Mangas !</Text>
          {loading ? (
            <Text>Chargement...</Text>
          ) : (
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              {data.map((manga, index) => (
                <View key={index} style={styles.card}>
                  {displayImage(manga.pictures[0]?.img)}
                  <Text style={styles.cardTitle}>{manga.title}</Text>
                  <Text style={styles.cardSummary}>{manga.summary}</Text>
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      }
    ></ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  card: {
    // flex:1,
    width: "90%",
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
  cardSummary: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
});

export default Mangas;
 
