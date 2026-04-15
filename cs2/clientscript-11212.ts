//
function script11212(): struct {
    var int0 = -1;
    int0 = script1016(39801 as struct);
    if (((enum_hasoutput(0, 9291 as cs2enum, varplayer_3079) == 1) || ((varplayer_3079 > int0) && (varplayer_3079 <= (int0 + 7))))) {
        return 37675 as struct;
    };
    int0 = script1016(51131 as struct);
    if (((enum_hasoutput(0, 7205 as cs2enum, varplayer_3079) == 1) || ((varplayer_3079 > int0) && (varplayer_3079 <= (int0 + 7))))) {
        return 37675 as struct;
    };
    int0 = script1016(45877 as struct);
    var int1 = enum_hasoutput(0, 16617 as cs2enum, varplayer_3079);
    if (((int1 == 1) && (varplayer_3079 < 8644))) {
        return 45831 as struct;
    };
    if (((int1 == 1) || ((varplayer_3079 > int0) && (varplayer_3079 <= (int0 + 7))))) {
        return 52373 as struct;
    };
    return -1 as struct;
}