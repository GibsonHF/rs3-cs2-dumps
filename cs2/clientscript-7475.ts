//
function script7475(int0: int, int1: struct, int2: unknown_int): int {
    var string0 = "";
    var int3 = struct_getparam(int1, 2807);
    var int4 = struct_getparam(int1, 2806);
    var int5 = 1;
    if (((int3 > 1) || (script12039(enum_getvalue(0, 17, 681 as cs2enum, int4)) != -1 as struct))) {
        if ((int4 == 29)) {
            int5 = STAT_BASE(28 as stat);
        } else {
            int5 = STAT(enum_getvalue(0, 17, 681 as cs2enum, int4));
        };
        if ((int5 < int3)) {
            string0 = "<col=ff0000>";
        } else {
            string0 = "<col=00ff00>";
        };
        return script7482(`${string0}${inttostring(int3, 10)}`, enum_getvalue(0, 23, 371 as cs2enum, int4), -1 as obj, `${inttostring(int3, 10)} ${enum_getvalue(0, 36, 108 as cs2enum, int4)}`, script7484(int0, int2));
    };
    return int0;
}