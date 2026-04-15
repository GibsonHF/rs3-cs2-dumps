//
function script18511(int0: component, int1: int): void {
    script18512();
    var int2 = ((varclient_7382 / 60) / 24);
    var int3 = ((varclient_7382 / 60) - (int2 * 24));
    var int4 = MODULO(varclient_7382, 60);
    var string0 = "Time Remaining: ";
    var string1 = `${inttostring(int2, 10)} ${script4583(int2, "Day", "Days")}`;
    var string2 = `${inttostring(int3, 10)} ${script4583(int3, "Hour", "Hours")}`;
    var string3 = `${inttostring(int4, 10)} ${script4583(int4, "Minute", "Minutes")}`;
    var int5 = -1 as struct;
    var int6 = -1 as struct;
    if ((int2 >= 1)) {
        string0 = strconcat(string0, strconcat(string1, ` ${string2}`));
    } else if ((int3 >= 1)) {
        string0 = strconcat(string0, strconcat(string2, ` ${string3}`));
    } else if ((int4 == 0)) {
        string0 = strconcat(string0, "Less than 1 Minute");
    } else if ((int4 <= -1)) {
        int5 = script18493();
        int6 = script15487((int1 + 1));
        if ((int6 != int5)) {
            if (((int6 != -1 as struct) && (struct_getparam(int6, 9075) != -1 as dbrow))) {
                string0 = "Relog to refresh!";
            } else {
                string0 = "Reward Track finished!";
            };
        } else if ((script18497(int5, script18499(int5, (int1 + 1))) > 0)) {
            string0 = "Refresh or relog for the next reward!";
            IF_SETHIDE(false, comp(1253, 346));
        } else {
            string0 = "Finished!";
        };
        IF_SETONTIMER(callback(), int0);
    } else {
        string0 = strconcat(string0, string3);
    };
    IF_SETTEXT(string0, int0);
    return;
}