//
function script12414(): void {
    IF_SETTEXT(`${inttostring(varbitplayer_31011, 10)}/${inttostring(2000, 10)}`, 114753561);
    IF_SETTEXT(`${inttostring(varbitplayer_31010, 10)}/${inttostring(2000, 10)}`, 114753565);
    if ((varbitplayer_31010 >= 2000)) {
        IF_SETHIDE(1, 114753541);
    };
    if ((varbitplayer_31011 >= 2000)) {
        IF_SETHIDE(1, 114753543);
    };
    var int0 = IF_GETWIDTH(114753546);
    var int1 = ((int0 * 100) / 2000);
    var int2 = 0;
    if ((varbitplayer_31010 == 2000)) {
        IF_SETSIZE(int0, 0, 0, 1, 114753545);
    } else {
        int2 = ((int1 * varbitplayer_31010) / 100);
        IF_SETSIZE(int2, 21, 0, 0, 114753545);
    };
    if ((varbitplayer_31011 == 2000)) {
        IF_SETSIZE(int0, 0, 0, 1, 114753547);
    } else {
        int2 = ((int1 * varbitplayer_31011) / 100);
        IF_SETSIZE(int2, 21, 0, 0, 114753547);
    };
    return;
}