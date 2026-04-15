//
function script7296(int0: struct, int1: unknown_int): string {
    var int2 = struct_getparam(int0, 664);
    var int3 = struct_getparam(int0, 697);
    var string0 = "";
    var int4 = struct_getparam(int0, 665);
    var int5 = struct_getparam(int0, 698);
    var string1 = "";
    var int6 = struct_getparam(int0, 684);
    var int7 = struct_getparam(int0, 699);
    var string2 = "";
    var int8 = struct_getparam(int0, 688);
    var int9 = struct_getparam(int0, 700);
    var string3 = "";
    string0 = inttostring(int2, 10);
    if ((int2 > varclient_2612)) {
        string0 = strconcat("<col=00FF00>", string0);
    } else if ((int2 < varclient_2612)) {
        string0 = strconcat("<col=FF0000>", string0);
    } else {
        string0 = strconcat("<col=F7EDB7>", string0);
    };
    if (((int3 != 0) || (varclient_2613 != 0))) {
        if ((int3 > varclient_2613)) {
            string0 = strconcat(string0, "<col=1D8C07>");
        } else if ((int3 < varclient_2613)) {
            string0 = strconcat(string0, "<col=FF0000>");
        } else {
            string0 = strconcat(string0, "<col=FAF2D6>");
        };
        if ((int3 > 0)) {
            string0 = strconcat(string0, ` (+${inttostring(int3, 10)}% boost)</col>`);
        } else if ((int3 < 0)) {
            string0 = strconcat(string0, ` (-${inttostring(int3, 10)}% boost)</col>`);
        } else {
            string0 = strconcat(string0, " (+0% boost)</col>");
        };
    };
    string1 = inttostring(int4, 10);
    if ((int2 > varclient_2616)) {
        string1 = strconcat("<col=1D8C07>", string1);
    } else if ((int4 < varclient_2616)) {
        string1 = strconcat("<col=FF0000>", string1);
    } else {
        string1 = strconcat("<col=FAF2D6>", string1);
    };
    if (((int5 != 0) || (varclient_2617 != 0))) {
        if ((int5 > varclient_2617)) {
            string1 = strconcat(string1, "<col=1D8C07>");
        } else if ((int5 < varclient_2617)) {
            string1 = strconcat(string1, "<col=FF0000>");
        } else {
            string1 = strconcat(string1, "<col=FAF2D6>");
        };
        if ((int5 > 0)) {
            string1 = strconcat(string1, ` (+${inttostring(int5, 10)}% boost)</col>`);
        } else if ((int5 < 0)) {
            string1 = strconcat(string1, ` (-${inttostring(int5, 10)}% boost)</col>`);
        } else {
            string1 = strconcat(string1, " (+0% boost)</col>");
        };
    };
    string2 = inttostring(int6, 10);
    if ((int6 > varclient_2614)) {
        string2 = strconcat("<col=1D8C07>", string2);
    } else if ((int6 < varclient_2614)) {
        string2 = strconcat("<col=FF0000>", string2);
    } else {
        string2 = strconcat("<col=FAF2D6>", string2);
    };
    if (((int7 != 0) || (varclient_2615 != 0))) {
        if ((int7 > varclient_2615)) {
            string2 = strconcat(string2, "<col=1D8C07>");
        } else if ((int7 < varclient_2615)) {
            string2 = strconcat(string2, "<col=FF0000>");
        } else {
            string2 = strconcat(string2, "<col=FAF2D6>");
        };
        if ((int7 > 0)) {
            string2 = strconcat(string2, ` (+${inttostring(int7, 10)}% boost)</col>`);
        } else if ((int7 < 0)) {
            string2 = strconcat(string2, ` (-${inttostring(int7, 10)}% boost)</col>`);
        } else {
            string2 = strconcat(string2, " (+0% boost)</col>");
        };
    };
    string3 = inttostring(int8, 10);
    if ((int8 > varclient_2618)) {
        string3 = strconcat("<col=1D8C07>", string3);
    } else if ((int8 < varclient_2618)) {
        string3 = strconcat("<col=FF0000>", string3);
    } else {
        string3 = strconcat("<col=FAF2D6>", string3);
    };
    if (((int9 != 0) || (varclient_2619 != 0))) {
        if ((int9 > varclient_2619)) {
            string3 = strconcat(string3, "<col=1D8C07>");
        } else if ((int9 < varclient_2619)) {
            string3 = strconcat(string3, "<col=FF0000>");
        } else {
            string3 = strconcat(string3, "<col=FAF2D6>");
        };
        if ((int9 > 0)) {
            string3 = strconcat(string3, ` (+${inttostring(int9, 10)}% boost)</col>`);
        } else if ((int9 < 0)) {
            string3 = strconcat(string3, ` (-${inttostring(int9, 10)}% boost)</col>`);
        } else {
            string3 = strconcat(string3, " (+0% boost)</col>");
        };
    };
    var string4 = `Morale : ${string1}<br>Combat: ${string2}<br>Seafaring: ${string3}<br>Speed: ${string0}`;
    return string4;
}