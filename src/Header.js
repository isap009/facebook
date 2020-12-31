import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, Icon, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';
function Header() {
    const [{user},dispatch]=useStateValue();
    return (
        <div className="header">
            <div className="header_left">
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDExMi4xOTYgMTEyLjE5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTEyLjE5NiAxMTIuMTk2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiMzQjU5OTg7IiBjeD0iNTYuMDk4IiBjeT0iNTYuMDk4IiByPSI1Ni4wOTgiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTcwLjIwMSw1OC4yOTRoLTEwLjAxdjM2LjY3Mkg0NS4wMjVWNTguMjk0aC03LjIxM1Y0NS40MDZoNy4yMTN2LTguMzQNCgkJYzAtNS45NjQsMi44MzMtMTUuMzAzLDE1LjMwMS0xNS4zMDNMNzEuNTYsMjEuODF2MTIuNTFoLTguMTUxYy0xLjMzNywwLTMuMjE3LDAuNjY4LTMuMjE3LDMuNTEzdjcuNTg1aDExLjMzNEw3MC4yMDEsNTguMjk0eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
            <div className="header_input">
            <SearchIcon></SearchIcon>
            <input type="text" placeholder="Search Facebook"></input>
            </div>
            </div>
            <div className="header_center">
                <div className="header_option header_option--active">
                <HomeIcon fontSize="large"></HomeIcon>
                </div>
                <div className="header_option">
                <FlagIcon fontSize="large"></FlagIcon>
                </div>
                <div className="header_option">
                <SubscriptionsIcon fontSize="large"></SubscriptionsIcon>
                </div>
                <div className="header_option">
                <StorefrontIcon fontSize="large"></StorefrontIcon>
                </div>
                <div className="header_option">
                <SupervisedUserCircleIcon fontSize="large" ></SupervisedUserCircleIcon>
                </div>
            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar src={user.photoURL}></Avatar>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon></AddIcon>
                </IconButton>
                <IconButton>
                    <ForumIcon></ForumIcon>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon></NotificationsActiveIcon>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon></ExpandMoreIcon>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
