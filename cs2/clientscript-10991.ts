//
function script10991(int0: unknown_int): void {
    var string0 = "Welcome to the Golden Partyhat Hunt!<br>Members can complete any 8 out of the 11 tasks to earn golden partyhat shards which can be combined into your very own golden partyhat.";
    var int1 = script10506();
    var int2 = script13276(52662 as obj);
    var int3 = 0;
    if ((varbitplayer_50631 == 1)) {
        string0 = strconcat(string0, "<br><br>Congratulations! You have created your golden partyhat!");
    } else {
        int1 = script10506();
        int2 = script13276(52662 as obj);
        int3 = (int1 - int2);
        if ((int3 > 0)) {
            string0 = strconcat(string0, script4583(int3, "<br><br>You have <col=00FF00>1 golden partyhat shard</col> you can reclaim from the Wise Old Man outside the Grand Exchange in Varrock.", `<br><br>You have <col=00FF00>${inttostring(int3, 10)} golden partyhat shards</col> that you can reclaim from the Wise Old Man outside the Grand Exchange in Varrock.`));
        } else if ((int1 >= 8)) {
            string0 = strconcat(string0, "<br><br><col=00FF00>You have earned 8 golden partyhat shards! Visit the Wise Old Man outside the Grand Exchange in Varrock to create your golden partyhat!</col>");
        };
    };
    script11847(string0);
    IF_SETTEXT("Information", comp(1802, 328));
    IF_SETTEXT(string0, comp(1802, 327));
    script10983(int0);
    return;
}