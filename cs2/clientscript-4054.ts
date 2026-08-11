//
function script4054(int0: number, int1: number): void {
    if ((int1 == 0)) {
        switch (int0) {
            case 1: {
                if ((varbitplayer_42027 >= 4)) {
                    IF_SETGRAPHIC(2290 as graphic, comp(438, 9));  // oct18:personal_loot_1_graphic
                } else {
                    IF_SETGRAPHIC(2291 as graphic, comp(438, 9));  // oct18:personal_loot_1_graphic
                };
                break;
            }
            case 2: {
                if ((varbitplayer_42027 >= 8)) {
                    IF_SETGRAPHIC(2290 as graphic, comp(438, 10));  // oct18:personal_loot_2_graphic
                } else {
                    IF_SETGRAPHIC(2291 as graphic, comp(438, 10));  // oct18:personal_loot_2_graphic
                };
                break;
            }
            case 3: {
                if ((varbitplayer_42027 >= 12)) {
                    IF_SETGRAPHIC(2290 as graphic, comp(438, 11));  // oct18:personal_loot_3_graphic
                } else {
                    IF_SETGRAPHIC(2291 as graphic, comp(438, 11));  // oct18:personal_loot_3_graphic
                };
                break;
            }
            case 4: {
                if ((varbitplayer_42027 >= 16)) {
                    IF_SETGRAPHIC(2290 as graphic, comp(438, 12));  // oct18:personal_loot_4_graphic
                } else {
                    IF_SETGRAPHIC(2291 as graphic, comp(438, 12));  // oct18:personal_loot_4_graphic
                };
                break;
            }
        };
    } else if ((int1 == 1)) {
        switch (int0) {
            case 1: {
                if ((varplayer_8195 >= 288000)) {
                    IF_SETGRAPHIC(2290 as graphic, comp(438, 2));  // oct18:community_loot_1_graphic
                } else {
                    IF_SETGRAPHIC(2291 as graphic, comp(438, 2));  // oct18:community_loot_1_graphic
                };
                break;
            }
            case 2: {
                if ((varplayer_8195 >= 556000)) {
                    IF_SETGRAPHIC(2290 as graphic, comp(438, 3));  // oct18:community_loot_2_graphic
                } else {
                    IF_SETGRAPHIC(2291 as graphic, comp(438, 3));  // oct18:community_loot_2_graphic
                };
                break;
            }
            case 3: {
                if ((varplayer_8195 >= 803000)) {
                    IF_SETGRAPHIC(2290 as graphic, comp(438, 4));  // oct18:community_loot_3_graphic
                } else {
                    IF_SETGRAPHIC(2291 as graphic, comp(438, 4));  // oct18:community_loot_3_graphic
                };
                break;
            }
            case 4: {
                if ((varplayer_8195 >= 1008000)) {
                    IF_SETGRAPHIC(2290 as graphic, comp(438, 5));  // oct18:community_loot_4_graphic
                } else {
                    IF_SETGRAPHIC(2291 as graphic, comp(438, 5));  // oct18:community_loot_4_graphic
                };
                break;
            }
            case 5: {
                if ((varplayer_8195 >= 1163000)) {
                    IF_SETGRAPHIC(2290 as graphic, comp(438, 6));  // oct18:community_loot_5_graphic
                } else {
                    IF_SETGRAPHIC(2291 as graphic, comp(438, 6));  // oct18:community_loot_5_graphic
                };
                break;
            }
            case 6: {
                if ((varplayer_8195 >= 1286000)) {
                    IF_SETGRAPHIC(2290 as graphic, comp(438, 7));  // oct18:community_loot_6_graphic
                } else {
                    IF_SETGRAPHIC(2291 as graphic, comp(438, 7));  // oct18:community_loot_6_graphic
                };
                break;
            }
            case 7: {
                if ((varplayer_8195 >= 1410000)) {
                    IF_SETGRAPHIC(2290 as graphic, comp(438, 8));  // oct18:community_loot_7_graphic
                } else {
                    IF_SETGRAPHIC(2291 as graphic, comp(438, 8));  // oct18:community_loot_7_graphic
                };
                break;
            }
        };
    };
    return;
}