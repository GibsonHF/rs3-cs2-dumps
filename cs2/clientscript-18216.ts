//
function script18216(int0: unknown_int, int1: int): unknown_int {
    var int2 = TESTBIT(int1, 1);
    var int3 = TESTBIT(int1, 3);
    var int4 = TESTBIT(int1, 6);
    var int5 = -1;
    if ((int2 == 1)) {
        if ((int3 == 1)) {
            if ((int4 == 1)) {
            } else {
                int5 = IF_SETPLAYERHEAD_SELF(IF_SETPLAYERHEAD_SELF(IF_SETPLAYERHEAD_SELF(script18215()), IF_SETPLAYERHEAD_SELF(script18214())));
            };
        } else if ((int4 == 1)) {
            int5 = IF_SETPLAYERHEAD_SELF(IF_SETPLAYERHEAD_SELF(IF_SETPLAYERHEAD_SELF(script18215()), script18214()));
        } else {
            int5 = script18215();
        };
    } else if ((int3 == 1)) {
        if ((int4 == 1)) {
            int5 = IF_SETPLAYERHEAD_SELF(script18215());
        } else {
            int5 = IF_SETPLAYERHEAD_SELF(IF_SETPLAYERHEAD_SELF(script18215()), script18214());
        };
    } else if ((int4 == 1)) {
        int5 = IF_SETPLAYERHEAD_SELF(IF_SETPLAYERHEAD_SELF(script18215()), IF_SETPLAYERHEAD_SELF(script18214()));
    } else {
        var int0 = WORLDMAP_LISTELEMENT_START(668032, -2147483648, 1, 0);
        int5 = -1;
    };
    return script18210(int0, int5);
}