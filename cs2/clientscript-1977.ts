//
function script1977(int0: component, int1: component): void {
    var string0 = "Tutorial:<br>Welcome to the Guards team!";
    var int2 = 0;
    if ((varbitplayer_21649 == 0)) {
        switch (varbitplayer_21642) {
            case 1: {
                string0 = "Tutorial - Robbers:<br><br>Welcome to the island, fresh with opportunity.<br>Your goal as a robber is to infiltrate the town, locate the bank and bring as many loot bags to the boat as possible while avoiding the guards!";
                break;
            }
            case 2: {
                string0 = "Tutorial - Robbers:<br><br>To help you sneak around the island, you can take the form of any citizen - just click on any of them to do so.<br>Try this now.";
                int2 = 1;
                break;
            }
            case 3: {
                string0 = "Tutorial - Robbers:<br><br>Now you are disguised, it'll be harder for guards to spot you - especially if you act like the citizens do.";
                break;
            }
            case 4: {
                string0 = "Tutorial - Robbers:<br><br>Ultimately, your goal is to locate the bank and take some loot.<br>Follow the trail there now.";
                int2 = 1;
                break;
            }
            case 5: {
                string0 = "Tutorial - Robbers:<br><br>This is the bank - plenty of loot ripe for the taking, so let's grab some now.";
                int2 = 1;
                break;
            }
            case 6: {
                string0 = "Tutorial - Robbers:<br><br>Now that you have loot, you can no longer change form, so you're easier for the guards to spot.<br>Follow the trail to the boat to offload this loot as quickly as possible.";
                int2 = 1;
                break;
            }
            case 7: {
                string0 = "Tutorial - Robbers:<br><br>Speak to Liara to offload your loot.<br><br>If the boat is too well guarded, additional drop-off points can be found around the map.";
                int2 = 1;
                break;
            }
            case 8: {
                string0 = "Tutorial - Robbers:<br><br>If the robbers offload enough loot, they'll win.<br>If the guards arrest all of the robbers, last 20 minutes stopping loot capture, or confiscate enough loot from robbers, they win.";
                break;
            }
            case 9: {
                string0 = "Tutorial - Robbers:<br><br>If a guard spots you correctly, you'll have to evade capture.<br>If you fail to evade, you'll be arrested on the spot.";
                break;
            }
            case 10: {
                string0 = "Tutorial - Robbers:<br><br>If you get arrested two times, you'll be sent to jail.";
                break;
            }
            case 11: {
                string0 = "Tutorial - Robbers:<br><br>There are a few ways to escape from jail.<br><br>However, if you don't make it out in time, you'll be converted to the guard team to catch the remaining robbers!";
                break;
            }
            case 12: {
                string0 = "Tutorial - Robbers:<br><br>And those are the basics!<br>There are perks to being on each side that can be unlocked from the rewards shop, as well as random events, where townsfolk need your help.<br>For now, click to exit!";
                break;
            }
        };
    } else {
        switch (varbitplayer_21642) {
            case 1: {
                string0 = "Tutorial - Guards:<br><br>Welcome to the island - yours to defend.<br>Your goal as a guard is to prevent the robbers from getting away with too much loot.";
                break;
            }
            case 2: {
                string0 = "Tutorial - Guards:<br><br>To help, there are various things you can do. The main ability you have is the ability to accuse.";
                break;
            }
            case 3: {
                string0 = "Tutorial - Guards:<br><br>If you think someone is a robber, you can click on them to accuse them.<br><br>Try this now.";
                int2 = 1;
                break;
            }
            case 4: {
                string0 = "Tutorial - Guards:<br><br>If you are right, the robber will be identified and you can run in for the arrest<br><br>Try arresting someone now.";
                int2 = 1;
                break;
            }
            case 5: {
                string0 = "Tutorial - Guards:<br><br>After a robber has been arrested twice, any further arrests will put them in jail. If they don't get out of jail, they'll join the guards' team!";
                break;
            }
            case 6: {
                string0 = "Tutorial - Guards:<br><br>If all the robbers are caught and converted to guards or the robbers don't get enough loot within 20 minutes, the guard team wins.";
                break;
            }
            case 7: {
                string0 = "Tutorial - Guards:<br><br>Be careful though! If you falsely accuse three citizens, Internal Affairs will show up and jail you for 30 seconds for bad form!";
                break;
            }
            case 8: {
                string0 = "Tutorial - Guards:<br><br>And those are the basics!<br>Visit the reward shop for perks that can be unlocked. There are also random events, where townsfolk need your help.<br>For now, click to exit!";
                break;
            }
        };
    };
    IF_SETTEXTFONT(26 as fontmetrics, int1);
    var int3 = MIN(500, MAX(30, (PARAHEIGHT(string0, IF_GETWIDTH(int1), IF_GETFONTMETRICS(int1)) * 15)));
    int3 = (int3 + 85);
    if ((int2 == 1)) {
        IF_SETHIDE(true, comp(1036, 14));
    } else {
        IF_SETHIDE(false, comp(1036, 14));
    };
    IF_SETSIZE(IF_GETWIDTH(int0), int3, 0, 0, int0);
    IF_SETTEXT(string0, int1);
    return;
}