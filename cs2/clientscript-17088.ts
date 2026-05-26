//
function script17088(int0: number): string {
    IF_BUTTON_SETTOGGLED(0, comp(1626, 19));
    IF_BUTTON_SETTOGGLED(0, comp(1626, 80));
    IF_BUTTON_SETTOGGLED(0, comp(1626, 82));
    IF_BUTTON_SETTOGGLED(0, comp(1626, 84));
    var string0 = "Death";
    var string1 = "Death";
    switch (varbitplayer_52406) {
        case 0: {
            IF_BUTTON_SETTOGGLED(1, comp(1626, 19));
            string0 = "Death Cost Overview";
            string1 = "What happens when you die?";
            break;
        }
        case 1: {
            IF_BUTTON_SETTOGGLED(1, comp(1626, 80));
            if ((varbitplayer_28118 == 1)) {
                string0 = "Death Reclaim";
                string1 = "Pay to reclaim these items.";
            } else if ((int0 == 3)) {
                string0 = "Death Preview (Dangerous PvP)";
                string1 = "Items will not be stored with death.";
            } else if ((int0 == 2)) {
                string0 = "Death Preview (Safe Area)";
                string1 = "You are in a safe death area.";
            } else {
                string0 = "Death Preview";
                string1 = "Reclaim costs if you died.";
            };
            break;
        }
        case 2: {
            IF_BUTTON_SETTOGGLED(1, comp(1626, 82));
            string0 = "Overflow Storage";
            string1 = "Reclaim items from overflow.";
            break;
        }
        case 3: {
            IF_BUTTON_SETTOGGLED(1, comp(1626, 84));
            string0 = "Death Preview";
            string1 = "If you died in dangerous PvP.";
            break;
        }
    };
    script16930(106561555, -1, 2, "View information about the death system.");
    if ((varbitplayer_28118 == 1)) {
        script16930(106561616, -1, 2, "View items you can reclaim from death.");
        IF_SETOPBASE("Item Reclaim", comp(1626, 80));
    } else {
        script16930(106561616, -1, 2, "View how much you would pay to reclaim items if you were to die where you are now.");
        IF_SETOPBASE("Death Preview", comp(1626, 80));
    };
    script16930(106561618, -1, 2, "View your overflow storage.");
    script16930(106561620, -1, 2, "View which items you would lose if you died in dangerous PvP.");
    script9554(106561594, 106561601, 106561595, string0, 21218);
    if ((varbitplayer_28117 == 1)) {
        string1 = "Loading...";
    };
    IF_SETTEXT(string1, comp(1626, 25));
    IF_SETENABLED(true, comp(1626, 19));
    IF_SETENABLED(true, comp(1626, 80));
    IF_SETENABLED(true, comp(1626, 82));
    if ((((varbitplayer_28118 == 1) || (int0 == 2)) || (int0 == 3))) {
        IF_SETENABLED(false, comp(1626, 84));
        IF_SETGRAPHIC(24203 as graphic, comp(1626, 85));
    } else {
        IF_SETENABLED(true, comp(1626, 84));
        IF_SETGRAPHIC(24202 as graphic, comp(1626, 85));
    };
    script17087(varplayer_10745);
    return "";
}