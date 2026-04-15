//
function script2846(int0: component): void {
    CC_DELETEALL(int0);
    var int1 = 308;
    var int2 = 55;
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(903 as cs2enum);
    while ((int3 < int4)) {
        CC_CREATE(int0, 6, int3);
        CC_SETSIZE(50, 50, 0, 0);
        CC_SETPOSITION(int1, int2, 0, 0);
        CC_SETMODEL(enum_getvalue(0, 31, 903 as cs2enum, int3));
        CC_SETMODELANGLE(0, 0, 512, 0, 0, 2750);
        CC_SETONDRAGCOMPLETE(callback(script2848, -2147483645, -2147483643, -2147483642, -2147483641, -2147483647, -2147483646));
        CC_SETDRAGRENDERBEHAVIOUR(2);
        CC_SETDRAGDEADZONE(14);
        CC_SETOP(1, "Select");
        if ((++int3 == 3)) {
            int1 = (308 + 48);
            int2 = 55;
        } else if ((int3 == 6)) {
            int1 = (308 + 96);
            int2 = 55;
        } else {
            int2 = (48 + int2);
        };
    };
    int1 = 113;
    int2 = 83;
    int4 = ENUM_GETOUTPUTCOUNT(904 as cs2enum);
    int4 = (int4 + int3);
    var int5 = 0;
    while ((int3 < int4)) {
        CC_CREATE(int0, 3, int3);
        CC_SETSIZE(50, 50, 0, 0);
        CC_SETPOSITION(int1, int2, 0, 0);
        CC_SETTRANS(255);
        int3 = (int3 + 1);
        if ((++int5 == 3)) {
            int1 = 113;
            int2 = (83 + 52);
        } else if ((int5 == 6)) {
            int1 = 113;
            int2 = (83 + 104);
        } else {
            int1 = (50 + int1);
        };
    };
    script2847(int0);
    return;
}