import React, { useState } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,Alert, TextInput
} from "react-native";

import Profile from "../components/Profile";
import { Avatar, Card } from "@rneui/base";
import CustomPopup from '../components/CustomPopup';
// Import avatar images
import emoji1 from "../assets/emoji1.png";
import emoji2 from "../assets/emoji2.png";
import emoji3 from "../assets/emoji3.png";
import emoji4 from "../assets/emoji4.png";
import emoji5 from "../assets/emoji5.png";

import bookImage from "../assets/book.png";
import tvImage from "../assets/tv.png";
import cleanImage from "../assets/clean.png";
import musicImage from "../assets/music.png";
import workImage from "../assets/work.png";
import shopImage from "../assets/shop.png";
import appointmentImage from "../assets/appointment.png";
import driveImage from "../assets/drive.png";
import paperworkImage from "../assets/paperwork.png";
import pharmacyImage from "../assets/pharmacy.png";
import meditateImage from "../assets/meditate.png";
import exerciseImage from "../assets/exercise.png";
import healthyImage from "../assets/healthy.png";
import sleepImage from "../assets/sleep.png";
import relaxImage from "../assets/relax.png";
import familyImage from "../assets/family.png";


const Task = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);
  const [cardSelected, setCardSelected] = useState(false);
  const avatarSources = [emoji1, emoji2, emoji3, emoji4, emoji5];
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleSaveNote = (noteText) => {
    // Handle saving the note text here
    console.log('Note Text:', noteText);
  };

  const handleAvatarClick = (avatarIndex) => {
    setSelectedAvatar(avatarIndex);
  };

  const cards = [
    { id: 1, title: "Book", imageUrl: bookImage },
    { id: 2, title: "watch TV", imageUrl: tvImage },
    { id: 3, title: "Clean", imageUrl: cleanImage },
    { id: 4, title: "Music", imageUrl: musicImage },
    { id: 5, title: "Work", imageUrl: workImage },
    { id: 6, title: "Shop", imageUrl: shopImage },
    { id: 7, title: "Appointment", imageUrl: appointmentImage },
    { id: 8, title: "Drive", imageUrl: driveImage },
    { id: 9, title: "Paperwork", imageUrl: paperworkImage },
    { id: 10, title: "Pharmacy", imageUrl: pharmacyImage },
    { id: 11, title: "Meditate", imageUrl: meditateImage },
    { id: 12, title: "Exercise", imageUrl: exerciseImage },
    { id: 13, title: "Ate Healthy", imageUrl: healthyImage },
    { id: 14, title: "Good Sleep", imageUrl: sleepImage },
    { id: 15, title: "Relax", imageUrl: relaxImage },
    { id: 16, title: "Family", imageUrl: familyImage },
  ];

  const toggleCardSelection = (cardId) => {
    if (selectedCards.includes(cardId)) {
      setSelectedCards(selectedCards.filter((id) => id !== cardId));
    } else {
      setSelectedCards([...selectedCards, cardId]);
    }
    setCardSelected(true); // Set cardSelected to true when a card is selected
  };


  return (
    <View style={{ backgroundColor: "#ffff" }}>
      <ScrollView>
        <Profile />

        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            marginTop: 20,
            fontWeight: "800",
          }}
        >
          July 24, 2023
        </Text>

        <Text style={{ fontSize: 18, padding: 10 }}>Select mood:</Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 10,
          }}
        >
          {[1, 2, 3, 4, 5].map((avatarIndex) => (
            <TouchableHighlight
              key={avatarIndex}
              onPress={() => handleAvatarClick(avatarIndex)}
              underlayColor="transparent" // Make the highlight color transparent
            >
              <View
                style={{
                  backgroundColor:
                    selectedAvatar === avatarIndex ? "#8cc63e" : "transparent",
                  borderRadius: 50, // Make it round
                  padding: 5, // Add some padding
                }}
              >
                <Avatar
                  source={avatarSources[avatarIndex - 1]} // Adjust index since the array is 0-based
                  style={{ width: 50, height: 50 }} // Set the size of the avatar
                />
              </View>
            </TouchableHighlight>
          ))}
        </View>
        <Text style={{ fontSize: 15, padding: 10 }}>
          What has betty done today ? select all that apply:
        </Text>

        <View style={styles.container}>
          {cards.map((card) => (
            <TouchableOpacity
              key={card.id}
              onPress={() => toggleCardSelection(card.id)}
              style={[
                styles.card,
                {
                  backgroundColor: selectedCards.includes(card.id)
                    ? "#151f6d"
                    : "white",
                },
              ]}
            >
              <Image
                source={card.imageUrl} // Updated source format
                style={{ marginTop: 10 }} // Adjust the image size as needed
              />
              <Text style={styles.font}>{card.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={[
            styles.button, // Apply the button styles
            {
              backgroundColor: cardSelected ? "#151f6d" : "#ffff", // Change background color based on cardSelected
            },
          ]}
          onPress={() => setPopupVisible(true)}>
        
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: cardSelected ? "#ffff" : "black",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
        <CustomPopup
        isVisible={isPopupVisible}
        onClose={() => setPopupVisible(false)}
        onSave={handleSaveNote}
      />
      </ScrollView>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "20%",
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  font: {
    fontSize: 8,
    marginTop: 10,
    fontWeight: "500",
  },
  image: {
    marginTop: 15,
    alignSelf: "center",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    height: 50,
    marginTop: 20,
    borderWidth: 1,
    alignSelf: "center",
    borderRadius: 10,
  },
});
