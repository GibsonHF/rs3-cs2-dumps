//[clientscript,dream_chest_init]
function script61(): void {
    var int0 = 0;
    var int1 = -1 as obj;
    while ((int0 < 5)) {
        CC_CREATE(comp(260, 15), 5, int0);
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
        int1 = INV_GETOBJ(515 as inv, int0);
        if ((int1 != -1 as obj)) {
            CC_SETOBJECT(int1, INV_GETNUM(515 as inv, int0));
            CC_SETOPBASE(OC_NAME(int1));
            CC_SETOP(1, "Deposit");
            CC_SETOUTLINE(1);
            CC_SETONMOUSEREPEAT(callback(script9564, int1, -2147483645, -2147483643));
            if ((int0 == 0)) {
                stack(-1);
                stack(17039374);
                IF_SETGRAPHIC();
            };
            if ((int0 == 1)) {
                stack(-1);
                stack(17039370);
                IF_SETGRAPHIC();
            };
            if ((int0 == 2)) {
                stack(-1);
                stack(17039371);
                IF_SETGRAPHIC();
            };
            if ((int0 == 3)) {
                stack(-1);
                stack(17039372);
                IF_SETGRAPHIC();
            };
            if ((int0 == 4)) {
                stack(-1);
                stack(17039373);
                IF_SETGRAPHIC();
            };
        } else {
            if ((int0 == 0)) {
                stack(24434);
                stack(17039374);
                IF_SETGRAPHIC();
            };
            if ((int0 == 1)) {
                stack(24431);
                stack(17039370);
                IF_SETGRAPHIC();
            };
            if ((int0 == 2)) {
                stack(24436);
                stack(17039371);
                IF_SETGRAPHIC();
            };
            if ((int0 == 3)) {
                stack(24438);
                stack(17039372);
                IF_SETGRAPHIC();
            };
            if ((int0 == 4)) {
                stack(24440);
                stack(17039373);
                IF_SETGRAPHIC();
            };
        };
        int0 = (int0 + 1);
    };
    return;
}