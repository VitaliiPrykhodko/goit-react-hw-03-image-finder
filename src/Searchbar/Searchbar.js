import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Searchbar.module.css";
import { FcSearch } from "react-icons/fc";
import { IconContext } from "react-icons";

class Searchbar extends Component {
  state = {
    name: "",
  };

  handleInput = (e) => {
    this.setState({
      name: e.target.value.trim(),
    });
    setTimeout(() => {
      this.resetState(e);
    }, 5000);
  };

  resetState(e) {
    e.target.value = "";
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name } = this.state;

    if (name === "") {
      return;
    }
    this.props.onSubmit(name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.buttonForm}>
            <IconContext.Provider value={{ className: styles.buttonIcon }}>
              <span className={styles.buttonLabel}>
                <FcSearch />
              </span>
            </IconContext.Provider>
          </button>

          <input
            onChange={this.handleInput}
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { Searchbar };
