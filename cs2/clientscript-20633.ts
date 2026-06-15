//
function script20633(int0: number): void {
    CC_DELETEALL(comp(1498, 2));
    CC_DELETEALL(comp(1498, 5));
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    if ((STRING_LENGTH(varclient_8377) > 0)) {
        int1 = (int1 + 25);
    };
    var int6 = CC_SETPARAM_STRING(script20644(int0, 1), 1425408, 0, -1, 0);
    if ((int6 > 0)) {
        int5 = int1;
        int1 = (int1 + 20);
        if ((int0 != 0)) {
            int2 = script20635(int1);
            int3 = script20642(int2);
            int1 = script20637(int1, int3, int2);
        } else {
            [int3, int1] = script20639(int1);
        };
        if ((int3 > 0)) {
            script20641("Featured", int5);
        } else {
            int1 = int5;
        };
        int4 = (int4 + int3);
    };
    var int7 = CC_SETPARAM_STRING(script20644(int0, 0), 1425408, 0, -1, 0);
    if ((int7 > 0)) {
        if ((int0 != 0)) {
            int5 = int1;
            int2 = script20635(++int1);
            int3 = script20642(int2);
            int1 = script20637(int1, int3, int2);
            if ((int3 > 0)) {
                script20641(script20651(int0), int5);
            } else {
                int1 = int5;
            };
        } else {
            [int1, int3] = script20640(int1);
        };
        int4 = (int4 + int3);
    };
    if ((STRING_LENGTH(varclient_8377) > 0)) {
        script2995(98172930, IF_GETNEXTSUBID(comp(1498, 2)), 11, 0, 0, 0, 22, 20, 1, 0, 2099, `Displaying ${inttostring(int4, 10)} ${script4583(int4, "result", "results")} for '${varclient_8377}'.`);
    };
    script20634(int1);
    return;
}