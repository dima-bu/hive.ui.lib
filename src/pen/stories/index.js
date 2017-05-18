import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Pen from '../index';

storiesOf('SVGs', module)
  .add('Pen', () => (
    <Pen />
  ));