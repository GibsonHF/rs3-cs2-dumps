//
function script2958(int0: int, int1: int, int2: component): void {
    if ((IF_SLIDER_GETMINMAX[1](int0, int1) == 1)) {
        switch (CC_GETLAYER[1]()) {
            case 33882313: {
                script3347(CC_GETINVOBJECT[1](), 95 as inv, CC_GETID[1](), int2, int1);
                return;
            }
            case 21954574:
            case 21954577: {
                script3347(CC_GETINVOBJECT[1](), 90 as inv, CC_GETID[1](), int2, int1);
                return;
            }
            case 71565319: {
                script14999(cc_getparam[1](7215), int2, int1);
                return;
            }
        };
        switch (cc_getparam[1](7540)) {
            case 0: {
                script3347(cc_getparam[1](7541), cc_getparam[1](7543), cc_getparam[1](7542), int2, int1);
                break;
            }
            case 5: {
                script14995(CC_GETLAYER[1](), CC_GETID[1]());
                break;
            }
            case 1: {
                script3348(cc_getparam[1](7544), int2, int1);
                break;
            }
            case 2: {
                script8735(cc_getparam[1](4277), int2, int1);
                break;
            }
            case 3: {
                script3349(cc_getparam[1](7545), int2, int1);
                break;
            }
            case 4: {
                script5577(cc_getparam[1](7544), int2, int1);
                break;
            }
        };
    };
    return;
}