//
function script1197(int0: int): void {
    if ((int0 >= 6)) {
        return;
    };
    if ((int0 == 0)) {
        CAM_MOVEALONG(0, int0, 100, 400, 1, int0);
        IF_SETONCAMFINISHED(callback(script1196, (int0 + 1), CLIENTCLOCK()), comp(888, 0));
    } else if ((int0 == 5)) {
        CAM_MOVEALONG(0, int0, 400, 10, 1, int0);
        IF_SETONCAMFINISHED(callback(script1196, (int0 + 1), CLIENTCLOCK()), comp(888, 0));
    } else {
        CAM_MOVEALONG(0, int0, 400, 400, 1, int0);
        IF_SETONCAMFINISHED(callback(script1196, (int0 + 1), CLIENTCLOCK()), comp(888, 0));
    };
    return;
}