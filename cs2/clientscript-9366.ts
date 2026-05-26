//
function script9366(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
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
        IF_SETTEXT(enum_getvalue(0, 36, int9, int4), 45940798);
    } else {
        IF_SETTEXT("", 45940798);
    };
    IF_SETTEXT(enum_getvalue(0, 36, 3696 as cs2enum, int5), 45940814);
    if (((int6 >= 1) && (int6 <= 200))) {
        IF_SETTEXT(inttostring(int6, 10), 45940822);
    } else if ((int6 == 201)) {
        IF_SETTEXT("N/A", 45940822);
    };
    IF_SETTEXT(enum_getvalue(0, 36, 3725 as cs2enum, int7), 45940790);
    if ((varbitplayer_20998 == 1)) {
        IF_SETTEXT(`Broadcast will only be sent to ${enum_getvalue(0, 36, 3725 as cs2enum, int7)}+`, 45940782);
    } else {
        IF_SETTEXT("Broadcast will be sent to the whole clan.", 45940782);
    };
    if ((int8 == 0)) {
        IF_SETTEXT("This event is not mandatory.", 45940774);
    } else {
        IF_SETTEXT("This event is mandatory.", 45940774);
    };
    script9369();
    script9374();
    IF_SETHIDE(1, 45940743);
    return;
}