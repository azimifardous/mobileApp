import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
export default function StaffDirectoryScreen({ navigation }) {
    const route = useRoute();
    console.log('Current route:', route.name);
    return (<View style={styles.container}>
        {/* Bottom Section */}
        < View style={styles.bottomNav} >
            <TouchableOpacity style={[
                styles.navItem,
                route.name === 'Home' && styles.navItemActive
            ]} onPress={() => navigation.navigate('Home')}>
                <Image source={require('../assets/icons/home.png')} style={styles.navIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={[
                styles.navItem,
                route.name === 'StaffDirectory' && styles.navItemActive
            ]} onPress={() => navigation.navigate('StaffDirectory')}>
                <Image source={require('../assets/icons/staff.png')} style={styles.navIcon} />
                {styles.navItemActive && <Text style={{ color: "#fff", marginLeft: 5, fontSize: 12, fontFamily: "Trebuc MS" }}>Staff</Text>}
            </TouchableOpacity>
            <TouchableOpacity style={[
                styles.navItem,
                route.name === 'HR' && styles.navItemActive
            ]} >
                <Image source={require('../assets/icons/hr.png')} style={styles.navIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/icons/menu.png')} style={styles.navIcon} />
            </TouchableOpacity>
        </View >
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,

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