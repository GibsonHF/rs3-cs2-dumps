//
function script206(): void {
    CC_DELETEALL(comp(628, 29));
    var string0 = "";
    var int0 = 0;
    CC_CREATE(comp(628, 29), 5, int0);
    if ((varbitplayer_9999 == 1)) {
        string0 = "Dwarven Mine - Complete";
        CC_SETGRAPHIC(13616 as graphic);
    } else {
        string0 = "Dwarven Mine - Incomplete";
        CC_SETGRAPHIC(13617 as graphic);
    };
    CC_SETPOSITION(150, 50, 0, 0);
    CC_SETSIZE(25, 25, 0, 0);
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    int0 = (int0 + 1);
    CC_CREATE(41156637, 5, int0);
    if ((varbitplayer_10000 == 1)) {
        string0 = "Varrock West Mine - Complete";
        CC_SETGRAPHIC(13616 as graphic);
    } else {
        string0 = "Varrock West Mine - Incomplete";
        CC_SETGRAPHIC(13617 as graphic);
    };
    CC_SETPOSITION(275, 112, 0, 0);
    CC_SETSIZE(25, 25, 0, 0);
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    int0 = (int0 + 1);
    CC_CREATE(41156637, 5, int0);
    if ((varbitplayer_10001 == 1)) {
        string0 = "Varrock East Mine - Complete";
        CC_SETGRAPHIC(13616 as graphic);
    } else {
        string0 = "Varrock East Mine - Incomplete";
        CC_SETGRAPHIC(13617 as graphic);
    };
    CC_SETPOSITION(350, 120, 0, 0);
    CC_SETSIZE(25, 25, 0, 0);
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    int0 = (int0 + 1);
    CC_CREATE(41156637, 5, int0);
    if ((varbitplayer_10002 == 1)) {
        string0 = "Rimmington Mine - Complete";
        CC_SETGRAPHIC(13616 as graphic);
    } else {
        string0 = "Rimmington Mine - Incomplete";
        CC_SETGRAPHIC(13617 as graphic);
    };
    CC_SETPOSITION(120, 215, 0, 0);
    CC_SETSIZE(25, 25, 0, 0);
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    int0 = (int0 + 1);
    string0 = "Falador Lodestone";
    CC_CREATE(41156637, 5, int0);
    CC_SETGRAPHIC(22460);
    CC_SETPOSITION(118, 80, 0, 0);
    CC_SETSIZE(15, 15, 0, 0);
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    int0 = (int0 + 1);
    string0 = "Varrock Lodestone";
    CC_CREATE(41156637, 5, int0);
    CC_SETGRAPHIC(22460);
    CC_SETPOSITION(300, 105, 0, 0);
    CC_SETSIZE(15, 15, 0, 0);
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    int0 = (int0 + 1);
    string0 = "Port Sarim Lodestone";
    CC_CREATE(41156637, 5, int0);
    CC_SETGRAPHIC(22460);
    CC_SETPOSITION(151, 230, 0, 0);
    CC_SETSIZE(15, 15, 0, 0);
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    int0 = (int0 + 1);
    string0 = "Artisans' Workshop";
    CC_CREATE(41156637, 5, int0);
    CC_SETGRAPHIC(22548);
    CC_SETPOSITION(177, 130, 0, 0);
    CC_SETSIZE(15, 15, 0, 0);
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    int0 = (int0 + 1);
    if ((varbitplayer_9998 < 55)) {
        string0 = "Doric's Workshop";
    } else {
        string0 = "Doric & Son's Workshop";
    };
    CC_CREATE(comp(628, 29), 5, int0);
    CC_SETGRAPHIC(22548 as graphic);
    CC_SETPOSITION(108, 65, 0, 0);
    CC_SETSIZE(15, 15, 0, 0);
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    int0 = (int0 + 1);
    string0 = "Falador Castle";
    CC_CREATE(41156637, 5, int0);
    CC_SETGRAPHIC(22235);
    CC_SETPOSITION(112, 122, 0, 0);
    CC_SETSIZE(30, 30, 0, 0);
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    int0 = (int0 + 1);
    CC_CREATE(41156637, 5, int0);
    CC_SETGRAPHIC(13620);
    CC_SETPOSITION((((COORDX(COORD()) - 2815) * 75) / 100), (((3520 - COORDZ(COORD())) * 77) / 100), 0, 0);
    CC_SETSIZE(25, 25, 0, 0);
    string0 = "You are here";
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    return;
}