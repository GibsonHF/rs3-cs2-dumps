//
function script20633(int0: number): void {
    CC_DELETEALL(comp(1498, 2));  // marketplace_store:items_holder
    CC_DELETEALL(comp(1498, 5));  // marketplace_store:scrollbar_layer
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    if ((STRING_LENGTH(varclient_8377) > 0)) {
        int1 = (int1 + 25);
    };
    if ((int0 == 1)) {
        int1 = (int1 + script20862(int1));
    };
    var int6 = 0;
    var int7 = 0;
    var int8 = CC_SETPARAM_STRING(script20644(int0, 1), 1425408, 0, -1, 0);
    if ((int8 > 0)) {
        int5 = int1;
        int1 = (int1 + 20);
        if ((int0 != 0)) {
            if ((int0 != 1)) {
                int2 = script20635(int1);
                int6 = script20642(int2, 0);
                int1 = script20637(int1, int6, int2);
            } else {
                [int6, int1] = script20860(int0, int1);
            };
        } else {
            [int6, int1] = script20860(int0, int1);
        };
        if ((int6 > 0)) {
            script20641("Featured", int5);
        } else {
            int1 = int5;
        };
        int4 = (int4 + int6);
    };
    var int9 = CC_SETPARAM_STRING(script20644(int0, 0), 1425408, 0, -1, 0);
    if ((int9 > 0)) {
        if ((int0 != 0)) {
            if ((int0 != 1)) {
                int5 = int1;
                int1 = (int1 + 20);
                int2 = script20635(int1);
                int7 = script20642(int2, 0);
                int1 = script20637(int1, int7, int2);
                if ((int7 > 0)) {
                    script20641(script20651(int0), int5);
                } else if (((int6 + int7) == 0)) {
                    script20641(script20651(int0), int5);
                    script2995(98172930, IF_GETNEXTSUBID(comp(1498, 2)), 11, int1, 0, 0, 22, 20, 1, 0, 2099, "No items to display.");  // marketplace_store:items_holder
                } else {
                    int1 = int5;
                };
            } else {
                [int1, int7] = script20861(int0, int1);
            };
        } else {
            [int1, int7] = script20861(int0, int1);
        };
        int4 = (int4 + int7);
    };
    if ((STRING_LENGTH(varclient_8377) > 0)) {
        script2995(98172930, IF_GETNEXTSUBID(comp(1498, 2)), 11, 0, 0, 0, 22, 20, 1, 0, 2099, `Displaying ${inttostring(int4, 10)} ${script4583(int4, "result", "results")} for '${varclient_8377}'.`);  // marketplace_store:items_holder
    };
    script20634(int1);
    return;
}