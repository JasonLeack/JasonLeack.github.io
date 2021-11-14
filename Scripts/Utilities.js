function copyToClipboard(text)
{
	navigator.clipboard.writeText(text);
	alert("Copied the text: " + text);
}