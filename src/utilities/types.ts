interface Message {
	_id: string;
	sender: string;
	body: string;
	time: string;
}
export interface ConversationType {
	_id: String;
	participants: Array<String>;
	messages: Array<Message>;
	createdAt: string;
}

export interface MutationMessage {
	conversationId: String;
	body: String;
}
