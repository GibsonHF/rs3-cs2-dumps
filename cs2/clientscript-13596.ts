//
function script13596(int0: component, int1: unknown_int): void {
    CC_DELETEALL(int0);
    var int2 = -1 as achievement;
    switch (int1) {
        case 0: {
            int2 = varplayer_9628;
            break;
        }
        case 1: {
            int2 = varplayer_9629;
            break;
        }
        case 2: {
            int2 = varplayer_9630;
            break;
        }
        case 3: {
            int2 = varplayer_9631;
            break;
        }
    };
    if ((int2 == -1 as achievement)) {
        return;
    };
    var string0 = "";
    CC_CREATE(int0, 5, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(2, 2, 1, 1);
    CC_SETGRAPHIC(ACHIEVEMENT_SPRITE(int2));
    string0 = ACHIEVEMENT_GETNAME(int2);
    string0 = strconcat(string0, "<br>");
    string0 = strconcat(string0, script15321(int2));
    CC_SETONMOUSEREPEAT(callback(script8799, string0, int0, 0));
    return;
}