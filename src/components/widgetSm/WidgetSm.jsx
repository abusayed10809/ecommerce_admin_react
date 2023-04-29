import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [users, setUsers] = useState();

  useEffect(() => {
    /// get user function declaration
    const getUsers = async () => {
      try {
        const res = await userRequest.get("/user?new=true");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    /// get user function call
    getUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>

      <ul className="widgetSmList">
        {users &&
          users.map((user) => (
            <li className="widgetSmListItem" key={user._id}>
              <img
                src={
                  user.img ||
                  "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                }
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.userName}</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
