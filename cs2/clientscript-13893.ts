//
function script13893(int0: number): void {
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(13331);
    var int5 = 0;
    if (((int0 == 1) || (varclient_3693 == 1))) {
        int5 = 1;
    };
    while ((int3 < int4)) {
        int2 = enum_getvalue(0, 0, 13331 as cs2enum, int3);
        int1 = script10405(int2);
        if ((int2 == 18)) {
            if ((IF_GETHIDE(18087963) == 0)) {
                IF_SETHIDE(int5, comp(276, 27));
                script15872();
            };
            int2 = enum_getvalue(0, 0, 10155 as cs2enum, varbitplayer_49443);
            if (((script383(int2) != 31) && (varclient_6910 == 0))) {
                IF_SETHIDE(int5, struct_getparam(int1, 3503));
            };
        } else {
            IF_SETHIDE(int5, struct_getparam(int1, 3503));
        };
        int3 = (int3 + 1);
    };
    IF_SETHIDE(int5, comp(276, 16));
    IF_SETHIDE(int5, comp(279, 1));
    IF_SETHIDE(int5, comp(279, 6));
    IF_SETHIDE(int5, comp(279, 10));
    IF_SETHIDE(int5, comp(279, 15));
    IF_SETHIDE(int5, comp(279, 16));
    IF_SETHIDE(int5, comp(279, 21));
    return;
}