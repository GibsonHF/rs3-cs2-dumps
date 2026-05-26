//
function script12192(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    script12196(0);
    var int7 = 112197663;
    CC_DELETEALL(int7);
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = (IF_GETWIDTH(112197661) - 24);
    var int12 = -1 as dbrow;
    var string0 = "null";
    if ((int0 == 0)) {
        [int8, int9] = script12086(int7, int8, int10, int9, int11, "No effect", 32855);
        int9 = (int9 + 10);
        [int8, int9] = script12086(int7, int8, int10, int9, int11, "Despite much effort, you can't seem to add any effects to your gizmo, and it is completely nonfunctional!<br><br>You manage to safely remove your materials.", 29166);
        int9 = (int9 + 10);
    } else {
        [int8, int9] = script12086(int7, int8, int10, int9, int11, "Success!", 32855);
        int9 = (int9 + 10);
        if ((int2 > 0)) {
            [int8, int9] = script12086(int7, int8, int10, int9, int11, "You created a gizmo with the following perks:", 29166);
        } else {
            [int8, int9] = script12086(int7, int8, int10, int9, int11, "You created a gizmo with the following perk:", 29166);
        };
        int9 = (int9 + 10);
        int12 = script12076(int0);
        string0 = `<col=ffff00>${script12079(int12, int1, -1)}</col>`;
        string0 = `${string0}<br>${dbrow_getfield(int12, 32832, 0)}`;
        [int8, int9] = script176(int7, int8, int10, int9, int11, dbrow_getfield(int12, 32800, 0), 32, 32, string0, 29166);
        int9 = (int9 + 10);
        if ((int2 > 0)) {
            int12 = script12076(int2);
            string0 = `<col=ffff00>${script12079(int12, int3, -1)}</col>`;
            string0 = `${string0}<br>${dbrow_getfield(int12, 32832, 0)}`;
            [int8, int9] = script176(int7, int8, int10, int9, int11, dbrow_getfield(int12, 32800, 0), 32, 32, string0, 29166);
            int9 = (int9 + 10);
        };
        int9 = (int9 + 10);
        [int8, int9] = script12086(int7, int8, int10, int9, int11, `Materials used: ${script12193()}`, 29166);
        int9 = (int9 + 10);
        [int8, int9] = script12086(int7, int8, int10, int9, int11, `You gained ${TOSTRING_LOCALISED((int4 / 10), 1)} Invention XP`, 29166);
        int9 = (int9 + 10);
    };
    script19620(112197664, int7, int9, -1, -1, 0, 8, 8);
    if ((int6 > 0)) {
        if ((int5 > 0)) {
            IF_SETHIDE(1, 112197675);
        } else {
            IF_SETHIDE(0, 112197675);
        };
        IF_SETHIDE(1, 112197692);
    } else {
        IF_SETHIDE(0, 112197675);
        IF_SETHIDE(0, 112197692);
    };
    int7 = 112197668;
    CC_DELETEALL(int7);
    int8 = 0;
    int9 = 5;
    int10 = 5;
    int11 = (IF_GETWIDTH(int7) - 10);
    var int13 = MIN(int6, int5);
    if ((int13 > 0)) {
        [int8, int9] = script12086(int7, int8, int10, int9, int11, `You have enough materials to repeat this ${inttostring(int13, 10)} more ${script4583(int13, "time", "times")}.`, 29166);
        int9 = (int9 + 10);
    } else if ((int6 == 0)) {
        [int8, int9] = script12086(int7, int8, int10, int9, int11, "You do not have any more gizmo shells.", 29166);
        int9 = (int9 + 10);
    } else {
        [int8, int9] = script12086(int7, int8, int10, int9, int11, "You do not have enough materials to repeat this.", 29166);
        int9 = (int9 + 10);
    };
    int7 = 112197696;
    CC_DELETEALL(int7);
    int8 = 0;
    int9 = 5;
    int10 = 5;
    string0 = script4583(int6, "gizmo shell", "gizmo shells");
    [int8, int9] = script12086(int7, int8, int10, int9, int11, `You have ${inttostring(int6, 10)} more ${string0} available.`, 29166);
    int9 = (int9 + 10);
    return;
}