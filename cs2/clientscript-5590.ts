//
function script5590(int0: component, int1: int, int2: int): void {
    if ((int0 != comp(365, 19))) {
        var int2 = (1 - int2);
    };
    switch (int0) {
        case 23920659: {
            if ((script2992(int1) == 1)) {
                int2 = (1 - int2);
            };
            script2991(UI_GETCATEGORY(int1), UI_GETDYNID(int1), int2);
            break;
        }
        case 21233694: {
            script2789(1292 as dbrow, int1, int2);
            script2684();
            break;
        }
        case 21233712: {
            script2789(1293 as dbrow, int1, int2);
            script2684();
            break;
        }
    };
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETONOP(callback(script5590, -2147483645, -2147483643, int2));
        CC_CHECK_SET(script734(int2));
    };
    return;
}