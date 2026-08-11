//
function script12170(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    IF_SETTEXT(OC_NAME(int0), comp(1713, 1));  // invent_gizmo_examine:item_name
    IF_SETOBJECT(int0, -1, comp(1713, 2));  // invent_gizmo_examine:item_icon
    var int5 = comp(1713, 10);  // invent_gizmo_examine:gizmo_info
    var string0 = "null";
    var int6 = 0;
    var int7 = 10;
    var int8 = 10;
    var int9 = (IF_GETWIDTH(int5) - 20);
    var int10 = -1;
    CC_DELETEALL(int5);
    if ((int1 == 0)) {
        script12086(int5, int6, int8, int7, int9, "This gizmo has no perks.", 29166);
        IF_SETSCROLLSIZE(0, 0, int5);
        IF_SETSCROLLPOS(0, 0, int5);
        IF_SETHIDE(true, comp(1713, 9));  // invent_gizmo_examine:scrollbar_layer
    };
    int10 = script12076(int1);
    string0 = `<col=ffff00>${script12079(int10, int2, -1)}</col>`;
    string0 = `${string0}<br>${dbrow_getfield(int10, 32832, 0)}`;
    var int11 = dbrow_getfield(int10, 32864, 0);
    [int6, int7] = script176(int5, int6, int8, int7, int9, dbrow_getfield(int10, 32800, 0), 32, 32, string0, 29166);
    int7 = (int7 + 10);
    if ((int11 > 1)) {
        string0 = `<col=ffff00>${script12079(int10, int2, -1)}</col>`;
        string0 = `${string0}<br>This perk uses up two slots on a gizmo.`;
        [int6, int7] = script176(int5, int6, int8, int7, int9, dbrow_getfield(int10, 32816, 0), 32, 32, string0, 29166);
        int7 = (int7 + 10);
    } else if ((int3 > 0)) {
        int10 = script12076(int3);
        string0 = `<col=ffff00>${script12079(int10, int4, -1)}</col>`;
        string0 = `${string0}<br>${dbrow_getfield(int10, 32832, 0)}`;
        [int6, int7] = script176(int5, int6, int8, int7, int9, dbrow_getfield(int10, 32800, 0), 32, 32, string0, 29166);
        int7 = (int7 + 10);
    };
    if ((IF_GETHEIGHT(int5) >= (int7 - 8))) {
        IF_SETSCROLLSIZE(0, 0, int5);
        IF_SETSCROLLPOS(0, 0, int5);
        IF_SETHIDE(true, comp(1713, 9));  // invent_gizmo_examine:scrollbar_layer
    } else {
        IF_SETSCROLLSIZE(IF_GETWIDTH(int5), int7, int5);
        IF_SETSCROLLPOS(0, 0, int5);
        IF_SETHIDE(false, comp(1713, 9));  // invent_gizmo_examine:scrollbar_layer
        script7791(112263177, int5);
    };
    return;
}