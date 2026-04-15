//
function script2840(): void {
    varclient_1068 = (varclient_1068 + 1);
    switch (varclient_1068) {
        case 1: {
            IF_SETONCAMFINISHED(callback(script2840), comp(384, 0));
            CAM_MOVEALONG(0, varclient_1068, 400, 0, 1, varclient_1068);
            break;
        }
        case 2: {
            IF_SETONCAMFINISHED(callback(), comp(384, 0));
            break;
        }
        case 3: {
            IF_SETONCAMFINISHED(callback(script2840), comp(384, 0));
            CAM_MOVEALONG(0, varclient_1068, 650, 700, 1, varclient_1068);
            break;
        }
        case 5: {
            IF_SETONCAMFINISHED(callback(), comp(384, 0));
            break;
        }
        default: {
            IF_SETONCAMFINISHED(callback(script2840), comp(384, 0));
            CAM_MOVEALONG(0, varclient_1068, 400, 400, 1, varclient_1068);
            break;
        }
    };
    return;
}