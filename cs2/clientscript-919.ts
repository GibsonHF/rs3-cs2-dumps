//
function script919(): void {
    var int0 = INV_TOTAL(93, varclient_743);
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
    IF_SETTEXT(string0, 29425674);
    if ((int1 > int0)) {
        IF_SETCOLOUR(16711680, 29425675);
    } else {
        IF_SETCOLOUR(varclient_1241, 29425675);
    };
    if ((int1 > -1)) {
        IF_SETOBJECT_ALWAYSNUM(varclient_743, int1, 29425673);
    } else {
        IF_SETOBJECT_NONUM(-1, -1, 29425673);
    };
    if ((varclient_744 == -1)) {
        script13969(29425672, -1, 28553, "Take");
        IF_SETOP(1, "Take 1", 29425672);
        IF_SETOP(2, "Take 5", 29425672);
        IF_SETOP(3, "Take 10", 29425672);
        IF_SETOP(4, "Take 50", 29425672);
    } else {
        script13969(29425672, -1, 28553, "Buy");
        IF_SETOP(1, "Buy 1", 29425672);
        IF_SETOP(2, "Buy 5", 29425672);
        IF_SETOP(3, "Buy 10", 29425672);
        IF_SETOP(4, "Buy 50", 29425672);
    };
    return;
}