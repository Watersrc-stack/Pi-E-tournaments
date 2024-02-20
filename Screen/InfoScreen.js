import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const InfoScreen = () => {
  const [expandedRectangles, setExpandedRectangles] = useState([]);
  const [lineCounts, setLineCounts] = useState([]);
  const descriptions = [
    "       L'Europe ambitionne de développer son propre canon électromagnétique, autrement appelé railgun. Ce projet baptisé Thema, financé à hauteur de 15 millions d'euros par le Fonds européen de défense, va conduire à la production d'un démonstrateur, avec l'ambition d'une industrialisation à terme. L'arme devra compléter les systèmes des forces navales et terrestres. Le « défi » est mené par 14 partenaires européens rassemblés dans le consortium Thema.",
    "       Cela fait quelques semaines à peine que Google a annoncé Lumière, une intelligence artificielle capable de générer des clips vidéo de cinq secondes d'une qualité jusqu’ici inégalée. Mais les choses évoluent de plus en plus vite dans ce domaine et une nouvelle IA vient de battre celle de Google a plate couture. Voici Sora d'OpenAI, une intelligence artificielle capable de générer des vidéos ultraréalistes qui peuvent durer jusqu'à une minute.",
    "       L'entreprise suédoise Minesto vient de franchir une nouvelle étape avec la mise en route de son hydrolienne Dragon 12, connectée au réseau électrique des îles Féroé. Une hydrolienne fonctionne comme une éolienne, sauf que ses turbines sont actionnées par les courants marins. En l'occurrence, le Dragon 12 est une hydrolienne de type « cerf-volant », ancré au fond marin.",
    "       L'Apple Vision Pro, un casque de réalité mixte ou « ordinateur spatial », est sorti depuis deux semaines aux États-Unis. L'appareil a connu un engouement sur les réseaux sociaux et dans les médias bien plus important que ce qu'a connu le Meta Quest 3, qui offre pourtant largement les mêmes fonctionnalités, et plus encore, à un prix bien inférieur.",
    "       Les nouveaux modèles d'intelligence artificielle ne servent pas uniquement à générer du texte et des images. Ils permettront également de créer des robots polyvalents, capables d'effectuer un grand nombre de tâches et de s'adapter rapidement à un nouveau travail. C'est ce sur quoi travaille la société 1X Technologies. La firme avait annoncé une levée de fonds de 23,5 millions de dollars l'année dernière, largement soutenu par OpenAI, puis encore 100 millions de dollars en janvier."
  ];

  const images = [
    require('./image1.png'),
    require('./image2.png'),
    require('./image3.png'),
    require('./image4.png'),
    require('./image5.png')
  ];

  const titles = [
    "L’Europe va avoir son propre canon électromagnétique",
    "OpenAI dévoile un outil de création de vidéos",
    "Cette hydrolienne « cerf-volant » est le premier « Dragon » à alimenter les îles Féroé en électricité",
    "Pourquoi le casque Meta Quest 3 bat l'Apple Vision Pro, selon Mark Zuckerberg ?",
    "Regardez les robots humanoïdes Eve en action dans une vidéo un peu surréaliste"
  ];

  useEffect(() => {
    const counts = new Array(5).fill(0);
    setLineCounts(counts);
  }, []);

  const toggleRectangleHeight = index => {
    if (expandedRectangles.includes(index)) {
      setExpandedRectangles(expandedRectangles.filter(item => item !== index));
    } else {
      setExpandedRectangles([index]);
    }
  };

  const onTextLayout = (event, index) => {
    const { lines } = event.nativeEvent;
    setLineCounts(prevState => {
      const newState = [...prevState];
      newState[index] = lines.length;
      return newState;
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        {[...Array(5).keys()].map((index) => (
          <TouchableOpacity
            key={index}
            onPress={() => toggleRectangleHeight(index)}
            activeOpacity={0.75}
          >
            <View style={styles.rectangle}>
              <Text style={styles.title}>{titles[index]}</Text>
              <View
                style={[
                  styles.content,
                  expandedRectangles.includes(index) && { height: 200 + (lineCounts[index] * 15) },
                ]}
              >
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={images[index]}
                  />
                </View>
                {expandedRectangles.includes(index) && (
                  <>
                    <Text
                      style={styles.description}
                      onTextLayout={(event) => onTextLayout(event, index)}
                    >
                      {descriptions[index]}
                    </Text>
                  </>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  rectangle: {
    width: 360,
    backgroundColor: 'blue',
    margin: 10,
    borderRadius: 25,
    overflow: 'hidden',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    height: 150,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  imageContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 100,
    borderRadius: 25,
  },
  description: {
    fontSize: 15,
    color: 'white',
    padding: 25,
  },
  additionalText: {
    fontSize: 12,
    color: 'white',
    padding: 10,
  }
});

export default InfoScreen;
