import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        index: 0,
        message: "안녕하세요 0",
    },
    {
        index: 1,
        message: "안녕하세요 1",
    },
    {
        index: 2,
        message: "안녕하세요 2",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    };

    componentDidMount() {
        const { notifications } = this.state;

        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            }
            else {
                clearInterval(timer);
            }
        }, 1000);
    };

    render() {
        return (
            <div>
                {
                    this.state.notifications.map(
                        (notification) => {
                            return <Notification key={notification.index} message={notification.message} />;
                    }
                )
                }
            </div>
        );
    };
}

export default NotificationList;