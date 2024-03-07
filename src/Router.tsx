import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./DefaultLayout";
import { Blog } from "./pages/Blog";
import { Posts } from "./pages/Posts";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />}></Route>
        <Route path="/" element={<Posts />}></Route>
      </Route>
    </Routes>
  );
}
