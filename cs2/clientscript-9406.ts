//
function script9406(int0: int, int1: int): string {
    var int2 = -1 as struct;
    var int3 = -1 as struct;
    var string0 = "";
    var int4 = -1 as cs2enum;
    var int5 = 0;
    var int6 = 0;
    if ((varplayer_7123 > 0)) {
        int2 = enum_getvalue(0, 73, script8221(), varplayer_7123);
        if ((int2 != -1 as struct)) {
            string0 = script13284(int2);
            int4 = struct_getparam(int2, 8072);
            if ((int4 != -1 as cs2enum)) {
                int3 = enum_getvalue(0, 73, 12251 as cs2enum, int1);
                if (((int3 != -1 as struct) && (enum_hasoutput(73, int4, int3) == 1))) {
                    int6 = ENUM_GETOUTPUTCOUNT(int4);
                    int5 = enum_getreverseindex(73, 0, int4, int3, 0);
                };
            };
            string0 = `${string0} (${inttostring((int5 + 1), 10)}/${inttostring(int6, 10)})`;
        };
        return string0;
    };
    return "NO PATH SELECTED!";
}