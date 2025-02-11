import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import userIco from "@/assets/icons/user.png";

const MyAccount = () => {
  const { userInfo } = useOutletContext();
  const { user } = useContext(AuthContext);

  return (
    <div className="flex items-center gap-8">
      <div className="space-y-4">
        <h1 className="text-6xl font-louize_medium text-primary">
          Hi, {userInfo.name}
        </h1>
        <p className="text-2xl font-maax_medium text-primary">
          Email: {userInfo.email}
        </p>
        <p className="text-2xl font-maax_medium text-primary">
          Role: {userInfo.role}
        </p>
      </div>

      <div>
        <img
          src={user.photoUrl || userIco}
          className="size-52 rounded-full inline-block"
          alt=""
        />
      </div>
    </div>
  );
};

export default MyAccount;
