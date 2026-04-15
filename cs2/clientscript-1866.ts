//
function script1866(int0: int, int1: unknown_int, int2: component): void {
    if ((int0 == 84)) {
        if ((varclient_3703 != -1 as coordgrid)) {
            WORLDMAP_JUMPTODISPLAYCOORD(varclient_3703);
        };
        varclient_2545 = "";
        script308(int2);
        return;
    };
    if ((int0 == 13)) {
        if ((script9666() == 1)) {
            return;
        };
        script308(int2);
        return;
    };
    if (((int0 != 85) && (CHAR_ISPRINTABLE(int1) == 0))) {
        return;
    };
    var string0 = REMOVETAGS(script74(varclient_2545, 4, int0, int1));
    if ((STRING_INDEXOF_STRING(string0, "  ", 0) != -1)) {
        return;
    };
    if ((strcmp(string0, " ") == 0)) {
        return;
    };
    if ((PARAHEIGHT(string0, IF_GETWIDTH(int2), 66 as fontmetrics) > 1)) {
        return;
    };
    varclient_2545 = LOWERCASE(string0);
    var int3 = STRING_LENGTH(varclient_2545);
    var int4 = -1;
    var int5 = -1 as coordgrid;
    var int6 = -1;
    var int7 = 0;
    var string1 = "";
    var int8 = -1 as coordgrid;
    var int9 = 2147483647;
    var int10 = 2147483647;
    [int4, int5] = WORLDMAP_LISTELEMENT_START();
    while ((int4 != -1)) {
        string0 = REMOVETAGS(script2332(MEC_TEXT(int4), "<br>", " "));
        int6 = STRING_INDEXOF_STRING(LOWERCASE(string0), varclient_2545, 0);
        if (((int6 != -1) && (int6 <= int9))) {
            int7 = STRING_LENGTH(string0);
            if ((int7 < int10)) {
                stack(string0);
                stack(int5);
                [string1, int8] = stack();
                [int9, int10] = [int6, int7];
            };
        };
        [int4, int5] = WORLDMAP_LISTELEMENT_NEXT();
    };
    if ((int8 == -1 as coordgrid)) {
        varclient_3703 = -1 as coordgrid;
        if ((PARAWIDTH(varclient_2545, IF_GETWIDTH(int2), 66 as fontmetrics) > IF_GETWIDTH(int2))) {
            IF_SETTEXTALIGN(2, 1, 0, int2);
        } else {
            IF_SETTEXTALIGN(0, 1, 0, int2);
        };
        IF_SETTEXT(`<col=ff0000>${varclient_2545}</col>`, int2);
        return;
    };
    string0 = "";
    if ((int9 > 0)) {
        string0 = SUBSTRING(string1, 0, int9);
    };
    string0 = strconcat(string0, `<col=ffffff>${SUBSTRING(string1, int9, (int9 + int3))}</col>`);
    string0 = strconcat(string0, SUBSTRING(string1, (int9 + int3), STRING_LENGTH(string1)));
    IF_SETTEXT(string0, int2);
    varclient_3703 = int8;
    return;
}