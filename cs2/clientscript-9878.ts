//
function script9878(): void {
    IF_SETONVARTRANSMIT(callback(), comp(1503, 8));  // combatv2_legacy_side:buttons
    var int0 = INV_GETOBJ(94 as inv, 3);
    var int1 = 0;
    var string0 = "Attack";
    var string1 = "";
    var string2 = "";
    var string3 = "Sheathe/unsheathe weapon";
    var int2 = 239 as graphic;
    var int3 = 238 as graphic;
    var int4 = 240 as graphic;
    var int5 = 237 as graphic;
    if ((int0 == -1 as obj)) {
        int1 = 1;
    } else if ((item_getparam(int0, 2825) == 1)) {
        int1 = 1;
    } else if ((item_getparam(int0, 2826) == 1)) {
        int1 = 2;
    } else if ((item_getparam(int0, 2827) == 1)) {
        int1 = 3;
    } else if ((item_getparam(int0, 8898) == 1)) {
        int1 = 4;
    } else {
        int1 = 1;
    };
    switch (int1) {
        case 1: {
            string1 = "Gain Attack XP in combat.";
            break;
        }
        case 2: {
            string0 = "Ranged";
            string1 = "Gain Ranged XP in combat.";
            int2 = 269 as graphic;
            int4 = 268 as graphic;
            int5 = 270 as graphic;
            break;
        }
        case 3: {
            string0 = "Magic";
            string1 = "Gain Magic XP in combat.";
            int2 = 266 as graphic;
            int4 = 267 as graphic;
            int5 = 252 as graphic;
            break;
        }
        case 4: {
            string0 = "Necromancy";
            string1 = "Gain Necromancy XP in combat.";
            int2 = 266 as graphic;
            int4 = 267 as graphic;
            int5 = 252 as graphic;
            break;
        }
    };
    script9879(int1);
    IF_SETHIDE(false, comp(1503, 37));  // combatv2_legacy_side:button1
    if ((((int1 == 2) || (int1 == 3)) || (int1 == 4))) {
        IF_SETHIDE(true, comp(1503, 41));  // combatv2_legacy_side:button2
    } else {
        IF_SETHIDE(false, comp(1503, 41));  // combatv2_legacy_side:button2
    };
    IF_SETHIDE(false, comp(1503, 45));  // combatv2_legacy_side:button3
    script11348();
    IF_SETGRAPHIC(int2, comp(1503, 39));  // combatv2_legacy_side:icon1
    IF_SETGRAPHIC(int3, comp(1503, 43));  // combatv2_legacy_side:icon2
    IF_SETGRAPHIC(int5, comp(1503, 47));  // combatv2_legacy_side:icon3
    IF_SETGRAPHIC(int2, comp(1503, 29));  // combatv2_legacy_side:barbassault_icon1
    IF_SETGRAPHIC(int2, comp(1503, 54));  // combatv2_legacy_side:barbassault_icon1_tiny
    IF_SETGRAPHIC(int4, comp(1503, 32));  // combatv2_legacy_side:barbassault_icon2
    IF_SETGRAPHIC(int4, comp(1503, 56));  // combatv2_legacy_side:barbassault_icon2_tiny
    IF_SETGRAPHIC(int5, comp(1503, 35));  // combatv2_legacy_side:barbassault_icon3
    IF_SETGRAPHIC(int5, comp(1503, 58));  // combatv2_legacy_side:barbassault_icon3_tiny
    IF_SETTEXT(string0, comp(1503, 40));  // combatv2_legacy_side:text1
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), comp(1503, 37));  // combatv2_legacy_side:button1
    IF_SETONMOUSEREPEAT(callback(script8799, string3, -2147483645, -2147483643), comp(1503, 11));  // combatv2_legacy_side:combat_icon
    script9877();
    return;
}