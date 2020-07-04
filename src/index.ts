import { Builder } from './builder';

interface User {
	id: number;
	userName: string;
	age: number;
	active: boolean;
}

// Using vanilla typescript
const user1 = {} as User;
user1.id = 1;
user1.userName = 'pippo';
user1.age = 20;
user1.active = true;
// Or
const user2 = { id: 1, userName: 'pippo', age: 20, active: true } as User;

// Using builder
const userInfo = Builder<User>()
	.id(1)
	.userName('pippo')
	.active(true)
	.age(20)
	.build();
