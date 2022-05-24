import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    });
  }, [dispatch]);

  const handleNextStep = () => {
    if (state.name !== '') {
      navigate('/step2');
    } else {
      alert('Preencha os dados.');
    }
  };

  return (
    <Theme>
      <Container>
        <p>Passo {state.currentStep}/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo</p>

        <hr />

        <button onClick={handleNextStep}>Próximo</button>
      </Container>
    </Theme>
  );
};
