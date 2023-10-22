import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { themeColors } from "./theme";

import back from "./background.png";

// Di dalam komponen Anda

const Login = ({ navigation }) => {
  const onPress = () => {
    // Arahkan ke Screen2
    navigation.navigate("Screen1");
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: themeColors.bg,
        width: 500,
        marginLeft: -30,
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 32,
            textAlign: "center",
            top: -60,
            color: "#30ADAD",
          }}
        >
          Let's Get Started!{" "}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image
            source={require("./assets/karakterr.png")}
            style={{ width: 350, height: 350 }}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={onPress}
              style={{
                paddingVertical: 12,
                paddingHorizontal: 28,
                backgroundColor: "#30ADAD",
                borderRadius: 10,
                width: 180,
                top: 50,
                position: "relative",
                left: 10,
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
                Sign In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPress}
              style={{
                paddingVertical: 12,
                paddingHorizontal: 28,
                backgroundColor: "white",
                borderRadius: 10,
                width: 180,
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
                  color: "#30ADAD",
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "center", top: 70 }}
          >
            <Text
              style={{ color: "white", fontWeight: "bold", color: "black" }}
            >
              Already have an account
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate(Login)}>
              <Text style={{ fontWeight: "bold", color: "#30ADAD" }}>
                {" "}
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  back: {
    width: "100%",
    height: "100%",

    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  text: {
    textAlign: "center",
    color: "#30ADAD",
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    marginTop: 170,
  },
  text2: {
    fontWeight: "500",
    color: "gray",

    textAlign: "center",
    textAlignVertical: "top",
    paddingHorizontal: 40,
    position: "relative",
    top: 40,
  },
});

export default Login;
