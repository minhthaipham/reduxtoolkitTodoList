// const initState = {
//   search: "",
//   status: "All",
//   priority: [],
// };
// const filterReducer = (state = initState, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case "filer/search":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filer/status":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filer/priority":
//       return {
//         ...state,
//         priority: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filterReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filter",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    filterSearch: (state, action) => {
      state.search = action.payload;
    },
    filterStatus: (state, action) => {
      state.status = action.payload;
    },
    filterPriority: (state, action) => {
      state.priority = action.payload;
    },
  },
});
