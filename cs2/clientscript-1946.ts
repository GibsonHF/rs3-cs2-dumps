//
function script1946(): void {
    var string0 = "";
    if ((varclient_589 == 99999992)) {
        IF_SETTEXT("You abandon the game!", comp(810, 56));  // sc_scores:victory_text
        IF_SETTEXT("You abandon the game.<br><br>The mystics don't seem happy and scowl at you, muttering unpleasant sentiments under their breath.<br><br>You notice that you received no score as a result.", comp(810, 54));  // sc_scores:result_description_text
        IF_SETTEXT("-100%", comp(810, 25));  // sc_scores:bonus_score_text
        IF_SETTEXT("", comp(810, 37));  // sc_scores:your_team_score_text
        IF_SETTEXT("", comp(810, 35));  // sc_scores:enemy_team_score_text
        string0 = "The awards tab is not available when you leave a game early.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(810, 116));  // sc_scores:awards_tab
        script14307(1, 1);
    } else {
        if ((varclient_588 == 1)) {
            IF_SETTEXT(inttostring(varclient_597, 10), comp(810, 37));  // sc_scores:your_team_score_text
            IF_SETTEXT(inttostring(varclient_598, 10), comp(810, 35));  // sc_scores:enemy_team_score_text
        } else {
            IF_SETTEXT(inttostring(varclient_598, 10), comp(810, 37));  // sc_scores:your_team_score_text
            IF_SETTEXT(inttostring(varclient_597, 10), comp(810, 35));  // sc_scores:enemy_team_score_text
        };
        if ((varclient_588 == varclient_589)) {
            IF_SETTEXT("Your valiant team takes the victory!", comp(810, 56));  // sc_scores:victory_text
            IF_SETTEXT("The heroic, skilful and brave deeds of your team have ripped success from the feeble fingers of your unworthy foes.<br><br>The mystics stand in awe of your power, and you hear them praising you in excited whispers.<br><br>You notice that they have increased your score as a reward.", comp(810, 54));  // sc_scores:result_description_text
            IF_SETTEXT("+10%", comp(810, 25));  // sc_scores:bonus_score_text
        } else if ((varclient_589 == 0)) {
            IF_SETTEXT("The game was a draw!", comp(810, 56));  // sc_scores:victory_text
            IF_SETTEXT("As if ordained by fate, the teams were equally brave and skillful, resulting in a draw.<br><br>The mystics nod knowingly, and you hear them discussing how the balance of the universe is reflected beautifully in the conflict's outcome.<br><br>", comp(810, 54));  // sc_scores:result_description_text
            IF_SETTEXT("+0%", comp(810, 25));  // sc_scores:bonus_score_text
        } else {
            IF_SETTEXT("The enemy team has defeated you!", comp(810, 56));  // sc_scores:victory_text
            IF_SETTEXT("Despite your best efforts, your team was beaten; the victory snatched away by your fearsome foes.<br><br>The mystics frown at you, and shake their heads sadly.<br><br>You hear them arguing over whether they overestimated you, or if you were just unlucky.", comp(810, 54));  // sc_scores:result_description_text
            IF_SETTEXT("+0%", comp(810, 25));  // sc_scores:bonus_score_text
        };
    };
    IF_SETTEXT(inttostring(varclient_590, 10), comp(810, 33));  // sc_scores:gathered_score_text
    IF_SETTEXT(inttostring(varclient_591, 10), comp(810, 31));  // sc_scores:processed_score_text
    IF_SETTEXT(inttostring(varclient_592, 10), comp(810, 29));  // sc_scores:deposited_score_text
    IF_SETTEXT(inttostring(varclient_593, 10), comp(810, 27));  // sc_scores:damaged_score_text
    IF_SETTEXT(inttostring(varclient_594, 10), comp(810, 21));  // sc_scores:killed_score_text
    IF_SETTEXT(inttostring(varclient_595, 10), comp(810, 19));  // sc_scores:died_score_text
    if ((varclient_589 != 99999992)) {
        IF_SETTEXT(inttostring(varclient_596, 10), comp(810, 23));  // sc_scores:total_score_text
    } else {
        IF_SETTEXT(inttostring(0, 10), comp(810, 23));  // sc_scores:total_score_text
    };
    if (((varclient_600 > 0) || (varclient_603 > 0))) {
        IF_SETTEXT(inttostring(varclient_599, 10), comp(810, 69));  // sc_scores:process_award_sc
        IF_SETTEXT(inttostring(varclient_600, 10), comp(810, 63));  // sc_scores:gather_award_sc
        IF_SETTEXT(inttostring(varclient_601, 10), comp(810, 87));  // sc_scores:kill_award_sc
        IF_SETTEXT(inttostring(varclient_602, 10), comp(810, 93));  // sc_scores:death_award_sc
        IF_SETTEXT(inttostring(varclient_603, 10), comp(810, 81));  // sc_scores:damage_award_sc
        IF_SETTEXT(inttostring(varclient_604, 10), comp(810, 75));  // sc_scores:deposit_award_sc
        IF_SETTEXT(inttostring(varclient_605, 10), comp(810, 99));  // sc_scores:best_award_sc
        IF_SETTEXT(inttostring(varclient_606, 10), comp(810, 105));  // sc_scores:useless_award_sc
        script1587(varclient_2443, 53084227);
        script1587(varclient_2444, 53084221);
        script1587(varclient_2445, 53084245);
        script1587(varclient_2446, 53084251);
        script1587(varclient_2447, 53084239);
        script1587(varclient_2448, 53084233);
        script1587(varclient_2449, 53084257);
        script1587(varclient_2450, 53084263);
        if ((varclient_607 > 0)) {
            IF_SETTEXT(inttostring(varclient_607, 10), comp(810, 68));  // sc_scores:process_award_t
        };
        if ((varclient_608 > 0)) {
            IF_SETTEXT(inttostring(varclient_608, 10), comp(810, 62));  // sc_scores:gather_award_t
        };
        if ((varclient_609 > 0)) {
            IF_SETTEXT(inttostring(varclient_609, 10), comp(810, 86));  // sc_scores:kill_award_t
        };
        if ((varclient_610 > 0)) {
            IF_SETTEXT(inttostring(varclient_610, 10), comp(810, 92));  // sc_scores:death_award_t
        };
        if ((varclient_611 > 0)) {
            IF_SETTEXT(inttostring(varclient_611, 10), comp(810, 80));  // sc_scores:damage_award_t
        };
        if ((varclient_612 > 0)) {
            IF_SETTEXT(inttostring(varclient_612, 10), comp(810, 74));  // sc_scores:deposit_award_t
        };
        if ((varclient_613 > 0)) {
            IF_SETTEXT(inttostring(varclient_613, 10), comp(810, 98));  // sc_scores:best_award_t
        };
        if ((varclient_614 > 0)) {
            IF_SETTEXT(inttostring(varclient_614, 10), comp(810, 104));  // sc_scores:useless_award_t
        };
    };
    return;
}