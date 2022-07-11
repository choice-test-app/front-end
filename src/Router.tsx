import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import QuestionList from "./components/QuestionList";
import Result from "./components/Result";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/question" element={<QuestionList />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
