import { bubleSort } from "./sortingAlgo.js";
import { getPercentage, sortingData } from "./sortingData.js";

const container = document.querySelector(".visualization-container");
const sortActivateBtn = document.querySelector(".sort-btn");

container.style = `
            grid-template-columns: repeat(${sortingData.length}, 1fr);
            `;

const displaySortingElements = (data) => {
	let html = "";
	data.forEach((el) => {
		html += `<div class="element" style="height: ${getPercentage(el)}%"></div>`;
	});
	container.innerHTML = html;
};

displaySortingElements(sortingData);

sortActivateBtn.onclick = () => {
	displaySortingElements(bubleSort(...sortingData));
};
