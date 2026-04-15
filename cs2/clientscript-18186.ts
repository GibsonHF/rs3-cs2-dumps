//
function script18186(int0: unknown_int, int1: int): unknown_int {
    var int2 = TESTBIT(int1, 1);
    var int3 = TESTBIT(int1, 3);
    var int4 = TESTBIT(int1, 6);
    MES_TYPED(99, 0, `Availability: ${inttostring(int2, 10)} ${inttostring(int3, 10)} ${inttostring(int4, 10)}`);
    var int5 = -1;
    if ((int2 == 1)) {
        if ((int3 == 1)) {
            if ((int4 == 1)) {
            } else {
                int5 = IF_SETPLAYERHEAD_SELF(IF_SETPLAYERHEAD_SELF(IF_SETPLAYERHEAD_SELF(script18185()), IF_SETPLAYERHEAD_SELF(script18184())));
            };
        } else if ((int4 == 1)) {
            int5 = IF_SETPLAYERHEAD_SELF(IF_SETPLAYERHEAD_SELF(IF_SETPLAYERHEAD_SELF(script18185()), script18184()));
        } else {
            int5 = script18185();
        };
    } else if ((int3 == 1)) {
        if ((int4 == 1)) {
            int5 = IF_SETPLAYERHEAD_SELF(script18185());
        } else {
            int5 = IF_SETPLAYERHEAD_SELF(IF_SETPLAYERHEAD_SELF(script18185()), script18184());
        };
    } else if ((int4 == 1)) {
        int5 = IF_SETPLAYERHEAD_SELF(IF_SETPLAYERHEAD_SELF(script18185()), IF_SETPLAYERHEAD_SELF(script18184()));
    } else {
        var int0 = WORLDMAP_LISTELEMENT_START(668032, -2147483648, 1, 0);
        int5 = -1;
    };
    return script18180(int0, int5);
}