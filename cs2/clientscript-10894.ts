//
function script10894(int0: number, int1: number): void {
    if ((int0 == 13)) {
        script675();
        return;
    };
    var int2 = 0;
    if ((IF_FIND(comp(720, 3)) == 1)) {  // modal_choice:title
        int2 = cc_getparam(6752);
    };
    if (((int0 == 16) || (int1 == 49))) {
        if ((IF_GETHIDE(comp(720, 4)) == false)) {  // modal_choice:option_1
            script12778(1, int2);
        };
    } else if (((int0 == 17) || (int1 == 50))) {
        if ((IF_GETHIDE(comp(720, 5)) == false)) {  // modal_choice:option_2
            script12778(2, int2);
        };
    } else if (((int0 == 18) || (int1 == 51))) {
        if ((IF_GETHIDE(comp(720, 6)) == false)) {  // modal_choice:option_3
            script12778(3, int2);
        };
    } else if (((int0 == 19) || (int1 == 52))) {
        if ((IF_GETHIDE(comp(720, 7)) == false)) {  // modal_choice:option_4
            script12778(4, int2);
        };
    } else if (((int0 == 20) || (int1 == 53))) {
        if ((IF_GETHIDE(comp(720, 8)) == false)) {  // modal_choice:option_5
            script12778(5, int2);
        };
    } else if (((int0 == 21) || (int1 == 54))) {
        if ((IF_GETHIDE(comp(720, 9)) == false)) {  // modal_choice:option_6
            script12778(6, int2);
        };
    } else if (((int0 == 22) || (int1 == 55))) {
        if ((IF_GETHIDE(comp(720, 10)) == false)) {  // modal_choice:option_7
            script12778(7, int2);
        };
    } else if (((int0 == 23) || (int1 == 56))) {
        if ((IF_GETHIDE(comp(720, 11)) == false)) {  // modal_choice:option_8
            script12778(8, int2);
        };
    } else if (((int0 == 24) || (int1 == 57))) {
        if ((IF_GETHIDE(comp(720, 12)) == false)) {  // modal_choice:option_9
            script12778(9, int2);
        };
    } else if (((int0 == 25) || (int1 == 48))) {
        if ((IF_GETHIDE(comp(720, 13)) == false)) {  // modal_choice:option_10
            script12778(10, int2);
        };
    };
    return;
}