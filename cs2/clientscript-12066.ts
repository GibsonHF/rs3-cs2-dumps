//
function script12066(int0: obj): unknown_int {
    if ((item_getparam(int0, 5524) == 3)) {
        return 2;
    };
    var int1 = 2;
    switch (OC_WEARPOS(int0)) {
        case 5: {
            int1 = 1;
            break;
        }
        case 3: {
            if ((OC_WEARPOS2(int0) != 5)) {
                int1 = 1;
            };
            break;
        }
    };
    return int1;
}