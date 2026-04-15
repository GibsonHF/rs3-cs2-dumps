//
function script6889(int0: component, int1: component, int2: component, int3: component): void {
    CC_DELETEALL(int0);
    CC_DELETEALL(int2);
    var int4 = script6890(0, int0, "Boosted stats will be reset.", 0);
    int4 = script6890(int4, int0, "Existing prayers will be stopped.", 0);
    if (((varbitplayer_5000 > 0) || (varbitplayer_17837 == 1))) {
        int4 = script6890(int4, int0, "Some worn items will be taken off.", 0);
    };
    if ((int4 > IF_GETHEIGHT(int0))) {
        IF_SETSCROLLSIZE(0, int4, int0);
        script7791(int1, int0);
        IF_SETHIDE(false, int1);
        IF_SETPOSITION(6, 20, 0, 0, int0);
    } else {
        IF_SETSCROLLSIZE(0, 0, int0);
        CC_DELETEALL(int1);
        IF_SETHIDE(true, int1);
        IF_SETPOSITION(0, 20, 1, 0, int0);
    };
    var int5 = 0;
    var int6 = INV_GETOBJ(94 as inv, 3);
    if (((MAP_MEMBERS() == 1) && ((((((((INV_TOTAL(93 as inv, 10148 as obj) > 0) || (int6 == 10148 as obj)) || (INV_TOTAL(93 as inv, 10147 as obj) > 0)) || (int6 == 10147 as obj)) || (INV_TOTAL(93 as inv, 10146 as obj) > 0)) || (int6 == 10146 as obj)) || (INV_TOTAL(93 as inv, 10149 as obj) > 0)) || (int6 == 10149 as obj)))) {
        int5 = 1;
    };
    var int7 = 0;
    if (((int6 == 19830 as obj) || (INV_TOTAL(93 as inv, 19830 as obj) > 0))) {
        int7 = 1;
    };
    var int8 = 0;
    if (((int6 != -1 as obj) && (OC_WEARPOS2(int6) == 5))) {
        int8 = 1;
    } else {
        int4 = (INV_SIZE(93 as inv) - 1);
        while ((int4 >= 0)) {
            int6 = INV_GETOBJ(93 as inv, int4);
            if ((((int6 != -1 as obj) && (OC_WEARPOS(int6) == 3)) && (OC_WEARPOS2(int6) == 5))) {
                [int8, int4] = [1, 0];
            };
            int4 = (int4 - 1);
        };
    };
    int4 = 0;
    if ((varbitplayer_4989 == 1)) {
        int4 = script6890(int4, int2, "You cannot forfeit the duel.", varclient_1453);
    };
    if ((varbitplayer_4990 == 1)) {
        int4 = script6890(int4, int2, "You cannot move.", varclient_1454);
    };
    var int9 = 0;
    if ((varbitplayer_4991 == 1)) {
        int4 = script6890(int4, int2, "You cannot use Ranged attacks.", varclient_1455);
        int9 = 1;
    } else if ((int7 == 1)) {
        int4 = script6890(int4, int2, "Ranging is enabled, but <col=ffffff>your sling cannot be used against players</col>.", 0);
    };
    if ((varbitplayer_4992 == 1)) {
        int4 = script6890(int4, int2, "You cannot use melee attacks.", varclient_1456);
        int9 = 1;
    };
    if ((varbitplayer_4993 == 1)) {
        int4 = script6890(int4, int2, "You cannot use Magic attacks.", varclient_1457);
        int9 = 1;
    } else if ((varbitplayer_0 == 2)) {
        int4 = script6890(int4, int2, "Magical combat is enabled,<br> but you're on the <col=ffffff>Lunar spellbook</col>.", 0);
    };
    if (((int5 == 1) && (int9 == 1))) {
        int4 = script6890(int4, int2, "You cannot use <col=ffffff>salamanders</col>.", 0);
    };
    var string0 = "You can summon familiars.";
    if ((varbitplayer_5001 == 1)) {
        if ((int9 == 1)) {
            string0 = "You can summon familiars. Melee / Ranged / Magic restrictions <col=ffffff>do not apply</col> to familiars' attacks.";
        };
        int4 = script6890(int4, int2, string0, varclient_1464);
    };
    if ((varbitplayer_4999 == 1)) {
        int4 = script6890(int4, int2, "You cannot use abilities.", varclient_1463);
    };
    if ((varbitplayer_4998 == 1)) {
        int4 = script6890(int4, int2, "You can only attack with 'fun' weapons.", varclient_1462);
    };
    if ((varbitplayer_4994 == 1)) {
        int4 = script6890(int4, int2, "You cannot use drinks.", varclient_1458);
    };
    if ((varbitplayer_4995 == 1)) {
        int4 = script6890(int4, int2, "You cannot use food or healing portents.", varclient_1459);
    };
    if ((varbitplayer_4996 == 1)) {
        int4 = script6890(int4, int2, "You cannot use Prayer.", varclient_1460);
    };
    if ((varbitplayer_4997 == 1)) {
        int4 = script6890(int4, int2, "There will be obstacles in the arena.", varclient_1461);
    };
    if ((TESTBIT(varbitplayer_5000, 0) == 1)) {
        int4 = script6890(int4, int2, "You cannot wear items on your head.", varclient_1465);
    };
    if ((TESTBIT(varbitplayer_5000, 1) == 1)) {
        int4 = script6890(int4, int2, "You cannot wear items on your back, such as capes.", varclient_1466);
    };
    if ((TESTBIT(varbitplayer_5000, 2) == 1)) {
        int4 = script6890(int4, int2, "You cannot wear items on your front, such as amulets.", varclient_1467);
    };
    if ((TESTBIT(varbitplayer_5000, 3) == 1)) {
        int4 = script6890(int4, int2, "You cannot wield items in your right hand.", varclient_740);
    };
    if ((TESTBIT(varbitplayer_5000, 4) == 1)) {
        int4 = script6890(int4, int2, "You cannot wear items on your torso.", varclient_745);
    };
    if ((TESTBIT(varbitplayer_5000, 5) == 1)) {
        if ((int8 == 1)) {
            string0 = "You cannot wield items in your left hand <col=ffffff>or use 2-handed weapons, such as bows</col>.";
        } else {
            string0 = "You cannot wield items in your left hand or use 2-handed weapons.";
        };
        int4 = script6890(int4, int2, string0, varclient_780);
    };
    if ((TESTBIT(varbitplayer_5000, 7) == 1)) {
        int4 = script6890(int4, int2, "You cannot wear items on your legs.", varclient_781);
    };
    if ((TESTBIT(varbitplayer_5000, 9) == 1)) {
        int4 = script6890(int4, int2, "You cannot wear items on your hands.", varclient_782);
    };
    if ((TESTBIT(varbitplayer_5000, 10) == 1)) {
        int4 = script6890(int4, int2, "You cannot wear items on your feet.", varclient_789);
    };
    if ((TESTBIT(varbitplayer_5000, 12) == 1)) {
        int4 = script6890(int4, int2, "You cannot use your ring slot.", varclient_1409);
    };
    if ((TESTBIT(varbitplayer_5000, 13) == 1)) {
        int4 = script6890(int4, int2, "You cannot use your quiver.", varclient_1410);
    };
    if ((varbitplayer_17837 == 1)) {
        int4 = script6890(int4, int2, "You cannot wear items in your pocket.", varclient_2700);
    };
    if ((int4 > IF_GETHEIGHT(int2))) {
        IF_SETSCROLLSIZE(0, int4, int2);
        script7791(int3, int2);
        IF_SETHIDE(false, int3);
        IF_SETPOSITION(6, 20, 0, 0, int2);
    } else {
        IF_SETSCROLLSIZE(0, 0, int2);
        CC_DELETEALL(int3);
        IF_SETHIDE(true, int3);
        IF_SETPOSITION(0, 20, 1, 0, int2);
    };
    return;
}