//
function script9179(int0: struct, int1: int, int2: unknown_int): void {
    var int3 = 0;
    var int4 = 0;
    if ((((int2 == 1) && (script9178(struct_getparam(int0, 1268)) == 0)) || ((struct_getparam(int0, 3812) == 1) && (script3224(struct_getparam(int0, 1268)) == 0)))) {
        CC_CREATE(comp(1344, 26), 5, int1);
        CC_SETHIDE(true);
        CC_CREATE(comp(1344, 27), 4, int1);
        CC_SETHIDE(true);
    } else {
        [int3, int4] = script9132(struct_getparam(int0, 1268));
        CC_CREATE(comp(1344, 26), 5, int1);
        switch (int3) {
            case 0: {
                CC_SETGRAPHIC(21101 as graphic);
                break;
            }
            case 1: {
                CC_SETGRAPHIC(21101 as graphic);
                break;
            }
            case 2:
            case 5: {
                CC_SETGRAPHIC(21103 as graphic);
                break;
            }
            case 3:
            case 6:
            case 7: {
                CC_SETGRAPHIC(21104 as graphic);
                break;
            }
            case 4: {
                CC_SETGRAPHIC(21101 as graphic);
                break;
            }
            case -1: {
                CC_SETGRAPHIC(21102 as graphic);
                break;
            }
        };
        CC_SETSIZE(40, 40, 0, 0);
        CC_SETONMOUSELEAVE(callback(script8805));
        CC_SETONMOUSEREPEAT(callback(script9134, -2147483645, -2147483643));
        CC_CREATE(88080411, 4, int1);
        CC_SETTEXTFONT(26);
        switch (int3) {
            case 0: {
                CC_SETCOLOUR(16763656);
                CC_SETTEXT("Ready");
                break;
            }
            case 1: {
                CC_SETCOLOUR(16763656);
                CC_SETTEXT(script9171(int4, 1));
                break;
            }
            case 2:
            case 5: {
                CC_SETCOLOUR(16777215);
                CC_SETTEXT(script9171(int4, 1));
                break;
            }
            case 3:
            case 7: {
                CC_SETCOLOUR(8223867);
                CC_SETTEXT(script9171(int4, 1));
                break;
            }
            case 6: {
                CC_SETCOLOUR(8223867);
                CC_SETTEXT("--:--");
                break;
            }
            case 4: {
                CC_SETCOLOUR(16763656);
                CC_SETTEXT(script9171(int4, 1));
                break;
            }
            case -1: {
                CC_SETCOLOUR(0);
                CC_SETTEXT("Locked");
                break;
            }
        };
        CC_SETTEXTALIGN(1, 1, 13);
        CC_SETSIZE(60, 43, 0, 0);
        CC_SETONMOUSELEAVE(callback(script8805));
        CC_SETONMOUSEREPEAT(callback(script9134, -2147483645, -2147483643));
    };
    if ((CC_FIND(comp(1344, 25), int1) == 1)) {
        switch (int3) {
            case 0: {
                CC_SETCOLOUR(16763656);
                break;
            }
            case 1: {
                CC_SETCOLOUR(16763656);
                break;
            }
            case 2:
            case 5: {
                CC_SETCOLOUR(16777215);
                break;
            }
            case 3:
            case 6:
            case 7: {
                CC_SETCOLOUR(8223867);
                break;
            }
            case 4: {
                CC_SETCOLOUR(16763656);
                break;
            }
            case -1: {
                CC_SETCOLOUR(0);
                break;
            }
        };
    };
    return;
}