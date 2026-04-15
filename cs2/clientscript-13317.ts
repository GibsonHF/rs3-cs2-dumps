//
function script13317(int0: component): void {
    CC_DELETEALL(int0);
    var int1 = -1 as achievement;
    switch (int0) {
        case 121372700: {
            int1 = varplayer_9612;
            break;
        }
        case 121372701: {
            int1 = varplayer_9613;
            break;
        }
        case 121372702: {
            int1 = varplayer_9614;
            break;
        }
        case 121372703: {
            int1 = varplayer_9615;
            break;
        }
        default: {
            return;
        }
    };
    if ((int1 == -1 as achievement)) {
        IF_CLEAROPS(int0);
        return;
    };
    if ((ACHIEVEMENT_CATEGORY(int1) != -1 as category)) {
        IF_SETOP(1, "Go To", int0);
        IF_SETOPBASE(ACHIEVEMENT_GETNAME(int1), int0);
        IF_SETOPCURSOR(1, 210 as cursor, int0);
    } else {
        IF_CLEAROPS(int0);
    };
    CC_CREATE(int0, 5, 0);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETGRAPHIC(ACHIEVEMENT_SPRITE(int1));
    CC_SETONMOUSEREPEAT(callback(script13318, int1, int0, CC_GETID()));
    return;
}