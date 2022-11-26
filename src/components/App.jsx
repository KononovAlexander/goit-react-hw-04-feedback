import {useState}from 'react';
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


export const App =  () => {

  const[good, setGood] = useState(0);
  const[neutral, setNeutral] = useState(0);
  const[bad, setBad] = useState(0);


    const  LeaveFedback = (event) => {
      const {name} = event.target 
      if(name === 'good'){
          setGood(good + 1)
      }
      if(name === 'neutral' ){
        setNeutral(neutral + 1)
      }
      if(name === 'bad'){
        setBad(bad + 1)
      }
    }

    const total = good + neutral + bad
    const percentage =  Math.round((100 * good) / total)
  return(<Container>
          <div>
           

              <Section title={'please leave feedback'}>
                        
                        <FeedbackOptions
                            options={['good', 'neutral','bad'] }
                            onLeaveFeedback={LeaveFedback} />
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
