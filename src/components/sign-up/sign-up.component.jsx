import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth } from 'google-auth-library';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';
import './sign-up.styles.scss';