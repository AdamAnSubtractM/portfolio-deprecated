import ToastContext from '../../context/ToastContext';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { sizes } from '../theme';

/**
 * returns the current width and height of the window. updates on resize
 */
const useWindowSize = function () {
  // initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // handler to call on window resize
    const handleResize = function () {
      // set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // add event listener
    window.addEventListener('resize', handleResize);

    // call handler right away so state gets updated with initial window size
    handleResize();

    // remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

/**
 * returns whether the current window size is a "mobile" screensize
 */
const useIsMobile = function (sizeKey?: Sizes['keys']) {
  // grab current window width
  const width = useWindowSize().width;
  return sizeKey
    ? Boolean(width && width < sizes[sizeKey])
    : Boolean(width && width < sizes.lg);
};

/**
 * returns the current themeKey so that context doesn't have to be imported each time
 */
const useThemeKey = function () {
  const [appData] = useContext<[ThemeProps]>(AppContext);
  const [themeKey, setThemeKey] = useState<ThemeProps['themeKey']>(
    appData?.themeKey || `lightMode`
  );

  useEffect(() => {
    if (appData?.themeKey) {
      if (themeKey !== appData.themeKey) {
        setThemeKey(appData.themeKey);
      }
    }
  }, [appData]);

  return themeKey;
};

/**
 *
 * @param {String} key The key to store our data to
 * @param {String} defaultValue The default value to return in case the cookie doesn't exist
 */
const useCookie = (
  key: string,
  defaultValue: string
): [string, (value: string, numberofDays: number) => void] => {
  const getItem = (key: string) => {
    return document?.cookie?.split('; ').reduce((total, currentCookie) => {
      const item = currentCookie.split('=');
      const storedKey = item[0];
      const storedValue = item[1];

      return key === storedKey ? decodeURIComponent(storedValue) : total;
    }, '');
  };

  const setItem = (key: string, value: string, numberOfDays: number) => {
    if (!document) return;
    const now = new Date();
    // set the time to be now + numberOfDays
    now.setTime(now.getTime() + numberOfDays * 60 * 60 * 24 * 1000);
    document.cookie = `${key}=${value}; expires=${now.toUTCString()}; path=/`;
  };

  const getCookie = () => getItem(key) || defaultValue;
  const [cookie, setCookie] = useState(getCookie());

  const updateCookie = (value: string, numberOfDays: number) => {
    setCookie(value);
    setItem(key, value, numberOfDays);
  };

  return [cookie, updateCookie];
};

/**
 * takes a form element value and sets it to state and then returns the updated values
 *
 * @param defaults {Object}
 */
const useForm = (defaults: { [key: string]: string }) => {
  const [values, setValues] = useState(defaults);

  const updateValue = function (
    e: React.ChangeEvent<
      HTMLFormElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    // check if its a number and convert
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(e.target.value);
    }
    setValues({
      // copy the existing values into it
      ...values,
      // update the new value that changed
      [e.target.name]: value,
    });
  };

  return { values, updateValue };
};

/**
 * allows you to add a toast panel/message to your site
 */
const useToast = () => {
  const [toastItems, setToastItems] = useContext(ToastContext);

  const [autoDeleteToast, setAutoDeleteToast] = useState<{
    id: number;
    autoDeleteTime: number;
  }>(null);

  const findToastById = (id: Toast['id']) => {
    if (!toastItems.length) return false;
    return toastItems.find((item) => {
      return item.id === id;
    });
  };

  const generateToastId = () => {
    const generateId = () => Math.floor(Math.random() * 100000 + 1);
    const id = generateId();
    const isDuplicateId = Boolean(findToastById(id));
    if (isDuplicateId) {
      console.log(`Generated an id that already existed. Regenerating...`);
      setTimeout(() => {
        return generateToastId();
      }, 5);
    } else {
      return id;
    }
  };

  const addToast = (
    type: Toast['type'],
    content: Toast['content'],
    position: Toast['position'],
    autoDeleteTime?: number,
    uid?: number | string
  ) => {
    let id = uid || generateToastId();
    if (!id) {
      id = generateToastId();
    }
    const toastProperties: Toast = {
      id,
      type,
      content,
      position,
    };
    setToastItems([...toastItems, toastProperties]);
    setAutoDeleteToast({ id, autoDeleteTime });
  };

  const deleteToast = (id: Toast['id']) => {
    if (!id) return;
    const toastItem = toastItems.findIndex((item) => item.id === id);
    toastItems.splice(toastItem, 1);
    setToastItems([...toastItems]);
  };

  const autoDelete = (ms: number, id: Toast['id']) =>
    setTimeout(() => {
      deleteToast(id);
      console.log(`deleted`);
    }, ms * 1000);

  useEffect(() => {
    if (autoDeleteToast?.autoDeleteTime && autoDeleteToast?.id) {
      const { autoDeleteTime, id } = autoDeleteToast;
      autoDelete(autoDeleteTime, id);
    }
  }, [autoDeleteToast]);

  return { addToast, deleteToast };
};

export {
  useWindowSize,
  useIsMobile,
  useThemeKey,
  useCookie,
  useForm,
  useToast,
};
