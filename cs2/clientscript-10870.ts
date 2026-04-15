//
function script10870(): void {
    var int0 = SCALE(150, 30, MIN(30, varbitplayer_26389));
    var int1 = IF_GETWIDTH(comp(1575, 2));
    var int2 = 1;
    if ((int1 < int0)) {
        if (((int0 - int1) > 10)) {
            int2 = 5;
        };
        IF_SETSIZE((int1 + int2), 17, 0, 0, comp(1575, 2));
    } else if ((int1 > int0)) {
        if (((int1 - int0) > 10)) {
            int2 = 5;
        };
        IF_SETSIZE((int1 - int2), 17, 0, 0, comp(1575, 2));
    };
    var int3 = SCALE(int1, 150, 100);
    IF_SETTEXT(`Required: ${inttostring(int3, 10)}%`, comp(1575, 34));
    return;
}