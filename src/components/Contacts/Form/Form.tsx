import React, { useState } from 'react'
import { Button, FormControl, TextField, Typography } from '@mui/material'

export default function Form() {

 const [formData, setFormData] = useState({
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
 })

 const [fieldsFilled, setFieldsFilled] = useState(true);
 const [emailError, setEmailError] = useState(false);

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });

  if (name === 'email') {
   validateForm();
  }

  if (name === 'phone') {
   const phone = value.replace(/\D/g, '');
   if (phone.length > 11) {
    return;
   }
   setFormData({ ...formData, [name]: phone });
  }

  if (Object.values(formData).every((value) => value !== '')) {
   setFieldsFilled(false);
   return;
  }
  setFieldsFilled(true);
 }

 const validEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
 }

 const validateForm = () => {
  if (!validEmail(formData.email)) {
   setEmailError(true);
   return;
  }
  setEmailError(false);
 }

 const handleSendForm = async () => {

  alert('Formulário enviado com sucesso!');

  // try {
  //  const response = await fetch('/api/send-email', {
  //   method: 'POST',
  //   headers: {
  //    'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(formData),
  //  });

  //  if (response.ok) {
  //   console.log('Email sent successfully');
  //  } else {
  //   console.log('Failed to send email');
  //  }
  // } catch (error) {
  //  console.error('Error sending email:', error);
  // }
 }

 return (
  <div className='form'
  >
   <Typography variant="h6">Você também pode entrar em contato conosco por meio desse formulário:</Typography>
   <FormControl
    component="form"
    style={{
     display: 'flex',
     flexDirection: 'column',
     gap: '1rem',
     justifyContent: 'center',
    }}
   >
    <TextField
     type="text"
     label="Nome"
     variant="standard"
     name='name'
     value={formData.name}
     onChange={handleChange}
    />
    <TextField
     type="text"
     label="Telefone"
     variant="standard"
     name='phone'
     value={formData.phone}
     onChange={handleChange}
    />
    <TextField
     type="email"
     label="Email"
     variant="standard"
     name='email'
     error={emailError}
     helperText={emailError ? 'Email inválido' : ''}
     onChange={handleChange}
     value={formData.email} />
    <TextField
     type="text"
     label="Assunto"
     variant="standard"
     name='subject'
     value={formData.subject}
     onChange={handleChange}
    />
    <TextField
     type="text"
     label="Mensagem"
     variant="standard"
     name='message'
     multiline
     rows={4}
     value={formData.message}
     onChange={handleChange}
    />
    <Typography variant="caption">*Todos os campos são obrigatórios</Typography>
    <Typography variant="caption">**Todos os dados fornecidos serão mantidos em sigilo</Typography>
    <Button
     variant="contained"
     disabled={fieldsFilled || emailError}
     onClick={handleSendForm}>
     Enviar
    </Button>
   </FormControl>

  </div >
 )
}
