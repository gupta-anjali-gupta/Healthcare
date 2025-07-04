import React, { useState } from "react";
import Container from "../../component/Container/Container";
import Header from "../../component/Header/Header";
import Icons from "../../utils/Icons";
import LottieView from "lottie-react-native";
import { Alert, FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import appTheme from "../../utils/appTheme";
import CustomText from "../../component/CustomText/CustomText";
import CustomButton from "../../component/CustomButton/CustomButton";
import { pickImageOrVideo } from "../../utils/utility";
import { uploadToCloudinary } from "../../utils/apiHelper";

const ChatScreen = () => {
const [pickedFile, setPickedFile] = useState(null);

  const imagesJson = [
    { id: "icon1", icon: Icons.girl, title: "Test 1" },
    { id: "icon2", icon: Icons.girl, title: "Test 2" },
    { id: "icon3", icon: Icons.girl, title: "Test 3" },
    { id: "icon4", icon: Icons.girl, title: "Test 4" },
  ];

const handleUploadFile=()=>{
    if (!pickedFile) {
      Alert.alert("Please pick a file first");
      return;
    }

    console.log("File ready to upload:", pickedFile);
    uploadToCloudinary(pickedFile);
}

  return (
    <Container customStyle={{ paddingHorizontal: 20 }}>
      <Header
        leftIcon={Icons.back}
        leftIcon2={
          <LottieView
            source={require("../../assets/lottie/tipno28vWS.json")}
            autoPlay
            loop
            style={{ width: 40, height: 40 }}
          />
        }
        title={"Mohali"}
      />

      <View style={{ gap: "10%" }}>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={imagesJson}
            renderItem={({ item }) => (
              <View
                style={{
                  gap: 10,
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: appTheme.secondary,
                  paddingBottom: 10,
                }}
              >
                <Image
                  source={item.icon}
                  style={{
                    width: 150,
                    height: 100,
                    resizeMode: "cover",
                    borderRadius: 10,
                  }}
                />
                <CustomText
                  text={item.title}
                  fontSize={14}
                  customStyle={{ margin: 5 }}
                />
              </View>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ gap: 15 }}
          />
        </View>

        <View style={{ gap: 15, alignItems: "center" }}>
          <CustomText text={"Upload Prescription"} fontSize={23} />
          <CustomText
            text={
              "We will show the pharmacy that fits as per your prescription"
            }
            fontSize={15}
            customStyle={{ textAlign: "center" }}
            color={appTheme.secondary}
            fontWeight="400"
          />
        </View>

        <View style={styles.uploadView}>
          <TouchableOpacity onPress={()=>{
            pickImageOrVideo((file) => {
              setPickedFile(file);
              console.log("Picked file:", file);
            })
          }}  style={[styles.fileTab, { gap: 20 }]}>
            <LottieView
              source={require("../../assets/lottie/linkupload.json")}
              autoPlay
              loop
              style={{ width: 60, height: 60 }}
            />
            <CustomText text={"Upload Link"} fontSize={14} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.fileTab}>
            <LottieView
              source={require("../../assets/lottie/upload.json")}
              autoPlay
              loop
              style={{ width: 100, height: 100 }}
            />
            <CustomText text={"Upload File"} fontSize={14} />
          </TouchableOpacity>
        </View>
      </View>
      <CustomButton
        onPress={handleUploadFile}
        title={"Continue"}
        color={appTheme.white}
        fontSize={14}
        buttonStyle={{
          backgroundColor: appTheme.primary,
        }}
      />
    </Container>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  uploadView: {
    paddingVertical: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: appTheme.secondary,
    borderRadius: 15,
  },
  fileTab: {
    height: 100,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
