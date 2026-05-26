//
function script6654(int0: number): void {
    IF_SETPOSITION((IF_GETX(IF_GETLAYER(int0)) + IF_GETWIDTH(int0)), (IF_GETY(IF_GETLAYER(int0)) - (IF_GETHEIGHT(IF_GETLAYER(int0)) / 2)), 0, 0, 86573206);
    IF_SETHIDE(0, 86573206);
    IF_SETHIDE(0, 86573203);
    if ((((varbitplayer_8735 == 1) || (varbitplayer_8735 == 2)) || (varbitplayer_8735 == 3))) {
        IF_SETHIDE(0, 86573254);
    } else {
        IF_SETHIDE(1, 86573254);
    };
    return;
}