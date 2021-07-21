import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {InputsContainer, SignUpFormContainer} from './styled'
import {useHistory} from 'react-router-dom'
import useForm from '../../hooks/useForm'

const SignUpForm  = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ name: '', email: '', password: '' })

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={onSubmitForm}>
            <SignUpFormContainer>
                <InputsContainer>
                    <TextField
                        name={'name'}
                        value={form.name}
                        onChange={onChange}
                        label={'Nome'}
                        variant={'outlined'}
                        fullWidth
                        margin={'normal'}
                        required
                        autoFocus
                    />
                    <TextField
                        value={form.email}
                        name={'email'}
                        onChange={onChange}
                        label={'E-mail'}
                        variant={'outlined'}
                        type={'email'}
                        fullWidth
                        required
                        margin={'normal'}
                    />
                    <TextField
                        name={'password'}
                        value={form.password}
                        onChange={onChange}
                        label={'Senha'}
                        variant={'outlined'}
                        fullWidth
                        margin={'normal'}
                        required
                        type={'password'}
                    />
                </InputsContainer>
                <Button
                    type={'submit'}
                    fullWidth
                    variant={'contained'}
                    color={'primary'}
                >

                    Fazer Cadastro
                </Button>
            </SignUpFormContainer>
        </form>
    )
}

export default SignUpForm
