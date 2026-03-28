import { View, Text, StyleSheet, Image, Pressable } from 'react-native';




export default function HomeScreen() {

    const handlePress = () => {
        alert("Cześć Dmytro")
    };



    return (
        <View style={styles.container}>
            <Text style={styles.title}>TravelSnap</Text>
            <Text style={styles.subtitle}>Twój dziennik podróży</Text>
            <Text style={styles.subtitle}>Dmytro Potapchuk</Text>


            <Image
                source={require('../../assets/images/travel-icons-png-26.png')}
                style={styles.image}
            />
            <Pressable style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Kliknij tu</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'silver',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1E293B',
    },

    subtitle: {
        fontSize: 16,
        marginTop: 8,
        color: '#475569',
    },

    name: {
        fontSize: 14,
        marginTop: 6,
        fontStyle: 'italic',
        color: '#64748B',
    },

    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 20,
    },

    button: {
        marginTop: 25,
        backgroundColor: '#2563EB',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
    },

    buttonText: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 16,
    },
});