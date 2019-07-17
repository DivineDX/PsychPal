import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="navigate" />
              <Text>Search</Text>
            </Button>
            <Button vertical active>
              <Icon active name="apps" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Treatment</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}