import { Error404 } from '../components/Error404'
import { Home } from '../components/Home'
import { ShowHideMessage } from '../components/ShowHideMessage'
import { ProgressBar } from '../components/ProgressBar'
import { StopwatchTimer } from '../components/StopwatchTimer'
import { TaskManager } from '../components/TaskManager'
import { MyShowHideMessage } from '../components/myPractices/MyShowHideMessage'
import { MyProgressBar } from '../components/myPractices/MyProgressBar'
import { MyStopwatchTimer } from '../components/myPractices/MyStopwatchTimer'

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
    path: "/taskManager",
    element: <TaskManager />,
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
    path: "/myPractices/myStopwatchTimer",
    element: <MyStopwatchTimer />,
  },
  {
    path: "/*",
    element: <Error404 />,
  }
]
