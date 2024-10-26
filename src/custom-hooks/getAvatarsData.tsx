import axios from "axios";
import { useEffect, useState } from "react";

const useGetAvatarsData = () => {
	const [avatarsData, setAvatarsData] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(`/api/avatars`);
				setAvatarsData(response.data.avatars);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return avatarsData;
};

export { useGetAvatarsData };
