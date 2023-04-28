import axios from "axios";
import { getAllCategories} from "./categoriesSlices";

export const getCategories = () => (dispatch) => {
    axios("/categories")
        .then((res) =>dispatch(getAllCategories(res.data)))
        .catch((e) => console.log(e));
}