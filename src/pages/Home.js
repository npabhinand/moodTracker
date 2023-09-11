import { View, Text } from "react-native";
import React from "react";
import CalendarComponent from "../components/CalendarComponent";
import Profile from "../components/Profile";
import { Button, Card } from "@rneui/base";
const Home = () => {
  return (
    <View style={{ backgroundColor: "#ffff" }}>
      <Profile />
      <Text style={{ margin: 20, fontSize: 22, fontWeight: "700" ,alignSelf:'center'}}>
        Mood Tracker
      </Text>

      <Card
        containerStyle={{
          marginTop: 10,
          width: "95%",
          alignSelf: "center",
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 18, marginBottom: 10 }}>July 24, 2023</Text>
        <Button
          containerStyle={{ borderRadius:5 }}
          buttonStyle={{ backgroundColor: "#dcdada" }} // Set background color
          title="How is Betty feeling today?"
          titleStyle={{ color: "black",fontSize:15 }} // Set font color to white
        />
      </Card>
      <CalendarComponent />
    </View>
  );
};

export default Home;
