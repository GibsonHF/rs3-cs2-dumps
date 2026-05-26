//
function script15169(int0: number, int1: number, string0: string): void {
    if (((int0 == -1 as dbrow) || (DB_GETROWTABLE(int0) != 106))) {
        return;
    };
    var int2 = DB_GETFIELDCOUNT(int0, 434240);
    var string1 = script15122(int0);
    if ((PARAHEIGHT(string1, IF_GETWIDTH(42795120), 57) > 1)) {
        IF_SETGRAPHIC(11986, 42795118);
        IF_SETSIZE(372, 46, 0, 0, 42795118);
        IF_SETPOSITION(5, 38, 0, 0, 42795119);
    } else {
        IF_SETGRAPHIC(11985, 42795118);
        IF_SETSIZE(372, 29, 0, 0, 42795118);
        IF_SETPOSITION(5, 30, 0, 0, 42795119);
    };
    IF_SETTEXT(string1, 42795120);
    if ((STRING_LENGTH(string0) > 0)) {
        IF_SETTEXT(string0, 42795119);
    };
    var int3 = dbrow_getfield(int0, 434320, 0);
    if ((int3 > 0)) {
        IF_SETTEXT(`+ ${TOSTRING_LOCALISED(int3, 1)}xp`, 42795121);
        IF_SETHIDE(0, 42795121);
    } else {
        IF_SETHIDE(1, 42795121);
    };
    var int4 = 0;
    var int5 = -1;
    var int6 = -1;
    [int5, int6] = script15126(int0);
    if ((int6 != 11678)) {
        IF_SETGRAPHIC(int6, 42795123);
        IF_SETHIDE(0, 42795123);
        IF_SETHIDE(1, 42795281);
    } else {
        IF_SETOBJECT_NONUM(int5, 0, 42795283);
        IF_SETHIDE(1, 42795123);
        IF_SETHIDE(0, 42795281);
    };
    while ((int4 < INV_SIZE(894))) {
        IF_SETHIDE(1, script15132(int4));
        int4 = (int4 + 1);
    };
    int4 = 0;
    while ((int4 < int2)) {
        script15173(int0, int4, int2, int1);
        int4 = (int4 + 1);
    };
    script15171(script15117(int1, script15141(int0)));
    return;
}