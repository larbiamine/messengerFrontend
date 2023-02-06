export interface loginUser {
	username: string | FormDataEntryValue | null;
	password: string | FormDataEntryValue | null;
}

export interface registerUser {
	username: string | FormDataEntryValue | null;
	email: string | FormDataEntryValue | null;
	password: string | FormDataEntryValue | null;
}
