import { setLoader } from "@/redux/feature/loader/loaderSlice";
import { useDispatch } from "react-redux";


const SetLoading = (loading: boolean = false) => {
  const dispatch = useDispatch(); // Move useDispatch inside the function
  dispatch(setLoader(loading));
};