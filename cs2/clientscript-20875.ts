//
function script20875(string0: string): void {
    if (((STRING_LENGTH(string0) < 100) || (script20477(6881420) > IF_GETHEIGHT(comp(105, 140))))) {
        IF_SETONMOUSEREPEAT(callback(), comp(105, 140));
        return;
    };
    var int0 = IF_GETWIDTH(comp(105, 140));
    IF_SETONMOUSEREPEAT(callback(script10070, string0, int0, -2147483645, -2147483643), comp(105, 140));
    return;
}