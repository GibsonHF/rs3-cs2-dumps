//
function script15567(int0: component, int1: component, int2: int, int3: unknown_int): void {
    if ((((int2 != 0) && (int2 >= IF_GETX(int1))) && (int2 <= (IF_GETX(int1) + IF_GETWIDTH(int1))))) {
        return;
    };
    var int4 = (IF_GETWIDTH(int0) - IF_GETWIDTH(int1));
    var int5 = (IF_GETWIDTH(int1) / 2);
    if ((int2 == -1)) {
        var int2 = IF_GETWIDTH(int0);
    };
    int2 = MAX((int2 - int5), 0);
    int2 = MIN(int2, int4);
    switch (int3) {
        case 23: {
            CLIENTOPTION_SET(23, SCALE(int2, int4, 255));
            IF_SETDRAGGABLE(int0, -1, int1);
            IF_SETPOSITION(SCALE(CLIENTOPTION_GET(23), 255, int4), 0, 0, 0, int1);
            script15571(CLIENTOPTION_GET(23));
            break;
        }
    };
    return;
}