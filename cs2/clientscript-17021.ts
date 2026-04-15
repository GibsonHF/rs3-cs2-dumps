//
function script17021(): void {
    if (((struct_getparam(45877, 9200) == true) && (PLAYERMEMBER() == false))) {
        if ((script12477() < 8644)) {
            script16503(comp(886, 57), comp(886, 56), comp(886, 58), 14403 as dbrow, 0, -1 as dbrow, 45877 as struct);
        } else {
            script16503(comp(886, 57), comp(886, 56), comp(886, 58), 17238 as dbrow, 0, -1 as dbrow, 45877 as struct);
        };
    } else if ((script12477() < 8644)) {
        script16503(comp(886, 57), comp(886, 56), comp(886, 58), 6933 as dbrow, 0, -1 as dbrow, 45877 as struct);
    } else {
        script16503(comp(886, 57), comp(886, 56), comp(886, 58), 17237 as dbrow, 0, -1 as dbrow, 45877 as struct);
    };
    IF_SETHIDE(true, comp(1253, 80));
    return;
}