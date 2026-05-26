//
function script9878(): void {
    IF_SETONVARTRANSMIT(callback(), 98500616);
    var int0 = INV_GETOBJ(94, 3);
    var int1 = 0;
    var string0 = "Attack";
    var string1 = "";
    var string2 = "";
    var string3 = "Sheathe/unsheathe weapon";
    var int2 = 239;
    var int3 = 238;
    var int4 = 240;
    var int5 = 237;
    if ((int0 == -1)) {
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
            int2 = 269;
            int4 = 268;
            int5 = 270;
            break;
        }
        case 3: {
            string0 = "Magic";
            string1 = "Gain Magic XP in combat.";
            int2 = 266;
            int4 = 267;
            int5 = 252;
            break;
        }
        case 4: {
            string0 = "Necromancy";
            string1 = "Gain Necromancy XP in combat.";
            int2 = 266;
            int4 = 267;
            int5 = 252;
            break;
        }
    };
    script9879(int1);
    IF_SETHIDE(0, 98500645);
    if ((((int1 == 2) || (int1 == 3)) || (int1 == 4))) {
        IF_SETHIDE(1, 98500649);
    } else {
        IF_SETHIDE(0, 98500649);
    };
    IF_SETHIDE(0, 98500653);
    script11348();
    IF_SETGRAPHIC(int2, 98500647);
    IF_SETGRAPHIC(int3, 98500651);
    IF_SETGRAPHIC(int5, 98500655);
    IF_SETGRAPHIC(int2, 98500637);
    IF_SETGRAPHIC(int2, 98500662);
    IF_SETGRAPHIC(int4, 98500640);
    IF_SETGRAPHIC(int4, 98500664);
    IF_SETGRAPHIC(int5, 98500643);
    IF_SETGRAPHIC(int5, 98500666);
    IF_SETTEXT(string0, 98500648);
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), 98500645);
    IF_SETONMOUSEREPEAT(callback(script8799, string3, -2147483645, -2147483643), 98500619);
    script9877();
    return;
}