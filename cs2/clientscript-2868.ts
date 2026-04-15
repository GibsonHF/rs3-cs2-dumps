//
function script2868(int0: coordgrid, int1: coordgrid, int2: coordgrid): unknown_int {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    int3 = COORDX(int1);
    int4 = COORDX(int2);
    int5 = COORDZ(int1);
    int6 = COORDZ(int2);
    int8 = COORDX(int0);
    int7 = COORDZ(int0);
    if (((((int8 <= int4) && (int8 >= int3)) && (int7 <= int6)) && (int7 >= int5))) {
        return 1;
    };
    return 0;
}