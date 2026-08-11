//
function script16240(): void {
    var int0 = 0;
    var int1 = -1 as obj;
    var int2 = 0;
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    CC_DELETEALL(comp(485, 44));  // trh181_overlay:gemfall_container
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(33956 as graphic, comp(485, 24));  // trh181_overlay:trh181_gemfall_title
            break;
        }
        case 1: {
            IF_SETGRAPHIC(33957 as graphic, comp(485, 24));  // trh181_overlay:trh181_gemfall_title
            break;
        }
        case 2: {
            IF_SETGRAPHIC(33958 as graphic, comp(485, 24));  // trh181_overlay:trh181_gemfall_title
            break;
        }
        case 3: {
            IF_SETGRAPHIC(33959 as graphic, comp(485, 24));  // trh181_overlay:trh181_gemfall_title
            break;
        }
    };
    script16204();
    script16205();
    int0 = (int0 + 1);
    while ((int0 < 7)) {
        [int1, int2] = script11184(int0);
        int3 = script11185(int0);
        int4 = script11187(int0);
        int5 = script11609(int0);
        IF_SETGRAPHIC(script16202(varbitplayer_27092, 0), int4);
        if ((int1 == -1 as obj)) {
            IF_SETHIDE(true, int3);
        } else {
            IF_SETOPBASE(OC_NAME(int1), int4);
            IF_SETTEXT(OC_NAME(int1), int5);
            IF_SETOBJECT(int1, int2, script11186(int0));
            IF_SETHIDE(false, int3);
        };
    };
    return;
}