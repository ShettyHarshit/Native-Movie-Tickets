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

    bookTicket = () => {
        if (!this.state.chosenTime) {
            alert('Please select show time');
        } else {
            this.closeMovie();
            function dec2hex(dec) {
                return ('0' + dec.toString(16)).substr(-2)
            }

            function generateId(len) {
                var arr = new Uint8Array((len || 40) / 2)
                window.crypto.getRandomValues(arr)
                return Array.from(arr, dec2hex)
                  .join("")
                  .toUpperCase();
            }
            let code = generateId(8);

            this.props.navigation.navigate("Confirmation", {
                code: code,
            });
        }
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
                    onBook={this.bookTicket}
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
