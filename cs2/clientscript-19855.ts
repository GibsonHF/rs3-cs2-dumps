//
function script19855(): void {
    var int0 = varplayer_12120;
    define_array(5);
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    int3 = (int3 + script19850(3625 as achievement));
    pop_array(1, int3);
    if (((int1 == -1) && (int0 < int3))) {
        int1 = 1;
        int2 = int3;
    };
    int3 = (int3 + script19850(3626 as achievement));
    pop_array(2, int3);
    if (((int1 == -1) && (int0 < int3))) {
        int1 = 2;
        int2 = int3;
    };
    int3 = (int3 + script19850(3627 as achievement));
    pop_array(3, int3);
    if (((int1 == -1) && (int0 < int3))) {
        int1 = 3;
        int2 = int3;
    };
    int3 = (int3 + script19850(3628 as achievement));
    pop_array(4, int3);
    if (((int1 == -1) && (int0 < int3))) {
        int1 = 4;
        int2 = int3;
    };
    script7794(comp(1329, 146), 21363 as struct);
    script7794(comp(1329, 148), 21363 as struct);
    script7794(comp(1329, 150), 21363 as struct);
    script7794(comp(1329, 152), 21363 as struct);
    stack(10566);
    stack(87097512);
    IF_SETGRAPHIC();
    stack(10566);
    stack(87097513);
    IF_SETGRAPHIC();
    stack(10566);
    stack(87097514);
    IF_SETGRAPHIC();
    stack(10566);
    stack(87097515);
    IF_SETGRAPHIC();
    switch (int1) {
        case 1: {
            script7794(comp(1329, 146), 28303 as struct);
            break;
        }
        case 2: {
            script7794(comp(1329, 146), 29356 as struct);
            script7794(comp(1329, 148), 28303 as struct);
            stack(33556);
            stack(87097512);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            script7794(comp(1329, 146), 29356 as struct);
            script7794(comp(1329, 148), 29356 as struct);
            script7794(comp(1329, 150), 28303 as struct);
            stack(33556);
            stack(87097512);
            IF_SETGRAPHIC();
            stack(33556);
            stack(87097513);
            IF_SETGRAPHIC();
            break;
        }
        case 4: {
            script7794(comp(1329, 146), 29356 as struct);
            script7794(comp(1329, 148), 29356 as struct);
            script7794(comp(1329, 150), 29356 as struct);
            script7794(comp(1329, 152), 28303 as struct);
            stack(33556);
            stack(87097512);
            IF_SETGRAPHIC();
            stack(33556);
            stack(87097513);
            IF_SETGRAPHIC();
            stack(33556);
            stack(87097514);
            IF_SETGRAPHIC();
            break;
        }
        default: {
            script7794(comp(1329, 146), 29356 as struct);
            script7794(comp(1329, 148), 29356 as struct);
            script7794(comp(1329, 150), 29356 as struct);
            script7794(comp(1329, 152), 29356 as struct);
            stack(33556);
            stack(87097512);
            IF_SETGRAPHIC();
            stack(33556);
            stack(87097513);
            IF_SETGRAPHIC();
            stack(33556);
            stack(87097514);
            IF_SETGRAPHIC();
            stack(33556);
            stack(87097515);
            IF_SETGRAPHIC();
            break;
        }
    };
    script19856(58412 as obj, comp(1329, 172));
    script19856(58413 as obj, comp(1329, 173));
    script19856(58414 as obj, comp(1329, 174));
    script19856(58415 as obj, comp(1329, 175));
    if ((int1 == -1)) {
        IF_SETTEXT(`All rewards unlocked (${TOSTRING_LOCALISED(int0, 1)}/${TOSTRING_LOCALISED(int3, 1)})`, comp(1329, 157));
    } else {
        IF_SETTEXT(`Next reward in: ${TOSTRING_LOCALISED((int2 - int0), 1)} (${TOSTRING_LOCALISED(int0, 1)}/${TOSTRING_LOCALISED(int3, 1)})`, comp(1329, 157));
    };
    IF_SETSIZE(0, 0, 1, 1, comp(1329, 163));
    IF_SETPOSITION(SCALE(push_array(1), int3, IF_GETWIDTH(comp(1329, 163))), 0, 0, 1, comp(1329, 168));
    script3536(`Unlock ${script4033(58412 as obj)}${OC_NAME(58412 as obj)}</col> at ${TOSTRING_LOCALISED(push_array(1), 1)} CombatScore.`, comp(1329, 168), -1);
    IF_SETPOSITION(SCALE(push_array(2), int3, IF_GETWIDTH(comp(1329, 163))), 0, 0, 1, comp(1329, 169));
    script3536(`Unlock ${script4033(58413 as obj)}${OC_NAME(58413 as obj)}</col> at ${TOSTRING_LOCALISED(push_array(2), 1)} CombatScore.`, comp(1329, 169), -1);
    IF_SETPOSITION(SCALE(push_array(3), int3, IF_GETWIDTH(comp(1329, 163))), 0, 0, 1, comp(1329, 170));
    script3536(`Unlock ${script4033(58414 as obj)}${OC_NAME(58414 as obj)}</col> at ${TOSTRING_LOCALISED(push_array(3), 1)} CombatScore.`, comp(1329, 170), -1);
    IF_SETPOSITION(SCALE(push_array(4), int3, IF_GETWIDTH(comp(1329, 163))), 0, 0, 1, comp(1329, 171));
    script3536(`Unlock ${script4033(58415 as obj)}${OC_NAME(58415 as obj)}</col> at ${TOSTRING_LOCALISED(push_array(4), 1)} CombatScore.`, comp(1329, 171), -1);
    IF_SETSIZE(SCALE(int0, int3, IF_GETWIDTH(comp(1329, 163))), 0, 0, 1, comp(1329, 163));
    var int4 = script19831();
    var int5 = script19832();
    if ((int4 != -1 as achievement)) {
        IF_SETTEXT(enum_getvalue(131, 36, 7208 as cs2enum, int4), comp(1329, 40));
        stack(ACHIEVEMENT_SPRITE(int4));
        stack(87097387);
        IF_SETGRAPHIC();
    } else {
        IF_SETTEXT("-", comp(1329, 40));
        stack(34762);
        stack(87097387);
        IF_SETGRAPHIC();
    };
    if ((int5 != -1 as achievement)) {
        IF_SETTEXT(`${IF_GETTEXT(comp(1329, 40))}<br><col=969696>(Previously ${enum_getvalue(131, 36, 7208 as cs2enum, int5)})</col>`, comp(1329, 40));
    };
    var int6 = script19852(int4);
    var int7 = script19852(3625 as achievement);
    var int8 = script19852(3626 as achievement);
    var int9 = script19852(3627 as achievement);
    var int10 = script19852(3628 as achievement);
    var int11 = script19852(3629 as achievement);
    var int12 = script19852(3630 as achievement);
    var string0 = "";
    if ((int6 > 0)) {
        IF_SETTEXT(`Achieved by ${TOSTRING_LOCALISED(int6, 1)} ${script4583(int6, "player", "players")}`, comp(1329, 44));
        string0 = `${string0}<sprite=34763> Easy - Achieved by ${TOSTRING_LOCALISED(int7, 1)} ${script4583(int7, "player", "players")}.`;
        string0 = `${string0}<br><sprite=34764> Medium - Achieved by ${TOSTRING_LOCALISED(int8, 1)} ${script4583(int8, "player", "players")}.`;
        string0 = `${string0}<br><sprite=34765> Hard - Achieved by ${TOSTRING_LOCALISED(int9, 1)} ${script4583(int9, "player", "players")}.`;
        string0 = `${string0}<br><sprite=34766> Elite - Achieved by ${TOSTRING_LOCALISED(int10, 1)} ${script4583(int10, "player", "players")}.`;
        string0 = `${string0}<br><sprite=34767> Master - Achieved by ${TOSTRING_LOCALISED(int11, 1)} ${script4583(int11, "player", "players")}.`;
        string0 = `${string0}<br><sprite=34768> Grandmaster - Achieved by ${TOSTRING_LOCALISED(int12, 1)} ${script4583(int12, "player", "players")}.`;
        script9684(`${string0}<br><br>Note: These numbers account for all players who have completed the achievement at some point in RuneScape's history.`, 400, comp(1329, 44), -1);
    } else {
        IF_SETTEXT("", comp(1329, 44));
        IF_SETONCLICK(callback(), comp(1329, 44));
        IF_SETONMOUSEREPEAT(callback(), 87097388);
    };
    var int13 = 0;
    var int14 = 0;
    [int13, int14] = script19828();
    IF_SETTEXT(`${TOSTRING_LOCALISED(int13, 1)}/${TOSTRING_LOCALISED(int14, 1)}`, comp(1329, 178));
    [int13, int14] = script19846(4820 as category, 4914 as category);
    IF_SETTEXT(`${TOSTRING_LOCALISED(int13, 1)}/${TOSTRING_LOCALISED(int14, 1)}`, comp(1329, 181));
    [int13, int14] = script19846(4820 as category, 4915 as category);
    IF_SETTEXT(`${TOSTRING_LOCALISED(int13, 1)}/${TOSTRING_LOCALISED(int14, 1)}`, comp(1329, 194));
    script19861();
    return;
}