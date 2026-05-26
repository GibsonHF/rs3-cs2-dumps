//
function script6709(int0: number, int1: number): void {
    stack(208896);
    stack(int1);
    DB_FIND(0);
    dbrow_findnext();
    var int2 = stack();
    var string0 = "";
    var int3 = script6061(int1);
    var int4 = DB_GETFIELDCOUNT(int2, 209056);
    var int5 = -1;
    while ((++int5 < 3)) {
        if ((int5 < int4)) {
            string0 = dbrow_getfield(int2, 209056, int5);
            switch (int5) {
                case 0: {
                    IF_SETTEXT(string0, 11534357);
                    IF_SETHIDE(0, 11534352);
                    if ((int3 >= 1)) {
                        script13990(11534355, -1, 28547);
                    } else {
                        script13991(11534355, -1, 28547, 1);
                    };
                    break;
                }
                case 1: {
                    IF_SETTEXT(string0, 11534385);
                    IF_SETHIDE(0, 11534353);
                    if ((int3 >= 2)) {
                        script13990(11534383, -1, 28547);
                    } else {
                        script13991(11534383, -1, 28547, 1);
                    };
                    break;
                }
                case 2: {
                    IF_SETTEXT(string0, 11534388);
                    IF_SETHIDE(0, 11534354);
                    if ((int3 >= 3)) {
                        script13990(11534386, -1, 28547);
                    } else {
                        script13991(11534386, -1, 28547, 1);
                    };
                    break;
                }
            };
        } else {
            switch (int5) {
                case 0: {
                    IF_SETHIDE(1, 11534352);
                    break;
                }
                case 1: {
                    IF_SETHIDE(1, 11534353);
                    break;
                }
                case 2: {
                    IF_SETHIDE(1, 11534354);
                    break;
                }
            };
        };
    };
    return;
}