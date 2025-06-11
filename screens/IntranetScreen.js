import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function Intranet() {
    const posts = [
        {
            id: 1,
            title: 'Q1 Sales Report',
            description: 'Please review the last report for the last quarter.',
            category: 'Report',
        },
        {
            id: 2,
            title: 'New Employees Benefit',
            description: 'Learn about the expanded insurance options available.',
            category: 'Benefits',
        },
        {
            id: 3,
            title: 'Project Management Training',
            description: 'Sign up for our upcoming training session in May.',
            category: 'Training',
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Intranet</Text>

            {/* Red Welcome Card */}
            <View style={styles.welcomeCard}>
                <Image
                    source={require('../assets/icons/news.png')} style={{ width: 50, height: 50 }} />
                <View style={{ marginLeft: 20 }}>
                    <Text style={styles.welcomeTitle}>Welcome to Red Opal Innovation!</Text>
                    <Text style={styles.welcomeText}>
                        Read our company policies and guidelines for new employees
                    </Text>
                </View>
            </View>

            {/* Posts */}
            <ScrollView contentContainerStyle={styles.postContainer}>
                {posts.map((post) => (
                    <View key={post.id} style={styles.postCard}>
                        <Text style={styles.postTitle}>{post.title}</Text>
                        <Text style={styles.postDesc}>{post.description}</Text>

                        <View style={styles.postFooter}>
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>{post.category}</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.readMore}>Read more...</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginTop: 50,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 26,
        fontFamily: 'Trebuc Bold',
        color: '#941a1d',
        marginBottom: 20,
    },
    welcomeCard: {
        backgroundColor: '#941a1d',
        borderRadius: 25,
        paddingHorizontal: 50,
        paddingVertical: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    welcomeTitle: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Trebuc Bold',
        marginBottom: 6,
    },
    welcomeText: {
        fontSize: 14,
        color: '#fff',
        fontFamily: 'Trebuc MS',
    },
    postContainer: {
        paddingBottom: 80,
        gap: 16,
    },
    postCard: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 16,
        elevation: 1,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 5,
    },
    postTitle: {
        fontFamily: 'Trebuc MS',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    postDesc: {
        fontFamily: 'Trebuc MS',
        fontSize: 14,
        color: '#333',
        marginBottom: 8,
    },
    postFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tag: {
        backgroundColor: '#ccc',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 20,
    },
    tagText: {
        fontFamily: 'Trebuc MS',
        fontSize: 12,
        color: '#333',
    },
    readMore: {
        fontFamily: 'Trebuc MS',
        color: '#941a1d',
        fontSize: 14,
    },
});
