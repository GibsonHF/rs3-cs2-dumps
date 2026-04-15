//
function script11659(int0: struct, int1: unknown_int): string {
    if ((int0 == -1 as struct)) {
        return "";
    };
    if ((struct_getparam(int0, 6352) != -1 as inv)) {
        return script13227(int0);
    };
    var string0 = struct_getparam(int0, 2533);
    if ((strcmp(string0, "") != 0)) {
        if ((int1 == 1)) {
            if ((struct_getparam(int0, 4007) == 0)) {
                string0 = `${string0} (Male)`;
            } else if ((struct_getparam(int0, 4007) == 1)) {
                string0 = `${string0} (Female)`;
            };
        };
        if ((struct_getparam(int0, 2531) == 3)) {
            string0 = strconcat(string0, " Title");
        };
        return string0;
    };
    var int2 = -1 as struct;
    var int3 = -1;
    if ((struct_getparam(int0, 2531) == 1)) {
        if ((((struct_getparam(int0, 2532) == 3) || (struct_getparam(int0, 2532) == 8)) || ((struct_getparam(int0, 2532) == 1) && (GENDER() == 1)))) {
            int3 = 1;
            int2 = enum_getvalue(0, 73, 2341 as cs2enum, struct_getparam(int0, 2772));
        } else if ((((struct_getparam(int0, 2532) == 4) || (struct_getparam(int0, 2532) == 9)) || ((struct_getparam(int0, 2532) == 1) && (GENDER() == 0)))) {
            int3 = 0;
            int2 = enum_getvalue(0, 73, 2338 as cs2enum, struct_getparam(int0, 2772));
        } else if (((struct_getparam(int0, 2532) == 5) || ((struct_getparam(int0, 2532) == 2) && (GENDER() == 0)))) {
            int3 = 0;
            string0 = enum_getvalue(0, 36, 2340 as cs2enum, struct_getparam(int0, 2772));
        };
        if ((int2 != -1 as struct)) {
            string0 = struct_getparam(int2, 792);
        };
        if ((int1 == 1)) {
            if ((int3 == 0)) {
                string0 = `${string0} (Male)`;
            } else if ((int3 == 1)) {
                string0 = `${string0} (Female)`;
            };
        };
    };
    return string0;
}