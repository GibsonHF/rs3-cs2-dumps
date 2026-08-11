//
function script15858(int0: number): void {
    var int1 = dbrow_getfield(int0, 557056, 0);
    var int2 = dbrow_getfield(int0, 557088, 0);
    if (((int1 == -1) || (int2 == -1))) {
        IF_SETHIDE(true, comp(857, 20));  // mobile_chat_panel:tabs_layer
        return;
    };
    var int3 = script10405(int1);
    var int4 = script10405(int2);
    if (((int3 == -1) || (int4 == -1))) {
        IF_SETHIDE(true, comp(857, 20));  // mobile_chat_panel:tabs_layer
        return;
    };
    if ((varclient_6910 == 0)) {
        IF_SETHIDE(true, struct_getparam(int4, 3503));
        if ((script383(int1) != 31)) {
            IF_SETHIDE(false, struct_getparam(script10405(18), 3503));
        } else {
            IF_SETHIDE(false, struct_getparam(int3, 3503));
        };
    } else {
        if ((script383(int1) != 31)) {
            IF_SETHIDE(true, struct_getparam(script10405(18), 3503));
        } else {
            IF_SETHIDE(true, struct_getparam(int3, 3503));
        };
        switch (int0) {
            case 4333: {
                script425(72744960, 1, 0, 1);
                break;
            }
            case 4332: {
                script425(72744960, 0, 1, 1);
                break;
            }
        };
        IF_SETHIDE(false, struct_getparam(int4, 3503));
    };
    return;
}