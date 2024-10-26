import axios from "axios";
import { useEffect, useState } from "react";
const useGetCategoriesData = () => {
	const [categoriesData, setCategoriesData] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get("/api/categories");
				setCategoriesData(response.data.categories);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return categoriesData;
};

export { useGetCategoriesData };
