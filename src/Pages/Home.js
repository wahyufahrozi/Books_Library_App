import React, { Component } from "react";
import "../Components/Card/Card.css";
import Navbar from "../Components/layout/Navbar";
import Carousels from "../Components/Carousel/Carousels";
import { Link } from "react-router-dom";
import { getLibrary } from "../Public/Redux/Actions/library";
import { getbookbyGenre } from "../Public/Redux/Actions/library";
import { connect } from "react-redux";
import { gettitle } from "../Public/Redux/Actions/library";
import Pagination from "../Components/layout/pagination";
// import { Redirect } from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [],
      tempBook: {
        title: "",
        author: "",
        image_url: "",
        date: "",
        year: "",
        description: "",
        genre: ""
      },
      post: [],
      // setPosts: [],
      // loading: false,
      // setLoading: false,
      currentPage: 1,
      // setCurrentpage: 1,
      postsPerPage: 6
      // setPostsPerpage: 10
    };
    // this.onClick = this.onClick.bind(this);
  }
  async componentDidMount() {
    console.log("did mount");

    await this.props.dispatch(getLibrary());
    this.setState({
      post: this.props.post.LibraryData
      // data: this.props.data.LibraryData
    });
  }
  handlegenre(event) {
    event.preventDefault();
    const genre = event.target.value;
    this.props.dispatch(getbookbyGenre(genre)).then(() => {
      this.setState({
        post: this.props.GetbookBygenre.LibraryData
      });
    });
  }
  async handleSearch(event) {
    event.preventDefault();
    const title = event.target.value;
    if (title !== "") {
      await this.props.dispatch(gettitle(title));
      this.setState({ post: this.props.getBOOK.LibraryData });
      console.log(title);
    } else {
      await this.props.dispatch(getLibrary());
      this.setState({
        post: this.props.post.LibraryData
        // data: this.props.data.LibraryData
      });
    }
  }
  render() {
    const indexOflastpost = this.state.currentPage * this.state.postsPerPage;
    const indexOffirstPost = indexOflastpost - this.state.postsPerPage;
    const currentPost = this.state.post.slice(
      indexOffirstPost,
      indexOflastpost
    );
    // console.log(currentPost);

    return (
      <div className="Home">
        <Navbar
          // modalId="modaladd"
          title={this.state.tempBook.title}
          author={this.state.tempBook.author}
          image_url={this.state.tempBook.image_url}
          date={this.state.tempBook.date}
          year={this.state.tempBook.year}
          description={this.state.tempBook.description}
          genre={this.state.tempBook.genre}
          // ongenre={this.handlegenre.bind(this)}
          // onChange={this.handleChange}
          handleSearch={this.handleSearch.bind(this)}
          handlegenre={this.handlegenre.bind(this)}
        />
        <Carousels />
        {/* <====================================CARD=============================================> */}
        <div className="container">
          <h4>List Book</h4>
          <div className="row">
            {currentPost.map((book, index) => {
              return (
                <Link to={`detail/${book.id_books}`}>
                  <div className="col m4 s12">
                    <div className="card">
                      <div className="card-images">
                        <img src={book.image_url} />
                      </div>
                      <div className="card-content">
                        <span className="card-titles">{book.title}</span>
                        <p>{book.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
            {/* END */}
          </div>

          <Pagination
            totalPosts={this.state.post.length}
            postsPerPage={this.state.postsPerPage}
            paginate={pgnum => this.setState({ currentPage: pgnum })}
          />
          <header className="App-header">{}</header>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state.Library,
    // data: state.Library, // namaProps: state.namaReducer
    getBOOK: state.gettitle,
    GetbookBygenre: state.getbookbyGenre
  };
};

export default connect(mapStateToProps)(Home);
