//
function script7475(int0: number, int1: number, int2: number): number {
    var string0 = "";
    var int3 = struct_getparam(int1, 2807);
    var int4 = struct_getparam(int1, 2806);
    var int5 = 1;
    if ((script11545(int1) == 1)) {
        string0 = "<col=00ff00>";
        stack(`${string0}Relic`);
        script20914();
        return script7482(-1, "League Relic", script7484(int0, int2));
    };
    if (((int3 > 1) || (script12039(enum_getvalue(0, 17, 681 as cs2enum, int4)) != -1))) {
        switch (int4) {
            case 1:
            case 2:
            case 4:
            case 3:
            case 29:
            case 8: {
                int5 = STAT_BASE(enum_getvalue(0, 17, 681, int4));
                break;
            }
            default: {
                int5 = STAT(enum_getvalue(0, 17, 681, int4));
                break;
            }
        };
        if ((int5 < int3)) {
            string0 = "<col=ff0000>";
        } else {
            string0 = "<col=00ff00>";
        };
        return script7482(`${string0}${inttostring(int3, 10)}`, enum_getvalue(0, 23, 371, int4), -1, `${inttostring(int3, 10)} ${enum_getvalue(0, 36, 108, int4)}`, script7484(int0, int2));
    };
    return int0;
}