//
function script12192(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int): void {
    script12196(false);
    var int7 = comp(1712, 31);
    CC_DELETEALL(int7);
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = (IF_GETWIDTH(comp(1712, 29)) - 24);
    var int12 = -1 as dbrow;
    var string0 = "null";
    if ((int0 == 0)) {
        [int8, int9] = script12086(int7, int8, int10, int9, int11, "No effect", 32855 as struct);
        int9 = (int9 + 10);
        [int8, int9] = script12086(int7, int8, int10, int9, int11, "Despite much effort, you can't seem to add any effects to your gizmo, and it is completely nonfunctional!<br><br>You manage to safely remove your materials.", 29166 as struct);
        int9 = (int9 + 10);
    } else {
        [int8, int9] = script12086(int7, int8, int10, int9, int11, "Success!", 32855 as struct);
        int9 = (int9 + 10);
        if ((int2 > 0)) {
            [int8, int9] = script12086(int7, int8, int10, int9, int11, "You created a gizmo with the following perks:", 29166 as struct);
        } else {
            [int8, int9] = script12086(int7, int8, int10, int9, int11, "You created a gizmo with the following perk:", 29166 as struct);
        };
        int9 = (int9 + 10);
        int12 = script12076(int0);
        string0 = `<col=ffff00>${script12079(int12, int1, -1)}</col>`;
        string0 = `${string0}<br>${dbrow_getfield(int12, 32832, 0)}`;
        [int8, int9] = script176(int7, int8, int10, int9, int11, dbrow_getfield(int12, 32800, 0), 32, 32, string0, 29166 as struct);
        int9 = (int9 + 10);
        if ((int2 > 0)) {
            int12 = script12076(int2);
            string0 = `<col=ffff00>${script12079(int12, int3, -1)}</col>`;
            string0 = `${string0}<br>${dbrow_getfield(int12, 32832, 0)}`;
            [int8, int9] = script176(int7, int8, int10, int9, int11, dbrow_getfield(int12, 32800, 0), 32, 32, string0, 29166 as struct);
            int9 = (int9 + 10);
        };
        int9 = (int9 + 10);
        [int8, int9] = script12086(int7, int8, int10, int9, int11, `Materials used: ${script12193()}`, 29166 as struct);
        int9 = (int9 + 10);
        [int8, int9] = script12086(int7, int8, int10, int9, int11, `You gained ${TOSTRING_LOCALISED((int4 / 10), 1)} Invention XP`, 29166 as struct);
        int9 = (int9 + 10);
    };
    script19620(comp(1712, 32), int7, int9, comp(-1, 65535), -1, 0, 8, 8);
    if ((int6 > 0)) {
        if ((int5 > 0)) {
            IF_SETHIDE(true, comp(1712, 43));
        } else {
            IF_SETHIDE(false, comp(1712, 43));
        };
        IF_SETHIDE(true, comp(1712, 60));
    } else {
        IF_SETHIDE(false, comp(1712, 43));
        IF_SETHIDE(false, comp(1712, 60));
    };
    int7 = comp(1712, 36);
    CC_DELETEALL(int7);
    int8 = 0;
    int9 = 5;
    int10 = 5;
    int11 = (IF_GETWIDTH(int7) - 10);
    var int13 = MIN(int6, int5);
    if ((int13 > 0)) {
        [int8, int9] = script12086(int7, int8, int10, int9, int11, `You have enough materials to repeat this ${inttostring(int13, 10)} more ${script4583(int13, "time", "times")}.`, 29166 as struct);
        int9 = (int9 + 10);
    } else if ((int6 == 0)) {
        [int8, int9] = script12086(int7, int8, int10, int9, int11, "You do not have any more gizmo shells.", 29166 as struct);
        int9 = (int9 + 10);
    } else {
        [int8, int9] = script12086(int7, int8, int10, int9, int11, "You do not have enough materials to repeat this.", 29166 as struct);
        int9 = (int9 + 10);
    };
    int7 = comp(1712, 64);
    CC_DELETEALL(int7);
    int8 = 0;
    int9 = 5;
    int10 = 5;
    string0 = script4583(int6, "gizmo shell", "gizmo shells");
    [int8, int9] = script12086(int7, int8, int10, int9, int11, `You have ${inttostring(int6, 10)} more ${string0} available.`, 29166 as struct);
    int9 = (int9 + 10);
    return;
}