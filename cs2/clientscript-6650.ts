//
function script6650(): void {
    var int0 = 12305;
    var int1 = 12305;
    var int2 = 12305;
    var int3 = 12305;
    var int4 = 12305;
    var int5 = 12305;
    var int6 = 12305;
    var int7 = 12305;
    var int8 = 12305;
    switch (varbitplayer_8725) {
        case 2: {
            int0 = 12303;
            break;
        }
        case 5: {
            int0 = 12304;
            break;
        }
        case 3: {
            int0 = 12306;
            break;
        }
        case 4: {
            int0 = 12307;
            break;
        }
    };
    switch (varbitplayer_8726) {
        case 2: {
            int1 = 12303;
            break;
        }
        case 5: {
            int1 = 12304;
            break;
        }
        case 3: {
            int1 = 12306;
            break;
        }
        case 4: {
            int1 = 12307;
            break;
        }
    };
    switch (varbitplayer_8727) {
        case 2: {
            int2 = 12303;
            break;
        }
        case 5: {
            int2 = 12304;
            break;
        }
        case 3: {
            int2 = 12306;
            break;
        }
        case 4: {
            int2 = 12307;
            break;
        }
    };
    switch (varbitplayer_8728) {
        case 2: {
            int3 = 12303;
            break;
        }
        case 5: {
            int3 = 12304;
            break;
        }
        case 3: {
            int3 = 12306;
            break;
        }
        case 4: {
            int3 = 12307;
            break;
        }
        case 0: {
            int3 = 12308;
            break;
        }
    };
    switch (varbitplayer_8731) {
        case 2: {
            int4 = 12303;
            break;
        }
        case 5: {
            int4 = 12304;
            break;
        }
        case 3: {
            int4 = 12306;
            break;
        }
        case 4: {
            int4 = 12307;
            break;
        }
        case 0: {
            int4 = 12308;
            break;
        }
    };
    switch (varbitplayer_8730) {
        case 2: {
            int7 = 12303;
            break;
        }
        case 5: {
            int7 = 12304;
            break;
        }
        case 3: {
            int7 = 12306;
            break;
        }
        case 4: {
            int7 = 12307;
            break;
        }
        case 0: {
            int7 = 12308;
            break;
        }
    };
    switch (varbitplayer_8733) {
        case 2: {
            int8 = 12303;
            break;
        }
        case 5: {
            int8 = 12304;
            break;
        }
        case 3: {
            int8 = 12306;
            break;
        }
        case 4: {
            int8 = 12307;
            break;
        }
        case 0: {
            int8 = 12308;
            break;
        }
    };
    switch (varbitplayer_8729) {
        case 2: {
            int5 = 12303;
            break;
        }
        case 5: {
            int5 = 12304;
            break;
        }
        case 3: {
            int5 = 12306;
            break;
        }
        case 4: {
            int5 = 12307;
            break;
        }
        case 0: {
            int5 = 12308;
            break;
        }
    };
    switch (varbitplayer_8732) {
        case 2: {
            int6 = 12303;
            break;
        }
        case 5: {
            int6 = 12304;
            break;
        }
        case 3: {
            int6 = 12306;
            break;
        }
        case 4: {
            int6 = 12307;
            break;
        }
        case 0: {
            int6 = 12308;
            break;
        }
    };
    stack(int0);
    stack(86573124);
    IF_SETGRAPHIC();
    stack(int1);
    stack(86573132);
    IF_SETGRAPHIC();
    stack(int2);
    stack(86573140);
    IF_SETGRAPHIC();
    stack(int3);
    stack(86573148);
    IF_SETGRAPHIC();
    stack(int4);
    stack(86573172);
    IF_SETGRAPHIC();
    stack(int7);
    stack(86573164);
    IF_SETGRAPHIC();
    stack(int8);
    stack(86573188);
    IF_SETGRAPHIC();
    stack(int5);
    stack(86573156);
    IF_SETGRAPHIC();
    stack(int6);
    stack(86573180);
    IF_SETGRAPHIC();
    IF_SETHIDE(1, 86573088);
    IF_SETHIDE(1, 86573080);
    IF_SETHIDE(1, 86573096);
    IF_SETHIDE(1, 86573104);
    IF_SETHIDE(1, 86573072);
    if (((((((((varbitplayer_8725 == varbitplayer_8726) && (varbitplayer_8727 == varbitplayer_8725)) && (varbitplayer_8728 == varbitplayer_8725)) && (varbitplayer_8730 == varbitplayer_8725)) && (varbitplayer_8729 == varbitplayer_8725)) && (varbitplayer_8731 == varbitplayer_8725)) && (varbitplayer_8733 == varbitplayer_8725)) && (varbitplayer_8732 == varbitplayer_8725))) {
        switch (varbitplayer_8725) {
            case 2: {
                IF_SETHIDE(false, comp(1321, 48));
                break;
            }
            case 5: {
                IF_SETHIDE(false, comp(1321, 24));
                break;
            }
            case 1: {
                IF_SETHIDE(false, comp(1321, 32));
                break;
            }
            case 3: {
                IF_SETHIDE(false, comp(1321, 40));
                break;
            }
            case 4: {
                IF_SETHIDE(false, comp(1321, 16));
                break;
            }
        };
    };
    if ((script7768() == 1)) {
        IF_SETHIDE(true, comp(1321, 52));
        IF_SETHIDE(true, comp(1321, 192));
    } else {
        IF_SETHIDE(false, comp(1321, 52));
        IF_SETHIDE(false, comp(1321, 192));
    };
    return;
}