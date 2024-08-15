import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';


const RoomScreen = () => {
    const navigation = useNavigation();

    const categories = ['Tout', 'Apartments', 'Penthouse', 'Townhouses'];

    const propertiesData = {
        Tout: [
            {
                id: '1',
                gallery: [
                    "https://deavita.fr/wp-content/uploads/2015/07/salon-design-canap%C3%A9s-nor-blanc-fauteuils-ronds-statuette-lampes-tripode-terrasse.jpeg",
                    "https://i.pinimg.com/originals/29/68/2c/29682cb707c4e76477894b0d5dc9bcd4.jpg",
                    "https://img.freepik.com/photos-premium/design-interieur-luxe-dans-salon-villas-piscine_41487-373.jpg",
                ],
                dimention: 25,
                price: "85.00",
                title: 'Luxury Apartment',
                location: 'New York, USA',
                beds: 3,
                baths: 2,
                rating: 4.8,
                
                description :"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
                image: "https://images.squarespace-cdn.com/content/v1/6001ce695a503d6d70ef3775/ec67eace-d22e-4803-aa5f-3f035a927cb2/Homanie+Bandol+-+Salon+3.jpg", type: 'Apartment'
            },
            {
                id: '2',
                gallery: [
                    "https://deavita.fr/wp-content/uploads/2015/07/salon-design-canap%C3%A9s-nor-blanc-fauteuils-ronds-statuette-lampes-tripode-terrasse.jpeg",
                    "https://i.pinimg.com/originals/29/68/2c/29682cb707c4e76477894b0d5dc9bcd4.jpg",
                    "https://img.freepik.com/photos-premium/design-interieur-luxe-dans-salon-villas-piscine_41487-373.jpg",
                ],
                dimention: 25,
                price: "85.00",
                title: 'Seaside Penthouse',
                location: 'Miami, USA',
                beds: 4,
                baths: 3,
                rating: 4.9,
                 description :"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
         
                image: "https://img.freepik.com/photos-premium/villa-luxe-au-bord-mer-design-interieur-du-salon-moderne-sculptures-dorees_825692-2056.jpg", type: 'Penthouse'
            },
            {
                id: '3',
                gallery: [
                    "https://deavita.fr/wp-content/uploads/2015/07/salon-design-canap%C3%A9s-nor-blanc-fauteuils-ronds-statuette-lampes-tripode-terrasse.jpeg",
                    "https://i.pinimg.com/originals/29/68/2c/29682cb707c4e76477894b0d5dc9bcd4.jpg",
                    "https://img.freepik.com/photos-premium/design-interieur-luxe-dans-salon-villas-piscine_41487-373.jpg",
                ],
                dimention: 25,
                price: "85.00",
                title: 'Modern Townhouse',
                location: 'San Francisco, USA',
                beds: 3,
                baths: 2.5,
                rating: 4.7,
                 description :"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
         
                image: "https://st.depositphotos.com/2018053/4647/i/450/depositphotos_46475031-stock-photo-interior-modern-house.jpg", type: 'Townhouse'
            },
        ],
        Apartments: [
            {
                id: '4',
                gallery: [
                    "https://deavita.fr/wp-content/uploads/2015/07/salon-design-canap%C3%A9s-nor-blanc-fauteuils-ronds-statuette-lampes-tripode-terrasse.jpeg",
                    "https://i.pinimg.com/originals/29/68/2c/29682cb707c4e76477894b0d5dc9bcd4.jpg",
                    "https://img.freepik.com/photos-premium/design-interieur-luxe-dans-salon-villas-piscine_41487-373.jpg",
                ],
                dimention: 25,
                price: "85.00",
                title: 'Downtown Loft',
                location: 'Chicago, USA',
                beds: 2,
                baths: 2,
                rating: 4.6,
                 description :"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
         
                image: "https://img.freepik.com/photos-premium/interieur-villa-propriete-luxe-salon-moderne-cuisine-vue-ocean_872147-9207.jpg", type: 'Apartment'
            },
            {
                id: '5',
                gallery: [
                    "https://deavita.fr/wp-content/uploads/2015/07/salon-design-canap%C3%A9s-nor-blanc-fauteuils-ronds-statuette-lampes-tripode-terrasse.jpeg",
                    "https://i.pinimg.com/originals/29/68/2c/29682cb707c4e76477894b0d5dc9bcd4.jpg",
                    "https://img.freepik.com/photos-premium/design-interieur-luxe-dans-salon-villas-piscine_41487-373.jpg",
                ],
                dimention: 25,
                price: "85.00",
                title: 'Riverside Apartment',
                location: 'Portland, USA',
                beds: 3,
                baths: 2,
                rating: 4.5,
                 description :"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
         
                image: "https://www.barnes-cotebasque.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBckZPIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c1130de522dfa55bc2280f8ebaa3e4af543e370d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2Q25OaGRtVnlld1k2REhGMVlXeHBkSGxwTFE9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--219e57ae91f9183b6c38d81e8a46ec8a90285f73/deco-salon-de-luxe.jpg", type: 'Apartment'
            },
        ],
        Penthouse: [
            {
                id: '6',
                gallery: [
                    "https://deavita.fr/wp-content/uploads/2015/07/salon-design-canap%C3%A9s-nor-blanc-fauteuils-ronds-statuette-lampes-tripode-terrasse.jpeg",
                    "https://i.pinimg.com/originals/29/68/2c/29682cb707c4e76477894b0d5dc9bcd4.jpg",
                    "https://img.freepik.com/photos-premium/design-interieur-luxe-dans-salon-villas-piscine_41487-373.jpg",
                ],
                dimention: 25,
                price: "85.00",
                title: 'Skyline Penthouse',
                location: 'Los Angeles, USA',
                beds: 4,
                baths: 3.5,
                rating: 5.0,
                 description :"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
         
                image: "https://images.homify.com/v1451281760/p/photo/image/1217758/AyD-Vidal-Catalan-Bergnes_Eivissa_2907.jpg", type: 'Penthouse'
            },
            {
                id: '7',
                gallery: [
                    "https://deavita.fr/wp-content/uploads/2015/07/salon-design-canap%C3%A9s-nor-blanc-fauteuils-ronds-statuette-lampes-tripode-terrasse.jpeg",
                    "https://i.pinimg.com/originals/29/68/2c/29682cb707c4e76477894b0d5dc9bcd4.jpg",
                    "https://img.freepik.com/photos-premium/design-interieur-luxe-dans-salon-villas-piscine_41487-373.jpg",
                ],
                dimention: 25,
                price: "85.00",
                title: 'Harbor View Penthouse',
                location: 'Seattle, USA',
                beds: 3,
                baths: 3,
                rating: 4.9,
                 description :"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
         
                image: "https://www.designferia.com/sites/default/files/styles/article_images__s640_/public/field/image/maison-familiale-contemporaine-design-art.jpg?itok=bVAsQgea", type: 'Penthouse'
            },
        ],
        Townhouses: [
            {
                id: '8',
                gallery: [
                    "https://deavita.fr/wp-content/uploads/2015/07/salon-design-canap%C3%A9s-nor-blanc-fauteuils-ronds-statuette-lampes-tripode-terrasse.jpeg",
                    "https://i.pinimg.com/originals/29/68/2c/29682cb707c4e76477894b0d5dc9bcd4.jpg",
                    "https://img.freepik.com/photos-premium/design-interieur-luxe-dans-salon-villas-piscine_41487-373.jpg",
                ],
                dimention: 25,
                price: "85.00",
                title: 'Suburban Townhouse',
                location: 'Austin, USA',
                beds: 3,
                baths: 2.5,
                rating: 4.7,
                 description :"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
         
                image: 'https://images.squarespace-cdn.com/content/v1/6001ce695a503d6d70ef3775/ec67eace-d22e-4803-aa5f-3f035a927cb2/Homanie+Bandol+-+Salon+3.jpg', type: 'Townhouse'
            },
            {
                id: '9',
                gallery: [
                    "https://deavita.fr/wp-content/uploads/2015/07/salon-design-canap%C3%A9s-nor-blanc-fauteuils-ronds-statuette-lampes-tripode-terrasse.jpeg",
                    "https://i.pinimg.com/originals/29/68/2c/29682cb707c4e76477894b0d5dc9bcd4.jpg",
                    "https://img.freepik.com/photos-premium/design-interieur-luxe-dans-salon-villas-piscine_41487-373.jpg",
                ],
                dimention: 25,
                price: "85.00",
                title: 'Historic Townhouse',
                location: 'Boston, USA',
                beds: 4,
                baths: 3,
                rating: 4.8,
                 description :"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
         
                image: "https://media.lesechos.com/api/v1/images/view/63c0a226e5c3cb09ea009d37/1280x720/0703170929526-web-tete.jpg", type: 'Townhouse'
            },
        ],
    };

    const [selectedCategory, setSelectedCategory] = useState('Tout');

    const renderPropertyCard = ({ item }) => (
        <TouchableOpacity 
            style={styles.propertyCard} 
            onPress={() => navigation.navigate('RoomDetails', { property: item })}
        >
            <Image source={{ uri: item.image }} style={styles.propertyImage} />
            <View style={styles.propertyTag}>
                <Text style={styles.propertyTagText}>{item.type}</Text>
            </View>
            <View style={styles.propertyInfo}>
                <Text style={styles.propertyTitle}>{item.title}</Text>
                <Text style={styles.propertyLocation}>{item.location}</Text>
                <View style={styles.propertyDetails}>
                    <View style={styles.propertyDetailItem}>
                        <Ionicons name="bed-outline" size={16} color="#666" />
                        <Text style={styles.propertyDetailText}>{item.beds} | {item.baths}</Text>
                    </View>
                    <View style={styles.propertyDetailItem}>
                        <Ionicons name="star" size={16} color="#FFD700" />
                        <Text style={styles.propertyDetailText}>{item.rating}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );


    return (

        <>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category}
                        style={[styles.categoryButton, category === selectedCategory ? styles.activeCategoryButton : null]}
                        onPress={() => setSelectedCategory(category)}
                    >
                        <Text style={[styles.categoryText, category === selectedCategory ? styles.activeCategoryText : null]}>{category}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <FlatList
                data={propertiesData[selectedCategory]}
                renderItem={renderPropertyCard}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.propertiesList}
            />
        </>
    )
}

