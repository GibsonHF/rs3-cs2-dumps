//
function script3388(int0: unknown_int, int1: unknown_int): void {
    var int2 = comp(-1, 65535);
    switch (int1) {
        case 1: {
            int2 = comp(-1, 65535);
            break;
        }
        case 2: {
            int2 = comp(825, 5);
            break;
        }
        default: {
            int2 = comp(744, 198);
            break;
        }
    };
    if ((int2 != comp(-1, 65535))) {
        IF_SETTEXT("Your display has been changed. Do you want to keep this setting?", int2);
    };
    var int3 = script18960();
    var int4 = 0;
    if ((int3 != int0)) {
        switch (int0) {
            case 1: {
                AUTOSETUP_SETMIN();
                break;
            }
            case 2: {
                AUTOSETUP_SETLOW();
                break;
            }
            case 3: {
                unk11063();
                break;
            }
            case 4: {
                unk11062();
                break;
            }
            case 5: {
                unk11061(0);
                break;
            }
            case 6: {
                if ((int3 != 5)) {
                    unk11061(0);
                    int4 = 1;
                };
                int4 = script18961(33096 as struct, 4, int4);
                int4 = script18961(33097 as struct, 3, int4);
                int4 = script18961(33093 as struct, 4, int4);
                int4 = script18961(34880 as struct, 5, int4);
                if ((int4 == 0)) {
                    return;
                };
                break;
            }
            case 0: {
                AUTOSETUP_SETCUSTOM();
                break;
            }
            case -1: {
                script3384(int1);
                break;
            }
        };
    } else {
        return;
    };
    script2593();
    script2596(GETWINDOWMODE(), script2692(), int1);
    return;
}