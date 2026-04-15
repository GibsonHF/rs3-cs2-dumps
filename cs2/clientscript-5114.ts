//
function script5114(int0: component, int1: component, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: unknown_int): void {
    IF_SETHIDE(true, comp(1116, 84));
    IF_SETTEXT(IF_GETTEXT(int0), comp(1116, 599));
    stack(IF_GETGRAPHIC(int1));
    stack(73138777);
    IF_SETGRAPHIC();
    stack(IF_GETGRAPHIC(int2));
    stack(73138790);
    IF_SETGRAPHIC();
    IF_SETCOLOUR(IF_GETCOLOUR(int1), 73138777);
    IF_SETCOLOUR(IF_GETCOLOUR(int2), 73138790);
    IF_SETCOLOUR(IF_GETCOLOUR(int3), 73138786);
    IF_SETCOLOUR(IF_GETCOLOUR(int4), 73138787);
    var string0 = "";
    switch (IF_GETGRAPHIC(int5)) {
        case 6194: {
            stack(6199);
            stack(73138766);
            IF_SETGRAPHIC();
            string0 = "This clan is flagged as a nemesis.";
            break;
        }
        case 6195: {
            stack(6200);
            stack(73138766);
            IF_SETGRAPHIC();
            string0 = "This clan is flagged as an enemy.";
            break;
        }
        case 6196: {
            stack(6201);
            stack(73138766);
            IF_SETGRAPHIC();
            string0 = "This clan is flagged as neutral.";
            break;
        }
        case 6197: {
            stack(6202);
            stack(73138766);
            IF_SETGRAPHIC();
            string0 = "This clan is flagged as a friend.";
            break;
        }
        case 6198: {
            stack(6203);
            stack(73138766);
            IF_SETGRAPHIC();
            string0 = "This clan is flagged as an ally.";
            break;
        }
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 73138766);
    script5106();
    if ((int6 == 1)) {
        if ((IF_GETHIDE(comp(1116, 3)) == true)) {
            IF_SETHIDE(false, comp(1116, 4));
        } else {
            IF_SETHIDE(false, comp(1116, 3));
        };
        IF_SETHIDE(true, comp(1116, 114));
        IF_SETHIDE(true, comp(1116, 121));
        IF_SETHIDE(true, comp(1116, 107));
        IF_SETHIDE(true, comp(1116, 100));
        IF_SETHIDE(true, comp(1116, 93));
    } else {
        IF_SETHIDE(false, comp(1116, 40));
    };
    return;
}