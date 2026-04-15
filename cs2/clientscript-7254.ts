//
function script7254(int0: struct): void {
    IF_SETTEXT(struct_getparam(int0, 2365), comp(916, 42));
    script7280();
    if ((struct_getparam(int0, 3056) == 0)) {
        IF_SETHIDE(true, comp(916, 45));
        IF_SETHIDE(true, comp(916, 44));
    } else {
        IF_SETHIDE(false, comp(916, 45));
        IF_SETHIDE(false, comp(916, 44));
    };
    if ((struct_getparam(int0, 3057) == 0)) {
        IF_SETHIDE(true, comp(916, 57));
        IF_SETHIDE(true, comp(916, 56));
    } else {
        IF_SETHIDE(false, comp(916, 57));
        IF_SETHIDE(false, comp(916, 56));
    };
    if ((struct_getparam(int0, 3058) == 0)) {
        IF_SETHIDE(true, comp(916, 69));
        IF_SETHIDE(true, comp(916, 68));
    } else {
        IF_SETHIDE(false, comp(916, 69));
        IF_SETHIDE(false, comp(916, 68));
    };
    if (((struct_getparam(int0, 2366) == 7) && (script1121(varplayer_3390) == 1))) {
        IF_SETHIDE(false, comp(916, 339));
        IF_SETTEXT("Your captain already has four traits and cannot gain any more.", comp(916, 339));
        IF_SETHIDE(true, comp(916, 340));
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = struct_getparam(int0, 2367);
    var int5 = MAX(100, struct_getparam(int0, 2368));
    var int6 = SCALE(125, 100, int5);
    var int7 = SCALE(75, 100, int5);
    var int8 = MAX(MIN(int6, script1124(varplayer_3390)), int7);
    int4 = SCALE(int5, int8, int4);
    int4 = script6668(int4);
    int4 = MAX(1500, int4);
    [int1, int2, int3] = script4705(int4);
    var string0 = inttostring(int2, 10);
    if ((int2 < 10)) {
        string0 = strconcat("0", string0);
    };
    var string1 = `${inttostring(int1, 10)}:${string0}`;
    IF_SETTEXT(string1, comp(916, 83));
    return;
}