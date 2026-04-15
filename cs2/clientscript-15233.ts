//
function script15233(int0: int): void {
    var int1 = 15193 as cs2enum;
    switch (CLIENTOPTION_GET(34)) {
        case 1: {
            int1 = 15206 as cs2enum;
            break;
        }
        case 2: {
            int1 = 15207 as cs2enum;
            break;
        }
        case 3: {
            int1 = 15208 as cs2enum;
            break;
        }
    };
    var string0 = enum_getvalue(0, 36, int1, int0);
    if ((script6431() == false)) {
    } else if ((((script6431() == true) && (enum_hasoutput(0, 16287 as cs2enum, int0) == 1)) && (STRING_LENGTH(string0) > 0))) {
        OPENURLRAW(string0, 0);
    };
    return;
}