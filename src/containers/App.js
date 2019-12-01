import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { User } from '../components/User';
import { Page } from '../components/Page';
import { getPhotos } from '../actions/PageActions';
import { handleLogin } from '../actions/UserActions';

class App extends Component {
  render() {
    const { user, page, getPhotosAction, handleLoginAction } = this.props;
    return (
      <Fragment>
        <header className="header">
          <h1 className="header__title">Мой топ фоточек по годам</h1>
          <User
            name={user.name}
            isFetching={user.isFetching}
            error={user.error}
            handleLogin={handleLoginAction}
          />
        </header>
        <main className="app">
          <Page
            photos={page.photos}
            year={page.year}
            isFetching={page.isFetching}
            getPhotos={getPhotosAction}
            error={page.error}
          />
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    user: store.user, // вытащили из стора (из редьюсера user все в переменную thid.props.user)
    page: store.page
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotosAction: (year) => dispatch(getPhotos(year)),
    // "приклеили" в this.props.handleLoginAction функцию, которая умеет диспатчить handleLogin
    handleLoginAction: () => dispatch(handleLogin())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
