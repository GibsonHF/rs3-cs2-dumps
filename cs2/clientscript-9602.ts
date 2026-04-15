//
function script9602(int0: component, int1: unknown_int, int2: int): void {
    var int3 = (int2 - DATE_MINUTES());
    var string0 = "null";
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var string1 = "null";
    var string2 = "null";
    var string3 = "null";
    var string4 = "null";
    var string5 = "null";
    if ((int3 <= 0)) {
        string0 = "";
        switch (int1) {
            case 0: {
                IF_SETHIDE(true, comp(1029, 17));
                IF_SETTEXT("Closed", comp(1029, 11));
                break;
            }
            case 1: {
                IF_SETHIDE(true, comp(1029, 28));
                IF_SETTEXT("Closed", comp(1029, 23));
                break;
            }
            case 2: {
                IF_SETHIDE(true, comp(1029, 41));
                IF_SETTEXT("Closed", comp(1029, 35));
                break;
            }
        };
    } else {
        int5 = (int3 / 10080);
        int4 = (int5 * 7);
        int6 = ((int3 / 1440) - int4);
        int4 = ((int4 + int6) * 24);
        int7 = ((int3 / 60) - int4);
        int4 = ((int4 + int7) * 60);
        int8 = (int3 - int4);
        if ((int5 == 1)) {
            string1 = "1 week";
        } else {
            string1 = `${inttostring(int5, 10)} weeks`;
        };
        if ((int6 == 1)) {
            string2 = "1 day";
        } else {
            string2 = `${inttostring(int6, 10)} days`;
        };
        if ((int7 == 1)) {
            string3 = "1 hour";
        } else {
            string3 = `${inttostring(int7, 10)} hours`;
        };
        if ((int8 == 1)) {
            string4 = "1 minute";
        } else {
            string4 = `${inttostring(int8, 10)} minutes`;
        };
        if ((int5 > 0)) {
            string0 = `${string1}, ${string2}`;
        } else if ((int6 > 0)) {
            string0 = `${string2}, ${string3}`;
        } else if ((int7 > 0)) {
            string0 = `${string3}, ${string4}`;
        } else if ((int8 == 1)) {
            string0 = "1 minute";
        } else {
            string0 = string4;
        };
    };
    switch (int1) {
        case 0: {
            IF_SETTEXT(string0, comp(1029, 17));
            break;
        }
        case 1: {
            IF_SETTEXT(string0, comp(1029, 28));
            break;
        }
        case 2: {
            IF_SETTEXT(string0, comp(1029, 41));
            break;
        }
    };
    if ((int3 == 0)) {
        IF_SETONTIMER(callback(), int0);
    } else {
        IF_SETONTIMER(callback(script9602, int0, int1, int2), int0);
    };
    return;
}