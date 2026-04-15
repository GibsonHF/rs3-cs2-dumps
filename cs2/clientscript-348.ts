//[clientscript,cws_setup]
function script348(int0: component, int1: unknown_int, int2: int): void {
    var int3 = script12835(int2);
    var int4 = 941;
    if ((int3 >= 7)) {
        IF_SETHIDE(false, int0);
        stack(942);
        stack(int1);
        IF_SETGRAPHIC();
        IF_SETONCLICK(callback(script44, int1, int4), int0);
    } else if ((int3 == 6)) {
        IF_SETHIDE(false, int0);
        stack(941);
        stack(int1);
        IF_SETGRAPHIC();
        int4 = 942;
        IF_SETONCLICK(callback(script44, int1, int4), int0);
    } else {
        IF_SETHIDE(true, int0);
        IF_SETONCLICK(callback(), int0);
    };
    return;
}