//
function script2903(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    if ((varclient_1087 == int8)) {
        varclient_1087 = 0;
        IF_SETHIDE(true, int0);
        IF_SETHIDE(true, int1);
    } else {
        varclient_1087 = int8;
        IF_SETHIDE(false, int0);
        IF_SETHIDE(false, int1);
    };
    IF_SETHIDE(true, int2);
    IF_SETHIDE(true, int3);
    IF_SETHIDE(true, int4);
    IF_SETHIDE(true, int5);
    IF_SETHIDE(true, int6);
    IF_SETHIDE(true, int7);
    return;
}