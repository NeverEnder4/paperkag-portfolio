import ReactGA from 'react-ga';

export const initGA = () => {
  // if (!window.GA_INITIALIZED) {
  //   ReactGA.initialize('UA-134497528-1');
  //   window.GA_INITIALIZED = true;
  // }
  // logPageView();
  // console.log('GA init');
};

const logPageView = () => {
  // console.log(`Loggingpageview for ${window.location.pathname}`);
  // ReactGA.set({ page: window.location.pathname });
  // ReactGA.pageview(window.location.pathname);
};

export const logEvent = (
  category = '',
  action = '',
  label = '',
  value = '',
  noInteraction = false,
) => {
  if (category && action) {
    // ReactGA.event({ category, action, label, value, noInteraction });
    console.log(
      `An event of category, ${category} has happened referencing the action, ${action} of label ${label} and value of ${value}!`,
    );
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    // React.exception({ description, fatal });
    console.log(
      `Exception thrown, description: ${description}, fatal: ${fatal}.`,
    );
  }
};

export const extractFileNameFromUrl = (url, remove) => {
  return url.replace(remove, '');
};
