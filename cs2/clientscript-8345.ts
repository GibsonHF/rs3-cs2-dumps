//
function script8345(int0: component, int1: unknown_int): [unknown_int, unknown_int] {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    [int4, int5] = script8336(int0);
    var int6 = IF_GETSCROLLWIDTH(int0);
    var int7 = IF_GETSCROLLHEIGHT(int0);
    [int2, int3] = script8346(int6, int7, int4, int5);
    return [int2, int3];
}