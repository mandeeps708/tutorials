var phone_book = new Array();

	phone_book["happy"] = "(555) 555 - 1111";
	phone_book["sleepy"] = "(555) 555 - 2222";
	phone_book["sneezy"] = "(555) 555 - 3333";
	phone_book["sleezy"] = "(555) 555 - 4444";
	phone_book["sneary"] = "(555) 555 - 5555";
	phone_book["bleary"] = "(555) 555 - 6666";
	phone_book["tweaked"] = "(555) 555 - 7777";

function displayNumber(the_phone_book, entry)
{
	var the_number = the_phone_book[entry];
	window.document.the_form.number_box.value = the_number;
}
