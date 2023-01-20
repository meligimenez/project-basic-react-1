import { Error404 } from '../components/Error404'
import { Home } from '../components/Home'
import { ProgressBar } from '../components/ProgressBar'
import { ShowHideMessage } from '../components/ShowHideMessage'
import { MyShowHideMessage } from '../components/myPractices/MyShowHideMessage'
import { MyProgressBar } from '../components/myPractices/MyProgressBar'
import { StopwatchTimer } from '../components/StopwatchTimer'

export const routesPublic = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/showHideMessage",
    element: <ShowHideMessage />,
  },
  {
    path: "/progressBar",
    element: <ProgressBar />,
  },
  {
    path: "/stopwatchTimer",
    element: <StopwatchTimer />,
  },
  {
    path: "/myPractices/myShowHideMessage",
    element: <MyShowHideMessage />,
  },
  {
    path: "/myPractices/myProgressBar",
    element: <MyProgressBar />,
  },
  {
    path: "/*",
    element: <Error404 />,
  }
]