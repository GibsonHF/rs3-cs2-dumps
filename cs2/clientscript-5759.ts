//
function script5759(int0: dbrow): unknown_int {
    if ((script3825() == 1)) {
        return 0;
    };
    var int1 = script6431();
    if ((((int1 == false) && (dbrow_getfield(int0, 409616, 0) == 1)) || ((int1 == true) && (dbrow_getfield(int0, 409616, 0) == 2)))) {
        return 0;
    };
    if ((script17033(int0) == 0)) {
        return 0;
    };
    return 1;
}