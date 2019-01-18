import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { defaultStyles } from "./styles";
import Prop from "prop-types";
import Heart from "./heart.png";

const { width, height } = Dimensions.get("window");
const cols = 3,
  rows = 3;

export default class MoviePoster extends Component {

    state = {
        rating : 71
    }
  
  static propTypes = {
    movie: Prop.object.isRequired,
    onOpen: Prop.func.isRequired
  }

  componentDidMount(){
    let rating = Math.random();
    rating *= 10;
    rating = Math.floor(rating) +77;
    rating = " " + rating
    this.setState({ rating : rating}) 
  }

  render() {
    const {
      movie,
      movie: { title, genre, poster },
      onOpen
    } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => onOpen(movie)}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: poster }} style={styles.image} />
        </View>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.genre} numberOfLines={1}>
          {genre}
        </Text>
        <Text style={styles.like} numberOfLines={1}>
          <Image style={styles.heart} source={Heart} />
          {this.state.rating}%
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20 - 20) / rows - 10,
    width: (width - 10) / cols - 10
  },
  imageContainer: {
    flex: 1
  },
  image: {
    borderRadius: 10,
    ...StyleSheet.absoluteFillObject
  },
  title: {
    ...defaultStyles.text,
    fontSize: 14,
    marginTop: 4
  },
  like: {
    ...defaultStyles.text,
    fontSize: 14,
    marginTop: 2
  },
  heart: {
    width: 15,
    height: 15
  },
  genre: {
    ...defaultStyles.text,
    color: "#BBBBBB",
    fontSize: 12,
    lineHeight: 14
  }
});
