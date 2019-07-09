import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

class Planner extends Component {
  static navigationOptions = {
		header: null
  }
  
  render() {
    return (
      <Container>
        <Header />
        <Content>
        <Text>
          Upcoming  view all
        </Text>
        <Text>
          Your next 3 appointments
        </Text>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   Friday, 10 July 2019 with Dr Swartz
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                   9:00pm - 11:00pm                         Tap for more details
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Text>
            Past  view all
          </Text>
          <Text>
            Your next 3 appointments
          </Text>
            <Card>
              <CardItem>
                <Body>
                  <Text>
                     Friday, 10 July 2019 with Dr Swartz
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                     9:00pm - 11:00pm                         Tap for more details
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Text>
                     Friday, 10 July 2019 with Dr Swartz
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                     9:00pm - 11:00pm                         Tap for more details
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Text>
                     Friday, 10 July 2019 with Dr Swartz
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                     9:00pm - 11:00pm                         Tap for more details
                  </Text>
                </Body>
              </CardItem>
            </Card>
        </Content>
      </Container>
    );
  }
}

export default Planner
