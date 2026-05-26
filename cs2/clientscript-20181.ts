//
function script20181(int0: number, int1: number, int2: number, int3: number, string0: string, string1: string, string2: string, string3: string): void {
    var int4 = script20117(varplayer_12314);
    if (((int4 == -1) || ((script13749() == 1) && (IF_GETHIDE(18087963) == 0)))) {
        IF_SETHIDE(1, 91422720);
        return;
    };
    var int5 = 33;
    var int6 = 110;
    var int7 = 44;
    if ((varbitplayer_22875 != 0)) {
        IF_SETHIDE(1, 91422724);
        IF_SETHIDE(0, 91422729);
    } else {
        IF_SETHIDE(0, 91422724);
        IF_SETHIDE(1, 91422729);
    };
    IF_SETHIDE(0, 91422720);
    if ((int0 != -1)) {
        IF_SETGRAPHIC(int0, 91422745);
        IF_SETGRAPHIC(int1, 91422744);
        IF_SETOBJECT(-1, 0, 91422746);
        if ((int1 != -1)) {
            IF_SETPOSITION(0, 0, 0, 0, 91422745);
            IF_SETPOSITION(0, 0, 2, 0, 91422744);
        } else {
            IF_SETPOSITION(0, 0, 1, 0, 91422745);
        };
    } else {
        IF_SETGRAPHIC(-1, 91422745);
        IF_SETGRAPHIC(-1, 91422744);
        IF_SETOBJECT_HIGHRES(int2, 91422746);
        if ((int2 == -1)) {
            int7 = 14;
        } else {
            int7 = 50;
        };
    };
    switch (int3) {
        case 5: {
            IF_SETCOLOUR(0, 91422742);
            IF_SETGRAPHIC(35186, 91422739);
            IF_SETGRAPHIC(35187, 91422740);
            IF_SETGRAPHIC(35188, 91422741);
            break;
        }
        case 4: {
            IF_SETGRAPHIC(35192, 91422739);
            IF_SETGRAPHIC(35193, 91422740);
            IF_SETGRAPHIC(35194, 91422741);
            break;
        }
        default: {
            IF_SETGRAPHIC(35189, 91422739);
            IF_SETGRAPHIC(35190, 91422740);
            IF_SETGRAPHIC(35191, 91422741);
            break;
        }
    };
    var int8 = script15891(string1, IF_GETWIDTH(91422733), IF_GETFONTMETRICS(91422733), 0);
    var int9 = ((int6 + int8) + int7);
    if ((int9 <= 200)) {
        IF_SETPOSITION(0, 0, 1, 0, 91422720);
        IF_SETSIZE(300, int9, 0, 0, 91422720);
    } else {
        IF_SETPOSITION(0, (0 - int5), 1, 0, 91422720);
        IF_SETSIZE(300, (MIN(int9, 200) + int5), 0, 0, 91422720);
    };
    IF_SETSIZE(0, int7, 1, 1, 91422733);
    IF_SETTEXT(string0, 91422742);
    IF_SETTEXT(string1, 91422733);
    IF_SETTEXT(string2, 91422736);
    IF_SETTEXT(string3, 91422737);
    IF_SETONTIMER(callback(script20182, CLIENTCLOCK()), 91422720);
    return;
}