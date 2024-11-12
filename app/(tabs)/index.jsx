

// import { Image } from "react-native";

// import ParallaxScrollView from "@/components/ParallaxScrollView";
// import { Link } from "expo-router";
// import { Text, View } from "react-native";

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       //Cette partie là est le header
//       headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
//       headerImage={
//         <View className="flex-row py-3 justify-evenly bg-gray-200">
//           <Image
//             source={require("../../assets/images/logo.png")}
//             className="w-12 h-12"
//             style={{ width: 70, height: 70, aspectRatio: 1 }}
//             resizeMode="contain"
//           />
//           <Image
//             source={require("../../assets/images/ri_bar-chart-horizontal-fill.svg")}
//             className="w-12 h-12"
//             style={{ width: 30, height: 30, aspectRatio: 1 }}
//             resizeMode="contain"
//           />
//           {/*Je dois adapter cette vue pour que l'icône shopping et user soient plus à droite. */}
//           <View className="">
//             <Image
//               source={require("../../assets/images/bx_bx-user-check.svg")}
//               className="w-12 h-12"
//               style={{ width: 30, height: 30, aspectRatio: 1 }}
//               resizeMode="contain"
//             />
//             <Image
//               source={require("../../assets/images/carbon_shopping-cart-plus.svg")}
//               className="w-12 h-12"
//               style={{ width: 30, height: 30, aspectRatio: 1 }}
//               resizeMode="contain"
//             />
//           </View>

//           <Text className="container mx-auto">
//             <Image
//               source={require("../../assets/images/bannierre_mangas.webp")}
//               className="absolute bottom-0 left-0 h-44 w-72 " // Utilisation des classes Tailwind
//               style={{ width: 300, height: 100, aspectRatio: 1 }} // Ajustez la valeur du ratio
//               resizeMode="contain"
//             />
//           </Text>
//         </View>
//       }
//     >
//       {/*Cette partie constitue le centre de la page d'accueil*/}
//       <View className="gap-2 mb-2">
//         <Text className="text-lg font-semibold">
//           <Link href="/(tabs)/mangaTest">
//             MANGA
//             <svg
//               className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 74 70"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 5h12m0 0L9 1m4 4L9 9"
//               />
//             </svg>
//           </Link>
//         </Text>
//       </View>

//       {/* </View> */}
//       {/* <View className="gap-2 mb-2"> */}
//       <Text className="text-lg font-semibold">
//         <Link href="">
//           GENRE
//           <svg
//             className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 74 70"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 5h12m0 0L9 1m4 4L9 9"
//             />
//           </svg>
//         </Link>
//       </Text>
//       {/* </View> */}

//       {/*Footer*/}
//       <View className="bg-dark-up py-3 text-white">
//         <Text className="flex flex-col md:flex-row md:px-10 justify-around items-center">
//           <Text className="flex flex-col w-1/3">
//             <Image source={require("../../assets/images/logo.png")} />
//             <Text className="infos">
//               Score<span> 4.1</span> | <span>1500</span> avis
//             </Text>
//           </Text>
//         </Text>
//         <Text className="flex flex-col md:flex-row w-1/3 justify-between">
//           <Text className="text-center my-6 md:text-start">
//             <ul className="list">
//               <li>
//                 <h4>Manga’up</h4>
//               </li>
//               <li>
//                 <a>Les conditions de vente</a>
//               </li>
//               <li>
//                 <a>Politique de confidentialité</a>
//               </li>
//               <li>
//                 <a>contact</a>
//               </li>
//             </ul>
//           </Text>
//           <Text className="text-center md:text-start my-6">
//             <ul className="list">
//               <li>
//                 <h4>Compte</h4>
//               </li>
//               <li>
//                 <a>Créer un compte</a>
//               </li>
//               <li>
//                 <a>Se connecter</a>
//               </li>
//             </ul>
//           </Text>
//         </Text>

//         <Text className="flex flex-col md:flex-col w-1/3">
//           <Text className="flex flex-row mx-auto gap-4 my-6">
//             <Link href="https://discord.com/" target="_blank">
//               <Image
//                 source={require("../../assets/images/discord_mobile.png")}
//               />
//             </Link>
//             <Link href="https://x.com/home" target="_blank">
//               <Image src={require("../../assets/images/x_mobile.png")} />
//             </Link>
//             <Link href="https://www.instagram.com/" target="_blank">
//               <Image src={require("../../assets/images/insta_mobile.png")} />
//             </Link>
//             <Link href="https://www.facebook.com/" target="_blank">
//               <Image src={require("../../assets/images/facebook_mobile.png")} />
//             </Link>
//           </Text>
//           <Image
//             className="mx-auto"
//             src={require("../../assets/images/android-btn.png")}
//           />
//         </Text>
//       </View>
//       <View>

//       <Image
//         className="my-6 mx-auto w-8/12"
//         src={require("../../assets/images/line_desktop.png")}
//       />
//       <Text className="text-center">
//         Copyright © 2024 Manga’up
//         <Text>Contact, Mention legale - All rights reserved</Text>
//       </Text>
//       </View>
//     </ParallaxScrollView>

    
//   );
// }


