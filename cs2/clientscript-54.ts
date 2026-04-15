//[clientscript,wilderness_level_update]
function script54(int0: component): void {
    var int1 = 0;
    if (((script133(pos(0,46,55,0,0), pos(3,53,67,41,63), COORD()) == 1) || (script133(pos(0,45,61,0,0), pos(3,45,61,60,63), COORD()) == 1))) {
        int1 = (((COORDZ(COORD()) - 3520) / 8) + 1);
    } else if ((script133(pos(0,46,155,2,0), pos(3,52,169,62,63), COORD()) == 1)) {
        int1 = (((COORDZ(COORD()) - 9920) / 8) + 1);
    } else {
        IF_SETTEXT("", int0);
        return;
    };
    int1 = MAX(MIN(int1, 99), 0);
    IF_SETTEXT(`Level: ${inttostring(int1, 10)}`, int0);
    return;
}