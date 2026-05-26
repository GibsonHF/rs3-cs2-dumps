//
function script5619(int0: number): void {
    var int1 = -1;
    var int2 = -1;
    switch (int0) {
        case 0: {
            int1 = 78577671;
            int2 = 78577672;
            break;
        }
        case 2: {
            int1 = 78577669;
            int2 = 78577670;
            break;
        }
        case 4: {
            int1 = 78577665;
            int2 = 78577666;
            break;
        }
        case 5: {
            int1 = 78577673;
            int2 = 78577674;
            break;
        }
        case 6: {
            int1 = 78577667;
            int2 = 78577668;
            break;
        }
        case 7: {
            int1 = 78577675;
            int2 = 78577676;
            break;
        }
    };
    IF_SETONTIMER(callback(script5620, int1, int2), int1);
    return;
}