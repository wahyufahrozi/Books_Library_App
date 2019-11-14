import React, { Component } from "react";
import M from "materialize-css";
import logo from "../../Assets/Library.png";
import "./Navbar.css";
// import { gettitle } from "../../Public/Redux/Actions/library";
// import { addBook } from "../../Public/Redux/Actions/library";
import { getGenre } from "../../Public/Redux/Actions/library";
import { getStatus } from "../../Public/Redux/Actions/library";
import { connect } from "react-redux";
import AllTime from "../../Helpers/AllTime";
import Axios from "axios";
import swal from "sweetalert";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        title: "",
        author: "",
        image_url: "",
        date: "",
        year: "",
        description: "",
        id_genre: "",
        id_status: ""
      },
      data: [],
      datagenre: [],
      datastatus: [],
      // databookbygenre: [],
      show: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    await this.props.dispatch(getStatus());
    await this.props.dispatch(getGenre());

    // await this.props.dispatch(getbookbyGenre());
    // const {pokemonData} = await this.props.pokemons;
    this.setState({
      datagenre: this.props.GetGenre.LibraryData,
      datastatus: this.props.GetStatus.LibraryData
      // databookbygenre: this.props.GetbookBygenre.LibraryData
    });
    const elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
  }

  handleSubmit(event) {
    event.preventDefault();
    var data = {
      title: this.state.book.title,
      author: this.state.book.author,
      image_url: this.state.book.image_url,
      date: this.state.book.date,
      year: this.state.book.year,
      description: this.state.book.description,
      id_genre: this.state.book.id_genre,
      id_status: this.state.book.id_status
    };
    Axios.post("http://localhost:8000/api/library", data);
    swal({
      title: "Good job!",
      text: "Success Adding Book",
      icon: "success"
    })
      .then(function(response) {
        window.location.href = "/";
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }

  logChange(e) {
    const { name, value } = e.target;

    this.setState({
      book: { ...this.state.book, [name]: value }
    });
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper grey lighten-5">
            <a
              href="#"
              data-target="slide-out"
              className="sidenav-trigger show-on-large "
            >
              <i className="material-icons black-text">menu</i>
            </a>

            <a className="right brand-logo black-text">
              <img src={logo} height="26px" /> Library
            </a>
            <ul className="left hide-on-med-and-down">
              <li
                style={{
                  marginLeft: "100px"
                }}
              >
                <select onChange={this.props.handlegenre}>
                  <option value="all">All Catergory</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Social Criticsm">Social Criticsm</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Sci-Fi">Sci-fi</option>
                  <option value="Horor">Horor</option>
                  <option value="Documenter">Documenter</option>
                  <option value="Drama">Drama</option>
                  <option value="Romance">Romance</option>
                  <option value="Mystery">Mystery</option>
                  <option value="Detective">Detective</option>
                </select>
                {/* <a
                  data-target="AllCategory"
                  className="dropdown-trigger black-text"
                  href="#"
                  style={{
                    marginLeft: "100px"
                  }}
                >
                  All Catergory
                  <i className="material-icons right ">arrow_drop_down</i>
                  <ul id="AllCategory" className="dropdown-content black-text">
                    {this.state.datagenre.map((category, index) => {
                      return (
                        <li key={index}>
                          <a href="#" className="black-text">
                            {category.genre}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </a> */}
              </li>

              <li>
                <a
                  data-target="AllTime"
                  className="dropdown-trigger black-text"
                  href="#"
                >
                  All Time
                  <i class="material-icons right ">arrow_drop_down</i>
                  <ul id="AllTime" className="dropdown-content black-text">
                    {AllTime.map((category, index) => {
                      return (
                        <li key={index}>
                          <a href="#" className="black-text">
                            {category}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </a>
              </li>
              <li>
                <div className="input-field">
                  <input
                    style={{
                      borderRadius: "100px",
                      background: "transparent",
                      width: "300px",
                      height: "55px",
                      marginTop: "4px",
                      border: "solid 0.1px black"
                    }}
                    id="search"
                    className="black-text"
                    type="search"
                    placeholder="Search"
                    onChange={this.props.handleSearch}
                  />
                  <label class="label-icon black-text" for="search">
                    <i class="material-icons black-text">search</i>
                  </label>
                  <i class="tiny material-icons">close</i>
                </div>
              </li>
            </ul>
          </div>
          <ul id="slide-out" className="sidenav">
            <li>
              <div className="user-view">
                <a href="#user">
                  <img
                    className="circle"
                    src="https://icon-library.net/images/github-icon-png/github-icon-png-27.jpg"
                  />
                </a>
                <a href="#name">
                  <span className="black-text name">
                    Wahyu Fahrozi Rezeki Ramadhan
                  </span>
                </a>
                <a href="#email">
                  <span className="black-text email">jdandturk@gmail.com</span>
                </a>
              </div>
            </li>
            <li>
              <a href="#!">
                Explore
                <i class="material-icons left ">explore</i>
              </a>
            </li>
            <li>
              <a href="#!">
                History
                <i class="material-icons left ">history</i>
              </a>
            </li>
            <li>
              <a className=" modal-trigger" href="#" data-target="addmodal">
                Add Book
                <i class="material-icons left ">add_circle_outline</i>
              </a>
            </li>
          </ul>
        </nav>
        <div id="addmodal" class="modal">
          <div class="modal-content">
            <div className="right modal-close close">X</div>
            <h4>Add Data</h4>
            <div className="row">
              <form onSubmit={this.handleSubmit} className="col s12">
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">title</i>
                  <input
                    name="title"
                    placeholder="title"
                    id="title"
                    type="text"
                    className="validate"
                    value={this.state.book.title}
                    onChange={this.logChange.bind(this)}
                  />
                  <label className="active" htmlFor="title">
                    Title
                  </label>
                </div>
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">contacts</i>
                  <input
                    name="author"
                    placeholder="Author"
                    id="author"
                    type="text"
                    className="validate"
                    value={this.state.book.author}
                    onChange={this.logChange.bind(this)}
                  />
                  <label className="active" htmlFor="author">
                    Author
                  </label>
                </div>
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">code</i>
                  <input
                    name="image_url"
                    placeholder="Image Url"
                    id="image_url"
                    type="text"
                    class="validate"
                    value={this.state.book.image_url}
                    onChange={this.logChange.bind(this)}
                  />
                  <label className="active" htmlFor="image_url">
                    Image Url
                  </label>
                </div>
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">today</i>
                  <input
                    name="date"
                    placeholder="Date"
                    id="date"
                    type="text"
                    className="validate"
                    value={this.state.book.date}
                    onChange={this.logChange.bind(this)}
                  />
                  <label className="active" htmlFor="date">
                    Date
                  </label>
                </div>
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">today</i>
                  <input
                    name="year"
                    placeholder="Date"
                    id="year"
                    type="text"
                    className="validate"
                    value={this.state.book.year}
                    onChange={this.logChange.bind(this)}
                  />
                  <label className="active" htmlFor="year">
                    year
                  </label>
                </div>
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">title</i>
                  <input
                    name="description"
                    placeholder="description"
                    id="description"
                    type="text"
                    className="validate"
                    value={this.state.book.description}
                    onChange={this.logChange.bind(this)}
                  />
                  <label className="active" htmlFor="description">
                    description
                  </label>
                </div>
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">title</i>
                  <select
                    name="id_status"
                    placeholder="Status"
                    id="id_status"
                    onChange={this.logChange.bind(this)}
                  >
                    {this.state.datastatus.map((status, id) => {
                      return (
                        <option value={status.id_status}>
                          {status.status}
                        </option>
                      );
                    })}
                  </select>
                  <label>Status</label>
                </div>
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">code</i>
                  <select
                    name="id_genre"
                    placeholder="Genre"
                    id="id_genre"
                    onChange={this.logChange.bind(this)}
                  >
                    {this.state.datagenre.map((genre, id) => {
                      return (
                        <option value={genre.id_genre}>{genre.genre}</option>
                      );
                    })}
                  </select>
                  <label>Genre</label>
                </div>

                <div class="modal-footer">
                  <button className="modal-close waves-effect waves-light btn yellow darken-4 submit">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ADDBOOK: state.addBook,
    GetGenre: state.getGenre,
    GetStatus: state.getStatus,
    GetbookBygenre: state.getbookbyGenre
  };
};

export default connect(mapStateToProps)(Navbar);
