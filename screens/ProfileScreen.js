import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen({ route }) {
    const navigation = useNavigation();
    const { staff } = route.params;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Directory")} style={styles.backButton}>
                <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
            {/* Top Section */}
            <View style={styles.topSection}>
                <Image source={require('../assets/icons/user.png')} style={styles.avatar} />
                <Text style={styles.name}>{staff.name}</Text>
                <Text style={styles.department}>{staff.department}</Text>
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
                        {staff.address.street}, {staff.address.city}, {staff.address.state} {staff.address.zip}, {staff.address.country}
                    </Text>
                </View>
            </View>
        </View>
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
    }

});
