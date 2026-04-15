//
function script13104(int0: obj): obj {
    if ((int0 != -1 as obj)) {
        switch (item_getparam(int0, 4007)) {
            case 0: {
                if ((GENDER() == 1)) {
                    var int0 = item_getparam(int0, 4008);
                };
                break;
            }
            case 1: {
                if ((GENDER() == 0)) {
                    int0 = item_getparam(int0, 4008);
                };
                break;
            }
        };
    };
    return int0;
}