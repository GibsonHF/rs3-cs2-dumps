//[clientscript,friendschatsetup_onfriendtransmit]
function script1893(): void {
    CC_DELETEALL(comp(1108, 6));
    CC_DELETEALL(comp(1108, 7));
    CC_DELETEALL(comp(1108, 5));
    CC_DELETEALL(comp(1108, 3));
    var int0 = FRIEND_COUNT();
    if ((int0 == -2)) {
        script11981("Connecting to Friend Server - Please wait...");
        return;
    };
    if ((int0 == -1)) {
        script11981("Loading Friends List - Please wait...");
        return;
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = IF_GETWIDTH(comp(1108, 6));
    define_array((int0 + 1));
    define_array[65536]((int0 + 1));
    while ((int2 < int0)) {
        FRIEND_GETRANK(int2);
        int1 = stack();
        CC_CREATE(72613893, 5, int2);
        CC_SETSIZE(14, 14, 0, 0);
        CC_CREATE(72613894, 4, int2);
        CC_SETSIZE(0, 14, 1, 0);
        CC_CREATE(72613895, 4, int2);
        CC_SETSIZE(0, 14, 1, 0);
        CC_SETONTIMER(callback(script11952, int2, int1));
        pop_array(int2, int2);
        pop_array[1](int2, int1);
        int2 = (int2 + 1);
    };
    pop_array(int0, -1);
    pop_array[1](int0, -1);
    if ((int0 > 1)) {
        ARRAY_SORT(int0, 1, 0);
        IF_SETPARAM_INT(5436, push_array(0), comp(1108, 2));
        IF_SETPARAM_INT(5437, push_array((int0 - 1)), comp(1108, 2));
        int2 = 0;
        while ((int2 < int0)) {
            if ((CC_FIND(comp(1108, 6), push_array(int2)) == 1)) {
                cc_setparam(5436, push_array((int2 + 1)));
                if ((int2 > 0)) {
                    cc_setparam(5437, push_array((int2 - 1)));
                };
            };
            int2 = (int2 + 1);
        };
        script11953(0, 0, (int0 - 1));
        IF_SETPARAM_INT(5434, push_array(0), comp(1108, 2));
        IF_SETPARAM_INT(5435, push_array((int0 - 1)), comp(1108, 2));
        IF_SETPARAM_INT(5433, -2, comp(1108, 2));
        int2 = 0;
        while ((int2 < int0)) {
            if ((CC_FIND(comp(1108, 6), push_array(int2)) == 1)) {
                cc_setparam(5434, push_array((int2 + 1)));
                if ((int2 > 0)) {
                    cc_setparam(5435, push_array((int2 - 1)));
                };
            };
            int2 = (int2 + 1);
        };
    };
    IF_SETONTIMER(callback(script11955), comp(1108, 2));
    return;
}