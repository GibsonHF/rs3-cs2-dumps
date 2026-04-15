//
function script2592(int0: int, int1: int, int2: int, int3: int): [int, int] {
    var int4 = int1;
    var int5 = int0;
    if ((int5 == -1)) {
        var [int0, int1] = script3222(int1);
    } else if ((int1 == -1)) {
        if ((int0 == int2)) {
            int1 = script5798((int0 - 1));
        } else {
            int1 = script5798(int0);
        };
    };
    if ((varplayer_8970 != -1)) {
        if ((int3 == 1)) {
            if (((int5 == -1) && (int4 == -1))) {
                int0 = varplayer_8970;
            } else {
                if (((((int0 == int5) && (int0 != script14337())) && (int0 < int2)) && (script14344(int0) == -1 as obj))) {
                    return [int0, int1];
                };
                if ((script14337() >= int2)) {
                    if ((int5 != -1)) {
                        if ((((int5 >= int2) || (script14344(int5) != -1 as obj)) || ((int4 != -1) && ((int0 >= int2) || (script14344(int0) != -1 as obj))))) {
                            int0 = (int0 - script14293(0, int0));
                            int1 = script14356(int1);
                        };
                    } else if (((int4 != -1) && ((int0 >= int2) || (script14344(int0) != -1 as obj)))) {
                        int0 = (int0 - script14293(0, int0));
                        int1 = script14356(int1);
                    };
                } else if (((int0 > 0) && (script14344((int0 - 1)) == -1 as obj))) {
                    return [(int0 - 1), int1];
                };
            };
        } else if ((int3 > 1)) {
            int0 = (varplayer_8970 - script14293(0, varplayer_8970));
            int1 = script14356(script5798(int0));
        };
    };
    if ((int0 >= 1820)) {
        int0 = script705(int0, int1);
    };
    if ((script14344(int0) != -1 as obj)) {
        script14361(int0, (MIN(int2, (script14337() + int3)) - int3), int3);
        script6316(int1, int3);
        varplayer_8971 = (varplayer_8971 + int3);
    } else if ((int4 != -1)) {
        script6316(int4, int3);
        varplayer_8971 = (varplayer_8971 + int3);
    } else if ((int0 >= varplayer_8971)) {
        varplayer_8971 = (varplayer_8971 + int3);
        if (((int1 != 1) && (script5798(int0) == 1))) {
            script6316(int1, int3);
        };
    };
    return [int0, int1];
}