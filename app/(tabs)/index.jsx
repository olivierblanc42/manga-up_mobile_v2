import React, { useEffect, useState } from "react";

export default function HomeScreen() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/pictures/1`);
        const data = await res.json();
        setData(data[0]);
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

  return (
    <div className="App">
      {loading ? (
        "loading..."
      ) : (
        <>
          {displayImage()}
          <h2>{data.title}</h2>
        </>
      )}
    </div>
  );
}
