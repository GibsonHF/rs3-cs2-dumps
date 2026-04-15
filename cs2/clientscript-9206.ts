//
function script9206(int0: component, int1: component, int2: unknown_int, int3: unknown_int, int4: int): void {
    script8841(35, 1);
    IF_SETONKEY(callback(), comp(137, 82));
    varclient_3783 = int3;
    varclient_3784 = int4;
    var string0 = "";
    if ((int3 == 0)) {
        string0 = FRIEND_GETNOTES(int4);
    } else {
        string0 = IGNORE_GETNOTES(int4);
    };
    IF_SETTEXT(string0, comp(451, 6));
    varclient_3782 = STRING_LENGTH(string0);
    script1566(0, string0, 50);
    var int5 = STRINGWIDTH(SUBSTRING(string0, 0, varclient_3782), IF_GETFONTMETRICS(int0));
    var int6 = 4;
    if (((int5 + 4) > IF_GETWIDTH(IF_GETLAYER(int0)))) {
        int6 = (-4 - (int5 - IF_GETWIDTH(IF_GETLAYER(int0))));
    };
    IF_SETPOSITION(int6, IF_GETY(int0), 0, 0, int0);
    IF_SETPOSITION(script1551(varclient_3782, string0, IF_GETFONTMETRICS(int0), int6), 5, 0, 0, int1);
    return;
}