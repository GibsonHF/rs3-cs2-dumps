//
function script19168(int0: number): void {
    var int1 = comp(1288, 43);  // trh_academy_shared_overlay:entity_model
    var int2 = comp(1288, 111);  // trh_academy_shared_overlay:entity_name
    var int3 = script19150(int0);
    if ((int3 == -1)) {
        script12478(`Null entity dbrow for promo ID ${inttostring(struct_getparam(int0, 8202), 10)}.`);
        return;
    };
    var int4 = -1 as npc;
    var int5 = -1 as seq;
    [int4, int5] = script19151(int3);
    varclient_7803 = int5;
    IF_SETNPCMODEL(int4, int1);
    IF_SETMODELANGLE(script19205(int3), int1);
    IF_SETONTIMER(callback(), comp(1288, 43));  // trh_academy_shared_overlay:entity_model
    IF_SETMODELANIM(int5, int1);
    var string0 = script19154(int3);
    IF_SETTEXT(string0, int2);
    var int6 = script19206(int3);
    IF_SETTEXT(`Level<br>${inttostring(int6, 10)}`, comp(1288, 112));  // trh_academy_shared_overlay:entity_level
    var int7 = -1 as fontmetrics;
    var int8 = 0;
    switch (int0) {
        case 32986: {
            if ((int6 >= 10000)) {
                IF_SETTEXTFONT(57 as fontmetrics, comp(1288, 112));  // trh_academy_shared_overlay:entity_level
            } else if ((int6 >= 1000)) {
                IF_SETTEXTFONT(58 as fontmetrics, comp(1288, 112));  // trh_academy_shared_overlay:entity_level
            } else {
                IF_SETTEXTFONT(58 as fontmetrics, comp(1288, 112));  // trh_academy_shared_overlay:entity_level
            };
            break;
        }
        case 50263: {
            int7 = script16927(110, IF_GETHEIGHT(int2), 4, 16355, 15, 11, string0);
            IF_SETTEXTFONT(int7, int2);
            int8 = MAX(script19155(string0, int7), 110);
            IF_SETSIZE(int8, IF_GETHEIGHT(int2), 0, 0, int2);
            break;
        }
        case 2951: {
            int7 = 57 as fontmetrics;
            IF_SETTEXTFONT(int7, int2);
            break;
        }
    };
    var int9 = -1 as graphic;
    var int10 = -1 as graphic;
    var int11 = -1 as graphic;
    var int12 = -1 as graphic;
    [int9, int10, int11, int12] = script19170(int3);
    script19169(int0);
    IF_SETHIDE(true, comp(1288, 46));  // trh_academy_shared_overlay:hitsplat_layer
    IF_SETOP(5, "Examine", comp(1288, 44));  // trh_academy_shared_overlay:entity_examine
    IF_SETONOP(callback(script19188), comp(1288, 44));  // trh_academy_shared_overlay:entity_examine
    IF_SETOPBASE(`<col=FFFF00>${script16737(string0)}</col>`, comp(1288, 44));  // trh_academy_shared_overlay:entity_examine
    IF_SETGRAPHIC(int9, comp(1253, 5));  // wheel_of_fortune:background
    IF_SETGRAPHIC(int9, comp(1288, 4));  // trh_academy_shared_overlay:background_graphic
    IF_SETGRAPHIC(int10, comp(1288, 3));  // trh_academy_shared_overlay:swirly
    IF_SETGRAPHIC(int11, comp(1288, 79));  // trh_academy_shared_overlay:milestone_reward_background_0
    IF_SETGRAPHIC(int11, comp(1288, 76));  // trh_academy_shared_overlay:milestone_reward_background_1
    IF_SETGRAPHIC(int11, comp(1288, 73));  // trh_academy_shared_overlay:milestone_reward_background_2
    IF_SETGRAPHIC(int12, comp(1288, 33));  // trh_academy_shared_overlay:entity_loot_gem_tile_0
    IF_SETGRAPHIC(int12, comp(1288, 29));  // trh_academy_shared_overlay:entity_loot_gem_tile_1
    IF_SETGRAPHIC(int12, comp(1288, 25));  // trh_academy_shared_overlay:entity_loot_gem_tile_2
    var int13 = script19207(int3);
    if ((int13 != -1)) {
        unk11087(int13, 1000, 200);
    };
    return;
}