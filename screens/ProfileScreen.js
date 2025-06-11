import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import api from '../services/api';
//  file for API calls
export default function ProfileScreen({ route }) {
    const navigation = useNavigation();
    const { staff } = route.params;

    const [menuVisible, setMenuVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editedStaff, setEditedStaff] = useState(staff);
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        setEditedStaff(staff);
        api.get('department')
            .then(res => setDepartments(res.data))
            .catch(err => console.error('Error fetching departments:', err));
    }, [staff])

    const handleEditSave = () => {
        const departmentId = departments.find(dep => dep.name === editedStaff.department)?.id || editedStaff.department.id;

        const updatedStaff = {
            name: editedStaff.name,
            phone: editedStaff.phone,
            street: editedStaff.street,
            city: editedStaff.city,
            state: editedStaff.state,
            zip: editedStaff.zip,
            country: editedStaff.country,
            id: editedStaff.id,
            departmentId: departmentId,
        };


        api.put(`staff/${updatedStaff.id}`, updatedStaff)
            .then(res => {
                alert("Staff updated successfully");
                setEditModalVisible(false);
                navigation.navigate("Directory", {
                    updated: true
                });
            })
            .catch(err => {
                alert("Failed to update staff");
            });
    }


    return (
        <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate("Directory")} style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)} style={styles.moreButton}>
                    <Text style={styles.moreIcon}>⋮</Text>
                </TouchableOpacity>
                {menuVisible && (
                    <View style={styles.dropdownMenu}>
                        <TouchableOpacity onPress={() => {
                            setMenuVisible(false);
                            setEditModalVisible(true);
                        }}>
                            <Text style={styles.dropdownItem}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            Alert.alert(
                                "Delete Staff",
                                `Are you sure you want to delete ${editedStaff.name}?`,
                                [
                                    { text: "Cancel", style: "cancel" },
                                    {
                                        text: "Delete", style: "destructive", onPress: () => {
                                            api.delete(`staff/${editedStaff.id}`)
                                                .then(() => {
                                                    alert(`${editedStaff.name} has been deleted.`);
                                                    navigation.navigate("Directory", { deleted: true });
                                                })
                                                .catch((err) => {
                                                    alert("Failed to delete staff");
                                                });
                                        }
                                    }
                                ]
                            );
                        }}>
                            <Text style={[styles.dropdownItem, { color: 'red' }]}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
                <Modal
                    visible={editModalVisible}
                    animationType="fade"
                    transparent={true}
                    onRequestClose={() => setEditModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity
                                onPress={() => setEditModalVisible(false)}
                                style={styles.closeButton}
                            >
                                <Text style={styles.closeButtonText}>✕</Text>
                            </TouchableOpacity>
                            <Text style={styles.modalTitle}>Edit Staff</Text>
                            <TextInput
                                placeholder="Full Name"
                                value={editedStaff.name}
                                onChangeText={(text) => setEditedStaff({ ...editedStaff, name: text })}
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="Phone Number"
                                value={editedStaff.phone}
                                onChangeText={(text) => setEditedStaff({ ...editedStaff, phone: text })}
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="Department"
                                value={editedStaff.department.name}
                                onChangeText={(text) => setEditedStaff({ ...editedStaff, department: text })}
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="Street"
                                value={editedStaff.street || ''}
                                onChangeText={(text) =>
                                    setEditedStaff({
                                        ...editedStaff,
                                        street: text,
                                    })
                                }
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="City"
                                value={editedStaff.city || ''}
                                onChangeText={(text) =>
                                    setEditedStaff({
                                        ...editedStaff,
                                        city: text,
                                    })
                                }
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="State"
                                value={editedStaff.state || ''}
                                onChangeText={(text) =>
                                    setEditedStaff({
                                        ...editedStaff,
                                        state: text,
                                    })
                                }
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="ZIP Code"
                                value={editedStaff.zip || ''}
                                onChangeText={(text) =>
                                    setEditedStaff({
                                        ...editedStaff,
                                        zip: text,
                                    })
                                }
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="Country"
                                value={editedStaff.country || ''}
                                onChangeText={(text) =>
                                    setEditedStaff({
                                        ...editedStaff,
                                        country: text,
                                    })
                                }
                                style={styles.input}
                            />
                            <TouchableOpacity
                                style={styles.saveButton}
                                onPress={handleEditSave}
                            >
                                <Text style={styles.saveButtonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                {/* Top Section */}
                <View style={styles.topSection}>
                    <Image source={require('../assets/icons/user.png')} style={styles.avatar} />
                    <Text style={styles.name}>{staff.name}</Text>
                    <Text style={styles.department}>{staff.department.name}</Text>
                    <Text style={styles.reportsTo}>Reports to Carol White</Text>
                </View>
                {/* Contact Details Card */}
                <View style={styles.detailsCard}>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.actionButton}>
                            <Text style={styles.buttonText}>Call</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                            <Text style={styles.buttonText}>Email</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.detailItem}>
                        <Image source={require('../assets/icons/phone.png')} style={styles.detailIcon} />
                        <Text style={styles.detailText}>{staff.phone}</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <Image source={require('../assets/icons/mail.png')} style={styles.detailIcon} />
                        <Text style={styles.detailText}>{staff.name.toLowerCase().replace(' ', '.')}@gelosmail.com</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <Image source={require('../assets/icons/location.png')} style={styles.detailIcon} />
                        <Text style={styles.detailText}>
                            {staff.street}, {staff.city}, {staff.state} {staff.zip}, {staff.country}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 60,
        alignItems: 'center',
    },
    topSection: {
        backgroundColor: '#d9d9d9',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 40,
        height: "45%",
    },
    avatar: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    name: {
        fontFamily: 'Trebuc Bold',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
    },
    department: {
        fontFamily: 'Trebuc MS',
        fontSize: 18,
        color: '#595959',
        marginTop: 4,
        marginBottom: 10,
    },
    reportsTo: {
        fontFamily: 'Trebuc MS',
        fontSize: 18,
        color: '#000',
        marginTop: 4,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginVertical: 20,
    },
    actionButton: {
        backgroundColor: '#d9d9d9',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
    },
    buttonText: {
        fontFamily: 'Trebuc MS',
        fontSize: 18,
        color: '#000',
    },
    detailsCard: {
        position: 'absolute',
        top: "45%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 30,
        width: '80%',
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 5,
    },
    detailItem: {
        backgroundColor: '#d9d9d9',
        padding: 15,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    detailIcon: {
        width: 40,
        height: 40,
        marginRight: 15,
    },
    detailText: {
        fontFamily: 'Trebuc MS',
        fontSize: 16,
        flex: 1,
        flexWrap: 'wrap',
    },
    backButton: {
        position: 'absolute',
        top: 80,
        left: 20,
        zIndex: 10,
    },

    backIcon: {
        fontSize: 40,
        color: '#000',
        fontFamily: 'Trebuc MS',
    },
    moreButton: {
        position: 'absolute',
        top: 80,
        right: 20,
        zIndex: 10,
    },
    moreIcon: {
        fontSize: 26,
        color: '#000',
    },
    dropdownMenu: {
        position: 'absolute',
        top: 70,
        right: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        zIndex: 20,
    },
    dropdownItem: {
        fontSize: 16,
        fontFamily: 'Trebuc MS',
        marginVertical: 5,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,
        width: '80%',
    },
    modalTitle: {
        fontSize: 20,
        fontFamily: 'Trebuc MS',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        fontFamily: 'Trebuc MS',
        marginBottom: 10,
    },
    saveButton: {
        backgroundColor: '#941A1D',
        padding: 12,
        borderRadius: 12,
        alignItems: 'center',
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
        zIndex: 10,
        padding: 5,
    },

    closeButtonText: {
        fontSize: 22,
        color: '#941A1D',
        fontWeight: 'bold',
    }


});
