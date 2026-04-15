//
function script14244(): [int, int, int, int] {
    var int0 = script10074();
    if ((int0 != comp(1477, 27))) {
        return [0, 0, IF_GETWIDTH(int0), IF_GETHEIGHT(int0)];
    };
    if (((varbitplayer_38842 == 0) && (varclient_6403 == 0))) {
        return [0, 0, IF_GETWIDTH(int0), IF_GETHEIGHT(int0)];
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = IF_GETWIDTH(comp(1477, 26));
    var int6 = IF_GETHEIGHT(comp(1477, 26));
    if ((varclient_6403 != 0)) {
        [int1, int2, int3, int4] = UNKNOWN_COMMAND_126();
        return [int1, int2, (int1 + int3), (int2 + int4)];
    };
    [int1, int2, int3, int4] = script2956();
    return [int1, int2, (int5 - int3), (int6 - int4)];
}