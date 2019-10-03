import React from "react";
import '../src/App.css';
import TopBar from '../src/TopBar.js';
import Reactions from "../src/Reactions";
import { action } from '@storybook/addon-actions';

export default {
  title: 'Reactions',
  component: Reactions
}


const stats = {
  heartCount: 0,
  replyCount: 0,
  retweetCount: 0
};

const shareInfo = {
  text: 'Share me'
};

export const NoShares = () => <Reactions shareInfo={shareInfo} stats={stats} dispatch={action('dispatch')}/>;

NoShares.story = {
  text: 'No shares'
};