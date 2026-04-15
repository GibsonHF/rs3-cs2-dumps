//
function script2514(int0: int): void {
    var int1 = 1023;
    var int2 = script20385();
    var int3 = enum_getvalue(0, 74, 14569 as cs2enum, int0);
    var int4 = -1 as dbrow;
    var int5 = DB_GETFIELDCOUNT(int3, 127024);
    var int6 = 0;
    if ((int5 > 0)) {
        int1 = int0;
        while ((int6 < int5)) {
            int4 = dbrow_getfield(int3, 127024, int6);
            switch (dbrow_getfield(int4, 127040, 0)) {
                case 1: {
                    if ((script6431() == false)) {
                        int6 = int5;
                    };
                    break;
                }
                case 2: {
                    if ((script6431() == true)) {
                        int6 = int5;
                    };
                    break;
                }
                case 4: {
                    if ((CLIENTTYPE() == 8)) {
                        int6 = int5;
                    };
                    break;
                }
                case 3: {
                    if ((PLATFORMTYPE() != 1)) {
                        int6 = int5;
                    };
                    break;
                }
                case 5: {
                    if ((script19316() == false)) {
                        int6 = int5;
                    };
                    break;
                }
                case 6: {
                    if ((varplayer_12314 <= 0)) {
                        int6 = int5;
                    };
                    break;
                }
                default: {
                    int6 = int5;
                    break;
                }
            };
            int6 = (int6 + 1);
        };
        var int0 = enum_getreverseindex(74, 0, 14569 as cs2enum, int4, 0);
    } else if ((script2522(int3, int2) == 1)) {
        int1 = int2;
    } else {
        int1 = script2513(int3);
    };
    script20383(int1);
    script20384(int0);
    varplayer_8173 = -1 as struct;
    varplayer_8174 = -1 as struct;
    return;
}