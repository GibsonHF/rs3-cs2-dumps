//
function script2628(int0: obj): int {
    var int1 = 1;
    switch (OC_CATEGORY(int0)) {
        case 151: {
            if ((((enum_hasoutput(33, 15093 as cs2enum, int0) == 1) && (script5455() == 1)) && (MAP_MEMBERS() == 1))) {
                int1 = 0;
            } else if ((item_getparam(int0, 2653) > 1)) {
                int1 = item_getparam(int0, 2653);
            };
            break;
        }
        case 484: {
            if ((INV_TOTAL(93 as inv, 41085 as obj) > 0)) {
                int1 = 0;
            };
            break;
        }
    };
    return int1;
}