
// import React, { useEffect, useState } from "react";
// import { StyleSheet, Text, View, Image, ScrollView, StatusBar} from "react-native";


// const Genres = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`http://localhost:8080/api/genres/six`);
//         const data = await res.json();
//         console.log(`${data} : data`);
//         console.log(data[0].label);
//         setData(data);  
//         setLoading(false);
//       } catch (e) {
//         console.log(`Error: ${e}`);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const displayImage = (imgData) => {
//     if (imgData) {
//       const blobData = atob(imgData);
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
   


// <View style={styles.container}>
//           <Text style={styles.title}>Genres !</Text>
//           {loading ? (
//             <Text>Chargement...</Text>
//           ) : (
//             <ScrollView contentContainerStyle={styles.scrollContainer}>
//               {data.map((genre, index) => (
//                 <View key={index} style={styles.card}>
//                   {/* {displayImage(genre.pictures[0]?.img)} */}
//                   {displayImage(genre[0].img)}
//                   <Text style={styles.cardTitle}>{genre[0].label}</Text>
//                   {/* <Text style={styles.cardSummary}>{genre.summary}</Text> */}
//                 </View>
//               ))}
//             </ScrollView>
//           )}
//         </View>
     
//         )}; 

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//     paddingTop: StatusBar.currentHeight,
//   },
//   scrollContainer: {
//     alignItems: "center",
//     paddingVertical: 20,
//   },
//   card: {
//     // flex:1,
//     width: "90%",
//     marginBottom: 16,
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
//     textAlign: "center",
//   },
//   // cardSummary: {
//   //   fontSize: 16,
//   //   color: "#666",
//   //   textAlign: "center",
//   // },
//   label: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 20,
//   },
// });

// export default Genres;

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, StatusBar, ActivityIndicator } from "react-native";

const Genres = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/genres/six`);
        const result = await res.json();
        setData(result);
        setLoading(false);
      } catch (e) {
        console.error(`Error: ${e}`);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Afficher une image à partir des données binaires encodées en base64
  const displayImage = (imgData) => {
    if (imgData) {
      return `data:image/webp;base64,${imgData}`;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <Text style={styles.label}>Genres</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {data.map((genre, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardTitle}>{genre.label}</Text>
              {genre.img && (
                <Image
                  source={{ uri: displayImage(genre.img) }}
                  style={styles.image}
                  resizeMode="cover"
                />
              )}
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  card: {
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
  label: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default Genres;
