type buildFnKey = 'build';
type IBuilderGetterProp<T> = keyof T | buildFnKey;
type IBuilderObjFunc = () => any;
type IBuilderProxyFunc = (x: any) => typeof Proxy;
type IBuilderResult<T> = IBuilder<T> | IBuilderObjFunc | IBuilderProxyFunc;

export type IBuilder<T> = {
	[k in keyof T]-?: (arg: T[k]) => IBuilder<T>;
} & {
	build(): T;
};

export function Builder<T>(): IBuilder<T> {
	const builtObject: T = {} as T;

	const builder = new Proxy(
		{},
		{
			get(_: any, prop: IBuilderGetterProp<T>): IBuilderResult<T> {
				if (prop === 'build') {
					return (): T => builtObject;
				}

				return (x: any): typeof Proxy => {
					builtObject[prop] = x;
					return builder;
				};
			},
		},
	);

	return builder as IBuilder<T>;
}
