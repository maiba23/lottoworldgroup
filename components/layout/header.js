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
              <li
                id="menu-item-1395"
                className="lottary-play show-dd menu-item menu-item-type-post_type menu-item-object-page menu-item-1395"
              >
                <div className="menu-arrow"></div>
                <div className="menu-arrow"></div>
                <div className="menu-arrow"></div>
                <a href="#">Lotteries</a>
              </li>
              <li
                id="menu-item-1394"
                className="lottary-info show-dd menu-item menu-item-type-post_type menu-item-object-page menu-item-1394"
              >
                <div className="menu-arrow"></div>
                <div className="menu-arrow"></div>
                <div className="menu-arrow"></div>
                <a href="#">Results</a>
              </li>
              <li
                id="menu-item-1381"
                className="nav-item-my-account nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1381 show-sign-up"
              >
                <div className="menu-arrow"></div>
                <div className="menu-arrow"></div>
                <div className="menu-arrow"></div>
                <Link href="/users/account">My Account</Link>
              </li>
              <li
                id="menu-item-1382"
                className="nav-item menu-item menu-item-type-post_type menu-item-object-page menu-item-1382"
              >
                <div className="menu-arrow"></div>
                <div className="menu-arrow"></div>
                <div className="menu-arrow"></div>
                <Link href="/support">Support</Link>
              </li>
            </ul>
            <div className="wrap-cta">
              <Link href="/login-signup">
                <a className="show-sign-in">
                  <i className="fas fa-sign-in-alt"></i>Log in
                </a>
              </Link>
              <Link href="/login-signup">
                <a className="show-sign-up">
                  <i className="fas fa-edit"></i>Register
                </a>
              </Link>
            </div>
            <Link href="/cart">
              <a className="paymentheadercontrol"></a>
            </Link>
          </div>

          <div className="wrap-popups hidden-xs">
            <div className="playlottary  hidden-xs" style={{ display: "none" }}>
              <div
                id="navbar-item-lotto-games"
                className="dropdown-menu"
                style={{ display: "none" }}
              >
                <div
                  id="lotto-games-container"
                  className="lotto-games-container"
                >
                  <div className="lotto-games-content">
                    <ul className="menu-games">
                      <li className="menu-item beton">
                        <div className="menu-arrow"></div>
                        <div className="menu-arrow"></div>
                        <div className="menu-arrow"></div>
                        <div className="item-header">
                          <div className="brand-logo">
                            <img
                              src="/images/logos/megamillions1.png"
                              title="Irish Lotto"
                              style={{ visibility: "visible" }}
                            />
                          </div>
                          <div className="brand-prize">
                            <h2 className="prize">$166M</h2>
                          </div>
                          <div className="brand-name">megamillions</div>
                        </div>
                        <div className="item-body">
                          <div className="brand-command">
                            <Link
                              href="/megamillions-lottery/"
                              className="play-beton"
                            >
                              PLAY
                            </Link>
                          </div>
                          <div className="timer" data-days="5">
                            <span className="timer-value">
                              23 hours 36 minutes
                            </span>
                          </div>
                        </div>
                        <div className="item-footer">
                          <div className="subscription-link">
                            <Link href="/megamillions-lottery/">
                              Syndicate &gt;
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="menu-item beton">
                        <div className="menu-arrow"></div>
                        <div className="menu-arrow"></div>
                        <div className="menu-arrow"></div>
                        <div className="item-header">
                          <div className="brand-logo">
                            <img
                              src="/images/logos/euromillions1.png"
                              title="Irish Lotto"
                              style={{ visibility: "visible" }}
                            />
                          </div>
                          <div className="brand-prize">
                            <h2 className="prize">$53M</h2>
                          </div>
                          <div className="brand-name">euromillions</div>
                        </div>
                        <div className="item-body">
                          <div className="brand-command">
                            <Link
                              href="/euromillions-lottery/"
                              className="play-beton"
                            >
                              PLAY
                            </Link>
                          </div>
                          <div className="timer" data-days="5">
                            <span className="timer-value">
                              23 hours 36 minutes
                            </span>
                          </div>
                        </div>
                        <div className="item-footer">
                          <div className="subscription-link">
                            <Link href="/euromillions-lottery/">
                              Syndicate &gt;
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lotto-games-footer">
                  <Link href="/lotteries">See all lotteries</Link>
                </div>
              </div>
            </div>
            <div className="result_info" style={{ display: "none" }}>
              <div
                id="navbar-item-result"
                className="dropdown-menu hidden-xs"
                style={{ display: "block" }}
              >
                <p className="latest-results">Latest Results</p>
                <div
                  className="results-info-box-content"
                  style={{ minHeight: "250px" }}
                >
                  <div
                    className="results-info-box-content-result"
                    style={{ display: "block" }}
                  >
                    <ul className="menu-result-container">
                      <li className="res-menu-item">
                        <div className="menu-info-line info-line-logo">
                          <img
                            src="/images/logos/lotto6491.png"
                            alt="lotto649"
                            title="lotto649"
                            style={{ visibility: "visible" }}
                          />
                        </div>
                        <div className="menu-info-line info-line-brand">
                          <div className="info-brand-name">Lotto649</div>
                          <div className="info-brand-timer">f 28 Jul</div>
                        </div>
                        <div className="menu-info-line info-line-numbers"></div>
                        <div
                          className="menu-info-line info-line-text"
                          style={{ display: "none" }}
                        >
                          <Link href="/powerball-results/">More Results</Link>
                          <br />
                          <Link href="/powerball-info/">More Info</Link>
                        </div>
                        <div className="menu-info-line info-line-command">
                          <Link
                            href="/powerball-lottery/"
                            className="play-now-btn"
                          >
                            PLAY
                          </Link>
                        </div>
                      </li>
                      <li className="res-menu-item">
                        <div className="menu-info-line info-line-logo">
                          <img
                            src="/images/logos/powerball1.png"
                            alt="powerball"
                            title="powerball"
                            style={{ visibility: "visible" }}
                          />
                        </div>
                        <div className="menu-info-line info-line-brand">
                          <div className="info-brand-name">Powerball</div>
                          <div className="info-brand-timer">f 28 Jul</div>
                        </div>
                        <div className="menu-info-line info-line-numbers"></div>
                        <div
                          className="menu-info-line info-line-text"
                          style={{ display: "none" }}
                        >
                          <Link href="/powerball-results/">More Results</Link>
                          <br />
                          <Link href="/powerball-info/">More Info</Link>
                        </div>
                        <div className="menu-info-line info-line-command">
                          <Link
                            href="/powerball-lottery/"
                            className="play-now-btn"
                          >
                            PLAY
                          </Link>
                        </div>
                      </li>
                      <li className="res-menu-item">
                        <div className="menu-info-line info-line-logo">
                          <img
                            src="/images/logos/megamillions1.png"
                            alt="megamillions"
                            title="megamillions"
                            style={{ visibility: "visible" }}
                          />
                        </div>
                        <div className="menu-info-line info-line-brand">
                          <div className="info-brand-name">Megamillions</div>
                          <div className="info-brand-timer">f 27 Jul</div>
                        </div>
                        <div className="menu-info-line info-line-numbers">
                          <div className="draw-number draw-number-type-1">
                            2
                          </div>
                          <div className="draw-number draw-number-type-1">
                            35
                          </div>
                          <div className="draw-number draw-number-type-1">
                            36
                          </div>
                          <div className="draw-number draw-number-type-1">
                            54
                          </div>
                          <div className="draw-number draw-number-type-1">
                            64
                          </div>
                          <div className="draw-number draw-number-type-2">
                            11
                          </div>
                        </div>
                        <div
                          className="menu-info-line info-line-text"
                          style={{ display: "none" }}
                        >
                          <Link href="/powerball-results/">More Results</Link>
                          <br />
                          <Link href="/powerball-info/">More Info</Link>
                        </div>
                        <div className="menu-info-line info-line-command">
                          <Link
                            href="/powerball-lottery/"
                            className="play-now-btn"
                          >
                            PLAY
                          </Link>
                        </div>
                      </li>
                      <li className="res-menu-item">
                        <div className="menu-info-line info-line-logo">
                          <img
                            src="/images/logos/euromillions1.png"
                            alt="euromillions"
                            title="euromillions"
                            style={{ visibility: "visible" }}
                          />
                        </div>
                        <div className="menu-info-line info-line-brand">
                          <div className="info-brand-name">Euromillions</div>
                          <div className="info-brand-timer">f 27 Jul</div>
                        </div>
                        <div className="menu-info-line info-line-numbers">
                          <div className="draw-number draw-number-type-1">
                            5
                          </div>
                          <div className="draw-number draw-number-type-1">
                            9
                          </div>
                          <div className="draw-number draw-number-type-1">
                            19
                          </div>
                          <div className="draw-number draw-number-type-1">
                            21
                          </div>
                          <div className="draw-number draw-number-type-1">
                            25
                          </div>
                          <div className="draw-number draw-number-type-2">
                            10
                          </div>
                          <div className="draw-number draw-number-type-2">
                            12
                          </div>
                        </div>
                        <div
                          className="menu-info-line info-line-text"
                          style={{ display: "none" }}
                        >
                          <Link href="/powerball-results/">More Results</Link>
                          <br />
                          <Link href="/powerball-info/">More Info</Link>
                        </div>
                        <div className="menu-info-line info-line-command">
                          <Link
                            href="/powerball-lottery/"
                            className="play-now-btn"
                          >
                            PLAY
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="results-info-box results-footer">
                  <div className="panel">
                    <div className="panel-footer">
                      <div className="subscribe">
                        <Link
                          href="/lottery-results"
                          title=""
                          className="subscribe-txt"
                        >
                          Click HERE for Lottery Results and Winning Numbers
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
