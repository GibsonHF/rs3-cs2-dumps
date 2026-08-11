//
function script11739(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    if (((int1 == -1) || (int1 == 32063))) {
        if ((int0 == 1)) {
            IF_SETHIDE(true, comp(1657, 14));  // comscenario_faction_hud:objective_1
        } else if ((int0 == 2)) {
            IF_SETHIDE(true, comp(1657, 13));  // comscenario_faction_hud:objective_2
        } else if ((int0 == 3)) {
            IF_SETHIDE(true, comp(1657, 12));  // comscenario_faction_hud:objective_3
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
    IF_SETHIDE(false, comp(1657, 9));  // comscenario_faction_hud:objectives_holder
    if ((int0 == 1)) {
        IF_SETHIDE(false, comp(1657, 14));  // comscenario_faction_hud:objective_1
        IF_SETTEXT(struct_getparam(int1, 5216), comp(1657, 16));  // comscenario_faction_hud:objective_1_title
        if ((int1 == 32062)) {
            IF_SETTEXT(`<col=ffff00>Goal: ${string2}`, comp(1657, 17));  // comscenario_faction_hud:objective_1_score
        } else {
            IF_SETTEXT(`<col=ff0000>${string0}/${string2} </col>| <col=00ff00>${string1}/${string2}`, comp(1657, 17));  // comscenario_faction_hud:objective_1_score
        };
        if ((int6 == 1)) {
            IF_SETTEXT("Win Condition", comp(1657, 18));  // comscenario_faction_hud:objective_1_value
        } else {
            IF_SETTEXT(inttostring(int5, 10), comp(1657, 18));  // comscenario_faction_hud:objective_1_value
        };
    } else if ((int0 == 2)) {
        IF_SETHIDE(false, comp(1657, 13));  // comscenario_faction_hud:objective_2
        IF_SETTEXT(struct_getparam(int1, 5216), 108593185);
        if ((int1 == 32062)) {
            IF_SETTEXT(`<col=ffff00>Goal: ${string2}`, comp(1657, 34));  // comscenario_faction_hud:objective_2_score
        } else {
            IF_SETTEXT(`<col=ff0000>${string0}/${string2} </col>| <col=00ff00>${string1}/${string2}`, comp(1657, 34));  // comscenario_faction_hud:objective_2_score
        };
        if ((int6 == 1)) {
            IF_SETTEXT("Win Condition", comp(1657, 35));  // comscenario_faction_hud:objective_2_value
        } else {
            IF_SETTEXT(inttostring(int5, 10), comp(1657, 35));  // comscenario_faction_hud:objective_2_value
        };
    } else if ((int0 == 3)) {
        IF_SETHIDE(false, comp(1657, 12));  // comscenario_faction_hud:objective_3
        IF_SETTEXT(struct_getparam(int1, 5216), 108593189);
        if ((int1 == 32062)) {
            IF_SETTEXT(`<col=ffff00>Goal: ${string2}`, comp(1657, 38));  // comscenario_faction_hud:objective_3_score
        } else {
            IF_SETTEXT(`<col=ff0000>${string0}/${string2} </col>| <col=00ff00>${string1}/${string2}`, comp(1657, 38));  // comscenario_faction_hud:objective_3_score
        };
        if ((int6 == 1)) {
            IF_SETTEXT("Win Condition", comp(1657, 39));  // comscenario_faction_hud:objective_3_value
        } else {
            IF_SETTEXT(inttostring(int5, 10), comp(1657, 39));  // comscenario_faction_hud:objective_3_value
        };
    };
    return;
}