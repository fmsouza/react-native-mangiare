import React from 'react';
import { View } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import EmptyStack from './emptyStack';
import Card from './card';

const Style = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    cardsStackContainer: {
        backgroundColor: 'white'
    }
};

const cards = [
    { name: 'Francielle Hemsworth', action: 'cook', plate: 'strogonoff', avatar: 'https://placehold.it/300x200' },
    { name: 'Mirella Presley', action: 'eat', plate: 'japanese food', avatar: 'https://placehold.it/300x200' },
    { name: 'Jumes Sulley', action: 'cook', plate: 'italian food', avatar: 'https://placehold.it/300x200' },
    { name: 'Carl Livingson', action: 'eat', plate: 'pizza', avatar: 'https://placehold.it/300x200' },
    { name: 'Pharell Wage', action: 'cook', plate: 'lasagna', avatar: 'https://placehold.it/300x200' },
    { name: 'Megan June', action: 'eat', plate: 'popcorn', avatar: 'https://placehold.it/300x200' },
    { name: 'Miranda Prisley', action: 'eat', plate: 'hamburguer', avatar: 'https://placehold.it/300x200' },
    { name: 'Caroline Jameson', action: 'eat', plate: 'ice cream', avatar: 'https://placehold.it/300x200' }
];

export default class Cards extends React.Component {

    state = { cards };

    handleLike(card) {
        console.log(`Liked the card: ${card.name}`);
    }

    handleDislike(card) {
        console.log(`Disliked the card: ${card.name}`);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={Style.container}>
                    <SwipeCards
                        cards={this.state.cards}

                        renderCard={(cardData) => <Card {...cardData} />}
                        renderNoMoreCards={() => <EmptyStack />}

                        handleYup={this.handleLike}
                        handleNope={this.handleDislike}

                        containerStyle={Style.cardsStackContainer}
                    />
                </View>
            </View>
        );
    }
}
