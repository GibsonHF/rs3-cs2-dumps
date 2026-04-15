//
function script5047(int0: int, int1: int, int2: int, int3: int, int4: int): void {
    var int5 = (int0 * ((112 + 2) + 2));
    IF_SETSCROLLSIZE(int5, int5, comp(1111, 12));
    var int6 = (int5 - IF_GETWIDTH(comp(1111, 12)));
    if ((IF_GETSCROLLX(comp(1111, 12)) > int6)) {
        IF_SETSCROLLPOS(int6, IF_GETSCROLLY(comp(1111, 12)), comp(1111, 12));
    };
    if ((IF_GETSCROLLY(comp(1111, 12)) > int6)) {
        IF_SETSCROLLPOS(IF_GETSCROLLX(comp(1111, 12)), int6, comp(1111, 12));
    };
    IF_SETSIZE(int5, int5, 0, 0, comp(1111, 13));
    IF_SETSIZE(int5, int5, 0, 0, comp(1111, 15));
    var int7 = 0;
    var int8 = (int0 - 1);
    var int9 = 0;
    var int10 = int1;
    while ((int10 < int2)) {
        int9 = (int5 - (((int10 + 2) + 1) * int0));
        while ((int7 < 112)) {
            if ((CC_FIND(comp(1111, 13), ((int10 * 112) + int7)) == 1)) {
                CC_SETSIZE(int8, int8, 0, 0);
                CC_SETPOSITION(((int7 + 2) * int0), int9, 0, 0);
                CC_SETDRAGDEADZONE((int0 / 2));
            };
            int7 = (int7 + 1);
        };
        int7 = 0;
        int10 = (int10 + 1);
    };
    if ((int1 <= 0)) {
        script5053(int3, int4);
        int9 = ((int0 * 2) - 3);
        IF_SETPOSITION(int9, int9, 0, 0, comp(1111, 14));
        int9 = ((int0 * 112) + 5);
        IF_SETSIZE(int9, int9, 0, 0, comp(1111, 14));
    };
    return;
}