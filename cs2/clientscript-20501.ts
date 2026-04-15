//
function script20501(int0: int): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    [int1, int2, int3, int4, int5, int6, int7, int8, int9, int10, int12, int13] = script8546(int0);
    int11 = script9909();
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    [int14, int15, int16, int17, int18, int19, int20, int21, int22, int23, int24] = script8547(int0);
    var int25 = script19316();
    script20504(21279 as struct);
    script8707(18);
    var int26 = (28 + 4);
    IF_SETPOSITION(4, int26, 0, 2, comp(137, 55));
    IF_SETSIZE(8, int26, 1, 1, comp(137, 55));
    IF_SETSIZE(0, 28, 1, 0, comp(137, 208));
    IF_SETPOSITION(0, 0, 0, 2, comp(137, 208));
    IF_SETHIDE(true, comp(137, 56));
    IF_SETHIDE(true, comp(137, 66));
    IF_SETHIDE(false, comp(137, 208));
    IF_SETPOSITION(4, int26, 0, 2, comp(137, 3));
    IF_SETSIZE(8, int26, 1, 1, comp(137, 3));
    if ((int0 == 18)) {
        script13531(0, int1, int14, int25);
        script13531(1, int4, int17, int25);
        script13531(2, int5, int18, int25);
        script13531(3, int6, int19, int25);
        script13531(4, int7, int20, int25);
        script13531(5, int8, int20, int25);
        script13531(15, int12, int23, int25);
        script13531(16, int13, int24, int25);
        script13531(6, int2, int15, int25);
        script13531(99, int11, 0, int25);
    };
    var int27 = 0;
    var int28 = 0;
    var int29 = -1;
    if ((varbitplayer_27169 == 1)) {
        if ((int25 == true)) {
            int27 = 4;
        } else {
            int27 = 6;
        };
        int28 = (22 - int27);
    };
    if ((int25 == true)) {
        stack(23635);
        stack(8978689);
        IF_SETGRAPHIC();
        IF_SETHIDE(1, 8978690);
        IF_SETSIZE((36 + int27), 0, 0, 1, 8978686);
        IF_SETPOSITION((494 + int28), 0, 0, 0, 8978686);
        int29 = 23636;
        IF_SETONMOUSEOVER(callback(script44, 8978689, int29), 8978686);
        int29 = 23635;
        IF_SETONMOUSELEAVE(callback(script44, 8978689, int29), 8978686);
    } else {
        stack(-1);
        stack(8978689);
        IF_SETGRAPHIC();
        IF_SETHIDE(0, 8978690);
        IF_SETSIZE((55 + int27), 0, 0, 1, 8978686);
        IF_SETPOSITION((475 + int28), 0, 0, 0, 8978686);
        IF_SETONMOUSEOVER(callback(), 8978686);
        IF_SETONMOUSELEAVE(callback(), 8978686);
    };
    return;
}