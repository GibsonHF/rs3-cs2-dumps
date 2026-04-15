//
function script20393(int0: unknown_int, int1: int): void {
    if ((script14160() == 0)) {
        return;
    };
    if ((int0 == 1)) {
        switch (int1) {
            case 1: {
                script14169();
                break;
            }
            case 2: {
                script14167(int1, struct_getparam(21301, 3503), comp(1477, 707));
                break;
            }
            case 3: {
                script14167(int1, struct_getparam(38865, 3503), comp(1477, 722));
                break;
            }
            case 4: {
                if ((script6431() == true)) {
                    script14168();
                };
                break;
            }
            case 5: {
                script14170();
                break;
            }
            case 6: {
                script3289();
                break;
            }
            case 7: {
                script14167(int1, comp(1477, 744), comp(1477, 744));
                break;
            }
        };
    } else if ((varclient_6403 == int1)) {
        script14174();
    } else if ((((int1 == 6) && (varclient_6403 == 0)) && (IF_HASSUB(comp(1477, 693)) == 0))) {
        script14174();
    };
    return;
}