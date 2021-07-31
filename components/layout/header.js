import Link from "next/link";

const Header = () => {
  return (
    <header id="header" className="clearfix">
      <div className="wrap">
        <Link href="/">
          <a className="logo">LWG</a>
        </Link>
        <a href="#" data-href="nav" className="mobile-trigger trigger-nav">
          <i>
            <span className="line-1"></span> <span className="line-2"></span>
            <span className="line-3"></span>
          </i>
        </a>
        <div id="menu-container">
          <div className="wrap-top-menu">
            <ul id="menu-header-menu" className="top-menu">
              <li className="lottary-play show-dd menu-item menu-item-type-post_type menu-item-object-page menu-item-1395">
                <Link href="/lottery">Lotteries</Link>
              </li>
              <li className="lottary-info show-dd menu-item menu-item-type-post_type menu-item-object-page menu-item-1394">
                <Link href="/lottery-results">Results</Link>
              </li>
              <li className="nav-item-my-account nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1381 show-sign-up">
                <Link href="/users/account">My Account</Link>
              </li>
              <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1382">
                <Link href="/support">Support</Link>
              </li>
            </ul>
            <div className="wrap-cta">
              <Link href="/auth/login">
                <a className="show-sign-in">
                  <i className="fas fa-sign-in-alt"></i>Log in
                </a>
              </Link>
              <Link href="/auth/signup">
                <a className="show-sign-up">
                  <i className="fas fa-edit"></i>Register
                </a>
              </Link>
            </div>
            <Link href="/cart">
              <a className="paymentheadercontrol"></a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
