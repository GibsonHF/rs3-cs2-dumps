//
function script8421(int0: component, int1: component, int2: component, int3: component, int4: struct, int5: int, int6: unknown_int, int7: graphic, int8: struct, string0: string): void {
    if ((int5 == -1)) {
        var int5 = script3934(int1);
    };
    var int9 = int1;
    if ((int1 != comp(-1, 65535))) {
        if ((int0 != comp(-1, 65535))) {
            IF_SETONVARTRANSMIT(callback(), int0);
            if ((IF_FIND(int0) == 1)) {
                cc_setparam(3518, -1);
            };
        };
    } else if ((int0 != comp(-1, 65535))) {
        int9 = int0;
    } else {
        return;
    };
    IF_SETONVARTRANSMIT(callback(script1228, int0, int1, int2, int3, string0, int4, int5, int6, int7, int8, 3814, 1), int9);
    var int4 = script9952(int4);
    if ((IF_FIND(int9) == 1)) {
        cc_setparam(3518, int4);
    };
    if ((struct_getparam(int4, 8094) == 1)) {
        script10401(int0, int1, int2, int3, string0, int4, int5, int8);
        return;
    };
    var string1 = "";
    var int10 = 0;
    var int11 = struct_getparam(int4, 3572);
    var int12 = 0;
    if (((int3 != comp(-1, 65535)) && (struct_getparam(int4, 7139) == 0))) {
        int12 = (struct_getparam(int4, 3573) + struct_getparam(int4, 3565));
    };
    if ((int11 < 0)) {
        int10 = (0 - int11);
        int11 = 0;
    };
    if ((int1 != comp(-1, 65535))) {
        CC_DELETEALL(int1);
        if (((strcmp(string0, "") == 0) && (CC_FIND(int1, 14) == 1))) {
            var string0 = CC_GETTEXT();
        };
        if (((int6 == 1) && (IF_GETLAYER(int1) != comp(-1, 65535)))) {
            IF_SETNOCLICKTHROUGH(1, IF_GETLAYER(int1));
        };
        IF_SETPOSITION(0, 0, 0, 0, int1);
        IF_SETSIZE(16384, 16384, 2, 2, int1);
        CC_CREATE(int1, 5, 0);
        script12591(-1, int8);
        CC_SETGRAPHIC(script8419(int4, 0, 0));
        CC_SETTILING(true);
        script20528(int5, -1 as struct, -1);
        CC_CREATE(int1, 5, 1);
        script12591(-1, int8);
        CC_SETPOSITION(0, int10, 0, 0);
        CC_SETSIZE(struct_getparam(int4, 3552), struct_getparam(int4, 3553), 0, 0);
        CC_SETGRAPHIC(script8419(int4, 1, 0));
        script20528(int5, int8, 0);
        CC_CREATE(int1, 5, 2);
        script12591(-1, int8);
        CC_SETPOSITION(0, int10, 2, 0);
        CC_SETSIZE(struct_getparam(int4, 3554), struct_getparam(int4, 3555), 0, 0);
        CC_SETGRAPHIC(script8419(int4, 2, 0));
        if ((struct_getparam(int4, 3591) == struct_getparam(int4, 3590))) {
            CC_SETHFLIP(true);
        };
        script20528(int5, int8, 2);
        CC_CREATE(int1, 5, 3);
        script12591(-1, int8);
        CC_SETSIZE(struct_getparam(int4, 3557), struct_getparam(int4, 3553), 0, 0);
        CC_SETGRAPHIC(script8419(int4, 3, 0));
        CC_SETTILING(true);
        script20528(int5, -1 as struct, -1);
        CC_CREATE(int1, 5, 4);
        script12591(-1, int8);
        CC_SETGRAPHIC(script8419(int4, 4, 0));
        if ((struct_getparam(int4, 3600) == struct_getparam(int4, 3599))) {
            CC_SETHFLIP(true);
        };
        CC_SETTILING(true);
        script20528(int5, -1 as struct, -1);
        CC_CREATE(int1, 5, 5);
        script12591(-1, int8);
        CC_SETPOSITION(struct_getparam(int4, 3552), int10, 0, 0);
        CC_SETSIZE((struct_getparam(int4, 3554) + struct_getparam(int4, 3552)), struct_getparam(int4, 3548), 1, 0);
        CC_SETGRAPHIC(script8419(int4, 5, 0));
        CC_SETTILING(true);
        script20528(int5, -1 as struct, -1);
        CC_CREATE(int1, 5, 6);
        script12591(-1, int8);
        CC_SETPOSITION(0, ((struct_getparam(int4, 3553) + struct_getparam(int4, 3586)) + int10), 0, 0);
        CC_SETSIZE(struct_getparam(int4, 3550), (((struct_getparam(int4, 3560) + struct_getparam(int4, 3553)) + struct_getparam(int4, 3586)) + int10), 0, 1);
        CC_SETGRAPHIC(struct_getparam(int4, 3596));
        CC_SETTILING(true);
        script20528(int5, int8, 3);
        CC_CREATE(int1, 5, 7);
        script12591(-1, int8);
        CC_SETPOSITION(0, ((struct_getparam(int4, 3555) + struct_getparam(int4, 3586)) + int10), 2, 0);
        CC_SETSIZE(struct_getparam(int4, 3551), (((struct_getparam(int4, 3562) + struct_getparam(int4, 3555)) + struct_getparam(int4, 3586)) + int10), 0, 1);
        CC_SETGRAPHIC(struct_getparam(int4, 3597));
        CC_SETTILING(true);
        if ((struct_getparam(int4, 3597) == struct_getparam(int4, 3596))) {
            CC_SETHFLIP(true);
        };
        script20528(int5, int8, 4);
        CC_CREATE(int1, 5, 8);
        script12591(-1, int8);
        CC_SETPOSITION(0, (struct_getparam(int4, 3547) + int10), 0, 0);
        CC_SETSIZE(struct_getparam(int4, 3587), struct_getparam(int4, 3586), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int4, 3621));
        CC_CREATE(int1, 5, 9);
        script12591(-1, int8);
        CC_SETPOSITION(0, (struct_getparam(int4, 3547) + int10), 1, 0);
        CC_SETSIZE((2 * struct_getparam(int4, 3587)), struct_getparam(int4, 3586), 1, 0);
        CC_SETGRAPHIC(struct_getparam(int4, 3620));
        CC_SETTILING(true);
        CC_CREATE(int1, 5, 10);
        script12591(-1, int8);
        CC_SETPOSITION(0, (struct_getparam(int4, 3547) + int10), 2, 0);
        CC_SETSIZE(struct_getparam(int4, 3587), struct_getparam(int4, 3586), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int4, 3621));
        CC_SETHFLIP(true);
        CC_CREATE(int1, 5, 11);
        script12591(-1, int8);
        CC_SETPOSITION(0, 0, 0, 2);
        CC_SETSIZE(struct_getparam(int4, 3559), struct_getparam(int4, 3560), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int4, 3592));
        script20528(int5, int8, 5);
        CC_CREATE(int1, 5, 12);
        script12591(-1, int8);
        CC_SETPOSITION(struct_getparam(int4, 3559), 0, 0, 2);
        CC_SETSIZE((struct_getparam(int4, 3561) + struct_getparam(int4, 3559)), struct_getparam(int4, 3549), 1, 0);
        CC_SETGRAPHIC(struct_getparam(int4, 3595));
        CC_SETTILING(true);
        script20528(int5, int8, 6);
        CC_CREATE(int1, 5, 13);
        script12591(-1, int8);
        CC_SETPOSITION(0, 0, 2, 2);
        CC_SETSIZE(struct_getparam(int4, 3561), struct_getparam(int4, 3562), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int4, 3593));
        if ((struct_getparam(int4, 3593) == struct_getparam(int4, 3592))) {
            CC_SETHFLIP(true);
        };
        script20528(int5, int8, 7);
        CC_CREATE(int1, 4, 14);
        script12591(0, int8);
        CC_SETCOLOUR(struct_getparam(int4, 3544));
        CC_SETTEXTFONT(struct_getparam(int4, 3823));
        CC_SETTEXTSHADOW(true);
        CC_SETTEXTALIGN(0, 0, enum_getvalue(25, 0, 8549 as cs2enum, struct_getparam(int4, 3823)));
        CC_SETSIZE(int12, MAX((struct_getparam(int4, 3547) - struct_getparam(int4, 3652)), 20), 1, 0);
        CC_CREATE(int1, 5, 15);
        script12591(0, int8);
        CC_SETPOSITION(struct_getparam(int4, 3571), int11, struct_getparam(int4, 4447), 0);
        CC_SETSIZE(struct_getparam(int4, 3567), struct_getparam(int4, 3568), 0, 0);
        CC_SETGRAPHIC(int7);
    };
    script9554(int0, int1, int2, string0, int4);
    if ((int0 != comp(-1, 65535))) {
        CC_DELETEALL(int0);
        CC_CREATE(int0, 5, 0);
        script12591(1, int8);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETGRAPHIC(struct_getparam(int4, 3619));
        CC_SETTILING(struct_getparam(int4, 7177));
        CC_CREATE(int0, 5, 1);
        script12591(-1, int8);
        CC_SETPOSITION(0, 0, 0, 2);
        CC_SETSIZE(struct_getparam(int4, 3588), struct_getparam(int4, 3589), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int4, 3622));
        CC_CREATE(int0, 5, 2);
        script12591(-1, int8);
        CC_SETPOSITION(0, 0, 2, 2);
        CC_SETSIZE(struct_getparam(int4, 3588), struct_getparam(int4, 3589), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int4, 3622));
        CC_SETHFLIP(true);
    };
    if ((int3 != comp(-1, 65535))) {
        CC_DELETEALL(int3);
        script4408(int3);
        IF_SETHIDE(false, int3);
        IF_SETNOCLICKTHROUGH(1, int3);
        CC_CREATE(int3, 5, 0);
        CC_SETPOSITION(struct_getparam(int4, 3575), struct_getparam(int4, 3576), 2, 0);
        CC_SETSIZE(struct_getparam(int4, 3563), struct_getparam(int4, 3564), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int4, 3601));
        CC_CREATE(int3, 5, 1);
        if ((struct_getparam(int4, 3601) != -1 as graphic)) {
            IF_SETPOSITION(struct_getparam(int4, 3575), struct_getparam(int4, 3576), 2, 0, int3);
            IF_SETSIZE(struct_getparam(int4, 3563), struct_getparam(int4, 3564), 0, 0, int3);
            CC_SETPOSITION((struct_getparam(int4, 3573) - struct_getparam(int4, 3575)), (struct_getparam(int4, 3574) - struct_getparam(int4, 3576)), 2, 0);
        } else {
            IF_SETPOSITION(struct_getparam(int4, 3573), struct_getparam(int4, 3574), 2, 0, int3);
            IF_SETSIZE(struct_getparam(int4, 3565), struct_getparam(int4, 3566), 0, 0, int3);
            CC_SETPOSITION(0, 0, 2, 0);
        };
        CC_SETSIZE(struct_getparam(int4, 3565), struct_getparam(int4, 3566), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int4, 3602));
        CC_SETONMOUSEOVER(callback(script5336, int3, 1, struct_getparam(int4, 3603)));
        CC_SETONMOUSELEAVE(callback(script5336, int3, 1, struct_getparam(int4, 3602)));
        string1 = "Close";
        CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
        CC_SETMOUSEOVERCURSOR(36);
    };
    return;
}