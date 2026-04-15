//
function script16089(int0: struct): [int, string] {
    if ((struct_getparam(int0, 1294) == 0)) {
        return [1, ""];
    };
    var int1 = 1;
    var string0 = "";
    var int2 = 1;
    var string1 = "";
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    while ((int5 < 12)) {
        stack(1);
        stack("null");
        [int2, string1] = stack();
        switch (int5) {
            case 0: {
                [int3, int4] = [struct_getparam(int0, 1294), struct_getparam(int0, 1295)];
                break;
            }
            case 1: {
                [int3, int4] = [struct_getparam(int0, 1296), struct_getparam(int0, 1297)];
                break;
            }
            case 2: {
                [int3, int4] = [struct_getparam(int0, 1298), struct_getparam(int0, 1299)];
                break;
            }
            case 3: {
                [int3, int4] = [struct_getparam(int0, 1300), struct_getparam(int0, 1301)];
                break;
            }
            case 4: {
                [int3, int4] = [struct_getparam(int0, 1302), struct_getparam(int0, 1303)];
                break;
            }
            case 5: {
                [int3, int4] = [struct_getparam(int0, 1304), struct_getparam(int0, 1305)];
                break;
            }
            case 6: {
                [int3, int4] = [struct_getparam(int0, 1306), struct_getparam(int0, 1307)];
                break;
            }
            case 7: {
                [int3, int4] = [struct_getparam(int0, 1308), struct_getparam(int0, 1309)];
                break;
            }
            case 8: {
                [int3, int4] = [struct_getparam(int0, 1310), struct_getparam(int0, 1311)];
                break;
            }
            case 9: {
                [int3, int4] = [struct_getparam(int0, 1312), struct_getparam(int0, 1313)];
                break;
            }
            case 10: {
                [int3, int4] = [struct_getparam(int0, 2227), struct_getparam(int0, 2228)];
                break;
            }
            case 11: {
                [int3, int4] = [struct_getparam(int0, 2229), struct_getparam(int0, 2230)];
                break;
            }
        };
        if ((int3 == 62)) {
            [int2, string1] = script16085(int4);
            if ((STRING_LENGTH(string0) > 0)) {
                string0 = `${string0}<br>`;
            };
            switch (int2) {
                case 0: {
                    string0 = `${string0}${string1}`;
                    int1 = 0;
                    break;
                }
                case -1: {
                    string0 = `${string0}${string1}`;
                    break;
                }
                default: {
                    string0 = `${string0}<str=FFFFFE>${string1}`;
                    break;
                }
            };
        };
        if ((int3 == 0)) {
            int5 = 12;
        } else {
            int5 = (int5 + 1);
        };
    };
    if ((STRING_LENGTH(string0) > 0)) {
        string0 = `${string0}<br>`;
    };
    return [int1, string0];
}