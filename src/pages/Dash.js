import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Avatar, Divider, Card } from "@rneui/themed";
import Profile from "../components/Profile";


const Dash = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <View style={{marginBottom:100  }}>
      <Profile />
      <ScrollView>
        <View
          style={{
            flexDirection: "column",
            marginTop: "20",
            padding: 10,
            marginLeft: 10,
          }}
        >
          <Text style={{ fontSize: 20, marginTop: 10 }}>Today's Overview</Text>
          <Text style={{ fontWeight: "300", fontSize: 18 }}>
            You have devoted 4 hours of care today.
          </Text>
        </View>

        <View
          style={{
            width: "97%",
            height: 180,
            backgroundColor: "#f7e6d4",
            alignSelf: "center",
            borderRadius: 20,
            marginTop: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#f9ede1",
              width: "90%",
              height: 140,
              alignSelf: "center",
              marginTop: 20,
              borderRadius: 10,
            }}
          >
            <Text style={{ padding: 10, marginTop: 10, fontSize: 20 }}>
              Betty's Mood this Week
            </Text>

            <View
              style={{
                flexDirection: "row",
                marginRight: 5,
                marginLeft: 5,
                alignSelf: "center",
              }}
            >
              <View size={20} style={styles.smallBox}>
                <Text style={styles.smallBoxText}>SUN</Text>
                <Avatar source={require(`../assets/sun.png`)} />
              </View>
              <View style={styles.smallBox}>
                <Text style={styles.smallBoxText}>MON</Text>
                <Avatar rounded source={require(`../assets/clock.png`)} />
              </View>
              <View style={styles.smallBox}>
                <Text style={styles.smallBoxText}>TUE</Text>
                <Avatar rounded source={require(`../assets/clock.png`)} />
              </View>
              <View style={styles.smallBox}>
                <Text style={styles.smallBoxText}>WEN</Text>
                <Avatar rounded source={require(`../assets/clock.png`)} />
              </View>
              <View style={styles.smallBox}>
                <Text style={styles.smallBoxText}>THU</Text>
                <Avatar rounded source={require(`../assets/clock.png`)} />
              </View>
              <View style={styles.smallBox}>
                <Text style={styles.smallBoxText}>FRI</Text>
                <Avatar rounded source={require(`../assets/clock.png`)} />
              </View>
              <View style={styles.smallBox}>
                <Text style={styles.smallBoxText}>SAT</Text>
                <Avatar rounded source={require(`../assets/clock.png`)} />
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#151f6d",
            width: "97%",
            height: 140,
            alignSelf: "center",
            marginTop: 20,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#5b6299",
              borderBlockColor: "#ffff",
              width: "90%",
              height: 100,
              alignSelf: "center",
              borderRadius: 10,
              marginTop: 20,
            }}
          >
            <View
              style={{ flexDirection: "column", marginTop: 10, marginLeft: 75 }}
            >
              <Text
                style={{
                  color: "#ffff",
                  fontSize: 20,
                }}
              >
                Betty's Goals
              </Text>
              <Text
                style={{
                  color: "#ffff",
                  fontSize: 25,

                  marginTop: 10,
                }}
              >
                5/7 Goals Met
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#ffff",
            width: "97%",
            height: 120,
            alignSelf: "center",
            marginTop: 20,
            borderRadius: 20,
            shadowColor: "red",
          }}
        >
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Avatar
              size={20}
              rounded
              source={require(`../assets/rx.png`)}
              containerStyle={{ marginTop: 20 }}
            ></Avatar>
            <View>
              <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 20 }}> Pharmacy </Text>
                  <Text style={{ color: "red", fontSize: 20 }}> walgreens</Text>
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: "center",
                    fontWeight: "300",
                  }}
                >
                  {" "}
                  120 W Slaughter L, Austin, TX 78744{" "}
                </Text>
              </View>
            </View>
            <Avatar
              size={20}
              rounded
              source={require(`../assets/3_bar.png`)}
              containerStyle={{ marginTop: 20 }}
            ></Avatar>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Avatar
              size={15}
              rounded
              source={require(`../assets/phone.png`)}
              containerStyle={{ marginLeft: 10, marginTop: 5 }}
            ></Avatar>
            <Text
              style={{
                textDecorationLine: "underline",
                fontSize: 18,
                marginLeft: 10,
              }}
            >
              Call
            </Text>
            <Avatar
              size={15}
              rounded
              source={require(`../assets/map.png`)}
              containerStyle={{ marginLeft: 20, marginTop: 5 }}
            ></Avatar>
            <Text
              style={{
                textDecorationLine: "underline",
                color: "blue",
                marginLeft: 5,
                fontSize: 18,
              }}
            >
              Directions
            </Text>
          </View>
        </View>
        <View>
          <Card containerStyle={{ width: "100%", alignSelf: "center" }}>
            <Text style={styles.heading}>Caregiving Resources</Text>
            <View style={styles.Box}>
              <Text style={styles.boxText}>
                The benefits of caring for your Loved Ones
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "200" }}>
                Caring for a loved one can be a positive experience.
              </Text>
              <Image
                source={require(`../assets/caregiving.png`)}
                style={styles.boxImage}
              />
              <Text style={{ marginBottom: 20 }}>Dismiss</Text>
            </View>
            <Card.Divider />
            <Text style={styles.heading}>From the community</Text>
            <View style={styles.Box}>
      <View>
        <Text>
          <Text style={styles.boxText}>
            SandwYch has your back on how to file & track your legal documents. Make sure to set up these with a loved one soon.
          </Text>
          {showMore ? (
            <Text style={styles.boxText}>
              Additional information you want to display when "Read More" is clicked can go here. You can provide more details or instructions.
            </Text>
          ) : null}
        </Text>

        <TouchableOpacity onPress={toggleShowMore} style={{marginLeft:-10}}>
          <Text style={{ color: '#b2627b', marginLeft: 10 }}>
            {showMore ? 'Read Less' : 'Read More'}
          </Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require('../assets/community.png')}
        style={styles.boxImage}
      />
      <Text style={{ marginBottom: 20 }}>Dismiss</Text>
    </View>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dash;

const styles = StyleSheet.create({
  mainFontSize: {
    fontSize: 20,
  },

  smallBox: {
    backgroundColor: "#ffff",
    borderRadius: 5,
    height: 70,
    flexDirection: "column",
    marginRight: 5,
    width: 42,
    alignItems: "center",
  },
  smallBoxText: {
    marginTop: 5,
    padding: 2,
    textAlign: 'justify',
  },
  Box: {
    backgroundColor: "#f9fafb",
    width: "97%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 30,
  },
  heading: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  boxImage: {
    width: "95%",
    borderRadius: 10,
    marginTop: 20,
    height: 200,
    marginBottom: 20,
  },
  boxText: {
    fontSize: 15,
  },
});
