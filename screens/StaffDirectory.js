import React, { useState } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Image,
    ScrollView, Modal, TextInput
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SearchBar } from '@rneui/themed';


export default function StaffDirectoryScreen({ navigation }) {
    const [search, setSearch] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [department, setDepartment] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');
    const [staffData, setStaffData] = useState([
        {
            id: 1,
            name: 'John Smith',
            phone: '0411 111 111',
            department: 'Marketing',
            address: {
                street: '1 Code Lane',
                city: 'Javaville',
                state: 'NSW',
                zip: '0100',
                country: 'Australia'
            }
        },
        {
            id: 2,
            name: 'Linda Carter',
            phone: '0412 222 222',
            department: 'Marketing',
            address: {
                street: '16 Bit Way',
                city: 'Byte Cove',
                state: 'QLD',
                zip: '1101',
                country: 'Australia'
            }
        },
        {
            id: 3,
            name: 'Emma Bailey',
            phone: '0413 333 333',
            department: 'Marketing',
            address: {
                street: '8 Silicon Road',
                city: 'Cloud Hills',
                state: 'VIC',
                zip: '1001',
                country: 'Australia'
            }
        },
        {
            id: 4,
            name: 'Robert Shaw',
            phone: '0414 444 444',
            department: 'Finance',
            address: {
                street: '4 Processor Boulevard',
                city: 'Appletson',
                state: 'NT',
                zip: '1010',
                country: 'Australia'
            }
        },
        {
            id: 5,
            name: 'Mark White',
            phone: '0415 555 555',
            department: 'Finance',
            address: {
                street: '700 Bandwidth Street',
                city: 'Bufferland',
                state: 'NSW',
                zip: '0110',
                country: 'Australia'
            }
        }
    ]);


    const filteredStaff = staffData.filter((staff) =>
        staff.name.toLowerCase().includes(search.toLowerCase()) ||
        staff.department.toLowerCase().includes(search.toLowerCase())
    );

    const handleAddStaff = () => {
        const newStaff = {
            id: Date.now(),
            name,
            phone,
            department,
            address: {
                street,
                city,
                state,
                zip,
                country,
            }
        };

        setStaffData([...staffData, newStaff]);
        setModalVisible(false);

        // Clear form fields
        setName('');
        setPhone('');
        setDepartment('');
        setStreet('');
        setCity('');
        setState('');
        setZip('');
        setCountry('');
    };


    return (
        <View style={styles.container}>
            {/* Top Section */}
            <View>
                <Text style={styles.header}>Staff Directory</Text>

                <SearchBar
                    platform="android"
                    containerStyle={styles.searchBarContainer}
                    inputStyle={{ fontFamily: "Trebuc MS", fontSize: 16, color: "#000" }}
                    placeholder="Search Anything..."
                    placeholderTextColor="#888"
                    value={search}
                    onChangeText={setSearch}
                />
            </View>

            {/* Main Content */}
            <ScrollView>
                {filteredStaff.map((staff) => (
                    <TouchableOpacity key={staff.id} onPress={() => navigation.navigate('Profile', { staff })}>
                        <View style={styles.card}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../assets/icons/user.png')} style={styles.profileIcon} />
                                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                                    <Text style={styles.staffName}>{staff.name}</Text>
                                    <Text style={styles.staffDept}>{staff.department}</Text>
                                </View>
                            </View>
                            <Image source={require('../assets/icons/arrow.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />
                        </View>
                    </TouchableOpacity>
                ))}

                {filteredStaff.length === 0 && (
                    <Text style={{ textAlign: 'center', color: '#888', marginTop: 20 }}>
                        No matching staff found.
                    </Text>
                )}
                <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.addButtonText}>+ Add Staff</Text>
                </TouchableOpacity>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.closeButtonText}>✕</Text>
                            </TouchableOpacity>
                            <Text style={styles.modalTitle}>Add New Staff</Text>

                            <TextInput placeholder="Full Name" placeholderTextColor={"#595959"} value={name} onChangeText={setName} style={styles.input} />
                            <TextInput placeholder="Phone Number" placeholderTextColor={"#595959"} value={phone} onChangeText={setPhone} style={styles.input} />
                            <TextInput placeholder="Department" placeholderTextColor={"#595959"} value={department} onChangeText={setDepartment} style={styles.input} />
                            <TextInput placeholder="Street Address" placeholderTextColor={"#595959"} value={street} onChangeText={setStreet} style={styles.input} />
                            <TextInput placeholder="City" placeholderTextColor={"#595959"} value={city} onChangeText={setCity} style={styles.input} />
                            <TextInput placeholder="State" placeholderTextColor={"#595959"} value={state} onChangeText={setState} style={styles.input} />
                            <TextInput placeholder="ZIP Code" placeholderTextColor={"#595959"} value={zip} onChangeText={setZip} style={styles.input} />
                            <TextInput placeholder="Country" placeholderTextColor={"#595959"} value={country} onChangeText={setCountry} style={styles.input} />

                            <TouchableOpacity style={styles.saveButton} onPress={handleAddStaff}>
                                <Text style={styles.saveButtonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginTop: 50,
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

    staffName: {
        fontFamily: "Trebuc MS",
        fontSize: 20,
        marginLeft: 10,
    },
    staffDept: {
        fontFamily: "Trebuc MS",
        fontSize: 14,
        marginLeft: 10,
        color: "#595959"
    },
    addButton: {
        backgroundColor: '#941A1D',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        alignSelf: 'center',
    },

    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Trebuc MS',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        elevation: 5,
    },

    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'Trebuc MS',
        color: '#941A1D'
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        fontFamily: 'Trebuc MS',
    },

    saveButton: {
        backgroundColor: '#941A1D',
        padding: 12,
        borderRadius: 12,
        alignItems: 'center',
    },

    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Trebuc MS',
    },

    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 8,
        zIndex: 10,
    },

    closeButtonText: {
        fontSize: 20,
        color: '#941A1D',
        fontWeight: 'bold',
    }

});