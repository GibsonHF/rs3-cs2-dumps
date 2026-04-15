//
function script12401(int0: dbrow): int {
    var int1 = 0;
    if ((dbrow_getfield(int0, 495696, 0) != -1 as dbrow)) {
        int1 = (int1 + 1);
    };
    if ((dbrow_getfield(int0, 495712, 0) != -1 as dbrow)) {
        int1 = (int1 + 1);
    };
    if ((dbrow_getfield(int0, 495728, 0) != -1 as dbrow)) {
        int1 = (int1 + 1);
    };
    if ((dbrow_getfield(int0, 495744, 0) != -1 as dbrow)) {
        int1 = (int1 + 1);
    };
    return int1;
}