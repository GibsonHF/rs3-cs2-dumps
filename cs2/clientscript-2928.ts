//
function script2928(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    IF_SETHIDE(1, 96796726);
    if ((script6431() == 1)) {
        IF_SETPOSITION(5, 5, 0, 0, 96796732);
        IF_SETSIZE(10, 10, 1, 1, 96796732);
        IF_SETPOSITION(5, 5, 0, 0, 96797237);
        IF_SETSIZE(10, 10, 1, 1, 96797237);
        IF_SETPOSITION(5, 5, 0, 0, 18087944);
        IF_SETSIZE(10, 10, 1, 1, 18087944);
        IF_SETPOSITION(5, 5, 0, 0, 96797369);
        IF_SETSIZE(10, 10, 1, 1, 96797369);
        IF_SETHIDE(0, 96796726);
        [int0, int1, int2, int3] = script2956();
        IF_SETSIZE(int0, 0, 0, 1, 96796727);
        IF_SETSIZE(int2, 0, 0, 1, 96796729);
        IF_SETSIZE(0, int1, 1, 0, 96796730);
        IF_SETSIZE(0, int3, 1, 0, 96796731);
        script9538();
        script15547(int0, int1, int2, int3);
    };
    return;
}