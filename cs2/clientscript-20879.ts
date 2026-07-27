//
function script20879(int0: number, int1: number): string {
    if ((((int0 <= 0) || (int1 <= 0)) || (int1 <= int0))) {
        return "";
    };
    var int2 = (int1 - int0);
    var int3 = (CLIENTCLOCK() - int0);
    var int4 = ((int2 - int3) / 50);
    var int5 = MODULO(int4, 60);
    int4 = (int4 / 60);
    var int6 = (int4 / 1440);
    var int7 = (MODULO(int4, 1440) / 60);
    var int8 = MODULO(int4, 60);
    return script3382(int6, int7, int8, int5, 5, 1);
}