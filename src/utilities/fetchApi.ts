import { userRequest } from "./requestMethodes";

export async function getConversations() {
	try {
		const { data } = await userRequest.get("conversation/");
		return data;
	} catch (error) {
		return error;
	}
}

export async function getUser(recipient: String) {
	try {
		const { data } = await userRequest.get(`user/getuser/${recipient}`);

		console.log("🆘 || file: fetchApi.ts:17 || data", data);

		return data;
	} catch (error) {
		return error;
	}
}
