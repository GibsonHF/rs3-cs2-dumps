//
function script11663(): void {
    var int0 = comp(1562, 31);
    var int1 = comp(1562, 42);
    var int2 = comp(1562, 43);
    var int3 = comp(1562, 15);
    var int4 = comp(1562, 16);
    var int5 = comp(1562, 44);
    var int6 = comp(1562, 18);
    CC_DELETEALL(int2);
    var int7 = -1;
    var int8 = (varclient_4968 + varclient_4969);
    if ((int7 != -1)) {
        script10812(int2, int6, 25772 as graphic, 25773 as graphic, 34, 35, "Bonds", int7, int8, 2);
        IF_SETHIDE(true, int5);
        if ((int8 < int7)) {
            IF_SETHIDE(false, int4);
            IF_SETHIDE(true, int3);
        } else {
            IF_SETHIDE(true, int4);
            IF_SETHIDE(false, int3);
        };
        script7794(int1, 21361 as struct);
        IF_SETHIDE(false, int0);
        IF_SETONVARCTRANSMIT(callback(script11662, 4968, 4969, 2), int0);
    } else {
        IF_SETHIDE(true, int0);
        IF_SETONVARCTRANSMIT(callback(), int0);
    };
    return;
}