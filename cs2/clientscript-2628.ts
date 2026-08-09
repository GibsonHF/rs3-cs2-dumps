//
function script2628(int0: number): number {
    var int1 = 1;
    switch (OC_CATEGORY(int0)) {
        case 151: {
            if ((enum_hasoutput(33, 15093 as cs2enum, int0) == 1)) {
                if ((script5455() == 1)) {
                    if ((MAP_MEMBERS() == 1)) {
                        int1 = 0;
                    } else if ((item_getparam(int0, 2653) > 1)) {
                        int1 = item_getparam(int0, 2653);
                    };
                } else if ((item_getparam(int0, 2653) > 1)) {
                    int1 = item_getparam(int0, 2653);
                };
            } else if ((item_getparam(int0, 2653) > 1)) {
                int1 = item_getparam(int0, 2653);
            };
            break;
        }
    };
    return int1;
}