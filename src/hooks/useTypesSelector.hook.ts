import {TypedUseSelectorHook, useSelector} from "react-redux";
import {reducersType} from "../redux";

export const useTypesSelector:TypedUseSelectorHook<reducersType> = useSelector