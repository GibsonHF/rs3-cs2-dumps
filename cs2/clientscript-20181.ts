//
function script20181(int0: number, int1: number, int2: number, int3: number, string0: string, string1: string, string2: string, string3: string): void {
    var int4 = script20117(varplayer_12314);
    if ((int4 == -1)) {
        IF_SETHIDE(true, comp(1395, 0));
        return;
    } else if (((script13749() == 1) && (IF_GETHIDE(comp(276, 27)) == false))) {
        IF_SETHIDE(true, comp(1395, 0));
        return;
    };
    var int5 = 33;
    var int6 = 110;
    var int7 = 44;
    if ((varbitplayer_22875 != 0)) {
        IF_SETHIDE(true, comp(1395, 4));
        IF_SETHIDE(false, comp(1395, 9));
    } else {
        IF_SETHIDE(false, comp(1395, 4));
        IF_SETHIDE(true, comp(1395, 9));
    };
    IF_SETHIDE(false, comp(1395, 0));
    if ((int0 != -1 as graphic)) {
        IF_SETGRAPHIC(int0, comp(1395, 25));
        IF_SETGRAPHIC(int1, comp(1395, 24));
        IF_SETOBJECT(-1 as obj, 0, comp(1395, 26));
        if ((int1 != -1 as graphic)) {
            IF_SETPOSITION(0, 0, 0, 0, comp(1395, 25));
            IF_SETPOSITION(0, 0, 2, 0, comp(1395, 24));
        } else {
            IF_SETPOSITION(0, 0, 1, 0, comp(1395, 25));
        };
    } else {
        IF_SETGRAPHIC(-1 as graphic, comp(1395, 25));
        IF_SETGRAPHIC(-1 as graphic, comp(1395, 24));
        IF_SETOBJECT_HIGHRES(int2, 91422746);
        if ((int2 == -1 as obj)) {
            int7 = 14;
        } else {
            int7 = 50;
        };
    };
    switch (int3) {
        case 5: {
            IF_SETCOLOUR(0, comp(1395, 22));
            IF_SETGRAPHIC(35186 as graphic, comp(1395, 19));
            IF_SETGRAPHIC(35187 as graphic, comp(1395, 20));
            IF_SETGRAPHIC(35188 as graphic, comp(1395, 21));
            break;
        }
        case 4: {
            IF_SETGRAPHIC(35192 as graphic, comp(1395, 19));
            IF_SETGRAPHIC(35193 as graphic, comp(1395, 20));
            IF_SETGRAPHIC(35194 as graphic, comp(1395, 21));
            break;
        }
        default: {
            IF_SETGRAPHIC(35189 as graphic, comp(1395, 19));
            IF_SETGRAPHIC(35190 as graphic, comp(1395, 20));
            IF_SETGRAPHIC(35191 as graphic, comp(1395, 21));
            break;
        }
    };
    var int8 = script15891(string1, IF_GETWIDTH(comp(1395, 13)), IF_GETFONTMETRICS(comp(1395, 13)), 0);
    var int9 = ((int6 + int8) + int7);
    if ((int9 <= 200)) {
        IF_SETPOSITION(0, 0, 1, 0, comp(1395, 0));
        IF_SETSIZE(300, int9, 0, 0, comp(1395, 0));
    } else {
        IF_SETPOSITION(0, (0 - int5), 1, 0, comp(1395, 0));
        IF_SETSIZE(300, (MIN(int9, 200) + int5), 0, 0, comp(1395, 0));
    };
    IF_SETSIZE(0, int7, 1, 1, comp(1395, 13));
    IF_SETTEXT(string0, comp(1395, 22));
    IF_SETTEXT(string1, comp(1395, 13));
    IF_SETTEXT(string2, comp(1395, 16));
    IF_SETTEXT(string3, comp(1395, 17));
    IF_SETONTIMER(callback(script20182, CLIENTCLOCK()), comp(1395, 0));
    return;
}