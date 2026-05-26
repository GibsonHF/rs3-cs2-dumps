//
function script15306(): void {
    var int0 = 0;
    var int1 = script20087();
    if ((varbitplayer_58313 == 1)) {
        IF_SETHIDE(1, 27656301);
        IF_SETHIDE(0, 27656302);
        IF_SETHIDE(0, 27656306);
        IF_SETHIDE(0, 27656310);
        IF_SETHIDE(0, 27656314);
        IF_SETHIDE(0, 27656318);
        IF_SETHIDE(0, 27656293);
        IF_SETHIDE(0, 27656294);
        IF_SETHIDE(0, 27656295);
        IF_SETHIDE(0, 27656296);
        IF_SETHIDE(0, 27656297);
    } else {
        IF_SETHIDE(0, 27656301);
        IF_SETHIDE(1, 27656302);
        IF_SETHIDE(1, 27656306);
        IF_SETHIDE(1, 27656310);
        IF_SETHIDE(1, 27656314);
        IF_SETHIDE(1, 27656318);
        IF_SETHIDE(1, 27656293);
        IF_SETHIDE(1, 27656294);
        IF_SETHIDE(1, 27656295);
        IF_SETHIDE(1, 27656296);
        IF_SETHIDE(1, 27656297);
    };
    var int2 = -1;
    var int3 = -1;
    var int4 = -1 as npc;
    var int5 = -1 as struct;
    var int6 = -1 as obj;
    while ((++int0 <= int1)) {
        int2 = script15302(int0);
        int3 = script15303(int0);
        if ((int2 > 0)) {
            int4 = enum_getvalue(0, 32, 12737 as cs2enum, int2);
            int5 = enum_getvalue(32, 73, 12740 as cs2enum, int4);
            int6 = struct_getparam(int5, 6601);
            IF_SETOBJECT_NONUM(int6, 0, script15312(int0));
            script15313(int0, 1);
            IF_SETOPBASE(`<col=ff9040>${struct_getparam(int5, 6600)}`, script15314(int0));
        } else {
            IF_SETOBJECT(-1, 0, script15312(int0));
            script15313(int0, 0);
            IF_SETOPBASE("", script15314(int0));
        };
    };
    return;
}