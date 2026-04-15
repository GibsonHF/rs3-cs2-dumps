//
function script2793(int0: idkit, int1: unknown_int): struct {
    var int2 = script734(GENDER());
    var int3 = (ENUM_GETOUTPUTCOUNT(5735 as cs2enum) - 1);
    var int4 = -1 as struct;
    var int5 = 0;
    var int6 = -1 as struct;
    while ((int3 >= 0)) {
        int4 = enum_getvalue(0, 73, 5735 as cs2enum, int3);
        if ((int4 != -1 as struct)) {
            int5 = 0;
            int6 = script384(0, int4, int2);
            while ((int6 != -1 as struct)) {
                switch (int1) {
                    case 3: {
                        if ((struct_getparam(int6, 1182) == int0)) {
                            return int6;
                        };
                        break;
                    }
                    case 4: {
                        if ((struct_getparam(int6, 1183) == int0)) {
                            return int6;
                        };
                        break;
                    }
                    case 5: {
                        if ((struct_getparam(int6, 1184) == int0)) {
                            return int6;
                        };
                        break;
                    }
                    case 6: {
                        if ((struct_getparam(int6, 1185) == int0)) {
                            return int6;
                        };
                        break;
                    }
                    default: {
                        return -1 as struct;
                    }
                };
                int6 = script384(++int5, int4, int2);
            };
        };
        int3 = (int3 - 1);
    };
    return -1 as struct;
}