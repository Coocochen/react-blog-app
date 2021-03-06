import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { CSSTransition } from 'react-transition-group';
import { Link, withRouter, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {
  Logo
} from '../style';
import BlogListManager from '../pages/bloglistmanager/loadable';
import CommentManager from '../pages/commentmanager/loadable';
import PhotosManager from '../pages/photosmanager/loadable'
import TagsManager from '../pages/tagsmanager/loadable';

const { Header, Sider, Content } = Layout;

class SideMenu extends React.PureComponent {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <Menu
              theme="white"
              mode="inline"
              defaultSelectedKeys={['1']}
              style={{ height: '100%' }}
            >
              <CSSTransition
                in={this.state.collapsed}
                timeout={200}
                classNames="logo"
              >
                <Logo />
              </CSSTransition>
              <Menu.Item key="1">
                <Link to={'/admin/bloglistmanager'}>
                  <Icon type="user" />
                  <span>博客管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to={'/admin/tagsmanager'}>
                  <Icon type="video-camera" />
                  <span>标签管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to={'/admin/photosmanager'}>
                  <Icon type="upload" />
                  <span>相册管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to={'/admin/commentmanager'}>
                  <Icon type="upload" />
                  <span>评论管理</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ zIndex: 999 }}>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                style={{ fontSize: 20, marginLeft: 20 }}
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 700,
              }}
            >
              <Switch>
                <Route path="/admin/bloglistmanager" exact component={BlogListManager} />
                <Route path="/admin/commentmanager" exact component={CommentManager} />
                <Route path="/admin/photosmanager" exact component={PhotosManager} />
                <Route path="/admin/tagsmanager" exact component={TagsManager} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}


export default withRouter(SideMenu);