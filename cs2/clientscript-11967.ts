//
function script11967(): void {
    CC_SETHIDE(false);
    switch (RANDOM(8)) {
        case 0: {
            CC_SETGRAPHIC(14491 as graphic);
            break;
        }
        case 1: {
            CC_SETGRAPHIC(14856 as graphic);
            break;
        }
        case 2: {
            CC_SETGRAPHIC(14853 as graphic);
            break;
        }
        case 3: {
            CC_SETGRAPHIC(14857 as graphic);
            break;
        }
        case 4: {
            CC_SETGRAPHIC(14491 as graphic);
            break;
        }
        case 5: {
            CC_SETGRAPHIC(14853 as graphic);
            break;
        }
        case 6: {
            CC_SETGRAPHIC(14858 as graphic);
            break;
        }
        case 7: {
            CC_SETGRAPHIC(14853 as graphic);
            break;
        }
    };
    CC_SET2DANGLE(RANDOM(65535));
    var int0 = (RANDOM(150) + 50);
    if ((RANDOM(2) == 0)) {
        int0 = (0 - int0);
    };
    cc_setparam(4893, int0);
    var int1 = (RANDOM(200) - 100);
    var int2 = (RANDOM(3) + 1);
    var int3 = (RANDOM(7) - 3);
    switch (RANDOM(4)) {
        case 0: {
            CC_SETPOSITION((0 - CC_GETWIDTH()), int1, 0, 1);
            cc_setparam(4891, int2);
            cc_setparam(4892, int3);
            break;
        }
        case 1: {
            CC_SETPOSITION(int1, (0 - CC_GETHEIGHT()), 1, 0);
            cc_setparam(4891, int3);
            cc_setparam(4892, int2);
            break;
        }
        case 2: {
            CC_SETPOSITION((0 - CC_GETWIDTH()), int1, 2, 1);
            cc_setparam(4891, (0 - int2));
            cc_setparam(4892, int3);
            break;
        }
        case 3: {
            CC_SETPOSITION(int1, (0 - CC_GETHEIGHT()), 1, 2);
            cc_setparam(4891, int3);
            cc_setparam(4892, (0 - int2));
            break;
        }
    };
    return;
}