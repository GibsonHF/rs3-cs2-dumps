//
function script7473(int0: struct, int1: int, int2: int, int3: unknown_int): int {
    script7474(int3);
    var int4 = 1;
    var int5 = 0;
    if (((int1 == 1) && (MAP_MEMBERS() == 0))) {
        int5 = MAX(int5, (int4 - 1));
        int4 = script7482("<col=ff0000>Member", 14908 as graphic, -1 as obj, "This ability is only available<br>on a members' world.", script7484(int4, int3));
    };
    int5 = MAX(int5, (int4 - 1));
    int4 = script7475(int4, int0, int3);
    int5 = MAX(int5, (int4 - 1));
    int4 = script7476(int4, int0, int3);
    int5 = MAX(int5, (int4 - 1));
    int4 = script7477(int4, int0, int3);
    int5 = MAX(int5, (int4 - 1));
    int4 = script7478(int4, int0, int3);
    if ((struct_getparam(int0, 8889) == 1)) {
        int5 = MAX(int5, (int4 - 1));
        int4 = script7482(`${script995(varplayer_11218, "<col=00ff00>", "<col=ff0000>")}Conduit</col>`, 24577 as graphic, -1 as obj, "Requires a conduit to the Underworld.", script7484(int4, int3));
    };
    if ((int2 > 0)) {
        int5 = MAX(int5, (int4 - 1));
        int4 = script7479(int4, int0, int2, int3);
    };
    int5 = MAX(int5, (int4 - 1));
    int4 = script17702(int4, int0, int3);
    int5 = MAX(int5, (int4 - 1));
    int4 = script17703(int4, int0, int3);
    int5 = MAX(int5, (int4 - 1));
    int4 = script7481(int4, int0, int3);
    int5 = MAX(int5, (int4 - 1));
    return int5;
}