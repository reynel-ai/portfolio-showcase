import { useEffect } from "react";
import { Redirect, Route, Switch, useLocation } from "wouter";
import { MotionConfig } from "framer-motion";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import Home from "@/pages/Home";
import Work from "@/pages/Work";
import NotFound from "@/pages/not-found";

/** Start each new page at the top unless the URL points at a section. */
function ScrollReset() {
  const [location] = useLocation();
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/work" component={Work} />
      {/* Old routes from the previous site, kept so existing links still land somewhere useful */}
      <Route path="/about">{() => <Redirect to="/#about" replace />}</Route>
      <Route path="/experience">{() => <Redirect to="/#about" replace />}</Route>
      <Route path="/skills">{() => <Redirect to="/#about" replace />}</Route>
      <Route path="/contact">{() => <Redirect to="/#contact" replace />}</Route>
      <Route path="/projects">{() => <Redirect to="/work#analysis" replace />}</Route>
      <Route path="/dashboards">{() => <Redirect to="/work#dashboards" replace />}</Route>
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MotionConfig reducedMotion="user">
        <ScrollReset />
        <Router />
      </MotionConfig>
    </QueryClientProvider>
  );
}
