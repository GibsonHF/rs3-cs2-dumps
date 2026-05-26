//
function script12414(): void {
    IF_SETTEXT(`${inttostring(varbitplayer_31011, 10)}/${inttostring(2000, 10)}`, comp(1751, 25));
    IF_SETTEXT(`${inttostring(varbitplayer_31010, 10)}/${inttostring(2000, 10)}`, comp(1751, 29));
    if ((varbitplayer_31010 >= 2000)) {
        IF_SETHIDE(true, comp(1751, 5));
    };
    if ((varbitplayer_31011 >= 2000)) {
        IF_SETHIDE(true, comp(1751, 7));
    };
    var int0 = IF_GETWIDTH(comp(1751, 10));
    var int1 = ((int0 * 100) / 2000);
    var int2 = 0;
    if ((varbitplayer_31010 == 2000)) {
        IF_SETSIZE(int0, 0, 0, 1, comp(1751, 9));
    } else {
        int2 = ((int1 * varbitplayer_31010) / 100);
        IF_SETSIZE(int2, 21, 0, 0, comp(1751, 9));
    };
    if ((varbitplayer_31011 == 2000)) {
        IF_SETSIZE(int0, 0, 0, 1, comp(1751, 11));
    } else {
        int2 = ((int1 * varbitplayer_31011) / 100);
        IF_SETSIZE(int2, 21, 0, 0, comp(1751, 11));
    };
    return;
}