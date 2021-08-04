import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import MainCard from "./components/MainCard";
import InfoCard from "./components/InfoCard";
import Cards from "./components/Cards.jsx";
import Navbar from "./components/Navbar.jsx";
import Help from "./components/Help.jsx";

import { Content, ContentFlexBox } from "./components/styles/App.SC";

function App(props) {
  const [first] = props.cities ? props.cities : [];

  return (
    <React.Fragment>
      <Route path="/">
        <Navbar />
      </Route>
      <Route path="/" exact>
        <Content>
          {first && <MainCard />}
          <ContentFlexBox>
            <Cards />
          </ContentFlexBox>
        </Content>
      </Route>
      <Route exact path="/help">
        <Help />
      </Route>
      <Route
        exact
        path="/:id"
        render={({ match }) => (
          <Content>
            {match.params.id && (
              <InfoCard id={match.params.id} key={match.params.id} />
            )}
          </Content>
        )}
      ></Route>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities,
  };
}

export default connect(mapStateToProps)(App);
