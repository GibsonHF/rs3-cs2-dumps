//
function script15837(int0: int): void {
    var int1 = IF_GETWIDTH(comp(976, 5));
    var int2 = SCALE(int0, 100, int1);
    IF_SETSIZE(int2, 0, 0, 1, comp(976, 7));
    IF_SETTEXT(`Auto-configuration in progress... ${inttostring(int0, 10)}%`, comp(976, 4));
    return;
}