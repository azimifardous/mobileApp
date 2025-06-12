import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const icons = {
    'Home': require('../assets/icons/home.png'),
    'Directory': require('../assets/icons/staff.png'),
    'Intranet': require('../assets/icons/intranet.png'),
    'HR': require('../assets/icons/hr.png'),
};

export default function CustomTabBar({ state, descriptors, navigation }) {
    return (
        <View style={styles.tabBar}>
            {state.routes.map((route, index) => {
                if (route.name === 'Profile') return null;

                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    if (!isFocused) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        onPress={onPress}
                        style={[styles.tabItem, isFocused && styles.activeTab]}
                    >
                        <Image
                            source={icons[route.name]}
                            style={[
                                styles.icon,
                                { tintColor: isFocused ? '#ffffff' : '#bbbbbb' },
                            ]}
                        />
                        {isFocused && (
                            <Text style={styles.label}>{route.name === 'Directory' ? 'Staff' : route.name}</Text>
                        )}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabBar: {
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
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        flexDirection: 'row',
        gap: 6,
    },

    activeTab: {
        backgroundColor: '#595959',
    },

    icon: {
        width: 25,
        height: 25,
    },

    label: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'Trebuchet MS',
    },
});
