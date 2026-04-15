//
function script13946(): void {
    CC_DELETEALL(comp(517, 265));
    CC_DELETEALL(comp(517, 266));
    CC_DELETEALL(comp(517, 267));
    CC_DELETEALL(comp(517, 271));
    CC_DELETEALL(comp(517, 268));
    CC_DELETEALL(comp(517, 269));
    CC_DELETEALL(comp(517, 270));
    CC_CREATE(comp(517, 265), 4, 0);
    CC_CREATE(comp(517, 267), 4, 0);
    CC_CREATE(comp(517, 271), 4, 0);
    CC_CREATE(comp(517, 268), 4, 0);
    CC_CREATE(comp(517, 269), 4, 0);
    CC_CREATE(comp(517, 270), 4, 0);
    IF_SETHIDE(true, comp(517, 274));
    var int0 = 1;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "Displays whether this preset will load: Backpack | Worn | Beast of Burden";
    var int5 = -1;
    while ((int0 <= 19)) {
        switch (script6963(int0)) {
            case 1: {
                string0 = "Locked";
                string1 = "This preset is only available to members.";
                int5 = 20647;
                break;
            }
            case 2: {
                string0 = "Locked";
                string1 = "This preset will be unlocked on members worlds.";
                int5 = 20647;
                break;
            }
            case 3: {
                string0 = "Locked";
                string1 = "This preset is only available after purchase.";
                int5 = 18690;
                break;
            }
            default: {
                string0 = script15897(int0);
                string1 = "";
                int5 = -1;
                break;
            }
        };
        int2 = (1 - script15900(int0));
        int3 = (1 - script15902(int0));
        int4 = script15904(int0);
        script14400(comp(517, 265), 0, 30, 0, int1, 1, int0);
        CC_SETONMOUSEOVER(callback(script14390, 1, -2147483645, -2147483643));
        CC_SETONMOUSELEAVE(callback(script14390, 0, -2147483645, -2147483643));
        CC_SETDRAGDEADTIME(5);
        CC_SETDRAGDEADZONE(5);
        if ((int0 != 19)) {
            script6200(comp(517, 266), 24, 30, 0, int1, 29 as fontmetrics, inttostring(int0, 10), 0);
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETDRAGGABLE(comp(517, 264), -1);
        } else {
            script4512(comp(517, 266), 24, 24, 3, (int1 + 3), script15934(18787 as graphic, 15083 as graphic));
        };
        script14402(comp(517, 267), int0, 0, 30, 0, int1);
        if ((int5 == -1)) {
            CC_SETOP(2, "Load");
            CC_SETOP(3, "Reset");
        };
        CC_SETONOP(callback(script13938, -2147483643));
        CC_CREATE(33882383, 5, int0);
        CC_SETSIZE(30, 30, 0, 0);
        CC_SETPOSITION(0, int1, 2, 0);
        CC_SETGRAPHIC(int5);
        script2995(33882378, IF_GETNEXTSUBID(33882378), 15, int1, 0, 0, 80, 30, 1, 0, 2100, string0);
        CC_SETTEXTALIGN(1, 1, 0);
        script6888(2);
        if ((int5 == -1)) {
            if ((int0 != 19)) {
                script14397(comp(517, 268), 24, 24, 0, (int1 + 3), 0, 0, script14389(93, int2));
                CC_SETOP(1, "Toggle");
                script14397(comp(517, 269), 24, 24, 0, (int1 + 3), 0, 0, script14389(94, int3));
                CC_SETOP(1, "Toggle");
                script14397(comp(517, 270), 24, 24, 0, (int1 + 3), 0, 0, script14389(530, int4));
                CC_SETOP(1, "Toggle");
            } else {
                CC_CREATE(comp(517, 268), 4, int0);
                CC_CREATE(comp(517, 269), 4, int0);
                script14397(comp(517, 270), 24, 24, 0, (int1 + 3), 0, 0, script14389(530, 1));
                CC_SETOP(1, "Toggle");
            };
            CC_CREATE(comp(517, 266), 4, IF_GETNEXTSUBID(comp(517, 266)));
            CC_SETSIZE(50, 30, 0, 0);
            CC_SETPOSITION(0, int1, 2, 0);
            CC_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643));
        } else {
            CC_CREATE(comp(517, 268), 4, int0);
            CC_CREATE(comp(517, 269), 4, int0);
            CC_CREATE(comp(517, 270), 4, int0);
            script15929(comp(517, 266), IF_GETNEXTSUBID(comp(517, 266)), 0, int1, 0, 0, 0, 30, 1, 0, int0);
        };
        int1 = (int1 + (30 + 2));
        int0 = (int0 + 1);
    };
    string1 = "If your preset has an augmented item this will only load the item with matching perks.<br><br>If the augmented item isn't loading, re-save your preset";
    script10416(comp(517, 305), comp(517, 306), "Exact Matching", string1, string1, varbitplayer_45228);
    return;
}