import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Pen from './index';

storiesOf('Pen', module)
  .add('default view 1', () => (
    <Pen />
));