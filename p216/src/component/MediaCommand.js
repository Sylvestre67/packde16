import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MediaCommand.css';
import '../assets/icons/font/css/open-iconic.css';

import IconButton from 'material-ui/IconButton';
import AvPause from 'material-ui/svg-icons/av/pause';
import AvPlayArrow from 'material-ui/svg-icons/av/play-arrow';
import CircularProgress from 'material-ui/CircularProgress';

import { withMediaProps } from 'react-media-player';

const styles = {
    smallIcon: {
        width: 36,
        height: 36,
    },
    small: {
        width: 72,
        height: 72,
        padding: 16,
    },
    mediumIcon: {
        width: 48,
        height: 48,
    },
    medium: {
        width: 96,
        height: 96,
        padding: 24,
    },
};

class MediaCommand extends Component {
    constructor(props) {
        super(props);
        this.state = { hasBeenReset: false };
    }

    componentDidMount() {
        this.props.media.playPause();
    }

    _renderPlayIcon() {
        let icon;

        if (this.props.media.currentTime > 0.1 && this.props.media.isPlaying) {
            icon = <AvPause />;
        } else if (this.props.media.currentTime === 0 && this.props.media.isPlaying) {
            icon = <CircularProgress color="black" />;
        } else {
            icon = <AvPlayArrow />;
        }

        return icon;
    }

    render() {
        return (
            <div className="media-command">
                <IconButton
                    className="media-btn"
                    style={styles.medium}
                    touch={true}
                    iconStyle={styles.mediumIcon}
                    onClick={this.props.media.playPause}
                >
                    {this._renderPlayIcon()}
                </IconButton>
            </div>
        );
    }
}

MediaCommand.propTypes = {
    media: PropTypes.object.isRequired,
};

export default withMediaProps(MediaCommand);
