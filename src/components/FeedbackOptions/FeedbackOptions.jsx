import { ButtonContainer, Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ options }) {
  
  return (
    <ButtonContainer>
      <Button onClick={options} id='1'>Good</Button>
      <Button onClick={options} id='2'>Neutral</Button>
      <Button onClick={options} id='3'>Bad</Button>
    </ButtonContainer>
  );
}
