//
function script12098(int0: struct): int {
    var int1 = 0;
    if ((struct_getparam(int0, 2212) > 0)) {
        int1 = struct_getparam(int0, 2212);
    } else if (((struct_getparam(int0, 2213) != -1 as obj) && (script12097(int0) > 0))) {
        int1 = script7960(struct_getparam(int0, 2213), enum_getvalue(0, 17, 681 as cs2enum, script12097(int0)));
        if ((int1 == 0)) {
            int1 = script2516(struct_getparam(int0, 2213), enum_getvalue(0, 17, 681 as cs2enum, script12097(int0)));
        };
    };
    if ((int1 > 0)) {
        return int1;
    };
    var int2 = struct_getparam(int0, 6569);
    var int3 = struct_getparam(int0, 8877);
    if ((int2 != -1 as dbrow)) {
        switch (DB_GETROWTABLE(int2)) {
            case 5: {
                int1 = dbrow_getfield(int2, 20624, 0);
                break;
            }
            case 86: {
                int1 = dbrow_getfield(int2, 352352, 0);
                break;
            }
            case 88: {
                int1 = dbrow_getfield(int2, 360512, 0);
                break;
            }
            case 235: {
                if ((dbrow_getfield(int2, 962641, 0) == enum_getvalue(0, 17, 681 as cs2enum, script12097(int0)))) {
                    int1 = dbrow_getfield(int2, 962642, 0);
                };
                break;
            }
        };
    } else if (((int3 != -1 as struct) && (struct_getparam(int3, 2793) > 0))) {
        int1 = struct_getparam(int3, 2807);
    };
    return int1;
}