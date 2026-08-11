//
function script6834(int0: number, int1: number): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = -1;
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    switch (int0) {
        case 49414177: {
            int2 = comp(754, 39);  // bslay_shop:death_notes_boss_cost
            int4 = comp(754, 46);  // bslay_shop:death_notes_buy_disabled_layer
            break;
        }
        case 49414193: {
            int2 = comp(754, 55);  // bslay_shop:hydrix_boss_cost
            int4 = comp(754, 62);  // bslay_shop:hydrix_buy_disabled_layer
            break;
        }
        case 49414209: {
            int2 = comp(754, 74);  // bslay_shop:deaths_deal_boss_cost
            int3 = comp(754, 72);  // bslay_shop:deaths_deal_slayer_cost
            int4 = comp(754, 81);  // bslay_shop:deaths_deal_buy_disabled_layer
            break;
        }
        case 49414307: {
            int2 = comp(754, 174);  // bslay_shop:tasks_boss_cost
            int3 = comp(754, 172);  // bslay_shop:bonfire_slayer_cost
            int4 = comp(754, 181);  // bslay_shop:tasks_buy_disabled_layer
            int6 = comp(754, 175);  // bslay_shop:tasks_buy_layer
            int5 = 49414313;
            int7 = comp(754, 168);  // bslay_shop:bonfire_unlocked_text
            break;
        }
        case 49414265: {
            int2 = comp(754, 132);  // bslay_shop:lootbeam_boss_cost
            int3 = comp(754, 130);  // bslay_shop:lootbeam_slayer_cost
            int4 = comp(754, 139);  // bslay_shop:lootbeam_buy_disabled_layer
            int6 = comp(754, 133);  // bslay_shop:lootbeam_buy_layer
            int5 = 49414271;
            int7 = comp(754, 126);  // bslay_shop:lootbeam_unlocked_text
            break;
        }
        case 49414286: {
            int2 = comp(754, 153);  // bslay_shop:lootbeam_2_boss_cost
            int3 = comp(754, 151);  // bslay_shop:lootbeam_2_slayer_cost
            int4 = comp(754, 160);  // bslay_shop:lootbeam_2_buy_disabled_layer
            int6 = comp(754, 154);  // bslay_shop:lootbeam_2_buy_layer
            int5 = 49414292;
            int7 = comp(754, 147);  // bslay_shop:lootbeam_2_unlocked_text
            break;
        }
        case 49414229: {
            int2 = comp(754, 92);  // bslay_shop:death_book_boss_cost
            int4 = comp(754, 100);  // bslay_shop:death_book_buy_disabled_layer
            int6 = comp(754, 94);  // bslay_shop:death_book_buy_layer
            int5 = 49414235;
            int7 = comp(754, 90);  // bslay_shop:death_book_unlocked_text
            break;
        }
        case 49414247: {
            int2 = comp(754, 110);  // bslay_shop:reaper_choice_boss_cost
            int4 = comp(754, 118);  // bslay_shop:reaper_choice_buy_disabled_layer
            int6 = comp(754, 112);  // bslay_shop:reaper_choice_buy_layer
            int5 = 49414253;
            int7 = comp(754, 108);  // bslay_shop:reaper_choice_unlocked_text
            break;
        }
        case 49414328: {
            int2 = comp(754, 192);  // bslay_shop:slayer_scroll_boss_cost
            int4 = comp(754, 199);  // bslay_shop:slayer_scroll_buy_disabled_layer
            int6 = comp(754, 193);  // bslay_shop:slayer_scroll_buy_layer
            int5 = 49414334;
            int7 = comp(754, 189);  // bslay_shop:slayer_scroll_unlocked_text
            break;
        }
        case 49414346: {
            int2 = comp(754, 210);  // bslay_shop:deaths_support_boss_cost
            int4 = comp(754, 217);  // bslay_shop:deaths_support_buy_disabled_layer
            int6 = comp(754, 211);  // bslay_shop:deaths_support_buy_layer
            int5 = 49414352;
            int7 = comp(754, 207);  // bslay_shop:deaths_support_unlocked_text
            break;
        }
        case 49414364: {
            int2 = comp(754, 228);  // bslay_shop:overcharge_ring_of_death_boss_cost
            int4 = comp(754, 235);  // bslay_shop:overcharge_ring_of_death_buy_disabled_layer
            int6 = comp(754, 229);  // bslay_shop:overcharge_ring_of_death_buy_layer
            int5 = 49414370;
            int7 = comp(754, 225);  // bslay_shop:overcharge_ring_of_death_unlocked_text
            break;
        }
    };
    if ((int1 == 1)) {
        IF_SETCOLOUR(13249829, int2);
        if ((int3 != comp(-1, 65535))) {
            IF_SETCOLOUR(13249829, int3);
        };
    } else {
        IF_SETCOLOUR(16777215, int2);
        if ((int3 != comp(-1, 65535))) {
            IF_SETCOLOUR(16777215, int3);
        };
        if (((int7 != comp(-1, 65535)) && (int6 != comp(-1, 65535)))) {
            IF_SETHIDE(true, int6);
            IF_SETHIDE(false, int7);
        };
    };
    IF_SETHIDE(false, int4);
    return;
}