//
function script5250(int0: unknown_int): void {
    var string0 = "";
    var string1 = "";
    switch (varplayer_1539) {
        case 2: {
            if ((int0 == 1)) {
                string0 = "Battle-mage Helm";
                string1 = "Strong against melee and ranged attacks, weak against magic.";
            };
            if ((int0 == 2)) {
                string0 = "Trickster Hood";
                string1 = "Strong against melee and magical attacks, weak against ranged.";
            };
            if ((int0 == 3)) {
                string0 = "Vanguard Helm";
                string1 = "Strong against magic and ranged attacks, weak against melee.";
            };
            break;
        }
        case 1: {
            if ((int0 == 1)) {
                string0 = "Battle-mage robe legs";
                string1 = "Strong against melee and ranged attacks, weak against magic.";
            };
            if ((int0 == 2)) {
                string0 = "Trickster robe legs";
                string1 = "Strong against melee and magical attacks, weak against ranged.";
            };
            if ((int0 == 3)) {
                string0 = "Vanguard leg armour";
                string1 = "Strong against magic and ranged attacks, weak against melee.";
            };
            break;
        }
        case 3: {
            if ((int0 == 1)) {
                string0 = "Battle-mage robe";
                string1 = "Strong against melee and ranged attacks, weak against magic.";
            };
            if ((int0 == 2)) {
                string0 = "Trickster robe";
                string1 = "Strong against melee and magical attacks, weak against ranged.";
            };
            if ((int0 == 3)) {
                string0 = "Vanguard body armour";
                string1 = "Strong against magic and ranged attacks, weak against melee.";
            };
            break;
        }
        case 5: {
            if ((int0 == 1)) {
                string0 = "Battle-mage gloves";
                string1 = "Strong against melee and ranged attacks, weak against magic.";
            };
            if ((int0 == 2)) {
                string0 = "Trickster gloves";
                string1 = "Strong against melee and magical attacks, weak against ranged.";
            };
            if ((int0 == 3)) {
                string0 = "Vanguard gloves";
                string1 = "Strong against magic and ranged attacks, weak against melee.";
            };
            break;
        }
        case 4: {
            if ((int0 == 1)) {
                string0 = "Battle-mage boots";
                string1 = "Strong against melee and ranged attacks, weak against magic.";
            };
            if ((int0 == 2)) {
                string0 = "Trickster boots";
                string1 = "Strong against melee and magical attacks, weak against ranged.";
            };
            if ((int0 == 3)) {
                string0 = "Vanguard boots";
                string1 = "Strong against magic and ranged attacks, weak against melee.";
            };
            break;
        }
    };
    if (((strcmp(string0, "") == 0) || (strcmp(string1, "") == 0))) {
        string0 = "You have received a piece of Hybrid Armour!";
        string1 = "Select which reward you would prefer:";
    };
    IF_SETTEXT(string0, comp(1127, 3));
    IF_SETTEXT(string1, comp(1127, 4));
    return;
}