//
function script18256(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = 1;
    var string0 = "";
    var int5 = 0;
    var string1 = "";
    var string2 = "";
    switch (int2) {
        case 88014920: {
            [int4, string0] = script18132(int0, int1);
            IF_SETTEXT(`${inttostring(10, 10)} vis wax`, int3);
            break;
        }
        case 88014926: {
            [int4, string0] = script18133(int0, int1);
            IF_SETTEXT(`${inttostring(25, 10)} vis wax`, int3);
            break;
        }
        case 88015029: {
            [int4, string0, int5, string1] = script18134(int0, int1);
            IF_SETTEXT(string1, int3);
            IF_SETOBJECT(52610, int5, 88015027);
            break;
        }
        default: {
            return;
        }
    };
    var int6 = 0;
    if ((int4 == 1)) {
        int6 = 1;
    };
    IF_CLEAROPS(int2);
    IF_SETENABLED(int6, int2);
    IF_SETOP(1, IF_GETTEXT(int2), int2);
    script16248(string0, int3, -1);
    script16247(int2, -1);
    var int7 = script6431();
    if (((((int7 == 1) && (int6 == 0)) || (int7 == 0)) && (STRING_LENGTH(string0) > 0))) {
        script3536(string0, int2, -1);
    };
    return;
}