export function setSubjectChosen(subj) {
  return {
    type: "SET_SUBJECT_CHOSEN",
    value: subj
  }
}

export function setSearchCoupons(txt) {
  return {
    type: "SEARCH_COUPONS",
    value: txt
  }
}

export function loadUsersCoupons() {
  return function(dispatch) {
    dispatch({
      type: "LOAD_USERS_COUPONS"
    });
    fetch('./usersCoupons')
    .then((response) => {
      return response.json();
    }).then((coupons) => {
      dispatch(UsersCouponsLoaded(coupons))
    })
  }
}

export function UsersCouponsLoaded(coupons) {
  return {
    type: "USERS_COUPONS_LOADED",
    value: coupons
  }
}

export function loadUser(user) {
  console.log(`here- loadUser() in actions. user: ${user}`);
  return {
    type: "USER_LOGGED_IN",
    value: user
  }
}

export function createCoupon(c) {
  console.log(c);
  return function (dispatch) {
    fetch("/coupons", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(c)
    }).then(() => dispatch(loadUsersCoupons()));
  };
}

// export function loadUser(user) {
//   return function(dispatch) {
//     dispatch({
//       type: "LOAD_USER"
//     });
//     fetch('./user')
//     .then((response) => {
//       return response.json();
//     }).then((user) => {
//       dispatch(userLoaded(user))
//     })
//   }
// }
//
// export function userLoaded(user) {
//   return {
//     type: "USER_LOGGED_IN",
//     value: user
//   }
// }
