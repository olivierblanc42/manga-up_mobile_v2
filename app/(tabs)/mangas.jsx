import ParallaxScrollView from "@/components/ParallaxScrollView";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const mangas = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState(null)
  const [summary, setSummary] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/mangas/nine`);
        console.log(res);
        const data = await res.json();
        // console.log(data[0].pictures[0].img);
        console.log(`data[0] : ${data[0].title}`);
        const donnees = data[0].pictures[0];
        const title = data[0].title;
        const summary = data[0].summary;
        setData(donnees);
        setTitle(title);
        setSummary(summary);

        setLoading(false);
      } catch (e) {
        console.log(`Error: ${e}`);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const displayImage = () => {
    if (data && data.img) {
      // Décoder la chaîne base64 en un objet Blob
      const blobData = atob(data.img);
      const arrayBuffer = new ArrayBuffer(blobData.length);
      const uint8Array = new Uint8Array(arrayBuffer);

      for (let i = 0; i < blobData.length; i++) {
        uint8Array[i] = blobData.charCodeAt(i);
      }

      const blob = new Blob([uint8Array], { type: "image/webp" });

      // Créer une URL exploitable pour l'image
      const imageUrl = URL.createObjectURL(blob);

      return <img src={imageUrl} alt={data.title} />;
    }
    return null;
  };
  const displayTitle = () =>{
    if (title) {
      const mangaTitle = title;
      console.log(`title : ${mangaTitle}`);
      return mangaTitle
  }
};
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <View style={styles.container}>
          <Text style={[styles.title, styles.summary]}>
            {loading ? (
              "loading..."
            ) : (
              <>
                {displayImage()}
                
                <h3>{title}</h3>
                <h3>{summary}</h3>
              </>
            )}
            Mangas !
          </Text>
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
  title: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#333",
  },
  summary: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});

export default mangas;
