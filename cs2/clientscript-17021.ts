//
function script17021(): void {
    if ((struct_getparam(45877, 9200) == true)) {
        if ((PLAYERMEMBER() == false)) {
            if ((script12477() < 8644)) {
                script16503(58064953, 58064952, 58064954, 14403, 0, -1, 45877);
            } else {
                script16503(58064953, 58064952, 58064954, 17238, 0, -1, 45877);
            };
        } else if ((script12477() < 8644)) {
            script16503(58064953, 58064952, 58064954, 6933, 0, -1, 45877);
        } else {
            script16503(58064953, 58064952, 58064954, 17237, 0, -1, 45877);
        };
    } else if ((script12477() < 8644)) {
        script16503(58064953, 58064952, 58064954, 6933, 0, -1, 45877);
    } else {
        script16503(58064953, 58064952, 58064954, 17237, 0, -1, 45877);
    };
    IF_SETHIDE(true, comp(1253, 80));  // wheel_of_fortune:bonus_feature_counter_layer
    return;
}