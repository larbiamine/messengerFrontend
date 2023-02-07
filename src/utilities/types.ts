interface Message {
	sender: string;
	body: string;
	time: string;
}
export interface Conversation {
	_id: String;
	participants: Array<String>;
	messages: Array<Message>;
	createdAt: string;
}
