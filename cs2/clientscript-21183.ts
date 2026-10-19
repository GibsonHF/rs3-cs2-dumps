//
function script21183(): void {
    stack(-1);
    unk11541();
    if (BRANCH_EQUALS(1)) {
        IF_SETHIDE(true, comp(1586, 29));
        IF_SETHIDE(false, comp(1586, 5));  // plugin_hub_parent_manage:sort
        stack(int0);
        stack(int1);
        stack(int2);
        stack("The Plugin Hub is currently disabled. Please try again later.");
        script21189();
        return;
    };
    stack(103940125);
    script21162();
    if (BRANCH_EQUALS(0)) {
        stack(21182);
        stack(int0);
        stack(int1);
        stack(int2);
        stack(int3);
        IF_SETONTIMER("iiii", 103940097);
        return;
    };
    if (((varclient_8502 + 50) > CLIENTCLOCK())) {
        stack(21182);
        stack(int0);
        stack(int1);
        stack(int2);
        stack(int3);
        IF_SETONTIMER("iiii", 103940097);
        IF_SETHIDE(false, int1);
        return;
    };
    IF_SETONTIMER(callback(), comp(1586, 1));  // plugin_hub_parent_manage:rebuild_listener
    if ((varclient_8501 == -1)) {
        varclient_8501 = 0;
    };
    var string0 = enum_getvalue(0, 36, 13833, varclient_8499);
    var string1 = "";
    unk12245();
    switch (int3) {
        case 2: {
            stack(3);
            unk12149();
            break;
        }
        case 1: {
            stack(2);
            unk12149();
            break;
        }
        default: {
            stack(1);
            unk12149();
            break;
        }
    };
    stack(varclient_8501);
    stack(50);
    unk12093();
    stack(2);
    unk11516();
    if ((STRING_LENGTH(varclient_8500) >= 2)) {
        string1 = URLENCODE(`*${varclient_8500}*`);
        stack(0);
        stack(0);
        stack(string1);
        unk12222();
    };
    unk11984();
    if (BRANCH_EQUALS(1)) {
        varclient_8502 = CLIENTCLOCK();
        stack(21184);
        stack(int0);
        stack(int1);
        stack(int2);
        stack(-2147483647);
        stack(-2147483646);
        stack("iiiii");
        stack(103940098);
        unk11872();
        stack(21185);
        stack(int0);
        stack(int1);
        stack(int2);
        IF_SETONTIMER("iii", 103940098);
        IF_SETHIDE(false, int1);
        return;
    };
    IF_SETHIDE(false, comp(1586, 5));  // plugin_hub_parent_manage:sort
    stack(int0);
    stack(int1);
    stack(int2);
    stack("Plugin details can not be loaded at this time (error type: 1). Please try again later.");
    script21189();
    return;
}