import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, Divider } from "@rneui/themed";
const Profile = () => {
  return (
    <View>
      <View
        style={{
          padiing: 10,
          width: "100%",
          backgroundColor: "#ffff",
          height: 75,
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 50,
        }}
      >
        <Avatar
          size={50}
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          containerStyle={{marginTop:10}}
        />
        <View style={{ flexDirection: "column", marginLeft: 10 ,marginTop:10}}>
          <Text style={{ fontWeight: "500", fontSize: 20 }}>Abhinand</Text>
          <Text style={{ fontWeight: "200", fontSize: 20 }}>
            npabhinad@gmail.com
          </Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: '#f0f0f0',width:50,height:50,borderRadius:25,alignItems:'center' ,marginTop:10,justifyContent:'center'}}>
        <Avatar
          size={30}
          rounded
          source={require(`../assets/hand.png`)}
          containerStyle={{}}
        ></Avatar>
       </TouchableOpacity>
        <Divider />
      </View>

    </View>
  )
}

export default Profile