//
function script7943(int0: number): void {
    if ((int0 == 1)) {
        IF_SETONKEY(callback(script10815, -2147483640), comp(475, 6));  // machinima_livecamera:keylistener_layer
        switch (MAP_LANG()) {
            case 2: {
                script8844(1, 35, 8, 31129606, -1);
                script8844(2, 50, 8, 31129606, -1);
                script8844(3, 51, 8, 31129606, -1);
                script8844(4, 52, 8, 31129606, -1);
                script8844(5, 36, 8, 31129606, -1);
                script8844(6, 34, 8, 31129606, -1);
                break;
            }
            default: {
                script8844(1, 33, 8, 31129606, -1);
                script8844(2, 48, 8, 31129606, -1);
                script8844(3, 49, 8, 31129606, -1);
                script8844(4, 50, 8, 31129606, -1);
                script8844(5, 35, 8, 31129606, -1);
                script8844(6, 51, 8, 31129606, -1);
                break;
            }
        };
        script8844(7, 96, 8, 31129606, -1);
        script8844(8, 97, 8, 31129606, -1);
        script8844(9, 98, 8, 31129606, -1);
        script8844(10, 99, 8, 31129606, -1);
        IF_SETOPKEYRATE(1, 1, 1, 31129606);
        IF_SETOPKEYRATE(2, 1, 1, 31129606);
        IF_SETOPKEYRATE(3, 1, 1, 31129606);
        IF_SETOPKEYRATE(4, 1, 1, 31129606);
        IF_SETOPKEYRATE(5, 1, 1, 31129606);
        IF_SETOPKEYRATE(6, 1, 1, 31129606);
        IF_SETOPKEYRATE(7, 1, 1, 31129606);
        IF_SETOPKEYRATE(8, 1, 1, 31129606);
        IF_SETOPKEYRATE(9, 1, 1, 31129606);
        IF_SETOPKEYRATE(10, 1, 1, 31129606);
        IF_SETONOP(callback(script10816, -2147483644), comp(475, 6));  // machinima_livecamera:keylistener_layer
        IF_SETONMOUSEREPEAT(callback(script10817, -2147483647, -2147483646, 0, 0), comp(475, 7));  // machinima_livecamera:mouselistener
        IF_SETONSCROLLWHEEL(callback(script3011, -2147483646), comp(475, 7));  // machinima_livecamera:mouselistener
    } else {
        IF_SETOPKEY(1, 0, 0, comp(475, 6));  // machinima_livecamera:keylistener_layer
        IF_SETOPKEY(2, 0, 0, comp(475, 6));  // machinima_livecamera:keylistener_layer
        IF_SETOPKEY(3, 0, 0, comp(475, 6));  // machinima_livecamera:keylistener_layer
        IF_SETOPKEY(4, 0, 0, comp(475, 6));  // machinima_livecamera:keylistener_layer
        IF_SETOPKEY(5, 0, 0, comp(475, 6));  // machinima_livecamera:keylistener_layer
        IF_SETOPKEY(6, 0, 0, comp(475, 6));  // machinima_livecamera:keylistener_layer
        IF_SETOPKEY(7, 0, 0, comp(475, 6));  // machinima_livecamera:keylistener_layer
        IF_SETOPKEY(8, 0, 0, comp(475, 6));  // machinima_livecamera:keylistener_layer
        IF_SETOPKEY(9, 0, 0, comp(475, 6));  // machinima_livecamera:keylistener_layer
        IF_SETOPKEY(10, 0, 0, comp(475, 6));  // machinima_livecamera:keylistener_layer
        IF_SETONKEY(callback(), comp(475, 6));  // machinima_livecamera:keylistener_layer
        IF_SETONOP(callback(), comp(475, 6));  // machinima_livecamera:keylistener_layer
        IF_SETONMOUSEREPEAT(callback(), comp(475, 7));  // machinima_livecamera:mouselistener
        IF_SETONSCROLLWHEEL(callback(), comp(475, 7));  // machinima_livecamera:mouselistener
    };
    return;
}