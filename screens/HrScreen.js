import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function HrScreen({ navigation }) {
    const route = useRoute();
    console.log('Current route:', route.name);
    return (<View style={styles.container}>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,

    },
});