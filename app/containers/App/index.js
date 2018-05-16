/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import PostPage from 'containers/PostPage/Loadable';
import UserPage from 'containers/UserPage/Loadable';
import MediaPage from 'containers/MediaPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

const AppWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Martin Test"
        defaultTitle="Medias Manager"
      >
        <meta name="description" content="Media Manager" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={PostPage} />
        <Route exact path="/medias" component={MediaPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </AppWrapper>
  );
}
