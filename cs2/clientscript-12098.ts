//
function script12098(int0: number, int1: number): number {
    var int2 = 0;
    var int3 = -1 as struct;
    if ((int0 != -1 as struct)) {
        if ((struct_getparam(int0, 2212) > 0)) {
            int2 = struct_getparam(int0, 2212);
        } else if (((struct_getparam(int0, 2213) != -1 as obj) && (script12097(int0, int1) > 0))) {
            int2 = script7960(struct_getparam(int0, 2213), enum_getvalue(0, 17, 681 as cs2enum, script12097(int0, int1)));
            if ((int2 == 0)) {
                int2 = script2516(struct_getparam(int0, 2213), enum_getvalue(0, 17, 681 as cs2enum, script12097(int0, int1)));
            };
        };
        if ((int2 > 0)) {
            return int2;
        };
        int3 = struct_getparam(int0, 8877);
        var int1 = struct_getparam(int0, 6569);
    };
    if ((int1 != -1 as dbrow)) {
        switch (DB_GETROWTABLE(int1)) {
            case 5: {
                int2 = dbrow_getfield(int1, 20624, 0);
                break;
            }
            case 86: {
                int2 = dbrow_getfield(int1, 352352, 0);
                break;
            }
            case 88: {
                int2 = dbrow_getfield(int1, 360512, 0);
                break;
            }
            case 235: {
                if ((dbrow_getfield(int1, 962641, 0) == enum_getvalue(0, 17, 681 as cs2enum, script12097(int0, int1)))) {
                    int2 = dbrow_getfield(int1, 962642, 0);
                };
                break;
            }
            case 370: {
                int2 = dbrow_getfield(int1, 1515664, 0);
                break;
            }
        };
    } else if (((int3 != -1 as struct) && (struct_getparam(int3, 2793) > 0))) {
        int2 = struct_getparam(int3, 2807);
    };
    return int2;
}