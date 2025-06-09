import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SearchBar } from '@rneui/themed';


export default function StaffDirectoryScreen({ navigation }) {
    const route = useRoute();
    console.log('Current route:', route.name);
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    return (<View style={styles.container}>
        {/* Top Section */}
        <View>
            <Text style={styles.header}>Staff Directory</Text>

            <SearchBar
                platform="android"
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={{}}
                inputStyle={{ fontFamily: "Trebuc MS", fontSize: 16, color: "#000" }}
                leftIconContainerStyle={{}}
                rightIconContainerStyle={{}}
                onChangeText={setSearch}
                placeholder="Search Anything..."
                placeholderTextColor="#888"
                cancelButtonTitle="Cancel"
                value={search}
            />
        </View>
        {/* Main Content */}
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/icons/user.png')} style={styles.profileIcon} />
                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: "Trebuc MS", fontSize: 20, marginLeft: 10 }}>John Smith</Text>
                            <Text style={{ fontFamily: "Trebuc MS", fontSize: 14, marginLeft: 10, color: "#595959" }}>Marketing</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/icons/arrow.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/icons/user.png')} style={styles.profileIcon} />
                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: "Trebuc MS", fontSize: 20, marginLeft: 10 }}>Linda Carter</Text>
                            <Text style={{ fontFamily: "Trebuc MS", fontSize: 14, marginLeft: 10, color: "#595959" }}>Marketing</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/icons/arrow.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/icons/user.png')} style={styles.profileIcon} />
                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: "Trebuc MS", fontSize: 20, marginLeft: 10 }}>Emma Bailey</Text>
                            <Text style={{ fontFamily: "Trebuc MS", fontSize: 14, marginLeft: 10, color: "#595959" }}>Marketing</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/icons/arrow.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/icons/user.png')} style={styles.profileIcon} />
                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: "Trebuc MS", fontSize: 20, marginLeft: 10 }}>Robert Shaw</Text>
                            <Text style={{ fontFamily: "Trebuc MS", fontSize: 14, marginLeft: 10, color: "#595959" }}>Finance</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/icons/arrow.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/icons/user.png')} style={styles.profileIcon} />
                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: "Trebuc MS", fontSize: 20, marginLeft: 10 }}>Mark White</Text>
                            <Text style={{ fontFamily: "Trebuc MS", fontSize: 14, marginLeft: 10, color: "#595959" }}>Finance</Text>
                        </View>
                    </View>
                    <Image source={require('../assets/icons/arrow.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />
                </View>
            </TouchableOpacity>

        </ScrollView >
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
            <TouchableOpacity onPress={() => navigation.navigate('HR')} style={[
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        fontSize: 28,
        color: '#941A1D',
        fontFamily: "Trebuc Bold"
    },

    searchBarContainer: {
        backgroundColor: '#d9d9d9',
        borderRadius: 25,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    card: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: 20,
        height: 80,
        backgroundColor: '#d9d9d9',
        borderRadius: 25
    },

    profileIcon: {
        width: 50,
        height: 50,
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