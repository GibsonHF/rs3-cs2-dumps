//
function script18848(int0: number, int1: number): [number, number] {
    var int2 = script15113();
    var int3 = 0;
    var int4 = 0;
    if (((script18920(int0, 25) == 1) || (enum_hasoutput(0, 17013 as cs2enum, int1) == 1))) {
        int3 = 1;
    };
    if ((int3 == 0)) {
        int4 = 1;
    } else if ((((int3 == 1) && (script18920(int0, 0) <= int2)) && (script18920(int0, 1) >= int2))) {
        int4 = 1;
    };
    return [int4, int3];
}