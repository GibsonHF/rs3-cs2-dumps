//
function script21107(): void {
    var int2 = 0;
    var int3 = -1;
    if ((MAP_MEMBERS() == 0)) {
        if ((OC_MEMBERS(int0) == 1)) {
            int2 = 0;
        } else if ((item_getparam(int0, 5774) == 1)) {
            if ((item_getparam(int0, 5772) == 1)) {
                int2 = 0;
            } else {
                int3 = script12517(93, int0, 0);
                if ((int3 == -1)) {
                    int2 = 0;
                } else if ((INV_GETVAR(93 as inv, int3, 18550) != 0)) {
                    int2 = 0;
                } else {
                    int2 = 1;
                };
            };
        } else if ((int1 == 1)) {
            int2 = (INV_TOTAL(93 as inv, int0) + INV_TOTAL(530 as inv, int0));
        } else {
            int2 = INV_TOTAL(93 as inv, int0);
        };
    } else if ((item_getparam(int0, 5774) == 1)) {
        if ((item_getparam(int0, 5772) == 1)) {
            int2 = 0;
        } else {
            int3 = script12517(93, int0, 0);
            if ((int3 == -1)) {
                int2 = 0;
            } else if ((INV_GETVAR(93 as inv, int3, 18550) != 0)) {
                int2 = 0;
            } else {
                int2 = 1;
            };
        };
    } else if ((int1 == 1)) {
        int2 = (INV_TOTAL(93 as inv, int0) + INV_TOTAL(530 as inv, int0));
    } else {
        int2 = INV_TOTAL(93 as inv, int0);
    };
    stack(int2);
    return;
}