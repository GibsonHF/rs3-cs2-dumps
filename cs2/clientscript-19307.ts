//
function script19307(int0: number): void {
    IF_SETHIDE(true, comp(1290, 251));  // trh_dungeon_crawl_overlay:reward_preview_1_selected_rect
    IF_SETHIDE(true, comp(1290, 253));  // trh_dungeon_crawl_overlay:reward_preview_2_selected_rect
    IF_SETHIDE(true, comp(1290, 254));  // trh_dungeon_crawl_overlay:reward_preview_3_selected_rect
    IF_SETHIDE(true, comp(1290, 255));  // trh_dungeon_crawl_overlay:reward_preview_4_selected_rect
    IF_SETHIDE(true, comp(1290, 229));  // trh_dungeon_crawl_overlay:reward_preview_5_selected_rect
    IF_SETHIDE(true, comp(1290, 231));  // trh_dungeon_crawl_overlay:reward_preview_6_selected_rect
    IF_SETHIDE(true, comp(1290, 233));  // trh_dungeon_crawl_overlay:reward_preview_7_selected_rect
    IF_SETHIDE(true, comp(1290, 235));  // trh_dungeon_crawl_overlay:reward_preview_8_selected_rect
    IF_SETHIDE(true, comp(1290, 237));  // trh_dungeon_crawl_overlay:reward_preview_9_selected_rect
    IF_SETHIDE(true, comp(1290, 153));  // trh_dungeon_crawl_overlay:reward_preview_10_selected_rect
    IF_SETHIDE(true, comp(1290, 239));  // trh_dungeon_crawl_overlay:reward_preview_11_selected_rect
    IF_SETHIDE(true, comp(1290, 241));  // trh_dungeon_crawl_overlay:reward_preview_12_selected_rect
    IF_SETHIDE(true, comp(1290, 243));  // trh_dungeon_crawl_overlay:reward_preview_13_selected_rect
    IF_SETHIDE(true, comp(1290, 245));  // trh_dungeon_crawl_overlay:reward_preview_14_selected_rect
    IF_SETHIDE(true, comp(1290, 247));  // trh_dungeon_crawl_overlay:reward_preview_15_selected_rect
    IF_SETHIDE(true, comp(1290, 249));  // trh_dungeon_crawl_overlay:reward_preview_16_selected_rect
    script19221(31397, 2687, 80, 110, 0, -512, 0, 460, 84541581);
    script19221(31398, 2687, -80, 110, 0, 512, 0, 460, 84541585);
    IF_SETHIDE(true, comp(1290, 146));  // trh_dungeon_crawl_overlay:reward_preview_npc_model
    IF_SETHIDE(true, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
    IF_SETHIDE(true, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
    IF_SETHIDE(true, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
    IF_SETHIDE(true, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
    IF_SETHIDE(true, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
    IF_SETHIDE(true, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
    IF_SETHIDE(true, comp(1290, 261));  // trh_dungeon_crawl_overlay:reward_preview_player_3_model
    IF_SETHIDE(true, comp(1290, 263));  // trh_dungeon_crawl_overlay:reward_preview_player_4_model
    IF_SETHIDE(true, comp(1290, 265));  // trh_dungeon_crawl_overlay:reward_preview_player_5_model
    IF_SETHIDE(true, comp(1290, 267));  // trh_dungeon_crawl_overlay:reward_preview_player_6_model
    IF_SETHIDE(true, comp(1290, 150));  // trh_dungeon_crawl_overlay:reward_preview_dummy_1
    IF_SETHIDE(true, comp(1290, 149));  // trh_dungeon_crawl_overlay:reward_preview_dummy_2
    IF_SETMODEL(-1 as model, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
    IF_SETMODEL(-1 as model, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
    IF_SETMODEL(-1 as model, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
    IF_SETMODEL(-1 as model, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
    IF_SETMODELANIM(-1 as seq, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
    IF_SETMODELANIM(-1 as seq, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
    IF_SETMODELANIM(-1 as seq, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
    IF_SETMODELANIM(-1 as seq, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
    IF_SETMODELANIM(-1 as seq, comp(1290, 261));  // trh_dungeon_crawl_overlay:reward_preview_player_3_model
    IF_SETMODELANIM(-1 as seq, comp(1290, 263));  // trh_dungeon_crawl_overlay:reward_preview_player_4_model
    IF_SETMODELANIM(-1 as seq, comp(1290, 265));  // trh_dungeon_crawl_overlay:reward_preview_player_5_model
    IF_SETMODELANIM(-1 as seq, comp(1290, 267));  // trh_dungeon_crawl_overlay:reward_preview_player_6_model
    IF_SETONTIMER(callback(), comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
    IF_SETONTIMER(callback(), comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
    IF_SETONTIMER(callback(), comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
    IF_SETONTIMER(callback(), comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
    IF_SETMODELANGLE(0, 0, 0, -512, 0, 800, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
    IF_SETMODELANGLE(0, 0, 0, 512, 0, 800, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
    IF_SETMODELANGLE(80, 110, 0, -512, 0, 460, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
    IF_SETMODELANGLE(-80, 110, 0, 512, 0, 460, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
    unk10997(84541591);
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    switch (int0) {
        case 1: {
            script19221(32253, 2699, 80, 110, 0, -250, 0, 460, 84541581);
            IF_SETMODELANIM(18021 as seq, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            script19221(32252, 2699, -80, 110, 0, 250, 0, 460, 84541585);
            IF_SETMODELANIM(18021 as seq, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            IF_SETHIDE(false, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            IF_SETHIDE(false, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            IF_SETTEXT("Trail", comp(1290, 172));  // trh_dungeon_crawl_overlay:reward_preview_text
            IF_SETHIDE(false, comp(1290, 251));  // trh_dungeon_crawl_overlay:reward_preview_1_selected_rect
            break;
        }
        case 2: {
            int2 = SEQLENGTH(36933 as seq);
            IF_SETTEXT("Loot Beam", comp(1290, 172));  // trh_dungeon_crawl_overlay:reward_preview_text
            IF_SETHIDE(false, comp(1290, 253));  // trh_dungeon_crawl_overlay:reward_preview_2_selected_rect
            IF_SETHIDE(false, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODEL(137235 as model, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODELANIM(36933 as seq, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETHIDE(false, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODEL(137239 as model, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODELANIM(36933 as seq, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODELANGLE(-80, 125, 0, 512, 0, 460, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            break;
        }
        case 3: {
            IF_SETTEXT("Dye Kits", comp(1290, 172));  // trh_dungeon_crawl_overlay:reward_preview_text
            IF_SETHIDE(false, comp(1290, 254));  // trh_dungeon_crawl_overlay:reward_preview_3_selected_rect
            IF_SETHIDE(false, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            IF_SETHIDE(false, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            IF_SETHIDE(false, comp(1290, 261));  // trh_dungeon_crawl_overlay:reward_preview_player_3_model
            IF_SETHIDE(false, comp(1290, 263));  // trh_dungeon_crawl_overlay:reward_preview_player_4_model
            IF_SETHIDE(false, comp(1290, 265));  // trh_dungeon_crawl_overlay:reward_preview_player_5_model
            IF_SETHIDE(false, comp(1290, 267));  // trh_dungeon_crawl_overlay:reward_preview_player_6_model
            script19221(32255, 2698, 0, 90, 0, 0, 0, 560, 84541581);
            script19221(32256, 2698, 0, 90, 0, 0, 0, 560, 84541701);
            script19221(32257, 2698, 0, 90, 0, 0, 0, 560, 84541705);
            script19221(32258, 2698, 0, 90, 0, 0, 0, 560, 84541585);
            script19221(32259, 2698, 0, 90, 0, 0, 0, 560, 84541703);
            script19221(32260, 2698, 0, 90, 0, 0, 0, 560, 84541707);
            break;
        }
        case 4: {
            script19221(32254, 2699, 80, 110, 0, 0, 0, 460, 84541581);
            script19221(32254, 2699, -80, 110, 0, 0, 0, 460, 84541585);
            int2 = SEQLENGTH(37009 as seq);
            IF_SETTEXT("Teleport", comp(1290, 172));  // trh_dungeon_crawl_overlay:reward_preview_text
            IF_SETHIDE(false, comp(1290, 255));  // trh_dungeon_crawl_overlay:reward_preview_4_selected_rect
            IF_SETHIDE(false, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            IF_SETMODELANIM(37009 as seq, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            stack(int2);
            stack(16429);
            stack(BAS_GETANIM_READY(2699 as bas));
            unk11010(84541581, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            IF_SETMODELANIM(37006 as seq, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            stack(int2);
            stack(16429);
            stack(BAS_GETANIM_READY(2699 as bas));
            unk11010(84541585, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODEL(137227 as model, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODELANIM(37012 as seq, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            stack(int2);
            stack(19253);
            stack(-1);
            unk11010(84541582, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODEL(137230 as model, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODELANIM(37015 as seq, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            stack(int2);
            stack(19253);
            stack(-1);
            unk11010(84541584, "ii", 84541591);
            unk11009();
            int1 = int2;
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
            IF_SETHIDE(false, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
            IF_SETHIDE(false, comp(1290, 150));  // trh_dungeon_crawl_overlay:reward_preview_dummy_1
            IF_SETHIDE(false, comp(1290, 149));  // trh_dungeon_crawl_overlay:reward_preview_dummy_2
            int2 = SEQLENGTH(35449 as seq);
            IF_SETTEXT("Basic Attack (Necromancy)", comp(1290, 172));  // trh_dungeon_crawl_overlay:reward_preview_text
            IF_SETHIDE(false, comp(1290, 229));  // trh_dungeon_crawl_overlay:reward_preview_5_selected_rect
            IF_SETHIDE(false, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            IF_SETMODELANIM(36320 as seq, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            stack(int2);
            stack(16429);
            stack(BAS_GETANIM_READY(2687 as bas));
            unk11010(84541581, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            IF_SETMODELANIM(36322 as seq, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            stack(int2);
            stack(16429);
            stack(BAS_GETANIM_READY(2687 as bas));
            unk11010(84541585, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODEL(134818 as model, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODELANIM(35450 as seq, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            stack(int2);
            stack(19253);
            stack(-1);
            unk11010(84541582, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODEL(134820 as model, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODELANIM(35450 as seq, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            stack(int2);
            stack(19253);
            stack(-1);
            unk11010(84541584, "ii", 84541591);
            unk11009();
            int3 = SEQLENGTH(35451 as seq);
            int4 = 30;
            IF_SETHIDE(false, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
            stack(int4);
            stack(19253);
            stack(134818);
            unk11010(84541587, "ii", 84541591);
            unk11009();
            stack(int4);
            stack(16429);
            stack(35451);
            unk11010(84541587, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
            stack(int4);
            stack(19253);
            stack(134820);
            unk11010(84541588, "ii", 84541591);
            unk11009();
            stack(int4);
            stack(16429);
            stack(35451);
            unk11010(84541588, "ii", 84541591);
            unk11009();
            int1 = (int4 + int3);
            break;
        }
        case 6: {
            int2 = SEQLENGTH(35456 as seq);
            IF_SETTEXT("Touch of Death", comp(1290, 172));  // trh_dungeon_crawl_overlay:reward_preview_text
            IF_SETHIDE(false, comp(1290, 231));  // trh_dungeon_crawl_overlay:reward_preview_6_selected_rect
            IF_SETHIDE(false, comp(1290, 150));  // trh_dungeon_crawl_overlay:reward_preview_dummy_1
            IF_SETHIDE(false, comp(1290, 149));  // trh_dungeon_crawl_overlay:reward_preview_dummy_2
            IF_SETHIDE(false, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            IF_SETMODELANIM(36324 as seq, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            stack(int2);
            stack(16429);
            stack(BAS_GETANIM_READY(2687 as bas));
            unk11010(84541581, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            IF_SETMODELANIM(36325 as seq, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            stack(int2);
            stack(16429);
            stack(BAS_GETANIM_READY(2687 as bas));
            unk11010(84541585, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODEL(134797 as model, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODELANIM(35457 as seq, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            stack(int2);
            stack(19253);
            stack(-1);
            unk11010(84541582, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODEL(134798 as model, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODELANIM(35457 as seq, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            stack(int2);
            stack(19253);
            stack(-1);
            unk11010(84541584, "ii", 84541591);
            unk11009();
            int3 = SEQLENGTH(35451 as seq);
            int4 = 30;
            IF_SETHIDE(false, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
            stack(int4);
            stack(19253);
            stack(134796);
            unk11010(84541587, "ii", 84541591);
            unk11009();
            stack(int4);
            stack(16429);
            stack(35460);
            unk11010(84541587, "ii", 84541591);
            unk11009();
            stack((int4 + int3));
            stack(19253);
            stack(-1);
            unk11010(84541587, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
            stack(int4);
            stack(19253);
            stack(134798);
            unk11010(84541588, "ii", 84541591);
            unk11009();
            stack(int4);
            stack(16429);
            stack(35451);
            unk11010(84541588, "ii", 84541591);
            unk11009();
            int1 = (int4 + int3);
            break;
        }
        case 7: {
            int2 = SEQLENGTH(35458 as seq);
            IF_SETHIDE(false, comp(1290, 150));  // trh_dungeon_crawl_overlay:reward_preview_dummy_1
            IF_SETHIDE(false, comp(1290, 149));  // trh_dungeon_crawl_overlay:reward_preview_dummy_2
            IF_SETTEXT("Finger of Death", comp(1290, 172));  // trh_dungeon_crawl_overlay:reward_preview_text
            IF_SETHIDE(false, comp(1290, 233));  // trh_dungeon_crawl_overlay:reward_preview_7_selected_rect
            IF_SETHIDE(false, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            IF_SETMODELANIM(36326 as seq, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            stack(int2);
            stack(16429);
            stack(BAS_GETANIM_READY(2687 as bas));
            unk11010(84541581, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            IF_SETMODELANIM(36327 as seq, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            stack(int2);
            stack(16429);
            stack(BAS_GETANIM_READY(2687 as bas));
            unk11010(84541585, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODEL(134800 as model, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODELANIM(35459 as seq, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            stack(int2);
            stack(19253);
            stack(-1);
            unk11010(84541582, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODEL(134801 as model, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODELANIM(35459 as seq, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            stack(int2);
            stack(19253);
            stack(-1);
            unk11010(84541584, "ii", 84541591);
            unk11009();
            int3 = SEQLENGTH(35460 as seq);
            int4 = (2 * 30);
            IF_SETHIDE(false, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
            stack(int4);
            stack(19253);
            stack(134799);
            unk11010(84541587, "ii", 84541591);
            unk11009();
            stack(int4);
            stack(16429);
            stack(35460);
            unk11010(84541587, "ii", 84541591);
            unk11009();
            stack((int4 + int3));
            stack(19253);
            stack(-1);
            unk11010(84541587, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
            stack(int4);
            stack(19253);
            stack(134801);
            unk11010(84541588, "ii", 84541591);
            unk11009();
            stack(int4);
            stack(16429);
            stack(35460);
            unk11010(84541588, "ii", 84541591);
            unk11009();
            int1 = (int4 + int3);
            break;
        }
        case 8: {
            int2 = SEQLENGTH(35472 as seq);
            IF_SETHIDE(false, comp(1290, 150));  // trh_dungeon_crawl_overlay:reward_preview_dummy_1
            IF_SETHIDE(false, comp(1290, 149));  // trh_dungeon_crawl_overlay:reward_preview_dummy_2
            IF_SETTEXT("Death Skulls", comp(1290, 172));  // trh_dungeon_crawl_overlay:reward_preview_text
            IF_SETHIDE(false, comp(1290, 235));  // trh_dungeon_crawl_overlay:reward_preview_8_selected_rect
            IF_SETHIDE(false, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            IF_SETMODELANIM(36329 as seq, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            stack(int2);
            stack(16429);
            stack(BAS_GETANIM_READY(2687 as bas));
            unk11010(84541581, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            IF_SETMODELANIM(36330 as seq, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            stack(int2);
            stack(16429);
            stack(BAS_GETANIM_READY(2687 as bas));
            unk11010(84541585, "ii", 84541591);
            unk11009();
            int2 = MAX(int2, SEQLENGTH(35473 as seq));
            IF_SETHIDE(false, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODEL(134794 as model, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETRETEX(0, 16756 as material, 19819 as material, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETRECOL(0, 48396, 35776, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETRECOL(1, 48803, 35749, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODELANIM(35473 as seq, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            stack(int2);
            stack(19253);
            stack(-1);
            unk11010(84541582, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODEL(134795 as model, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETRETEX(0, 16756 as material, 19820 as material, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETRECOL(0, 48396, 3995, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETRECOL(1, 48803, 3974, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODELANIM(35473 as seq, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            stack(int2);
            stack(19253);
            stack(-1);
            unk11010(84541584, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
            IF_SETMODEL(134794 as model, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
            IF_SETMODELANGLE(0, -100, 0, -512, 0, 800, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
            IF_SETRETEX(0, 16756 as material, 19819 as material, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
            IF_SETRECOL(0, 48396, 35776, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
            IF_SETRECOL(1, 48803, 35749, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
            IF_SETMODELANIM(35474 as seq, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
            IF_SETHIDE(false, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
            IF_SETMODEL(134795 as model, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
            IF_SETMODELANGLE(0, -100, 0, 512, 0, 800, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
            IF_SETRETEX(0, 16756 as material, 19820 as material, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
            IF_SETRECOL(0, 48396, 3995, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
            IF_SETRECOL(1, 48803, 3974, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
            IF_SETMODELANIM(35474 as seq, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
            int1 = int2;
            break;
        }
        case 9: {
            int2 = SEQLENGTH(35475 as seq);
            IF_SETTEXT("Living Death", comp(1290, 172));  // trh_dungeon_crawl_overlay:reward_preview_text
            IF_SETHIDE(false, comp(1290, 237));  // trh_dungeon_crawl_overlay:reward_preview_9_selected_rect
            IF_SETHIDE(false, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            IF_SETMODELANIM(36331 as seq, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            stack(int2);
            stack(16429);
            stack(BAS_GETANIM_READY(2687 as bas));
            unk11010(84541581, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            IF_SETMODELANIM(36332 as seq, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            stack(int2);
            stack(16429);
            stack(BAS_GETANIM_READY(2687 as bas));
            unk11010(84541585, "ii", 84541591);
            unk11009();
            int2 = MAX(int2, SEQLENGTH(35476 as seq));
            IF_SETHIDE(false, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODELANGLE(80, 110, 0, 0, 0, 460, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODEL(134802 as model, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODELANIM(35476 as seq, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            stack(int2);
            stack(19253);
            stack(-1);
            unk11010(84541582, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODEL(134803 as model, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODELANIM(35476 as seq, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            stack(int2);
            stack(19253);
            stack(-1);
            unk11010(84541584, "ii", 84541591);
            unk11009();
            int1 = int2;
            break;
        }
        case 10: {
            IF_SETTEXT("Conjure Phantom Guardian", comp(1290, 172));  // trh_dungeon_crawl_overlay:reward_preview_text
            IF_SETHIDE(false, comp(1290, 153));  // trh_dungeon_crawl_overlay:reward_preview_10_selected_rect
            IF_SETHIDE(false, comp(1290, 146));  // trh_dungeon_crawl_overlay:reward_preview_npc_model
            script19221(31399, 4763, 0, 20, 0, 0, 0, 560, 84541586);
            break;
        }
        case 11: {
            script19221(31603, 2687, 60, 110, 0, -512, 0, 460, 84541581);
            script19221(31603, 2687, -60, 110, 0, 512, 0, 460, 84541585);
            IF_SETMODELANGLE(60, 110, -10, -512, 0, 460, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODELANGLE(-60, 110, -10, 512, 0, 460, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            int2 = SEQLENGTH(37099 as seq);
            IF_SETONTIMER(callback(script19323, 10, 0, (CLIENTCLOCK() + 5), (CLIENTCLOCK() + 20), 84541582), comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETONTIMER(callback(script19323, -10, 0, (CLIENTCLOCK() + 5), (CLIENTCLOCK() + 20), 84541584), comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETONTIMER(callback(script19323, 10, 0, (CLIENTCLOCK() + 5), (CLIENTCLOCK() + 20), 84541581), comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            IF_SETONTIMER(callback(script19323, -10, 0, (CLIENTCLOCK() + 5), (CLIENTCLOCK() + 20), 84541585), comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            IF_SETTEXT("Surge", comp(1290, 172));  // trh_dungeon_crawl_overlay:reward_preview_text
            IF_SETHIDE(false, comp(1290, 239));  // trh_dungeon_crawl_overlay:reward_preview_11_selected_rect
            IF_SETHIDE(false, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            IF_SETMODELANIM(37099 as seq, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            unk11010(int2, callback(script16429, BAS_GETANIM_READY(2687 as bas), 84541581), 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            IF_SETMODELANIM(37099 as seq, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            unk11010(int2, callback(script16429, BAS_GETANIM_READY(2687 as bas), 84541585), 84541591);
            unk11009();
            int2 = MAX(int2, SEQLENGTH(36599 as seq));
            IF_SETHIDE(false, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODEL(135555 as model, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODELANIM(36598 as seq, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETHIDE(false, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODEL(135557 as model, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODELANIM(36599 as seq, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETHIDE(false, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
            IF_SETHIDE(false, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
            int1 = int2;
            break;
        }
        case 12: {
            script19221(31604, 2691, 240, 110, 0, -512, 0, 460, 84541581);
            script19221(31604, 2691, -240, 110, 0, 512, 0, 460, 84541585);
            IF_SETMODELANGLE(240, 110, 10, -512, 0, 460, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODELANGLE(-240, 110, 10, 512, 0, 460, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            int2 = SEQLENGTH(18527 as seq);
            IF_SETONTIMER(callback(script19323, -15, 0, (CLIENTCLOCK() + 5), (CLIENTCLOCK() + 20), 84541582), comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETONTIMER(callback(script19323, 15, 0, (CLIENTCLOCK() + 5), (CLIENTCLOCK() + 20), 84541584), comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETONTIMER(callback(script19323, -15, 0, (CLIENTCLOCK() + 5), (CLIENTCLOCK() + 20), 84541581), comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            IF_SETONTIMER(callback(script19323, 15, 0, (CLIENTCLOCK() + 5), (CLIENTCLOCK() + 20), 84541585), comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            IF_SETTEXT("Escape", comp(1290, 172));  // trh_dungeon_crawl_overlay:reward_preview_text
            IF_SETHIDE(false, comp(1290, 241));  // trh_dungeon_crawl_overlay:reward_preview_12_selected_rect
            IF_SETHIDE(false, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            IF_SETMODELANIM(36611 as seq, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            unk11010(int2, callback(script16429, BAS_GETANIM_READY(2691 as bas), 84541581), 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            IF_SETMODELANIM(36614 as seq, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            unk11010(int2, callback(script16429, BAS_GETANIM_READY(2691 as bas), 84541585), 84541591);
            unk11009();
            int2 = MAX(int2, SEQLENGTH(36608 as seq));
            IF_SETHIDE(false, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODEL(135549 as model, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODELANIM(36607 as seq, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETHIDE(false, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODEL(135551 as model, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODELANIM(36608 as seq, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETHIDE(false, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
            IF_SETHIDE(false, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
            int1 = int2;
            break;
        }
        case 13: {
            script19221(31602, 2692, 20, 110, 0, -512, 0, 460, 84541581);
            script19221(31602, 2692, -20, 110, 0, 512, 0, 460, 84541585);
            IF_SETMODELANGLE(20, 110, 0, -512, 0, 460, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODELANGLE(-20, 110, 0, 512, 0, 460, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            int2 = SEQLENGTH(35755 as seq);
            IF_SETONTIMER(callback(script19323, 10, 0, (CLIENTCLOCK() + 5), (CLIENTCLOCK() + 20), 84541582), comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETONTIMER(callback(script19323, -10, 0, (CLIENTCLOCK() + 5), (CLIENTCLOCK() + 20), 84541584), comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETONTIMER(callback(script19323, 10, 0, (CLIENTCLOCK() + 5), (CLIENTCLOCK() + 20), 84541581), comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            IF_SETONTIMER(callback(script19323, -10, 0, (CLIENTCLOCK() + 5), (CLIENTCLOCK() + 20), 84541585), comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            IF_SETTEXT("Dive", comp(1290, 172));  // trh_dungeon_crawl_overlay:reward_preview_text
            IF_SETHIDE(false, comp(1290, 243));  // trh_dungeon_crawl_overlay:reward_preview_13_selected_rect
            IF_SETHIDE(false, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            IF_SETMODELANIM(36622 as seq, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            unk11010(int2, callback(script16429, BAS_GETANIM_READY(2692 as bas), 84541581), 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            IF_SETMODELANIM(36623 as seq, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            unk11010(int2, callback(script16429, BAS_GETANIM_READY(2692 as bas), 84541585), 84541591);
            unk11009();
            int2 = MAX(int2, SEQLENGTH(36620 as seq));
            IF_SETHIDE(false, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODEL(135559 as model, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODELANIM(36621 as seq, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETHIDE(false, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODEL(135560 as model, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODELANIM(36620 as seq, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETHIDE(false, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
            IF_SETHIDE(false, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
            int1 = int2;
            break;
        }
        case 14: {
            script19221(31602, 2692, 80, 110, 0, -512, 0, 460, 84541581);
            script19221(31602, 2692, -80, 110, 0, 512, 0, 460, 84541585);
            int2 = SEQLENGTH(18180 as seq);
            IF_SETTEXT("Overpower", comp(1290, 172));  // trh_dungeon_crawl_overlay:reward_preview_text
            IF_SETHIDE(false, comp(1290, 245));  // trh_dungeon_crawl_overlay:reward_preview_14_selected_rect
            IF_SETHIDE(false, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            IF_SETMODELANIM(18180 as seq, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            stack(int2);
            stack(16429);
            stack(BAS_GETANIM_READY(2692 as bas));
            unk11010(84541581, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            IF_SETMODELANIM(18180 as seq, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            stack(int2);
            stack(16429);
            stack(BAS_GETANIM_READY(2692 as bas));
            unk11010(84541585, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODEL(135553 as model, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODELANIM(36624 as seq, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            stack(int2);
            stack(19253);
            stack(-1);
            unk11010(84541582, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODEL(135554 as model, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODELANIM(36625 as seq, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            stack(int2);
            stack(19253);
            stack(-1);
            unk11010(84541584, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
            IF_SETHIDE(false, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
            int1 = int2;
            break;
        }
        case 15: {
            script19221(31604, 2691, 80, 110, 0, -512, 0, 460, 84541581);
            script19221(31604, 2691, -80, 110, 0, 512, 0, 460, 84541585);
            int2 = SEQLENGTH(18471 as seq);
            IF_SETTEXT("Deadshot", comp(1290, 172));  // trh_dungeon_crawl_overlay:reward_preview_text
            IF_SETHIDE(false, comp(1290, 247));  // trh_dungeon_crawl_overlay:reward_preview_15_selected_rect
            IF_SETHIDE(false, comp(1290, 150));  // trh_dungeon_crawl_overlay:reward_preview_dummy_1
            IF_SETHIDE(false, comp(1290, 149));  // trh_dungeon_crawl_overlay:reward_preview_dummy_2
            IF_SETHIDE(false, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            IF_SETMODELANIM(18471 as seq, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            stack(int2);
            stack(16429);
            stack(BAS_GETANIM_READY(2691 as bas));
            unk11010(84541581, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            IF_SETMODELANIM(18471 as seq, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            stack(int2);
            stack(16429);
            stack(BAS_GETANIM_READY(2691 as bas));
            unk11010(84541585, "ii", 84541591);
            unk11009();
            int3 = SEQLENGTH(18531 as seq);
            int4 = (30 * 2);
            IF_SETMODELANGLE(0, 30, 0, 0, 0, 600, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
            IF_SETMODELANGLE(0, 30, 0, 0, 0, 600, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
            IF_SETHIDE(false, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
            stack(int4);
            stack(19253);
            stack(135567);
            unk11010(84541587, "ii", 84541591);
            unk11009();
            stack(int4);
            stack(16429);
            stack(36616);
            unk11010(84541587, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
            stack(int4);
            stack(19253);
            stack(135569);
            unk11010(84541588, "ii", 84541591);
            unk11009();
            stack(int4);
            stack(16429);
            stack(36617);
            unk11010(84541588, "ii", 84541591);
            unk11009();
            int1 = (int4 + int3);
            break;
        }
        case 16: {
            script19221(31603, 2689, 80, 110, 0, -512, 0, 460, 84541581);
            script19221(31603, 2689, -80, 110, 0, 512, 0, 460, 84541585);
            int2 = SEQLENGTH(18370 as seq);
            IF_SETTEXT("Omnipower", comp(1290, 172));  // trh_dungeon_crawl_overlay:reward_preview_text
            IF_SETHIDE(false, comp(1290, 249));  // trh_dungeon_crawl_overlay:reward_preview_16_selected_rect
            IF_SETHIDE(false, comp(1290, 150));  // trh_dungeon_crawl_overlay:reward_preview_dummy_1
            IF_SETHIDE(false, comp(1290, 149));  // trh_dungeon_crawl_overlay:reward_preview_dummy_2
            IF_SETHIDE(false, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            IF_SETMODELANIM(18370 as seq, comp(1290, 141));  // trh_dungeon_crawl_overlay:reward_preview_player_1_model
            stack(int2);
            stack(16429);
            stack(BAS_GETANIM_READY(2689 as bas));
            unk11010(84541581, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            IF_SETMODELANIM(18370 as seq, comp(1290, 145));  // trh_dungeon_crawl_overlay:reward_preview_player_2_model
            stack(int2);
            stack(16429);
            stack(BAS_GETANIM_READY(2689 as bas));
            unk11010(84541585, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODEL(135563 as model, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            IF_SETMODELANIM(36604 as seq, comp(1290, 142));  // trh_dungeon_crawl_overlay:reward_preview_player_1_spotanim_model
            stack(int2);
            stack(19253);
            stack(-1);
            unk11010(84541582, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODEL(135565 as model, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            IF_SETMODELANIM(36603 as seq, comp(1290, 144));  // trh_dungeon_crawl_overlay:reward_preview_player_2_spotanim_model
            stack(int2);
            stack(19253);
            stack(-1);
            unk11010(84541584, "ii", 84541591);
            unk11009();
            int3 = SEQLENGTH(36605 as seq);
            int4 = SCALE(30, 2, 5);
            IF_SETMODELANGLE(0, -90, 0, 0, 0, 1300, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
            IF_SETMODELANGLE(0, -90, 0, 0, 0, 1300, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
            IF_SETHIDE(false, comp(1290, 147));  // trh_dungeon_crawl_overlay:reward_preview_npc_1_model
            stack(int4);
            stack(19253);
            stack(135561);
            unk11010(84541587, "ii", 84541591);
            unk11009();
            stack(int4);
            stack(16429);
            stack(36605);
            unk11010(84541587, "ii", 84541591);
            unk11009();
            IF_SETHIDE(false, comp(1290, 148));  // trh_dungeon_crawl_overlay:reward_preview_npc_2_model
            stack(int4);
            stack(19253);
            stack(135562);
            unk11010(84541588, "ii", 84541591);
            unk11009();
            stack(int4);
            stack(16429);
            stack(36606);
            unk11010(84541588, "ii", 84541591);
            unk11009();
            int1 = (int4 + int3);
            break;
        }
    };
    if ((int1 != -1)) {
        stack((int1 + 30));
        stack(19306);
        unk11010(int0, "i", 84541591);
        unk11009();
    };
    script19269(84541666, 84541668);
    return;
}