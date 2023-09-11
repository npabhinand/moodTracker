import { View, Text } from "react-native";
import React from "react";
import CalendarComponent from "../components/CalendarComponent";
import Profile from "../components/Profile";
import { Button, Card } from "@rneui/base";
const Meds = () => {
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
        <Text style={{textAlign:'justify'}}>Lorem ipsum is placeholder text commonly used in the graphic,print, and publishing industries for previewing layouts and visual mockips.</Text>
      </Card>
      <CalendarComponent />
    </View>
  )
}

export default Meds