//[proc,worldmap_elements_chooseposition]
function script296(int0: coordgrid, int1: unknown_int, int2: component, int3: int, int4: int, int5: int, int6: int): [int, int] {
    var int7 = 0;
    var int8 = 0;
    if ((int1 == 1)) {
        int7 = COORDX(int0);
        int8 = COORDZ(int0);
    } else {
        [int7, int8] = WORLDMAP_GETDISPLAYCOORD(int0);
    };
    if ((HAS_HTML5() == 1)) {
        int7 = (int7 * 512);
        int8 = (int8 * 512);
    };
    var int9 = IF_GETWIDTH(int2);
    var int10 = IF_GETHEIGHT(int2);
    int7 = SCALE(int9, (int5 - int6), (int7 - int6));
    int8 = SCALE(int10, (int3 - int4), (int8 - int4));
    int7 = (int7 - (int9 / 2));
    int8 = ((int10 / 2) - int8);
    return [int7, int8];
}