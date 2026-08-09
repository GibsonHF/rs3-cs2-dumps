//
function script5114(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    IF_SETHIDE(true, comp(1116, 84));
    IF_SETTEXT(IF_GETTEXT(int0), comp(1116, 599));
    IF_SETGRAPHIC(IF_GETGRAPHIC(int1), comp(1116, 601));
    IF_SETGRAPHIC(IF_GETGRAPHIC(int2), comp(1116, 614));
    IF_SETCOLOUR(IF_GETCOLOUR(int1), comp(1116, 601));
    IF_SETCOLOUR(IF_GETCOLOUR(int2), comp(1116, 614));
    IF_SETCOLOUR(IF_GETCOLOUR(int3), comp(1116, 610));
    IF_SETCOLOUR(IF_GETCOLOUR(int4), comp(1116, 611));
    var string0 = "";
    switch (IF_GETGRAPHIC(int5)) {
        case 6194: {
            IF_SETGRAPHIC(6199 as graphic, comp(1116, 590));
            string0 = "This clan is flagged as a nemesis.";
            break;
        }
        case 6195: {
            IF_SETGRAPHIC(6200 as graphic, comp(1116, 590));
            string0 = "This clan is flagged as an enemy.";
            break;
        }
        case 6196: {
            IF_SETGRAPHIC(6201 as graphic, comp(1116, 590));
            string0 = "This clan is flagged as neutral.";
            break;
        }
        case 6197: {
            IF_SETGRAPHIC(6202 as graphic, comp(1116, 590));
            string0 = "This clan is flagged as a friend.";
            break;
        }
        case 6198: {
            IF_SETGRAPHIC(6203 as graphic, comp(1116, 590));
            string0 = "This clan is flagged as an ally.";
            break;
        }
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1116, 590));
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