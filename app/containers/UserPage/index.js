/*
 * UserPage
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
import { makeSelectUsers, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import UsersTable from 'components/UsersTable';
import CenteredSection from './CenteredSection';
import Section from './Section';
import messages from './messages';
import { loadUsers } from '../App/actions';

import saga from './saga';

export class UserPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    const { loading, error, users } = this.props;
    const usersTableProps = {
      loading,
      error,
      users,
    };

    return (
      <article>
        <Helmet>
          <title>Enjoy Users</title>
          <meta name="description" content="Users Manager" />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.enjoyUsersHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.enjoyUsersMessage} />
            </p>
          </CenteredSection>
          <Section>
            <H2>
              <FormattedMessage {...messages.usersHeader} />
            </H2>
            <UsersTable {...usersTableProps} />
          </Section>
        </div>
      </article>
    );
  }
}

UserPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  users: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  loadUsers: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadUsers: () => dispatch(loadUsers()),
  };
}

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: 'user', saga });

export default compose(
  withSaga,
  withConnect,
)(UserPage);
