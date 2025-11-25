export function navbarToggle(bool) {
  return (dispatch) => {
    dispatch({
      type: "TOGGLE_NAVBAR",
    });
  };
}
