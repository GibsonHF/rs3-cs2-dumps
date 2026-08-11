//
function script5582(int0: number, int1: number, int2: number): void {
    var int3 = 240;
    if ((STRING_LENGTH(IF_GETTEXT(int1)) > 0)) {
        int3 = (PARAWIDTH(IF_GETTEXT(int1), 500, 26 as fontmetrics) + 80);
        if ((int3 > IF_GETWIDTH(int0))) {
            IF_SETSIZE(int3, 18, 0, 0, comp(1193, 4));  // choice_v2_frem:option_1
            IF_SETSIZE(int3, 18, 0, 0, comp(1193, 11));  // choice_v2_frem:option_2
            IF_SETSIZE(int3, 18, 0, 0, comp(1193, 18));  // choice_v2_frem:option_3
            IF_SETSIZE(int3, 18, 0, 0, comp(1193, 19));  // choice_v2_frem:option_4
        };
        script4481(int1);
        script4481(int2);
        IF_SETONTIMER(callback(), int0);
    };
    return;
}