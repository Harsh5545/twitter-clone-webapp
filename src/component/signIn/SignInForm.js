import React, { useState } from 'react'
import CustomInput from '../../atoms/Input/CustomInput'
import { Dialog } from '@mui/material'
function SignInForm() {
   
  return (
      <>
          <Dialog>
          <CustomInput label="Phone, Email, or Username"/>


          </Dialog>
         
     
      </>
  )
}

export default SignInForm