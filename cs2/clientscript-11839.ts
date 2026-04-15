//
function script11839(int0: cs2enum, int1: int): [string, string, int, boolean, string] {
    if ((int0 == -1 as cs2enum)) {
        return ["", "", 0, true, ""];
    };
    var int2 = false;
    if ((script12278() == 0)) {
        int2 = true;
    };
    var string0 = "* (Pro only)";
    var string1 = "These features are limited to RuneMetrics Pro users.";
    switch (enum_getvalue(0, 0, int0, int1)) {
        case 0: {
            return ["Show precise values", "Show full (not abbreviated) values for XP gains, combat and wealth statistics.", varbitplayer_28120, false, ""];
        }
        case 1: {
            return ["Give ping notifications", "Play a sound when your character finishes performing a skilling action.", varbitplayer_29527, int2, string0];
        }
        case 2: {
            return ["Show health warning", "Show a red health overlay when your health falls below 20%.", varbitplayer_29531, false, ""];
        }
        case 3: {
            return ["Only update XP/h on XP gain", "Show more stable values for XP/h by only updating XP/h on XP gaining events.", (1 - varbitplayer_29533), int2, string0];
        }
        case 11: {
            return ["Display toolbar", "Display toolbar in the pulled out Metrics window.", (1 - varbitclient_32703), false, ""];
        }
        case 12: {
            if ((varbitplayer_27169 == 1)) {
                return ["Lightweight mode", "Turn the Metrics window almost fully transparent. Lightweight windows cannot be tabbed together.", 1, true, "*<br>Note: This setting is always enabled in Classic Interface mode."];
            };
            return ["Lightweight mode", "Turn the Metrics window almost fully transparent. Lightweight windows cannot be tabbed together.<br>To see the borders of a lightweight window press and hold ALT and move your mouse pointer over it.", script12608(28), false, ""];
        }
        case 14: {
            return ["Show XP change value", "Show the XP change value over the skill rows if you have the XP column visible.", varbitclient_2053, false, ""];
        }
        case 4: {
            return ["Show average field", "Show XP/h, GP/h or DPM. The value is based on the data recorded in the time window. To adjust the time window resize the graph or change the zoom level.", varbitclient_30624, int2, string1];
        }
        case 6: {
            return ["Show min/max values", "", varbitclient_30626, int2, string1];
        }
        case 7: {
            return ["Show guide lines", "", varbitclient_30627, int2, string1];
        }
        case 8: {
            return ["Show average value line over graph", "", varbitclient_30628, int2, string1];
        }
        case 9: {
            return ["Display toolbar", "Display toolbar in the pulled out Graph window.", varbitclient_30629, int2, string1];
        }
        case 10: {
            return ["Vary graph colour by skill", "", varbitclient_30630, int2, string1];
        }
        case 13: {
            if ((varbitplayer_27169 == 1)) {
                return ["Lightweight mode", "Turn the Graph window almost fully transparent. Lightweight windows cannot be tabbed together.", 0, true, "*<br>Note: This setting is not available in Classic Interface mode."];
            };
            return ["Lightweight mode", "Turn the Graph window almost fully transparent. Lightweight windows cannot be tabbed together.<br>To see the borders of a lightweight window press and hold ALT and move your mouse pointer over it.", script12608(30), int2, string1];
        }
    };
    return ["", "", 0, true, ""];
}