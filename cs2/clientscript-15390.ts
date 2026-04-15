//
function script15390(int0: obj): int {
    var int1 = 28;
    var int2 = -1;
    var int3 = -1 as obj;
    switch (OC_CATEGORY(int0)) {
        case 484: {
            if ((INV_TOTAL(93 as inv, 51022 as obj) > 0)) {
                while ((++int2 < 28)) {
                    int3 = INV_GETOBJ(93 as inv, int2);
                    if (((int3 == item_getparam(int0, 2655)) || (int3 == item_getparam(int0, 2656)))) {
                        int1 = (int1 - 1);
                    };
                };
                return int1;
            };
            break;
        }
    };
    return 0;
}