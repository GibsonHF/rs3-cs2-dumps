//[clientscript,dream_chest_init]
function script61(): void {
    var int0 = 0;
    var int1 = -1;
    while ((int0 < 5)) {
        CC_CREATE(17039375, 5, int0);
        CC_SETSIZE(36, 32, 0, 0);
        if ((int0 == 0)) {
            CC_SETPOSITION(0, 43, 0, 0);
        };
        if ((int0 == 1)) {
            CC_SETPOSITION(50, 2, 0, 0);
        };
        if ((int0 == 2)) {
            CC_SETPOSITION(50, 43, 0, 0);
        };
        if ((int0 == 3)) {
            CC_SETPOSITION(50, 85, 0, 0);
        };
        if ((int0 == 4)) {
            CC_SETPOSITION(50, 125, 0, 0);
        };
        int1 = INV_GETOBJ(515, int0);
        if ((int1 != -1)) {
            CC_SETOBJECT(int1, INV_GETNUM(515, int0));
            CC_SETOPBASE(OC_NAME(int1));
            CC_SETOP(1, "Deposit");
            CC_SETOUTLINE(1);
            CC_SETONMOUSEREPEAT(callback(script9564, int1, -2147483645, -2147483643));
            if ((int0 == 0)) {
                IF_SETGRAPHIC(-1, 17039374);
            };
            if ((int0 == 1)) {
                IF_SETGRAPHIC(-1, 17039370);
            };
            if ((int0 == 2)) {
                IF_SETGRAPHIC(-1, 17039371);
            };
            if ((int0 == 3)) {
                IF_SETGRAPHIC(-1, 17039372);
            };
            if ((int0 == 4)) {
                IF_SETGRAPHIC(-1, 17039373);
            };
        } else {
            if ((int0 == 0)) {
                IF_SETGRAPHIC(24434, 17039374);
            };
            if ((int0 == 1)) {
                IF_SETGRAPHIC(24431, 17039370);
            };
            if ((int0 == 2)) {
                IF_SETGRAPHIC(24436, 17039371);
            };
            if ((int0 == 3)) {
                IF_SETGRAPHIC(24438, 17039372);
            };
            if ((int0 == 4)) {
                IF_SETGRAPHIC(24440, 17039373);
            };
        };
        int0 = (int0 + 1);
    };
    return;
}