//
function script531(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = -1 as graphic;
    var int5 = 0;
    var int6 = -1;
    var int7 = comp(-1, 65535);
    var int8 = comp(-1, 65535);
    var int9 = false;
    if ((((int0 == comp(-1, 65535)) || (int1 == -1 as graphic)) || (int2 == -1 as graphic))) {
        return;
    };
    if ((int0 == comp(301, 52))) {  // assister_interface:runecrafting_icon
        int5 = script543(varbitplayer_3044);
        int7 = comp(301, 34);  // assister_interface:runecraft_text
        int8 = comp(301, 35);  // assister_interface:runecraft_xp
    };
    if ((int0 == comp(301, 53))) {  // assister_interface:crafting_icon_on
        int5 = script543(varbitplayer_3045);
        int7 = comp(301, 36);  // assister_interface:crafting_text
        int8 = comp(301, 37);  // assister_interface:crafting_xp
    };
    if ((int0 == comp(301, 54))) {  // assister_interface:fletching_icon_on
        int5 = script543(varbitplayer_3047);
        int7 = comp(301, 38);  // assister_interface:fletching_text
        int8 = comp(301, 39);  // assister_interface:fletching_xp
    };
    if ((int0 == comp(301, 55))) {  // assister_interface:construction_icon_on
        int5 = script543(varbitplayer_3049);
        int7 = comp(301, 40);  // assister_interface:construction_text
        int8 = comp(301, 41);  // assister_interface:construction_xp
    };
    if ((int0 == comp(301, 56))) {  // assister_interface:farming_icon_on
        int5 = script543(varbitplayer_3050);
        int7 = comp(301, 42);  // assister_interface:farming_text
        int8 = comp(301, 43);  // assister_interface:farming_xp
    };
    if ((int0 == comp(301, 57))) {  // assister_interface:magic_icon_on
        int5 = script543(varbitplayer_3052);
        int7 = comp(301, 44);  // assister_interface:magic_text
        int8 = comp(301, 45);  // assister_interface:magic_xp
    };
    if ((int0 == comp(301, 58))) {  // assister_interface:smithing_icon_on
        int5 = script543(varbitplayer_3054);
        int7 = comp(301, 46);  // assister_interface:smithing_text
        int8 = comp(301, 47);  // assister_interface:smithing_xp
    };
    if ((int0 == comp(301, 59))) {  // assister_interface:cooking_icon_on
        int5 = script543(varbitplayer_3055);
        int7 = comp(301, 48);  // assister_interface:cooking_text
        int8 = comp(301, 49);  // assister_interface:cooking_xp
    };
    if ((int0 == comp(301, 60))) {  // assister_interface:herblore_icon_on
        int5 = script543(varbitplayer_3056);
        int7 = comp(301, 50);  // assister_interface:herblore_text
        int8 = comp(301, 51);  // assister_interface:herblore_xp
    };
    if ((int5 == 1)) {
        int4 = int1;
        int9 = false;
        IF_SETCOLOUR(16430130, int7);
        IF_SETCOLOUR(16430130, int8);
    } else {
        int4 = int2;
        int9 = true;
        IF_SETCOLOUR(13420487, int7);
        IF_SETCOLOUR(13420487, int8);
    };
    IF_SETGRAPHIC(int4, int0);
    IF_SETHIDE(int9, int3);
    return;
}