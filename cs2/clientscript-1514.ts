//
function script1514(int0: unknown_int, int1: idkit, int2: unknown_int): void {
    if ((int0 != 1)) {
        return;
    };
    var int3 = -1 as struct;
    var int4 = script15531(2);
    var int5 = script15531(3);
    var int6 = script15531(4);
    var int7 = -1 as idkit;
    switch (int2) {
        case 2:
        case 9: {
            int3 = script2793(int1, 3);
            if ((int3 != -1 as struct)) {
                varclient_1010 = struct_getparam(int3, 1182);
                BASEIDKIT(int4, varclient_1010);
                varclient_1011 = struct_getparam(int3, 1183);
                BASEIDKIT(int5, varclient_1011);
                varclient_1012 = struct_getparam(int3, 1184);
                BASEIDKIT(int6, varclient_1012);
            } else {
                BASEIDKIT(int2, int1);
                varclient_1010 = int1;
                if (((varclient_1011 == -1 as idkit) || (script2793(varclient_1011, 4) != -1 as struct))) {
                    if ((GENDER() == 1)) {
                        int7 = 61 as idkit;
                    } else {
                        int7 = 26 as idkit;
                    };
                    BASEIDKIT(int5, int7);
                    varclient_1011 = int7;
                };
                if (((varclient_1012 == -1 as idkit) || (script2793(varclient_1012, 5) != -1 as struct))) {
                    if ((GENDER() == 1)) {
                        int7 = 68 as idkit;
                    } else {
                        int7 = 34 as idkit;
                    };
                    BASEIDKIT(int6, int7);
                    varclient_1012 = int7;
                };
            };
            break;
        }
        case 3:
        case 10: {
            if ((script2793(varclient_1010, 3) == -1 as struct)) {
                BASEIDKIT(int2, int1);
                varclient_1011 = int1;
            };
            break;
        }
        case 4:
        case 11: {
            if ((script2793(varclient_1010, 3) == -1 as struct)) {
                BASEIDKIT(int2, int1);
                varclient_1012 = int1;
            };
            break;
        }
        case 5:
        case 12: {
            BASEIDKIT(int2, int1);
            varclient_1013 = int1;
            break;
        }
    };
    script1513();
    return;
}