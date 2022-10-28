import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Blog from "./pages/blog";
import BadHeaders from "./pages/bad-headers";
import GoodHeaders from "./pages/good-headers";
import BadNavigation from "./pages/bad-navigation";
import GoodNavigation from "./pages/good-navigation";
import BadForm from "./pages/bad-form";
import GoodForm from "./pages/good-form";
import GoodList from "./pages/good-list";
import BadList from "./pages/bad-list";
import BadDescribe from "./pages/bad-describedby";
import GoodDescribe from "./pages/good-describedby";
import NewWindow from "./pages/new-window";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="bad-headers" element={<BadHeaders />} />
                    <Route path="good-headers" element={<GoodHeaders />} />
                    <Route path="bad-navigation" element={<BadNavigation />} />
                    <Route path="good-navigation" element={<GoodNavigation />} />
                    <Route path="bad-form" element={<BadForm />} />
                    <Route path="good-form" element={<GoodForm />} />
                    <Route path="good-list" element={<GoodList />} />
                    <Route path="bad-list" element={<BadList />} />
                    <Route path="bad-describeby" element={<BadDescribe />} />
                    <Route path="good-describeby" element={<GoodDescribe />} />
                    <Route path="new-window" element={<NewWindow />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));