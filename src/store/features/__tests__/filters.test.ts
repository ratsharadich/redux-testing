import { ChangeType } from "../filters/constants";
import { filtersReducer } from "../filters/index";
import { ACTIONS } from "../filters/constants";
import { StatusFilters } from "../filters/interfaces";

const initialState = {
  status: StatusFilters.ALL,
  colors: ["red", "yellow"],
};

describe("Reducer of filters", () => {
  describe("Change status filter", () => {
    it("Filter is set to ALL", () => {
      const action = {
        type: ACTIONS.STATUS,
        payload: { status: StatusFilters.ALL },
      };

      const result = filtersReducer(initialState, action);
      const { status } = result;

      expect(status).toBe(StatusFilters.ALL);
    });

    it("Filter is set to ACTIVE", () => {
      const action = {
        type: ACTIONS.STATUS,
        payload: { status: StatusFilters.ACTIVE },
      };

      const result = filtersReducer(initialState, action);
      const { status } = result;

      expect(status).toBe(StatusFilters.ACTIVE);
    });

    it("Filter is set to COMPLETED", () => {
      const action = {
        type: ACTIONS.STATUS,
        payload: { status: StatusFilters.COMPLETED },
      };

      const result = filtersReducer(initialState, action);
      const { status } = result;

      expect(status).toBe(StatusFilters.COMPLETED);
    });
  });

  describe("Change color filter", () => {
    it("Filter is set to ADDED && color is included", () => {
      const action = {
        type: ACTIONS.COLOR,
        payload: { color: "red", changeType: ChangeType.ADDED },
      };

      const result = filtersReducer(initialState, action);
      const { colors } = result;

      expect(colors.includes("red")).toBe(true);
    });

    it("Filter is set to ADDED && color is not included", () => {
      const action = {
        type: ACTIONS.COLOR,
        payload: { color: "green", changeType: ChangeType.ADDED },
      };

      const result = filtersReducer(initialState, action);
      const { colors } = result;

      expect(colors.includes("green")).toBe(true);
    });

    it("Filter is set to REMOVED", () => {
      const action = {
        type: ACTIONS.COLOR,
        payload: { color: "red", changeType: ChangeType.REMOVED },
      };

      const result = filtersReducer(initialState, action);
      const { colors } = result;

      expect(colors.includes("red")).toBe(false);
    });
  });
});
