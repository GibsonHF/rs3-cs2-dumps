//[clientscript,barbassault_onload]
function script2845(): void {
    if ((varbitplayer_4513 == 1)) {
        stack(17304);
        stack(30998691);
        IF_SETGRAPHIC();
        IF_SETTEXT("Attacker level up to 2", 30998678);
        IF_SETTEXT("+200 bonus damage", 30998680);
        IF_SETTEXT("200 Attacker Honour Points", 30998679);
        if ((varbitplayer_4518 > 199)) {
            IF_SETCOLOUR(65280, comp(473, 151));
        };
    } else if ((varbitplayer_4513 == 2)) {
        stack(17709);
        stack(30998691);
        IF_SETGRAPHIC();
        IF_SETTEXT("Attacker level up to 3", 30998678);
        IF_SETTEXT("+300 bonus damage", 30998680);
        IF_SETTEXT("300 Attacker Honour Points", 30998679);
        if ((varbitplayer_4518 > 299)) {
            IF_SETCOLOUR(65280, comp(473, 151));
        };
    } else if ((varbitplayer_4513 == 3)) {
        stack(17713);
        stack(30998691);
        IF_SETGRAPHIC();
        IF_SETTEXT("Attacker level up to 4", 30998678);
        IF_SETTEXT("+400 bonus damage", 30998680);
        IF_SETTEXT("400 Attacker Honour Points", 30998679);
        if ((varbitplayer_4518 > 399)) {
            IF_SETCOLOUR(65280, comp(473, 151));
        };
    } else if ((varbitplayer_4513 == 4)) {
        stack(17790);
        stack(30998691);
        IF_SETGRAPHIC();
        IF_SETTEXT("Attacker level up to 5", 30998678);
        IF_SETTEXT("+500 bonus damage", 30998680);
        IF_SETTEXT("500 Attacker Honour Points", 30998679);
        if ((varbitplayer_4518 > 499)) {
            IF_SETCOLOUR(65280, comp(473, 151));
        };
    } else if ((varbitplayer_4513 == 5)) {
        stack(17790);
        stack(30998691);
        IF_SETGRAPHIC();
        IF_SETTEXT("Attacker level up complete", 30998678);
        IF_SETTEXT(" - Mastered - ", 30998680);
        IF_SETTEXT(" - Mastered - ", 30998679);
    } else {
        varbitplayer_4513 = 1;
        stack(17304);
        stack(30998691);
        IF_SETGRAPHIC();
        IF_SETTEXT("Attacker level up to 2", 30998678);
        IF_SETTEXT("+200 bonus damage", 30998680);
        IF_SETTEXT("200 Attacker Honour Points", 30998679);
        if ((varbitplayer_4518 > 199)) {
            IF_SETCOLOUR(65280, comp(473, 151));
        };
    };
    if ((varbitplayer_4515 == 1)) {
        stack(17305);
        stack(30998704);
        IF_SETGRAPHIC();
        IF_SETTEXT("Defender level up to 2", 30998705);
        IF_SETTEXT("Bonus logs +1", 30998707);
        IF_SETTEXT("200 Defender Honour Points", 30998706);
        if ((varbitplayer_4526 > 199)) {
            IF_SETCOLOUR(65280, comp(473, 178));
        };
    } else if ((varbitplayer_4515 == 2)) {
        stack(17710);
        stack(30998704);
        IF_SETGRAPHIC();
        IF_SETTEXT("Defender level up to 3", 30998705);
        IF_SETTEXT("Bonus logs +2", 30998707);
        IF_SETTEXT("300 Defender Honour Points", 30998706);
        if ((varbitplayer_4526 > 299)) {
            IF_SETCOLOUR(65280, comp(473, 178));
        };
    } else if ((varbitplayer_4515 == 3)) {
        stack(17714);
        stack(30998704);
        IF_SETGRAPHIC();
        IF_SETTEXT("Defender level up to 4", 30998705);
        IF_SETTEXT("Bonus logs +3", 30998707);
        IF_SETTEXT("400 Defender Honour Points", 30998706);
        if ((varbitplayer_4526 > 399)) {
            IF_SETCOLOUR(65280, comp(473, 178));
        };
    } else if ((varbitplayer_4515 == 4)) {
        stack(17791);
        stack(30998704);
        IF_SETGRAPHIC();
        IF_SETTEXT("Defender level up to 5", 30998705);
        IF_SETTEXT("Bonus logs +4", 30998707);
        IF_SETTEXT("500 Defender Honour Points", 30998706);
        if ((varbitplayer_4526 > 499)) {
            IF_SETCOLOUR(65280, comp(473, 178));
        };
    } else if ((varbitplayer_4515 == 5)) {
        stack(17791);
        stack(30998704);
        IF_SETGRAPHIC();
        IF_SETTEXT("Defender level up complete", 30998705);
        IF_SETTEXT(" - Mastered - ", 30998707);
        IF_SETTEXT(" - Mastered - ", 30998706);
    } else {
        varbitplayer_4515 = 1;
        stack(17305);
        stack(30998704);
        IF_SETGRAPHIC();
        IF_SETTEXT("Defender level up to 2", 30998705);
        IF_SETTEXT("Bonus logs +1", 30998707);
        IF_SETTEXT("200 Defender Honour Points", 30998706);
        if ((varbitplayer_4526 > 199)) {
            IF_SETCOLOUR(65280, comp(473, 178));
        };
    };
    if ((varbitplayer_4516 == 1)) {
        stack(17707);
        stack(30998720);
        IF_SETGRAPHIC();
        IF_SETTEXT("Collector level up to 2", 30998721);
        IF_SETTEXT("Egg convert success 70%", 30998723);
        IF_SETTEXT("200 Collector Honour Points", 30998722);
        if ((varbitplayer_4524 > 199)) {
            IF_SETCOLOUR(65280, comp(473, 194));
        };
    } else if ((varbitplayer_4516 == 2)) {
        stack(17711);
        stack(30998720);
        IF_SETGRAPHIC();
        IF_SETTEXT("Collector level up to 3", 30998721);
        IF_SETTEXT("Egg convert success 80%", 30998723);
        IF_SETTEXT("300 Collector Honour Points", 30998722);
        if ((varbitplayer_4524 > 299)) {
            IF_SETCOLOUR(65280, comp(473, 194));
        };
    } else if ((varbitplayer_4516 == 3)) {
        stack(17715);
        stack(30998720);
        IF_SETGRAPHIC();
        IF_SETTEXT("Collector level up to 4", 30998721);
        IF_SETTEXT("Egg convert success 90%", 30998723);
        IF_SETTEXT("400 Collector Honour Points", 30998722);
        if ((varbitplayer_4524 > 399)) {
            IF_SETCOLOUR(65280, comp(473, 194));
        };
    } else if ((varbitplayer_4516 == 4)) {
        stack(17792);
        stack(30998720);
        IF_SETGRAPHIC();
        IF_SETTEXT("Collector level up to 5", 30998721);
        IF_SETTEXT("Egg convert success 100%", 30998723);
        IF_SETTEXT("500 Collector Honour Points", 30998722);
        if ((varbitplayer_4524 > 499)) {
            IF_SETCOLOUR(65280, comp(473, 194));
        };
    } else if ((varbitplayer_4516 == 5)) {
        stack(17792);
        stack(30998720);
        IF_SETGRAPHIC();
        IF_SETTEXT("Collector level up complete", 30998721);
        IF_SETTEXT(" - Mastered - ", 30998723);
        IF_SETTEXT(" - Mastered - ", 30998722);
    } else {
        varbitplayer_4516 = 1;
        stack(17707);
        stack(30998720);
        IF_SETGRAPHIC();
        IF_SETTEXT("Collector level up to 2", 30998721);
        IF_SETTEXT("Egg convert success 70%", 30998723);
        IF_SETTEXT("200 Collector Honour Points", 30998722);
        if ((varbitplayer_4524 > 199)) {
            IF_SETCOLOUR(65280, comp(473, 194));
        };
    };
    if ((varbitplayer_4517 == 1)) {
        stack(17708);
        stack(30998736);
        IF_SETGRAPHIC();
        IF_SETTEXT("Healer level up to 2", 30998737);
        IF_SETTEXT("Heal 25% lifepoints", 30998739);
        IF_SETTEXT("200 Healer Honour Points", 30998738);
        if ((varbitplayer_4525 > 199)) {
            IF_SETCOLOUR(65280, comp(473, 210));
        };
    } else if ((varbitplayer_4517 == 2)) {
        stack(17712);
        stack(30998736);
        IF_SETGRAPHIC();
        IF_SETTEXT("Healer level up to 3", 30998737);
        IF_SETTEXT("Heal 40% lifepoints", 30998739);
        IF_SETTEXT("300 Healer Honour Points", 30998738);
        if ((varbitplayer_4525 > 299)) {
            IF_SETCOLOUR(65280, comp(473, 210));
        };
    } else if ((varbitplayer_4517 == 3)) {
        stack(17716);
        stack(30998736);
        IF_SETGRAPHIC();
        IF_SETTEXT("Healer level up to 4", 30998737);
        IF_SETTEXT("Heal 45% lifepoints", 30998739);
        IF_SETTEXT("400 Healer Honour Points", 30998738);
        if ((varbitplayer_4525 > 399)) {
            IF_SETCOLOUR(65280, comp(473, 210));
        };
    } else if ((varbitplayer_4517 == 4)) {
        stack(17793);
        stack(30998736);
        IF_SETGRAPHIC();
        IF_SETTEXT("Healer level up to 5", 30998737);
        IF_SETTEXT("Heal 50% lifepoints", 30998739);
        IF_SETTEXT("500 Healer Honour Points", 30998738);
        if ((varbitplayer_4525 > 499)) {
            IF_SETCOLOUR(65280, comp(473, 210));
        };
    } else if ((varbitplayer_4517 == 5)) {
        stack(17793);
        stack(30998736);
        IF_SETGRAPHIC();
        IF_SETTEXT("Healer level up complete", 30998737);
        IF_SETTEXT(" - Mastered - ", 30998739);
        IF_SETTEXT(" - Mastered - ", 30998738);
    } else {
        varbitplayer_4517 = 1;
        stack(17708);
        stack(30998736);
        IF_SETGRAPHIC();
        IF_SETTEXT("Healer level up to 2", 30998737);
        IF_SETTEXT("Heal 25% lifepoints", 30998739);
        IF_SETTEXT("200 Healer Honour Points", 30998738);
        if ((varbitplayer_4525 > 199)) {
            IF_SETCOLOUR(65280, comp(473, 210));
        };
    };
    if (((((varbitplayer_4518 > 274) && (varbitplayer_4526 > 274)) && (varbitplayer_4524 > 274)) && (varbitplayer_4525 > 274))) {
        IF_SETCOLOUR(65280, comp(473, 392));
    };
    if (((((varbitplayer_4518 > 274) && (varbitplayer_4526 > 274)) && (varbitplayer_4524 > 274)) && (varbitplayer_4525 > 274))) {
        IF_SETCOLOUR(65280, comp(473, 408));
    };
    if (((((varbitplayer_4518 > 274) && (varbitplayer_4526 > 274)) && (varbitplayer_4524 > 274)) && (varbitplayer_4525 > 274))) {
        IF_SETCOLOUR(65280, comp(473, 424));
    };
    if (((((varbitplayer_4518 > 274) && (varbitplayer_4526 > 274)) && (varbitplayer_4524 > 274)) && (varbitplayer_4525 > 274))) {
        IF_SETCOLOUR(65280, comp(473, 440));
    };
    if (((((varbitplayer_4518 > 374) && (varbitplayer_4526 > 374)) && (varbitplayer_4524 > 374)) && (varbitplayer_4525 > 374))) {
        IF_SETCOLOUR(65280, comp(473, 456));
    };
    if (((((varbitplayer_4518 > 374) && (varbitplayer_4526 > 374)) && (varbitplayer_4524 > 374)) && (varbitplayer_4525 > 374))) {
        IF_SETCOLOUR(65280, comp(473, 472));
    };
    if (((((varbitplayer_4518 > 99) && (varbitplayer_4526 > 99)) && (varbitplayer_4524 > 99)) && (varbitplayer_4525 > 99))) {
        IF_SETCOLOUR(65280, comp(473, 488));
    };
    if (((((varbitplayer_4518 > 149) && (varbitplayer_4526 > 149)) && (varbitplayer_4524 > 149)) && (varbitplayer_4525 > 149))) {
        IF_SETCOLOUR(65280, comp(473, 504));
    };
    if (branch_gteq_long[692](script17400(), 95000n)) {
        IF_SETCOLOUR(65280, comp(473, 64));
    };
    if (((((varbitplayer_4518 > 19) || (varbitplayer_4526 > 19)) || (varbitplayer_4524 > 19)) || (varbitplayer_4525 > 19))) {
        IF_SETCOLOUR(65280, comp(473, 80));
    };
    if (((((varbitplayer_4518 > 59) || (varbitplayer_4526 > 59)) || (varbitplayer_4524 > 59)) || (varbitplayer_4525 > 59))) {
        IF_SETCOLOUR(65280, comp(473, 112));
    };
    if (((((varbitplayer_4518 > 99) || (varbitplayer_4526 > 99)) || (varbitplayer_4524 > 99)) || (varbitplayer_4525 > 99))) {
        IF_SETCOLOUR(65280, comp(473, 128));
        IF_SETCOLOUR(65280, comp(473, 144));
        IF_SETCOLOUR(65280, comp(473, 96));
    };
    if (((varbitplayer_4518 > 499) && (varbitplayer_22919 > 4))) {
        IF_SETCOLOUR(65280, comp(473, 226));
    };
    if (((varbitplayer_4526 > 499) && (varbitplayer_22919 > 4))) {
        IF_SETCOLOUR(65280, comp(473, 242));
    };
    if (((varbitplayer_4524 > 499) && (varbitplayer_22919 > 4))) {
        IF_SETCOLOUR(65280, comp(473, 258));
    };
    if (((varbitplayer_4525 > 499) && (varbitplayer_22919 > 4))) {
        IF_SETCOLOUR(65280, comp(473, 274));
    };
    if (((((((((INV_TOTAL(93 as inv, 15439 as obj) < 1) && (INV_TOTAL(95 as inv, 15439 as obj) < 1)) && (INV_TOTAL(94 as inv, 15439 as obj) < 1)) && (INV_TOTAL(530 as inv, 15439 as obj) < 1)) && (INV_TOTAL(93 as inv, 15440 as obj) < 1)) && (INV_TOTAL(95 as inv, 15440 as obj) < 1)) && (INV_TOTAL(94 as inv, 15440 as obj) < 1)) && (INV_TOTAL(530 as inv, 15440 as obj) < 1))) {
        IF_SETCOLOUR(65280, comp(473, 31));
    };
    if (((((varbitplayer_4513 == 5) || (varbitplayer_4515 == 5)) || (varbitplayer_4516 == 5)) || (varbitplayer_4517 == 5))) {
        IF_SETCOLOUR(65280, comp(473, 47));
    };
    if ((((((((((INV_TOTAL(93 as inv, 15440 as obj) < 1) && (INV_TOTAL(95 as inv, 15440 as obj) < 1)) && (INV_TOTAL(94 as inv, 15440 as obj) < 1)) && (INV_TOTAL(530 as inv, 15440 as obj) < 1)) && (INV_TOTAL(93 as inv, 29648 as obj) < 1)) && (INV_TOTAL(95 as inv, 29648 as obj) < 1)) && (INV_TOTAL(94 as inv, 29648 as obj) < 1)) && (INV_TOTAL(530 as inv, 29648 as obj) < 1)) && ((((((((INV_TOTAL(93 as inv, 15439 as obj) > 0) || (INV_TOTAL(95 as inv, 15439 as obj) > 0)) || (INV_TOTAL(94 as inv, 15439 as obj) > 0)) || (INV_TOTAL(530 as inv, 15439 as obj) > 0)) || (INV_TOTAL(93 as inv, 29647 as obj) > 0)) || (INV_TOTAL(95 as inv, 29647 as obj) > 0)) || (INV_TOTAL(94 as inv, 29647 as obj) > 0)) || (INV_TOTAL(530 as inv, 29647 as obj) > 0)))) {
        IF_SETCOLOUR(65280, comp(473, 48));
    };
    if (((((varbitplayer_4518 > 169) && (varbitplayer_4526 > 169)) && (varbitplayer_4524 > 169)) && (varbitplayer_4525 > 169))) {
        IF_SETCOLOUR(65280, comp(473, 292));
    };
    if (((((((INV_TOTAL(93 as inv, 15438 as obj) > 0) || (INV_TOTAL(94 as inv, 15438 as obj) > 0)) && (varbitplayer_4518 > 219)) && (varbitplayer_4526 > 219)) && (varbitplayer_4524 > 219)) && (varbitplayer_4525 > 219))) {
        IF_SETCOLOUR(65280, comp(473, 310));
    };
    var int0 = 0;
    if (((INV_TOTAL(93 as inv, 4151 as obj) > 0) || (INV_TOTAL(93 as inv, 11235 as obj) > 0))) {
        int0 = 1;
    };
    if ((varbitplayer_4539 == 0)) {
        if (((((varbitplayer_4518 > 49) || (varbitplayer_4526 > 49)) || (varbitplayer_4524 > 49)) || (varbitplayer_4525 > 49))) {
            IF_SETCOLOUR(65280, comp(473, 358));
        };
    } else if ((int0 == 1)) {
        IF_SETCOLOUR(65280, comp(473, 358));
    };
    if ((varbitplayer_4541 == 0)) {
        if (((((varbitplayer_4518 > 49) || (varbitplayer_4526 > 49)) || (varbitplayer_4524 > 49)) || (varbitplayer_4525 > 49))) {
            IF_SETCOLOUR(65280, comp(473, 374));
        };
    } else if ((int0 == 1)) {
        IF_SETCOLOUR(65280, comp(473, 374));
    };
    if ((varbitplayer_4538 == 0)) {
        if (((((varbitplayer_4518 > 49) || (varbitplayer_4526 > 49)) || (varbitplayer_4524 > 49)) || (varbitplayer_4525 > 49))) {
            IF_SETCOLOUR(65280, comp(473, 326));
        };
    } else if ((int0 == 1)) {
        IF_SETCOLOUR(65280, comp(473, 326));
    };
    if ((varbitplayer_4540 == 0)) {
        if (((((varbitplayer_4518 > 49) || (varbitplayer_4526 > 49)) || (varbitplayer_4524 > 49)) || (varbitplayer_4525 > 49))) {
            IF_SETCOLOUR(65280, comp(473, 342));
        };
    } else if ((int0 == 1)) {
        IF_SETCOLOUR(65280, comp(473, 342));
    };
    if ((varbitplayer_4539 == 1)) {
        IF_SETTEXT("Carrying a valid weapon", comp(473, 358));
        IF_SETTEXT("Use Penance Egg Paint (White)", comp(473, 357));
    };
    if ((varbitplayer_4541 == 1)) {
        IF_SETTEXT("Carrying a valid weapon", comp(473, 374));
        IF_SETTEXT("Use Penance Egg Paint (Green)", comp(473, 373));
    };
    if ((varbitplayer_4540 == 1)) {
        IF_SETTEXT("Carrying a valid weapon", comp(473, 342));
        IF_SETTEXT("Use Penance Egg Paint (Blue)", comp(473, 341));
    };
    if ((varbitplayer_4538 == 1)) {
        IF_SETTEXT("Carrying a valid weapon", comp(473, 326));
        IF_SETTEXT("Use Penance Egg Paint (Yellow)", comp(473, 325));
    };
    IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_4518, 1), comp(473, 549));
    IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_4526, 1), comp(473, 550));
    IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_4524, 1), comp(473, 551));
    IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_4525, 1), comp(473, 552));
    return;
}