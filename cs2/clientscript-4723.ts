//
function script4723(int0: int, int1: int): [unknown_int, string] {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = -1 as struct;
    if ((CLANPROFILE_FIND() == 1)) {
        int13 = enum_getvalue(0, 73, 4013 as cs2enum, varbitclan_6507);
        if ((int13 != -1 as struct)) {
            int2 = struct_getparam(int13, 1532);
            int3 = struct_getparam(int13, 1533);
            int4 = struct_getparam(int13, 1534);
            int5 = struct_getparam(int13, 1535);
            int6 = struct_getparam(int13, 1536);
            int7 = struct_getparam(int13, 1538);
            int8 = struct_getparam(int13, 1537);
            int9 = struct_getparam(int13, 1540);
            int10 = struct_getparam(int13, 1539);
            int11 = struct_getparam(int13, 1541);
        };
        switch (int0) {
            case 1: {
                if ((int1 < int5)) {
                    int12 = 1;
                };
                break;
            }
            case 2: {
                if ((int1 < int6)) {
                    int12 = 1;
                };
                break;
            }
            case 3: {
                if ((int1 < int8)) {
                    int12 = 1;
                };
                break;
            }
            case 4: {
                if ((int1 < int7)) {
                    int12 = 1;
                };
                break;
            }
            case 7: {
                if ((int1 < int11)) {
                    int12 = 1;
                };
                break;
            }
            case 5: {
                if ((int1 < int10)) {
                    int12 = 1;
                };
                break;
            }
            case 6: {
                if ((int1 < int9)) {
                    int12 = 1;
                };
                break;
            }
        };
    };
    if ((int12 == 1)) {
        return [0, "Downgrading this building would violate the requirements for your citadel walls."];
    };
    return [1, ""];
}