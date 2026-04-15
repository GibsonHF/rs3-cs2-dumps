//
function script15559(string0: string): void {
    var string1 = "There was an error generating the name. Please try again.";
    if ((STRING_LENGTH(string0) <= 0)) {
        script1247(1, 0, string1);
    } else {
        varclient_2563 = string0;
        varclient_1099 = STRING_LENGTH(varclient_2563);
        script3218(comp(786, 14), comp(786, 15), comp(786, 16), varclient_2563, 111);
        IF_SETTEXT(varclient_2563, comp(786, 15));
        IF_SETHIDE(true, comp(786, 13));
    };
    script7911();
    return;
}