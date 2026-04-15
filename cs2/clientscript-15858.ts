//
function script15858(int0: dbrow): void {
    var int1 = dbrow_getfield(int0, 557056, 0);
    var int2 = dbrow_getfield(int0, 557088, 0);
    if (((int1 == -1) || (int2 == -1))) {
        IF_SETHIDE(true, comp(857, 20));
        return;
    };
    var int3 = script10405(int1);
    var int4 = script10405(int2);
    if (((int3 == -1 as struct) || (int4 == -1 as struct))) {
        IF_SETHIDE(true, comp(857, 20));
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
                script425(comp(1110, 0), true, false, true);
                break;
            }
            case 4332: {
                script425(comp(1110, 0), false, true, true);
                break;
            }
        };
        IF_SETHIDE(false, struct_getparam(int4, 3503));
    };
    return;
}