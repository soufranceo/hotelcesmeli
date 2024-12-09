import React from 'react';
import { ScrollView, Image } from '@nativescript/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Carousel } from '@nativescript/carousel';

type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const images = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd",
    "https://images.unsplash.com/photo-1595576508898-0ad5c879a061"
  ];

  return (
    <ScrollView>
      <Carousel
        height={300}
        width="100%"
        indicatorColor="#1e3a8a"
        finite={false}
        bounce={false}
        showIndicator={true}
        verticalAlignment="top"
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            stretch="aspectFill"
            width="100%"
            height={300}
          />
        ))}
      </Carousel>

      <StackLayout padding={16}>
        <Label
          text="Çeşmeli Hotel'e Hoşgeldiniz"
          className="text-2xl font-bold text-center text-blue-900 mb-4"
        />
        <Label
          text="Bursa'nın merkezinde, konforlu ve uygun fiyatlı konaklama"
          className="text-gray-600 text-center mb-8"
        />
        
        <Button
          text="Odalarımızı İnceleyin"
          className="bg-blue-900 text-white p-4 rounded-lg"
          onTap={() => navigation.navigate('Rooms')}
        />
      </StackLayout>
    </ScrollView>
  );
};

export default HomeScreen;