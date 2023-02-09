export interface MessageType {
	_id: string;
	sender: string;
	body: string;
	time: string;
}
export interface ConversationType {
	_id: string;
	participants: Array<String>;
	messages: Array<MessageType>;
	createdAt: string;
}

export interface MutationMessage {
	conversationId: String;
	body: String;
}
