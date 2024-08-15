import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Animated, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/colors';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const slides = [
    {
      title: "Trouvez votre maison idéale",
      description: "Parcourez des milliers de propriétés et trouvez celle qui vous convient.",
      image: require("../assets/ondoardin/ob4.png")
    },
    {
      title: "Visites virtuelles 3D",
      description: "Explorez chaque recoin de votre future maison sans bouger de chez vous.",
      image: require("../assets/ondoardin/ob3.png")
    },
    {
      title: "Estimations précises",
      description: "Obtenez des estimations de prix basées sur les données du marché en temps réel.",
      image: require("../assets/ondoardin/ob5.png")
    },
    {
      title: "Contactez des agents facilement",
      description: "Mettez-vous en relation avec des agents immobiliers expérimentés en un clic.",
      image: require("../assets/ondoardin/ct.png")
    },
  ];

  // Fonction modifiée pour gérer le défilement et la navigation
  const handleNext = () => {
    if (activeIndex < slides.length - 1) {
      // Calcul de la position suivante
      const nextIndex = activeIndex + 1;
      // Défilement vers la slide suivante
      slidesRef.current.scrollTo({ x: width * nextIndex, animated: true });
      // Mise à jour de l'index actif
      setActiveIndex(nextIndex);
    } else {
      // Navigation vers l'écran de connexion si on est sur la dernière slide
      navigation.navigate('Login');
    }
  };

  const handleSkip = () => {
    navigation.navigate('Login');
  };

  // Fonction pour gérer le changement de slide
  const handleMomentumScrollEnd = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        ref={slidesRef}
        scrollEventThrottle={16}
      >
        {slides.map((slide, index) => (
          <View style={styles.slide} key={index}>
            <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.gradientBackground}
            >
              <Image source={slide.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{slide.title}</Text>
                <Text style={styles.description}>{slide.description}</Text>
              </View>
            </LinearGradient>
          </View>
        ))}
      </Animated.ScrollView>
      <View style={styles.pagination}>
        {slides.map((_, index) => {
          const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1.4, 0.8],
            extrapolate: 'clamp',
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              style={[styles.paginationDot, { transform: [{ scale }], opacity }]}
              key={index}
            />
          );
        })}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Passer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {activeIndex === slides.length - 1 ? "Démarrer" : "Suivant"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#192f6a"
  },
  gradientBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  slide: {
    width,
    height,
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.color_white,
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: Colors.color_bclair,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
    width: '100%',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.color_white,
    marginHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  skipButton: {
    padding: 10,
  },
  skipButtonText: {
    fontSize: 16,
    color: Colors.color_white,
    fontWeight: '600',
  },
  nextButton: {
    backgroundColor: Colors.color_jaune,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.color_gray,
  },
});
export default OnboardingScreen;