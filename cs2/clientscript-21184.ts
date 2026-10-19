//
function script21184(): void {
    IF_SETONTIMER(callback(), comp(1586, 2));  // plugin_hub_parent_manage:main
    IF_SETHIDE(false, comp(1586, 5));  // plugin_hub_parent_manage:sort
    switch (int3) {
        case 0: {
            IF_SETHIDE(true, int1);
            break;
        }
        case 1: {
            stack(int0);
            stack(int1);
            stack(int2);
            stack("Plugin details can not be loaded at this time (error type: 2). Please try again later.");
            script21189();
            return;
        }
        default: {
            stack(int0);
            stack(int1);
            stack(int2);
            stack(`Plugin details can not be loaded at this time (error type: 3.${inttostring(int4, 10)}). Please try again later.`);
            script21189();
            return;
        }
    };
    var int5 = 0;
    var int6 = 0;
    unk12223();
    [int6, int5] = [];
    stack(int6);
    stack(int5);
    script21186();
    if (((int6 <= 0) || (int5 <= 0))) {
        stack(int0);
        stack(int1);
        stack(int2);
        stack("No results found.");
        script21189();
        return;
    };
    CC_DELETEALL(int0);
    var int7 = 0;
    var int8 = 0;
    var int9 = -1;
    while ((int7 < int5)) {
        stack(int7);
        unk12174();
        int9 = [];
        stack(int9);
        unk11541();
        if (BRANCH_EQUALS(0)) {
            script14391(int0, int7, 0, int8, 0, 0, 0, 72, 1, 0);
            cc_setparam(9501, int9);
            stack(int0);
            stack(int7);
            stack(int9);
            script21190();
            int8 = (int8 + (72 + 4));
        };
        int7 = (int7 + 1);
    };
    script19620(int2, int0, int8, -1, -1, 0, 0, 0);
    return;
}