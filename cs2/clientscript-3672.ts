//
function script3672(): void {
    var string0 = enum_getvalue(0, 36, 3230 as cs2enum, varclient_1327);
    var string1 = enum_getvalue(0, 36, 3230 as cs2enum, varclient_1326);
    var string2 = enum_getvalue(0, 36, 3231 as cs2enum, varclient_1330);
    var string3 = `${inttostring(varclient_1325, 10)}%`;
    var int0 = enum_getvalue(0, 23, 3233 as cs2enum, varclient_1328);
    var int1 = enum_getvalue(0, 23, 3233 as cs2enum, varclient_1329);
    IF_SETTEXT(string0, comp(1004, 40));
    IF_SETCOLOUR(enum_getvalue(0, 0, 3234 as cs2enum, varclient_1327), comp(1004, 40));
    IF_SETTEXT(string1, comp(1004, 39));
    IF_SETCOLOUR(enum_getvalue(0, 0, 3234 as cs2enum, varclient_1326), comp(1004, 39));
    stack(int0);
    stack(65798180);
    IF_SETGRAPHIC();
    stack(int1);
    stack(65798181);
    IF_SETGRAPHIC();
    IF_SETTEXT(string2, 65798182);
    stack(0);
    stack(0);
    stack(3235);
    stack(varclient_1330);
    enum_getvalue();
    IF_SETCOLOUR(stack(), 65798182);
    IF_SETTEXT(string3, 65798185);
    if ((varclient_1327 != 3)) {
        IF_SETHIDE(false, comp(1004, 34));
    } else {
        IF_SETHIDE(true, comp(1004, 34));
    };
    if ((varclient_1326 != 3)) {
        IF_SETHIDE(false, comp(1004, 31));
    } else {
        IF_SETHIDE(true, comp(1004, 31));
    };
    if ((varclient_1331 == 1)) {
        IF_SETHIDE(false, comp(1004, 33));
    } else {
        IF_SETHIDE(true, comp(1004, 33));
    };
    if ((varclient_1330 > 66)) {
        IF_SETHIDE(false, comp(1004, 32));
    } else {
        IF_SETHIDE(true, comp(1004, 32));
    };
    return;
}