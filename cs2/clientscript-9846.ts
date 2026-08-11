//
function script9846(string0: string, string1: string, string2: string, string3: string, string4: string, string5: string): void {
    if ((STRING_LENGTH(string0) > 0)) {
        IF_SETTEXT(string0, comp(1487, 22));  // bonds_namechange_change:suggestion1_button_text
        IF_SETHIDE(false, comp(1487, 13));  // bonds_namechange_change:suggestion1_button_layer
    };
    if ((STRING_LENGTH(string1) > 0)) {
        IF_SETTEXT(string1, comp(1487, 30));  // bonds_namechange_change:suggestion2_button_text
        IF_SETHIDE(false, comp(1487, 12));  // bonds_namechange_change:suggestion2_button_layer
    };
    if ((STRING_LENGTH(string2) > 0)) {
        IF_SETTEXT(string2, comp(1487, 38));  // bonds_namechange_change:suggestion3_button_text
        IF_SETHIDE(false, comp(1487, 11));  // bonds_namechange_change:suggestion3_button_layer
    };
    return;
}