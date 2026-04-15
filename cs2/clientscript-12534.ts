//
function script12534(int0: int, int1: component, string0: string, string1: string): void {
    IF_SETTEXT(string0, comp(1762, 11));
    IF_SETTEXT(string1, comp(1762, 12));
    IF_SETTEXT(inttostring(int0, 10), comp(1762, 14));
    if ((IF_FIND(int1) == 1)) {
        IF_SETHIDE(false, comp(1762, 50));
        switch (cc_getparam(5753)) {
            case 1: {
                IF_SETTEXT("Purchase", comp(1762, 52));
                IF_SETHIDE(true, comp(1762, 50));
                break;
            }
            case 2: {
                IF_SETTEXT("Unlocked", comp(1762, 52));
                break;
            }
            default: {
                IF_SETTEXT("Locked", comp(1762, 52));
                break;
            }
        };
    };
    IF_SETHIDE(false, comp(1762, 27));
    return;
}