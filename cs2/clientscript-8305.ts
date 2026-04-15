//
function script8305(int0: int): void {
    var int1 = script10405(int0);
    var int2 = struct_getparam(int1, 3503);
    var int3 = struct_getparam(int1, 3506);
    script8322(int0, true, 18824 as graphic);
    script8690();
    IF_SETONMOUSEREPEAT(callback(script8415, int0), int3);
    script3380(1);
    if ((enum_getreversecount(0, 7718, int0) <= 0)) {
        script1850(int0, 1);
    };
    script8368(int0, int3, 0, 1);
    script8388(int0);
    script8308(int0, script8717(int0), IF_GETX(int2), IF_GETY(int2), IF_GETWIDTH(int2), IF_GETHEIGHT(int2));
    script8705(int0);
    varclient_2832 = 0;
    varclient_3467 = -1;
    IF_SENDTOBACK(comp(1477, 26));
    return;
}