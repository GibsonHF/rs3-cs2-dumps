//
function script919(): void {
    var int0 = INV_TOTAL(93 as inv, varclient_743);
    if (((varclient_743 == 995 as obj) || (varclient_743 == -1 as obj))) {
        int0 = script17404();
    };
    var string0 = "Cost:";
    var int1 = -1;
    if ((varclient_744 == 0)) {
        string0 = "None available";
    } else if ((varclient_744 == -1)) {
        string0 = "Free sample!";
    } else {
        int1 = varclient_744;
    };
    IF_SETTEXT(string0, comp(449, 10));
    if ((int1 > int0)) {
        IF_SETCOLOUR(16711680, comp(449, 11));
    } else {
        IF_SETCOLOUR(varclient_1241, comp(449, 11));
    };
    if ((int1 > -1)) {
        IF_SETOBJECT_ALWAYSNUM(varclient_743, int1, comp(449, 9));
    } else {
        IF_SETOBJECT_NONUM(-1 as obj, -1, comp(449, 9));
    };
    if ((varclient_744 == -1)) {
        script13969(comp(449, 8), comp(-1, 65535), 28553 as struct, "Take");
        IF_SETOP(1, "Take 1", comp(449, 8));
        IF_SETOP(2, "Take 5", comp(449, 8));
        IF_SETOP(3, "Take 10", comp(449, 8));
        IF_SETOP(4, "Take 50", comp(449, 8));
    } else {
        script13969(comp(449, 8), comp(-1, 65535), 28553 as struct, "Buy");
        IF_SETOP(1, "Buy 1", comp(449, 8));
        IF_SETOP(2, "Buy 5", comp(449, 8));
        IF_SETOP(3, "Buy 10", comp(449, 8));
        IF_SETOP(4, "Buy 50", comp(449, 8));
    };
    return;
}