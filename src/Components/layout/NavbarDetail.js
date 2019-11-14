import React, { Component } from "react";
import M from "materialize-css";
import SweetAlert from "react-bootstrap-sweetalert";
import "./Navbardetail.css";
// import { editBook } from "../../Public/Redux/Actions/library";
import { connect } from "react-redux";
import { getGenre } from "../../Public/Redux/Actions/library";
import { getStatus } from "../../Public/Redux/Actions/library";

// import Axios from "axios";

class NavbarDetail extends Component {
  async componentDidMount() {
    M.AutoInit();
    await this.props.dispatch(getStatus());
    await this.props.dispatch(getGenre());
    // const {pokemonData} = await this.props.pokemons;
    this.setState({
      datagenre: this.props.GetGenre.LibraryData,
      datastatus: this.props.GetStatus.LibraryData
    });
    const elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
  }
  constructor(props) {
    super(props);

    this.state = {
      alert: null,
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
      datagenre: [],
      datastatus: [],
      show: false
    };
  }

  render() {
    return (
      <div>
        <div className="nav-wrapper">
          <nav className="transparent z-depth-0 nav-detail">
            <div className="na-nav">
              <a href="/" className="left">
                <i className="small material-icons">arrow_back</i>
              </a>
              <ul className="right">
                <li>
                  <a
                    className=" modal-trigger"
                    href="#"
                    data-target="modal-edit"
                  >
                    Edit
                  </a>
                </li>
                <li>|</li>
                <li>
                  <a onClick={this.props.onDelete}>Delete</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <section
          style={{
            backgroundImage: `url(${this.props.image_url})`
          }}
        ></section>
        <div id="modal-edit" class="modal">
          <div class="modal-content">
            <div className="right modal-close close">X</div>
            <h4>Edit Data</h4>
            <div className="row">
              <form onSubmit={this.props.onSubmit} className="col s12">
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">title</i>
                  <input
                    name="title"
                    placeholder="title"
                    id="title"
                    type="text"
                    className="validate"
                    value={this.props.title}
                    onChange={this.props.onChange}
                  />
                  <label className="active" htmlFor="title">
                    Title
                  </label>
                </div>
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">title</i>
                  <input
                    name="author"
                    placeholder="author"
                    id="author"
                    type="text"
                    className="validate"
                    value={this.props.author}
                    onChange={this.props.onChange}
                  />
                  <label className="active" htmlFor="author">
                    Author
                  </label>
                </div>
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">title</i>
                  <input
                    name="image_url"
                    placeholder="image_url"
                    id="image_url"
                    type="text"
                    className="validate"
                    value={this.props.image_url}
                    onChange={this.props.onChange}
                  />
                  <label className="active" htmlFor="image_url">
                    Image Url
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
                    value={this.props.description}
                    onChange={this.props.onChange}
                  />
                  <label className="active" htmlFor="description">
                    Description
                  </label>
                </div>
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">title</i>
                  <input
                    name="date"
                    placeholder="date"
                    id="description"
                    type="text"
                    className="validate"
                    value={this.props.date}
                    onChange={this.props.onChange}
                  />
                  <label className="active" htmlFor="description">
                    Date
                  </label>
                </div>
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">title</i>
                  <input
                    name="year"
                    placeholder="year"
                    id="year"
                    type="text"
                    className="validate"
                    value={this.props.year}
                    onChange={this.props.onChange}
                  />
                  <label className="active" htmlFor="description">
                    Year
                  </label>
                </div>
                <div className="input-field col s12">
                  <i class="tiny material-icons prefix">today</i>
                  <select
                    name="id_status"
                    placeholder="Status"
                    id="id_status"
                    onChange={this.props.onChange}
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
                  <i class="tiny material-icons prefix">today</i>
                  <select
                    name="id_genre"
                    placeholder="Genre"
                    id="id_genre"
                    onChange={this.props.onChange}
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
    EDITbook: state.editBook,
    GetGenre: state.getGenre,
    GetStatus: state.getStatus // namaProps: state.namaReducer
  };
};

export default connect(mapStateToProps)(NavbarDetail);
