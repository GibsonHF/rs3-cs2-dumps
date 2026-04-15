//
function script13394(int0: int, int1: int, int2: int, int3: struct): int {
    var int4 = 0;
    var int5 = 0;
    var string0 = "0";
    var int6 = 0;
    while ((int4 < int2)) {
        [int5, string0, int6] = NOTIFICATIONS_SENDGROUPEDLOCAL(int1, int4);
        if (((varbitplayer_41265 == 0) || (TESTBIT(varplayer_7991, int5) == 0))) {
            var int0 = MAX(int0, STRINGWIDTH(string0, struct_getparam(int3, 7275)));
        };
        int4 = (int4 + 1);
    };
    return int0;
}