//
function script20224(): void {
    script20211(0);
    CC_DELETEALL(comp(1401, 44));
    var int0 = (IF_GETWIDTH(comp(1401, 16)) - 24);
    var int1 = 0;
    if ((IF_FIND(comp(1401, 44)) == 1)) {
        int1 = script20191(int0);
        script19620(comp(1401, 45), comp(1401, 44), int1, comp(-1, 65535), -1, 0, 24, 44);
    };
    return;
}