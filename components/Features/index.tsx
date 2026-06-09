import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="pb-8 pt-20 bg-white dark:bg-dark lg:pb-17.5 lg:pt-30">
      <div className="container">
        <SectionTitle
          subtitle="Features"
          title="What we offer"
          paragraph="These are the services we offer to our clients."
        />

        <div className="-mx-4 mt-12 grid grid-cols-2 gap-1 sm:gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:mt-20">
          {featuresData?.slice(0, 30)?.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
