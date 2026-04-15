//
function script11721(int0: unknown_int, int1: unknown_int, int2: component): void {
    var string0 = "You are a true champion, we've nothing else to offer you!";
    var int3 = 0;
    if ((int1 == 1)) {
        IF_SETCOLOUR(16777215, int2);
        IF_SETHIDE(true, comp(1654, 36));
    } else {
        switch (int0) {
            case 1: {
                string0 = "The first reward we offer is a discount in prices to the items we sell in our various shops.";
                break;
            }
            case 2: {
                string0 = "For the second reward we'll send a fellow Goebie up to the canal area and they'll offer you banking facilities.";
                break;
            }
            case 3: {
                string0 = "The third reward is the start of our faster travel network. Save your legs and have a Goebie guide take you to some key locations instead.";
                break;
            }
            case 4: {
                string0 = "For the fourth reward, we'll offer you an increased discount in our stores.";
                break;
            }
            case 5: {
                string0 = "For earning the fifth reward, we give you 'the reputable' title!";
                break;
            }
            case 6: {
                string0 = "Our sixth reward is another Goebie service - this one we'll deploy to the waterfall area to offer banking services if you wish to venture forth and need a restock.";
                break;
            }
            case 7: {
                string0 = "The seventh reward is a small plot of land in Otot. If you want to relocate, we'll let you do it here!";
                break;
            }
            case 8: {
                string0 = "Our eighth reward is an extension to our guides. We'll happily escort you to more locations around Mazcab at a hefty speed.";
                break;
            }
            case 9: {
                string0 = "Our ninth reward is one of trust. We'll allow you to take a fresh Goebie spawnling into your care.";
                break;
            }
            case 10: {
                string0 = "Reward number ten will have us bring you into the fold with the 'of the Goebies' title.";
                break;
            }
            case 11: {
                string0 = "Our final reward will hopefully bring the luck of the Goebies, we'll give you an increased chance at rare drops in the combat encounter here on Mazcab.";
                break;
            }
        };
        int3 = (20 + (15 * PARAHEIGHT(string0, 270, 28 as fontmetrics)));
        IF_SETSIZE(350, int3, 0, 0, comp(1654, 36));
        IF_SETTEXT(string0, comp(1654, 37));
        IF_SETHIDE(false, comp(1654, 36));
        IF_SETCOLOUR(13158600, int2);
    };
    return;
}