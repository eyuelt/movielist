import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

import { APP_NAME, GITHUB_REPO_URL } from '../Constants';

const AppBarWithGithubIcon = () => (
    <AppBar
        title={APP_NAME}
        iconElementRight={
            <a href={GITHUB_REPO_URL}
               target="_blank">
                <IconButton>
                    <FontIcon className="fa fa-github" color="white"/>
                </IconButton>
            </a>
        }
    />
);

export default AppBarWithGithubIcon;