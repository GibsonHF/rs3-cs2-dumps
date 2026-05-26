//
function script17088(int0: number): string {
    IF_BUTTON_SETTOGGLED(0, 106561555);
    IF_BUTTON_SETTOGGLED(0, 106561616);
    IF_BUTTON_SETTOGGLED(0, 106561618);
    IF_BUTTON_SETTOGGLED(0, 106561620);
    var string0 = "Death";
    var string1 = "Death";
    switch (varbitplayer_52406) {
        case 0: {
            IF_BUTTON_SETTOGGLED(1, 106561555);
            string0 = "Death Cost Overview";
            string1 = "What happens when you die?";
            break;
        }
        case 1: {
            IF_BUTTON_SETTOGGLED(1, 106561616);
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
            IF_BUTTON_SETTOGGLED(1, 106561618);
            string0 = "Overflow Storage";
            string1 = "Reclaim items from overflow.";
            break;
        }
        case 3: {
            IF_BUTTON_SETTOGGLED(1, 106561620);
            string0 = "Death Preview";
            string1 = "If you died in dangerous PvP.";
            break;
        }
    };
    script16930(106561555, -1, 2, "View information about the death system.");
    if ((varbitplayer_28118 == 1)) {
        script16930(106561616, -1, 2, "View items you can reclaim from death.");
        IF_SETOPBASE("Item Reclaim", 106561616);
    } else {
        script16930(106561616, -1, 2, "View how much you would pay to reclaim items if you were to die where you are now.");
        IF_SETOPBASE("Death Preview", 106561616);
    };
    script16930(106561618, -1, 2, "View your overflow storage.");
    script16930(106561620, -1, 2, "View which items you would lose if you died in dangerous PvP.");
    script9554(106561594, 106561601, 106561595, string0, 21218);
    if ((varbitplayer_28117 == 1)) {
        string1 = "Loading...";
    };
    IF_SETTEXT(string1, 106561561);
    IF_SETENABLED(1, 106561555);
    IF_SETENABLED(1, 106561616);
    IF_SETENABLED(1, 106561618);
    if ((((varbitplayer_28118 == 1) || (int0 == 2)) || (int0 == 3))) {
        IF_SETENABLED(0, 106561620);
        stack(24203);
        stack(106561621);
        IF_SETGRAPHIC();
    } else {
        IF_SETENABLED(1, 106561620);
        stack(24202);
        stack(106561621);
        IF_SETGRAPHIC();
    };
    script17087(varplayer_10745);
    return "";
}