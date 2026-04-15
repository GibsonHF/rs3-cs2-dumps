//
function script6709(int0: unknown_int, int1: int): void {
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
                    IF_SETTEXT(string0, comp(176, 21));
                    IF_SETHIDE(false, comp(176, 16));
                    if ((int3 >= 1)) {
                        script13990(comp(176, 19), comp(-1, 65535), 28547 as struct);
                    } else {
                        script13991(comp(176, 19), comp(-1, 65535), 28547 as struct, true);
                    };
                    break;
                }
                case 1: {
                    IF_SETTEXT(string0, comp(176, 49));
                    IF_SETHIDE(false, comp(176, 17));
                    if ((int3 >= 2)) {
                        script13990(comp(176, 47), comp(-1, 65535), 28547 as struct);
                    } else {
                        script13991(comp(176, 47), comp(-1, 65535), 28547 as struct, true);
                    };
                    break;
                }
                case 2: {
                    IF_SETTEXT(string0, comp(176, 52));
                    IF_SETHIDE(false, comp(176, 18));
                    if ((int3 >= 3)) {
                        script13990(comp(176, 50), comp(-1, 65535), 28547 as struct);
                    } else {
                        script13991(comp(176, 50), comp(-1, 65535), 28547 as struct, true);
                    };
                    break;
                }
            };
        } else {
            switch (int5) {
                case 0: {
                    IF_SETHIDE(true, comp(176, 16));
                    break;
                }
                case 1: {
                    IF_SETHIDE(true, comp(176, 17));
                    break;
                }
                case 2: {
                    IF_SETHIDE(true, comp(176, 18));
                    break;
                }
            };
        };
    };
    return;
}