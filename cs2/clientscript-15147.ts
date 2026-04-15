//
function script15147(int0: obj): int {
    var int1 = 0;
    var int2 = 0;
    switch (int0) {
        case 995: {
            return script17138(script5567());
        }
        case 50474: {
            return INV_TOTAL(795 as inv, int0);
        }
    };
    int1 = script2549(int0);
    if ((int1 > 0)) {
        return int1;
    };
    if ((enum_hasoutput(33, 14058 as cs2enum, int0) == 1)) {
        return INV_TOTAL(885 as inv, int0);
    };
    return 0;
}