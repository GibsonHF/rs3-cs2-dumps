//
function script6936(): void {
    var string0 = "Absolutely nothing";
    var string1 = string0;
    var int0 = (1 - 1);
    var int1 = 1;
    while ((int0 >= 0)) {
        if ((INVOTHER_GETNUM(134 as inv, int0) > 0)) {
            int1 = 0;
            int0 = 0;
        };
        int0 = (int0 - 1);
    };
    if ((INV_FREESPACE(134 as inv) < 1)) {
        if ((varclient_546 >= 0)) {
            string0 = `${TOSTRING_LOCALISED(varclient_546, 1)} gp`;
        } else {
            string0 = "Unknown value";
        };
    };
    if ((int1 == 0)) {
        if ((varclient_1333 >= 0)) {
            string1 = `${TOSTRING_LOCALISED(varclient_1333, 1)} gp`;
        } else {
            string1 = "Unknown value";
        };
    };
    if (((varclient_546 < 0) || (varclient_1333 < 0))) {
        [string0, string1] = [`<col=ff0000>${string0}</col>`, `<col=ff0000>${string1}</col>`];
    } else if ((varclient_546 > varclient_1333)) {
        string1 = `<col=ff0000>${string1}</col>`;
    } else if ((varclient_546 < varclient_1333)) {
        string0 = `<col=ff0000>${string0}</col>`;
    };
    IF_SETTEXT(string0, comp(1367, 34));
    IF_SETTEXT(string1, comp(1367, 40));
    return;
}