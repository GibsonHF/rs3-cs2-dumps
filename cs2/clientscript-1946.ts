//
function script1946(): void {
    var string0 = "";
    if ((varclient_589 == 99999992)) {
        IF_SETTEXT("You abandon the game!", 53084216);
        IF_SETTEXT("You abandon the game.<br><br>The mystics don't seem happy and scowl at you, muttering unpleasant sentiments under their breath.<br><br>You notice that you received no score as a result.", 53084214);
        IF_SETTEXT("-100%", 53084185);
        IF_SETTEXT("", 53084197);
        IF_SETTEXT("", 53084195);
        string0 = "The awards tab is not available when you leave a game early.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 53084276);
        script14307(1, 1);
    } else {
        if ((varclient_588 == 1)) {
            IF_SETTEXT(inttostring(varclient_597, 10), 53084197);
            IF_SETTEXT(inttostring(varclient_598, 10), 53084195);
        } else {
            IF_SETTEXT(inttostring(varclient_598, 10), 53084197);
            IF_SETTEXT(inttostring(varclient_597, 10), 53084195);
        };
        if ((varclient_588 == varclient_589)) {
            IF_SETTEXT("Your valiant team takes the victory!", 53084216);
            IF_SETTEXT("The heroic, skilful and brave deeds of your team have ripped success from the feeble fingers of your unworthy foes.<br><br>The mystics stand in awe of your power, and you hear them praising you in excited whispers.<br><br>You notice that they have increased your score as a reward.", 53084214);
            IF_SETTEXT("+10%", 53084185);
        } else if ((varclient_589 == 0)) {
            IF_SETTEXT("The game was a draw!", 53084216);
            IF_SETTEXT("As if ordained by fate, the teams were equally brave and skillful, resulting in a draw.<br><br>The mystics nod knowingly, and you hear them discussing how the balance of the universe is reflected beautifully in the conflict's outcome.<br><br>", 53084214);
            IF_SETTEXT("+0%", 53084185);
        } else {
            IF_SETTEXT("The enemy team has defeated you!", 53084216);
            IF_SETTEXT("Despite your best efforts, your team was beaten; the victory snatched away by your fearsome foes.<br><br>The mystics frown at you, and shake their heads sadly.<br><br>You hear them arguing over whether they overestimated you, or if you were just unlucky.", 53084214);
            IF_SETTEXT("+0%", 53084185);
        };
    };
    IF_SETTEXT(inttostring(varclient_590, 10), 53084193);
    IF_SETTEXT(inttostring(varclient_591, 10), 53084191);
    IF_SETTEXT(inttostring(varclient_592, 10), 53084189);
    IF_SETTEXT(inttostring(varclient_593, 10), 53084187);
    IF_SETTEXT(inttostring(varclient_594, 10), 53084181);
    IF_SETTEXT(inttostring(varclient_595, 10), 53084179);
    if ((varclient_589 != 99999992)) {
        IF_SETTEXT(inttostring(varclient_596, 10), 53084183);
    } else {
        IF_SETTEXT(inttostring(0, 10), 53084183);
    };
    if (((varclient_600 > 0) || (varclient_603 > 0))) {
        IF_SETTEXT(inttostring(varclient_599, 10), 53084229);
        IF_SETTEXT(inttostring(varclient_600, 10), 53084223);
        IF_SETTEXT(inttostring(varclient_601, 10), 53084247);
        IF_SETTEXT(inttostring(varclient_602, 10), 53084253);
        IF_SETTEXT(inttostring(varclient_603, 10), 53084241);
        IF_SETTEXT(inttostring(varclient_604, 10), 53084235);
        IF_SETTEXT(inttostring(varclient_605, 10), 53084259);
        IF_SETTEXT(inttostring(varclient_606, 10), 53084265);
        script1587(varclient_2443, 53084227);
        script1587(varclient_2444, 53084221);
        script1587(varclient_2445, 53084245);
        script1587(varclient_2446, 53084251);
        script1587(varclient_2447, 53084239);
        script1587(varclient_2448, 53084233);
        script1587(varclient_2449, 53084257);
        script1587(varclient_2450, 53084263);
        if ((varclient_607 > 0)) {
            IF_SETTEXT(inttostring(varclient_607, 10), 53084228);
        };
        if ((varclient_608 > 0)) {
            IF_SETTEXT(inttostring(varclient_608, 10), 53084222);
        };
        if ((varclient_609 > 0)) {
            IF_SETTEXT(inttostring(varclient_609, 10), 53084246);
        };
        if ((varclient_610 > 0)) {
            IF_SETTEXT(inttostring(varclient_610, 10), 53084252);
        };
        if ((varclient_611 > 0)) {
            IF_SETTEXT(inttostring(varclient_611, 10), 53084240);
        };
        if ((varclient_612 > 0)) {
            IF_SETTEXT(inttostring(varclient_612, 10), 53084234);
        };
        if ((varclient_613 > 0)) {
            IF_SETTEXT(inttostring(varclient_613, 10), 53084258);
        };
        if ((varclient_614 > 0)) {
            IF_SETTEXT(inttostring(varclient_614, 10), 53084264);
        };
    };
    return;
}