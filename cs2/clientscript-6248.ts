//
function script6248(): void {
    IF_SETHIDE(false, comp(972, 1));
    IF_SETHIDE(false, comp(972, 2));
    var string0 = "";
    switch (varbitplayer_29055) {
        case 0: {
            IF_SETMODEL(57346 as model, comp(972, 7));
            IF_SETTEXT("<u>Bre'egth:</u> <br><br>Aggressive female ork found patrolling Zanaris near the windmill. Intelligence leads us to believe that a recent fist fight with a subordinate left Bre'egth with one less tooth in her head, and one subordinate permanently relocated somewhere else.", comp(972, 8));
            IF_SETTEXT("Her bragging is well known throughout Zanaris. However, she is important to 'Bad Daddy's' plans. Without her, the ork warrior grunts would simply be fighting each other and their superiors. She keeps them in check.<br> <br>Suggest first talking to Bre'egth - she's likely to recount the entire story to you if you ask.<br><br>The trouble might be in getting away again afterwards.", comp(972, 9));
            IF_SETHIDE(true, comp(972, 1));
            break;
        }
        case 1: {
            IF_SETMODEL(57342 as model, comp(972, 7));
            IF_SETTEXT("<u>Gromblod:</u> <br><br>Mango-mad ork found in the Enchanted Valley. <br><br>His teeth are so rotten that he can only eat soft fruit, hence his preference for mangos.", comp(972, 8));
            IF_SETTEXT("According to reports, he's creating a bit of a nuisance of himself in the Enchanted Valley. <br><br>The locals don't want to give him the secret to where the magic mango tree is. <br><br>They're afraid he'll consume the entire harvest, and they're probably right.<br><br> Fairy ring code: BKQ.", comp(972, 9));
            break;
        }
        case 2: {
            IF_SETMODEL(57347 as model, comp(972, 7));
            IF_SETTEXT("<u>Shredflesh:</u> <br><br>A complete brute to look at, but suspect he's a real teddy bear inside. <br><br>Last reports place him in a cavern in the Gu'Tanoth region.", comp(972, 8));
            IF_SETTEXT("He's searching for herbs to control his excruciating toothache.<br><br>He needs a dentist, so you may be able to convince him that it's the right thing to do.<br><br>Fairy ring code: ALP.", comp(972, 9));
            break;
        }
        case 3: {
            IF_SETMODEL(57348 as model, comp(972, 7));
            IF_SETTEXT("<u>Fairy Godfather:</u> <br><br>Code name: 'Bad Daddy'. The main villain; he needs to be stopped.<br><br>Located in an isolated section of Zanaris, he's discovered a weakness in the interplanar fabric. This is really bad news for us!", comp(972, 8));
            string0 = "'Bad Daddy' has used his magic and the magic of the Fairy Queen to make a rift between this plane and one seemingly filled with orks.<br><br>He's using the rift to transport orks through to use as henchmen.<br><br>The Godfather is invulnerable to any standard attack. His magic is somehow linked to orks, so we suspect some sort of weakness there.";
            if ((varbitplayer_9928 >= 110)) {
                string0 = strconcat(string0, "<br><br>This information has cost us dearly; fairy ring coordinates: BIR, DIP, CLR, ALP.");
            };
            IF_SETTEXT(string0, comp(972, 9));
            break;
        }
        case 4: {
            IF_SETMODEL(57344 as model, comp(972, 7));
            IF_SETTEXT("<u>Ork teeth:</u> <br><br>Crude and brutal, these masticating marvels convey a feeling of basic primal energy.<br><br>What they lack in quality, they more than make up for in their wonderfully coarse, brutal and businesslike functionality.", comp(972, 8));
            IF_SETTEXT("In the host's early years, the tooth comes to an excessively tantalising point! As the host grazes most of the time, this quickly gets worn down. <br><br>Opinion is divided, but many believe the more interesting teeth come from those orks more accustomed to combat.<br><br>A broken tooth sometimes creates a sublime 'organic' structure - smooth and discoloured, but dense.", comp(972, 9));
            IF_SETHIDE(true, comp(972, 2));
            break;
        }
    };
    return;
}