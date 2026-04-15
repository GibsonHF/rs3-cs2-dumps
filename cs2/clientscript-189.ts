//
function script189(int0: int, int1: int): void {
    switch (int0) {
        case 9: {
            switch (int1) {
                case 3: {
                    script8820(1);
                    script2254();
                    break;
                }
                case 4: {
                    script7751();
                    break;
                }
                case 1: {
                    script8841(11, 0);
                    break;
                }
            };
            break;
        }
        case 4: {
            if ((int1 == 5)) {
                script8841(52, 0);
            };
            break;
        }
        case 1: {
            switch (int1) {
                case 2: {
                    script13220();
                    script3123();
                    break;
                }
                case 1: {
                    script3123();
                    break;
                }
                case 3: {
                    script3123();
                    script15006();
                    break;
                }
                case 4: {
                    script3123();
                    script15006();
                    if ((varbitplayer_55101 == 1)) {
                        script18531();
                    };
                    break;
                }
                case 5: {
                    script3123();
                    script15006();
                    break;
                }
                case 6: {
                    script3123();
                    script15006();
                    break;
                }
            };
            break;
        }
        case 0: {
            switch (int1) {
                case 1: {
                    script3123();
                    break;
                }
                case 3: {
                    script3123();
                    break;
                }
                case 2: {
                    varclient_6483 = 0;
                    varclient_6484 = 0;
                    break;
                }
                case 4: {
                    if ((IF_GETSCROLLY(comp(1851, 40)) > 0)) {
                        varclient_6917 = IF_GETSCROLLY(comp(1851, 40));
                    };
                    script7944();
                    break;
                }
                case 5: {
                    script19424();
                    break;
                }
            };
            break;
        }
        case 5: {
            if ((int1 == 1)) {
                if ((varclient_2235 == comp(105, 332))) {
                    IF_SETONDIALOGABORT(callback(), 6881613);
                    script7206(6881612, 6881613, 6881614, 6881615, 6881617);
                } else if ((varclient_2235 == comp(105, 275))) {
                    IF_SETONDIALOGABORT(callback(), 6881556);
                    script7206(6881555, 6881556, 6881557, 6881558, 6881285);
                } else if ((varclient_2235 == comp(105, 234))) {
                    IF_SETONDIALOGABORT(callback(), 6881515);
                    script7206(6881514, 6881515, 6881516, 6881517, 6881284);
                };
            } else if (((int1 == 4) && (varclient_2235 == comp(707, 12)))) {
                IF_SETONDIALOGABORT(callback(), 46333965);
                script7206(46333964, 46333965, 46333966, 46333967, 46333969);
            };
            break;
        }
        case 7: {
            switch (int1) {
                case 2: {
                    script20650();
                    break;
                }
                case 3: {
                    varclient_8375 = 0;
                    break;
                }
            };
            break;
        }
    };
    if ((varplayer_8745 == -1 as dbrow)) {
        return;
    };
    var int2 = dbrow_getfield(varplayer_8745, 290976, 0);
    var int3 = dbrow_getfield(varplayer_8745, 290992, 0);
    if (((int2 == int0) && (int3 == int1))) {
        script16411();
    };
    return;
}