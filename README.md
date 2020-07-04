# TypescriptBuilderPattern

Builder pattern for Typescript

```
interface User {
	id: number;
	userName: string;
	age: number;
	active: boolean;
}

const pippo = Builder<User>()
	.id(1)
	.userName('pippo')
	.active(true)
	.age(20)
	.build();
```

### Credits
https://github.com/Vincent-Pang/builder-pattern
