//
function script20190(): void {
    var int0 = (IF_GETWIDTH(comp(1396, 16)) - 24);
    var int1 = script20191(int0);
    var int2 = 64;
    if ((IF_GETHIDE(comp(1396, 23)) == false)) {
        int2 = 78;
        IF_SETSIZE(8, int2, 1, 1, comp(1396, 20));
        IF_SETSIZE(16, int2, 0, 1, comp(1396, 21));
    };
    script19620(91488277, 91488276, int1, -1, -1, 0, 8, int2);
    return;
}