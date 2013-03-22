var phone_book = new Array();

	phone_book["AL, Mobile"] = "(251) 661-7183";
	phone_book["AL, Pelham"] = "(205) 733-6743";
	phone_book["AZ, Tempe"] = "(480) 968-0460";
	phone_book["AZ, Tucson"] = "(501) 221-0094";
	phone_book["CA, Bakersfield"] = "(661) 587-4147";
	phone_book["CA, Costa Mesa"] = "(714) 424-0977";
	phone_book["CA, Fresno"] = "(559) 435-8817";
	phone_book["CA, Los Angeles"] = "(310) 673-0850";
	phone_book["CO, Denver"] = "(303) 790-1421";
	phone_book["CT, Hartford"] = "(203) 269-0436";
	phone_book["FL, Fort Lauderdale"] = "(954) 584-0737";
	phone_book["Fl, Tampa"] = "(813) 622-8413";
	phone_book["GA, Atlanta"] = "(770) 640-115";					
	
function displayNumber(the_phone_book, entry)
	{
		var the_number = the_phone_book[entry];
		window.document.the_form.number_box.value = the_number;
	}
