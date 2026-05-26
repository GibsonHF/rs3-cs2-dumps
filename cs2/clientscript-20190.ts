//
function script20190(): void {
    var int0 = (IF_GETWIDTH(91488272) - 24);
    var int1 = script20191(int0);
    var int2 = 64;
    if ((IF_GETHIDE(91488279) == 0)) {
        int2 = 78;
        IF_SETSIZE(8, int2, 1, 1, 91488276);
        IF_SETSIZE(16, int2, 0, 1, 91488277);
    };
    script19620(91488277, 91488276, int1, -1, -1, 0, 8, int2);
    return;
}