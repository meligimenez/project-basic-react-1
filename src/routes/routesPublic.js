import { Error404 } from '../components/Error404'
import { Home } from '../components/Home'
import { ProgressBar } from '../components/ProgressBar'
import { ShowHideMessage } from '../components/ShowHideMessage'
import { MyShowHideMessage } from '../components/MyShowHideMessage'
import { MyProgressBar } from '../components/MyProgressBar'

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
    path: "/myShowHideMessage",
    element: <MyShowHideMessage />,
  },
  {
    path: "/myProgressBar",
    element: <MyProgressBar />,
  },
  {
    path: "/*",
    element: <Error404 />,
  }
]