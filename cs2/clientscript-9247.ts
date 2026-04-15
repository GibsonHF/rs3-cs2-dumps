//
function script9247(int0: component, int1: int, int2: component, int3: inv, int4: component, int5: int, int6: component, int7: inv): void {
    var int8 = -1 as obj;
    var int9 = -1;
    var int10 = -1 as obj;
    var int11 = -1;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var string6 = "";
    var string7 = "";
    var string8 = "";
    var string9 = "";
    var int12 = int1;
    var int13 = int1;
    if (((CC_FIND(int0, int1) == 1) && (CC_FIND[1](int4, int5) == 1))) {
        int8 = CC_GETINVOBJECT();
        int9 = CC_GETINVCOUNT();
        int10 = CC_GETINVOBJECT[1]();
        int11 = CC_GETINVCOUNT[1]();
        if ((int8 != -1 as obj)) {
            string0 = CC_GETOP(1);
            string1 = CC_GETOP(2);
            string2 = CC_GETOP(3);
            string3 = CC_GETOP(4);
            string4 = CC_GETOP(5);
            string5 = CC_GETOP(6);
            string6 = CC_GETOP(7);
            string7 = CC_GETOP(8);
            string8 = CC_GETOP(9);
            string9 = CC_GETOP(10);
        } else {
            string0 = CC_GETOP[1](1);
            string1 = CC_GETOP[1](2);
            string2 = CC_GETOP[1](3);
            string3 = CC_GETOP[1](4);
            string4 = CC_GETOP[1](5);
            string5 = CC_GETOP[1](6);
            string6 = CC_GETOP[1](7);
            string7 = CC_GETOP[1](8);
            string8 = CC_GETOP[1](9);
            string9 = CC_GETOP[1](10);
        };
        while ((int12 != int5)) {
            if ((int12 > int5)) {
                int13 = (int12 - 1);
            } else {
                int13 = (int12 + 1);
            };
            if (((CC_FIND(int0, int12) == 1) && (CC_FIND[1](int0, int13) == 1))) {
                script9240(int0, int2, int3, CC_GETINVOBJECT[1](), CC_GETINVCOUNT[1](), 2, string0, string1, string2, string3, string4, string5, string6, string7, string8, string9);
            };
            if ((((int4 != int0) && (CC_FIND(int4, int12) == 1)) && (CC_FIND[1](int4, int13) == 1))) {
                script9240(int4, int6, int7, CC_GETINVOBJECT[1](), CC_GETINVCOUNT[1](), 2, string0, string1, string2, string3, string4, string5, string6, string7, string8, string9);
            };
            int12 = int13;
        };
        if ((CC_FIND(int0, int5) == 1)) {
            script9240(int0, int2, int3, int8, int9, 2, string0, string1, string2, string3, string4, string5, string6, string7, string8, string9);
        };
        if ((CC_FIND(int4, int5) == 1)) {
            script9240(int4, int6, int7, int8, int9, 2, string0, string1, string2, string3, string4, string5, string6, string7, string8, string9);
        };
    };
    return;
}