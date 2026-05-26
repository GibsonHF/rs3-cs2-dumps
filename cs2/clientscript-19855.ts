//
function script19855(): void {
    var int0 = varplayer_12120;
    define_array(5);
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    int3 = (int3 + script19850(3625));
    pop_array(1, int3);
    if (((int1 == -1) && (int0 < int3))) {
        int1 = 1;
        int2 = int3;
    };
    int3 = (int3 + script19850(3626));
    pop_array(2, int3);
    if (((int1 == -1) && (int0 < int3))) {
        int1 = 2;
        int2 = int3;
    };
    int3 = (int3 + script19850(3627));
    pop_array(3, int3);
    if (((int1 == -1) && (int0 < int3))) {
        int1 = 3;
        int2 = int3;
    };
    int3 = (int3 + script19850(3628));
    pop_array(4, int3);
    if (((int1 == -1) && (int0 < int3))) {
        int1 = 4;
        int2 = int3;
    };
    script7794(87097490, 21363);
    script7794(87097492, 21363);
    script7794(87097494, 21363);
    script7794(87097496, 21363);
    IF_SETGRAPHIC(10566 as graphic, comp(1329, 168));
    IF_SETGRAPHIC(10566 as graphic, comp(1329, 169));
    IF_SETGRAPHIC(10566 as graphic, comp(1329, 170));
    IF_SETGRAPHIC(10566 as graphic, comp(1329, 171));
    switch (int1) {
        case 1: {
            script7794(87097490, 28303);
            break;
        }
        case 2: {
            script7794(87097490, 29356);
            script7794(87097492, 28303);
            IF_SETGRAPHIC(33556 as graphic, comp(1329, 168));
            break;
        }
        case 3: {
            script7794(87097490, 29356);
            script7794(87097492, 29356);
            script7794(87097494, 28303);
            IF_SETGRAPHIC(33556 as graphic, comp(1329, 168));
            IF_SETGRAPHIC(33556 as graphic, comp(1329, 169));
            break;
        }
        case 4: {
            script7794(87097490, 29356);
            script7794(87097492, 29356);
            script7794(87097494, 29356);
            script7794(87097496, 28303);
            IF_SETGRAPHIC(33556 as graphic, comp(1329, 168));
            IF_SETGRAPHIC(33556 as graphic, comp(1329, 169));
            IF_SETGRAPHIC(33556 as graphic, comp(1329, 170));
            break;
        }
        default: {
            script7794(87097490, 29356);
            script7794(87097492, 29356);
            script7794(87097494, 29356);
            script7794(87097496, 29356);
            IF_SETGRAPHIC(33556 as graphic, comp(1329, 168));
            IF_SETGRAPHIC(33556 as graphic, comp(1329, 169));
            IF_SETGRAPHIC(33556 as graphic, comp(1329, 170));
            IF_SETGRAPHIC(33556 as graphic, comp(1329, 171));
            break;
        }
    };
    script19856(58412, 87097516);
    script19856(58413, 87097517);
    script19856(58414, 87097518);
    script19856(58415, 87097519);
    if ((int1 == -1)) {
        IF_SETTEXT(`All rewards unlocked (${TOSTRING_LOCALISED(int0, 1)}/${TOSTRING_LOCALISED(int3, 1)})`, comp(1329, 157));
    } else {
        IF_SETTEXT(`Next reward in: ${TOSTRING_LOCALISED((int2 - int0), 1)} (${TOSTRING_LOCALISED(int0, 1)}/${TOSTRING_LOCALISED(int3, 1)})`, comp(1329, 157));
    };
    IF_SETSIZE(0, 0, 1, 1, comp(1329, 163));
    IF_SETPOSITION(SCALE(push_array(1), int3, IF_GETWIDTH(comp(1329, 163))), 0, 0, 1, comp(1329, 168));
    script3536(`Unlock ${script4033(58412)}${OC_NAME(58412 as obj)}</col> at ${TOSTRING_LOCALISED(push_array(1), 1)} CombatScore.`, 87097512, -1);
    IF_SETPOSITION(SCALE(push_array(2), int3, IF_GETWIDTH(comp(1329, 163))), 0, 0, 1, comp(1329, 169));
    script3536(`Unlock ${script4033(58413)}${OC_NAME(58413 as obj)}</col> at ${TOSTRING_LOCALISED(push_array(2), 1)} CombatScore.`, 87097513, -1);
    IF_SETPOSITION(SCALE(push_array(3), int3, IF_GETWIDTH(comp(1329, 163))), 0, 0, 1, comp(1329, 170));
    script3536(`Unlock ${script4033(58414)}${OC_NAME(58414 as obj)}</col> at ${TOSTRING_LOCALISED(push_array(3), 1)} CombatScore.`, 87097514, -1);
    IF_SETPOSITION(SCALE(push_array(4), int3, IF_GETWIDTH(comp(1329, 163))), 0, 0, 1, comp(1329, 171));
    script3536(`Unlock ${script4033(58415)}${OC_NAME(58415 as obj)}</col> at ${TOSTRING_LOCALISED(push_array(4), 1)} CombatScore.`, 87097515, -1);
    IF_SETSIZE(SCALE(int0, int3, IF_GETWIDTH(comp(1329, 163))), 0, 0, 1, comp(1329, 163));
    var int4 = script19831();
    var int5 = script19832();
    if ((int4 != -1 as achievement)) {
        IF_SETTEXT(enum_getvalue(131, 36, 7208 as cs2enum, int4), comp(1329, 40));
        IF_SETGRAPHIC(ACHIEVEMENT_SPRITE(int4), comp(1329, 43));
    } else {
        IF_SETTEXT("-", comp(1329, 40));
        IF_SETGRAPHIC(34762 as graphic, comp(1329, 43));
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
        script9684(`${string0}<br><br>Note: These numbers account for all players who have completed the achievement at some point in RuneScape's history.`, 400, 87097388, -1);
    } else {
        IF_SETTEXT("", comp(1329, 44));
        IF_SETONCLICK(callback(), comp(1329, 44));
        IF_SETONMOUSEREPEAT(callback(), 87097388);
    };
    var int13 = 0;
    var int14 = 0;
    [int13, int14] = script19828();
    IF_SETTEXT(`${TOSTRING_LOCALISED(int13, 1)}/${TOSTRING_LOCALISED(int14, 1)}`, comp(1329, 178));
    [int13, int14] = script19846(4820, 4914);
    IF_SETTEXT(`${TOSTRING_LOCALISED(int13, 1)}/${TOSTRING_LOCALISED(int14, 1)}`, comp(1329, 181));
    [int13, int14] = script19846(4820, 4915);
    IF_SETTEXT(`${TOSTRING_LOCALISED(int13, 1)}/${TOSTRING_LOCALISED(int14, 1)}`, comp(1329, 194));
    script19861();
    return;
}