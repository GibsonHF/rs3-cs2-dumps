//
function script7476(int0: int, int1: struct, int2: unknown_int): int {
    var int3 = -1;
    var int4 = 0;
    var int5 = 0;
    var string0 = "";
    var string1 = "";
    while ((++int3 < 4)) {
        int4 = 0;
        int5 = 0;
        switch (int3) {
            case 0: {
                if ((struct_getparam(int1, 6743) != -1 as stat)) {
                    int4 = struct_getparam(int1, 6744);
                    int5 = enum_getvalue(17, 0, 1482 as cs2enum, struct_getparam(int1, 6743));
                };
                break;
            }
            case 1: {
                if ((struct_getparam(int1, 6745) != -1 as stat)) {
                    int4 = struct_getparam(int1, 6746);
                    int5 = enum_getvalue(17, 0, 1482 as cs2enum, struct_getparam(int1, 6745));
                };
                break;
            }
            case 2: {
                if ((struct_getparam(int1, 6747) != -1 as stat)) {
                    int4 = struct_getparam(int1, 6748);
                    int5 = enum_getvalue(17, 0, 1482 as cs2enum, struct_getparam(int1, 6747));
                };
                break;
            }
            case 3: {
                if ((struct_getparam(int1, 6749) != -1 as stat)) {
                    int4 = struct_getparam(int1, 6750);
                    int5 = enum_getvalue(17, 0, 1482 as cs2enum, struct_getparam(int1, 6749));
                };
                break;
            }
        };
        if (((int5 > 0) && (int4 > 1))) {
            if ((STAT(enum_getvalue(0, 17, 681 as cs2enum, int5)) < int4)) {
                string0 = "<col=ff0000>";
            } else {
                string0 = "<col=00ff00>";
            };
            var int0 = script7482(`${string0}${inttostring(int4, 10)}`, enum_getvalue(0, 23, 371 as cs2enum, int5), -1 as obj, `${inttostring(int4, 10)} ${enum_getvalue(0, 36, 108 as cs2enum, int5)}`, script7484(int0, int2));
        };
    };
    return int0;
}