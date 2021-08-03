import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../components/layout";
import format from "format-number";
import { getAllDraws } from "../service/globalinfo";
import { formatDate } from "../helpers/dateformat";

const formatter = format();
export default function LotteryPage({ lotteries }) {
  const router = useRouter();
  return (
    <Layout>
      <main id="main" className="clearfix">
        <div className="wrap">
          <div id="middle" className="innerbg view-all-lottery">
            <div className="innerpage">
              <div className="all-lot-title">
                <h1>
                  Purchase Your Official Lottery Tickets Using Your BCH and BTC
                  Account
                </h1>
              </div>
              <div className="allresult_table">
                <table
                  id="myTable"
                  className="tablesorter lotteries-table"
                  border="0"
                  cellPadding="0"
                  cellSpacing="1"
                >
                  <thead>
                    <tr>
                      <th className="header">Country</th>
                      <th className="header lottery">Lottery</th>
                      <th className="header">Next draw</th>
                      <th className="header">Jackpot</th>
                    </tr>
                  </thead>
                  <tbody className="allbrands">
                    {lotteries &&
                      lotteries.map((item) => (
                        <Fragment key={item.id}>
                          <tr onClick={() => router.push(item.link)}>
                            <td>
                              <img src={item.flag} />
                              &nbsp;{item.country}
                            </td>
                            <td className="lottery">{item.name}</td>
                            <td>
                              {formatDate(
                                new Date(parseInt(item.date)),
                                "dd/mm/yyyy"
                              )}
                            </td>
                            <td>
                              <div>
                                {`${item.unit} ${formatter(item.amount)}`}
                                <Link href={`${item.link}`}>
                                  <a
                                    className="dd_play_button"
                                    style={{ float: "right" }}
                                  >
                                    Play Now
                                  </a>
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr className="spacer"></tr>
                        </Fragment>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="clear_inner">&nbsp;</div>
              <div className="resultschecker">
                <p>
                  Choose your preferred lottery from the list above, click
                  ‘Play’ and select Your Lucky Numbers. LottoWorldGroup offers
                  you the most greatest lotteries worldwide, such as the
                  Powerball and the Mega-Millions from the USA and Europe’s
                  Major lotteries such as Euro-Millions , Eurojackpot.
                </p>
                <p></p>
                <h1>Buy secure lotto tickets</h1>
                <p>
                  At LottoWorldGroup, we use the highest security standards to
                  guarantee that your payment details are safe. You buy lottery
                  ticket digitally only via secured servers – EV SSL issued by
                  GeoTrust.
                </p>
                <h1>Electronic ticket scan &amp; winning transfer service:</h1>
                <p>
                  It is a part of our service that every ticket you buy is
                  scanned and uploaded to your account up to 30 minutes before
                  each draw. Right after the draw, we announce the results and
                  automatically calculate your profits in consonance with the
                  numbers you matched. After that, all your profits are
                  transferred to your account and are displayed as ‘Real Money’
                  on your Account’s balance. You can withdraw your profits and
                  your money will be transferred to your bank account at any
                  given time.
                </p>
                <h1>Worldwide lottery collection:</h1>
                <p>
                  At LottoWorldGroup, we have gathered the greatest and most
                  profitable lottery games from in the world, so you can play to
                  win the biggest lotto jackpots in the world anytime you want.
                  As far as winning the lottery is concerned, big jackpots is
                  not all we have for you. There is a great variety of games in
                  our lottery collection. You can find lotteries such as the UK
                  Lotto, BonoLotto and Lotto649 which may not be the lotteries
                  with the biggest jackpots, but importantly, have the highest
                  winning chances. Did you know that the 6/49 lotteries have
                  much better winning odds than the big jackpot lotteries? Yes,
                  the winnings may be smaller but what really matters is that
                  they are much more frequent. By having a couple of big jackpot
                  lotteries such as the Mega Millions, Powerball or EuroMillions
                  in addition to a couple of 6/49 lotteries, you create yourself
                  a lottery portfolio of the true winner. Just combine a few big
                  jackpot lotteries to have a chance to win big and become a
                  multi-millionaire with a few best odds lotteries and to get
                  some nice winnings until you hit that big jackpot of yours!
                  When choosing our offer and playing smart, you will never lose
                  the lottery. No special expertise is required to win a lottery
                  – just play it smart, aim big and always combine lotteries
                  that will get those winnings coming to keep you going.
                </p>
                <h1>Boost your chances with a group acquisition:</h1>
                <p>
                  We now have the offer that enables you to join lottery groups
                  started by our own VIP members. Each member started a group
                  for their own lottery with up to 150 vacant seats for each
                  draw. As long as there are vacant seats, anyone can join
                  anytime and play with 50 lines per draw. You can instantly
                  boost your winning chances to any lotto game you choose. The
                  group owners selected themselves the lucky numbers for each
                  lottery, taking into consideration that some lotteries have
                  extra bonus numbers. For those special lotteries, all
                  potential combinations of the extra bonus numbers are picked
                  so there is a guaranteed win on each draw.
                  <br />
                  Purchasing lottery tickets online
                </p>
                <p>
                  Ever thought of getting lottery tickets in a more convenient
                  way? Did you know that there are no limits for you to have a
                  substantial chance of winning the lottery when using internet?
                  Anyone around the globe can play the lottery online at any
                  time with no trouble by using any online device like a
                  desktop, laptop, phone, or smartphone. Purchasing lottery
                  tickets online gives you a more comfortable, accurate, and
                  secured way to win your lucky lottery numbers. This online
                  lottery service guarantees that. There are a few simple steps
                  to help you enter the world of online lotteries. Beginners
                  have to register their online account before they can submit
                  their ticket and join the lottery. A team of professional
                  managers will supervise the game. Winners are immediately
                  notified through email alerts, free SMS, and by the customer
                  support team when the lotto results are announced online. Fair
                  and simple guidance is provided on how to claim the prizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export const getStaticProps = async (ctx) => {
  try {
    const draws = await getAllDraws();
    const lotteries = draws
      .filter(
        (draw) =>
          !(
            draw.LotteryName == "BTC Power Play" ||
            draw.LotteryName == "MegaJackpot" ||
            draw.LotteryName == "BTC Raffle 50" ||
            draw.LotteryName == "BTC Raffle 100" ||
            draw.LotteryName == "BTC Raffle 200" ||
            draw.LotteryName == "BTC Raffle 500" ||
            draw.LotteryName == "BTC Raffle 1000" ||
            draw.LotteryName == "BTC Raffle 2500" ||
            draw.LotteryName == "BTC Raffle 5000" ||
            draw.LotteryName == "BTC Raffle 10000" ||
            draw.LotteryName == "BTC Raffle 20000" ||
            draw.LotteryName == "BTC Raffle 25" ||
            draw.LotteryName == "BTC Raffle" ||
            draw.Jackpot < 0 ||
            draw.LotteryName == "BTC Raffle 25000"
          )
      )
      .filter((draw) => draw.LotteryTypeId !== 45 && draw.LotteryTypeId !== 46)
      .map((draw) => ({
        id: draw.DrawId,
        name: draw.LotteryName,
        date: new Date(draw.DrawDate).getTime(),
        image: `/images/${draw.LotteryName.toLowerCase()}1.png`,
        unit: draw.LotteryCurrency2,
        amount: draw.Jackpot,
        link: `/lotteries/${draw.LotteryName.replace(/ /g, "").toLowerCase()}`,
        country: draw.CountryName,
        flag: `/images/flag_${draw.CountryName.toLowerCase()}.png`,
      }));
    return {
      props: {
        lotteries,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        lotteries: [],
      },
      revalidate: 10,
    };
  }
};
