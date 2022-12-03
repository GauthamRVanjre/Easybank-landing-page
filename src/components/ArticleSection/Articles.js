import React from "react";
import "./Article.css";
import currency from "../../images/image-currency.jpg";
import restaurant from "../../images/image-restaurant.jpg";
import confetti from "../../images/image-confetti.jpg";
import plane from "../../images/image-plane.jpg";

const Articles = () => {
  return (
    <>
      <section className="articles-section">
        <div className="articles-intro">
          <h3>Latest Articles</h3>
        </div>
        <div className="article-cards">
          <div className="row">
            <div className="col">
              <div class="card">
                <img src={currency} alt="currency pic" />
                <div class="card-body">
                  <p>By Claire Robinson</p>
                  <h5 class="card-title">
                    Receive money in any currency with no fees
                  </h5>
                  <p class="card-text">
                    The world is getting smaller and we’re becoming more mobile.
                    So why should you be forced to only receive money in a
                    single …
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card">
                <img src={restaurant} alt="restaurant pic" />
                <div class="card-body">
                  <p>By Wilson Hutton</p>
                  <h5 class="card-title">
                    Treat yourself without worrying about money
                  </h5>
                  <p class="card-text">
                    Our simple budgeting feature allows you to separate out your
                    spending and set realistic limits each month. That means you
                    …
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card">
                <img src={plane} alt="plane pic" />
                <div class="card-body">
                  <p>By Wilson Hutton</p>
                  <h5 class="card-title">
                    Take your Easybank card wherever you go
                  </h5>
                  <p class="card-text">
                    We want you to enjoy your travels. This is why we don’t
                    charge any fees on purchases while you’re abroad. We’ll even
                    show you …
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card">
                <img src={confetti} alt="confetti pic" />
                <div class="card-body">
                  <p>By Claire Robinson</p>
                  <h5 class="card-title">
                    Our invite-only Beta accounts are now live!
                  </h5>
                  <p class="card-text">
                    After a lot of hard work by the whole team, we’re excited to
                    launch our closed beta. It’s easy to request an invite
                    through the site ...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
