import React from 'react';
import { VscGithub as GH } from 'react-icons/vsc';
import Icon from '../components/Icon';

export default function GithubLink() {
  return (
    <Icon to={`https://github.com/AdamAnSubtractM`} openInNewTab={true}>
      <GH />
    </Icon>
  );
}
