//
function script6284(int0: unknown_int): void {
    var int1 = -1 as graphic;
    var int2 = -1 as graphic;
    var string0 = "";
    if ((int0 == -1)) {
        int1 = -1 as graphic;
        string0 = "";
    } else if ((int0 == 0)) {
        int1 = 11233 as graphic;
        string0 = "6";
    } else if ((int0 == 1)) {
        int1 = 11234 as graphic;
        string0 = "5";
    } else if ((int0 == 2)) {
        int1 = 11235 as graphic;
        string0 = "4";
    } else if ((int0 == 3)) {
        int1 = 11236 as graphic;
        string0 = "3";
    } else if ((int0 == 4)) {
        int1 = 11237 as graphic;
        string0 = "2";
    } else if ((int0 == 5)) {
        int1 = 11238 as graphic;
        string0 = "1";
    } else if ((int0 == 6)) {
        int1 = 11239 as graphic;
        string0 = "";
    } else if ((int0 == 7)) {
        int1 = 11240 as graphic;
        string0 = "";
    };
    if ((CC_FIND(comp(1296, 14), 0) == 1)) {
        if ((int1 != -1 as graphic)) {
            int2 = CC_GETGRAPHIC();
            if ((int2 == int1)) {
                return;
            };
            IF_SETHIDE(false, comp(1296, 15));
            if ((int0 != 6)) {
                IF_SETTEXT("<br>Supreme Champions:<br>None", comp(1296, 0));
                IF_SETHIDE(true, comp(1296, 10));
                IF_SETSCROLLSIZE(0, 24, comp(1296, 9));
            };
            IF_SETTEXT(string0, comp(1296, 18));
            CC_SETGRAPHIC(int1);
            CC_CREATE(comp(1296, 14), 5, 1);
            CC_SETGRAPHIC(int2);
            CC_SETSIZE(50, 50, 0, 0);
            CC_SETPOSITION(0, 0, 4, 4);
            IF_SETONTIMER(callback(script6285, 1), comp(1296, 14));
        } else {
            CC_SETGRAPHIC(-1 as graphic);
            IF_SETHIDE(true, comp(1296, 15));
            varclient_1931 = 0;
            IF_SETHIDE(true, comp(1296, 1));
            IF_SET2DANGLE(0, comp(1296, 4));
        };
    } else if ((int1 != -1 as graphic)) {
        IF_SETHIDE(false, comp(1296, 15));
        IF_SETTEXT(string0, comp(1296, 18));
        CC_CREATE(comp(1296, 14), 5, 0);
        CC_SETGRAPHIC(int1);
        CC_SETSIZE(50, 50, 0, 0);
        CC_SETPOSITION(0, 0, 4, 4);
    };
    return;
}