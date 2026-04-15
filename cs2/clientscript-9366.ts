//
function script9366(int0: unknown_int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int): void {
    var int9 = enum_getvalue(0, 26, 3689 as cs2enum, int3);
    if (((((int6 == 0) || (int5 == 0)) || (int3 == 0)) || (script4616(int1, int2) <= 0))) {
        return;
    };
    FROMDATE(int1);
    IF_SETTEXT(stack(), 45940846);
    IF_SETTEXT(script9365(), 45940838);
    stack(0);
    stack(36);
    stack(3695);
    stack(int2);
    enum_getvalue();
    IF_SETTEXT(stack(), 45940830);
    stack(0);
    stack(36);
    stack(3687);
    stack(int3);
    enum_getvalue();
    IF_SETTEXT(stack(), 45940806);
    if (((int9 != -1) && (int4 > 0))) {
        IF_SETTEXT(enum_getvalue(0, 36, int9, int4), comp(701, 62));
    } else {
        IF_SETTEXT("", comp(701, 62));
    };
    IF_SETTEXT(enum_getvalue(0, 36, 3696 as cs2enum, int5), comp(701, 78));
    if (((int6 >= 1) && (int6 <= 200))) {
        IF_SETTEXT(inttostring(int6, 10), comp(701, 86));
    } else if ((int6 == 201)) {
        IF_SETTEXT("N/A", comp(701, 86));
    };
    IF_SETTEXT(enum_getvalue(0, 36, 3725 as cs2enum, int7), comp(701, 54));
    if ((varbitplayer_20998 == 1)) {
        IF_SETTEXT(`Broadcast will only be sent to ${enum_getvalue(0, 36, 3725 as cs2enum, int7)}+`, comp(701, 46));
    } else {
        IF_SETTEXT("Broadcast will be sent to the whole clan.", comp(701, 46));
    };
    if ((int8 == 0)) {
        IF_SETTEXT("This event is not mandatory.", comp(701, 38));
    } else {
        IF_SETTEXT("This event is mandatory.", comp(701, 38));
    };
    script9369();
    script9374();
    IF_SETHIDE(true, comp(701, 7));
    return;
}