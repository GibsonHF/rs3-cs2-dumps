//[clientscript,barrows_show_head]
function script1715(): void {
    var int0 = comp(-1, 65535);
    if ((varclient_1043 == -1 as obj)) {
        return;
    };
    switch (varclient_1043) {
        case 4761:
        case 4762: {
            int0 = comp(24, 14);
            break;
        }
        case 4763:
        case 4764: {
            int0 = comp(24, 12);
            break;
        }
        case 4765:
        case 4766: {
            int0 = comp(24, 13);
            break;
        }
        case 4767:
        case 4768: {
            int0 = comp(24, 15);
            break;
        }
        case 4769:
        case 4770: {
            int0 = comp(24, 16);
            break;
        }
        case 4771:
        case 4772: {
            int0 = comp(24, 17);
            break;
        }
        case 24195:
        case 24196: {
            int0 = comp(24, 18);
            break;
        }
    };
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    IF_SETOBJECT(varclient_1043, -1, int0);
    IF_SETMODELZOOM(1600, int0);
    IF_SETMODELANIM(12554 as seq, int0);
    return;
}