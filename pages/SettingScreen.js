import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';

const ProfileScreen = () => {
  const navigation = useNavigation(); 
  const bottomSheetRef = useRef(null);

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>Ritesh Kushwaha</Text>
        <Text style={styles.accountType}>riteshintro@gmail.com</Text>
      </View>
      <View style={styles.info}>
        <View style={styles.infoRow}>
         <View style={styles.icons}><Text style={styles.iconsmenu}><Feather name="phone" size={20} color="black" /></Text><Text style={styles.infoLabel}>Select Company</Text></View> 
          <Text style={styles.infoValue}><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></Text>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.icons}><Text style={styles.iconsmenu}><Feather name="phone" size={20} color="black" /></Text><Text style={styles.infoLabel}>Selected Categories</Text></View> 
          <Text style={styles.infoValue}><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></Text>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.icons}><Text style={styles.iconsmenu}><Feather name="phone" size={20} color="black" /></Text><Text style={styles.infoLabel}>Selected Tags</Text></View> 
          <Text style={styles.infoValue}><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></Text>
        </View>
        <TouchableOpacity style={styles.infoRow}  onPress={openBottomSheet}>
        {/* <View style={styles.infoRow}> */}
          <View style={styles.icons}><Text style={styles.iconsmenu}><Feather name="phone" size={20} color="black" /></Text><Text style={styles.infoLabel}>My Profile</Text></View> 
          <Text style={styles.infoValue}><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></Text>
        {/* </View> */}
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Settings</Text>
        <View style={styles.footerRow}>
          <Text style={styles.footerLink}>Account</Text>
          <Text style={styles.footerLink}><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></Text>
        </View>
        <View style={styles.footerRow}>
          <Text style={styles.footerLink}>Resources</Text>
          <Text style={styles.footerLink}><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></Text>
        </View>
        <View style={styles.footerRow}>
          <Text style={styles.footerLink}>Terms of service</Text>
          <Text style={styles.footerLink}><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></Text>
        </View>
      </View>

      {/* <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        backdropComponent={BottomSheetBackdrop}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>This is the bottom sheet content</Text>
          <Button title="Close" onPress={()=>bottomSheetRef.current?.close()} />
        </View>
      </BottomSheet> */}
      {/* {isOpen && ( 
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>This is the bottom sheet content</Text>
            <Button title="Close" onPress={handleClosePress} />
          </View>
        </BottomSheet>
      )} */}
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        backdropComponent={BottomSheetBackdrop}
        snapPoints={['25%', '50%', '90%']}
        handleComponent={() => (
          <View style={styles.handle}>
            <Text style={styles.handleText}>Swipe up to expand</Text>
          </View>
        )}
      >
        <View style={styles.bottomSheet}>
          <Text>Bottom Sheet Content</Text>
          <TouchableOpacity onPress={closeBottomSheet}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6efe0',
  },
  header: {
    margin: 20,
    padding:10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  accountType: {
    color: '#ccc',
  },
  info: {
    margin: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  icons:{
    flexDirection: 'row',
  },
  iconsmenu:{
    marginRight:5
  },
  infoLabel: {
    fontSize: 16,
    fontWeight:"bold"
  },
  infoValue: {
    color: '#0099ff',
  },
  footer: {
    padding: 10,
    margin: 20,
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  footerLink: {
    color: '#0099ff',
  },
});

export default ProfileScreen;
