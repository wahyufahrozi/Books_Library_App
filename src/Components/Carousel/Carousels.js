import React, { Component } from "react";
import "./Carousel.css";
import M from "materialize-css";
import { getLibrary } from "../../Public/Redux/Actions/library";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class Carousels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      show: false
    };
    // this.onClick = this.onClick.bind(this);
  }
  async componentDidMount() {
    console.log("did mount");

    await this.props.dispatch(getLibrary());
    // const {pokemonData} = await this.props.pokemons;
    this.setState({
      data: this.props.data.LibraryData
    });
    M.AutoInit();
  }
  render() {
    return (
      <div className="carousel">
        {this.state.data.map((book, index) => {
          return (
            <div className="carousel-item">
              <div className="card">
                <div className="card-image">
                  <img src={book.image_url} alt="" />
                  <div className="card-title">
                    <div className="sub-title">{book.title}</div>
                    <span className="subs-title">{book.author}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.Library // namaProps: state.namaReducer
  };
};
export default connect(mapStateToProps)(Carousels);
