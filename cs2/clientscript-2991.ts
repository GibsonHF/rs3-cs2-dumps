//
function script2991(int0: int, int1: int, int2: int): void {
    var int3 = enum_getvalue(0, 74, 14569 as cs2enum, int0);
    if (((int3 == -1 as dbrow) || (int1 > DB_GETFIELDCOUNT(int3, 127008)))) {
        return;
    };
    var int4 = dbrow_getfield(int3, 127008, int1);
    if (((struct_getparam(int4, 7537) == false) && (struct_getparam(int4, 9208) == -1))) {
        switch (int4) {
            case 1451: {
                if ((int2 == 1)) {
                    varclient_6785 = 3;
                    CLIENTOPTION_SET(29, 1);
                    if ((script13749() == true)) {
                        WORLDMAP_3DVIEW_ACTIVE(1);
                    };
                } else {
                    varclient_6785 = 2;
                    WORLDMAP_3DVIEW_ACTIVE(0);
                };
                break;
            }
            case 44852: {
                CLIENTOPTION_SET(33, int2);
                break;
            }
            case 4299: {
                CLIENTOPTION_SET(35, int2);
                break;
            }
            case 45811: {
                script11756(2292 as dbrow, int2);
                break;
            }
            case 45812: {
                script11756(2293 as dbrow, int2);
                break;
            }
            case 45813: {
                script11756(2294 as dbrow, int2);
                break;
            }
            case 45814: {
                script11756(2295 as dbrow, int2);
                break;
            }
            case 45815: {
                script11756(2296 as dbrow, int2);
                break;
            }
            case 45816: {
                script11756(2628 as dbrow, int2);
                break;
            }
            case 45817: {
                script11756(4668 as dbrow, int2);
                break;
            }
            case 45819: {
                script11756(4671 as dbrow, int2);
                break;
            }
            case 45820: {
                script11756(4672 as dbrow, int2);
                break;
            }
            case 45821: {
                script11756(4673 as dbrow, int2);
                break;
            }
            case 45822: {
                script11756(4674 as dbrow, int2);
                break;
            }
        };
        return;
    };
    IF_SETHIDE(false, comp(365, 7));
    script9525(comp(365, 10), 1, -1);
    return;
}