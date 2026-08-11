//[clientscript,barbassault_onload]
function script2845(): void {
    if ((varbitplayer_4513 == 1)) {
        IF_SETGRAPHIC(17304 as graphic, comp(473, 163));  // barbassault_reward_shop_new:barbassault_attacker_lvl
        IF_SETTEXT("Attacker level up to 2", comp(473, 150));  // barbassault_reward_shop_new:barbassault_attacker_lvl_txt
        IF_SETTEXT("+200 bonus damage", comp(473, 152));  // barbassault_reward_shop_new:barbassault_attacker_lvl_info
        IF_SETTEXT("200 Attacker Honour Points", comp(473, 151));  // barbassault_reward_shop_new:barbassault_attacker_lvl_cost
        if ((varbitplayer_4518 > 199)) {
            IF_SETCOLOUR(65280, comp(473, 151));  // barbassault_reward_shop_new:barbassault_attacker_lvl_cost
        };
    } else if ((varbitplayer_4513 == 2)) {
        IF_SETGRAPHIC(17709 as graphic, comp(473, 163));  // barbassault_reward_shop_new:barbassault_attacker_lvl
        IF_SETTEXT("Attacker level up to 3", comp(473, 150));  // barbassault_reward_shop_new:barbassault_attacker_lvl_txt
        IF_SETTEXT("+300 bonus damage", comp(473, 152));  // barbassault_reward_shop_new:barbassault_attacker_lvl_info
        IF_SETTEXT("300 Attacker Honour Points", comp(473, 151));  // barbassault_reward_shop_new:barbassault_attacker_lvl_cost
        if ((varbitplayer_4518 > 299)) {
            IF_SETCOLOUR(65280, comp(473, 151));  // barbassault_reward_shop_new:barbassault_attacker_lvl_cost
        };
    } else if ((varbitplayer_4513 == 3)) {
        IF_SETGRAPHIC(17713 as graphic, comp(473, 163));  // barbassault_reward_shop_new:barbassault_attacker_lvl
        IF_SETTEXT("Attacker level up to 4", comp(473, 150));  // barbassault_reward_shop_new:barbassault_attacker_lvl_txt
        IF_SETTEXT("+400 bonus damage", comp(473, 152));  // barbassault_reward_shop_new:barbassault_attacker_lvl_info
        IF_SETTEXT("400 Attacker Honour Points", comp(473, 151));  // barbassault_reward_shop_new:barbassault_attacker_lvl_cost
        if ((varbitplayer_4518 > 399)) {
            IF_SETCOLOUR(65280, comp(473, 151));  // barbassault_reward_shop_new:barbassault_attacker_lvl_cost
        };
    } else if ((varbitplayer_4513 == 4)) {
        IF_SETGRAPHIC(17790 as graphic, comp(473, 163));  // barbassault_reward_shop_new:barbassault_attacker_lvl
        IF_SETTEXT("Attacker level up to 5", comp(473, 150));  // barbassault_reward_shop_new:barbassault_attacker_lvl_txt
        IF_SETTEXT("+500 bonus damage", comp(473, 152));  // barbassault_reward_shop_new:barbassault_attacker_lvl_info
        IF_SETTEXT("500 Attacker Honour Points", comp(473, 151));  // barbassault_reward_shop_new:barbassault_attacker_lvl_cost
        if ((varbitplayer_4518 > 499)) {
            IF_SETCOLOUR(65280, comp(473, 151));  // barbassault_reward_shop_new:barbassault_attacker_lvl_cost
        };
    } else if ((varbitplayer_4513 == 5)) {
        IF_SETGRAPHIC(17790 as graphic, comp(473, 163));  // barbassault_reward_shop_new:barbassault_attacker_lvl
        IF_SETTEXT("Attacker level up complete", comp(473, 150));  // barbassault_reward_shop_new:barbassault_attacker_lvl_txt
        IF_SETTEXT(" - Mastered - ", comp(473, 152));  // barbassault_reward_shop_new:barbassault_attacker_lvl_info
        IF_SETTEXT(" - Mastered - ", comp(473, 151));  // barbassault_reward_shop_new:barbassault_attacker_lvl_cost
    } else {
        varbitplayer_4513 = 1;
        IF_SETGRAPHIC(17304 as graphic, comp(473, 163));  // barbassault_reward_shop_new:barbassault_attacker_lvl
        IF_SETTEXT("Attacker level up to 2", comp(473, 150));  // barbassault_reward_shop_new:barbassault_attacker_lvl_txt
        IF_SETTEXT("+200 bonus damage", comp(473, 152));  // barbassault_reward_shop_new:barbassault_attacker_lvl_info
        IF_SETTEXT("200 Attacker Honour Points", comp(473, 151));  // barbassault_reward_shop_new:barbassault_attacker_lvl_cost
        if ((varbitplayer_4518 > 199)) {
            IF_SETCOLOUR(65280, comp(473, 151));  // barbassault_reward_shop_new:barbassault_attacker_lvl_cost
        };
    };
    if ((varbitplayer_4515 == 1)) {
        IF_SETGRAPHIC(17305 as graphic, comp(473, 176));  // barbassault_reward_shop_new:barbassault_defender_lvl
        IF_SETTEXT("Defender level up to 2", comp(473, 177));  // barbassault_reward_shop_new:barbassault_defender_lvl_txt
        IF_SETTEXT("Bonus logs +1", comp(473, 179));  // barbassault_reward_shop_new:barbassault_defender_lvl_info
        IF_SETTEXT("200 Defender Honour Points", comp(473, 178));  // barbassault_reward_shop_new:barbassault_defender_lvl_cost
        if ((varbitplayer_4526 > 199)) {
            IF_SETCOLOUR(65280, comp(473, 178));  // barbassault_reward_shop_new:barbassault_defender_lvl_cost
        };
    } else if ((varbitplayer_4515 == 2)) {
        IF_SETGRAPHIC(17710 as graphic, comp(473, 176));  // barbassault_reward_shop_new:barbassault_defender_lvl
        IF_SETTEXT("Defender level up to 3", comp(473, 177));  // barbassault_reward_shop_new:barbassault_defender_lvl_txt
        IF_SETTEXT("Bonus logs +2", comp(473, 179));  // barbassault_reward_shop_new:barbassault_defender_lvl_info
        IF_SETTEXT("300 Defender Honour Points", comp(473, 178));  // barbassault_reward_shop_new:barbassault_defender_lvl_cost
        if ((varbitplayer_4526 > 299)) {
            IF_SETCOLOUR(65280, comp(473, 178));  // barbassault_reward_shop_new:barbassault_defender_lvl_cost
        };
    } else if ((varbitplayer_4515 == 3)) {
        IF_SETGRAPHIC(17714 as graphic, comp(473, 176));  // barbassault_reward_shop_new:barbassault_defender_lvl
        IF_SETTEXT("Defender level up to 4", comp(473, 177));  // barbassault_reward_shop_new:barbassault_defender_lvl_txt
        IF_SETTEXT("Bonus logs +3", comp(473, 179));  // barbassault_reward_shop_new:barbassault_defender_lvl_info
        IF_SETTEXT("400 Defender Honour Points", comp(473, 178));  // barbassault_reward_shop_new:barbassault_defender_lvl_cost
        if ((varbitplayer_4526 > 399)) {
            IF_SETCOLOUR(65280, comp(473, 178));  // barbassault_reward_shop_new:barbassault_defender_lvl_cost
        };
    } else if ((varbitplayer_4515 == 4)) {
        IF_SETGRAPHIC(17791 as graphic, comp(473, 176));  // barbassault_reward_shop_new:barbassault_defender_lvl
        IF_SETTEXT("Defender level up to 5", comp(473, 177));  // barbassault_reward_shop_new:barbassault_defender_lvl_txt
        IF_SETTEXT("Bonus logs +4", comp(473, 179));  // barbassault_reward_shop_new:barbassault_defender_lvl_info
        IF_SETTEXT("500 Defender Honour Points", comp(473, 178));  // barbassault_reward_shop_new:barbassault_defender_lvl_cost
        if ((varbitplayer_4526 > 499)) {
            IF_SETCOLOUR(65280, comp(473, 178));  // barbassault_reward_shop_new:barbassault_defender_lvl_cost
        };
    } else if ((varbitplayer_4515 == 5)) {
        IF_SETGRAPHIC(17791 as graphic, comp(473, 176));  // barbassault_reward_shop_new:barbassault_defender_lvl
        IF_SETTEXT("Defender level up complete", comp(473, 177));  // barbassault_reward_shop_new:barbassault_defender_lvl_txt
        IF_SETTEXT(" - Mastered - ", comp(473, 179));  // barbassault_reward_shop_new:barbassault_defender_lvl_info
        IF_SETTEXT(" - Mastered - ", comp(473, 178));  // barbassault_reward_shop_new:barbassault_defender_lvl_cost
    } else {
        varbitplayer_4515 = 1;
        IF_SETGRAPHIC(17305 as graphic, comp(473, 176));  // barbassault_reward_shop_new:barbassault_defender_lvl
        IF_SETTEXT("Defender level up to 2", comp(473, 177));  // barbassault_reward_shop_new:barbassault_defender_lvl_txt
        IF_SETTEXT("Bonus logs +1", comp(473, 179));  // barbassault_reward_shop_new:barbassault_defender_lvl_info
        IF_SETTEXT("200 Defender Honour Points", comp(473, 178));  // barbassault_reward_shop_new:barbassault_defender_lvl_cost
        if ((varbitplayer_4526 > 199)) {
            IF_SETCOLOUR(65280, comp(473, 178));  // barbassault_reward_shop_new:barbassault_defender_lvl_cost
        };
    };
    if ((varbitplayer_4516 == 1)) {
        IF_SETGRAPHIC(17707 as graphic, comp(473, 192));  // barbassault_reward_shop_new:barbassault_collector_lvl
        IF_SETTEXT("Collector level up to 2", comp(473, 193));  // barbassault_reward_shop_new:barbassault_collector_lvl_txt
        IF_SETTEXT("Egg convert success 70%", comp(473, 195));  // barbassault_reward_shop_new:barbassault_collector_lvl_info
        IF_SETTEXT("200 Collector Honour Points", comp(473, 194));  // barbassault_reward_shop_new:barbassault_collector_lvl_cost
        if ((varbitplayer_4524 > 199)) {
            IF_SETCOLOUR(65280, comp(473, 194));  // barbassault_reward_shop_new:barbassault_collector_lvl_cost
        };
    } else if ((varbitplayer_4516 == 2)) {
        IF_SETGRAPHIC(17711 as graphic, comp(473, 192));  // barbassault_reward_shop_new:barbassault_collector_lvl
        IF_SETTEXT("Collector level up to 3", comp(473, 193));  // barbassault_reward_shop_new:barbassault_collector_lvl_txt
        IF_SETTEXT("Egg convert success 80%", comp(473, 195));  // barbassault_reward_shop_new:barbassault_collector_lvl_info
        IF_SETTEXT("300 Collector Honour Points", comp(473, 194));  // barbassault_reward_shop_new:barbassault_collector_lvl_cost
        if ((varbitplayer_4524 > 299)) {
            IF_SETCOLOUR(65280, comp(473, 194));  // barbassault_reward_shop_new:barbassault_collector_lvl_cost
        };
    } else if ((varbitplayer_4516 == 3)) {
        IF_SETGRAPHIC(17715 as graphic, comp(473, 192));  // barbassault_reward_shop_new:barbassault_collector_lvl
        IF_SETTEXT("Collector level up to 4", comp(473, 193));  // barbassault_reward_shop_new:barbassault_collector_lvl_txt
        IF_SETTEXT("Egg convert success 90%", comp(473, 195));  // barbassault_reward_shop_new:barbassault_collector_lvl_info
        IF_SETTEXT("400 Collector Honour Points", comp(473, 194));  // barbassault_reward_shop_new:barbassault_collector_lvl_cost
        if ((varbitplayer_4524 > 399)) {
            IF_SETCOLOUR(65280, comp(473, 194));  // barbassault_reward_shop_new:barbassault_collector_lvl_cost
        };
    } else if ((varbitplayer_4516 == 4)) {
        IF_SETGRAPHIC(17792 as graphic, comp(473, 192));  // barbassault_reward_shop_new:barbassault_collector_lvl
        IF_SETTEXT("Collector level up to 5", comp(473, 193));  // barbassault_reward_shop_new:barbassault_collector_lvl_txt
        IF_SETTEXT("Egg convert success 100%", comp(473, 195));  // barbassault_reward_shop_new:barbassault_collector_lvl_info
        IF_SETTEXT("500 Collector Honour Points", comp(473, 194));  // barbassault_reward_shop_new:barbassault_collector_lvl_cost
        if ((varbitplayer_4524 > 499)) {
            IF_SETCOLOUR(65280, comp(473, 194));  // barbassault_reward_shop_new:barbassault_collector_lvl_cost
        };
    } else if ((varbitplayer_4516 == 5)) {
        IF_SETGRAPHIC(17792 as graphic, comp(473, 192));  // barbassault_reward_shop_new:barbassault_collector_lvl
        IF_SETTEXT("Collector level up complete", comp(473, 193));  // barbassault_reward_shop_new:barbassault_collector_lvl_txt
        IF_SETTEXT(" - Mastered - ", comp(473, 195));  // barbassault_reward_shop_new:barbassault_collector_lvl_info
        IF_SETTEXT(" - Mastered - ", comp(473, 194));  // barbassault_reward_shop_new:barbassault_collector_lvl_cost
    } else {
        varbitplayer_4516 = 1;
        IF_SETGRAPHIC(17707 as graphic, comp(473, 192));  // barbassault_reward_shop_new:barbassault_collector_lvl
        IF_SETTEXT("Collector level up to 2", comp(473, 193));  // barbassault_reward_shop_new:barbassault_collector_lvl_txt
        IF_SETTEXT("Egg convert success 70%", comp(473, 195));  // barbassault_reward_shop_new:barbassault_collector_lvl_info
        IF_SETTEXT("200 Collector Honour Points", comp(473, 194));  // barbassault_reward_shop_new:barbassault_collector_lvl_cost
        if ((varbitplayer_4524 > 199)) {
            IF_SETCOLOUR(65280, comp(473, 194));  // barbassault_reward_shop_new:barbassault_collector_lvl_cost
        };
    };
    if ((varbitplayer_4517 == 1)) {
        IF_SETGRAPHIC(17708 as graphic, comp(473, 208));  // barbassault_reward_shop_new:barbassault_healer_lvl
        IF_SETTEXT("Healer level up to 2", comp(473, 209));  // barbassault_reward_shop_new:barbassault_healer_lvl_txt
        IF_SETTEXT("Heal 25% lifepoints", comp(473, 211));  // barbassault_reward_shop_new:barbassault_healer_lvl_info
        IF_SETTEXT("200 Healer Honour Points", comp(473, 210));  // barbassault_reward_shop_new:barbassault_healer_lvl_cost
        if ((varbitplayer_4525 > 199)) {
            IF_SETCOLOUR(65280, comp(473, 210));  // barbassault_reward_shop_new:barbassault_healer_lvl_cost
        };
    } else if ((varbitplayer_4517 == 2)) {
        IF_SETGRAPHIC(17712 as graphic, comp(473, 208));  // barbassault_reward_shop_new:barbassault_healer_lvl
        IF_SETTEXT("Healer level up to 3", comp(473, 209));  // barbassault_reward_shop_new:barbassault_healer_lvl_txt
        IF_SETTEXT("Heal 40% lifepoints", comp(473, 211));  // barbassault_reward_shop_new:barbassault_healer_lvl_info
        IF_SETTEXT("300 Healer Honour Points", comp(473, 210));  // barbassault_reward_shop_new:barbassault_healer_lvl_cost
        if ((varbitplayer_4525 > 299)) {
            IF_SETCOLOUR(65280, comp(473, 210));  // barbassault_reward_shop_new:barbassault_healer_lvl_cost
        };
    } else if ((varbitplayer_4517 == 3)) {
        IF_SETGRAPHIC(17716 as graphic, comp(473, 208));  // barbassault_reward_shop_new:barbassault_healer_lvl
        IF_SETTEXT("Healer level up to 4", comp(473, 209));  // barbassault_reward_shop_new:barbassault_healer_lvl_txt
        IF_SETTEXT("Heal 45% lifepoints", comp(473, 211));  // barbassault_reward_shop_new:barbassault_healer_lvl_info
        IF_SETTEXT("400 Healer Honour Points", comp(473, 210));  // barbassault_reward_shop_new:barbassault_healer_lvl_cost
        if ((varbitplayer_4525 > 399)) {
            IF_SETCOLOUR(65280, comp(473, 210));  // barbassault_reward_shop_new:barbassault_healer_lvl_cost
        };
    } else if ((varbitplayer_4517 == 4)) {
        IF_SETGRAPHIC(17793 as graphic, comp(473, 208));  // barbassault_reward_shop_new:barbassault_healer_lvl
        IF_SETTEXT("Healer level up to 5", comp(473, 209));  // barbassault_reward_shop_new:barbassault_healer_lvl_txt
        IF_SETTEXT("Heal 50% lifepoints", comp(473, 211));  // barbassault_reward_shop_new:barbassault_healer_lvl_info
        IF_SETTEXT("500 Healer Honour Points", comp(473, 210));  // barbassault_reward_shop_new:barbassault_healer_lvl_cost
        if ((varbitplayer_4525 > 499)) {
            IF_SETCOLOUR(65280, comp(473, 210));  // barbassault_reward_shop_new:barbassault_healer_lvl_cost
        };
    } else if ((varbitplayer_4517 == 5)) {
        IF_SETGRAPHIC(17793 as graphic, comp(473, 208));  // barbassault_reward_shop_new:barbassault_healer_lvl
        IF_SETTEXT("Healer level up complete", comp(473, 209));  // barbassault_reward_shop_new:barbassault_healer_lvl_txt
        IF_SETTEXT(" - Mastered - ", comp(473, 211));  // barbassault_reward_shop_new:barbassault_healer_lvl_info
        IF_SETTEXT(" - Mastered - ", comp(473, 210));  // barbassault_reward_shop_new:barbassault_healer_lvl_cost
    } else {
        varbitplayer_4517 = 1;
        IF_SETGRAPHIC(17708 as graphic, comp(473, 208));  // barbassault_reward_shop_new:barbassault_healer_lvl
        IF_SETTEXT("Healer level up to 2", comp(473, 209));  // barbassault_reward_shop_new:barbassault_healer_lvl_txt
        IF_SETTEXT("Heal 25% lifepoints", comp(473, 211));  // barbassault_reward_shop_new:barbassault_healer_lvl_info
        IF_SETTEXT("200 Healer Honour Points", comp(473, 210));  // barbassault_reward_shop_new:barbassault_healer_lvl_cost
        if ((varbitplayer_4525 > 199)) {
            IF_SETCOLOUR(65280, comp(473, 210));  // barbassault_reward_shop_new:barbassault_healer_lvl_cost
        };
    };
    if (((((varbitplayer_4518 > 274) && (varbitplayer_4526 > 274)) && (varbitplayer_4524 > 274)) && (varbitplayer_4525 > 274))) {
        IF_SETCOLOUR(65280, comp(473, 392));  // barbassault_reward_shop_new:barbassault_penance_fighter_hat_cost
    };
    if (((((varbitplayer_4518 > 274) && (varbitplayer_4526 > 274)) && (varbitplayer_4524 > 274)) && (varbitplayer_4525 > 274))) {
        IF_SETCOLOUR(65280, comp(473, 408));  // barbassault_reward_shop_new:barbassault_penance_ranger_hat_cost
    };
    if (((((varbitplayer_4518 > 274) && (varbitplayer_4526 > 274)) && (varbitplayer_4524 > 274)) && (varbitplayer_4525 > 274))) {
        IF_SETCOLOUR(65280, comp(473, 424));  // barbassault_reward_shop_new:barbassault_penance_runner_hat_cost
    };
    if (((((varbitplayer_4518 > 274) && (varbitplayer_4526 > 274)) && (varbitplayer_4524 > 274)) && (varbitplayer_4525 > 274))) {
        IF_SETCOLOUR(65280, comp(473, 440));  // barbassault_reward_shop_new:barbassault_penance_healer_hat_cost
    };
    if (((((varbitplayer_4518 > 374) && (varbitplayer_4526 > 374)) && (varbitplayer_4524 > 374)) && (varbitplayer_4525 > 374))) {
        IF_SETCOLOUR(65280, comp(473, 456));  // barbassault_reward_shop_new:barbassault_penance_torso_cost
    };
    if (((((varbitplayer_4518 > 374) && (varbitplayer_4526 > 374)) && (varbitplayer_4524 > 374)) && (varbitplayer_4525 > 374))) {
        IF_SETCOLOUR(65280, comp(473, 472));  // barbassault_reward_shop_new:barbassault_penance_legs_cost
    };
    if (((((varbitplayer_4518 > 99) && (varbitplayer_4526 > 99)) && (varbitplayer_4524 > 99)) && (varbitplayer_4525 > 99))) {
        IF_SETCOLOUR(65280, comp(473, 488));  // barbassault_reward_shop_new:barbassault_penance_boots_cost
    };
    if (((((varbitplayer_4518 > 149) && (varbitplayer_4526 > 149)) && (varbitplayer_4524 > 149)) && (varbitplayer_4525 > 149))) {
        IF_SETCOLOUR(65280, comp(473, 504));  // barbassault_reward_shop_new:barbassault_penance_gloves_cost
    };
    if (LONG_BRANCH_GREATER_THAN_OR_EQUALS(script17400(), 95000n)) {
        IF_SETCOLOUR(65280, comp(473, 64));  // barbassault_reward_shop_new:barbassault_granite_cost
    };
    if (((((varbitplayer_4518 > 19) || (varbitplayer_4526 > 19)) || (varbitplayer_4524 > 19)) || (varbitplayer_4525 > 19))) {
        IF_SETCOLOUR(65280, comp(473, 80));  // barbassault_reward_shop_new:barbassault_gamble_50_cost
    };
    if (((((varbitplayer_4518 > 59) || (varbitplayer_4526 > 59)) || (varbitplayer_4524 > 59)) || (varbitplayer_4525 > 59))) {
        IF_SETCOLOUR(65280, comp(473, 112));  // barbassault_reward_shop_new:barbassault_gamble_250_cost
    };
    if (((((varbitplayer_4518 > 99) || (varbitplayer_4526 > 99)) || (varbitplayer_4524 > 99)) || (varbitplayer_4525 > 99))) {
        IF_SETCOLOUR(65280, comp(473, 128));  // barbassault_reward_shop_new:barbassault_lore_book_1_cost
        IF_SETCOLOUR(65280, comp(473, 144));  // barbassault_reward_shop_new:barbassault_lore_book_2_cost
        IF_SETCOLOUR(65280, comp(473, 96));  // barbassault_reward_shop_new:barbassault_armour_patch_cost
    };
    if (((varbitplayer_4518 > 499) && (varbitplayer_22919 > 4))) {
        IF_SETCOLOUR(65280, comp(473, 226));  // barbassault_reward_shop_new:barbassault_attacker_insig_cost
    };
    if (((varbitplayer_4526 > 499) && (varbitplayer_22919 > 4))) {
        IF_SETCOLOUR(65280, comp(473, 242));  // barbassault_reward_shop_new:barbassault_defender_insig_cost
    };
    if (((varbitplayer_4524 > 499) && (varbitplayer_22919 > 4))) {
        IF_SETCOLOUR(65280, comp(473, 258));  // barbassault_reward_shop_new:barbassault_collector_insig_cost
    };
    if (((varbitplayer_4525 > 499) && (varbitplayer_22919 > 4))) {
        IF_SETCOLOUR(65280, comp(473, 274));  // barbassault_reward_shop_new:barbassault_healer_insig_cost
    };
    if (((((((((INV_TOTAL(93 as inv, 15439 as obj) < 1) && (INV_TOTAL(95 as inv, 15439 as obj) < 1)) && (INV_TOTAL(94 as inv, 15439 as obj) < 1)) && (INV_TOTAL(530 as inv, 15439 as obj) < 1)) && (INV_TOTAL(93 as inv, 15440 as obj) < 1)) && (INV_TOTAL(95 as inv, 15440 as obj) < 1)) && (INV_TOTAL(94 as inv, 15440 as obj) < 1)) && (INV_TOTAL(530 as inv, 15440 as obj) < 1))) {
        IF_SETCOLOUR(65280, comp(473, 31));  // barbassault_reward_shop_new:barbassault_horn_cost
    };
    if (((((varbitplayer_4513 == 5) || (varbitplayer_4515 == 5)) || (varbitplayer_4516 == 5)) || (varbitplayer_4517 == 5))) {
        IF_SETCOLOUR(65280, comp(473, 47));  // barbassault_reward_shop_new:barbassault_horn_upgrade_cost
    };
    if (((((((((INV_TOTAL(93 as inv, 15440 as obj) < 1) && (INV_TOTAL(95 as inv, 15440 as obj) < 1)) && (INV_TOTAL(94 as inv, 15440 as obj) < 1)) && (INV_TOTAL(530 as inv, 15440 as obj) < 1)) && (INV_TOTAL(93 as inv, 29648 as obj) < 1)) && (INV_TOTAL(95 as inv, 29648 as obj) < 1)) && (INV_TOTAL(94 as inv, 29648 as obj) < 1)) && (INV_TOTAL(530 as inv, 29648 as obj) < 1))) {
        if (((((((((INV_TOTAL(93 as inv, 15439 as obj) > 0) || (INV_TOTAL(95 as inv, 15439 as obj) > 0)) || (INV_TOTAL(94 as inv, 15439 as obj) > 0)) || (INV_TOTAL(530 as inv, 15439 as obj) > 0)) || (INV_TOTAL(93 as inv, 29647 as obj) > 0)) || (INV_TOTAL(95 as inv, 29647 as obj) > 0)) || (INV_TOTAL(94 as inv, 29647 as obj) > 0)) || (INV_TOTAL(530 as inv, 29647 as obj) > 0))) {
            IF_SETCOLOUR(65280, comp(473, 48));  // barbassault_reward_shop_new:barbassault_horn_upgrade_cost_2
        };
    };
    if (((((varbitplayer_4518 > 169) && (varbitplayer_4526 > 169)) && (varbitplayer_4524 > 169)) && (varbitplayer_4525 > 169))) {
        IF_SETCOLOUR(65280, comp(473, 292));  // barbassault_reward_shop_new:barbassault_trident_cost
    };
    if (((INV_TOTAL(93 as inv, 15438 as obj) > 0) || (INV_TOTAL(94 as inv, 15438 as obj) > 0))) {
        if (((((varbitplayer_4518 > 219) && (varbitplayer_4526 > 219)) && (varbitplayer_4524 > 219)) && (varbitplayer_4525 > 219))) {
            IF_SETCOLOUR(65280, comp(473, 310));  // barbassault_reward_shop_new:barbassault_trident_cost_master
        };
    };
    var int0 = 0;
    if (((INV_TOTAL(93 as inv, 4151 as obj) > 0) || (INV_TOTAL(93 as inv, 11235 as obj) > 0))) {
        int0 = 1;
    };
    if ((varbitplayer_4539 == 0)) {
        if (((((varbitplayer_4518 > 49) || (varbitplayer_4526 > 49)) || (varbitplayer_4524 > 49)) || (varbitplayer_4525 > 49))) {
            IF_SETCOLOUR(65280, comp(473, 358));  // barbassault_reward_shop_new:barbassault_white_cost
        };
    } else if ((int0 == 1)) {
        IF_SETCOLOUR(65280, comp(473, 358));  // barbassault_reward_shop_new:barbassault_white_cost
    };
    if ((varbitplayer_4541 == 0)) {
        if (((((varbitplayer_4518 > 49) || (varbitplayer_4526 > 49)) || (varbitplayer_4524 > 49)) || (varbitplayer_4525 > 49))) {
            IF_SETCOLOUR(65280, comp(473, 374));  // barbassault_reward_shop_new:barbassault_green_cost
        };
    } else if ((int0 == 1)) {
        IF_SETCOLOUR(65280, comp(473, 374));  // barbassault_reward_shop_new:barbassault_green_cost
    };
    if ((varbitplayer_4538 == 0)) {
        if (((((varbitplayer_4518 > 49) || (varbitplayer_4526 > 49)) || (varbitplayer_4524 > 49)) || (varbitplayer_4525 > 49))) {
            IF_SETCOLOUR(65280, comp(473, 326));  // barbassault_reward_shop_new:barbassault_yellow_cost
        };
    } else if ((int0 == 1)) {
        IF_SETCOLOUR(65280, comp(473, 326));  // barbassault_reward_shop_new:barbassault_yellow_cost
    };
    if ((varbitplayer_4540 == 0)) {
        if (((((varbitplayer_4518 > 49) || (varbitplayer_4526 > 49)) || (varbitplayer_4524 > 49)) || (varbitplayer_4525 > 49))) {
            IF_SETCOLOUR(65280, comp(473, 342));  // barbassault_reward_shop_new:barbassault_blue_cost
        };
    } else if ((int0 == 1)) {
        IF_SETCOLOUR(65280, comp(473, 342));  // barbassault_reward_shop_new:barbassault_blue_cost
    };
    if ((varbitplayer_4539 == 1)) {
        IF_SETTEXT("Carrying a valid weapon", comp(473, 358));  // barbassault_reward_shop_new:barbassault_white_cost
        IF_SETTEXT("Use Penance Egg Paint (White)", comp(473, 357));  // barbassault_reward_shop_new:barbassault_white_txt
    };
    if ((varbitplayer_4541 == 1)) {
        IF_SETTEXT("Carrying a valid weapon", comp(473, 374));  // barbassault_reward_shop_new:barbassault_green_cost
        IF_SETTEXT("Use Penance Egg Paint (Green)", comp(473, 373));  // barbassault_reward_shop_new:barbassault_green_txt
    };
    if ((varbitplayer_4540 == 1)) {
        IF_SETTEXT("Carrying a valid weapon", comp(473, 342));  // barbassault_reward_shop_new:barbassault_blue_cost
        IF_SETTEXT("Use Penance Egg Paint (Blue)", comp(473, 341));  // barbassault_reward_shop_new:barbassault_blue_txt
    };
    if ((varbitplayer_4538 == 1)) {
        IF_SETTEXT("Carrying a valid weapon", comp(473, 326));  // barbassault_reward_shop_new:barbassault_yellow_cost
        IF_SETTEXT("Use Penance Egg Paint (Yellow)", comp(473, 325));  // barbassault_reward_shop_new:barbassault_yellow_txt
    };
    IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_4518, 1), comp(473, 549));  // barbassault_reward_shop_new:barbassault_reward_pts_att
    IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_4526, 1), comp(473, 550));  // barbassault_reward_shop_new:barbassault_reward_pts_def
    IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_4524, 1), comp(473, 551));  // barbassault_reward_shop_new:barbassault_reward_pts_col
    IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_4525, 1), comp(473, 552));  // barbassault_reward_shop_new:barbassault_reward_pts_heal
    return;
}