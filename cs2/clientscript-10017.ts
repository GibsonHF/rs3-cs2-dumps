//
function script10017(int0: component, int1: int, int2: unknown_int, int3: unknown_int, int4: component, string0: string): void {
    if (((int0 == comp(-1, 65535)) || (int3 == -1))) {
        return;
    };
    var int5 = -1;
    var int6 = -1;
    var int7 = 2;
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    var int11 = -1;
    var int12 = -1 as graphic;
    var int13 = -1;
    var int14 = -1;
    var int15 = -1;
    var int16 = -1 as graphic;
    var int17 = -1 as graphic;
    var int18 = -1 as graphic;
    var int19 = -1 as graphic;
    var int20 = -1 as graphic;
    var int21 = -1 as graphic;
    var int22 = -1 as graphic;
    var int23 = -1 as graphic;
    var int24 = 16777215;
    if (((CC_FIND(int0, int1) == 1) || ((int1 == -1) && (IF_FIND(int0) == 1)))) {
        int5 = CC_GETX();
        int6 = CC_GETY();
        int8 = CC_GETWIDTH();
        int9 = CC_GETHEIGHT();
    } else {
        return;
    };
    if ((int4 == comp(-1, 65535))) {
        var int4 = IF_GETLAYER(int0);
    };
    if ((int4 == comp(-1, 65535))) {
        return;
    };
    switch (int2) {
        case 7: {
            int5 = (int5 + int7);
            int6 = (int6 + int7);
            break;
        }
        case 8: {
            int5 = (int5 + (int8 / 2));
            break;
        }
        case 9: {
            int5 = ((int5 + int8) - int7);
            int6 = (int6 + int7);
            break;
        }
        case 4: {
            int6 = (int6 + (int9 / 2));
            break;
        }
        case 5: {
            int5 = (int5 + (int8 / 2));
            int6 = (int6 + (int9 / 2));
            break;
        }
        case 6: {
            int5 = (int5 + int8);
            int6 = (int6 + (int9 / 2));
            break;
        }
        case 1: {
            int5 = (int5 + int7);
            int6 = ((int6 + int9) - int7);
            break;
        }
        case 3: {
            int5 = ((int5 + int8) - int7);
            int6 = ((int6 + int9) - int7);
            break;
        }
        case 2: {
            int5 = (int5 + (int8 / 2));
            int6 = (int6 + int9);
            break;
        }
    };
    var int25 = IF_GETNEXTSUBID(int4);
    switch (int3) {
        case 0: {
            int10 = 20;
            int11 = 20;
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int10, int11, 0, 0);
            CC_SETGRAPHIC(23820 as graphic);
            cc_setparam(4421, int5);
            cc_setparam(4422, int6);
            CC_SETONTIMER(callback(script10018, -2147483645, -2147483643));
            script10019(int4, int25);
            int25 = (int25 + 1);
            CC_CREATE[1](int4, 4, int25);
            CC_SETSIZE[1](int10, int11, 0, 0);
            CC_SETTEXT[1](string0);
            CC_SETCOLOUR[1](16777215);
            CC_SETTEXTFONT[1](26);
            CC_SETTEXTALIGN[1](1, 1, 0);
            CC_SETTEXTSHADOW[1](1);
            cc_setparam[1](4423, CC_GETID());
            CC_SETONTIMER[1](callback(script10018, -2147483645, -2147483643));
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            int25 = (int25 + 1);
            break;
        }
        case 1: {
            int10 = 20;
            int11 = 20;
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int10, int11, 0, 0);
            CC_SETPOSITION((int5 - (int10 / 2)), (int6 - (int11 / 2)), 0, 0);
            CC_SETGRAPHIC(23822 as graphic);
            script10019(int4, int25);
            int25 = (int25 + 1);
            CC_CREATE[1](int4, 5, int25);
            CC_SETSIZE[1](int10, int11, 0, 0);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETGRAPHIC[1](23823 as graphic);
            cc_setparam[1](4424, 1);
            CC_SETONTIMER[1](callback(script10018, -2147483645, -2147483643));
            script10019(int4, int25);
            int25 = (int25 + 1);
            break;
        }
        case 2: {
            int10 = 20;
            int11 = 20;
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int10, int11, 0, 0);
            CC_SETPOSITION((int5 - (int10 / 2)), (int6 - (int11 / 2)), 0, 0);
            CC_SETGRAPHIC(23824 as graphic);
            script10019(int4, int25);
            int25 = (int25 + 1);
            CC_CREATE[1](int4, 5, int25);
            CC_SETSIZE[1](int10, int11, 0, 0);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            CC_SETGRAPHIC[1](23825 as graphic);
            cc_setparam[1](4424, 1);
            CC_SETONTIMER[1](callback(script10018, -2147483645, -2147483643));
            script10019(int4, int25);
            int25 = (int25 + 1);
            break;
        }
        case 3:
        case 4: {
            int15 = 28689;
            int16 = struct_getparam(int15, 3799);
            int17 = struct_getparam(int15, 3798);
            int18 = struct_getparam(int15, 3800);
            int19 = struct_getparam(int15, 3801);
            int20 = struct_getparam(int15, 3803);
            int21 = struct_getparam(int15, 3805);
            int22 = struct_getparam(int15, 3804);
            int23 = struct_getparam(int15, 3806);
            int10 = struct_getparam(int15, 3808);
            int11 = int10;
            int13 = MAX(0, (int8 - (2 * int10)));
            int14 = MAX(0, (int9 - (2 * int11)));
            if ((int3 == 3)) {
                int24 = 65280;
            };
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int10, int11, 0, 0);
            CC_SETPOSITION(int5, int6, 0, 0);
            CC_SETGRAPHIC(int21);
            CC_SETVFLIP(true);
            CC_SETCOLOUR(int24);
            int25 = (int25 + 1);
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int13, int11, 0, 0);
            CC_SETPOSITION((int5 + int10), int6, 0, 0);
            CC_SETGRAPHIC(int22);
            CC_SETVFLIP(true);
            CC_SETCOLOUR(int24);
            CC_SETTILING(true);
            int25 = (int25 + 1);
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int10, int11, 0, 0);
            CC_SETPOSITION(((int5 + int10) + int13), int6, 0, 0);
            if ((int23 == -1 as graphic)) {
                CC_SETGRAPHIC(int21);
                CC_SETHFLIP(true);
            } else {
                CC_SETGRAPHIC(int23);
            };
            CC_SETVFLIP(true);
            CC_SETCOLOUR(int24);
            int25 = (int25 + 1);
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int10, int14, 0, 0);
            CC_SETPOSITION(int5, (int6 + int11), 0, 0);
            CC_SETGRAPHIC(int19);
            CC_SETCOLOUR(int24);
            CC_SETTILING(true);
            int25 = (int25 + 1);
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int10, int14, 0, 0);
            CC_SETPOSITION(((int5 + int10) + int13), (int6 + int11), 0, 0);
            if ((int20 == -1 as graphic)) {
                CC_SETGRAPHIC(int19);
                CC_SETHFLIP(true);
            } else {
                CC_SETGRAPHIC(int20);
            };
            CC_SETCOLOUR(int24);
            CC_SETTILING(true);
            int25 = (int25 + 1);
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int10, int11, 0, 0);
            CC_SETPOSITION(int5, ((int6 + int11) + int14), 0, 0);
            CC_SETGRAPHIC(int16);
            CC_SETVFLIP(true);
            CC_SETCOLOUR(int24);
            int25 = (int25 + 1);
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int13, int11, 0, 0);
            CC_SETPOSITION(((int5 + int10) + int13), ((int6 + int11) + int14), 0, 0);
            CC_SETGRAPHIC(int17);
            CC_SETVFLIP(true);
            CC_SETCOLOUR(int24);
            CC_SETTILING(true);
            int25 = (int25 + 1);
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int10, int11, 0, 0);
            CC_SETPOSITION(((int5 + int10) + int13), ((int6 + int11) + int14), 0, 0);
            if ((int18 == -1 as graphic)) {
                CC_SETGRAPHIC(int16);
                CC_SETHFLIP(true);
            } else {
                CC_SETGRAPHIC(int18);
            };
            CC_SETVFLIP(true);
            CC_SETCOLOUR(int24);
            int25 = (int25 + 1);
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int10, int11, 0, 0);
            CC_SETPOSITION(int5, int6, 0, 0);
            CC_SETGRAPHIC(int16);
            CC_SETCOLOUR(int24);
            cc_setparam(4424, 1);
            script10019(int4, int25);
            CC_SETONTIMER(callback(script10018, -2147483645, -2147483643));
            int25 = (int25 + 1);
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int13, int11, 0, 0);
            CC_SETPOSITION((int5 + int10), int6, 0, 0);
            CC_SETGRAPHIC(int17);
            CC_SETCOLOUR(int24);
            CC_SETTILING(1);
            cc_setparam(4424, 1);
            CC_SETONTIMER(callback(script10018, -2147483645, -2147483643));
            script10019(int4, int25);
            int25 = (int25 + 1);
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int10, int11, 0, 0);
            CC_SETPOSITION(((int5 + int10) + int13), int6, 0, 0);
            if ((int18 == -1)) {
                CC_SETGRAPHIC(int16);
                CC_SETHFLIP(true);
            } else {
                CC_SETGRAPHIC(int18);
            };
            CC_SETCOLOUR(int24);
            cc_setparam(4424, 1);
            CC_SETONTIMER(callback(script10018, -2147483645, -2147483643));
            script10019(int4, int25);
            int25 = (int25 + 1);
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int10, int14, 0, 0);
            CC_SETPOSITION(int5, (int6 + int11), 0, 0);
            CC_SETGRAPHIC(int19);
            CC_SETCOLOUR(int24);
            CC_SETTILING(1);
            cc_setparam(4424, 1);
            CC_SETONTIMER(callback(script10018, -2147483645, -2147483643));
            script10019(int4, int25);
            int25 = (int25 + 1);
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int10, int14, 0, 0);
            CC_SETPOSITION(((int5 + int10) + int13), (int6 + int11), 0, 0);
            if ((int20 == -1)) {
                CC_SETGRAPHIC(int19);
                CC_SETHFLIP(true);
            } else {
                CC_SETGRAPHIC(int20);
            };
            CC_SETCOLOUR(int24);
            CC_SETTILING(true);
            cc_setparam(4424, 1);
            CC_SETONTIMER(callback(script10018, -2147483645, -2147483643));
            script10019(int4, int25);
            int25 = (int25 + 1);
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int10, int11, 0, 0);
            CC_SETPOSITION(int5, ((int6 + int11) + int14), 0, 0);
            CC_SETGRAPHIC(int21);
            CC_SETCOLOUR(int24);
            cc_setparam(4424, 1);
            CC_SETONTIMER(callback(script10018, -2147483645, -2147483643));
            script10019(int4, int25);
            int25 = (int25 + 1);
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int13, int11, 0, 0);
            CC_SETPOSITION(((int5 + int10) + int13), ((int6 + int11) + int14), 0, 0);
            CC_SETGRAPHIC(int22);
            CC_SETCOLOUR(int24);
            CC_SETTILING(1);
            cc_setparam(4424, 1);
            CC_SETONTIMER(callback(script10018, -2147483645, -2147483643));
            script10019(int4, int25);
            int25 = (int25 + 1);
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int10, int11, 0, 0);
            CC_SETPOSITION(((int5 + int10) + int13), ((int6 + int11) + int14), 0, 0);
            if ((int23 == -1)) {
                CC_SETGRAPHIC(int21);
                CC_SETHFLIP(true);
            } else {
                CC_SETGRAPHIC(int23);
            };
            CC_SETCOLOUR(int24);
            cc_setparam(4424, 1);
            CC_SETONTIMER(callback(script10018, -2147483645, -2147483643));
            script10019(int4, int25);
            int25 = (int25 + 1);
            break;
        }
        case 5:
        case 6: {
            if ((int3 == 5)) {
                int12 = 24256 as graphic;
                int10 = 36;
                int11 = 36;
            } else {
                int12 = enum_getvalue(0, 23, 10392 as cs2enum, int8);
                if ((int12 == -1 as graphic)) {
                    return;
                };
                int10 = int8;
                int11 = int8;
            };
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int10, int11, 0, 0);
            CC_SETPOSITION(int5, int6, 0, 0);
            CC_SETGRAPHIC(int12);
            CC_SET2DANGLE(49152);
            cc_setparam(6407, 0);
            CC_SETONTIMER(callback(script10018, -2147483645, -2147483643));
            script10019(int4, int25);
            int25 = (int25 + 1);
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int10, int11, 0, 0);
            CC_SETPOSITION(int5, int6, 0, 0);
            CC_SETGRAPHIC(int12);
            CC_SET2DANGLE(32768);
            cc_setparam(6407, 1);
            CC_SETONTIMER(callback(script10018, -2147483645, -2147483643));
            script10019(int4, int25);
            int25 = (int25 + 1);
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int10, int11, 0, 0);
            CC_SETPOSITION(int5, int6, 0, 0);
            CC_SETGRAPHIC(int12);
            CC_SET2DANGLE(16384);
            cc_setparam(6407, 2);
            CC_SETONTIMER(callback(script10018, -2147483645, -2147483643));
            script10019(int4, int25);
            int25 = (int25 + 1);
            CC_CREATE(int4, 5, int25);
            CC_SETSIZE(int10, int11, 0, 0);
            CC_SETPOSITION(int5, int6, 0, 0);
            CC_SETGRAPHIC(int12);
            cc_setparam(6407, 3);
            CC_SETONTIMER(callback(script10018, -2147483645, -2147483643));
            script10019(int4, int25);
            int25 = (int25 + 1);
            break;
        }
    };
    return;
}