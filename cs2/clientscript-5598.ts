//
function script5598(int0: component): void {
    var int1 = script284(COORD());
    switch (varclient_1749) {
        case 1: {
            script2768(75, int0);
            script5602(int1);
            CAM_MOVEALONG(0, 0, 1000, 0, 1, 0);
            break;
        }
        case 2: {
            script5602(int1);
            CAM_MOVEALONG(0, 1, 2000, 2000, 1, 1);
            IF_SETONCAMFINISHED(callback(script5599, -2147483645, 2, 2000, 2000), int0);
            break;
        }
        case 3: {
            script2768(75, int0);
            script5603(int1);
            CAM_MOVEALONG(0, 0, 800, 800, 1, 0);
            IF_SETONCAMFINISHED(callback(script5600, -2147483645, 1, 800, 800), int0);
            break;
        }
        case 4: {
            script5603(int1);
            CAM_MOVEALONG(0, 3, 800, 800, 1, 3);
            IF_SETONCAMFINISHED(callback(script5601, -2147483645, 4, 800, 800), int0);
            break;
        }
    };
    return;
}