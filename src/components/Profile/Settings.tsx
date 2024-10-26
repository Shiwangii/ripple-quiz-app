import { useAuth, useLogin, useProfile, useRegister } from "context";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { updateUserHandler } from "utils";
const Settings = () => {
	const { authDispatch, authState } = useAuth();
	const { loginDispatch } = useLogin();
	const { registerDispatch } = useRegister();
	const { avatarsData } = useProfile();
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.clear();
		authDispatch({ type: "LOGOUT" });
		loginDispatch({ type: "RESET" });
		registerDispatch({ type: "RESET" });
		navigate("/");
	};
	const handleAvatarChange = (e: FormEvent, avatar: string) =>
		updateUserHandler(e, { avatar: avatar }, authDispatch, authState);

	return (
		<div className="profile-container">
			<div className="profile-header flex-row justify-content-space-between align-center flex-wrap p-5 my-0 mx-5">
				<h1 className="p-2 mauthy-2 mx-0">Settings</h1>
			</div>
			<ul className="profile-list p-5">
				<li className="no-list">
					<div className="flex-row justify-content-space-between align-center flex-wrap">
						<h3>Choose Avatar: </h3>
						<div className="flex-row justify-content-start align-center flex-wrap flex-gap-2 m-5">
							{avatarsData?.length &&
								avatarsData?.map(({ _id, avatarURL }: {_id: string, avatarURL: string}) => (
									<label
										className={`circle-container flex-row justify-content-center align-center ${
											authState.avatar === avatarURL ? "avatar-selected" : ""
										}`}
										key={_id}
									>
										<input
											className="filters"
											type="radio"
											name="icon"
											value={avatarURL}
											checked={authState.avatar === avatarURL ? true : false}
											onChange={(e) => handleAvatarChange(e, avatarURL)}
										/>
										<img
											src={avatarURL}
											alt="User Profile Picture"
											className="avatar b-radius-circle m cursor-pointer"
											aria-label="User Profile Avatar"
										/>
									</label>
								))}
						</div>
					</div>
				</li>
				<li className="no-list">
					<button
						className="primary-btn log-out-btn cursor-pointer p-5 b-radius-2 mx-5 my-0 text-bold"
						onClick={handleLogout}
						type="button"
					>
						Log Out
					</button>
				</li>
			</ul>
		</div>
	);
};

export { Settings };
