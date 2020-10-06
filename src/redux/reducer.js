let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type === "DATASET_ADD")
    return [
      ...state,
      {
        id: ++lastId,
        name: action.payload.name,
        inUse: false,
      },
    ];
  else if (action.type === "DATASET_SELECTED")
    return state.map(dataset => dataset.name !== action.payload.name ? {...dataset, inUse:false} : {...dataset, inUse:true});

  return state;
}
