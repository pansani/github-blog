import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./DefaultLayout";
import { Blog } from "./pages/Blog";
import { PostDetailed } from "./pages/PostDetailed";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />}></Route>
        <Route path="/post/:issueId" element={<PostDetailed />} />
      </Route>
    </Routes>
  );
}
