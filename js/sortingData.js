export const sortingData = [];

for (let i = 0; i < 1000; i++) {
	sortingData[i] = Math.floor(Math.random() * 1000);
}

export const getPercentage = (exact) => {
	return (exact / Math.max(...sortingData)) * 100;
};
