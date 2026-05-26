//
function script2903(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    if ((varclient_1087 == int8)) {
        varclient_1087 = 0;
        IF_SETHIDE(1, int0);
        IF_SETHIDE(1, int1);
    } else {
        varclient_1087 = int8;
        IF_SETHIDE(0, int0);
        IF_SETHIDE(0, int1);
    };
    IF_SETHIDE(1, int2);
    IF_SETHIDE(1, int3);
    IF_SETHIDE(1, int4);
    IF_SETHIDE(1, int5);
    IF_SETHIDE(1, int6);
    IF_SETHIDE(1, int7);
    return;
}