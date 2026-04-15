//
function script15908(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: unknown_int, int8: unknown_int, int9: unknown_int, int10: unknown_int, int11: unknown_int, int12: unknown_int, int13: unknown_int, int14: unknown_int): string {
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var string6 = "";
    var string7 = "";
    switch (int7) {
        case 6: {
            string0 = " ";
            if (((int0 != -1) && ((int0 > 0) || (int9 == 0)))) {
                string4 = `${inttostring(int0, 10)} ${script4583(int0, "day", "days")}`;
            };
            if (((int3 != -1) && ((int3 > 0) || (int12 == 0)))) {
                string5 = `${inttostring(int3, 10)} ${script4583(int3, "hour", "hours")}`;
            };
            if (((int4 != -1) && ((int4 > 0) || (int13 == 0)))) {
                string6 = `${inttostring(int4, 10)} ${script4583(int4, "minute", "minutes")}`;
            };
            if (((int5 != -1) && ((int5 > 0) || (int14 == 0)))) {
                string7 = inttostring(int5, 10);
                if ((int6 > 0)) {
                    string7 = `${string7}.${inttostring(int6, 10)} seconds`;
                } else {
                    string7 = `${string7} ${script4583(int5, "second", "seconds")}`;
                };
            };
            break;
        }
        case 0: {
            string0 = " ";
            if (((int0 != -1) && ((int0 > 0) || (int9 == 0)))) {
                string4 = `${inttostring(int0, 10)} ${script4583(int0, "Day", "Days")}`;
            };
            if (((int3 != -1) && ((int3 > 0) || (int12 == 0)))) {
                string5 = `${inttostring(int3, 10)} ${script4583(int3, "Hour", "Hours")}`;
            };
            if (((int4 != -1) && ((int4 > 0) || (int13 == 0)))) {
                string6 = `${inttostring(int4, 10)} ${script4583(int4, "Minute", "Minutes")}`;
            };
            if (((int5 != -1) && ((int5 > 0) || (int14 == 0)))) {
                string7 = inttostring(int5, 10);
                if ((int6 > 0)) {
                    string7 = `${string7}.${inttostring(int6, 10)} Seconds`;
                } else {
                    string7 = `${string7} ${script4583(int5, "Second", "Seconds")}`;
                };
            };
            break;
        }
        case 1: {
            string0 = " ";
            if (((int0 != -1) && ((int0 > 0) || (int9 == 0)))) {
                string4 = `${inttostring(int0, 10)}d`;
            };
            if (((int3 != -1) && ((int3 > 0) || (int12 == 0)))) {
                string5 = `${inttostring(int3, 10)}h`;
            };
            if (((int4 != -1) && ((int4 > 0) || (int13 == 0)))) {
                string6 = `${inttostring(int4, 10)}m`;
            };
            if (((int5 != -1) && ((int5 > 0) || (int14 == 0)))) {
                string7 = inttostring(int5, 10);
                if ((int6 > 0)) {
                    string7 = `${string7}.${inttostring(int6, 10)}`;
                };
                string7 = `${string7}s`;
            };
            break;
        }
        case 2: {
            string0 = " ";
            if (((int0 != -1) && ((int0 > 0) || (int9 == 0)))) {
                string4 = `${inttostring(int0, 10)}D`;
            };
            if (((int3 != -1) && ((int3 > 0) || (int12 == 0)))) {
                string5 = `${inttostring(int3, 10)}H`;
            };
            if (((int4 != -1) && ((int4 > 0) || (int13 == 0)))) {
                string6 = `${inttostring(int4, 10)}M`;
            };
            if (((int5 != -1) && ((int5 > 0) || (int14 == 0)))) {
                string7 = inttostring(int5, 10);
                if ((int6 > 0)) {
                    string7 = `${string7}.${inttostring(int6, 10)}`;
                };
                string7 = `${string7}S`;
            };
            break;
        }
        case 3: {
            string0 = " ";
            if (((int0 != -1) && ((int0 > 0) || (int9 == 0)))) {
                string4 = `${inttostring(int0, 10)} ${script4583(int0, "Day", "Days")}`;
            };
            if (((int3 != -1) && ((int3 > 0) || (int12 == 0)))) {
                string5 = `${inttostring(int3, 10)} ${script4583(int3, "Hour", "Hours")}`;
            };
            if (((int4 != -1) && ((int4 > 0) || (int13 == 0)))) {
                string6 = `${inttostring(int4, 10)} ${script4583(int4, "Min", "Mins")}`;
            };
            if (((int5 != -1) && ((int5 > 0) || (int14 == 0)))) {
                string7 = inttostring(int5, 10);
                if ((int6 > 0)) {
                    string7 = `${string7}.${inttostring(int6, 10)} Secs`;
                } else {
                    string7 = `${string7} ${script4583(int5, "Sec", "Secs")}`;
                };
            };
            break;
        }
        case 4: {
            string0 = " ";
            if (((int0 != -1) && ((int0 > 0) || (int9 == 0)))) {
                string4 = `${inttostring(int0, 10)} ${script4583(int0, "day", "days")}`;
            };
            if (((int3 != -1) && ((int3 > 0) || (int12 == 0)))) {
                string5 = `${inttostring(int3, 10)} ${script4583(int3, "hour", "hours")}`;
            };
            if (((int4 != -1) && ((int4 > 0) || (int13 == 0)))) {
                string6 = `${inttostring(int4, 10)} ${script4583(int4, "min", "mins")}`;
            };
            if (((int5 != -1) && ((int5 > 0) || (int14 == 0)))) {
                string7 = inttostring(int5, 10);
                if ((int6 > 0)) {
                    string7 = `${string7}.${inttostring(int6, 10)} secs`;
                } else {
                    string7 = `${string7} ${script4583(int5, "sec", "secs")}`;
                };
            };
            break;
        }
        case 5: {
            string0 = ":";
            if (((int0 != -1) && ((int0 > 0) || (int9 == 0)))) {
                if ((int0 < 10)) {
                    string4 = "0";
                };
                string4 = `${string4}${inttostring(int0, 10)}`;
            };
            if (((int3 != -1) && (((int3 > 0) || (int12 == 0)) || ((int12 == 1) && (STRING_LENGTH(string4) != 0))))) {
                if ((int3 < 10)) {
                    string5 = "0";
                };
                string5 = `${string5}${inttostring(int3, 10)}`;
            };
            if (((int4 != -1) && (((int4 > 0) || (int13 == 0)) || ((int13 == 1) && (STRING_LENGTH(string5) != 0))))) {
                if ((int4 < 10)) {
                    string6 = "0";
                };
                string6 = `${string6}${inttostring(int4, 10)}`;
            };
            if (((int5 != -1) && (((int5 > 0) || (int14 == 0)) || ((int14 == 1) && (STRING_LENGTH(string6) != 0))))) {
                if ((int5 < 10)) {
                    string7 = "0";
                };
                string7 = `${string7}${inttostring(int5, 10)}`;
                if ((int6 > 0)) {
                    string7 = `${string7}.${inttostring(int6, 10)}`;
                };
            };
            break;
        }
        case 7: {
            if ((int2 > 0)) {
                string2 = script4583(int2, `${inttostring(int2, 10)} year`, `${inttostring(int2, 10)} years`);
            } else if ((int1 > 0)) {
                string3 = script4583(int1, `${inttostring(int1, 10)} month`, `${inttostring(int1, 10)} months`);
            } else if ((int0 > 0)) {
                string4 = script4583(int0, `${inttostring(int0, 10)} day`, `${inttostring(int0, 10)} days`);
            } else if ((int3 > 0)) {
                string5 = script4583(int3, `${inttostring(int3, 10)} hour`, `${inttostring(int3, 10)} hours`);
            } else if ((int4 > 0)) {
                string6 = script4583(int4, `${inttostring(int4, 10)} minute`, `${inttostring(int4, 10)} minutes`);
            } else if ((int5 > 0)) {
                string7 = script4583(int5, `${inttostring(int5, 10)} second`, `${inttostring(int5, 10)} seconds`);
            };
            break;
        }
    };
    if ((int8 != -1)) {
        if (((int0 != -1) && ((int0 > 0) || (int9 == 0)))) {
            string4 = inttostring(int0, 10);
        };
        if (((int2 != -1) && ((int2 > 0) || (int11 == 0)))) {
            string2 = inttostring(int2, 10);
        };
        switch (int8) {
            case 0:
            case 2: {
                string1 = "-";
                break;
            }
            case 1:
            case 3: {
                string1 = " ";
                break;
            }
        };
        switch (int8) {
            case 0:
            case 1: {
                if ((((int1 >= 0) && (int1 <= 11)) && (int10 == 0))) {
                    string3 = enum_getvalue(0, 36, 10036 as cs2enum, int1);
                };
                break;
            }
            case 2:
            case 3: {
                if ((((int1 >= 0) && (int1 <= 11)) && (int10 == 0))) {
                    string3 = enum_getvalue(0, 36, 10037 as cs2enum, int1);
                };
                break;
            }
        };
    };
    return script8243(string4, string3, string2, string5, string6, string7, string0, string1);
}