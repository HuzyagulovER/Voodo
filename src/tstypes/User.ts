export declare type User = {
	id: number
	name: string
	username: string
	email: string
	address: UserAddress,
	phone: string
	website: string
	company: UserCompany
}
export declare type UserAddress = {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: {
		lat: string
		lng: string
	}
}
export declare type UserCompany = {
	name: string
	catchPhrase: string
	bs: string
}

export declare type Users = { [key: string | number]: User }