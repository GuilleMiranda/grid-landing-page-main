import iconSparkle from "../assets/images/icon-sparkle.svg";
import iconPlus from "../assets/images/icon-plus.svg";
import iconArrowRight from "../assets/images/icon-arrow-right.svg";
import iconTrendingUp from "../assets/images/icon-trending-up.svg";
import Menu from "../Menu";
import type { MenuType } from "../types/MenuProps";

const Main = (props: MenuType) => {
  return (
    <main className="container">
      <section className="hero">
        <h1>A classroom for every child</h1>
        <p>
          We fund the schools, train the teachers, and measure what works — so
          every child we reach today becomes a graduate tomorrow.
        </p>
      </section>
      <section className="info">
        <div className="info-header">
          <img src={iconSparkle} alt="sparkle icon" />
          <p>2.4M</p>
        </div>
        <div className="info-footer">
          <p> Students reached </p>
          <p>Across 31 countries since 2011.</p>
        </div>
      </section>
      <section className="info">
        <div className="info-header">
          <img src={iconPlus} alt="plus icon" />
          <p>1,284</p>
        </div>
        <div className="info-footer">
          <p> Schools partnered </p>
          <p>In 14 countries, from Kenya to Guatemala.</p>
        </div>
      </section>
      <section className="info">
        <div className="info-header">
          <img src={iconArrowRight} alt="right arrow icon" />
          <p>38K </p>
        </div>
        <div className="info-footer">
          <p> Teachers trained</p>
          <p> Equipped with modern tools and methodology.</p>
        </div>
      </section>
      <section className="info">
        <div className="info-header">
          <img src={iconTrendingUp} alt="trending up icon" />
          <p>3.1× </p>
        </div>
        <div className="info-footer">
          <p> Graduation lift Partner</p>
          <p> schools outperform national averages 3x.</p>
        </div>
      </section>
      <Menu isActive={props.isActive}></Menu>
    </main>
  );
};
export default Main;
