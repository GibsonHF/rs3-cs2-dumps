//
function script10181(int0: int, int1: int): void {
    var int2 = 24;
    switch (int0) {
        case 0: {
            varclient_4481 = comp(735, 37);
            break;
        }
        case 1: {
            varclient_4481 = comp(735, 37);
            break;
        }
        case 2: {
            varclient_4481 = comp(735, 36);
            break;
        }
        case 3: {
            varclient_4481 = comp(735, 36);
            break;
        }
        case 4: {
            varclient_4481 = comp(735, 38);
            break;
        }
        case 5: {
            varclient_4481 = comp(735, 38);
            break;
        }
        case 6: {
            varclient_4481 = comp(735, 35);
            break;
        }
        case 7: {
            varclient_4481 = comp(735, 35);
            break;
        }
        case 8: {
            varclient_4481 = comp(735, 33);
            break;
        }
        case 9: {
            varclient_4481 = comp(735, 33);
            break;
        }
        default: {
            varclient_4481 = comp(735, 37);
            break;
        }
    };
    define_array(IF_GETNEXTSUBID(varclient_4481));
    varclient_4482 = int1;
    define_array[65545](10);
    pop_array[1](0, 48169012);
    pop_array[1](1, 48169007);
    pop_array[1](2, 48169017);
    pop_array[1](3, 48169022);
    pop_array[1](4, 48169027);
    pop_array[1](5, 48169032);
    pop_array[1](6, 48169037);
    pop_array[1](7, 48169042);
    pop_array[1](8, 48169047);
    pop_array[1](9, 48169052);
    define_array[131081](10);
    pop_array[2](0, 48169011);
    pop_array[2](1, 48169006);
    pop_array[2](2, 48169016);
    pop_array[2](3, 48169021);
    pop_array[2](4, 48169026);
    pop_array[2](5, 48169031);
    pop_array[2](6, 48169036);
    pop_array[2](7, 48169041);
    pop_array[2](8, 48169046);
    pop_array[2](9, 48169051);
    define_array[196617](10);
    pop_array[3](0, 48168965);
    pop_array[3](1, 48168966);
    pop_array[3](2, 48168967);
    pop_array[3](3, 48168968);
    pop_array[3](4, 48168969);
    pop_array[3](5, 48168970);
    pop_array[3](6, 48168971);
    pop_array[3](7, 48168972);
    pop_array[3](8, 48168973);
    pop_array[3](9, 48168974);
    var int3 = 0;
    while ((int3 < 10)) {
        IF_SETHIDE(true, push_array[2](int3));
        int3 = (int3 + 1);
    };
    int3 = 0;
    var int4 = 0;
    var int5 = (IF_GETNEXTSUBID(varclient_4481) - 1);
    while ((int3 <= int5)) {
        if (((CC_FIND(varclient_4481, int3) == 1) && (STRING_LENGTH(CC_GETTEXT()) > 0))) {
            pop_array(int4, int3);
            int4 = (int4 + 1);
        };
        int3 = (int3 + 1);
    };
    if ((int4 > 1)) {
        if ((varclient_4482 == 1)) {
            script4424(0, varclient_4481, 0, (int4 - 1));
        } else {
            script4425(0, varclient_4481, 0, (int4 - 1));
        };
    };
    int3 = 0;
    while ((int3 < int4)) {
        if ((CC_FIND(comp(735, 37), push_array(int3)) == 1)) {
            CC_SETPOSITION(0, (int2 * int3), 0, 0);
        };
        if ((CC_FIND(comp(735, 36), push_array(int3)) == 1)) {
            CC_SETPOSITION(0, (int2 * int3), 0, 0);
        };
        if ((CC_FIND(comp(735, 38), push_array(int3)) == 1)) {
            CC_SETPOSITION(0, (int2 * int3), 0, 0);
        };
        if ((CC_FIND(comp(735, 34), push_array(int3)) == 1)) {
            CC_SETPOSITION(0, ((int2 * int3) + 5), 1, 0);
        };
        if ((CC_FIND(comp(735, 35), push_array(int3)) == 1)) {
            CC_SETPOSITION(0, ((int2 * int3) + 5), 1, 0);
        };
        if ((CC_FIND(comp(735, 32), push_array(int3)) == 1)) {
            CC_SETPOSITION(0, ((int2 * int3) + 5), 1, 0);
        };
        if ((CC_FIND(comp(735, 33), push_array(int3)) == 1)) {
            CC_SETPOSITION(0, ((int2 * int3) + 5), 1, 0);
        };
        if ((CC_FIND(comp(735, 39), push_array(int3)) == 1)) {
            CC_SETPOSITION(0, (int2 * int3), 0, 0);
        };
        int3 = (int3 + 1);
    };
    IF_SETHIDE(true, push_array[3](int0));
    if ((MODULO(int0, 2) == 0)) {
        IF_SETHIDE(false, push_array[3]((int0 + 1)));
        IF_SETHIDE(false, push_array[2]((int0 + 1)));
    } else {
        IF_SETHIDE(false, push_array[3]((int0 - 1)));
        IF_SETHIDE(false, push_array[2]((int0 - 1)));
    };
    return;
}