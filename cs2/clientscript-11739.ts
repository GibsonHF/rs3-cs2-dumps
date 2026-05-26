//
function script11739(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    if (((int1 == -1) || (int1 == 32063))) {
        if ((int0 == 1)) {
            IF_SETHIDE(1, 108593166);
        } else if ((int0 == 2)) {
            IF_SETHIDE(1, 108593165);
        } else if ((int0 == 3)) {
            IF_SETHIDE(1, 108593164);
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
    IF_SETHIDE(0, 108593161);
    if ((int0 == 1)) {
        IF_SETHIDE(0, 108593166);
        IF_SETTEXT(struct_getparam(int1, 5216), 108593168);
        if ((int1 == 32062)) {
            IF_SETTEXT(`<col=ffff00>Goal: ${string2}`, 108593169);
        } else {
            IF_SETTEXT(`<col=ff0000>${string0}/${string2} </col>| <col=00ff00>${string1}/${string2}`, 108593169);
        };
        if ((int6 == 1)) {
            IF_SETTEXT("Win Condition", 108593170);
        } else {
            IF_SETTEXT(inttostring(int5, 10), 108593170);
        };
    } else if ((int0 == 2)) {
        IF_SETHIDE(0, 108593165);
        IF_SETTEXT(struct_getparam(int1, 5216), 108593185);
        if ((int1 == 32062)) {
            IF_SETTEXT(`<col=ffff00>Goal: ${string2}`, 108593186);
        } else {
            IF_SETTEXT(`<col=ff0000>${string0}/${string2} </col>| <col=00ff00>${string1}/${string2}`, 108593186);
        };
        if ((int6 == 1)) {
            IF_SETTEXT("Win Condition", 108593187);
        } else {
            IF_SETTEXT(inttostring(int5, 10), 108593187);
        };
    } else if ((int0 == 3)) {
        IF_SETHIDE(0, 108593164);
        IF_SETTEXT(struct_getparam(int1, 5216), 108593189);
        if ((int1 == 32062)) {
            IF_SETTEXT(`<col=ffff00>Goal: ${string2}`, 108593190);
        } else {
            IF_SETTEXT(`<col=ff0000>${string0}/${string2} </col>| <col=00ff00>${string1}/${string2}`, 108593190);
        };
        if ((int6 == 1)) {
            IF_SETTEXT("Win Condition", 108593191);
        } else {
            IF_SETTEXT(inttostring(int5, 10), 108593191);
        };
    };
    return;
}