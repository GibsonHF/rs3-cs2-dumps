//
function script3448(): void {
    if ((varbitplayer_5907 != 0)) {
        IF_SETHIDE(false, comp(987, 28));  // csi_jury_spy:selected
    } else {
        IF_SETHIDE(true, comp(987, 28));  // csi_jury_spy:selected
    };
    var int0 = comp(-1, 65535);
    switch (varbitplayer_5907) {
        case 1: {
            int0 = comp(987, 3);  // csi_jury_spy:jury_mem_1
            break;
        }
        case 2: {
            int0 = comp(987, 7);  // csi_jury_spy:jury_mem_2
            break;
        }
        case 3: {
            int0 = comp(987, 9);  // csi_jury_spy:jury_mem_3
            break;
        }
        case 4: {
            int0 = comp(987, 11);  // csi_jury_spy:jury_mem_4
            break;
        }
        case 5: {
            int0 = comp(987, 13);  // csi_jury_spy:jury_mem_5
            break;
        }
        case 6: {
            int0 = comp(987, 15);  // csi_jury_spy:jury_mem_6
            break;
        }
        case 7: {
            int0 = comp(987, 17);  // csi_jury_spy:jury_mem_7
            break;
        }
        case 8: {
            int0 = comp(987, 19);  // csi_jury_spy:jury_mem_8
            break;
        }
        case 9: {
            int0 = comp(987, 21);  // csi_jury_spy:jury_mem_9
            break;
        }
        case 10: {
            int0 = comp(987, 23);  // csi_jury_spy:jury_mem_10
            break;
        }
        case 11: {
            int0 = comp(987, 25);  // csi_jury_spy:jury_mem_11
            break;
        }
        case 12: {
            int0 = comp(987, 27);  // csi_jury_spy:jury_mem_12
            break;
        }
    };
    if ((int0 == comp(-1, 65535))) {
        IF_SETHIDE(true, comp(987, 28));  // csi_jury_spy:selected
        return;
    };
    if ((IF_FIND(int0) == 1)) {
        IF_SETHIDE(false, comp(987, 28));  // csi_jury_spy:selected
        IF_SETSIZE(CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0, comp(987, 28));  // csi_jury_spy:selected
        IF_SETPOSITION(CC_GETX(), CC_GETY(), 0, 0, comp(987, 28));  // csi_jury_spy:selected
    };
    return;
}