/*
 * PostPage
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
import { makeSelectPosts, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import PostsTable from 'components/PostsTable';
import CenteredSection from './CenteredSection';
import Section from './Section';
import messages from './messages';
import { loadPosts } from '../App/actions';

import saga from './saga';

export class PostPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    const { loading, error, posts } = this.props;
    const postsTableProps = {
      loading,
      error,
      posts,
    };

    return (
      <article>
        <Helmet>
          <title>Enjoy Posts</title>
          <meta name="description" content="Posts Manager" />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.enjoyPostsHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.enjoyPostsMessage} />
            </p>
          </CenteredSection>
          <Section>
            <H2>
              <FormattedMessage {...messages.postsHeader} />
            </H2>
            <PostsTable {...postsTableProps} />
          </Section>
        </div>
      </article>
    );
  }
}

PostPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  posts: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  loadPosts: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadPosts: () => dispatch(loadPosts()),
  };
}

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: 'post', saga });

export default compose(
  withSaga,
  withConnect,
)(PostPage);
