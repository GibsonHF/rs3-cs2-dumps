//
function script6790(int0: int, int1: int): void {
    if (((int1 > int0) || (int1 >= script5796()))) {
        var int1 = (int1 - 1);
    };
    var int2 = script14372(int0);
    var int3 = script14372(int1);
    if (((((int2 == int3) || (int0 == 0)) || (int1 == 0)) || (script5799(int2) == 0))) {
        return;
    };
    var int4 = 0;
    if ((int0 > int1)) {
        int4 = 1;
    };
    var int5 = int2;
    var int6 = int0;
    var int7 = 0;
    while ((int6 != int1)) {
        int7 = script6791(int4, int6);
        script14373(int6, script14372(int7));
        int6 = int7;
    };
    script14373(int1, int5);
    return;
}