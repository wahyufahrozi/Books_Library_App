import React, { Component } from "react";
import Navbardetail from "../Components/layout/NavbarDetail";
import Details from "../Components/layout/Details";
// import books from "../Helpers/books";
import { getbbookbyID } from "../Public/Redux/Actions/library";
import { connect } from "react-redux";
import Axios from "axios";
import swal from "sweetalert";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      id: 0,
      tbook: {
        title: "",
        author: "",
        image_url: "",
        date: "",
        year: "",
        description: "",
        id_genre: "",
        id_status: ""
      }
    };
  }

  async componentDidMount() {
    const { index } = this.props.match.params;

    console.log("did mount");

    await this.props.dispatch(getbbookbyID(index));
    // const {pokemonData} = await this.props.pokemons;
    this.setState({
      book: this.props.getBookById.LibraryData,
      tbook: this.props.getBookById.LibraryData
    });
  }

  deleteBook() {
    const { index } = this.props.match.params;

    swal({
      title: "Are you sure?",
      text:
        "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    })
      .then(willDelete => {
        if (willDelete) {
          Axios.delete(
            `http://localhost:8000/api/library/delete/${index}`
          ).then(() => {
            swal("Your Book file has been deleted!", {
              icon: "success"
            }).then(function(response) {
              window.location.href = "/";
            });
          });
        } else {
          swal("Your Book file is safe!");
        }
      })

      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
  handleEdit(event) {
    event.preventDefault();
    let data = {
      title: this.state.tbook.title,
      author: this.state.tbook.author,
      image_url: this.state.tbook.image_url,
      date: this.state.tbook.date,
      year: this.state.tbook.year,
      description: this.state.tbook.description,
      id_genre: this.state.tbook.id_genre,
      id_status: this.state.tbook.id_status
    };
    const { index } = this.props.match.params;

    Axios.put(`http://localhost:8000/api/library/edit/${index}`, data);
    swal({
      title: "Good job!",
      text: "Success Edit Book",
      icon: "success"
    })
      .then(function(response) {
        // handle success
        console.log(response);
        window.location.href = "/";
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
  logChange(e) {
    const { name, value } = e.target;

    this.setState({
      tbook: { ...this.state.tbook, [name]: value }
    });
  }
  render() {
    const {
      title,
      author,
      image_url,
      date,
      status,
      year,
      description,
      genre
    } = this.state.book;
    return (
      <div>
        <Navbardetail
          title={this.state.tbook.title}
          author={this.state.tbook.author}
          image_url={this.state.tbook.image_url}
          description={this.state.tbook.description}
          year={this.state.tbook.year}
          date={this.state.tbook.date}
          id_genre={this.state.tbook.id_genre}
          id_status={this.state.tbook.id_status}
          alert={this.props.match.params.index}
          onChange={this.logChange.bind(this)}
          onSubmit={this.handleEdit.bind(this)}
          onDelete={this.deleteBook.bind(this)}
        />
        <Details
          title={title}
          author={author}
          image_url={image_url}
          description={description}
          date={date}
          year={year}
          status={status}
          genre={genre}
          index={this.state.id}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    getBookById: state.getbookbyID // namaProps: state.namaReducer
  };
};

export default connect(mapStateToProps)(Detail);
