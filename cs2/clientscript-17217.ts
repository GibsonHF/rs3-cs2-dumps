//
function script17217(int0: number): void {
    var int1 = 0;
    var string0 = "View";
    var string1 = "";
    var int2 = comp(-1, 65535);
    var int3 = 10517 as graphic;
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
            int2 = comp(1030, 26);
            int3 = 10520 as graphic;
            int4 = 10519;
            break;
        }
        case 67502107: {
            int1 = 1;
            string0 = "View Duke's evidence";
            string1 = "Notes on the murder of Duke Hoarse.";
            int2 = comp(1030, 28);
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
            int2 = comp(1030, 30);
            break;
        }
    };
    IF_SETOP(1, string0, int0);
    IF_SETOPCURSOR(1, 46, int0);
    IF_SETONOP(callback(script17218, int1), int0);
    IF_SETONMOUSEREPEAT(callback(script3876, string1, int0, -1), int0);
    if ((int2 != comp(-1, 65535))) {
        IF_SETGRAPHIC(int3, int2);
        IF_SETONMOUSELEAVE(callback(script44, int2, int3), int2);
        IF_SETONMOUSEREPEAT(callback(script44, int2, int4), int2);
    };
    return;
}