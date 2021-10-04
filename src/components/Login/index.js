import React from 'react'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { theme } from '../../themes/theme'
import {styles} from './styles'
import {Controller, useForm} from 'react-hook-form'

export const Login = () => {

  const {handleSubmit, control,
    formState: {errors, isValid},
  } = useForm({mode: 'onBlur'})

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Controller
        control={control}
        name="email"
        render={({field: {onChange, value, onBlur}}) => (
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor={theme.colors.primary}
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
          />
        )}
        rules={{
          required: {
            value: true,
            message: 'E-mail não pode estar vazio'
          },
        }}
      />
      <Text style={styles.error}>{errors.email?.message}</Text>
      <Controller
        control={control}
        name="password"
        render={({field: {onChange, value, onBlur}}) => (
          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor={theme.colors.primary}
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
          />
        )}
        rules={{
          required: {
            value: true,
            message: 'Senha não pode estar vazia'
          },
          minLength: {
            value: 8,
            message: 'Senha deve ter pelo menos 8 caracteres'
          },
          maxLength: {
            value: 200,
            message: 'Senha deve ter até 200 caracteres'
          }
        }}
      />
      <Text style={styles.error}>{errors.password?.message}</Text>
      <TouchableOpacity
        disabled={!isValid}
        activeOpacity={0.7}
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}
