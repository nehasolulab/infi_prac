import { call, put } from "redux-saga/effects";
import { getUserFetchSucess } from "../../reducer/user/userSlice";

export function* watchUserFetch () {
    const users = yield call(()=> fetch("https://reqres.in/api/users?page=1"))
    const formattedUser = yield users.json();
    const data = formattedUser.data
    yield put(getUserFetchSucess(data));

}
