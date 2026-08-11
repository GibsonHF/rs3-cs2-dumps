//
function script11663(): void {
    var int0 = comp(1562, 31);  // mtxmgt_purchase:bonds_layer
    var int1 = 102367274;
    var int2 = comp(1562, 43);  // mtxmgt_purchase:bonds_content_layer
    var int3 = comp(1562, 15);  // mtxmgt_purchase:bonds_button_layer
    var int4 = comp(1562, 16);  // mtxmgt_purchase:buy_bonds_button_layer
    var int5 = comp(1562, 44);  // mtxmgt_purchase:ge_bonds_button_layer
    var int6 = 102367250;
    CC_DELETEALL(int2);
    var int7 = -1;
    var int8 = (varclient_4968 + varclient_4969);
    if ((int7 != -1)) {
        script10812(int2, int6, 25772, 25773, 34, 35, "Bonds", int7, int8, 2);
        IF_SETHIDE(true, int5);
        if ((int8 < int7)) {
            IF_SETHIDE(false, int4);
            IF_SETHIDE(true, int3);
        } else {
            IF_SETHIDE(true, int4);
            IF_SETHIDE(false, int3);
        };
        script7794(int1, 21361);
        IF_SETHIDE(false, int0);
        IF_SETONVARCTRANSMIT(callback(script11662, 4968, 4969, 2), int0);
    } else {
        IF_SETHIDE(true, int0);
        IF_SETONVARCTRANSMIT(callback(), int0);
    };
    return;
}