//
function script20607(int0: number, int1: number, int2: number, int3: number, int4: number, string0: string): void {
    var string1 = script20608(int0, int1);
    if ((STRING_LENGTH(string1) > 0)) {
        if ((STRING_LENGTH(string0) > 0)) {
            var string0 = strconcat(string0, "<br><br>");
        };
        string0 = strconcat(string0, string1);
    };
    if ((int4 == 1)) {
        if ((STRING_LENGTH(string0) > 0)) {
            string0 = strconcat(string0, "<br><br>");
        };
        string0 = strconcat(string0, "This purchase includes an offhand variant.");
    };
    switch (int2) {
        case 0: {
            if ((PLAYERMEMBER() == 1)) {
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
                    case 1879: {
                        string0 = strconcat(string0, "<br><br>");
                        string0 = strconcat(string0, script4700());
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
    IF_SETTEXT(string0, 97976363);
    var int5 = script15891(string0, IF_GETWIDTH(97976363), IF_GETFONTMETRICS(97976363), 0);
    if ((int5 > IF_GETHEIGHT(97976362))) {
        IF_SETSIZE(30, 20, 1, 1, 97976362);
        int5 = script15891(string0, IF_GETWIDTH(97976363), IF_GETFONTMETRICS(97976363), 0);
        IF_SETSCROLLSIZE(0, int5, 97976362);
        script7791(97976364, 97976362);
    } else {
        IF_SETSCROLLSIZE(0, 0, 97976362);
        IF_SETSIZE(20, 20, 1, 1, 97976362);
        CC_DELETEALL(97976364);
    };
    return;
}