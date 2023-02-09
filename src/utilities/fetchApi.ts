import { userRequest } from "./requestMethodes";
import { MutationMessage } from "./types";

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

		return data;
	} catch (error) {
		return error;
	}
}

export async function sendMessage(variables: MutationMessage) {
	try {
		const { data } = await userRequest.post(
			"conversation/sendmessage",
			variables
		);

		return data;
	} catch (error) {
		return error;
	}
}
