import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    View
} from 'react-native';
import { movies } from './data';
import MoviePoster from "./MoviePoster";
import MoviePopup from "./MoviePopup";

export default class Movies extends Component {

    state = {
        popupIsOpen: false,
        chosenDay: 0,       // choose first day by default
        chosenTime: null,
    }

    openMovie = (movie) => {
        this.setState({
            popupIsOpen: true,
            movie,
        });
    }

    closeMovie = () => {
        this.setState({
            popupIsOpen: false,
            chosenDay: 0,
            chosenTime: null,
        });
    }

    chooseDay = (day) => {
        this.setState({
            chosenDay: day,
        });
    }

    chooseTime = (time) => {
        this.setState({
            chosenTime: time,
        });
    }

    render() {
        return (
            <View>
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    {movies.map((movie, index) => <MoviePoster
                        movie={movie}
                        onOpen={this.openMovie}
                        key={index}
                    />)}
                </ScrollView>
                <MoviePopup
                    movie={this.state.movie}
                    isOpen={this.state.popupIsOpen}
                    onClose={this.closeMovie}
                    chosenDay={this.state.chosenDay}
                    chosenTime={this.state.chosenTime}
                    onChooseDay={this.chooseDay}
                    onChooseTime={this.chooseTime}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 20,         // start below status bar
    },
    scrollContent: {
        flexDirection: 'row',   // arrange posters in rows
        flexWrap: 'wrap',       // allow multiple rows
    },
});
