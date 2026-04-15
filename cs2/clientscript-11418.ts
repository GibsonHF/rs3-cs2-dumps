//
function script11418(): void {
    if (((varplayer_722 > 0) || (varbitplayer_30946 == 1))) {
        script10624(14899 as struct, 1);
        script10624(14900 as struct, 0);
    } else if ((varplayer_722 < 0)) {
        script10624(14899 as struct, 0);
        script10624(14900 as struct, 1);
    } else {
        script10624(14899 as struct, 0);
        script10624(14900 as struct, 0);
    };
    return;
}