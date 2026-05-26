//
function script3672(): void {
    var string0 = enum_getvalue(0, 36, 3230 as cs2enum, varclient_1327);
    var string1 = enum_getvalue(0, 36, 3230 as cs2enum, varclient_1326);
    var string2 = enum_getvalue(0, 36, 3231 as cs2enum, varclient_1330);
    var string3 = `${inttostring(varclient_1325, 10)}%`;
    var int0 = enum_getvalue(0, 23, 3233 as cs2enum, varclient_1328);
    var int1 = enum_getvalue(0, 23, 3233 as cs2enum, varclient_1329);
    IF_SETTEXT(string0, 65798184);
    IF_SETCOLOUR(enum_getvalue(0, 0, 3234 as cs2enum, varclient_1327), 65798184);
    IF_SETTEXT(string1, 65798183);
    IF_SETCOLOUR(enum_getvalue(0, 0, 3234 as cs2enum, varclient_1326), 65798183);
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
        IF_SETHIDE(0, 65798178);
    } else {
        IF_SETHIDE(1, 65798178);
    };
    if ((varclient_1326 != 3)) {
        IF_SETHIDE(0, 65798175);
    } else {
        IF_SETHIDE(1, 65798175);
    };
    if ((varclient_1331 == 1)) {
        IF_SETHIDE(0, 65798177);
    } else {
        IF_SETHIDE(1, 65798177);
    };
    if ((varclient_1330 > 66)) {
        IF_SETHIDE(0, 65798176);
    } else {
        IF_SETHIDE(1, 65798176);
    };
    return;
}