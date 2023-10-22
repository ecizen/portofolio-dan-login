import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { ActivityIndicator } from "react-native";

export default function Screen1({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);

  // Fungsi untuk menangani tindakan yang memicu loading
  const pindah2 = () => {
    setIsLoading(true);
    navigation.navigate("App2");

    // Simulasikan tugas yang memakan waktu
    setTimeout(() => {
      // Setelah tugas selesai, matikan loading
      setIsLoading(false);
    }, 6000); // Contoh: Menunggu 2 detik sebelum menghentikan loading
  };
  const pindah = () => {
    // Arahkan ke Screen2

    navigation.navigate("Screen2");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={{ width: "100%", height: "100%" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#30ADAD" }}>
            Welcome Back !
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontWeight: "700",
              fontSize: 20,
              color: "gray",
            }}
          >
            Please enter your details to sign
          </Text>
        </View>

        <Image
          source={require("./mob.png")}
          style={{ width: 350, height: 350, marginHorizontal: 40 }}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 430,
            paddingHorizontal: 50,
          }}
        >
          <Text style={{ fontSize: 26, fontWeight: "bold", color: "#30ADAD" }}>
            {" "}
            Login
          </Text>
          <TextInput
            style={{
              width: 350,
              height: 50,
              borderWidth: 2,
              borderRadius: 20,
              marginTop: 30,
              borderColor: "#30ADAD",
              paddingLeft: 20,
            }}
            placeholder="username atau email"
          ></TextInput>
          <TextInput
            style={{
              width: 350,
              height: 50,
              borderWidth: 2,
              borderRadius: 20,
              marginTop: 30,
              borderColor: "#30ADAD",
              paddingLeft: 20,
            }}
            placeholder="password"
          ></TextInput>
          <TouchableOpacity
            onPress={pindah2}
            style={{
              paddingVertical: 12,
              paddingHorizontal: 28,
              backgroundColor: "#30ADAD",
              borderRadius: 10,
              width: 350,
              top: 50,
              borderWidth: 2,
              borderColor: "#30ADAD",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", marginTop: 60 }}>
            <Text>Dont't have an account?</Text>
            <TouchableOpacity onPress={pindah}>
              <Text
                style={{ fontWeight: "700", color: "#30ADAD", marginLeft: 5 }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  gambar: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    position: "relative",
  },
});
