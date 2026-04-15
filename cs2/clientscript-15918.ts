//
function script15918(): void {
    CC_DELETEALL(comp(1867, 29));
    CC_DELETEALL(comp(1867, 30));
    CC_DELETEALL(comp(1867, 31));
    IF_SETHIDE(true, comp(1867, 60));
    var int0 = 0;
    var int1 = 0;
    var string0 = "";
    var int2 = 0;
    while ((int0 <= (19 - 1))) {
        if ((int0 == 0)) {
            string0 = "Current";
            int2 = 0;
        } else {
            switch (script6963(int0)) {
                case 1:
                case 2: {
                    string0 = "Locked";
                    int2 = 1;
                    break;
                }
                default: {
                    string0 = script15897(int0);
                    break;
                }
            };
        };
        CC_CREATE(comp(1867, 29), 4, 0);
        script14400(comp(1867, 29), 0, 24, 0, int1, 1, int0);
        CC_SETONMOUSEOVER(callback(script15920, 1, -2147483645, -2147483643, 122355772));
        CC_SETONMOUSELEAVE(callback(script15920, 0, -2147483645, -2147483643, 122355772));
        script14402(122355743, int0, 0, 24, 0, int1);
        CC_SETONOP(callback(script15921, -2147483645, -2147483643));
        script2995(122355742, IF_GETNEXTSUBID(122355742), 0, int1, 1, 0, 0, 24, 1, 0, 2100, string0);
        CC_SETTEXTALIGN(1, 1, 0);
        script6888(2);
        if ((int2 == 1)) {
            script15929(comp(1867, 30), IF_GETNEXTSUBID(comp(1867, 30)), 0, int1, 0, 0, 0, 24, 1, 0, int0);
        };
        int1 = (int1 + (24 + 3));
        int0 = (int0 + 1);
    };
    script15919();
    return;
}