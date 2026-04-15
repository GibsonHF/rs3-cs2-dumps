//
function script1951(int0: struct): void {
    var string0 = "You have no voyage selected.";
    if (((int0 == -1 as struct) || (int0 == 17069 as struct))) {
        IF_SETHIDE(false, comp(950, 164));
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 62259364);
        IF_SETTEXT("You have no voyage selected.", 62259278);
        IF_SETTEXT("No Voyage Selected", 62259279);
        IF_SETHIDE(1, 62259319);
        IF_SETHIDE(1, 62259333);
        IF_SETHIDE(1, 62259347);
        IF_SETTEXT("-", 62259362);
        return;
    };
    script2020();
    script2059();
    var string1 = script2057(int0, 0);
    IF_SETTEXT(string1, comp(950, 78));
    IF_SETTEXT(struct_getparam(int0, 2365), comp(950, 79));
    script2025();
    script2022();
    if ((struct_getparam(int0, 3056) == 0)) {
        IF_SETHIDE(true, comp(950, 119));
    } else {
        IF_SETHIDE(false, comp(950, 119));
    };
    if ((struct_getparam(int0, 3057) == 0)) {
        IF_SETHIDE(true, comp(950, 133));
    } else {
        IF_SETHIDE(false, comp(950, 133));
    };
    if ((struct_getparam(int0, 3058) == 0)) {
        IF_SETHIDE(true, comp(950, 147));
    } else {
        IF_SETHIDE(false, comp(950, 147));
    };
    if (((struct_getparam(int0, 2366) == 7) && (script1121(varbitplayer_17132) == 1))) {
        IF_SETHIDE(false, comp(950, 195));
        IF_SETTEXT("Your captain already has four traits and cannot gain any more.", comp(950, 195));
        IF_SETHIDE(true, comp(950, 196));
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = struct_getparam(int0, 2367);
    var int5 = MAX(1, struct_getparam(int0, 2368));
    var int6 = SCALE(125, 100, int5);
    var int7 = SCALE(75, 100, int5);
    var int8 = MAX(MIN(int6, script1124(varbitplayer_17132)), int7);
    int4 = SCALE(int5, int8, int4);
    int4 = script6668(int4);
    int4 = MAX(1500, int4);
    [int1, int2, int3] = script4705(int4);
    var string2 = inttostring(int2, 10);
    if ((int2 < 10)) {
        string2 = strconcat("0", string2);
    };
    var string3 = `${inttostring(int1, 10)}:${string2}`;
    IF_SETTEXT(string3, comp(950, 162));
    return;
}