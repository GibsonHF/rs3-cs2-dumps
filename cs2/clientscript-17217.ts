//
function script17217(int0: component): void {
    var int1 = 0;
    var string0 = "View";
    var string1 = "";
    var int2 = -1;
    var int3 = 10517;
    var int4 = 10516;
    switch (int0) {
        case 67502105: {
            if (((varplayer_10788 != -1 as npc) || (varplayer_10789 != -1 as loc))) {
                IF_SETHIDE(true, int0);
                return;
            };
            int1 = 0;
            string0 = "View suspects";
            string1 = "Notes on possible suspects.";
            int2 = 67502106;
            int3 = 10520;
            int4 = 10519;
            break;
        }
        case 67502107: {
            int1 = 1;
            string0 = "View Duke's evidence";
            string1 = "Notes on the murder of Duke Hoarse.";
            int2 = 67502108;
            break;
        }
        case 67502109: {
            if ((script17214() == 0)) {
                IF_SETHIDE(true, int0);
                return;
            };
            int1 = 2;
            string0 = "View Alchemist's evidence";
            string1 = "Notes on the murder of Simon Bullace.";
            int2 = 67502110;
            break;
        }
    };
    IF_SETOP(1, string0, int0);
    IF_SETOPCURSOR(1, 46 as cursor, int0);
    IF_SETONOP(callback(script17218, int1), int0);
    IF_SETONMOUSEREPEAT(callback(script3876, string1, int0, -1), int0);
    if ((int2 != -1)) {
        stack(int3);
        stack(int2);
        IF_SETGRAPHIC();
        IF_SETONMOUSELEAVE(callback(script44, int2, int3), int2);
        IF_SETONMOUSEREPEAT(callback(script44, int2, int4), int2);
    };
    return;
}