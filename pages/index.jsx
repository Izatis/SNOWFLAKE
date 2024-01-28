import Robot from "@/components/Robot/Robot";
import AboutsUs from "@/components/AboutUs/AboutsUs";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Reviews from "@/components/Reviews/Reviews";
import Head from "next/head";
import OurService from "./../components/OurService/OurService";
import Connect from "./../components/Connect/Connect";
import Menu from "@/components/Menu/Menu";
import Statistics from "@/components/Statistics/Statistics";
import Load from "@/components/Load/Load";

export default function Home() {
  return (
    <>
      <Head>
        <title>SNOWFLAKE</title>
        <meta name="description" content="Created by SNOWFLAKE team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="SNOWFLAKE" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Snowflake имеет богатый опыт работы с клиентами из разных отраслей,
          включая финансы, медиа, здравоохранение, розничную торговлю и многое другое.
          Наши разработчики готовы принимать вызовы любой
          сложности и гарантировать высокое качество наших услуг."
        />
        <meta
          name="SnowFlake, SNOWFLAKE, snowflake,Snowflake, snowFlake,
          Snow Flake, SNOW FLAKE, snow flake, snow Flake, Snow flake,
          Snow-Flake, SNOW-FLAKE, snow-flake,Snow-flake, snow-Flake,
          Snow - Flake, SNOW - FLAKE, snow - flake,Snow - flake, snow - Flake,
          Snow, SNOW, snow,
          Flake, FLAKE, flake,
          Dev SnowFlake, SnowFlake dev,
          Ильгиз, Ilgiz, Han, HAN, minHek,
          Акыбек, Akylbek, Akylxbet, akylxbet
          "
          content="Мы - команда специалистов, которые хотят изменить мир с помощью
          современных технологий.

          Snowflake имеет богатый опыт работы с клиентами из разных отраслей,
          включая финансы, медиа, здравоохранение, розничную торговлю и многое другое.
          Наши разработчики готовы принимать вызовы любой
          сложности и гарантировать высокое качество наших услуг.

          Мы предлагаем полный цикл услуг в области информационных технологий такие как:
          создание удобных веб-сайтов с адаптивным дизайном с оптимизацией для поисковых
          систем и разработку мобильных приложений.

          Почему именно мы? Мы готовы предложить подход к каждому клиенту, чтобы понимать
          их потребности и цели.

          Обращайтесь к нам, и мы поможем вам создать превосходный продукт и добиться
          успеха в вашем бизнесе!"
        />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <Load />
      <Hero />
      <Robot />
      <OurService />
      <Statistics />
      <Projects />
      <AboutsUs />
      <Reviews />
      <Connect />
      <Menu />
    </>
  );
}
