//
function script14137(): void {
    var int0 = -1;
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = -1;
    var int7 = comp(-1, 65535);
    var int8 = 0;
    int8 = (int8 + 1);
    while ((int8 <= 3)) {
        switch (int8) {
            case 1: {
                int0 = script7844(varbitplayer_51611);
                int2 = comp(1023, 49);  // trh187_overlay:monster_model_1
                int1 = comp(1023, 44);  // trh187_overlay:monster_layer_1
                int3 = comp(1023, 47);  // trh187_overlay:monster_name_1
                int4 = comp(1023, 48);  // trh187_overlay:monster_rarity_1
                int5 = comp(1023, 45);  // trh187_overlay:monster_gem_1
                int6 = 67043378;
                int7 = comp(1023, 46);  // trh187_overlay:monster_plus_1
                break;
            }
            case 2: {
                int0 = script7844(varbitplayer_51612);
                int2 = comp(1023, 56);  // trh187_overlay:monster_model_2
                int1 = comp(1023, 51);  // trh187_overlay:monster_layer_2
                int3 = comp(1023, 55);  // trh187_overlay:monster_name_2
                int4 = comp(1023, 54);  // trh187_overlay:monster_rarity_2
                int5 = comp(1023, 52);  // trh187_overlay:monster_gem_2
                int6 = 67043385;
                int7 = comp(1023, 53);  // trh187_overlay:monster_plus_2
                break;
            }
            case 3: {
                int0 = script7844(varbitplayer_51613);
                int2 = comp(1023, 63);  // trh187_overlay:monster_model_3
                int1 = comp(1023, 58);  // trh187_overlay:monster_layer_3
                int3 = comp(1023, 62);  // trh187_overlay:monster_name_3
                int4 = comp(1023, 61);  // trh187_overlay:monster_rarity_3
                int5 = comp(1023, 59);  // trh187_overlay:monster_gem_3
                int6 = 67043392;
                int7 = comp(1023, 60);  // trh187_overlay:monster_plus_3
                break;
            }
        };
        script16787(int1, int0);
        if ((varclient_7075 == false)) {
            IF_SETMODELANIM(-1 as seq, int2);
            IF_SETNPCMODEL(-1 as npc, int2);
            IF_SETGRAPHIC(-1 as graphic, int5);
            IF_SETGRAPHIC(-1 as graphic, int7);
            IF_SETTEXT("", int3);
            IF_SETTEXT("", int4);
            IF_SETONTIMER(callback(script14138, ((int8 - 1) * 15), int1, int2, int3, int4, int5, int6, int0), int1);
            varclient_7076 = false;
        };
        IF_SETMODELLIGHTING(256, 1024, 0, 255, 255, 255, 3, -2, -6, 3224 as material, int2);
    };
    return;
}