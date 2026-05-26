//
function script5114(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    IF_SETHIDE(1, 73138260);
    IF_SETTEXT(IF_GETTEXT(int0), 73138775);
    IF_SETGRAPHIC(IF_GETGRAPHIC(int1), 73138777);
    IF_SETGRAPHIC(IF_GETGRAPHIC(int2), 73138790);
    IF_SETCOLOUR(IF_GETCOLOUR(int1), 73138777);
    IF_SETCOLOUR(IF_GETCOLOUR(int2), 73138790);
    IF_SETCOLOUR(IF_GETCOLOUR(int3), 73138786);
    IF_SETCOLOUR(IF_GETCOLOUR(int4), 73138787);
    var string0 = "";
    switch (IF_GETGRAPHIC(int5)) {
        case 6194: {
            IF_SETGRAPHIC(6199, 73138766);
            string0 = "This clan is flagged as a nemesis.";
            break;
        }
        case 6195: {
            IF_SETGRAPHIC(6200, 73138766);
            string0 = "This clan is flagged as an enemy.";
            break;
        }
        case 6196: {
            IF_SETGRAPHIC(6201, 73138766);
            string0 = "This clan is flagged as neutral.";
            break;
        }
        case 6197: {
            IF_SETGRAPHIC(6202, 73138766);
            string0 = "This clan is flagged as a friend.";
            break;
        }
        case 6198: {
            IF_SETGRAPHIC(6203, 73138766);
            string0 = "This clan is flagged as an ally.";
            break;
        }
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 73138766);
    script5106();
    if ((int6 == 1)) {
        if ((IF_GETHIDE(73138179) == 1)) {
            IF_SETHIDE(0, 73138180);
        } else {
            IF_SETHIDE(0, 73138179);
        };
        IF_SETHIDE(1, 73138290);
        IF_SETHIDE(1, 73138297);
        IF_SETHIDE(1, 73138283);
        IF_SETHIDE(1, 73138276);
        IF_SETHIDE(1, 73138269);
    } else {
        IF_SETHIDE(0, 73138216);
    };
    return;
}