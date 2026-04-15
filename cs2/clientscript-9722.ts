//
function script9722(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: component): void {
    var string0 = "";
    var string1 = OC_NAME(varclient_1799);
    var int7 = 0;
    var string2 = "";
    var string3 = "";
    var int8 = item_getparam(varclient_1799, 5741);
    var int9 = -1 as obj;
    if ((int8 != -1 as struct)) {
        string3 = struct_getparam(int8, 5742);
    };
    if ((varbitplayer_22564 == 0)) {
        string0 = string1;
    } else {
        if (((varbitplayer_22565 == 1) && (int0 > 0))) {
            switch (int5) {
                case 1: {
                    string2 = `Small ${string3}star`;
                    break;
                }
                case 2: {
                    string2 = "Small space dust";
                    break;
                }
                case 3: {
                    string2 = "Small meteorite";
                    break;
                }
                case 4: {
                    string2 = "Small dark star";
                    break;
                }
                case 5: {
                    string2 = OC_NAME(struct_getparam(int8, 5743));
                    break;
                }
                case 6: {
                    string2 = "Tiny protean pack";
                    break;
                }
                case 7: {
                    string2 = "Tiny portable pack";
                    break;
                }
                case 9: {
                    string2 = OC_NAME(struct_getparam(int8, 5743));
                    break;
                }
                default: {
                    string2 = `Small ${string3}lamp`;
                    break;
                }
            };
            string0 = `${string0}${inttostring(int0, 10)} x ${string2}<br>`;
            int7 = (int7 + int0);
        };
        if (((varbitplayer_22566 == 1) && (int1 > 0))) {
            switch (int5) {
                case 1: {
                    string2 = `Medium ${string3}star`;
                    break;
                }
                case 2: {
                    string2 = "Medium space dust";
                    break;
                }
                case 3: {
                    string2 = "Medium meteorite";
                    break;
                }
                case 4: {
                    string2 = "Medium dark star";
                    break;
                }
                case 5: {
                    string2 = OC_NAME(struct_getparam(int8, 5744));
                    break;
                }
                case 6: {
                    string2 = "Small protean pack";
                    break;
                }
                case 7: {
                    string2 = "Small portable pack";
                    break;
                }
                case 9: {
                    string2 = OC_NAME(struct_getparam(int8, 5744));
                    break;
                }
                default: {
                    string2 = `Medium ${string3}lamp`;
                    break;
                }
            };
            string0 = `${string0}${inttostring(int1, 10)} x ${string2}<br>`;
            int7 = (int7 + int1);
        };
        if (((varbitplayer_22567 == 1) && (int2 > 0))) {
            switch (int5) {
                case 1: {
                    string2 = `Large ${string3}star`;
                    break;
                }
                case 2: {
                    string2 = "Large space dust";
                    break;
                }
                case 3: {
                    string2 = "Large meteorite";
                    break;
                }
                case 4: {
                    string2 = "Large dark star";
                    break;
                }
                case 5: {
                    string2 = OC_NAME(struct_getparam(int8, 5745));
                    break;
                }
                case 6: {
                    string2 = "Medium protean pack";
                    break;
                }
                case 7: {
                    string2 = "Medium portable pack";
                    break;
                }
                case 9: {
                    string2 = OC_NAME(struct_getparam(int8, 5745));
                    break;
                }
                default: {
                    string2 = `Large ${string3}lamp`;
                    break;
                }
            };
            string0 = `${string0}${inttostring(int2, 10)} x ${string2}<br>`;
            int7 = (int7 + int2);
        };
        if (((varbitplayer_22568 == 1) && (int3 > 0))) {
            switch (int5) {
                case 1: {
                    string2 = `Huge ${string3}star`;
                    break;
                }
                case 2: {
                    string2 = "Huge space dust";
                    break;
                }
                case 3: {
                    string2 = "Huge meteorite";
                    break;
                }
                case 4: {
                    string2 = "Huge dark star";
                    break;
                }
                case 5: {
                    string2 = OC_NAME(struct_getparam(int8, 5746));
                    break;
                }
                case 6: {
                    string2 = "Large protean pack";
                    break;
                }
                case 7: {
                    string2 = "Large portable pack";
                    break;
                }
                case 8: {
                    string2 = "Medium skill training dummy crate";
                    break;
                }
                case 9: {
                    string2 = OC_NAME(struct_getparam(int8, 5746));
                    break;
                }
                default: {
                    string2 = `Huge ${string3}lamp`;
                    break;
                }
            };
            string0 = `${string0}${inttostring(int3, 10)} x ${string2}<br>`;
            int7 = (int7 + int3);
        };
        if (((varbitplayer_50268 == 1) && (int4 > 0))) {
            switch (int5) {
                case 1: {
                    string2 = `Giant ${string3}star`;
                    break;
                }
                case 5: {
                    string2 = OC_NAME(struct_getparam(int8, 8523));
                    break;
                }
                case 6: {
                    string2 = "Huge protean pack";
                    break;
                }
                case 7: {
                    string2 = "Huge portable pack";
                    break;
                }
                case 8: {
                    string2 = "Large skill training dummy crate";
                    break;
                }
                case 9: {
                    string2 = OC_NAME(struct_getparam(int8, 8523));
                    break;
                }
                default: {
                    string2 = `Giant ${string3}lamp`;
                    break;
                }
            };
            string0 = `${string0}${inttostring(int4, 10)} x ${string2}<br>`;
            int7 = (int7 + int4);
        };
        if ((int7 == 0)) {
            string0 = string1;
        } else if ((varbitplayer_34488 == 1)) {
            int9 = item_getparam(varclient_1799, 7236);
            if ((int9 != -1 as obj)) {
                if ((STRING_INDEXOF_STRING(string0, OC_NAME(int9), 0) == -1)) {
                    string0 = `${string1}<br>${string0}`;
                };
            } else if ((STRING_INDEXOF_STRING(string0, string1, 0) == -1)) {
                string0 = `${string1}<br>${string0}`;
            };
        };
    };
    IF_SETTEXT(string0, int6);
    return;
}