import React from 'react';
import { Notification } from './Feedback/Notification';
import { Section } from './Feedback/Section';
import { Statistics } from './Feedback/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import styled from 'styled-components';


const Container = styled.div`
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40px;
      color: #010101;
`


export class App extends React.Component  {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
      } 


      LeaveFedback = (event) => {
        
        this.setState((prevState) => {
            const { name } = event.target;
            return {
                [name]: prevState[name] + 1,            
            }
          })
        }
  render () {
    const good = this.state.good
    const neutral = this.state.neutral
    const bad = this.state.bad  

    const total = good + neutral + bad
    const percentage =  Math.round((100 * good) / total)
  return(<Container>
          <div>
           

              <Section title={'please leave feedback'}>
                        
                        <FeedbackOptions
                            options={Object.keys(this.state)} 
                            onLeaveFeedback={this.LeaveFedback} />
                        </Section>
                        <Section title={'statistics'}>
                        {total === 0 ?   <Notification message={'There is no feedback'}/> :
                        <Statistics
                            good={good} 
                            neutral={neutral} 
                            bad={bad}
                            total={total}
                            percentage={percentage}
                        />}
              </Section>
              </div>

                                
      </Container>)
  }
}
