//
function script20607(int0: struct, int1: unknown_int, int2: int, int3: unknown_int, string0: string): void {
    var string1 = script20608(int0, int1);
    if ((STRING_LENGTH(string1) > 0)) {
        if ((STRING_LENGTH(string0) > 0)) {
            var string0 = strconcat(string0, "<br><br>");
        };
        string0 = strconcat(string0, string1);
    };
    switch (int2) {
        case 0: {
            if ((PLAYERMEMBER() == true)) {
                switch (int0) {
                    case 31861:
                    case 31867:
                    case 31868:
                    case 31869: {
                        string0 = strconcat(string0, "<br><br>As you're a member, this item is free for you!");
                        break;
                    }
                    case 52422: {
                        string0 = strconcat(string0, "<br><br>As you're a 12-month member, this item is free for you!");
                        break;
                    }
                    default: {
                        string0 = strconcat(string0, "<br><br>As you're a member, this item is 10% cheaper for you! We've already added that discount to the price.");
                        break;
                    }
                };
            };
            break;
        }
    };
    if ((int3 == 1)) {
        string0 = strconcat(`${string0}<br><br>`, "Discounts for partially owned packages are not supported at this time.");
    };
    IF_SETTEXT(string0, comp(1495, 43));
    var int4 = script15891(string0, IF_GETWIDTH(comp(1495, 43)), IF_GETFONTMETRICS(comp(1495, 43)), 0);
    if ((int4 > IF_GETHEIGHT(comp(1495, 42)))) {
        IF_SETSIZE(30, 20, 1, 1, comp(1495, 42));
        int4 = script15891(string0, IF_GETWIDTH(comp(1495, 43)), IF_GETFONTMETRICS(comp(1495, 43)), 0);
        IF_SETSCROLLSIZE(0, int4, comp(1495, 42));
        script7791(comp(1495, 44), comp(1495, 42));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1495, 42));
        IF_SETSIZE(20, 20, 1, 1, comp(1495, 42));
        CC_DELETEALL(comp(1495, 44));
    };
    return;
}