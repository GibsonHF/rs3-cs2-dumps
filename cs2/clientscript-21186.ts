//
function script21186(): void {
    var int2 = ((int0 / 50) + MIN(1, MODULO(int0, 50)));
    CC_DELETEALL(comp(1586, 28));
    if ((int2 <= 1)) {
        if ((int0 > 0)) {
            script20480(103940124, 0, 0, 0, 1, 1, 0, 0, 1, 1, 2100, `Showing ${inttostring(int0, 10)} matching ${script4583(int0, "plugin", "plugins")}.`, -1, 1, 1);
        };
        return;
    };
    var int3 = 0;
    if ((int2 <= 5)) {
        script15945(103940124, 200, 0, 0, 0, 1, 1, (int2 * (24 + 4)), 24, 0, 0, 0, 4);
        while ((int3 < int2)) {
            stack(int3);
            stack(int3);
            stack(int2);
            script21187();
            int3 = (int3 + 1);
        };
        return;
    };
    var int4 = (96 + (4 * 2));
    var int5 = 0;
    var int6 = (int2 - 1);
    script15945(103940124, 200, 0, 0, 0, 1, 1, 300, 24, 0, 0, 0, 4);
    stack(int5);
    int5 = (int5 + 1);
    stack(-1);
    stack(int2);
    script21187();
    stack(int5);
    int5 = (int5 + 1);
    stack(0);
    stack(int2);
    script21187();
    if ((varclient_8501 >= 3)) {
        stack(0);
        stack(int5);
        int5 = (int5 + 1);
        script10485(0, 0, 1, 1, 12, 0, 0, 1, 2100, "...");
        int4 = (int4 + 16);
    };
    if ((varclient_8501 >= 2)) {
        stack(int5);
        int5 = (int5 + 1);
        stack((varclient_8501 - 1));
        stack(int2);
        script21187();
        int4 = (int4 + 28);
    };
    if (((varclient_8501 > 0) && (varclient_8501 < int6))) {
        stack(int5);
        int5 = (int5 + 1);
        stack(varclient_8501);
        stack(int2);
        script21187();
        int4 = (int4 + 28);
    };
    if (((varclient_8501 + 1) < int6)) {
        stack(int5);
        int5 = (int5 + 1);
        stack((varclient_8501 + 1));
        stack(int2);
        script21187();
        int4 = (int4 + 28);
    };
    if ((varclient_8501 < (int6 - 2))) {
        stack(0);
        stack(int5);
        int5 = (int5 + 1);
        script10485(0, 0, 1, 1, 12, 0, 0, 1, 2100, "...");
        int4 = (int4 + 16);
    };
    stack(int5);
    int5 = (int5 + 1);
    stack(int6);
    stack(int2);
    script21187();
    stack(int5);
    int5 = (int5 + 1);
    stack(-2);
    stack(int2);
    script21187();
    if ((CC_FINDBYCATEGORY(comp(1586, 28), 200, 0) == 1)) {
        CC_SETSIZE(int4, 24, 0, 0);
    };
    return;
}