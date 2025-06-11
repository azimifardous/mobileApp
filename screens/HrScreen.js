import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Modal, TextInput } from 'react-native';

export default function HrScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [requestType, setRequestType] = useState(activeTab);
    const [staffRequests, setStaffRequests] = useState(requests);
    const [activeTab, setActiveTab] = useState('Leave');

    const requests = [
        { id: 1, type: 'Leave', title: 'Vacation', date: 'Mar 20, 2025', status: 'Approved' },
        { id: 2, type: 'Leave', title: 'Sick Leave', date: 'Jan 07, 2025', status: 'Pending' },
        { id: 3, type: 'Leave', title: 'Vacation', date: 'Feb 22, 2025', status: 'Rejected' },
        // Add more entries for Training/Performance as needed
    ];

    const filtered = requests.filter(req => req.type === activeTab);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>HR Requests</Text>

            {/* Tabs */}
            <View style={styles.tabs}>
                {['Leave', 'Training', 'Performance'].map(tab => (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => setActiveTab(tab)}
                        style={[
                            styles.tab,
                            activeTab === tab && styles.activeTab,
                        ]}
                    >
                        <Text style={[
                            styles.tabText,
                            activeTab === tab && styles.activeTabText,
                        ]}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Requests List */}
            <ScrollView style={{ flex: 1 }}>
                {filtered.map(req => (
                    <View key={req.id} style={styles.card}>
                        <View>
                            <Text style={styles.cardTitle}>{req.title}</Text>
                            <Text style={styles.cardDate}>{req.date}</Text>
                        </View>
                        <Text style={[
                            styles.status,
                            req.status === 'Approved' && styles.statusApproved,
                            req.status === 'Pending' && styles.statusPending,
                            req.status === 'Rejected' && styles.statusRejected,
                        ]}>
                            {req.status}
                        </Text>
                    </View>
                ))}
            </ScrollView>

            {/* New Request Button */}
            <TouchableOpacity style={styles.newRequestButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.newRequestText}>＋ New Request</Text>
            </TouchableOpacity>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>New {activeTab} Request</Text>

                        <TextInput
                            placeholder="Request Title"
                            value={title}
                            onChangeText={setTitle}
                            style={styles.input}
                        />

                        <TextInput
                            placeholder="Date (e.g., Mar 20, 2025)"
                            value={date}
                            onChangeText={setDate}
                            style={styles.input}
                        />

                        <TouchableOpacity
                            style={styles.saveButton}
                            onPress={() => {
                                const newRequest = {
                                    id: Date.now(),
                                    type: activeTab,
                                    title,
                                    date,
                                    status: 'Pending',
                                };
                                setStaffRequests([...staffRequests, newRequest]);
                                setTitle('');
                                setDate('');
                                setModalVisible(false);
                            }}
                        >
                            <Text style={styles.saveButtonText}>Submit Request</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            style={styles.closeButton}
                        >
                            <Text style={styles.closeButtonText}>✕</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: '#ffffff',
        padding: 20,
    },

    header: {
        fontSize: 26,
        fontFamily: 'Trebuc Bold',
        color: '#941a1d',
        marginBottom: 20,
    },

    tabs: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    tab: {
        backgroundColor: '#d9d9d9',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
    },
    activeTab: {
        backgroundColor: '#941a1d',
    },
    tabText: {
        fontSize: 16,
        fontFamily: 'Trebuc MS',
        color: '#000',
    },
    activeTabText: {
        color: '#fff',
    },
    card: {
        backgroundColor: '#d9d9d9',
        padding: 16,
        paddingHorizontal: 25,
        borderRadius: 25,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardTitle: {
        fontFamily: 'Trebuc MS',
        fontSize: 18,
    },
    cardDate: {
        fontFamily: 'Trebuc MS',
        fontSize: 14,
        color: '#333',
    },
    status: {
        fontFamily: 'Trebuc MS',
        fontSize: 14,
    },
    statusApproved: {
        color: 'green',
    },
    statusPending: {
        color: 'orange',
    },
    statusRejected: {
        color: '#941a1d',
    },
    newRequestButton: {
        backgroundColor: '#941a1d',
        borderRadius: 30,
        paddingVertical: 14,
        paddingHorizontal: 30,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 70,
    },
    newRequestText: {
        color: '#fff',
        fontFamily: 'Trebuc MS',
        fontSize: 16,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContainer: {
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        elevation: 5,
        position: 'relative',
    },

    modalTitle: {
        fontSize: 20,
        fontFamily: 'Trebuc MS',
        marginBottom: 10,
        color: '#941a1d',
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        fontFamily: 'Trebuc MS',
        marginBottom: 12,
    },

    saveButton: {
        backgroundColor: '#941a1d',
        padding: 12,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10,
    },

    saveButtonText: {
        color: '#fff',
        fontFamily: 'Trebuc MS',
        fontSize: 16,
    },

    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 5,
    },

    closeButtonText: {
        fontSize: 20,
        color: '#941a1d',
    }

});
