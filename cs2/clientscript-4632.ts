//
function script4632(int0: int): void {
    var int1 = -1;
    var int2 = -1;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    if ((varclient_1520 > 2000000)) {
        string1 = `over ${TOSTRING_LOCALISED(2000000, 1)}`;
    } else {
        string1 = TOSTRING_LOCALISED(varclient_1520, 1);
    };
    int1 = MIN(2147483647, (((1000 * varclient_1520) / MAX(1, varclient_1521)) / 1000));
    int2 = MODULO(((1000 * varclient_1520) / MAX(1, varclient_1521)), 1000);
    if ((int2 == 0)) {
        string0 = inttostring(int1, 10);
    } else {
        string0 = strconcat(inttostring(int1, 10), ".");
        if ((int2 < 100)) {
            string0 = strconcat(string0, "0");
        };
        if ((int2 < 10)) {
            string0 = strconcat(string0, "0");
        };
        string0 = strconcat(string0, inttostring(int2, 10));
        if ((MODULO(int2, 10) == 0)) {
            string0 = SUBSTRING(string0, 0, (STRING_LENGTH(string0) - 2));
        };
        if ((MODULO(int2, 100) == 0)) {
            string0 = SUBSTRING(string0, 0, (STRING_LENGTH(string0) - 2));
        };
    };
    string3 = TOSTRING_LOCALISED(varclient_1522, 1);
    if ((int0 == 2)) {
        if ((varclient_1520 > 2000)) {
            string5 = `Behold ${varclient_2362}, champion of ${string1} clashes across Gielinor!`;
        } else if ((varclient_1520 == 1)) {
            string5 = `Here stands ${varclient_2362}, once victor of a duel.`;
        } else {
            string5 = `Here stands ${varclient_2362}, victor of ${string1} duels.`;
        };
        string2 = `${varclient_2362} defeats ${string0} opponents for every loss!`;
        if ((varclient_1522 > 250)) {
            string3 = `over ${TOSTRING_LOCALISED(250, 1)}`;
        };
        string4 = `${varclient_2362} has vanquished ${TOSTRING_LOCALISED(varclient_1522, 1)} opponents in a row.`;
    } else if ((int0 == 0)) {
        if ((varclient_1520 > 2000)) {
            string5 = `Behold ${varclient_2362}, champion of ${string1} bouts in the Duel Arena!`;
        } else if ((varclient_1520 == 1)) {
            string5 = `Here stands ${varclient_2362}, once victor of a duel.`;
        } else {
            string5 = `Here stands ${varclient_2362}, victor of ${string1} duels.`;
        };
        string2 = `${varclient_2362} defeats ${string0} opponents for every loss!`;
        if ((varclient_1522 > 250)) {
            string3 = `over ${TOSTRING_LOCALISED(250, 1)}`;
        };
        string4 = `${varclient_2362} has vanquished ${TOSTRING_LOCALISED(varclient_1522, 1)} opponents in a row.`;
    } else if ((int0 == 1)) {
        if ((varclient_1520 > 2000)) {
            string5 = `Behold ${varclient_2362}, taker of ${string1} heads in the Wilderness!`;
        } else {
            string5 = `Here stands ${varclient_2362}, who has killed ${string1} opponents in the Wilderness.`;
        };
        string2 = `Vanquisher of ${string0} foes for every fall!`;
        if ((varclient_1522 > 250)) {
            string3 = `Over ${TOSTRING_LOCALISED(250, 1)}`;
        };
        string4 = `${string3} victims in succession have rendered their souls to ${varclient_2362}.`;
    };
    IF_SETTEXT(string5, comp(21, 0));
    IF_SETTEXT(string4, comp(21, 2));
    IF_SETTEXT(string2, comp(21, 1));
    IF_SETTEXT(`Highest value Wilderness kill:<br>${TOSTRING_LOCALISED_LONG(varclient_1523, 1)} coins.`, comp(21, 3));
    IF_SETHIDE(false, comp(21, 17));
    IF_SETHIDE(false, comp(21, 26));
    IF_SETHIDE(true, comp(21, 1));
    IF_SETHIDE(true, comp(21, 2));
    if ((varclient_1524 == 1)) {
        IF_SETHIDE(false, comp(21, 1));
        if ((varclient_1522 > 1)) {
            IF_SETHIDE(false, comp(21, 2));
        };
    };
    IF_SETHIDE(true, comp(21, 3));
    if (((int0 == 1) && branch_gt_long[336](varclient_1523, 0n))) {
        IF_SETHIDE(false, comp(21, 3));
    };
    IF_SETPOSITION(IF_GETX(comp(21, 17)), IF_GETY(comp(21, 3)), 0, 0, comp(21, 17));
    if ((IF_GETHIDE(comp(21, 3)) == true)) {
        IF_SETHIDE(true, comp(21, 17));
        IF_SETPOSITION(IF_GETX(comp(21, 2)), 0, 0, 2, comp(21, 2));
        IF_SETPOSITION(IF_GETX(comp(21, 1)), IF_GETHEIGHT(comp(21, 2)), 0, 2, comp(21, 1));
    };
    IF_SETPOSITION(IF_GETX(comp(21, 17)), IF_GETY(comp(21, 1)), 0, 0, comp(21, 26));
    if ((IF_GETHIDE(comp(21, 2)) == true)) {
        IF_SETHIDE(true, comp(21, 26));
    };
    return;
}