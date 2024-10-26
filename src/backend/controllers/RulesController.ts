import { Response } from "miragejs";
/**
 * All the routes related to Category are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all categories in the db.
 * send GET Request at /api/colors
 * */

export const getRulesHandler = function (this:any) {
	try {
		return new Response(200, {}, { rules: this.db.rules });
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};