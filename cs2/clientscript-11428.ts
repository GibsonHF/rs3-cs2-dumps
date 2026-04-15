//
function script11428(int0: component): void {
    var int1 = 0;
    var int2 = comp(-1, 65535);
    if ((int0 == comp(284, 18))) {
        printmessage("Testing buff bar");
    } else if ((int0 == comp(291, 1))) {
        printmessage("Testing debuff bar");
    };
    if ((IF_FIND(int0) == 1)) {
        if ((cc_getparam(8102) == true)) {
            int2 = cc_getparam(8101);
            while ((IF_FIND[1](int2) == 1)) {
                if ((++int1 > 50)) {
                    printmessage("CIRCULAR LOOP FOUND IN-ACTIVE LIST!!");
                    return;
                };
                int2 = cc_getparam[1](8105);
            };
            printmessage(`Inactive list is of size ${inttostring(int1, 10)}`);
            int1 = 0;
            int2 = cc_getparam(8100);
            while ((IF_FIND[1](int2) == 1)) {
                if ((++int1 > 50)) {
                    printmessage("CIRCULAR LOOP FOUND IN ACTIVE LIST!!");
                    return;
                };
                int2 = cc_getparam[1](8105);
            };
            printmessage(`Active list is of size ${inttostring(int1, 10)}`);
        } else {
            printmessage("Component is not head");
        };
    } else {
        printmessage("Cannot find head");
    };
    return;
}