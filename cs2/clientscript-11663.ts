//
function script11663(): void {
    var int0 = 102367263;
    var int1 = 102367274;
    var int2 = 102367275;
    var int3 = 102367247;
    var int4 = 102367248;
    var int5 = 102367276;
    var int6 = 102367250;
    CC_DELETEALL(int2);
    var int7 = -1;
    var int8 = (varclient_4968 + varclient_4969);
    if ((int7 != -1)) {
        script10812(int2, int6, 25772, 25773, 34, 35, "Bonds", int7, int8, 2);
        IF_SETHIDE(1, int5);
        if ((int8 < int7)) {
            IF_SETHIDE(0, int4);
            IF_SETHIDE(1, int3);
        } else {
            IF_SETHIDE(1, int4);
            IF_SETHIDE(0, int3);
        };
        script7794(int1, 21361);
        IF_SETHIDE(0, int0);
        IF_SETONVARCTRANSMIT(callback(script11662, 4968, 4969, 2), int0);
    } else {
        IF_SETHIDE(1, int0);
        IF_SETONVARCTRANSMIT(callback(), int0);
    };
    return;
}