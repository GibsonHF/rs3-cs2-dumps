//
function script747(int0: number, int1: number): void {
    var int2 = IF_GETTRANS(1114122);
    var int3 = 1114122;
    var int4 = 1114113;
    if ((int1 == 0)) {
        int2 = IF_GETTRANS(106823897);
        int3 = 106823897;
        int4 = 106823888;
    };
    if ((int2 != int0)) {
        if ((int2 > int0)) {
            IF_SETTRANS(MAX(0, (int2 - 5)), int3);
        } else {
            IF_SETTRANS(MIN(255, (int2 + 5)), int3);
        };
    } else {
        IF_SETONTIMER(callback(), int4);
    };
    return;
}