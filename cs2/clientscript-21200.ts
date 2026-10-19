//
function script21200(): void {
    var int1 = 104136722;
    unk11730();
    var int2 = [];
    var int3 = 0;
    var int4 = -1;
    var int5 = -1;
    var int6 = (0 - 4);
    var int7 = (2500 * 10);
    if ((int2 <= 1)) {
        IF_SETTEXT("Dependencies", comp(1589, 17));
        script2995(104136722, int3, 0, 0, 0, 0, 0, 40, 1, 0, 13569, "The selected plugin has no dependencies.");
    } else {
        IF_SETTEXT("Installing includes all dependencies:", comp(1589, 17));
        while ((int3 < int2)) {
            stack(int3);
            unk11230();
            [int4, int5] = [];
            if ((int4 != int0)) {
                int6 = (int6 + 4);
                script14391(int1, int3, 0, int6, 0, 0, 0, 72, 1, 0);
                stack(int1);
                stack(0);
                stack(int4);
                script21190();
                if ((CC_FIND(int1, int7) == 1)) {
                    CC_DELETE();
                };
                int6 = (int6 + 72);
            };
            int3 = (int3 + 1);
        };
    };
    script19620(104136723, 104136722, int6, -1, -1, 0, 0, 24);
    return;
}