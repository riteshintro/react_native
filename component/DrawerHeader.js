import { View, Text, Image, StyleSheet } from 'react-native'; // Or your preferred UI library

export const CustomDrawerHeader = (props) => {
    return (
        <View style={styles.headerContainer}>
            {props.showLogo && <Image source={require('../assets/dashboard/logo.png')} style={styles.logo} />}
            {/* <Text style={styles.headerText}>{props.title || 'Your App Name'}</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        padding: 16,
        backgroundColor: '#FFFFFF',
    },
    logo: {
        // width: 50,
        height: 50,
        marginBottom: 8,
        objectFit:"contain"
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red', // Set your desired text color
    },
});
