import React from 'react'

import { NavContainer, NavLink, NavActive, NavDisabled, CreateLink } from '../../styles'

interface IProps {
  path: string
}

export class Navigation extends React.Component<IProps> {
  render() {
    const { path } = this.props
    const NavPortfolio = path === 'portfolio' ? NavActive : NavLink
    const NavAbout = path === 'about' ? NavActive : NavLink

    return (
      <NavContainer>
        <nav>
          <ol>
            <li><NavPortfolio href="/">Portfolio</NavPortfolio></li>
            <li><NavAbout href="/about">About</NavAbout></li>
            <li><NavDisabled title="Moon Goals">Goals</NavDisabled></li>
            {/* <li><NavDisabled title="Moon Blog">Blog</NavDisabled></li> */}
          </ol>
        </nav>
        <nav>
          <ol>
            {/* <li><NavPortfolio href="/">Portfolio</NavPortfolio></li>
            <li><NavDisabled title="Moon Goals">Goals</NavDisabled></li> */}
            {/* <li><NavDisabled title="Moon Ranks">Ranks</NavDisabled></li>
            <li><NavDisabled title="Moon Badges">Badges</NavDisabled></li> */}
          </ol>
        </nav>
        {/* <nav>
          <ol>
            <li><NavDisabled>Login</NavDisabled></li>
            <CreateLink><NavDisabled>Create Account</NavDisabled></CreateLink>
          </ol>
        </nav> */}
      </NavContainer>
    )
  }
}
