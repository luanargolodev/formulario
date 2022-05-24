import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const FormStep3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/step2');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, [dispatch, navigate, state.name]);

  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') {
      console.log(state);
    } else {
      alert('Preencha os dados.');
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: event.target.value,
    });
  };

  const handleGithubChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: event.target.value,
    });
  };

  return (
    <Theme>
      <Container>
        <p>Passo {state.currentStep}/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha os campos abaixo para falarmos com você.</p>

        <hr />

        <label>
          Qual seu e-mail?
          <input
            type="e-mail"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Qual seu GitHub?
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link to="/step2" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Finalizar cadastro</button>
      </Container>
    </Theme>
  );
};
