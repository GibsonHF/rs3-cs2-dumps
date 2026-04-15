//
function script11739(int0: unknown_int, int1: struct, int2: int, int3: int, int4: int, int5: int, int6: unknown_int): void {
    if (((int1 == -1 as struct) || (int1 == 32063 as struct))) {
        if ((int0 == 1)) {
            IF_SETHIDE(true, comp(1657, 14));
        } else if ((int0 == 2)) {
            IF_SETHIDE(true, comp(1657, 13));
        } else if ((int0 == 3)) {
            IF_SETHIDE(true, comp(1657, 12));
        };
        return;
    };
    var string0 = inttostring(int3, 10);
    var string1 = inttostring(int4, 10);
    var string2 = inttostring(int2, 10);
    var int7 = int2;
    if ((int2 > 1000)) {
        int7 = (int2 / 1000);
        string2 = `${inttostring(int7, 10)}.${inttostring((MODULO(int2, 1000) / 100), 10)}k`;
    };
    if ((int3 > 1000)) {
        int7 = (int3 / 1000);
        string0 = `${inttostring(int7, 10)}.${inttostring((MODULO(int3, 1000) / 100), 10)}k`;
    };
    if ((int4 > 1000)) {
        int7 = (int4 / 1000);
        string1 = `${inttostring(int7, 10)}.${inttostring((MODULO(int4, 1000) / 100), 10)}k`;
    };
    IF_SETHIDE(false, comp(1657, 9));
    if ((int0 == 1)) {
        IF_SETHIDE(false, comp(1657, 14));
        IF_SETTEXT(struct_getparam(int1, 5216), comp(1657, 16));
        if ((int1 == 32062 as struct)) {
            IF_SETTEXT(`<col=ffff00>Goal: ${string2}`, comp(1657, 17));
        } else {
            IF_SETTEXT(`<col=ff0000>${string0}/${string2} </col>| <col=00ff00>${string1}/${string2}`, comp(1657, 17));
        };
        if ((int6 == 1)) {
            IF_SETTEXT("Win Condition", comp(1657, 18));
        } else {
            IF_SETTEXT(inttostring(int5, 10), comp(1657, 18));
        };
    } else if ((int0 == 2)) {
        IF_SETHIDE(false, comp(1657, 13));
        IF_SETTEXT(struct_getparam(int1, 5216), comp(1657, 33));
        if ((int1 == 32062 as struct)) {
            IF_SETTEXT(`<col=ffff00>Goal: ${string2}`, comp(1657, 34));
        } else {
            IF_SETTEXT(`<col=ff0000>${string0}/${string2} </col>| <col=00ff00>${string1}/${string2}`, comp(1657, 34));
        };
        if ((int6 == 1)) {
            IF_SETTEXT("Win Condition", comp(1657, 35));
        } else {
            IF_SETTEXT(inttostring(int5, 10), comp(1657, 35));
        };
    } else if ((int0 == 3)) {
        IF_SETHIDE(false, comp(1657, 12));
        IF_SETTEXT(struct_getparam(int1, 5216), comp(1657, 37));
        if ((int1 == 32062 as struct)) {
            IF_SETTEXT(`<col=ffff00>Goal: ${string2}`, comp(1657, 38));
        } else {
            IF_SETTEXT(`<col=ff0000>${string0}/${string2} </col>| <col=00ff00>${string1}/${string2}`, comp(1657, 38));
        };
        if ((int6 == 1)) {
            IF_SETTEXT("Win Condition", comp(1657, 39));
        } else {
            IF_SETTEXT(inttostring(int5, 10), comp(1657, 39));
        };
    };
    return;
}