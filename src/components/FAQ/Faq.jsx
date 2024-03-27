import React from "react";
import { FaQuestion } from "react-icons/fa";

export default function Faq() {
  return (
    <div>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-white-700 dark:text-white">
            Frequently asked questions
          </h2>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <div className="mr-1 flex justify-center items-center">
                    <FaQuestion />
                  </div>
                  How did we go about building the first statistical model?
                </h3>
                <p className="text-gray-500 dark:text-gray-400 ">
                  The statistical model which is an ML model was selectively
                  trained on the past data records of a construction company
                  with departments like brickwork,concreting etc. and the labour
                  productivity was the the labelled target of 27 input
                  parameters which we reduced to 7 by feature extraction,
                  selection and dimensionality reduction algorithms for a user
                  friendly interface. We performed exploratory data analysis on
                  the dataset and after cleaning, preprocessing the data,
                  feature selection and one hot encoding several classification
                  algorithms were used to train the model. The Decision tree
                  proved to provide the best accuracy for labour productivity
                  with 86% and was chosen as the final model for prediction. An
                  overview of the statistical data analysis is also provided on
                  the website to better track the future productivity of the
                  workers and can be updated with time to monitor better.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <div className="mr-1 mb-6 flex justify-center items-center">
                    <FaQuestion />
                  </div>
                  How does the second AI model help determine the labour
                  productivity ?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A company's employees' sentiments towards the work culture
                  tells a lot about the productivity the company can expect from
                  them. Generally, happy employees yield high productivity and
                  our model extracts the sentiments of the employees through a
                  social media(Twitter) and gives us an overall estimate of the
                  productivity we can expect.
                </p>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <div className="mr-1 flex justify-center items-center">
                    <FaQuestion />
                  </div>
                  Is the AI model automated? How exactly does it work?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Yes, the model is automated in the sense that it automatically
                  fetches L&T tagged tweets from the past 24 hours and does
                  their sentiment analysis and provides a statistical percentage
                  of the positive, negative and neutral sentiments while also
                  displaying the most positive, negative and neutral tweets side
                  by side every 24 hours. This way by creating a unique hashtag
                  the company can analyse general tweets about L&T as well as
                  tweets from employees with specifically curated company
                  hashtags every 24 hours automatically.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <div className="mr-1 flex justify-center items-center">
                    <FaQuestion />
                  </div>
                  How can Larsentoubro use this in real time and the future
                  scope?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  L&T can keep a track of the overall labour productivity of its
                  workers in the long run by setting tracking time periods as
                  well as it can analyse the sentiments about the company every
                  24 hours so that the company can take action about the
                  negative sentiments immediately or do something about the
                  workers' sentiments to boost the productivity.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <div className="mr-1 flex justify-center items-center">
                    <FaQuestion />
                  </div>
                  5. What technologies were used while building the prototype?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Several frontend, backend and ML/AI tech stacks were used,
                  namely: Frontend - Three-JS,React-JS,TypeScript Backend -
                  Nodejs,ExpressJS ML - Pandas, Numpy, Matplotlib,Seaborn,
                  Scipy, Scikit-learn, Classification Models(Logistic
                  regression/Decision Trees/Random Forests) Transformers,
                  RoBERTa model, NLP Media-Scraping software - Twscrape Web
                  hosting - AWS, Docker
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
