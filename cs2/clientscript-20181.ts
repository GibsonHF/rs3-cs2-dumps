//
function script20181(int0: number, int1: number, int2: number, int3: number, string0: string, string1: string, string2: string, string3: string): void {
    var int5 = script20117(varplayer_12314);
    if ((int5 == -1)) {
        IF_SETHIDE(true, comp(1395, 0));
        return;
    } else if (((script13749() == 1) && (IF_GETHIDE(comp(276, 27)) == false))) {
        IF_SETHIDE(true, comp(1395, 0));
        return;
    };
    var int6 = 33;
    var int7 = 110;
    var int8 = 44;
    if ((varbitplayer_22875 != 0)) {
        IF_SETHIDE(true, comp(1395, 4));
        IF_SETHIDE(false, comp(1395, 11));
    } else {
        IF_SETHIDE(false, comp(1395, 4));
        IF_SETHIDE(true, comp(1395, 11));
    };
    IF_SETHIDE(false, comp(1395, 0));
    if ((int0 != -1 as graphic)) {
        IF_SETGRAPHIC(int0, comp(1395, 28));
        IF_SETGRAPHIC(int1, comp(1395, 27));
        IF_SETOBJECT(-1 as obj, 0, comp(1395, 29));
        if ((int1 != -1 as graphic)) {
            IF_SETPOSITION(0, 0, 0, 0, comp(1395, 28));
            IF_SETPOSITION(0, 0, 2, 0, comp(1395, 27));
        } else {
            IF_SETPOSITION(0, 0, 1, 0, comp(1395, 28));
        };
    } else {
        IF_SETGRAPHIC(-1 as graphic, comp(1395, 28));
        IF_SETGRAPHIC(-1 as graphic, comp(1395, 27));
        IF_SETOBJECT_HIGHRES(int2, 91422749);
        if ((int2 == -1 as obj)) {
            int8 = 14;
        } else {
            int8 = 50;
        };
    };
    if ((int4 == -1 as graphic)) {
        var int4 = 36318 as graphic;
    };
    IF_SETGRAPHIC(int4, comp(1395, 6));
    IF_SETGRAPHIC(int4, comp(1395, 10));
    switch (int3) {
        case 5: {
            IF_SETCOLOUR(0, comp(1395, 25));
            IF_SETGRAPHIC(36255 as graphic, comp(1395, 21));
            IF_SETGRAPHIC(36256 as graphic, comp(1395, 23));
            IF_SETGRAPHIC(36257 as graphic, comp(1395, 24));
            break;
        }
        case 4: {
            IF_SETGRAPHIC(36258 as graphic, comp(1395, 21));
            IF_SETGRAPHIC(36259 as graphic, comp(1395, 23));
            IF_SETGRAPHIC(36260 as graphic, comp(1395, 24));
            break;
        }
        default: {
            IF_SETGRAPHIC(36261 as graphic, comp(1395, 21));
            IF_SETGRAPHIC(36262 as graphic, comp(1395, 23));
            IF_SETGRAPHIC(36263 as graphic, comp(1395, 24));
            break;
        }
    };
    var int9 = script15891(string1, IF_GETWIDTH(comp(1395, 15)), IF_GETFONTMETRICS(comp(1395, 15)), 0);
    var int10 = ((int7 + int9) + int8);
    if ((int10 <= 200)) {
        IF_SETPOSITION(0, 0, 1, 0, comp(1395, 0));
        IF_SETSIZE(300, int10, 0, 0, comp(1395, 0));
    } else {
        IF_SETPOSITION(0, (0 - int6), 1, 0, comp(1395, 0));
        IF_SETSIZE(300, (MIN(int10, 200) + int6), 0, 0, comp(1395, 0));
    };
    IF_SETSIZE(0, int8, 1, 1, comp(1395, 15));
    IF_SETTEXT(string0, comp(1395, 25));
    IF_SETTEXT(string1, comp(1395, 15));
    IF_SETTEXT(string2, comp(1395, 18));
    IF_SETTEXT(string3, comp(1395, 19));
    IF_SETONTIMER(callback(script20182, CLIENTCLOCK()), comp(1395, 0));
    return;
}