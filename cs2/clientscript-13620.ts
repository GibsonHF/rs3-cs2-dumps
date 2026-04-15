//
function script13620(int0: component, int1: component): void {
    IF_CLEAROPS(int0);
    IF_SETONMOUSEREPEAT(callback(), int1);
    IF_SETOPCURSOR(1, -1, int0);
    stack(-1);
    stack(int1);
    IF_SETGRAPHIC();
    var int2 = -1;
    switch (int0) {
        case 121700391: {
            int2 = varplayer_9616;
            break;
        }
        case 121700395: {
            int2 = varplayer_9617;
            break;
        }
        case 121700399: {
            int2 = varplayer_9618;
            break;
        }
        case 121700403: {
            int2 = varplayer_9619;
            break;
        }
        default: {
            return;
        }
    };
    var string0 = "";
    var string1 = "";
    if ((int2 != -1 as achievement)) {
        string0 = ACHIEVEMENT_GETNAME(int2);
        stack(ACHIEVEMENT_SPRITE(int2));
        stack(int1);
        IF_SETGRAPHIC();
        string1 = strconcat(string0, strconcat("<br>", script15321(int2)));
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), int1);
        IF_SETOPCURSOR(1, 210, int0);
        IF_SETOP(1, "Go To", int0);
        IF_SETOP(2, "Unfavourite", int0);
        IF_SETOPBASE(string0, int0);
    };
    return;
}