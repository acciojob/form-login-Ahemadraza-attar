function getFormvalue() {
    const input=document.getElementsByTagName("input");
	const firstName=input[0];
	const lastName=input[1];
	const first=firstName.target.value;
	alert(first);

}
