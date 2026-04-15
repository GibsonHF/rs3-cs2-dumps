//
function script17493(int0: inv, int1: obj, int2: int, int3: unknown_int): string {
    var int4 = INV_GETVAR(int0, int2, 53600);
    var int5 = INV_GETVAR(int0, int2, 53601);
    var int6 = item_getparam(int1, 8940);
    var int7 = item_getparam(int1, 8941);
    var string0 = item_getparam(int1, 8942);
    var string1 = item_getparam(int1, 8943);
    var string2 = "";
    if ((int6 > 0)) {
        if (((((int7 > 0) && (int5 < int7)) || (int7 == 0)) || ((int6 > 0) && (int4 >= int6)))) {
            string2 = strconcat(string2, `${inttostring(int4, 10)} / ${inttostring(int6, 10)} ${string0} ${script4583(int6, "soul", "souls")}`);
        };
    } else if (((int6 > 0) && (int4 >= int6))) {
        string2 = strconcat(string2, `${inttostring(int4, 10)} / ${inttostring(int6, 10)} ${string0} ${script4583(int6, "soul", "souls")}`);
    };
    if ((((int6 > 0) && (int7 > 0)) && (((int4 < int6) && (int5 < int7)) || ((int4 >= int6) && (int5 >= int7))))) {
        string2 = strconcat(string2, "<br>");
    };
    if ((int7 > 0)) {
        if (((((int6 > 0) && (int4 < int6)) || (int6 == 0)) || ((int7 > 0) && (int5 >= int7)))) {
            string2 = strconcat(string2, `${inttostring(int5, 10)} / ${inttostring(int7, 10)} ${string1} ${script4583(int7, "soul", "souls")}`);
        };
    } else if (((int7 > 0) && (int5 >= int7))) {
        string2 = strconcat(string2, `${inttostring(int5, 10)} / ${inttostring(int7, 10)} ${string1} ${script4583(int7, "soul", "souls")}`);
    };
    if (((int6 == 0) && (int7 == 0))) {
        string2 = strconcat(string2, `${inttostring(int4, 10)} ${string0} ${script4583(int4, "soul", "souls")}`);
        string2 = strconcat(string2, `<br>${inttostring(int5, 10)} ${string1} ${script4583(int5, "soul", "souls")}`);
    };
    if (((int3 == 1) && (((int6 > 0) && (int4 >= int6)) || ((int7 > 0) && (int5 >= int7))))) {
        string2 = strconcat(string2, "<br><col=EB2F2F>This soul urn is full.");
    };
    return string2;
}