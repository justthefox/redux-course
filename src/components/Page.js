import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export class Page extends React.Component {
  onBtnClick = (e) => {
    const year = +e.currentTarget.innerText;
    this.props.getPhotos(year);
  };
  renderTemplate = () => {
    const { photos, isFetching, error } = this.props;

    if (error) {
      return <p className="error">Во время загрузки фото произошла ошибка</p>;
    }

    if (isFetching) {
      return <p>Загрузка...</p>;
    } else {
      return (
        <section className="photo">
          {photos.map((entry) => (
            <div key={entry.id} className="photo__item">
              <span className="photo__img">
                <img src={entry.sizes[0].url} alt="" />
              </span>
              <span>{entry.likes.count} ❤</span>
            </div>
          ))}
        </section>
      );
    }
  };

  render() {
    const { year, photos } = this.props;
    return (
      <Fragment>
        <div>
          <button className="btn" onClick={this.onBtnClick}>
            2019
          </button>
          <button className="btn" onClick={this.onBtnClick}>
            2018
          </button>
          <button className="btn" onClick={this.onBtnClick}>
            2017
          </button>
          <button className="btn" onClick={this.onBtnClick}>
            2016
          </button>
          <button className="btn" onClick={this.onBtnClick}>
            2015
          </button>
          <button className="btn" onClick={this.onBtnClick}>
            2014
          </button>
        </div>
        <h3>
          {year} год [{photos.length}]
        </h3>
        {this.renderTemplate()}
      </Fragment>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired
};
