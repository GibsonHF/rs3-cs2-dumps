//
function script12598(int0: int, int1: int, int2: int, int3: component, int4: int): void {
    var int5 = enum_getvalue(0, 17, 681 as cs2enum, int2);
    var int6 = ENUM_GETOUTPUTCOUNT(7674 as cs2enum);
    var int7 = -1;
    var int8 = -1 as struct;
    switch (int0) {
        case 1: {
            return;
        }
        case 2:
        case 3:
        case 4: {
            if ((int5 != -1 as stat)) {
                if ((int3 == comp(1588, 24))) {
                    var int3 = comp(1588, 9);
                } else if ((int3 == comp(1681, 27))) {
                    int3 = comp(1681, 12);
                } else {
                    int3 = comp(-1, 65535);
                };
                if ((int3 != comp(-1, 65535))) {
                    while ((++int7 < int6)) {
                        int8 = enum_getvalue(0, 73, 7674 as cs2enum, int7);
                        if (((int8 != -1 as struct) && (struct_getparam(int8, 3440) == int5))) {
                            IF_TRIGGEROP(int3, int7, int0);
                            return;
                        };
                    };
                };
            };
            break;
        }
        case 5: {
            script8311(30);
            script12296(int1, int2);
            break;
        }
    };
    return;
}