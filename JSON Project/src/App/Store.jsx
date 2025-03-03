import ApiSlice from "../Features/ApiSlice";

export const store = configueStore({
  reducer: {
    ApiReducer: ApiSlice,
  },
});
