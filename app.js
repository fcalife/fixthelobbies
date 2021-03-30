function ExpandOtherIssues() {
	const issueContainer = document.getElementById("OtherIssuesTitle");
	const issueBody = document.getElementById("OtherIssuesBody");
	if (!issueContainer.classList.contains("open")) {
		issueContainer.classList.add("open");
		const childs = issueBody.children;
		let height = 0;
		for (const child of childs) {
			height += child.clientHeight + 20;
		}
		issueBody.style.height = height + "px";
	} else {
		issueContainer.classList.remove("open");
		issueBody.style.height = "0px";
	}
}

function ChangeLanguage(target) {
	console.log("TEST");
	const curId = target.getAttribute("id");
	const container = document.getElementById("LanguageContainer");
	for (const child of container.children) {
		if (child.id == curId) {
			child.classList.add("selected");
		} else {
			child.classList.remove("selected");
		}
	}
	
	let targetPath = "";
	if (curId === "ru") {
		targetPath = "_russian";
	} else if (curId === "ch") {
		targetPath = "_chinese";
	}

	
	window.location.href = "index" + targetPath + ".html";
}