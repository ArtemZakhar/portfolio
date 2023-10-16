import { createContext, useEffect, useState } from 'react';

const NotificationContext = createContext({
 notification: null,
 showNotification: function (notificationData) {},
 hideNotification: function () {},
});

export function NotificationContextProvider(props) {
 const [activeNotification, setActiveNotofocation] = useState();

 useEffect(() => {
  if (activeNotification && (activeNotification.status === 'success' || activeNotification.status === 'error')) {
   const timer = setTimeout(() => {
    hideNotificationHandler();
   }, 3000);

   return () => {
    clearTimeout(timer);
   };
  }
 }, [activeNotification]);

 function showNotificationHandler(notificationData) {
  setActiveNotofocation(notificationData);
 }

 function hideNotificationHandler() {
  setActiveNotofocation(null);
 }

 const contex = {
  notification: activeNotification,
  showNotification: showNotificationHandler,
  hideNotification: hideNotificationHandler,
 };

 return <NotificationContext.Provider value={contex}>{props.children}</NotificationContext.Provider>;
}

export default NotificationContext;
