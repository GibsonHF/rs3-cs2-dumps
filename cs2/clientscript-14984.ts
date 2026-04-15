//
function script14984(int0: component, int1: int, int2: int, int3: int): void {
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    if ((int1 == -1)) {
        int4 = script8407(int0);
        int5 = script8408(int0);
    } else {
        [int4, int5] = script8406(int0, int1);
    };
    if ((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
        int4 = ((int4 - (int2 / 2)) + (CC_GETWIDTH() / 2));
        int5 = (int5 - int3);
        int6 = 1;
    };
    var int7 = script10074();
    var int8 = script15709(1);
    var int9 = IF_GETWIDTH(int7);
    var int10 = IF_GETHEIGHT(int7);
    var int11 = 0;
    var int12 = 0;
    if ((varclient_6403 != 0)) {
        [int11, int12, int9, int10] = script14244();
    };
    int4 = MAX(int11, MIN(int4, (int9 - int2)));
    int5 = MAX(int12, MIN(int5, (int10 - int3)));
    if ((IF_FIND(int8) == 1)) {
        if ((int6 == 1)) {
            IF_SETPOSITION(int4, int5, 0, 0, int8);
        } else {
            IF_SETPOSITION(0, 0, 1, 1, int8);
        };
    };
    return;
}