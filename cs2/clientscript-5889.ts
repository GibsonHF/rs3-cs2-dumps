//
function script5889(): void {
    var int0 = 1;
    var int1 = -1 as obj;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1 as cs2enum;
    var int5 = -1 as struct;
    while ((int0 <= 14)) {
        [int2, int3, int1] = script11797(1003, int0);
        if ((int1 == -1 as obj)) {
            switch (int2) {
                case 1: {
                    int4 = 10147 as cs2enum;
                    break;
                }
                case 5: {
                    int4 = 6738 as cs2enum;
                    break;
                }
                case 6: {
                    int4 = 6740 as cs2enum;
                    break;
                }
                case 17: {
                    int4 = 16973 as cs2enum;
                    break;
                }
                case 3: {
                    int4 = 6736 as cs2enum;
                    break;
                }
                case 4: {
                    int4 = 6737 as cs2enum;
                    break;
                }
                default: {
                    int4 = -1 as cs2enum;
                    break;
                }
            };
            if ((int4 != -1 as cs2enum)) {
                int5 = enum_getvalue(0, 73, int4, int3);
                if ((int5 == varclient_4098)) {
                    script5890(script5900(1430, int0), varclient_4098);
                    return;
                };
            };
        };
        int0 = (int0 + 1);
    };
    return;
}