import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.headerLogo}
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/ri_bar-chart-horizontal-fill.svg")}
            style={styles.headerIcon}
            resizeMode="contain"
          />
          <View style={styles.headerIcons}>
            <Link href="/(tabs)/AuthFormModal" style={styles.link}>
            <Image
              source={require("../../assets/images/bx_bx-user-check.svg")}
              style={styles.headerIcon}
              resizeMode="contain"
            />
            </Link>
            <Image
              source={require("../../assets/images/carbon_shopping-cart-plus.svg")}
              style={styles.headerIcon}
              resizeMode="contain"
            />
          </View>
        </View>
        <Image
          source={require("../../assets/images/bannierre_mangas.webp")}
          style={styles.headerBanner}
          resizeMode="contain"
        />
      </View>

      <View style={styles.linkContainer}>
        <Link href="/(tabs)/mangaTest" style={styles.link}>
          <Text style={styles.linkText}>MANGA</Text>
          <svg
            style={styles.linkIcon}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 74 70"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </View>
      <View style={styles.linkContainer}>
        <Link href="" style={styles.link}>
          <Text style={styles.linkText}>GENRE</Text>
          <svg
            style={styles.linkIcon}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 74 70"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <View style={styles.footerLeft}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.footerLogo}
            />
            <Text style={styles.footerInfo}>
              Score <Text style={styles.footerInfoHighlight}>4.1</Text> |{" "}
              <Text style={styles.footerInfoHighlight}>1500</Text> avis
            </Text>
          </View>
          <View style={styles.footerRight}>
            <View style={styles.footerColumn}>
              <Text style={styles.footerColumnTitle}>Manga'up</Text>
              <Link href="#" style={styles.footerLink}>
                Les conditions de vente
              </Link>
              <Link href="#" style={styles.footerLink}>
                Politique de confidentialité
              </Link>
              <Link href="#" style={styles.footerLink}>
                contact
              </Link>
            </View>
            <View style={styles.footerColumn}>
              <Text style={styles.footerColumnTitle}>Compte</Text>
              <Link href="#" style={styles.footerLink}>
                Créer un compte
              </Link>
              <Link href="#" style={styles.footerLink}>
                Se connecter
              </Link>
            </View>
          </View>
        </View>
        <View style={styles.footerSocial}>
          <Link href="https://discord.com/" target="_blank">
            <Image
              source={require("../../assets/images/discord_mobile.png")}
              style={styles.footerSocialIcon}
            />
          </Link>
          <Link href="https://x.com/home" target="_blank">
            <Image
              source={require("../../assets/images/x_mobile.png")}
              style={styles.footerSocialIcon}
            />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <Image
              source={require("../../assets/images/insta_mobile.png")}
              style={styles.footerSocialIcon}
            />
          </Link>
          <Link href="https://www.facebook.com/" target="_blank">
            <Image
              source={require("../../assets/images/facebook_mobile.png")}
              style={styles.footerSocialIcon}
            />
          </Link>
        </View>
        <Image
          source={require("../../assets/images/android-btn.png")}
          style={styles.footerAndroidButton}
        />
      </View>
      <View style={styles.copyright}>
        <Image
          source={require("../../assets/images/line_desktop.png")}
          style={styles.copyrightLine}
        />
        <Text style={styles.copyrightText}>
          Copyright © 2024 Manga'up
          <Text style={styles.copyrightSubtext}>
            Contact, Mention legale - All rights reserved
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
  },
  headerContainer: {
    backgroundColor: "#f5f5f5",
    paddingVertical: 12,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  headerLogo: {
    width: 70,
    height: 70,
    aspectRatio: 1,
  },
  headerIcon: {
    width: 30,
    height: 30,
    aspectRatio: 1,
  },
  headerIcons: {
    flexDirection: "row",
    gap: 8,
  },
  headerBanner: {
    width: 300,
    height: 100,
    aspectRatio: 1,
    marginTop: 12,
  },
  linkContainer: {
    marginBottom: 16,
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
  },
  linkText: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 8,
  },
  linkIcon: {
    width: 14,
    height: 14,
  },
  footer: {
    // flex:1/3,
    backgroundColor: "#1D3D47",
    paddingVertical: 24,
    paddingHorizontal: 16,
    // marginTop: 24,
    marginTop:20,
  },
  footerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerLeft: {
    alignItems: "center",
    // width: "33.33%",
    width: "33.33%",
  },
  footerLogo: {
    width: 70,
    height: 70,
    marginBottom: 8,
  },
  footerInfo: {
    color: "white",
    textAlign: "center",
  },
  footerInfoHighlight: {
    fontWeight: "bold",
  },
  footerRight: {
    flexDirection: "row",
    // width: "66.67%",
    width: "76.67%",
    justifyContent: "space-around",
  },
  footerColumn: {
    alignItems: "center",
  },
  footerColumnTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  footerLink: {
    color: "white",
    marginVertical: 4,
  },
  footerSocial: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
    gap: 16,
  },
  footerSocialIcon: {
    width: 24,
    height: 24,
  },
  footerAndroidButton: {
    width: "100%",
    marginTop: 24,
  },
  copyright: {
    alignItems: "center",
    marginTop: 24,
  },
  copyrightLine: {
    width: "80%",
    marginBottom: 12,
  },
  copyrightText: {
    color: "#333",
    textAlign: "center",
  },
  copyrightSubtext: {
    display: "block",
  },
});