export default RoomScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
    },
    scrollView: {
        paddingHorizontal: 20,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 1,
    },
    logo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.color_blue,
        backgroundColor: '#fff',
        width: 40,
        height: 40,
        borderRadius: 30,
        textAlign: 'center',
        lineHeight: 40,
        marginRight: 5,

    },
    logoText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.color_blue,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },

    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: -20
    },

    subText: {
        fontSize: 16,
        color: '#666',
    },
    sublogo: {
        color: Colors.color_blue,
        fontWeight: "bold",
        fontSize: 18
    },
    iconContainer: {
        flexDirection: 'row',
    },
    iconButton: {
        marginLeft: 15,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    searchText: {
        flex: 1,
        marginLeft: 10,
        color: '#666',
    },
    filterButton: {
        padding: 5,
    },
    categoryScroll: {
        marginBottom: 20,
    },
    categoryButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginRight: 10,
        borderRadius: 20,
        backgroundColor: '#FFF',
    },
    activeCategoryButton: {
        backgroundColor: Colors.color_blue,
    },
    categoryText: {
        color: '#666',
    },
    activeCategoryText: {
        color: '#FFF',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    seeAllText: {
        color: Colors.color_blue,
        fontWeight: "bold"
    },
    propertiesList: {
        paddingRight: 20,
    },
    propertyCard: {
        backgroundColor: '#FFF',
        borderRadius: 15,
        overflow: 'hidden',
        marginRight: 15,
        width: 280,
    },
    propertyImage: {
        width: '100%',
        height: 150,
    },
    propertyTag: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
    },
    propertyTagText: {
        color: Colors.color_blue,
        fontWeight: 'bold',
    },
    propertyInfo: {
        padding: 15,
    },
    propertyTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    propertyLocation: {
        color: '#666',
        fontSize: 14,
        marginBottom: 10,
    },
    propertyDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    propertyDetailItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    propertyDetailText: {
        marginLeft: 5,
        color: '#666',
        fontSize: 12,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        paddingVertical: 10,
        backgroundColor: '#FFF',
    },
    tabBarItem: {
        alignItems: 'center',
    },
});