// Screen1.js
import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  View,
  Button,
  Alert,
  Card,
  TouchableOpacity,
  navigation,
  ScrollView
} from "react-native";


import { ImageBackground } from "react-native";

import profil from "./profil5.jpg";
import titik1 from "./Group3.png";
import titik2 from "./porto1.png";
import titik3 from "./porto2.jpeg";
import titik4 from "./porto3.jpeg";
import titik5 from "./porto4.jpeg";
import titik6 from "./proto5.png";
import titik7 from "./porto6.png";
import titik8 from "./porto7.png";
import titik9 from "./projek2.png";


import codeIcon from "./code.png";
import graduation from "./graduation.png";

import kotak from "./java.png";
import Screen2 from "./css.png";
import Screen3 from "./tailwind.png";
import Screen4 from "./react.png";

const Screen1 = ({ navigation }) => {
  const handleButtonPress = () => {
    // Arahkan ke Screen2
    navigation.navigate("Screen2");
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./projek.png")} style={styles.back}>
        <View style={styles.grup1}>
          <Text style={styles.text}> My Projec</Text>
          <Text style={styles.text2}>Hallo teman teman berikut ini merupakan projek yang perna saya buat silahkan dilihat</Text>
          <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.cardContainer}
    >
      <View style={styles.card}>
        <Image source={titik2} style={styles.gam1}/>
        {/* <Text style={styles.cardText}>Card 1</Text> */}

      </View>
      <View style={styles.card}>
        <Image source={titik7} style={styles.gam1}/>
        {/* <Text style={styles.cardText}>Card 1</Text> */}

      </View>
      <View style={styles.card}>
        <Image source={titik8} style={styles.gam1}/>
        {/* <Text style={styles.cardText}>Card 1</Text> */}

      </View>
      <View style={styles.card}>
        <Image source={titik9} style={styles.gam1}/>
        {/* <Text style={styles.cardText}>Card 1</Text> */}

      </View>
      
      <View style={styles.card}>
      <Image source={titik3} style={styles.gam2}/>
      </View>
      <View style={styles.card}>
      <Image source={titik4} style={styles.gam3}/>
      </View>
      <View style={styles.card}>
      <Image source={titik5} style={styles.gam3}/>
      </View>
      <View style={styles.card}>
      <Image source={titik6} style={styles.gam3}/>
      </View>
      {/* Tambahkan kartu-kartu lain di sini */}
    </ScrollView>
    
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -90,
    textAlign: "center",
    position: "relative",
    top: 70,
    alignItems: "center",
    padding: 8,
    backgroundColor: "#2A6E6C",
  },

  text: {
    marginHorizontal: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#D0CECE'
  },
  text2: {
    marginTop : 30,
    marginHorizontal: 30,
    fontSize: 25,
    fontWeight: '600',
    color: '#D0CECE',
    textAlign: 'left'
  },
  gam1:{
    width: 300,
    height: 200
  },
  gam4:{
    width: 300,
    height: 200
  },
  gam1:{
    width: 300,
    height: 200
  },
  gam1:{
    width: 300,
    height: 200
  },
  gam2:{
    width: 210,
    height: 110
  },
  gam3:{
    width: 250,
    height: 150
  },

  back: {
    width: 460,
    height: 820,
  },
  grup1:{
    marginTop : 40
    
  },
  cardContainer: {
    paddingVertical: 70,
    paddingHorizontal: 20
  },
  card: {
    
    width: 300,
    height: 230,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Screen1;
