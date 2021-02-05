import React, { useContext, useState, useEffect } from 'react';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import styled from 'styled-components';
import PageContext from '../context/PageContext';
import MainSiteNavigation, { sitePages } from './MainSiteNavigation';
import { motion, AnimatePresence } from 'framer-motion';

const StyledLayout = styled.section`
  min-height: 100vh;
  /* main {
    min-height: 50vh;
    background-color: mediumseagreen;
    display: flex;
    justify-content: center;
    align-items: center;
  } */
`;

type LayoutProps = {
  children: React.ReactNode;
  uri: string;
};

type VariantsProps = {
  initial: {
    y: number;
    opacity: number;
  };
  enter: {
    y: number;
    opacity: number;
    transition: {
      duration: number;
      delay: number;
      when: false | 'beforeChildren' | 'afterChildren' | string;
    };
  };
  exit: {
    opacity: number;
    transition: { duration: number };
  };
};

export default function Layout({ children, ...props }: LayoutProps) {
  const { uri } = props;

  const [pageData, setPageData] = useContext(PageContext);
  const [variants, setVariants] = useState<VariantsProps>(undefined);

  const transitionConfig = {
    duration: 0.25,
    initial: {
      yAxis: 1000,
      opacity: 0,
    },
    enter: {
      yAxis: 0,
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  const variantsConfig = {
    initial: {
      y:
        pageData?.active?.order >= pageData?.previous?.order
          ? transitionConfig.initial.yAxis
          : -transitionConfig.initial.yAxis,
      opacity: transitionConfig.initial.opacity,
    },
    enter: {
      y: transitionConfig.enter.yAxis,
      opacity: transitionConfig.enter.opacity,
      transition: {
        duration: transitionConfig.duration,
        delay: transitionConfig.duration,
        when: 'beforeChildren',
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: transitionConfig.duration },
    },
  };

  const getPageData = function (uri: LayoutProps['uri']) {
    const pageData = sitePages.filter((page) => page.to === uri);
    return pageData[0];
  };

  useEffect(() => {
    setVariants(undefined);
    setPageData({
      ...pageData,
      previous: pageData?.active ? pageData.active : undefined,
      active: getPageData(uri),
    });
  }, [uri]);

  useEffect(() => {
    setVariants(variantsConfig);
  }, [pageData]);

  useEffect(() => {
    console.log(`pageData`, pageData);
    console.log(`variants`, variants);
  }, [variants]);

  return (
    <StyledLayout>
      <GlobalStyles />
      <MainSiteNavigation />
      {variants && (
        <AnimatePresence>
          <motion.main
            key={uri}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      )}
    </StyledLayout>
  );
}
