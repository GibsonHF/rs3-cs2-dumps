//
function script6706(int0: component, int1: component, int2: component, int3: component, int4: component, int5: int): void {
    var int6 = 15;
    var int7 = 7;
    var int8 = 1;
    var int9 = script6955();
    if ((int5 > int9)) {
        script6707(int5, int5, int0, int1, int2, comp(-1, 65535), int6, int7, 0);
        int7 = (int7 + 85);
        int8 = (int8 + 1);
    } else {
        while ((int8 <= int9)) {
            script6707(int8, int5, int0, int1, int2, int3, int6, int7, (int8 - 1));
            int7 = (int7 + 85);
            int8 = (int8 + 1);
        };
    };
    IF_SETSCROLLSIZE(0, int7, int1);
    script7791(int4, int1);
    return;
}