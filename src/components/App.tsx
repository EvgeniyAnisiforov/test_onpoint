import PageOne from "./pages/Page_1/PageOne"
import PageTwo from "./pages/Page_2/PageTwo"
import PageThree from "./pages/Page_3/PageThree"
import SwipeablePages from "./SwipeablePages"

export const App = () => {
  return (
    <SwipeablePages>
      <PageOne />
      <PageTwo />
      <PageThree />
    </SwipeablePages>
  )
}
