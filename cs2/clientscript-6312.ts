//
function script6312(int0: int, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component): void {
    CC_DELETEALL(int1);
    CC_DELETEALL(int5);
    var int7 = INV_GETOBJ(398 as inv, (int0 - 1));
    if (((int7 == -1 as obj) || (int7 == 8245 as obj))) {
        IF_SETHIDE(true, int2);
        IF_SETHIDE(true, int3);
        IF_SETHIDE(true, int4);
        IF_SETHIDE(true, int5);
        IF_SETHIDE(true, int6);
        return;
    };
    IF_SETHIDE(false, int2);
    IF_SETHIDE(false, int3);
    IF_SETHIDE(false, int5);
    CC_CREATE(int5, 5, 0);
    CC_SETSIZE(36, 32, 0, 0);
    CC_SETPOSITION(12, 4, 0, 0);
    CC_SETOBJECT_NONUM(int7, 1);
    CC_SETOUTLINE(1);
    CC_CREATE(int5, 4, 1);
    CC_SETSIZE(60, (32 + 4), 0, 1);
    CC_SETPOSITION(0, 0, 0, 2);
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTSHADOW(true);
    CC_SETTEXT(`Level ${inttostring(item_getparam(int7, 23), 10)}`);
    CC_CREATE(int5, 4, 2);
    CC_SETSIZE(60, 12, 1, 0);
    CC_SETPOSITION(0, 0, 2, 0);
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTSHADOW(true);
    CC_SETTEXT(script3930(`${TOSTRING_LOCALISED(int0, 1)}. ${OC_NAME(int7)}`, CC_GETWIDTH(), 1, CC_GETFONTMETRICS()));
    CC_CREATE(int5, 4, 3);
    CC_SETSIZE(60, 12, 1, 1);
    CC_SETPOSITION(0, 0, 2, 2);
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTSHADOW(true);
    var string0 = item_getparam(int7, 2522);
    if ((STRING_LENGTH(string0) <= 0)) {
        string0 = script6313("", item_getparam(int7, 211), item_getparam(int7, 212));
        string0 = script6313(string0, item_getparam(int7, 213), item_getparam(int7, 214));
        string0 = script6313(string0, item_getparam(int7, 215), item_getparam(int7, 216));
        string0 = script6313(string0, item_getparam(int7, 217), item_getparam(int7, 218));
        string0 = script6313(string0, item_getparam(int7, 219), item_getparam(int7, 220));
        string0 = script6313(string0, item_getparam(int7, 221), item_getparam(int7, 222));
    };
    CC_SETTEXT(string0);
    if ((TESTBIT(varclient_841, int0) == 0)) {
        script13994(int2, comp(-1, 65535), 28556 as struct, "", true);
    } else {
        script13994(int2, comp(-1, 65535), 28556 as struct, "", false);
    };
    var int8 = 0;
    if ((TESTBIT(varclient_841, 0) == 1)) {
        int8 = 1;
    };
    CC_CREATE(int1, 4, 0);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETPAUSETEXT("Make All");
    if ((int8 == 0)) {
        CC_SETHIDE(true);
    };
    CC_CREATE(int1, 4, 1);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETPAUSETEXT("Make X");
    if ((int8 == 0)) {
        CC_SETHIDE(true);
    };
    CC_CREATE(int1, 4, 2);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETPAUSETEXT("Make 10");
    if ((int8 == 0)) {
        CC_SETHIDE(true);
    };
    CC_CREATE(int1, 4, 3);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETPAUSETEXT("Make 5");
    if ((int8 == 0)) {
        CC_SETHIDE(true);
    };
    CC_CREATE(int1, 4, 4);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    if ((int8 == 0)) {
        CC_SETPAUSETEXT("Build");
    } else {
        CC_SETPAUSETEXT("Make 1");
    };
    return;
}