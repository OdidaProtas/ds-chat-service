import fetchUser from "../../util/fetchUser";

const userDetail = async (socket, next) => {
  try {
    const user = await fetchUser(socket);
    socket.user = user;
  } catch (e) {
    next(new Error("unknown user"));
  }
};

export const user = {
  userDetail,
};
