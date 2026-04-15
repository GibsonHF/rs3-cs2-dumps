//
function script713(int0: unknown_int, int1: component, int2: component, int3: unknown_int, int4: unknown_int, int5: component, int6: component): void {
    var int7 = INV_GETOBJ(541 as inv, 0);
    if ((int7 != -1 as obj)) {
        IF_SETOBJECT_NONUM(int7, 1, int1);
        IF_SETOUTLINE(1, int1);
        IF_SETGRAPHICSHADOW(3355443, int1);
        IF_SETOP(1, "Remove", int1);
        IF_SETOP(10, "Examine", int1);
        IF_SETOPBASE(`<col=ff9040>${OC_NAME(int7)}</col>`, int1);
        if ((varbitplayer_1046 == 0)) {
            IF_SETTEXT("<col=ff0000>Until</col><br><col=ff0000>logout</col>", int2);
            IF_CLEAROPS(int2);
            IF_SETOP(2, "Specify", int2);
        } else {
            if ((varbitplayer_1046 == 1)) {
                IF_SETTEXT("1 hour", int2);
            } else {
                IF_SETTEXT(`${inttostring(varbitplayer_1046, 10)} hours`, int2);
            };
            IF_SETOP(1, "'Until logout'", int2);
            IF_SETOP(2, "Edit", int2);
        };
        IF_SETOPBASE("<col=ff9040>Duration</col>", int2);
    } else {
        IF_SETOBJECT_NONUM(-1 as obj, 0, int1);
        IF_SETTEXT("", int2);
        IF_CLEAROPS(int1);
        IF_CLEAROPS(int2);
        IF_SETOPBASE("", int1);
        IF_SETOPBASE("", int2);
    };
    int7 = INVOTHER_GETOBJ(541 as inv, 0);
    if ((int7 != -1 as obj)) {
        IF_SETOBJECT_NONUM(int7, 1, int5);
        IF_SETOUTLINE(1, int5);
        IF_SETGRAPHICSHADOW(3355443, int5);
        IF_SETOP(10, "Examine", int5);
        IF_SETOPBASE(`<col=ff9040>${OC_NAME(int7)}</col>`, int5);
        if ((varbitplayer_1047 == 0)) {
            IF_SETTEXT("<col=ff0000>Until</col><br><col=ff0000>logout</col>", int6);
        } else if ((varbitplayer_1047 == 1)) {
            IF_SETTEXT("1 hour", int6);
        } else {
            IF_SETTEXT(`${inttostring(varbitplayer_1047, 10)} hours`, int6);
        };
    } else {
        IF_SETOBJECT_NONUM(-1 as obj, 0, int5);
        IF_SETTEXT("", int6);
        IF_CLEAROPS(int5);
        IF_SETOPBASE("", int5);
    };
    return;
}