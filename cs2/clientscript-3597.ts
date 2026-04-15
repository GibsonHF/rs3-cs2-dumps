//
function script3597(int0: obj, int1: obj, int2: obj): void {
    if ((int0 != -1 as obj)) {
        IF_SETOBJECT_NONUM(int0, 1, comp(632, 32));
    } else {
        IF_SETHIDE(true, comp(632, 32));
    };
    if ((int1 != -1 as obj)) {
        IF_SETOBJECT_NONUM(int1, 1, comp(632, 56));
    } else {
        IF_SETHIDE(true, comp(632, 56));
    };
    if ((int2 != -1 as obj)) {
        IF_SETOBJECT_NONUM(int2, 1, comp(632, 80));
    } else {
        IF_SETHIDE(true, comp(632, 80));
    };
    var int3 = 0;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var string0 = "";
    var string1 = "";
    while ((int3 < 3)) {
        switch (int3) {
            case 0: {
                int4 = 2360;
                int5 = 41418764;
                int6 = 41418762;
                break;
            }
            case 1: {
                int4 = 2361;
                int5 = 41418791;
                int6 = 41418788;
                break;
            }
            case 2: {
                int4 = 2362;
                int5 = 41418815;
                int6 = 41418812;
                break;
            }
        };
        if ((script3598(int4) == 1)) {
            stack(8779);
            stack(int5);
            IF_SETGRAPHIC();
            string0 = "This request has been completed.";
            string1 = "Completed! Requested items have been deposited";
        } else {
            stack(8778);
            stack(int5);
            IF_SETGRAPHIC();
            string0 = "This request has not been completed.";
            string1 = "This request has not been completed yet";
            if (((int4 == 2362) && (script13432(6) < 2))) {
                string1 = "<col=FF0000>Unlocked when you reach the 'Practiced Farmer' rank";
            };
        };
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), int5);
        IF_SETTEXT(string1, int6);
        int3 = (int3 + 1);
    };
    return;
}