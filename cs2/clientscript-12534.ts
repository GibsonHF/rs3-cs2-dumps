//
function script12534(int0: number, int1: number, string0: string, string1: string): void {
    IF_SETTEXT(string0, 115474443);
    IF_SETTEXT(string1, 115474444);
    IF_SETTEXT(inttostring(int0, 10), 115474446);
    if ((IF_FIND(int1) == 1)) {
        IF_SETHIDE(0, 115474482);
        switch (cc_getparam(5753)) {
            case 1: {
                IF_SETTEXT("Purchase", 115474484);
                IF_SETHIDE(1, 115474482);
                break;
            }
            case 2: {
                IF_SETTEXT("Unlocked", 115474484);
                break;
            }
            default: {
                IF_SETTEXT("Locked", 115474484);
                break;
            }
        };
    };
    IF_SETHIDE(0, 115474459);
    return;
}