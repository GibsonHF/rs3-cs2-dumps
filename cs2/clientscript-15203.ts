//
function script15203(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = 0;
    var int6 = 30;
    var int7 = 0;
    var int8 = (IF_GETWIDTH(comp(622, 18)) - 2);
    var int9 = (IF_GETWIDTH(comp(622, 20)) - 2);
    var int10 = 7;
    var int11 = 0;
    var int12 = 0;
    if ((CC_FIND(comp(622, 17), int4) == 1)) {
        CC_SETTEXT(script15204(int0, int1, int2));
        int7 = (CC_GETY() - int10);
        if ((int1 != 33)) {
            int11 = 1;
        };
        if (((((((((int1 == 34) || (int1 == 32)) || (int1 == 16)) || (int1 == 4)) || (int1 == 5)) || (int3 == 2)) || (int3 == 3)) || (script15205(int0) == 0))) {
            int12 = 1;
        };
        script10410(40763410, 40763411, 28556, 0, int7, int8, int6, int4, int11, "Cure");
        script10410(40763412, 40763413, 28556, 0, int7, int9, int6, int4, int12, "Fertilise");
    };
    return;
}