import React from 'react';
import moment from 'moment';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

import './TicketStatusTimelineBox.css';

class TicketStatusTimelineBox extends React.PureComponent {

  render() {
    const { text } = this.props;

    return (
        <div className="statusTimelineBox">
            <div className="shadow">
                <div className="statusTimelineList">
                    {text}
                </div>
            </div>
        </div>
    );
  }
}

export default TicketStatusTimelineBox;