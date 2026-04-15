//
function script12201(int0: int, int1: int, int2: unknown_int, int3: unknown_int, int4: component, int5: unknown_int): void {
    var int6 = script12076(int0);
    var string0 = "null";
    var string1 = "null";
    if (((int6 != 486 as dbrow) && (int6 != -1 as dbrow))) {
        if ((int5 == 1)) {
            string0 = script12078(int6, int1);
            string1 = `${string0}<br>This perk uses up two slots on a gizmo.`;
            stack(dbrow_getfield(int6, 32816, 0));
            stack(int2);
            IF_SETGRAPHIC();
        } else {
            string0 = script12078(int6, int1);
            string1 = `${string0}<br>${dbrow_getfield(int6, 32832, 0)}`;
            stack(dbrow_getfield(int6, 32800, 0));
            stack(int2);
            IF_SETGRAPHIC();
        };
    } else {
        string0 = "None";
        string1 = "No perk in this slot.";
        stack(-1);
        stack(int2);
        IF_SETGRAPHIC();
    };
    if ((DB_GETFIELDCOUNT(int6, 32880) > 1)) {
        switch (int1) {
            case 1: {
                stack(24238);
                stack(int3);
                IF_SETGRAPHIC();
                break;
            }
            case 2: {
                stack(24239);
                stack(int3);
                IF_SETGRAPHIC();
                break;
            }
            case 3: {
                stack(24240);
                stack(int3);
                IF_SETGRAPHIC();
                break;
            }
            case 4: {
                stack(24253);
                stack(int3);
                IF_SETGRAPHIC();
                break;
            }
            case 5: {
                stack(10564);
                stack(int3);
                IF_SETGRAPHIC();
                break;
            }
            case 6: {
                stack(10600);
                stack(int3);
                IF_SETGRAPHIC();
                break;
            }
            default: {
                stack(-1);
                stack(int3);
                IF_SETGRAPHIC();
                break;
            }
        };
    } else {
        stack(-1);
        stack(int3);
        IF_SETGRAPHIC();
    };
    if ((int4 != comp(-1, 65535))) {
        IF_SETTEXT(string0, int4);
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string1, int2, -1), int2);
    return;
}