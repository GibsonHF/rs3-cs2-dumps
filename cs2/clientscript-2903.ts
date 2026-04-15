//
function script2903(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component, int7: component, int8: int): void {
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