//
function script21083(): void {
    var int2 = dbrow_getfield(int0, 1339408, 0);
    var int3 = -1 as var_reference;
    var string0 = "";
    if ((int2 > 0)) {
        int3 = dbrow_getfield(int0, 1339424, 0);
        string0 = `${inttostring(PUSH_CONSTANT_INT[16]("<col=", script10495(2)))}${inttostring(PUSH_CONSTANT_INT[16](">Resets remaining</col>: <col=", script10495(21)))}>${inttostring(WORLDMAP_GETDISPLAYCOORD(int3), 10)}/${inttostring(int2, 10)}</col>`;
        stack(0);
        stack(int1);
        var int1 = (int1 + 1);
        script7858(22, 0, 2, 0, 75, 20, 0, 0, 4476, "Reset");
        CC_SETOP(1, "Reset");
        if ((WORLDMAP_GETDISPLAYCOORD(int3) <= 0)) {
            CC_SETENABLED(false);
        } else {
            stack(int0);
            script20939();
            if (BRANCH_EQUALS(0)) {
                CC_SETENABLED(false);
            };
        };
        stack(0);
        stack(int1);
        int1 = (int1 + 1);
        script10485((97 + 4), 0, 2, 0, STRINGWIDTH(string0, 26 as fontmetrics), 20, 0, 0, 2100, string0);
    };
    stack(int1);
    return;
}