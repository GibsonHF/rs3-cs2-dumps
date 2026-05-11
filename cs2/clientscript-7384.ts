//
function script7384(int0: int): void {
    switch (int0) {
        case 0: {
            script7385(comp(292, 7), 308);
            IF_SETHIDE(false, comp(292, 7));
            IF_SETHIDE(true, comp(292, 8));
            script13972(comp(292, 37), comp(-1, 65535), 28595 as struct, "Personal", 1);
            script13972(comp(292, 38), comp(-1, 65535), 28595 as struct, "Global", 0);
            break;
        }
        case 1: {
            script7385(comp(292, 8), 420);
            IF_SETHIDE(true, comp(292, 7));
            IF_SETHIDE(false, comp(292, 8));
            script13972(comp(292, 37), comp(-1, 65535), 28595 as struct, "Personal", 0);
            script13972(comp(292, 38), comp(-1, 65535), 28595 as struct, "Global", 1);
            break;
        }
    };
    return;
}