//
function script5619(int0: unknown_int): void {
    var int1 = comp(-1, 65535);
    var int2 = -1;
    switch (int0) {
        case 0: {
            int1 = comp(1199, 7);
            int2 = 78577672;
            break;
        }
        case 2: {
            int1 = comp(1199, 5);
            int2 = 78577670;
            break;
        }
        case 4: {
            int1 = comp(1199, 1);
            int2 = 78577666;
            break;
        }
        case 5: {
            int1 = comp(1199, 9);
            int2 = 78577674;
            break;
        }
        case 6: {
            int1 = comp(1199, 3);
            int2 = 78577668;
            break;
        }
        case 7: {
            int1 = comp(1199, 11);
            int2 = 78577676;
            break;
        }
    };
    IF_SETONTIMER(callback(script5620, int1, int2), int1);
    return;
}