//
function script9205(int0: int, int1: unknown_int, int2: component, int3: component): void {
    if ((int1 == 60)) {
        return;
    };
    var string0 = IF_GETTEXT(int2);
    var string1 = string0;
    var string2 = "";
    switch (int0) {
        case 96: {
            if ((varclient_3782 > 0)) {
                varclient_3782 = (varclient_3782 - 1);
            };
            break;
        }
        case 97: {
            if ((varclient_3782 < STRING_LENGTH(string0))) {
                varclient_3782 = (varclient_3782 + 1);
            };
            break;
        }
        case 102: {
            varclient_3782 = 0;
            break;
        }
        case 103: {
            varclient_3782 = STRING_LENGTH(string0);
            break;
        }
        default: {
            [string1, varclient_3782] = script802(varclient_3782, string0, 7, int0, int1);
            break;
        }
    };
    IF_SETTEXT(script1602(string1), int2);
    var int4 = STRINGWIDTH(SUBSTRING(string1, 0, varclient_3782), IF_GETFONTMETRICS(int2));
    var int5 = 4;
    if (((int4 + 4) > IF_GETWIDTH(IF_GETLAYER(int2)))) {
        int5 = (-4 - (int4 - IF_GETWIDTH(IF_GETLAYER(int2))));
    };
    IF_SETPOSITION(int5, IF_GETY(int2), 0, 0, int2);
    IF_SETPOSITION(script1551(varclient_3782, string1, IF_GETFONTMETRICS(int2), int5), 5, 0, 0, int3);
    return;
}