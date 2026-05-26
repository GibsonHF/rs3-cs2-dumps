//[clientscript,barbassault_onload]
function script2845(): void {
    if ((varbitplayer_4513 == 1)) {
        IF_SETGRAPHIC(17304, 30998691);
        IF_SETTEXT("Attacker level up to 2", 30998678);
        IF_SETTEXT("+200 bonus damage", 30998680);
        IF_SETTEXT("200 Attacker Honour Points", 30998679);
        if ((varbitplayer_4518 > 199)) {
            IF_SETCOLOUR(65280, 30998679);
        };
    } else if ((varbitplayer_4513 == 2)) {
        IF_SETGRAPHIC(17709, 30998691);
        IF_SETTEXT("Attacker level up to 3", 30998678);
        IF_SETTEXT("+300 bonus damage", 30998680);
        IF_SETTEXT("300 Attacker Honour Points", 30998679);
        if ((varbitplayer_4518 > 299)) {
            IF_SETCOLOUR(65280, 30998679);
        };
    } else if ((varbitplayer_4513 == 3)) {
        IF_SETGRAPHIC(17713, 30998691);
        IF_SETTEXT("Attacker level up to 4", 30998678);
        IF_SETTEXT("+400 bonus damage", 30998680);
        IF_SETTEXT("400 Attacker Honour Points", 30998679);
        if ((varbitplayer_4518 > 399)) {
            IF_SETCOLOUR(65280, 30998679);
        };
    } else if ((varbitplayer_4513 == 4)) {
        IF_SETGRAPHIC(17790, 30998691);
        IF_SETTEXT("Attacker level up to 5", 30998678);
        IF_SETTEXT("+500 bonus damage", 30998680);
        IF_SETTEXT("500 Attacker Honour Points", 30998679);
        if ((varbitplayer_4518 > 499)) {
            IF_SETCOLOUR(65280, 30998679);
        };
    } else if ((varbitplayer_4513 == 5)) {
        IF_SETGRAPHIC(17790, 30998691);
        IF_SETTEXT("Attacker level up complete", 30998678);
        IF_SETTEXT(" - Mastered - ", 30998680);
        IF_SETTEXT(" - Mastered - ", 30998679);
    } else {
        varbitplayer_4513 = 1;
        IF_SETGRAPHIC(17304, 30998691);
        IF_SETTEXT("Attacker level up to 2", 30998678);
        IF_SETTEXT("+200 bonus damage", 30998680);
        IF_SETTEXT("200 Attacker Honour Points", 30998679);
        if ((varbitplayer_4518 > 199)) {
            IF_SETCOLOUR(65280, 30998679);
        };
    };
    if ((varbitplayer_4515 == 1)) {
        IF_SETGRAPHIC(17305, 30998704);
        IF_SETTEXT("Defender level up to 2", 30998705);
        IF_SETTEXT("Bonus logs +1", 30998707);
        IF_SETTEXT("200 Defender Honour Points", 30998706);
        if ((varbitplayer_4526 > 199)) {
            IF_SETCOLOUR(65280, 30998706);
        };
    } else if ((varbitplayer_4515 == 2)) {
        IF_SETGRAPHIC(17710, 30998704);
        IF_SETTEXT("Defender level up to 3", 30998705);
        IF_SETTEXT("Bonus logs +2", 30998707);
        IF_SETTEXT("300 Defender Honour Points", 30998706);
        if ((varbitplayer_4526 > 299)) {
            IF_SETCOLOUR(65280, 30998706);
        };
    } else if ((varbitplayer_4515 == 3)) {
        IF_SETGRAPHIC(17714, 30998704);
        IF_SETTEXT("Defender level up to 4", 30998705);
        IF_SETTEXT("Bonus logs +3", 30998707);
        IF_SETTEXT("400 Defender Honour Points", 30998706);
        if ((varbitplayer_4526 > 399)) {
            IF_SETCOLOUR(65280, 30998706);
        };
    } else if ((varbitplayer_4515 == 4)) {
        IF_SETGRAPHIC(17791, 30998704);
        IF_SETTEXT("Defender level up to 5", 30998705);
        IF_SETTEXT("Bonus logs +4", 30998707);
        IF_SETTEXT("500 Defender Honour Points", 30998706);
        if ((varbitplayer_4526 > 499)) {
            IF_SETCOLOUR(65280, 30998706);
        };
    } else if ((varbitplayer_4515 == 5)) {
        IF_SETGRAPHIC(17791, 30998704);
        IF_SETTEXT("Defender level up complete", 30998705);
        IF_SETTEXT(" - Mastered - ", 30998707);
        IF_SETTEXT(" - Mastered - ", 30998706);
    } else {
        varbitplayer_4515 = 1;
        IF_SETGRAPHIC(17305, 30998704);
        IF_SETTEXT("Defender level up to 2", 30998705);
        IF_SETTEXT("Bonus logs +1", 30998707);
        IF_SETTEXT("200 Defender Honour Points", 30998706);
        if ((varbitplayer_4526 > 199)) {
            IF_SETCOLOUR(65280, 30998706);
        };
    };
    if ((varbitplayer_4516 == 1)) {
        IF_SETGRAPHIC(17707, 30998720);
        IF_SETTEXT("Collector level up to 2", 30998721);
        IF_SETTEXT("Egg convert success 70%", 30998723);
        IF_SETTEXT("200 Collector Honour Points", 30998722);
        if ((varbitplayer_4524 > 199)) {
            IF_SETCOLOUR(65280, 30998722);
        };
    } else if ((varbitplayer_4516 == 2)) {
        IF_SETGRAPHIC(17711, 30998720);
        IF_SETTEXT("Collector level up to 3", 30998721);
        IF_SETTEXT("Egg convert success 80%", 30998723);
        IF_SETTEXT("300 Collector Honour Points", 30998722);
        if ((varbitplayer_4524 > 299)) {
            IF_SETCOLOUR(65280, 30998722);
        };
    } else if ((varbitplayer_4516 == 3)) {
        IF_SETGRAPHIC(17715, 30998720);
        IF_SETTEXT("Collector level up to 4", 30998721);
        IF_SETTEXT("Egg convert success 90%", 30998723);
        IF_SETTEXT("400 Collector Honour Points", 30998722);
        if ((varbitplayer_4524 > 399)) {
            IF_SETCOLOUR(65280, 30998722);
        };
    } else if ((varbitplayer_4516 == 4)) {
        IF_SETGRAPHIC(17792, 30998720);
        IF_SETTEXT("Collector level up to 5", 30998721);
        IF_SETTEXT("Egg convert success 100%", 30998723);
        IF_SETTEXT("500 Collector Honour Points", 30998722);
        if ((varbitplayer_4524 > 499)) {
            IF_SETCOLOUR(65280, 30998722);
        };
    } else if ((varbitplayer_4516 == 5)) {
        IF_SETGRAPHIC(17792, 30998720);
        IF_SETTEXT("Collector level up complete", 30998721);
        IF_SETTEXT(" - Mastered - ", 30998723);
        IF_SETTEXT(" - Mastered - ", 30998722);
    } else {
        varbitplayer_4516 = 1;
        IF_SETGRAPHIC(17707, 30998720);
        IF_SETTEXT("Collector level up to 2", 30998721);
        IF_SETTEXT("Egg convert success 70%", 30998723);
        IF_SETTEXT("200 Collector Honour Points", 30998722);
        if ((varbitplayer_4524 > 199)) {
            IF_SETCOLOUR(65280, 30998722);
        };
    };
    if ((varbitplayer_4517 == 1)) {
        IF_SETGRAPHIC(17708, 30998736);
        IF_SETTEXT("Healer level up to 2", 30998737);
        IF_SETTEXT("Heal 25% lifepoints", 30998739);
        IF_SETTEXT("200 Healer Honour Points", 30998738);
        if ((varbitplayer_4525 > 199)) {
            IF_SETCOLOUR(65280, 30998738);
        };
    } else if ((varbitplayer_4517 == 2)) {
        IF_SETGRAPHIC(17712, 30998736);
        IF_SETTEXT("Healer level up to 3", 30998737);
        IF_SETTEXT("Heal 40% lifepoints", 30998739);
        IF_SETTEXT("300 Healer Honour Points", 30998738);
        if ((varbitplayer_4525 > 299)) {
            IF_SETCOLOUR(65280, 30998738);
        };
    } else if ((varbitplayer_4517 == 3)) {
        IF_SETGRAPHIC(17716, 30998736);
        IF_SETTEXT("Healer level up to 4", 30998737);
        IF_SETTEXT("Heal 45% lifepoints", 30998739);
        IF_SETTEXT("400 Healer Honour Points", 30998738);
        if ((varbitplayer_4525 > 399)) {
            IF_SETCOLOUR(65280, 30998738);
        };
    } else if ((varbitplayer_4517 == 4)) {
        IF_SETGRAPHIC(17793, 30998736);
        IF_SETTEXT("Healer level up to 5", 30998737);
        IF_SETTEXT("Heal 50% lifepoints", 30998739);
        IF_SETTEXT("500 Healer Honour Points", 30998738);
        if ((varbitplayer_4525 > 499)) {
            IF_SETCOLOUR(65280, 30998738);
        };
    } else if ((varbitplayer_4517 == 5)) {
        IF_SETGRAPHIC(17793, 30998736);
        IF_SETTEXT("Healer level up complete", 30998737);
        IF_SETTEXT(" - Mastered - ", 30998739);
        IF_SETTEXT(" - Mastered - ", 30998738);
    } else {
        varbitplayer_4517 = 1;
        IF_SETGRAPHIC(17708, 30998736);
        IF_SETTEXT("Healer level up to 2", 30998737);
        IF_SETTEXT("Heal 25% lifepoints", 30998739);
        IF_SETTEXT("200 Healer Honour Points", 30998738);
        if ((varbitplayer_4525 > 199)) {
            IF_SETCOLOUR(65280, 30998738);
        };
    };
    if (((((varbitplayer_4518 > 274) && (varbitplayer_4526 > 274)) && (varbitplayer_4524 > 274)) && (varbitplayer_4525 > 274))) {
        IF_SETCOLOUR(65280, 30998920);
    };
    if (((((varbitplayer_4518 > 274) && (varbitplayer_4526 > 274)) && (varbitplayer_4524 > 274)) && (varbitplayer_4525 > 274))) {
        IF_SETCOLOUR(65280, 30998936);
    };
    if (((((varbitplayer_4518 > 274) && (varbitplayer_4526 > 274)) && (varbitplayer_4524 > 274)) && (varbitplayer_4525 > 274))) {
        IF_SETCOLOUR(65280, 30998952);
    };
    if (((((varbitplayer_4518 > 274) && (varbitplayer_4526 > 274)) && (varbitplayer_4524 > 274)) && (varbitplayer_4525 > 274))) {
        IF_SETCOLOUR(65280, 30998968);
    };
    if (((((varbitplayer_4518 > 374) && (varbitplayer_4526 > 374)) && (varbitplayer_4524 > 374)) && (varbitplayer_4525 > 374))) {
        IF_SETCOLOUR(65280, 30998984);
    };
    if (((((varbitplayer_4518 > 374) && (varbitplayer_4526 > 374)) && (varbitplayer_4524 > 374)) && (varbitplayer_4525 > 374))) {
        IF_SETCOLOUR(65280, 30999000);
    };
    if (((((varbitplayer_4518 > 99) && (varbitplayer_4526 > 99)) && (varbitplayer_4524 > 99)) && (varbitplayer_4525 > 99))) {
        IF_SETCOLOUR(65280, 30999016);
    };
    if (((((varbitplayer_4518 > 149) && (varbitplayer_4526 > 149)) && (varbitplayer_4524 > 149)) && (varbitplayer_4525 > 149))) {
        IF_SETCOLOUR(65280, 30999032);
    };
    if (branch_gteq_long[692](script17400(), 95000n)) {
        IF_SETCOLOUR(65280, 30998592);
    };
    if (((((varbitplayer_4518 > 19) || (varbitplayer_4526 > 19)) || (varbitplayer_4524 > 19)) || (varbitplayer_4525 > 19))) {
        IF_SETCOLOUR(65280, 30998608);
    };
    if (((((varbitplayer_4518 > 59) || (varbitplayer_4526 > 59)) || (varbitplayer_4524 > 59)) || (varbitplayer_4525 > 59))) {
        IF_SETCOLOUR(65280, 30998640);
    };
    if (((((varbitplayer_4518 > 99) || (varbitplayer_4526 > 99)) || (varbitplayer_4524 > 99)) || (varbitplayer_4525 > 99))) {
        IF_SETCOLOUR(65280, 30998656);
        IF_SETCOLOUR(65280, 30998672);
        IF_SETCOLOUR(65280, 30998624);
    };
    if (((varbitplayer_4518 > 499) && (varbitplayer_22919 > 4))) {
        IF_SETCOLOUR(65280, 30998754);
    };
    if (((varbitplayer_4526 > 499) && (varbitplayer_22919 > 4))) {
        IF_SETCOLOUR(65280, 30998770);
    };
    if (((varbitplayer_4524 > 499) && (varbitplayer_22919 > 4))) {
        IF_SETCOLOUR(65280, 30998786);
    };
    if (((varbitplayer_4525 > 499) && (varbitplayer_22919 > 4))) {
        IF_SETCOLOUR(65280, 30998802);
    };
    if (((((((((INV_TOTAL(93, 15439) < 1) && (INV_TOTAL(95, 15439) < 1)) && (INV_TOTAL(94, 15439) < 1)) && (INV_TOTAL(530, 15439) < 1)) && (INV_TOTAL(93, 15440) < 1)) && (INV_TOTAL(95, 15440) < 1)) && (INV_TOTAL(94, 15440) < 1)) && (INV_TOTAL(530, 15440) < 1))) {
        IF_SETCOLOUR(65280, 30998559);
    };
    if (((((varbitplayer_4513 == 5) || (varbitplayer_4515 == 5)) || (varbitplayer_4516 == 5)) || (varbitplayer_4517 == 5))) {
        IF_SETCOLOUR(65280, 30998575);
    };
    if ((((((((((INV_TOTAL(93, 15440) < 1) && (INV_TOTAL(95, 15440) < 1)) && (INV_TOTAL(94, 15440) < 1)) && (INV_TOTAL(530, 15440) < 1)) && (INV_TOTAL(93, 29648) < 1)) && (INV_TOTAL(95, 29648) < 1)) && (INV_TOTAL(94, 29648) < 1)) && (INV_TOTAL(530, 29648) < 1)) && ((((((((INV_TOTAL(93, 15439) > 0) || (INV_TOTAL(95, 15439) > 0)) || (INV_TOTAL(94, 15439) > 0)) || (INV_TOTAL(530, 15439) > 0)) || (INV_TOTAL(93, 29647) > 0)) || (INV_TOTAL(95, 29647) > 0)) || (INV_TOTAL(94, 29647) > 0)) || (INV_TOTAL(530, 29647) > 0)))) {
        IF_SETCOLOUR(65280, 30998576);
    };
    if (((((varbitplayer_4518 > 169) && (varbitplayer_4526 > 169)) && (varbitplayer_4524 > 169)) && (varbitplayer_4525 > 169))) {
        IF_SETCOLOUR(65280, 30998820);
    };
    if (((((((INV_TOTAL(93, 15438) > 0) || (INV_TOTAL(94, 15438) > 0)) && (varbitplayer_4518 > 219)) && (varbitplayer_4526 > 219)) && (varbitplayer_4524 > 219)) && (varbitplayer_4525 > 219))) {
        IF_SETCOLOUR(65280, 30998838);
    };
    var int0 = 0;
    if (((INV_TOTAL(93, 4151) > 0) || (INV_TOTAL(93, 11235) > 0))) {
        int0 = 1;
    };
    if ((varbitplayer_4539 == 0)) {
        if (((((varbitplayer_4518 > 49) || (varbitplayer_4526 > 49)) || (varbitplayer_4524 > 49)) || (varbitplayer_4525 > 49))) {
            IF_SETCOLOUR(65280, 30998886);
        };
    } else if ((int0 == 1)) {
        IF_SETCOLOUR(65280, 30998886);
    };
    if ((varbitplayer_4541 == 0)) {
        if (((((varbitplayer_4518 > 49) || (varbitplayer_4526 > 49)) || (varbitplayer_4524 > 49)) || (varbitplayer_4525 > 49))) {
            IF_SETCOLOUR(65280, 30998902);
        };
    } else if ((int0 == 1)) {
        IF_SETCOLOUR(65280, 30998902);
    };
    if ((varbitplayer_4538 == 0)) {
        if (((((varbitplayer_4518 > 49) || (varbitplayer_4526 > 49)) || (varbitplayer_4524 > 49)) || (varbitplayer_4525 > 49))) {
            IF_SETCOLOUR(65280, 30998854);
        };
    } else if ((int0 == 1)) {
        IF_SETCOLOUR(65280, 30998854);
    };
    if ((varbitplayer_4540 == 0)) {
        if (((((varbitplayer_4518 > 49) || (varbitplayer_4526 > 49)) || (varbitplayer_4524 > 49)) || (varbitplayer_4525 > 49))) {
            IF_SETCOLOUR(65280, 30998870);
        };
    } else if ((int0 == 1)) {
        IF_SETCOLOUR(65280, 30998870);
    };
    if ((varbitplayer_4539 == 1)) {
        IF_SETTEXT("Carrying a valid weapon", 30998886);
        IF_SETTEXT("Use Penance Egg Paint (White)", 30998885);
    };
    if ((varbitplayer_4541 == 1)) {
        IF_SETTEXT("Carrying a valid weapon", 30998902);
        IF_SETTEXT("Use Penance Egg Paint (Green)", 30998901);
    };
    if ((varbitplayer_4540 == 1)) {
        IF_SETTEXT("Carrying a valid weapon", 30998870);
        IF_SETTEXT("Use Penance Egg Paint (Blue)", 30998869);
    };
    if ((varbitplayer_4538 == 1)) {
        IF_SETTEXT("Carrying a valid weapon", 30998854);
        IF_SETTEXT("Use Penance Egg Paint (Yellow)", 30998853);
    };
    IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_4518, 1), 30999077);
    IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_4526, 1), 30999078);
    IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_4524, 1), 30999079);
    IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_4525, 1), 30999080);
    return;
}