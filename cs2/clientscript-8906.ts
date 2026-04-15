//
function script8906(int0: unknown_int, int1: int): void {
    var int2 = script14372(int1);
    if ((script5799(int2) <= 0)) {
        return;
    };
    switch (int0) {
        case 1: {
            if ((varclient_6684 == true)) {
                script13909();
                if ((varbitplayer_45141 == int2)) {
                    script9324(1);
                };
            };
            if ((varbitplayer_45141 == int2)) {
                script14370(varbitplayer_45141, 0);
                script157(comp(517, 195), comp(517, 199), 0, 1);
                script9511(1);
            } else {
                varbitplayer_45141 = int2;
                varclient_6683 = 50;
                if ((varplayer_8970 != -1)) {
                    script14355();
                };
                IF_SETHIDE(true, comp(517, 218));
                script10239();
                script9324(1);
                script9511(1);
            };
            break;
        }
        case 2: {
            if ((int1 == 1)) {
                script13352();
                IF_SETHIDE(true, comp(517, 218));
            } else {
                IF_SETONCLICK(callback(script8910, int1, int2), comp(517, 328));
            };
            break;
        }
        case 3: {
            if ((int1 != 1)) {
                script8907(int2);
            };
            break;
        }
    };
    return;
}