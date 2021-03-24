
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