//
function script12201(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    var int6 = script12076(int0);
    var string0 = "null";
    var string1 = "null";
    if (((int6 != 486 as dbrow) && (int6 != -1 as dbrow))) {
        if ((int5 == 1)) {
            string0 = script12078(int6, int1);
            string1 = `${string0}<br>This perk uses up two slots on a gizmo.`;
            IF_SETGRAPHIC(dbrow_getfield(int6, 32816, 0), int2);
        } else {
            string0 = script12078(int6, int1);
            string1 = `${string0}<br>${dbrow_getfield(int6, 32832, 0)}`;
            IF_SETGRAPHIC(dbrow_getfield(int6, 32800, 0), int2);
        };
    } else {
        string0 = "None";
        string1 = "No perk in this slot.";
        IF_SETGRAPHIC(-1 as graphic, int2);
    };
    if ((DB_GETFIELDCOUNT(int6, 32880) > 1)) {
        switch (int1) {
            case 1: {
                IF_SETGRAPHIC(24238 as graphic, int3);
                break;
            }
            case 2: {
                IF_SETGRAPHIC(24239 as graphic, int3);
                break;
            }
            case 3: {
                IF_SETGRAPHIC(24240 as graphic, int3);
                break;
            }
            case 4: {
                IF_SETGRAPHIC(24253 as graphic, int3);
                break;
            }
            case 5: {
                IF_SETGRAPHIC(10564 as graphic, int3);
                break;
            }
            case 6: {
                IF_SETGRAPHIC(10600 as graphic, int3);
                break;
            }
            default: {
                IF_SETGRAPHIC(-1 as graphic, int3);
                break;
            }
        };
    } else {
        IF_SETGRAPHIC(-1 as graphic, int3);
    };
    if ((int4 != comp(-1, 65535))) {
        IF_SETTEXT(string0, int4);
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string1, int2, -1), int2);
    return;
}