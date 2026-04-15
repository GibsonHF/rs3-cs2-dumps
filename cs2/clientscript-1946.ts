//
function script1946(): void {
    var string0 = "";
    if ((varclient_589 == 99999992)) {
        IF_SETTEXT("You abandon the game!", comp(810, 56));
        IF_SETTEXT("You abandon the game.<br><br>The mystics don't seem happy and scowl at you, muttering unpleasant sentiments under their breath.<br><br>You notice that you received no score as a result.", comp(810, 54));
        IF_SETTEXT("-100%", comp(810, 25));
        IF_SETTEXT("", comp(810, 37));
        IF_SETTEXT("", comp(810, 35));
        string0 = "The awards tab is not available when you leave a game early.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 53084276);
        script14307(1, 1);
    } else {
        if ((varclient_588 == 1)) {
            IF_SETTEXT(inttostring(varclient_597, 10), comp(810, 37));
            IF_SETTEXT(inttostring(varclient_598, 10), comp(810, 35));
        } else {
            IF_SETTEXT(inttostring(varclient_598, 10), comp(810, 37));
            IF_SETTEXT(inttostring(varclient_597, 10), comp(810, 35));
        };
        if ((varclient_588 == varclient_589)) {
            IF_SETTEXT("Your valiant team takes the victory!", comp(810, 56));
            IF_SETTEXT("The heroic, skilful and brave deeds of your team have ripped success from the feeble fingers of your unworthy foes.<br><br>The mystics stand in awe of your power, and you hear them praising you in excited whispers.<br><br>You notice that they have increased your score as a reward.", comp(810, 54));
            IF_SETTEXT("+10%", comp(810, 25));
        } else if ((varclient_589 == 0)) {
            IF_SETTEXT("The game was a draw!", comp(810, 56));
            IF_SETTEXT("As if ordained by fate, the teams were equally brave and skillful, resulting in a draw.<br><br>The mystics nod knowingly, and you hear them discussing how the balance of the universe is reflected beautifully in the conflict's outcome.<br><br>", comp(810, 54));
            IF_SETTEXT("+0%", comp(810, 25));
        } else {
            IF_SETTEXT("The enemy team has defeated you!", comp(810, 56));
            IF_SETTEXT("Despite your best efforts, your team was beaten; the victory snatched away by your fearsome foes.<br><br>The mystics frown at you, and shake their heads sadly.<br><br>You hear them arguing over whether they overestimated you, or if you were just unlucky.", comp(810, 54));
            IF_SETTEXT("+0%", comp(810, 25));
        };
    };
    IF_SETTEXT(inttostring(varclient_590, 10), comp(810, 33));
    IF_SETTEXT(inttostring(varclient_591, 10), comp(810, 31));
    IF_SETTEXT(inttostring(varclient_592, 10), comp(810, 29));
    IF_SETTEXT(inttostring(varclient_593, 10), comp(810, 27));
    IF_SETTEXT(inttostring(varclient_594, 10), comp(810, 21));
    IF_SETTEXT(inttostring(varclient_595, 10), comp(810, 19));
    if ((varclient_589 != 99999992)) {
        IF_SETTEXT(inttostring(varclient_596, 10), comp(810, 23));
    } else {
        IF_SETTEXT(inttostring(0, 10), comp(810, 23));
    };
    if (((varclient_600 > 0) || (varclient_603 > 0))) {
        IF_SETTEXT(inttostring(varclient_599, 10), comp(810, 69));
        IF_SETTEXT(inttostring(varclient_600, 10), comp(810, 63));
        IF_SETTEXT(inttostring(varclient_601, 10), comp(810, 87));
        IF_SETTEXT(inttostring(varclient_602, 10), comp(810, 93));
        IF_SETTEXT(inttostring(varclient_603, 10), comp(810, 81));
        IF_SETTEXT(inttostring(varclient_604, 10), comp(810, 75));
        IF_SETTEXT(inttostring(varclient_605, 10), comp(810, 99));
        IF_SETTEXT(inttostring(varclient_606, 10), comp(810, 105));
        script1587(varclient_2443, comp(810, 67));
        script1587(varclient_2444, comp(810, 61));
        script1587(varclient_2445, comp(810, 85));
        script1587(varclient_2446, comp(810, 91));
        script1587(varclient_2447, comp(810, 79));
        script1587(varclient_2448, comp(810, 73));
        script1587(varclient_2449, comp(810, 97));
        script1587(varclient_2450, comp(810, 103));
        if ((varclient_607 > 0)) {
            IF_SETTEXT(inttostring(varclient_607, 10), comp(810, 68));
        };
        if ((varclient_608 > 0)) {
            IF_SETTEXT(inttostring(varclient_608, 10), comp(810, 62));
        };
        if ((varclient_609 > 0)) {
            IF_SETTEXT(inttostring(varclient_609, 10), comp(810, 86));
        };
        if ((varclient_610 > 0)) {
            IF_SETTEXT(inttostring(varclient_610, 10), comp(810, 92));
        };
        if ((varclient_611 > 0)) {
            IF_SETTEXT(inttostring(varclient_611, 10), comp(810, 80));
        };
        if ((varclient_612 > 0)) {
            IF_SETTEXT(inttostring(varclient_612, 10), comp(810, 74));
        };
        if ((varclient_613 > 0)) {
            IF_SETTEXT(inttostring(varclient_613, 10), comp(810, 98));
        };
        if ((varclient_614 > 0)) {
            IF_SETTEXT(inttostring(varclient_614, 10), comp(810, 104));
        };
    };
    return;
}