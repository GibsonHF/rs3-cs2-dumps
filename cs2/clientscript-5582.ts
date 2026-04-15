//
function script5582(int0: component, int1: component, int2: component): void {
    var int3 = 240;
    if ((STRING_LENGTH(IF_GETTEXT(int1)) > 0)) {
        int3 = (PARAWIDTH(IF_GETTEXT(int1), 500, 26 as fontmetrics) + 80);
        if ((int3 > IF_GETWIDTH(int0))) {
            IF_SETSIZE(int3, 18, 0, 0, comp(1193, 4));
            IF_SETSIZE(int3, 18, 0, 0, comp(1193, 11));
            IF_SETSIZE(int3, 18, 0, 0, comp(1193, 18));
            IF_SETSIZE(int3, 18, 0, 0, comp(1193, 19));
        };
        script4481(int1);
        script4481(int2);
        IF_SETONTIMER(callback(), int0);
    };
    return;
}