//
function script20181(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, string0: string, string1: string, string2: string, string3: string): void {
    var int4 = script20117(varplayer_12314);
    if (((int4 == -1 as dbrow) || ((script13749() == true) && (IF_GETHIDE(comp(276, 27)) == false)))) {
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
    if ((int0 != -1)) {
        stack(int0);
        stack(91422745);
        IF_SETGRAPHIC();
        stack(int1);
        stack(91422744);
        IF_SETGRAPHIC();
        IF_SETOBJECT(-1, 0, 91422746);
        if ((int1 != -1)) {
            IF_SETPOSITION(0, 0, 0, 0, comp(1395, 25));
            IF_SETPOSITION(0, 0, 2, 0, comp(1395, 24));
        } else {
            IF_SETPOSITION(0, 0, 1, 0, comp(1395, 25));
        };
    } else {
        stack(-1);
        stack(91422745);
        IF_SETGRAPHIC();
        stack(-1);
        stack(91422744);
        IF_SETGRAPHIC();
        IF_SETOBJECT_HIGHRES(int2, 91422746);
        if ((int2 == -1)) {
            int7 = 14;
        } else {
            int7 = 50;
        };
    };
    switch (int3) {
        case 5: {
            IF_SETCOLOUR(0, comp(1395, 22));
            stack(35186);
            stack(91422739);
            IF_SETGRAPHIC();
            stack(35187);
            stack(91422740);
            IF_SETGRAPHIC();
            stack(35188);
            stack(91422741);
            IF_SETGRAPHIC();
            break;
        }
        case 4: {
            stack(35192);
            stack(91422739);
            IF_SETGRAPHIC();
            stack(35193);
            stack(91422740);
            IF_SETGRAPHIC();
            stack(35194);
            stack(91422741);
            IF_SETGRAPHIC();
            break;
        }
        default: {
            stack(35189);
            stack(91422739);
            IF_SETGRAPHIC();
            stack(35190);
            stack(91422740);
            IF_SETGRAPHIC();
            stack(35191);
            stack(91422741);
            IF_SETGRAPHIC();
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