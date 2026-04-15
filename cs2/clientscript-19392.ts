//
function script19392(int0: int, int1: int, string0: string): [int, string, int, string, graphic] {
    var string1 = inttostring(int1, 10);
    if ((int1 >= 300)) {
        if ((int1 < 600)) {
            return [24, string1, 16777060, `Old School ${string1}`, 131 as graphic];
        };
        if (((int1 < 1100) || (int1 > 6000))) {
            return [0, string1, 16777060, `World ${string1}`, -1 as graphic];
        };
        return [0, "Lobby", 16777060, "Lobby", -1 as graphic];
    };
    var int2 = 0;
    var int3 = script19413(int0);
    if ((int1 == -1)) {
        int2 = script19327(int3);
        string1 = script19325((DATE_MINUTES() - int2));
        return [0, string1, 9342606, `'${string0}' was last online: ${string1}`, -1 as graphic];
    };
    var int4 = script12799(int1, MAP_WORLD(), 3979038, 16777060);
    var string2 = `RuneScape ${string1}`;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1 as graphic;
    [string2, int5, int6] = script6305(string2, int1);
    if ((int6 > 0)) {
        int7 = enum_getvalue(0, 23, 1810 as cs2enum, int6);
    } else {
        int7 = 23848 as graphic;
    };
    if ((int5 != -1)) {
        if ((TESTBIT(int5, 24) == 1)) {
            int7 = 35198 as graphic;
        } else if ((TESTBIT(int5, 16) == 1)) {
            int7 = 23849 as graphic;
        };
    };
    return [24, string1, int4, string2, int7];
}