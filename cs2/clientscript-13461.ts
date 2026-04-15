//
function script13461(int0: int): void {
    script13444();
    script13445();
    script13448();
    script13447();
    var int1 = script13433(int0);
    var int2 = comp(-1, 65535);
    var string0 = "null";
    switch (int0) {
        case 1: {
            string0 = "Workers District";
            break;
        }
        case 2: {
            string0 = "Imperial District";
            break;
        }
        case 3: {
            string0 = "Merchant District";
            break;
        }
        case 4: {
            string0 = "Ports District";
            break;
        }
    };
    int2 = comp(1875, 57);
    CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
    CC_SETTEXTFONT(60 as fontmetrics);
    CC_SETTEXTALIGN(0, 0, 0);
    CC_SETPOSITION(100, 8, 0, 0);
    CC_SETSIZE(200, 40, 0, 0);
    CC_SETCOLOUR(script10495(0));
    CC_SETTEXT(string0);
    int2 = comp(1875, 59);
    switch (int0) {
        case 1: {
            string0 = "Batal has been part of the system as long as anyone can remember, born in the gutters of the golden city and bound to a life of servitude in the worker's quarter. Upon achieving adulthood, he had endured enough to compress the exuberance of his youth into a dense ruby, searing with anger and injustice at the life that was forced upon him.<br><br>Batal sought understanding with steadfast resilience and immeasurable passion, winning the adoration of his brothers and sisters. He had so much to lose, and the first target of his oppressors was what he had built his existence with and around. Robbed of his pride and both of his hands in the name of discipline, he found the only refuge left for him with his people. He found it easier than ever to rise through the ranks, as he represented exactly what would happen if the upper class were defied, and the Pharaoh felt it necessary to hold that banner aloft.<br><br>Only time can tell if he can make headway in carving out a place for his people.";
            break;
        }
        case 2: {
            string0 = "Akhomet's career has consisted of ebbs and flows, earning her stripes in the Kharid-Menaphite war and following in her mother's footsteps as captain of the guard.<br><br>Now, in epochs of relative peace, all she has to remember her glory days by are the royal guard, a team of loyal and grizzled veterans. The tasks the guard have been assigned lately have been nothing short of insulting, leaving their appetites unsated and savouring mouths hungry for more.<br><br>It is challenging to maintain your resolve when bandits and lizards are the only target for skills moulded from prime years of military prowess, but it is something that she has taken in her stride, incorporating her own batch of brutal authority.<br><br>When it comes down to the wire, she cares intensely about the people of Menaphos and the guard she commands, even when that comes to blows with the bellowed bidding from the pyramid.";
            break;
        }
        case 3: {
            string0 = "Rumour has it that Ehsan initiated her meteoric rise to Grand Vizier as a young child immediately after she was sold into slavery by her parents; managing to sweeten the deal to such an extent that she ended up running the shop mere months later.<br><br>Murmurs in the market mandate that she is the one responsible for the introduction of currency to Menaphos, convincing the dullard denizens to part with their prized possessions at the first gleam of gold and the shine of a smile. The only thing that can really be ascertained with regards to Ehsan is that she is the beating heart of all trade within Menaphos, an economy that does not begin and end with simple rumours.<br><br>Her influence also bears no signs of a conclusion, swelling and straining at the seams of the desert like her obese purse. It's no surprise that foreign diplomats will rarely stray from her gaze during their stay in Menaphos, pampered with the most select endorsements from the merchant matriarch of Menaphos.";
            break;
        }
        case 4: {
            string0 = "The rationale behind Wadud's promotion to the leader of the ports district isn't publicly known, however his intimate knowledge of the naval underbelly behind so much grief on the Menaphite shoreline has proved invaluable to a nation left high and dry.<br><br>He has always been one step ahead of the pirate crews that seek to dam the flow of riches that gush through the docks of Menaphos, equipping the cargo vessels with ingenious routes and repulsion tactics. The men around him recognise him as one of their own, someone who truly lives for the thrill of the ocean, but his existence is met with squirms from the nobility that see him as a necessary evil.<br><br>He finds it very easy to bond with those around him, so long as they carry a tale of the tumultuous tide he worships.  Much to his chagrin, Wadud has reached a point in his career where he is required to be a landlubber for communication's sake, and longs to be a sojourner on the surrounding seas once again.";
            break;
        }
    };
    IF_SETPOSITION(247, 52, 2, 0, int2);
    IF_SETSIZE(305, 270, 0, 0, int2);
    IF_SETCOLOUR(script10495(3), comp(1875, 62));
    IF_SETTEXT(string0, comp(1875, 62));
    var int3 = script15891(string0, 289, IF_GETFONTMETRICS(comp(1875, 62)), 0);
    script19620(comp(1875, 61), comp(1875, 60), int3, comp(-1, 65535), -1, 0, 0, 0);
    var int4 = script13432(int0);
    var string1 = enum_getvalue(0, 36, struct_getparam(int1, 6584), int4);
    int2 = comp(1875, 55);
    CC_CREATE[1](int2, 3, IF_GETNEXTSUBID(int2));
    CC_SETPOSITION[1](26, 213, 0, 0);
    CC_SETSIZE[1](140, 52, 0, 0);
    CC_SETCOLOUR[1](script10495(9));
    CC_SETFILL[1](1);
    CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTALIGN(1, 0, 0);
    CC_SETPOSITION(16, 221, 0, 0);
    CC_SETSIZE(160, 40, 0, 0);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXT("Current Reputation");
    CC_CREATE[1](int2, 4, IF_GETNEXTSUBID(int2));
    CC_SETTEXTFONT[1](57 as fontmetrics);
    CC_SETTEXTALIGN[1](1, 0, 0);
    CC_SETPOSITION[1](CC_GETX(), (CC_GETY() + 16), 0, 0);
    CC_SETSIZE[1](160, 40, 0, 0);
    CC_SETCOLOUR[1](script10495(0));
    CC_SETTEXT[1](string1);
    int2 = comp(1875, 54);
    CC_CREATE(int2, 3, IF_GETNEXTSUBID(int2));
    CC_SETPOSITION(26, 280, 0, 0);
    CC_SETSIZE(140, 52, 0, 0);
    CC_SETCOLOUR(script10495(9));
    CC_SETFILL(1);
    CC_CREATE[1](int2, 4, IF_GETNEXTSUBID(int2));
    CC_SETTEXTFONT[1](26 as fontmetrics);
    CC_SETTEXTALIGN[1](1, 1, 0);
    CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
    CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
    CC_SETCOLOUR[1](script10495(3));
    CC_SETTEXT[1]("Rewards can be unlocked by reaching the ranks listed below.");
    int2 = comp(1875, 56);
    CC_CREATE(int2, 3, IF_GETNEXTSUBID(int2));
    CC_SETPOSITION(16, 48, 2, 0);
    CC_SETSIZE(543, 284, 0, 0);
    CC_SETCOLOUR(script10495(9));
    CC_SETFILL(1);
    CC_CREATE(int2, 3, IF_GETNEXTSUBID(int2));
    CC_SETPOSITION(34, 66, 2, 0);
    CC_SETSIZE(204, 204, 0, 0);
    CC_SETCOLOUR(script10495(3));
    CC_SETFILL(0);
    CC_CREATE(int2, 5, IF_GETNEXTSUBID(int2));
    CC_SETPOSITION(36, 68, 2, 0);
    CC_SETSIZE(200, 200, 0, 0);
    switch (int0) {
        case 1: {
            CC_SETGRAPHIC(30973 as graphic);
            break;
        }
        case 2: {
            CC_SETGRAPHIC(30970 as graphic);
            break;
        }
        case 3: {
            CC_SETGRAPHIC(30971 as graphic);
            break;
        }
        case 4: {
            CC_SETGRAPHIC(30972 as graphic);
            break;
        }
    };
    int2 = comp(1875, 58);
    switch (int0) {
        case 1: {
            string0 = "Batal";
            break;
        }
        case 2: {
            string0 = "Akhomet";
            break;
        }
        case 3: {
            string0 = "Ehsan";
            break;
        }
        case 4: {
            string0 = "Wadud";
            break;
        }
    };
    CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
    CC_SETTEXTFONT(57 as fontmetrics);
    CC_SETTEXTALIGN(1, 0, 0);
    CC_SETPOSITION(35, 275, 2, 0);
    CC_SETSIZE(200, 40, 0, 0);
    CC_SETCOLOUR(script10495(0));
    CC_SETTEXT("Faction Leader");
    CC_CREATE[1](int2, 4, IF_GETNEXTSUBID(int2));
    CC_SETTEXTFONT[1](57 as fontmetrics);
    CC_SETTEXTALIGN[1](1, 0, 0);
    CC_SETPOSITION[1](35, (CC_GETY() + 24), 2, 0);
    CC_SETSIZE[1](200, 40, 0, 0);
    CC_SETCOLOUR[1](script10495(0));
    CC_SETTEXT[1](string0);
    int2 = comp(1875, 53);
    CC_DELETEALL(int2);
    CC_CREATE(int2, 3, IF_GETNEXTSUBID(int2));
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETCOLOUR(script10495(9));
    CC_SETFILL(1);
    CC_CREATE[1](int2, 5, IF_GETNEXTSUBID(int2));
    CC_SETPOSITION[1](8, 8, 0, 0);
    CC_SETSIZE[1](24, 24, 0, 0);
    if ((varbitplayer_35973 == int0)) {
        CC_SETGRAPHIC[1](30871 as graphic);
    } else {
        CC_SETGRAPHIC[1](30868 as graphic);
    };
    CC_SETONVARTRANSMIT[1](callback(script13470, int0, 6991, 1));
    CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
    CC_SETTEXTFONT(26);
    CC_SETTEXTALIGN(0, 1, 13);
    CC_SETPOSITION(40, 0, 0, 0);
    CC_SETSIZE(272, 40, 0, 0);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXT("Set this faction as the active faction.<br>Completing tasks will increase your reputation with this faction.");
    script13439(int0, int1, int4);
    script13459(int0);
    script13458(int0, 1);
    return;
}