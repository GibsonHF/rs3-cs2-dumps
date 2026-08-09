//
function script1253(string0: string): void {
    var string1 = "There was an error generating the name. Please try again.";
    if ((STRING_LENGTH(string0) <= 0)) {
        script1247(0, 0, string1);
    } else {
        varclient_2563 = string0;
        varclient_1099 = STRING_LENGTH(varclient_2563);
        script3218(4194354, 4194355, 4194356, varclient_2563, 111);
        IF_SETTEXT(varclient_2563, 4194355);
        IF_SETHIDE(true, comp(64, 31));
        IF_SETHIDE(true, comp(64, 7));
    };
    return;
}