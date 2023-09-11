import React, { useState } from 'react';
import { View, Text,TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const CustomPopup = ({ isVisible, onClose, onSave }) => {
  const [noteText, setNoteText] = useState('');

  const handleSave = () => {
    onSave(noteText);
    setNoteText(''); // Clear the input
    onClose();
  };

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        <Text style={styles.title}>Add Note for Today's Mood</Text>
        <TextInput
          placeholder="Type your note here..."
          multiline
          numberOfLines={4}
          maxLength={40}
          style={styles.input}
          value={noteText}
          onChangeText={setNoteText}
        />
        <View style={styles.buttonsContainer}>
         
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width:'100%',
    backgroundColor: '#151f6d',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign:'center'
  },
});

export default CustomPopup;
