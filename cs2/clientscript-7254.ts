//
function script7254(int0: number): void {
    IF_SETTEXT(struct_getparam(int0, 2365), 60031018);
    script7280();
    if ((struct_getparam(int0, 3056) == 0)) {
        IF_SETHIDE(1, 60031021);
        IF_SETHIDE(1, 60031020);
    } else {
        IF_SETHIDE(0, 60031021);
        IF_SETHIDE(0, 60031020);
    };
    if ((struct_getparam(int0, 3057) == 0)) {
        IF_SETHIDE(1, 60031033);
        IF_SETHIDE(1, 60031032);
    } else {
        IF_SETHIDE(0, 60031033);
        IF_SETHIDE(0, 60031032);
    };
    if ((struct_getparam(int0, 3058) == 0)) {
        IF_SETHIDE(1, 60031045);
        IF_SETHIDE(1, 60031044);
    } else {
        IF_SETHIDE(0, 60031045);
        IF_SETHIDE(0, 60031044);
    };
    if (((struct_getparam(int0, 2366) == 7) && (script1121(varplayer_3390) == 1))) {
        IF_SETHIDE(0, 60031315);
        IF_SETTEXT("Your captain already has four traits and cannot gain any more.", 60031315);
        IF_SETHIDE(1, 60031316);
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
    IF_SETTEXT(string1, 60031059);
    return;
}