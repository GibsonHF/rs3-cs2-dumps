//
function script6302(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    var string0 = "";
    [int5, int6, int7, string0] = script11820(int1, int4);
    var int8 = script7980(int2);
    var int9 = script7974(int0, int8);
    var int10 = script7978(int0, int8);
    var int11 = script1601(int0, int8);
    switch (int2) {
        case 95682562: {
            [int9, int10, int11] = [comp(1460, 1), 95682564, 95682563];
            break;
        }
        case 95158274: {
            [int9, int10, int11] = [comp(1452, 1), 95158282, 95158281];
            break;
        }
        case 95748098: {
            [int9, int10, int11] = [comp(1461, 1), 95748106, 95748105];
            break;
        }
        case 123469826: {
            [int9, int10, int11] = [comp(1884, 1), 123469834, 123469833];
            break;
        }
        case 123535362: {
            [int9, int10, int11] = [comp(1885, 1), 123535370, 123535369];
            break;
        }
        case 123666434: {
            [int9, int10, int11] = [comp(1887, 1), 123666442, 123666441];
            break;
        }
        case 123600898: {
            [int9, int10, int11] = [comp(1886, 1), 123600906, 123600905];
            break;
        }
        case 79888386: {
            [int9, int10, int11] = [comp(1219, 1), 79888394, 79888393];
            break;
        }
        case 79953922: {
            [int9, int10, int11] = [comp(1220, 1), 79953930, 79953929];
            break;
        }
        case 80019458: {
            [int9, int10, int11] = [comp(1221, 1), 80019466, 80019465];
            break;
        }
        case 123404290: {
            [int9, int10, int11] = [comp(1883, 1), 123404298, 123404297];
            break;
        }
        case 94961666: {
            [int9, int10, int11] = [comp(1449, 1), 94961674, 94961673];
            break;
        }
        case 123338754: {
            [int9, int10, int11] = [comp(1882, 1), 123338762, 123338761];
            break;
        }
    };
    if ((((int3 == -1) && (IF_FIND(int9) == 1)) || (CC_FIND(int9, int3) == 1))) {
        if (((cc_getparam(3438) != int1) && ((cc_getparam(3438) == -1 as struct) || (struct_getparam(cc_getparam(3438), 2793) != struct_getparam(int1, 2793))))) {
            if ((((int3 == -1) && (IF_FIND(int2) == 1)) || (CC_FIND(int2, int3) == 1))) {
                CC_SETONTIMER(callback());
            };
            script11819(int2, int11, int10, int3, 4, "", -1);
            return;
        };
        if ((int5 >= int6)) {
            if ((int4 == 0)) {
                var int4 = 2;
            };
            if ((cc_getparam(5314) == true)) {
                cc_setparam(5313, 0);
                cc_setparam(5314, 0);
                CC_SETONTIMER(callback());
                return;
            };
            cc_setparam(5313, 0);
            cc_setparam(5314, 0);
        };
        if (((int6 == 0) || ((int5 - int6) >= (30 / 10)))) {
            int4 = 4;
            string0 = "";
            int7 = -1;
        };
        script11819(int2, int11, int10, int3, int4, string0, int7);
    };
    if ((((int3 == -1) && (IF_FIND(int2) == 1)) || (CC_FIND(int2, int3) == 1))) {
        if ((int5 >= int6)) {
            CC_SETONTIMER(callback());
        } else {
            CC_SETONTIMER(callback(script6302, int0, int1, int2, int3, 0));
        };
    };
    return;
}