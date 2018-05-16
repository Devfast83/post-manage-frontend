/*
 * MediaPage
 *
 * This is the first thing custom-users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectMedias, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import MediasTable from 'components/MediasTable';
import CenteredSection from './CenteredSection';
import Section from './Section';
import messages from './messages';
import { loadMedias } from '../App/actions';

import saga from './saga';

export class MediaPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadMedias();
  }

  render() {
    const { loading, error, medias } = this.props;
    const mediasTableProps = {
      loading,
      error,
      medias,
    };

    return (
      <article>
        <Helmet>
          <title>Enjoy Medias</title>
          <meta name="description" content="Medias Manager" />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.enjoyMediasHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.enjoyMediasMessage} />
            </p>
          </CenteredSection>
          <Section>
            <H2>
              <FormattedMessage {...messages.mediasHeader} />
            </H2>
            <MediasTable {...mediasTableProps} />
          </Section>
        </div>
      </article>
    );
  }
}

MediaPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  medias: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  loadMedias: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadMedias: () => dispatch(loadMedias()),
  };
}

const mapStateToProps = createStructuredSelector({
  medias: makeSelectMedias(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: 'media', saga });

export default compose(
  withSaga,
  withConnect,
)(MediaPage);
