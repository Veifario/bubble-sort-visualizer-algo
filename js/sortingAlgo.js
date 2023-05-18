export const bubleSort = (...args) => {
	for (let i = args.length; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if (args[j] > args[j + 1]) {
				[args[j], args[j + 1]] = [args[j + 1], args[j]];
			}
		}
	}
	return args;
};
