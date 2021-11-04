import moment from "moment";
import { useDispatch } from "react-redux";
import { add } from "../../reducers/feeds";

export const FeedsServices = () => {
  // const dispatch = useDispatch();
  return {
    add: (e, feeds, setFile, file, user, location) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const feed = {
        location: location.formattedAddress,
        userId: user._id,
        avatar: user.avatar,
        title: user.first_name + " " + user.last_name,
        subTitle: moment().format("lll"),
        content: data.get("feed_msg"),
        comments: [],
        images: [file],
      };
      // dispatch(add(feed));
      feeds.push(feed);
      console.log(feed);
      data.delete("feed_msg");
      setFile([]);
    },

    get: () => localStorage.getItem("userId"),
    remove: () => localStorage.removeItem("userId"),
  };
};
