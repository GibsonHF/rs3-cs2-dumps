//
function script12534(int0: number, int1: number, string0: string, string1: string): void {
    IF_SETTEXT(string0, comp(1762, 11));  // invent_techtree:selected_name
    IF_SETTEXT(string1, comp(1762, 12));  // invent_techtree:selected_desc
    IF_SETTEXT(inttostring(int0, 10), comp(1762, 14));  // invent_techtree:selected_price
    if ((IF_FIND(int1) == 1)) {
        IF_SETHIDE(false, comp(1762, 50));  // invent_techtree:selected_buy_disabled_layer
        switch (cc_getparam(5753)) {
            case 1: {
                IF_SETTEXT("Purchase", comp(1762, 52));  // invent_techtree:selected_buy_text
                IF_SETHIDE(true, comp(1762, 50));  // invent_techtree:selected_buy_disabled_layer
                break;
            }
            case 2: {
                IF_SETTEXT("Unlocked", comp(1762, 52));  // invent_techtree:selected_buy_text
                break;
            }
            default: {
                IF_SETTEXT("Locked", comp(1762, 52));  // invent_techtree:selected_buy_text
                break;
            }
        };
    };
    IF_SETHIDE(false, comp(1762, 27));  // invent_techtree:techtree_selected
    return;
}