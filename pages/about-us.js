import Layout from "../components/layout";

const About = () => (
  <Layout>
    <div className="bg-inner mt-b-20">
      <div className="hadding inner-hadding customheader">
        <div className="wrap">
          <h1>About us</h1>
          <div className="oro-aboutus-contact-us">
            <a href="">
              <img src="/images/chat_icon.png" />
              Live Chat
            </a>
            <a href="mailto:support@lottoworldgroup.com">
              <img src="/images/mail_icon.png" />
              With Us
            </a>
            <a href="">
              <img src="/images/phone_icon.png" />
              +35 725 030 326
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="wrap">
      <div className="main-content">
        <h1 className="item-title">Our Mission</h1>
        <p>
          LWGL Lotto World Group Ltd. is incorporated and operates in Nicosia
          Cyprus. It owns and operates www.LottoWorldgroup.com and related web
          sites. The web portal provides customers with an interactive
          experience that combines high technological advances with a simple
          interface that fosters a satisfying user experience.
        </p>
        <h1 className="item-title">Our Commitment</h1>
        <p>
          LWGL Lotto World Group Ltd’s mission is to provide its clients with
          top quality access and service to a wide offering of international
          lotteries. The Company has a dedicated team of well-trained customer
          support and sales team specialists who are able to provide excellent
          services, delivered in a timely and cost-effective manner, to lottery
          ticket purchasers.
        </p>
        <h1 className="item-title">Our Advantage</h1>
        <p>
          Our services included in this website acts as a portal for all major
          lotteries, where you may choose your lotto, pick your favorite numbers
          and buy your tickets.
        </p>
        <h1 className="item-title">Our Enviroment</h1>
        <p>
          Once your order is submitted our team of select local distributors
          will purchase your order with an official lottery agent and shortly
          thereafter you will receive a scanned copy of your lotto ticket in
          your account.
        </p>
        <h1 className="item-title">Contact Us</h1>
        <p>
          Send us an e-mail to:{" "}
          <a href="mailto:support@lottoworldgroup.com">
            support@lottoworldgroup.com
          </a>
        </p>
      </div>
    </div>
  </Layout>
);

export default About;
