// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';


export default function HomeScreen({ navigation }) {
    const route = useRoute();
    console.log('Current route:', route.name);
    return (
        <View style={styles.container}>
            {/* Top Section */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.welcome}>Welcome, John Doe</Text>
                    <Text style={styles.subtitle}>What would you like to do today?</Text>
                </View>
                <TouchableOpacity>
                    <Image source={require('../assets/icons/profile.png')} style={styles.profileIcon} />
                </TouchableOpacity>
            </View>
            {/* Main Content */}
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('announcements')}>
                    <View style={styles.announcementsContainer}>
                        <Image source={require('../assets/icons/announcement.png')} style={{ width: 50, height: 50 }} />
                        <View style={styles.announcements}>
                            <Text style={styles.announcementsTitle}>Announcments</Text>
                            <Text style={styles.announcementsSubtitle}>Staff Meeting at 10:00 AM today</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('StaffDirectory')}>
                    <View style={styles.card}>
                        <Image source={require('../assets/icons/staffDirectory.png')} style={{ width: 50, height: 50 }} />
                        <Text style={{ fontFamily: "Trebuc MS", fontSize: 16 }}>Staff Directory</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Intranet')}>
                    <View style={styles.card}>
                        <Image source={require('../assets/icons/intranet.png')} style={{ width: 50, height: 50 }} />
                        <Text style={{ fontFamily: "Trebuc MS", fontSize: 16 }}>Intranet</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('HR')}>
                    <View style={styles.card}>
                        <Image source={require('../assets/icons/hrRequest.png')} style={{ width: 50, height: 50 }} />
                        <Text style={{ fontFamily: "Trebuc MS", fontSize: 16 }}>HR Requests</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            {/* Bottom Section */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={[
                    styles.navItem,
                    route.name === 'Home' && styles.navItemActive
                ]} >
                    <Image source={require('../assets/icons/home.png')} style={styles.navIcon} />
                    {styles.navItemActive && <Text style={{ color: "#fff", marginLeft: 5, fontSize: 12, fontFamily: "Trebuc MS" }}>Home</Text>}
                </TouchableOpacity>
                <TouchableOpacity style={[
                    styles.navItem,
                    route.name === 'StaffDirectory' && styles.navItemActive
                ]} onPress={() => navigation.navigate('StaffDirectory')}>
                    <Image source={require('../assets/icons/staff.png')} style={styles.navIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('HR')} style={[
                    styles.navItem,
                    route.name === 'HR' && styles.navItemActive
                ]} >
                    <Image source={require('../assets/icons/hr.png')} style={styles.navIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/icons/menu.png')} style={styles.navIcon} />
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    welcome: {
        fontSize: 28,
        color: '#941A1D',
        fontFamily: "Trebuc Bold"
    },
    subtitle: {
        marginTop: 5,
        fontSize: 14,
        color: '#595959',
        fontFamily: "Trebuc MS"
    },
    profileIcon: {
        width: 50,
        height: 50,
    },
    announcementsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        backgroundColor: '#941A1D',
        padding: 15,
        marginBottom: 20,
        borderRadius: 30,
        height: 110,

    },
    announcementsTitle: {
        fontSize: 16,
        marginBottom: 5,
        color: '#ffffff',
        fontFamily: "Trebuc Bold",
        textAlign: 'center',
    },
    announcementsSubtitle: {
        fontSize: 14,
        color: '#ffffff',
        fontFamily: "Trebuc MS",
        textAlign: 'center',
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        padding: 15,
        borderRadius: 30,
        marginBottom: 20,
        fontSize: 16,
        fontFamily: "Trebuc MS",
        height: 110,
    },
    bottomNav: {
        position: 'absolute',
        height: 85,
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#262626',
        paddingBottom: 20,
        paddingTop: 12,
        paddingHorizontal: 24,

    },
    navIcon: {
        width: 25,
        height: 25,
    },

    navItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },

    navItemActive: {
        backgroundColor: '#595959',
        borderRadius: 20,
        width: 86,
        padding: 10,
    },

});