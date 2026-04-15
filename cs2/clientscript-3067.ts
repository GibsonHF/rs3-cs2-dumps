//
function script3067(int0: unknown_int, int1: unknown_int): void {
    if ((int0 == 2)) {
        if ((int1 == 1)) {
            script3139(script20335(1), 1);
        } else if ((int1 == 2)) {
            script3139(script20335(2), 1);
        } else if ((int1 == 3)) {
            script3139(script20335(3), 1);
        };
        return;
    };
    if ((WORLDLIST_FETCH() == 0)) {
        IF_SETONTIMER(callback(script3067, int0, int1), comp(906, 92));
        return;
    };
    IF_SETONTIMER(callback(), comp(906, 92));
    var int2 = 0;
    var int3 = 0;
    var string0 = "";
    var int4 = 0;
    var string1 = "";
    var int5 = 0;
    var int6 = 0;
    var string2 = "";
    var int7 = -1;
    if ((int1 == 1)) {
        int7 = script20335(1);
    } else if ((int1 == 2)) {
        int7 = script20335(2);
    } else if ((int1 == 3)) {
        int7 = script20335(3);
    } else {
        return;
    };
    stack(unk11101());
    [int2, int3, string0, int4, string1, int5, int6, string2] = stack();
    var int8 = 0;
    while (((int2 != -1) && (int8 == 0))) {
        if ((int2 == int7)) {
            int8 = 1;
        } else {
            stack(unk11100());
            [int2, int3, string0, int4, string1, int5, int6, string2] = stack();
        };
    };
    if ((int2 > 0)) {
        if ((MAP_WORLD() != int2)) {
            if ((((TESTBIT(int3, 30) == 1) && (script16823() == false)) && (STAFFMODLEVEL() < 2))) {
                script3064(true);
                script3093(-5, 4036 as dbrow, "Connection Failed", "You do not have access to Fresh Start Worlds. Please select a different world and try again.", 2608, "", "Back");
            } else if ((((TESTBIT(int3, 30) == 0) && (script16823() == true)) && (STAFFMODLEVEL() < 2))) {
                script3064(true);
                script3093(-5, 4036 as dbrow, "Connection Failed", "You only have access to Fresh Start Worlds. Please select a different world and try again.", 2608, "", "Back");
            } else if ((unk11027(int2, string2) == 1)) {
                varclient_547 = 0;
                script3064(true);
                script3062(comp(906, 81));
                script3116();
            } else {
                script3064(true);
                script3093(-5, 4036 as dbrow, "Connection Failed", "Could not connect you to the chosen world. Please choose another.", 2608, "", "Back");
            };
        } else {
            script3062(comp(906, 81));
        };
    } else {
        script3093(-5, 4036 as dbrow, "Connection Failed", `World ${inttostring(int7, 10)} is running in a different language or is unavailable.`, 2608, "", "Back");
    };
    return;
}