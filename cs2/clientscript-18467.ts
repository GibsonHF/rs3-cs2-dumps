//
function script18467(int0: component, int1: unknown_int, int2: int): void {
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    switch (int1) {
        case 2: {
            if (((CC_FIND(int0, 0) == 1) && (unk11021("mtx_type") == 1))) {
                switch (int2) {
                    case 0: {
                        int3 = comp(907, 95);
                        break;
                    }
                    case 2: {
                        int3 = comp(907, 121);
                        break;
                    }
                    default: {
                        script12478("Campagin contains mtx_type keyword but campagin slot is unexpected. No valid overlay_layer to draw mtx_currency.");
                        int3 = comp(-1, 65535);
                        break;
                    }
                };
                if ((int3 != comp(-1, 65535))) {
                    switch (unk11031("mtx_type")) {
                        case 1: {
                            break;
                        }
                        case 2: {
                            script18478(int3);
                            break;
                        }
                        default: {
                            script12478(`Unknown mtx_type when trying to draw lobby overlay for slot ${inttostring(int2, 10)}.`);
                            break;
                        }
                    };
                };
            };
            if (((CC_FIND(int0, 0) == 1) && (unk11021("title_text") == 1))) {
                switch (int2) {
                    case 0: {
                        int4 = comp(907, 72);
                        break;
                    }
                    case 2: {
                        int4 = comp(907, 98);
                        break;
                    }
                    case 1: {
                        int4 = comp(907, 45);
                        break;
                    }
                    default: {
                        script12478("Unexpected lobby slot when trying to find the slot's title component.");
                        int3 = comp(-1, 65535);
                        break;
                    }
                };
                IF_SETTEXT(unk11020("title_text"), int4);
            };
            break;
        }
        case 3:
        case 4:
        case 5:
        case 6: {
            if ((CC_FIND(int0, 0) == 1)) {
                CC_DELETE();
            };
            script10038(int2, 0, 0);
            break;
        }
    };
    return;
}