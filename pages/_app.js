import Layouts from "@/components/Layouts/Layouts";
import "@/styles/globals.css";
import "@/styles/ProjectSlider.css";
import "@/styles/ReviewsSlider.css";
import "@/styles/StatisticsSlide.css";
import "@/styles/Connect.css";
import Load from "@/components/Load/Load";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
}
