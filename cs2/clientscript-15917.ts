//
function script15917(): void {
    var int0 = ((varclient_4260 * 3) / 5);
    var int1 = 0;
    var string0 = "";
    var string1 = "";
    switch (varclient_5129) {
        case 999:
        case 2017:
        case 1000:
        case 1001: {
            string1 = "The time remaining until you must leave this place.";
            break;
        }
        case 500:
        case 501: {
            string1 = "Your current time in this heist.";
            break;
        }
        default: {
            string1 = "Your current boss kill time.";
            break;
        }
    };
    if ((varclient_4260 > 0)) {
        if ((int0 >= 60)) {
            int1 = (int0 / 60);
            string0 = ` ${inttostring(int1, 10)} ${script4583(int1, "minute", "minutes")} and`;
        };
        int0 = MODULO(int0, 60);
        string0 = `${string0} ${inttostring(int0, 10)} ${script4583(int0, "second", "seconds")}`;
        script3536(`${string1}<br>Personal best:${string0}.`, comp(1508, 4), -1);
    } else {
        script3536(string1, comp(1508, 4), -1);
    };
    return;
}