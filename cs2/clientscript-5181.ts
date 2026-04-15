//
function script5181(int0: component, int1: int, int2: struct, int3: boolean, int4: int): void {
    var int5 = script5178(int2);
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETONTIMER(callback());
        switch (int0) {
            case 21233694:
            case 21233712: {
                script18941(int5, struct_getparam(int2, 7517), int3, int4);
                return;
            }
        };
        switch (int5) {
            case 10322:
            case 15425: {
                script5182(int2, int5, struct_getparam(int2, 7517), int3, int4);
                break;
            }
            case 13443:
            case 15423:
            case 15424: {
                script5197(int5, struct_getparam(int2, 7517), int3, int4);
                break;
            }
            default: {
                script7909(script12585(int3), int5, struct_getparam(int2, 7517), int4);
                break;
            }
        };
    };
    return;
}