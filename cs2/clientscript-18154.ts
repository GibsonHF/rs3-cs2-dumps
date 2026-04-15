//
function script18154(int0: unknown_int): int {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = script12869(47781 as struct);
    while ((int1 < 7)) {
        int2 = 0;
        if ((int5 < enum_getvalue(0, 0, 6152 as cs2enum, int1))) {
            return int3;
        };
        while ((int2 < 2)) {
            if (((script18141(int2, int1) != 1) && ((PLAYERMEMBER() == true) || ((PLAYERMEMBER() == false) && (script18149(int2) != 2))))) {
                if ((int0 == 0)) {
                    return 1;
                };
                int4 = (int4 + 1);
            };
            int2 = (int2 + 1);
        };
        if ((int4 > 0)) {
            if ((int0 == 1)) {
                int3 = (int3 + 1);
            } else if ((int0 == 2)) {
                int3 = (int3 + int4);
            };
            int4 = 0;
        };
        int1 = (int1 + 1);
    };
    return int3;
}