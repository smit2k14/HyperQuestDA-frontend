export const DATASET_ADD = (name) => ({
  type: "DATASET_ADD",
  payload: {
    name,
  },
});

export const DATASET_SELECTED = (name) => ({
  type: "DATASET_SELECTED",
  payload: {
    name,
  },
});

export var runonce = 0;
