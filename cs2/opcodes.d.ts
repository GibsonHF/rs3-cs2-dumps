// Need to be defined for the typescript compiler
interface Boolean { }
interface Function { }
interface Number { }
interface Object { }
interface RegExp { }
interface String { }
interface IArguments { }
interface BigInt { }
interface Symbol { }
interface Array<T> { [Symbol.iterator](): any; }
declare var Symbol: { readonly iterator: unique symbol };

// Language constructs
declare class BoundFunction { }
declare function operator(op: string, ...values:any[]): any;
declare function callback(): BoundFunction;
declare function callback<T extends (...args: any[]) => any>(fn: T, ...args: T extends (...args: (infer ARGS)[]) => any ? ARGS : never): BoundFunction;
declare function comp(interf: number, element: number): component;
declare function comprel(interf: number, elementrel: number): component;
declare function pos(level: number, chunkx:number, chunkz:number, subx:number, subz:number): coordgrid;
declare function stack(...args: any[]): any;

// Compiler intrinsics
declare function varbittable(): string;
declare function opnametoid(string0: string): number;
declare function call0(int0: number): void;
declare function call1(int0: number): void;
declare function getvar0(int0: number): void;
declare function getvar1(int0: number): void;
declare function getvar2(int0: number): void;
declare function getvarother0(int0: number): void;
declare function getvarother1(int0: number): void;
declare function getvarother2(int0: number): void;
declare function setvar0(int0: number): void;
declare function setvar1(int0: number): void;
declare function setvar2(int0: number): void;
declare function op(int0: number): void;

// Clientscript types
type int = number
type type_2 = number
type quest = number
type questhelp = number
type cursor = number
type seq = number
type colour = number
type loc_shape = number
type component = number
type idkit = number
type midi = number
type npc_mode = number
type namedobj = number
type synth = number
type type_15 = number
type area = number
type stat = number
type npc_stat = number
type writeinv = number
type mesh = number
type maparea = number
type coordgrid = number
type graphic = number
type chatphrase = number
type fontmetrics = number
type cs2enum = number
type type_27 = number
type jingle = number
type chatcat = number
type loc = number
type model = number
type npc = number
type obj = number
type player_uid = number
type type_35 = BigInt
type spotanim = number
type npc_uid = number
type inv = number
type texture = number
type category = number
type char = number
type laser = number
type bas = number
type type_45 = number
type collision_geometry = number
type physics_model = number
type physics_control_modifier = number
type clanhash = BigInt
type coordfine = string
type cutscene = number
type itemcode = number
type type_54 = number
type mapsceneicon = number
type clanforumqfc = BigInt
type vorbis = number
type verify_object = number
type mapelement = number
type categorytype = number
type social_network = number
type hitmark = number
type package = number
type particle_effector = number
type type_65 = number
type particle_emitter = number
type plogtype = number
type unsigned_int = number
type skybox = number
type skydecor = number
type hash64 = BigInt
type inputtype = number
type struct = number
type dbrow = number
type type_75 = number
type type_76 = number
type type_77 = number
type type_78 = number
type type_79 = number
type type_80 = number
type type_81 = number
type type_83 = number
type type_84 = number
type type_85 = number
type type_86 = number
type type_87 = number
type type_88 = number
type gwc_platform = number
type type_90 = number
type type_91 = number
type type_92 = number
type type_93 = number
type bug_template = number
type billing_auth_flag = number
type account_feature_flag = number
type interface = number
type toplevelinterface = number
type overlayinterface = number
type clientinterface = number
type movespeed = number
type material = number
type seqgroup = number
type temp_hiscore = number
type temp_hiscore_length_type = number
type temp_hiscore_display_type = number
type temp_hiscore_contribute_result = number
type audiogroup = number
type audiomixbuss = number
type long = BigInt
type crm_channel = number
type http_image = number
type pop_up_display_behaviour = number
type poll = number
type type_115 = BigInt
type type_116 = BigInt
type pointlight = number
type player_group = number
type player_group_status = number
type player_group_invite_result = number
type player_group_modify_result = number
type player_group_join_or_create_result = number
type player_group_affinity_modify_result = number
type player_group_delta_type = number
type client_type = number
type telemetry_interval = number
type type_127 = number
type type_128 = number
type type_129 = number
type type_130 = number
type achievement = number
type stylesheet = number
type type_138 = number
type type_200 = number
type type_201 = number
type type_202 = number
type type_203 = number
type type_204 = number
type type_205 = number
type type_206 = number
type type_207 = number
type type_208 = number
type var_reference = number
type unknown_int = number
type unknown_long = BigInt
type unknown_string = string
type scriptref = number
type scriptsubref = number

// VM opcodes (scrambled_id -> canonical_id -> name)
declare function pushlocalint(): unknown_int; // 1251 -> 33
declare function plus(int0: int, int1: int): int; // 156 -> 4000
declare function pushconst(...args: any[]): any; // 2164 -> 9001
declare function intdiv(int0: int, int1: int): int; // 680 -> 4003
declare function poplocalint(int0: unknown_int): void; // 2157 -> 34
declare function push_array(int0: int): unknown_int; // 803 -> 45
declare function pop_array(int0: int, int1: unknown_int): void; // 753 -> 46
declare function branch_lt(...args: any[]): any; // 118 -> 9
declare function jump(): void; // 1280 -> 6
declare function IF_GETTEXT(int0: component): string; // 1331 -> 2602
declare function LOWERCASE(string0: string): string; // 110 -> 4103
declare function strcmp(string0: string, string1: string): int; // 2234 -> 4107
declare function AND(int0: int, int1: int): int; // 189 -> 4014
declare function minus(int0: int, int1: int): int; // 824 -> 4001
declare function gosub(...args: any[]): any; // 2242 -> 40
declare function OC_MEMBERS(int0: obj): int; // 860 -> 10314
declare function branch_eq(...args: any[]): any; // 886 -> 8
declare function MAP_MEMBERS(): unknown_int; // 918 -> 10028
declare function INV_TOTAL(int0: inv, int1: obj): int; // 372 -> 3303
declare function pushvar(...args: any[]): any; // 2015 -> 42
declare function CC_DELETEALL(int0: component): void; // 359 -> 152
declare function IF_SETHIDE(int0: boolean, int1: component): void; // 1053 -> 2003
declare function ENUM_GETOUTPUTCOUNT(int0: cs2enum): int; // 72 -> 3411
declare function enum_getvalue(int0: number, int1: number, int2: number, int3: number): any; // 2002 -> 3408
declare function IF_FIND(int0: component): unknown_int; // 1532 -> 10102
declare function intmul(int0: int, int1: int): int; // 376 -> 4002
declare function CC_GETWIDTH(): int; // 773 -> 10202
declare function IF_GETHEIGHT(int0: component): int; // 1127 -> 2503
declare function branch_gt(...args: any[]): any; // 1354 -> 10
declare function IF_SETSCROLLSIZE(int0: int, int1: int, int2: component): void; // 1369 -> 2120
declare function IF_SETSCROLLPOS(int0: int, int1: int, int2: component): void; // 1465 -> 2100
declare function pushvarbit(): int; // 1579 -> 10022
declare function IF_GETY(int0: component): int; // 1346 -> 2501
declare function IF_GETHIDE(int0: component): boolean; // 533 -> 10077
declare function branch_gteq(...args: any[]): any; // 20 -> 32
declare function IF_SETSIZE(int0: int, int1: int, int2: int, int3: int, int4: component): void; // 2032 -> 2001
declare function IF_GETWIDTH(int0: component): int; // 1982 -> 2502
declare function MIN(int0: int, int1: int): int; // 1730 -> 4016
declare function MAX(int0: int, int1: int): int; // 899 -> 4017
declare function IF_HASSUBOVERLAY(int0: component, int1: overlayinterface): unknown_int; // 2081 -> 10069
declare function IF_SETPOSITION(int0: int, int1: int, int2: int, int3: int, int4: component): void; // 1896 -> 2000
declare function branch_not(...args: any[]): any; // 369 -> 7
declare function GET_ENTITY_BOUNDING_BOX(): [unknown_int, int, int, int, int]; // 1213 -> 10172
declare function GET_ENTITY_SCREEN_POSITION(int0: int): [int, int, int]; // 1776 -> 10173
declare function GET_ENTITY_OVERLAY_HEIGHT(): int; // 1124 -> 10174
declare function npc_getparam(...args: any[]): any; // 1261 -> 10076
declare function CC_FIND(int0: component, int1: int): unknown_int; // 406 -> 10116
declare function CC_SETHIDE(int0: boolean): void; // 130 -> 1003
declare function CC_SETPOSITION(int0: int, int1: int, int2: int, int3: int): void; // 229 -> 1000
declare function CC_SETSIZE(int0: int, int1: int, int2: unknown_int, int3: unknown_int): void; // 1271 -> 1001
declare function IF_GETNEXTSUBID(int0: component): int; // 578 -> 2703
declare function popvar(...args: any[]): any; // 1381 -> 43
declare function CC_CREATE(int0: component, int1: unknown_int, int2: int): void; // 1630 -> 150
declare function CC_SETTRANS(int0: int): void; // 83 -> 1103
declare function IF_SETFILL(int0: unknown_int, int1: unknown_int): void; // 1718 -> 2102
declare function pushlocalstring(): unknown_string; // 766 -> 35
declare function MODULO(int0: int, int1: int): int; // 909 -> 4011
declare function struct_getparam(...args: any[]): any; // 1267 -> 4500
declare function branch_lteq(...args: any[]): any; // 1318 -> 31
declare function IF_SETONMOUSEREPEAT(vararg: BoundFunction, int0: unknown_int): void; // 1520 -> 2412
declare function IF_SETOP(int0: int, string0: string, int1: component): void; // 1524 -> 2300
declare function IF_SETONCLICK(vararg: BoundFunction, int0: unknown_int): void; // 935 -> 2400
declare function CC_SETONOP(vararg: BoundFunction): void; // 334 -> 1409
declare function CC_SETOP(int0: int, string0: string): void; // 1117 -> 1300
declare function CC_SETFILL(int0: unknown_int): void; // 1011 -> 1102
declare function CC_SETNOCLICKTHROUGH(int0: boolean): void; // 1588 -> 10105
declare function IF_SETOUTLINE(int0: unknown_int, int1: component): void; // 236 -> 2116
declare function IF_GETTARGETMASK(int0: component): int; // 1968 -> 2800
declare function inttostring(int0: int, int1: unknown_int): string; // 355 -> 10064
declare function strconcat(string0: string, string1: string): string; // 1748 -> 4101
declare function IF_SETTEXT(string0: string, int0: component): void; // 1818 -> 2112
declare function INV_SIZE(int0: inv): int; // 149 -> 3304
declare function INV_GETOBJ(int0: inv, int1: int): obj; // 592 -> 3301
declare function INV_GETNUM(int0: inv, int1: int): int; // 1931 -> 3302
declare function CC_SETOBJECT(int0: obj, int1: int): void; // 1350 -> 10368
declare function OC_NAME(int0: obj): string; // 906 -> 4200
declare function joinstring(...args: any[]): any; // 602 -> 37
declare function CC_SETOPBASE(string0: string): void; // 145 -> 1305
declare function CC_SETOUTLINE(int0: unknown_int): void; // 367 -> 10118
declare function IF_GETSCROLLHEIGHT(int0: component): int; // 855 -> 2604
declare function SCALE(int0: int, int1: int, int2: int): int; // 846 -> 4018
declare function IF_GETSCROLLY(int0: component): int; // 186 -> 2601
declare function CC_SETGRAPHIC(int0: graphic): void; // 1803 -> 1105
declare function CC_SETTILING(int0: boolean): void; // 479 -> 1107
declare function CC_SETDRAGGABLE(int0: component, int1: int): void; // 1109 -> 1301
declare function CC_SETDRAGRENDERBEHAVIOUR(int0: unknown_int): void; // 1598 -> 1302
declare function CC_SETONDRAG(vararg: BoundFunction): void; // 1692 -> 1405
declare function CC_SETONDRAGCOMPLETE(vararg: BoundFunction): void; // 1135 -> 1410
declare function CC_SENDTOBACK(): void; // 1623 -> 10541
declare function CC_SETONHOLD(vararg: BoundFunction): void; // 2177 -> 1401
declare function CC_SETONCLICK(vararg: BoundFunction): void; // 1409 -> 1400
declare function IF_SETONSCROLLWHEEL(vararg: BoundFunction, int0: unknown_int): void; // 650 -> 2417
declare function CC_SETHFLIP(int0: boolean): void; // 409 -> 1119
declare function CC_SETVFLIP(int0: boolean): void; // 448 -> 1118
declare function cc_setparam(int0: unknown_int, int1: unknown_int): void; // 1110 -> 10098
declare function CC_SETONVARTRANSMIT(vararg: BoundFunction): void; // 2087 -> 10145
declare function CC_GETHEIGHT(): int; // 807 -> 10162
declare function CC_DRAGPICKUP(int0: int, int1: int): void; // 1581 -> 10161
declare function poplocalstring(string0: unknown_string): void; // 279 -> 36
declare function CC_SETONMOUSEREPEAT(vararg: BoundFunction): void; // 746 -> 10107
declare function CC_SETONMOUSELEAVE(vararg: BoundFunction): void; // 267 -> 1404
declare function IF_SETCOLOUR(int0: int, int1: component): void; // 1452 -> 2101
declare function TOSTRING_LOCALISED(int0: int, int1: unknown_int): string; // 832 -> 4124
declare function STRING_LENGTH(string0: string): int; // 483 -> 4117
declare function CLAN_JOINCHAT(string0: string): void; // 465 -> 10342
declare function FORMATMINIMENU(...args: any[]): any; // 433 -> 10390
declare function ACTIVECLANSETTINGS_GETAFFINEDMUTED(...args: any[]): any; // 1767 -> 10382
declare function popdiscardint(int0: unknown_int): void; // 1131 -> 10004
declare function NOTIFICATIONS_INIT(): void; // 1834 -> 10181
declare function COORD(): coordgrid; // 1004 -> 3308
declare function COORDZ(int0: coordgrid): int; // 2037 -> 3311
declare function IF_SETONTIMER(vararg: BoundFunction, int0: unknown_int): void; // 1242 -> 2408
declare function CAM2_ADDEFFECT_ZTILT(int0: unknown_int): unknown_int; // 1206 -> 10027
declare function define_array(int0: int): void; // 23 -> 10569
declare function ARRAY_SORT(int0: int, int1: unknown_int, int2: unknown_int): void; // 1863 -> 10681
declare function IF_SETGRAPHIC(int0: graphic, int1: component): void; // 2155 -> 2105
declare function IF_GETMODELANGLE_X(int0: component): int; // 429 -> 2606
declare function IF_GETMODELANGLE_Y(int0: component): int; // 1940 -> 2608
declare function IF_GETMODELANGLE_Z(int0: component): int; // 1637 -> 2607
declare function IF_GETMODELZOOM(int0: component): int; // 1199 -> 2605
declare function IF_SETMODELANGLE(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: component): void; // 1641 -> 2109
declare function IF_SETMODEL(int0: model, int1: component): void; // 442 -> 2108
declare function IF_SETONVARTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 1551 -> 2407
declare function REMOVETAGS(string0: string): string; // 1920 -> 4119
declare function STRING_INDEXOF_CHAR(string0: string, int0: unknown_int, int1: int): int; // 1031 -> 10482
declare function SUBSTRING(string0: string, int0: int, int1: int): string; // 99 -> 4118
declare function COMLEVEL_ACTIVE(): int; // 932 -> 10415
declare function IF_SETPARAM_STRING(int0: unknown_int, string0: string, int1: component): void; // 2072 -> 10114
declare function IF_SETPARAM_INT(int0: unknown_int, int1: int, int2: component): void; // 1096 -> 2127
declare function IF_GETTOP(): unknown_int; // 46 -> 10092
declare function IF_SETTEXTANTIMACRO(int0: unknown_int, int1: component): void; // 767 -> 10406
declare function SEQLENGTH(int0: seq): int; // 1360 -> 10250
declare function IF_SETONMOUSEOVER(vararg: BoundFunction, int0: unknown_int): void; // 1313 -> 10101
declare function IF_SETONMOUSELEAVE(vararg: BoundFunction, int0: unknown_int): void; // 1719 -> 2404
declare function IF_SETMODELANIM(int0: seq, int1: component): void; // 1632 -> 2110
declare function IF_SETOBJECT(int0: obj, int1: int, int2: component): void; // 1771 -> 2200
declare function IF_SETTEXTFONT(int0: fontmetrics, int1: component): void; // 1469 -> 2113
declare function IF_SETONSUBCHANGE(...args: any[]): any; // 1335 -> 2424
declare function CC_GETHIDE(): boolean; // 57 -> 10320
declare function SOUND_VORBIS_VOLUME(int0: vorbis, int1: unknown_int, int2: int, int3: unknown_int): void; // 1907 -> 3206
declare function printmessage(string0: string): void; // 1848 -> 3100
declare function CC_SETTEXT(string0: string): void; // 499 -> 1112
declare function CHAT_PLAYERNAME(): string; // 818 -> 10029
declare function RESUME_STRINGDIALOG(string0: string): void; // 2167 -> 10119
declare function IGNORE_COUNT(): int; // 446 -> 10776
declare function IGNORE_ADD(string0: string): void; // 1382 -> 10436
declare function IGNORE_TEST(string0: string): unknown_int; // 577 -> 10270
declare function IGNORE_DEL(string0: string): void; // 42 -> 10089
declare function FRIEND_COUNT(): int; // 991 -> 10729
declare function FRIEND_ADD(string0: string): void; // 1591 -> 10419
declare function FRIEND_TEST(string0: string): unknown_int; // 1212 -> 10414
declare function CHAT_GETFILTER_PRIVATE(): int; // 2061 -> 5005
declare function CHAT_GETFILTER_PUBLIC(...args: any[]): any; // 1291 -> 5000
declare function CHAT_GETFILTER_TRADE(...args: any[]): any; // 1030 -> 5016
declare function CHAT_SETFILTER(...args: any[]): any; // 1832 -> 5001
declare function CHAT_SENDPRIVATE(string0: string, string1: string): void; // 1736 -> 10791
declare function KEYHELD_SHIFT(): boolean; // 1564 -> 10528
declare function RESUME_COUNTDIALOG(string0: string): void; // 925 -> 10006
declare function RESUME_COUNTDIALOG_LONG(string0: string): void; // 224 -> 10579
declare function ESCAPE(string0: string): string; // 520 -> 10441
declare function RESUME_NAMEDIALOG(string0: string): void; // 948 -> 10597
declare function RANDOM(int0: int): int; // 625 -> 4004
declare function IF_SETMODELTINT(int0: int, int1: unknown_int, int2: unknown_int, int3: int, int4: component): void; // 684 -> 10557
declare function CLIENTCLOCK(): int; // 1414 -> 3300
declare function cc_getparam(...args: any[]): any; // 936 -> 10049
declare function IF_TRIGGEROP(int0: component, int1: int, int2: int): void; // 309 -> 10057
declare function RANDOMINC(int0: int): int; // 1211 -> 4005
declare function PLAYERMEMBER(): boolean; // 1655 -> 10146
declare function CC_SETONTIMER(vararg: BoundFunction): void; // 817 -> 1408
declare function IF_CLOSESUBCLIENT(int0: component): void; // 834 -> 10020
declare function COORDX(int0: coordgrid): int; // 424 -> 3309
declare function COORDY(int0: coordgrid): int; // 1223 -> 3310
declare function CHAT_SENDABUSEREPORT(...args: any[]): any; // 636 -> 10596
declare function CC_GETX(): int; // 1069 -> 1500
declare function CC_GETY(): int; // 706 -> 1501
declare function IF_GETSCROLLWIDTH(int0: component): int; // 1194 -> 2603
declare function CC_DELETE(): void; // 1629 -> 10115
declare function IF_SETONINVTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 1631 -> 2414
declare function CC_SETTEXTFONT(int0: fontmetrics): void; // 1904 -> 1113
declare function CC_SETTEXTSHADOW(int0: boolean): void; // 1548 -> 1115
declare function CC_SETCOLOUR(int0: int): void; // 330 -> 1101
declare function CC_SETOBJECT_LONG(int0: obj, long0: long): void; // 502 -> 10799
declare function CC_SETDRAGDEADZONE(int0: int): void; // 198 -> 1303
declare function CC_SETDRAGDEADTIME(int0: unknown_int): void; // 628 -> 1304
declare function CC_SETOBJECT_NONUM(int0: obj, int1: int): void; // 1792 -> 10367
declare function CC_CLEAROPS(): void; // 796 -> 10026
declare function INVOTHER_GETOBJ(int0: inv, int1: int): obj; // 197 -> 3313
declare function INVOTHER_GETNUM(int0: inv, int1: int): int; // 527 -> 10726
declare function item_getparam(...args: any[]): any; // 1714 -> 4208
declare function popvarbit(int0: int): void; // 1870 -> 10023
declare function CC_GETFONTMETRICS(): fontmetrics; // 1463 -> 10437
declare function PARAHEIGHT(string0: string, int0: int, int1: fontmetrics): int; // 1187 -> 4108
declare function IF_SETONKEY(vararg: BoundFunction, int0: unknown_int): void; // 1673 -> 10265
declare function CAM2_GETCONTROLMODE(): unknown_int; // 2224 -> 10123
declare function CAM2_GETLOOKATMODE(): unknown_int; // 825 -> 10637
declare function CAM2_SETLOOKATMODE(int0: unknown_int): void; // 9 -> 10444
declare function CAM2_GETPOSITIONMODE(): unknown_int; // 240 -> 10274
declare function CAM2_SETPOSITIONMODE(int0: unknown_int): void; // 517 -> 10443
declare function CAM2_GETPOSITIONENTITY_ANGLEOFFSETS(): [int, int]; // 1860 -> 10273
declare function CAM2_SETPOSITIONENTITY_PLAYER(int0: int, int1: int, int2: int, int3: int, int4: int, int5: unknown_int, int6: unknown_int, int7: unknown_int): void; // 94 -> 10577
declare function CAM2_SETLINEARMOVEMENTMODE(int0: unknown_int): void; // 5 -> 10166
declare function CAM2_SETPOSITIONANGULARINTERPOLATION(int0: unknown_int): void; // 724 -> 10165
declare function CLAN_GETCHATCOUNT(): int; // 1377 -> 3612
declare function CLAN_LEAVECHAT(): void; // 702 -> 3620
declare function IF_SETONCLANTRANSMIT(...args: any[]): any; // 1220 -> 10229
declare function IF_SETONFRIENDTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 456 -> 10223
declare function WORLDLIST_FETCH(): unknown_int; // 393 -> 10163
declare function CC_SETTEXTALIGN(int0: int, int1: int, int2: int): void; // 620 -> 1114
declare function CC_SETLINKFRIENDCHAT(int0: int): void; // 1612 -> 10808
declare function CC_SETMAXLINES(int0: int): void; // 440 -> 10277
declare function OC_WEARPOS(int0: obj): int; // 220 -> 10253
declare function OC_CATEGORY(int0: obj): category; // 783 -> 10356
declare function enum_getreverseindex(int0: unknown_int, int1: unknown_int, int2: cs2enum, int3: unknown_int, int4: int): unknown_int; // 353 -> 10154
declare function FRIEND_GETNAME(int0: int): [string, string]; // 1021 -> 10474
declare function FRIEND_SETRANK(...args: any[]): any; // 627 -> 10481
declare function DB_GETROWTABLE(int0: dbrow): unknown_int; // 1134 -> 10363
declare function dbrow_getfield(int0: number, int1: number, int2: number): any; // 1003 -> 10094
declare function DB_GETFIELDCOUNT(int0: dbrow, int1: unknown_int): int; // 482 -> 10078
declare function STAT(int0: stat): int; // 905 -> 10093
declare function MINIMENUOPEN(int0: component, int1: unknown_int): unknown_int; // 1491 -> 10332
declare function MAP_WORLD(): int; // 1422 -> 10210
declare function WORLDLIST_SPECIFIC(int0: int): [int, string, int, string, int, int, string]; // 1154 -> 10485
declare function TESTBIT(int0: int, int1: int): int; // 70 -> 4010
declare function POW(int0: int, int1: int): int; // 2124 -> 4012
declare function IF_SETTRANS(int0: int, int1: component): void; // 337 -> 2103
declare function IF_GETLAYER(int0: component): component; // 619 -> 2505
declare function MES_TYPED(int0: unknown_int, int1: unknown_int, string0: string): void; // 3 -> 3114
declare function IGNORE_ADD_TEMP(string0: string): void; // 1808 -> 10413
declare function DB_FIND(...args: any[]): any; // 959 -> 10113
declare function dbrow_findnext(...args: any[]): any; // 1648 -> 10112
declare function CC_GETOPBASE(): string; // 596 -> 10338
declare function DATE_RUNEDAY(): int; // 462 -> 10108
declare function IF_SETONVARCTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 200 -> 2428
declare function IF_SETOBJECT_NONUM(int0: obj, int1: int, int2: component): void; // 2004 -> 2205
declare function CC_GETTEXT(): string; // 1052 -> 10201
declare function SPLINE_NEW(int0: unknown_int, int1: int): void; // 838 -> 5405
declare function MOVECOORD(int0: coordgrid, int1: int, int2: int, int3: int): coordgrid; // 1018 -> 3336
declare function SPLINE_ADDPOINT(int0: unknown_int, int1: int, int2: coordgrid, int3: int, int4: coordgrid, int5: int, int6: unknown_int): void; // 2071 -> 5406
declare function CAM_MOVEALONG(int0: unknown_int, int1: int, int2: int, int3: int, int4: unknown_int, int5: int): void; // 940 -> 5502
declare function IF_SETONCAMFINISHED(vararg: BoundFunction, int0: unknown_int): void; // 1238 -> 2426
declare function SPLINE_LENGTH(int0: unknown_int): int; // 2192 -> 5407
declare function CAM_SMOOTHRESET(): void; // 1708 -> 5512
declare function IF_SETVFLIP(int0: unknown_int, int1: component): void; // 150 -> 10373
declare function WORLDMAP_DISABLEELEMENTCATEGORY(int0: unknown_int, int1: unknown_int): void; // 1175 -> 10219
declare function SOUND_SYNTH(int0: unknown_int, int1: unknown_int, int2: int): void; // 168 -> 3200
declare function WORLDMAP_DISABLETYPE(int0: unknown_int, int1: unknown_int): void; // 1584 -> 10280
declare function WORLDMAP_DISABLETEXTSIZE(int0: unknown_int, int1: unknown_int): void; // 2134 -> 10279
declare function WORLDMAP_GETCURRENTMAP(): maparea; // 1440 -> 10590
declare function WORLDMAP_GETMAPNAME(int0: maparea): string; // 973 -> 5207
declare function CC_SETONMOUSEOVER(vararg: BoundFunction): void; // 582 -> 1403
declare function WORLDMAP_SETMAP(int0: maparea): void; // 1068 -> 10589
declare function HAS_HTML5(): unknown_int; // 1216 -> 10489
declare function WORLDMAP_GETCONFIGZOOM(int0: maparea): int; // 1239 -> 10588
declare function WORLDMAP_GETDISABLEELEMENTS(): unknown_int; // 1910 -> 10964
declare function WORLDMAP_GETDISPLAYCOORD(int0: coordgrid): [int, int]; // 688 -> 10679
declare function CC_SETLINEDIRECTION(int0: unknown_int): void; // 928 -> 10852
declare function CC_SETLINEWID(int0: int): void; // 1889 -> 10851
declare function PARAWIDTH(string0: string, int0: int, int1: fontmetrics): int; // 1597 -> 10251
declare function WORLDMAP_JUMPTOSOURCECOORD(int0: coordgrid): void; // 2088 -> 5214
declare function WORLDMAP_JUMPTODISPLAYCOORD(int0: coordgrid): void; // 281 -> 10488
declare function WORLDMAP_GETMAP(int0: coordgrid): maparea; // 769 -> 10613
declare function WORLDMAP_SETMAP_COORD_OVERRIDE(int0: maparea, int1: coordgrid): void; // 1293 -> 10612
declare function IF_SETTEXTALIGN(int0: int, int1: int, int2: int, int3: component): void; // 119 -> 10261
declare function MARKETING_INITANALYTICS(...args: any[]): any; // 1916 -> 10340
declare function MARKETING_INITATTRIBUTION(...args: any[]): any; // 600 -> 10339
declare function OC_UNCERT(int0: obj): obj; // 968 -> 10249
declare function OC_CERT(int0: obj): obj; // 1912 -> 10422
declare function STAT_BASE(int0: stat): int; // 1260 -> 3306
declare function enum_getreversecount(int0: unknown_int, int1: cs2enum, int2: unknown_int): int; // 1370 -> 10240
declare function DATE_MINUTES(): int; // 381 -> 6300
declare function IF_SET2DANGLE(int0: int, int1: component): void; // 1952 -> 10060
declare function MAP_LANG(): int; // 2035 -> 3335
declare function CC_SETMODEL(int0: model): void; // 1393 -> 1108
declare function CC_SETMODELANIM(int0: seq): void; // 1953 -> 1110
declare function CC_SETMODELANGLE(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int): void; // 1451 -> 1109
declare function IF_GETPARENTLAYER(int0: component): component; // 1288 -> 10121
declare function IF_SETNOCLICKTHROUGH(int0: unknown_int, int1: component): void; // 1859 -> 2005
declare function WORLDMAP_COORDINMAP(int0: coordgrid, int1: maparea): unknown_int; // 1540 -> 10844
declare function IF_SETONRESIZE(vararg: BoundFunction, int0: unknown_int): void; // 555 -> 10097
declare function IF_SETONOP(vararg: BoundFunction, int0: unknown_int): void; // 709 -> 2409
declare function FRIEND_DEL(string0: string): void; // 1764 -> 10007
declare function OC_HASVAROBJ(int0: obj): unknown_int; // 1672 -> 10341
declare function INV_GETVAR(int0: inv, int1: int, int2: unknown_int): int; // 1985 -> 10155
declare function IF_CLEAROPS(int0: component): void; // 2198 -> 2307
declare function IF_SETNPCMODEL(int0: npc, int1: component): void; // 668 -> 10083
declare function BAS_GETANIM_READY(int0: bas): seq; // 589 -> 4600
declare function IF_SETMODELZOOM(int0: int, int1: component): void; // 1845 -> 2123
declare function ABS(int0: int): int; // 95 -> 10527
declare function STRINGWIDTH(string0: string, int0: fontmetrics): int; // 503 -> 4125
declare function GETBIT_RANGE(int0: int, int1: int, int2: int): int; // 1682 -> 10494
declare function IF_SETONVERTICALSWIPE(vararg: BoundFunction, int0: unknown_int): void; // 962 -> 10359
declare function IF_SETONHORIZONTALSWIPE(vararg: BoundFunction, int0: unknown_int): void; // 2099 -> 10344
declare function MARKETING_SENDANALYTICSEVENT(string0: string): void; // 697 -> 10515
declare function MARKETING_SENDATTRIBUTIONEVENT(string0: string): void; // 2122 -> 10514
declare function CHAT_PLAYERNAME_UNFILTERED(): string; // 567 -> 5020
declare function ACTIVECLANSETTINGS_GETAFFINEDSLOT(string0: string): unknown_int; // 843 -> 10547
declare function ACTIVECLANSETTINGS_GETAFFINEDRANK(int0: unknown_int): int; // 1067 -> 10546
declare function IF_GETTRANS(int0: component): int; // 2158 -> 2609
declare function INT_TO_LONG(int0: int): long; // 1289 -> 10033
declare function branch_lt_long(...args: any[]): any; // 2148 -> 10411
declare function IF_GETX(int0: component): int; // 1645 -> 2500
declare function STRING_INDEXOF_STRING(string0: string, string1: string, int0: int): int; // 862 -> 4121
declare function CAM_FOLLOWCOORD(int0: coordgrid): void; // 946 -> 5511
declare function CAM_GETANGLE_XA(): int; // 159 -> 10454
declare function CAM_GETANGLE_YA(): int; // 1934 -> 10453
declare function CAM_FORCEANGLE(int0: int, int1: int): void; // 635 -> 5504
declare function IF_SETTARGETCURSORS(int0: cursor, int1: cursor, int2: unknown_int): void; // 1279 -> 10759
declare function IF_HASSUBMODAL(int0: component, int1: unknown_int): unknown_int; // 323 -> 10068
declare function IF_SETOPBASE(string0: string, int0: component): void; // 1479 -> 2305
declare function IF_SETOPCURSOR(int0: unknown_int, int1: unknown_int, int2: component): void; // 845 -> 2309
declare function CC_GETID(): int; // 2139 -> 1702
declare function CC_SETLINKACTIVECLANCHANNEL(int0: int): void; // 1544 -> 10630
declare function CC_SETONRELEASE(vararg: BoundFunction): void; // 923 -> 1402
declare function SETBIT(int0: int, int1: int): int; // 2188 -> 10232
declare function CLEARBIT(int0: int, int1: int): int; // 47 -> 10233
declare function GETWINDOWMODE(): int; // 495 -> 5306
declare function STAT_VISIBLE_XP(int0: stat): int; // 1397 -> 3307
declare function STAT_BASE_ACTUAL(int0: stat): int; // 907 -> 10296
declare function STAT_VISIBLE_XP_ACTUAL(int0: stat): int; // 447 -> 10088
declare function IF_SETONDIALOGABORT(vararg: BoundFunction, int0: unknown_int): void; // 1244 -> 10052
declare function IF_CLOSE(): void; // 1121 -> 10151
declare function OC_FIND(string0: string, int0: boolean): int; // 1471 -> 10812
declare function OC_FINDNEXT(): obj; // 739 -> 10811
declare function RESUME_OBJDIALOG(int0: obj): void; // 617 -> 3110
declare function IF_SETONSTOCKTRANSMIT(...args: any[]): any; // 1955 -> 10470
declare function STOCKMARKET_GETOFFERTYPE(int0: int, int1: unknown_int): int; // 958 -> 10784
declare function STOCKMARKET_GETOFFERCOUNT(int0: int, int1: unknown_int): int; // 1255 -> 10600
declare function STOCKMARKET_GETOFFERCOMPLETEDCOUNT(int0: int, int1: unknown_int): int; // 1951 -> 10803
declare function STOCKMARKET_GETOFFERCOMPLETEDGOLD(...args: any[]): any; // 2034 -> 10802
declare function poplocallong(long0: unknown_long): void; // 879 -> 10237
declare function STOCKMARKET_GETOFFERITEM(int0: int, int1: unknown_int): obj; // 1874 -> 10570
declare function pushlocallong(): unknown_long; // 1729 -> 10024
declare function SUB_LONG(long0: long, long1: long): long; // 373 -> 10322
declare function TOSTRING_LOCALISED_LONG(long0: long, int0: unknown_int): string; // 1308 -> 10519
declare function STOCKMARKET_ISOFFERADDING(int0: int, int1: unknown_int): unknown_int; // 1219 -> 10801
declare function STOCKMARKET_ISOFFERFINISHED(int0: int, int1: unknown_int): unknown_int; // 854 -> 10490
declare function MAX_LONG(long0: unknown_long, long1: long): long; // 505 -> 10389
declare function IF_SETTARGETVERB(string0: unknown_string, int0: component): void; // 1915 -> 10551
declare function CC_SETTARGETVERB(string0: string): void; // 1884 -> 10689
declare function STOCKMARKET_ISOFFEREMPTY(int0: int, int1: unknown_int): unknown_int; // 1983 -> 10300
declare function STOCKMARKET_GETOFFERPRICE(int0: int, int1: unknown_int): long; // 437 -> 10599
declare function CC_CLEARSCRIPTHOOKS(): void; // 714 -> 10217
declare function IF_SETONTARGETENTER(...args: any[]): any; // 774 -> 2416
declare function IF_SETONTARGETLEAVE(vararg: BoundFunction, int0: unknown_int): void; // 1777 -> 2406
declare function IF_SETONSTATTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 2186 -> 2415
declare function CC_SETONTARGETENTER(...args: any[]): any; // 1873 -> 10734
declare function CC_SETONTARGETLEAVE(...args: any[]): any; // 1040 -> 10733
declare function CC_GETTRANS(): int; // 1429 -> 10378
declare function CC_SETNPCHEAD(int0: npc): void; // 839 -> 10205
declare function CC_GETMODELANGLE_X(...args: any[]): any; // 374 -> 10329
declare function CC_GETMODELANGLE_Z(...args: any[]): any; // 89 -> 10327
declare function CC_GETMODELZOOM(): int; // 1487 -> 10326
declare function OR(int0: int, int1: int): int; // 44 -> 10075
declare function CC_GETTARGETMASK(): int; // 2058 -> 10407
declare function MAP_LOADEDPERCENT(): int; // 883 -> 10535
declare function IF_SETGRAPHICSHADOW(int0: unknown_int, int1: component): void; // 68 -> 2117
declare function CAM2_SETCOLLISIONMODE(int0: unknown_int, int1: unknown_int): void; // 257 -> 10030
declare function HAS_NXT(): unknown_int; // 664 -> 10211
declare function CAM2_SETDEPTHPLANES(int0: unknown_int, int1: unknown_int): void; // 1676 -> 10198
declare function IF_GETGRAPHIC(int0: component): graphic; // 1435 -> 2612
declare function MAP_LOADINGSCREEN_SETTRIGGERPERCENT(int0: unknown_int, int1: unknown_int): void; // 1358 -> 10110
declare function IF_SENDTOBACK(int0: component): void; // 1229 -> 10011
declare function IF_SENDTOFRONT(int0: component): void; // 195 -> 10010
declare function IF_RESETMODELLIGHTING(int0: component): void; // 853 -> 10781
declare function IF_SETMODELLIGHTING(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: material, int10: component): void; // 1615 -> 10242
declare function IF_GETFONTMETRICS(int0: component): fontmetrics; // 1455 -> 10317
declare function CC_SET2DANGLE(int0: int): void; // 1160 -> 1106
declare function IF_SETONMISCTRANSMIT(...args: any[]): any; // 881 -> 2422
declare function CC_GET2DANGLE(): int; // 1122 -> 10499
declare function IF_CALLONRESIZE(int0: component): void; // 1926 -> 10059
declare function TARGETMODE_ACTIVE(): unknown_int; // 908 -> 10207
declare function TARGETMODE_CANCEL(): void; // 912 -> 10206
declare function RUNENERGY_VISIBLE(): int; // 760 -> 3321
declare function IF_GETGRAPHICDIMENSIONS(int0: component): [int, int]; // 519 -> 10621
declare function IF_SETONHOLD(...args: any[]): any; // 2049 -> 10807
declare function IF_SETONRELEASE(...args: any[]): any; // 1402 -> 10255
declare function IF_SETNPCHEAD(int0: npc, int1: component): void; // 770 -> 2201
declare function OPENURL(string0: unknown_string, string1: string, int0: unknown_int): void; // 75 -> 10054
declare function IF_SETMAXLINES(int0: unknown_int, int1: component): void; // 1323 -> 10258
declare function enum_getstring(int0: unknown_int, int1: unknown_int): string; // 734 -> 10047
declare function CC_SETPARAM_INT(int0: unknown_int, int1: int): void; // 2093 -> 10200
declare function CC_SETPARAM_STRING(int0: unknown_int, string0: string): void; // 1800 -> 10291
declare function popdiscardstring(string0: string): void; // 1733 -> 10360
declare function IF_SETOBJECT_ALWAYSNUM(int0: obj, int1: int, int2: component): void; // 1833 -> 10498
declare function OC_IOP(int0: obj, int1: unknown_int): string; // 1944 -> 10243
declare function SOUND_VORBIS_RATE(int0: vorbis, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: int): void; // 1669 -> 3209
declare function INV_TOTALCAT(int0: inv, int1: unknown_int): int; // 1386 -> 10147
declare function IF_GETCHARPOSATINDEX(int0: int, int1: component): [int, int]; // 1438 -> 10765
declare function APPLET_HASFOCUS(): unknown_int; // 8 -> 10369
declare function OC_ICURSOR(...args: any[]): any; // 2183 -> 10560
declare function INVOTHER_GETVAR(int0: inv, int1: int, int2: unknown_int): int; // 1307 -> 10585
declare function CLIENTOPTION_SET(int0: int, int1: int): void; // 726 -> 10032
declare function CHATPHRASE_GETAUTORESPONSECOUNT(int0: chatphrase): int; // 325 -> 10533
declare function IF_GETSCROLLX(int0: component): int; // 1315 -> 2600
declare function CHATPHRASE_GETDYNAMICCOMMANDCOUNT(int0: chatphrase): int; // 1510 -> 10469
declare function CHATPHRASE_GETDYNAMICCOMMAND(int0: chatphrase, int1: int): unknown_int; // 1217 -> 10664
declare function ACTIVECHATPHRASE_SETDYNAMICINT(int0: unknown_int, int1: int): void; // 776 -> 10616
declare function ACTIVECHATPHRASE_SETDYNAMICOBJ(int0: unknown_int, int1: obj): void; // 1114 -> 10617
declare function FRIEND_GETSLOTFROMNAME(string0: string): int; // 545 -> 10493
declare function FRIEND_GETWORLD(int0: int): int; // 1439 -> 10212
declare function FRIEND_PLATFORM(int0: int): unknown_int; // 1785 -> 10287
declare function FRIEND_IS_REFERRER(int0: int): unknown_int; // 679 -> 10883
declare function FRIEND_IS_REFERRED(int0: int): unknown_int; // 2191 -> 10882
declare function CC_SETLINKFRIEND(int0: int): void; // 1156 -> 10631
declare function MAP_QUICKCHAT(): unknown_int; // 1978 -> 10639
declare function USERDETAIL_QUICKCHAT(): unknown_int; // 1500 -> 10305
declare function FRIEND_GETNOTES(int0: int): string; // 851 -> 10701
declare function PLAYER_GROUP_FIND(): unknown_int; // 1225 -> 10082
declare function FRIEND_GETWORLDNAME(int0: int): string; // 1243 -> 10875
declare function SETDEFAULTCURSORS(int0: unknown_int, int1: unknown_int): void; // 262 -> 10122
declare function SETHARDCODEDOPCURSORS(int0: unknown_int, int1: unknown_int): void; // 1563 -> 10539
declare function PLATFORMTYPE(): unknown_int; // 2109 -> 10209
declare function IF_GETMODELXOF(int0: number): number; // 2 -> 2610
declare function IF_GETMODELYOF(int0: number): number; // 677 -> 2611
declare function CC_GETMODELXOF(...args: any[]): any; // 2147 -> 10331
declare function CC_GETMODELYOF(): int; // 1786 -> 10330
declare function CC_GETMODELANGLE_Y(): int; // 1822 -> 10328
declare function IF_CRMVIEW_INIT(): boolean; // 235 -> 10135
declare function CAM2_REMOVEEFFECT(int0: unknown_int): void; // 1083 -> 10015
declare function SETUP_MESSAGEBOX(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: unknown_int, int9: unknown_int, int10: unknown_int): void; // 1795 -> 10861
declare function VIDEO_ADVERT_FORCE_REMOVE(): void; // 1905 -> 10365
declare function DATE_RUNEDAY_TODATE(int0: int): [int, int, int]; // 97 -> 10275
declare function CONSOLE_ENABLESNOW(): void; // 980 -> 10860
declare function CLIENTOPTION_GET(int0: int): int; // 1547 -> 10139
declare function INV_FREESPACE(int0: inv): int; // 48 -> 10199
declare function branch_gt_long(...args: any[]): any; // 329 -> 10321
declare function IF_SETDRAGGABLE(int0: component, int1: unknown_int, int2: component): void; // 1075 -> 10290
declare function SHOP_REQUESTDATASTATUS(): unknown_int; // 165 -> 10609
declare function GENDER(): int; // 1811 -> 10235
declare function IF_HASSUB(int0: component): unknown_int; // 1378 -> 10048
declare function INV_TOTALPARAM(int0: inv, int1: unknown_int): int; // 722 -> 10218
declare function IF_SETENABLED(int0: boolean, int1: component): void; // 188 -> 10152
declare function IF_GETMODEL(int0: unknown_int): model; // 1925 -> 10374
declare function IF_SETOPKEY(int0: int, int1: unknown_int, int2: unknown_int, int3: component): void; // 1697 -> 10194
declare function IF_SETOPKEYIGNOREHELD(int0: unknown_int, int1: component): void; // 771 -> 10193
declare function SHOP_PURCHASEITEM(string0: unknown_string): void; // 902 -> 10216
declare function IF_SETSUBTRACTINSETS(...args: any[]): any; // 218 -> 10423
declare function KEYHELD_CTRL(): boolean; // 1626 -> 10529
declare function SHOP_PURCHASEITEMSTATUS(): unknown_int; // 1456 -> 10343
declare function WORLDMAP_SETZOOM(...args: any[]): any; // 1049 -> 10425
declare function WORLDMAP_GETZOOM(...args: any[]): any; // 1389 -> 10424
declare function CAM2_ISENABLED(): unknown_int; // 570 -> 10536
declare function CC_SETONCLICKREPEAT(...args: any[]): any; // 1941 -> 10288
declare function CC_SETONBUTTONCLICK(vararg: BoundFunction): void; // 1574 -> 10445
declare function VIEWPORT_SETFOV(int0: unknown_int, int1: unknown_int): void; // 2019 -> 10042
declare function IF_SETPAUSETEXT(string0: string, int0: component): void; // 1856 -> 10111
declare function HSVTORGB(int0: int): int; // 868 -> 4020
declare function RANDOM_SOUND_PITCH(int0: vorbis, int1: unknown_int, int2: unknown_int, int3: int, int4: unknown_int, int5: unknown_int): [vorbis, unknown_int, unknown_int, unknown_int, int]; // 49 -> 4019
declare function enum_hasoutput(int0: unknown_int, int1: cs2enum, int2: unknown_int): unknown_int; // 493 -> 10244
declare function CC_GETINVCOUNT(): int; // 1970 -> 10248
declare function BASEIDKIT(int0: unknown_int, int1: idkit): void; // 1513 -> 10239
declare function BASECOLOUR(int0: unknown_int, int1: int): void; // 1427 -> 404
declare function CC_SETPLAYERMODEL_SELF(): void; // 1391 -> 1211
declare function CC_SETONVARCTRANSMIT(vararg: BoundFunction): void; // 1047 -> 1428
declare function CHAT_LASTUID(): int; // 1302 -> 10063
declare function IF_SETONTARGETENTER(int0: unknown_int, string0: string, int1: int): void; // 2074 -> 10214
declare function CC_SETSUBTRACTINSETS(): void; // 1071 -> 10039
declare function CLAN_ISSELF(int0: int): unknown_int; // 1312 -> 10627
declare function CLAN_GETCHATRANK(): int; // 820 -> 3618
declare function CLAN_GETCHATMINKICK(int0: int): [unknown_int, unknown_int]; // 515 -> 3616
declare function CLAN_GETCHATUSERRANK(int0: int): int; // 1226 -> 10626
declare function WORLDMAP_ISLOADED(): unknown_int; // 1891 -> 10149
declare function WORLDMAP_GETDISPLAYPOSITION(): [int, int]; // 1276 -> 10677
declare function IF_SETPLAYERMODEL_SELF(int0: unknown_int): void; // 2220 -> 10292
declare function CLAN_KICKUSER(string0: string): void; // 41 -> 10845
declare function CHAT_SETMODE(int0: int): void; // 365 -> 10126
declare function CHAT_SENDPUBLIC(string0: string): void; // 192 -> 10125
declare function CC_FINDBYCATEGORY(int0: component, int1: int, int2: int): unknown_int; // 1963 -> 10150
declare function CC_SETOBJECT_ALWAYSNUM(int0: obj, int1: int): void; // 2156 -> 10366
declare function CAM_RESET(): void; // 998 -> 5503
declare function CC_SETOPCURSOR(int0: int, int1: unknown_int): void; // 1287 -> 10043
declare function BITCOUNT(int0: int): int; // 2021 -> 10050
declare function CC_GETLAYER(): component; // 1166 -> 1505
declare function ABORT_DIALOG(): void; // 445 -> 10031
declare function CLAN_GETCHATDISPLAYNAME(): string; // 243 -> 10286
declare function IF_SETTILING(int0: unknown_int, int1: component): void; // 1057 -> 10783
declare function IF_SETONVARCSTRTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 1699 -> 2429
declare function IF_SETONCHATTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 1174 -> 10486
declare function CC_GETGRAPHIC(): graphic; // 423 -> 10289
declare function CHAR_ISPRINTABLE(int0: unknown_int): unknown_int; // 1945 -> 10635
declare function WORLDMAP_LISTELEMENT_START(...args: any[]): any; // 1552 -> 10817
declare function MEC_TEXT(int0: unknown_int): string; // 756 -> 10816
declare function WORLDMAP_LISTELEMENT_NEXT(): [unknown_int, coordgrid]; // 2078 -> 10815
declare function REBOOTTIMER(): int; // 652 -> 10276
declare function FRIEND_GETRANK(...args: any[]): any; // 2094 -> 10818
declare function IF_CLEARSCRIPTHOOKS(int0: component): void; // 823 -> 10387
declare function WORLDMAP_CLOSEMAP(...args: any[]): any; // 945 -> 10386
declare function CHATPHRASE_FIND(string0: string, int0: unknown_int): int; // 718 -> 10820
declare function CHATPHRASE_FINDNEXT(): chatphrase; // 1148 -> 10819
declare function CHATPHRASE_GETTEXT(int0: chatphrase): string; // 2046 -> 10810
declare function APPEND_NUM(string0: string, int0: int): string; // 1476 -> 10611
declare function IF_SETTEXTSHADOW(int0: unknown_int, int1: component): void; // 305 -> 10512
declare function VIDEO_ADVERT_HAS_FINISHED(): unknown_int; // 391 -> 10775
declare function DETAIL_SOUNDVOL(...args: any[]): any; // 204 -> 10160
declare function DETAIL_BGSOUNDVOL(...args: any[]): any; // 2027 -> 10158
declare function DETAIL_SPEECHVOL(...args: any[]): any; // 1590 -> 10157
declare function DETAIL_LOGINVOL(...args: any[]): any; // 2199 -> 10156
declare function VIDEO_ADVERT_PLAY(int0: unknown_int): unknown_int; // 76 -> 10774
declare function INV_STOCKBASE(int0: unknown_int, int1: unknown_int): unknown_int; // 979 -> 10350
declare function CC_GETCOLOUR(): int; // 354 -> 10297
declare function IF_OPENSUBCLIENT(int0: component, int1: unknown_int): void; // 863 -> 10141
declare function CC_SETALPHA(int0: unknown_int): void; // 1294 -> 10730
declare function QUEST_GETNAME(int0: quest): string; // 607 -> 10245
declare function QUEST_GETSORTNAME(...args: any[]): any; // 1357 -> 10540
declare function quest_getparam(...args: any[]): any; // 1205 -> 10262
declare function QUEST_GETDIFFICULTY(int0: quest): int; // 1431 -> 10241
declare function SIN_DEG(...args: any[]): any; // 2227 -> 10396
declare function COS_DEG(...args: any[]): any; // 630 -> 10395
declare function QUEST_QUESTREQ_COUNT(int0: quest): int; // 989 -> 10595
declare function QUEST_QUESTREQ(int0: quest, int1: int): quest; // 1336 -> 10594
declare function QUEST_STATREQ_COUNT(int0: quest): int; // 126 -> 10510
declare function QUEST_STATREQ_STAT(...args: any[]): any; // 1643 -> 10509
declare function QUEST_STATREQ_LEVEL(...args: any[]): any; // 1498 -> 10508
declare function VIEWPORT_SETZOOM(int0: int, int1: int): void; // 2114 -> 10222
declare function VIEWPORT_CLAMPFOV(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int): void; // 1065 -> 10221
declare function CAM2_SETFIELDOFVIEW(int0: int, int1: int): void; // 1898 -> 10036
declare function QUEST_GETMEMBERS(int0: quest): boolean; // 1426 -> 10716
declare function QUEST_POINTSREQ(int0: quest): int; // 913 -> 10516
declare function QUEST_POINTS(int0: quest): int; // 1480 -> 10727
declare function DIVIDE_LONG(long0: long, long1: long): long; // 731 -> 10412
declare function MULTIPLY_LONG(long0: long, long1: long): long; // 1430 -> 10371
declare function QUEST_FINISHED(int0: quest): boolean; // 1446 -> 10430
declare function QUEST_STARTED(int0: quest): unknown_int; // 765 -> 10521
declare function CHAR_ISALPHANUMERIC(int0: unknown_int): unknown_int; // 248 -> 10867
declare function CHAR_TOLOWERCASE(string0: string, int0: unknown_int): [string, unknown_int]; // 112 -> 10866
declare function ADDPERCENT(int0: int, int1: unknown_int): int; // 1101 -> 10680
declare function APPEND_CHAR(string0: string, int0: unknown_int): string; // 313 -> 10634
declare function IF_GET2DANGLE(int0: component): int; // 1411 -> 10167
declare function CC_SETTARGETOPCURSOR(int0: cursor): void; // 804 -> 10789
declare function CC_SETTARGETCURSORS(int0: cursor, int1: cursor): void; // 466 -> 10788
declare function WORLDLIST_PINGWORLDS(int0: unknown_int): void; // 784 -> 6509
declare function LOBBY_LEAVELOBBY(): void; // 255 -> 5616
declare function CHATCAT_GETSUBCATCOUNT(...args: any[]): any; // 1221 -> 10890
declare function CHATCAT_GETPHRASECOUNT(...args: any[]): any; // 869 -> 10889
declare function CHATCAT_GETSUBCAT(int0: chatcat, int1: int): chatcat; // 1329 -> 10886
declare function CHATCAT_GETPHRASE(int0: chatcat, int1: int): chatphrase; // 585 -> 10884
declare function CHATPHRASE_GETAUTORESPONSE(int0: chatphrase, int1: int): chatphrase; // 934 -> 10869
declare function CHAR_TOUPPERCASE(int0: unknown_int): unknown_int; // 54 -> 10887
declare function CHATCAT_GETSUBCATSHORTCUT(int0: chatcat, int1: int): unknown_int; // 537 -> 10888
declare function CHAR_ISNUMERIC(int0: unknown_int): unknown_int; // 1829 -> 10885
declare function IF_SETLINEDIRECTION(int0: unknown_int, int1: component): void; // 1472 -> 10864
declare function GET_COL_TAG(int0: int): string; // 654 -> 10061
declare function CLIENTOPTION_EXISTS(int0: int): unknown_int; // 1283 -> 10737
declare function CLIENTOPTION_CANMOD(int0: int): unknown_int; // 938 -> 10736
declare function AUTOSETUP_GETLEVEL(): unknown_int; // 1773 -> 10319
declare function USERDETAIL_LOBBY_MEMBERSHIP(): [int, int, unknown_int]; // 2133 -> 10660
declare function FORMAT_DATETIME_FROM_MINUTES(int0: int): string; // 793 -> 10576
declare function IF_SETONBUTTONCLICK(...args: any[]): any; // 2000 -> 10197
declare function IF_NPC_SETCUSTOMHEADMODEL(int0: unknown_int, int1: unknown_int, int2: unknown_int): void; // 1434 -> 10464
declare function IF_NPC_SETCUSTOMRETEX(int0: unknown_int, int1: material, int2: unknown_int): void; // 1195 -> 10463
declare function CLEARBIT_RANGE(int0: int, int1: unknown_int, int2: unknown_int): int; // 1901 -> 10853
declare function USERDETAIL_LOBBY_UNREADMESSAGES(...args: any[]): any; // 1658 -> 10690
declare function USERDETAIL_LOBBY_EMAILSTATUS(...args: any[]): any; // 1186 -> 10703
declare function FULLSCREEN_GETMODE(int0: int): [int, int]; // 2213 -> 10355
declare function AUTOSETUP_SETCUSTOM(): void; // 382 -> 10604
declare function SETWINDOWMODE(...args: any[]): any; // 1019 -> 10671
declare function SETDEFAULTWINDOWMODE(...args: any[]): any; // 2089 -> 10670
declare function FULLSCREEN_MODECOUNT(): int; // 903 -> 10669
declare function FULLSCREEN_ENTER(int0: int, int1: int): unknown_int; // 217 -> 10668
declare function CREATE_CONNECT_REPLY(): unknown_int; // 1852 -> 10786
declare function CREATE_REPLY(): unknown_int; // 1029 -> 10563
declare function CREATE_EMAIL_VALIDATE_REPLY(): unknown_int; // 1713 -> 10975
declare function WORLDLIST_SPECIFIC_THISWORLD(): int; // 6 -> 10208
declare function CC_NPC_SETCUSTOMBODYMODEL(int0: int, int1: model): void; // 158 -> 10766
declare function CC_NPC_SETCUSTOMRETEX(int0: unknown_int, int1: unknown_int): void; // 872 -> 10409
declare function IF_SETONDRAG(vararg: BoundFunction, int0: unknown_int): void; // 2142 -> 10388
declare function IF_SETONDRAGCOMPLETE(vararg: BoundFunction, int0: unknown_int): void; // 696 -> 2410
declare function IF_SETDRAGRENDERBEHAVIOUR(int0: unknown_int, int1: unknown_int): void; // 829 -> 10697
declare function CAM_DEC_Y(): void; // 727 -> 10720
declare function CAM_INC_Y(): void; // 1341 -> 10719
declare function CAM_INC_X(): void; // 1871 -> 10718
declare function CAM_DEC_X(): void; // 1649 -> 10717
declare function CC_GETINVOBJECT(): obj; // 1300 -> 10313
declare function USERDETAIL_LOBBY_CCEXPIRY(...args: any[]): any; // 1757 -> 10856
declare function USERDETAIL_LOBBY_GRACEEXPIRY(...args: any[]): any; // 1482 -> 10855
declare function AUTOSETUP_SETLOW(): void; // 1316 -> 10608
declare function OPENURLRAW(string0: string, int0: unknown_int): void; // 710 -> 10040
declare function branch_gteq_long(...args: any[]): any; // 622 -> 10349
declare function WORLDLIST_SORT(int0: int, int1: boolean, int2: int, int3: boolean): void; // 521 -> 10747
declare function LOGIN_RESETREPLY(): void; // 559 -> 10266
declare function SSO_AVAILABLE(): unknown_int; // 1678 -> 10294
declare function LOBBY_ENTERLOBBY_SSO(string0: string, int0: boolean): void; // 1688 -> 10375
declare function LOBBY_ENTERLOBBY(string0: string, string1: string, string2: string, int0: boolean): void; // 1344 -> 10710
declare function LOBBY_ENTERLOBBYREPLY(): unknown_int; // 972 -> 10067
declare function WINDOW_GETINSETS(): [int, int, int, int]; // 1296 -> 10446
declare function IF_SLIDER_GETMINMAX(int0: int, int1: int): unknown_int; // 1614 -> 10678
declare function USERDETAIL_LOBBY_LASTLOGINDAY(): int; // 557 -> 10834
declare function CAM2_GETPOSITIONPOINT_POINT(...args: any[]): any; // 1935 -> 10504
declare function MOVECOORD_FINE(...args: any[]): any; // 1035 -> 10401
declare function CAM2_SETPOSITIONPOINT_POINT(...args: any[]): any; // 1666 -> 10439
declare function LOGIN_CANCEL(): void; // 1698 -> 5630
declare function IGNORE_GETNAME(int0: int): [string, string]; // 595 -> 10472
declare function STAFFMODLEVEL(): unknown_int; // 2179 -> 10180
declare function PLAYERMOD(): unknown_int; // 2044 -> 10456
declare function IF_BUTTON_SETTOGGLED(int0: unknown_int, int1: component): void; // 60 -> 10185
declare function LOBBY_ENTERGAMEREPLY(): int; // 1567 -> 10186
declare function GET_MOUSEX(): int; // 1561 -> 3342
declare function GET_MOUSEY(): int; // 352 -> 3343
declare function NOTIFICATIONS_SENDGROUPEDLOCAL(int0: int, int1: int): [int, string, unknown_int]; // 1691 -> 10522
declare function TTV_LOGOUT(): unknown_int; // 10 -> 10615
declare function TTV_LIBRARY_REQUEST(): int; // 931 -> 10503
declare function TTV_STREAM_START(int0: int, int1: int, int2: int, int3: unknown_int): int; // 895 -> 10722
declare function TTV_STREAM_SETTITLE(string0: string): int; // 707 -> 10721
declare function IF_SET2DANGLE(): unknown_int; // 2201 -> 10189
declare function QUIT(): void; // 427 -> 10362
declare function SHOP_GETINDEXFORCATEGORYID(...args: any[]): any; // 1290 -> 10655
declare function SHOP_GETPRODUCTCOUNT(...args: any[]): any; // 705 -> 10654
declare function SHOP_GETPRODUCTDETAILS(int0: unknown_int, int1: int): [string, string, unknown_string, string, unknown_string, unknown_string, int, string]; // 563 -> 10653
declare function CHAT_SETMODE(int0: int): void; // 1473 -> 10126
declare function ACTIVECLANCHANNEL_GETUSERCOUNT(): int; // 120 -> 10740
declare function ACTIVECLANCHANNEL_GETUSERSLOT(string0: string): int; // 348 -> 3760
declare function ACTIVECLANCHANNEL_GETUSERRANK(int0: int): int; // 2135 -> 3757
declare function ACTIVECLANCHANNEL_GETCLANNAME(): string; // 201 -> 10688
declare function ACTIVECLANCHANNEL_GETUSERDISPLAYNAME(int0: int): string; // 1706 -> 10739
declare function ACTIVECLANCHANNEL_GETUSERWORLD(int0: int): int; // 951 -> 10335
declare function IF_SETONCLANCHANNELTRANSMIT(...args: any[]): any; // 939 -> 10228
declare function IF_SETONCLANSETTINGSTRANSMIT(vararg: BoundFunction, int0: unknown_int): void; // 2096 -> 2431
declare function PLAYERMODLEVEL(): unknown_int; // 326 -> 10455
declare function UNKNOWN_COMMAND_126(): [int, int, int, int]; // 1234 -> 10416
declare function CANCEL_INTERFACE_DRAG(): void; // 874 -> 10003
declare function UNKNOWN_COMMAND_455(): void; // 1919 -> 10497
declare function DATE_MINUTES_FROMRUNEDAY(int0: int): int; // 687 -> 6306
declare function IF_LIST_SETENTRIES(int0: unknown_int, int1: component): void; // 678 -> 10391
declare function IF_LIST_SETDROPDOWNNUMENTRIES(...args: any[]): any; // 1687 -> 10345
declare function IF_LIST_SETSELECTIONLIMIT(...args: any[]): any; // 324 -> 10348
declare function IF_GETSTYLESHEET(int0: component): unknown_int; // 1568 -> 10347
declare function STYLESHEET_GET_VALUE(int0: stylesheet, string0: string, int1: unknown_int): int; // 761 -> 10346
declare function HIGHLIGHT_SET_CATEGORY_MODE(...args: any[]): any; // 438 -> 10143
declare function HIGHLIGHT_SET_CATEGORY_COLOUR(...args: any[]): any; // 1885 -> 10142
declare function INTERFACE_SETPICKINGRADIUS(int0: unknown_int): void; // 1725 -> 10008
declare function CAM_LOOKAT(...args: any[]): any; // 225 -> 5501
declare function CAM_MOVETO(...args: any[]): any; // 2216 -> 5500
declare function USERFLOWFLAGS(): [int, int]; // 453 -> 5624
declare function CC_CALLONRESIZE(): void; // 2173 -> 10492
declare function NOTIFICATIONS_CANCELLOCAL(int0: int): void; // 1991 -> 10447
declare function NOTIFICATIONS_SENDGROUPEDLOCAL(string0: string, string1: string, int0: int, int1: int, string2: string, int2: int): int; // 598 -> 10650
declare function OBJSTACK_TYPE(int0: unknown_int): void; // 878 -> 10009
declare function ACHIEVEMENT_REQSTATE(int0: achievement): int; // 302 -> 10501
declare function CC_SETSCROLLSIZE(int0: int, int1: int): void; // 253 -> 10438
declare function CC_GETSCROLLWIDTH(): int; // 901 -> 10459
declare function CC_SETSCROLLPOS(int0: int, int1: int): void; // 535 -> 10252
declare function CC_SENDTOFRONT(): void; // 1453 -> 10502
declare function CC_GETSCROLLX(): int; // 1017 -> 10460
declare function IF_SETMOUSEOVERCURSOR(int0: unknown_int, int1: component): void; // 1106 -> 10041
declare function DB_LISTALL(int0: unknown_int): int; // 870 -> 10452
declare function CC_GETPARENTLAYER(): component; // 1200 -> 10435
declare function ATAN2_DEG(int0: int, int1: int): int; // 590 -> 10835
declare function OC_STACKABLE(int0: obj): unknown_int; // 1306 -> 10500
declare function IF_SETRETEX(int0: int, int1: material, int2: material, int3: component): void; // 2170 -> 10187
declare function IF_SETRECOL(int0: unknown_int, int1: unknown_int, int2: int, int3: component): void; // 1734 -> 10303
declare function IF_RESUME_PAUSEBUTTON(int0: unknown_int): void; // 1994 -> 10283
declare function CC_SETOPKEY(int0: int, int1: int, int2: int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: unknown_int, int9: unknown_int, int10: unknown_int): void; // 669 -> 10496
declare function CC_SETOPKEYRATE(int0: int, int1: unknown_int, int2: unknown_int): void; // 894 -> 10511
declare function CC_SETOPTKEY(int0: int, int1: int): void; // 1728 -> 10358
declare function CC_SETOPTKEYRATE(int0: unknown_int, int1: unknown_int): void; // 1305 -> 10383
declare function AUTOSETUP_DOSETUPSTATUS(): [unknown_int, int]; // 1367 -> 10657
declare function CREATE_NAME_AVAILABLEREQUEST(string0: string): void; // 386 -> 10264
declare function WORLDMAP_3DVIEW_ACTIVE(int0: unknown_int): void; // 375 -> 10230
declare function OC_MINIMENU_COLOUR(int0: obj): int; // 944 -> 10062
declare function SSO_LOGOUT(): void; // 14 -> 10420
declare function SETWALKMARKER(int0: unknown_int, int1: unknown_int): void; // 342 -> 10282
declare function CC_SETNPCMODEL(int0: npc): void; // 644 -> 10544
declare function CC_SETMODELZOOM(int0: int): void; // 514 -> 10587
declare function WORLDMAP_GETDISPLAYCOORD(int0: var_reference): int; // 658 -> 10324
declare function CC_LIST_SETENTRYICON(int0: int, int1: graphic): void; // 744 -> 10530
declare function IF_GETNEXTCATEGORYSUBID(int0: int, int1: component): int; // 2172 -> 10323
declare function CC_CREATECHILD(int0: unknown_int, int1: int, int2: int): void; // 2160 -> 10191
declare function CC_DELETEALLNESTED(): void; // 553 -> 10337
declare function ACTIVECLANSETTINGS_FIND_LISTENED(): unknown_int; // 691 -> 10080
declare function ACTIVECLANSETTINGS_GETCLANNAME(): string; // 933 -> 10448
declare function ACTIVECLANSETTINGS_GETAFFINEDCOUNT(): int; // 2048 -> 10312
declare function TEXT_SWITCH(int0: boolean, string0: unknown_string, string1: unknown_string): string; // 1899 -> 10263
declare function branch_not_long(...args: any[]): any; // 672 -> 10449
declare function CLANFORUMQFC_TOSTRING(string0: unknown_string, long0: clanforumqfc): [string, string]; // 1545 -> 10127
declare function GETCLIPBOARD(): string; // 214 -> 10507
declare function RESUME_CLANFORUMQFCDIALOG(string0: string): void; // 275 -> 10256
declare function ACTIVECLANSETTINGS_GETCURRENTOWNER_SLOT(): number; // 2041 -> 10683
declare function ACTIVECLANSETTINGS_GETAFFINEDDISPLAYNAME(int0: number): string; // 603 -> 10682
declare function ACTIVECLANCHANNEL_GETSORTEDUSERSLOT(int0: int): int; // 1504 -> 10868
declare function UNKNOWN_COMMAND_127(int0: int, int1: int, int2: int, int3: int): void; // 451 -> 10695
declare function ACTIVECLANCHANNEL_FIND_LISTENED(): unknown_int; // 2063 -> 10188
declare function IF_SETONPLAYERGROUPTRANSMIT(...args: any[]): any; // 1650 -> 10361
declare function ACTIVECLANCHANNEL_GETRANKKICK(): int; // 1807 -> 3753
declare function DATE_RUNEDAY_FROMDATE(int0: int, int1: int, int2: int): int; // 1559 -> 10065
declare function DATE_ISLEAPYEAR(int0: int): unknown_int; // 239 -> 10623
declare function CLAN_GETCHATOWNERNAME(): string; // 154 -> 10940
declare function CLAN_GETCHATUSERNAME_UNFILTERED(...args: any[]): any; // 1702 -> 10941
declare function CLAN_GETCHATUSERNAME(...args: any[]): any; // 1322 -> 10942
declare function CLAN_GETCHATUSERWORLD(int0: int): int; // 1555 -> 10213
declare function IF_GETOP(int0: unknown_int, int1: component): string; // 841 -> 10603
declare function LOGIN_LAST_TRANSFER_REPLY(): [unknown_int, unknown_int, unknown_int]; // 947 -> 10854
declare function CLANPROFILE_FIND(): unknown_int; // 1783 -> 10136
declare function CC_SETASPECT(int0: int, int1: int): void; // 1959 -> 10457
declare function IF_SETONVARCLANTRANSMIT(...args: any[]): any; // 1826 -> 2433
declare function IF_GETCOLOUR(int0: component): int; // 1073 -> 10575
declare function RESUME_HSLDIALOG(int0: int): void; // 965 -> 3116
declare function OC_ALLOWSPLACEHOLDER(int0: obj): unknown_int; // 1348 -> 10178
declare function CC_SETONINVTRANSMIT(vararg: BoundFunction): void; // 106 -> 10518
declare function CC_SETONVARCSTRTRANSMIT(vararg: BoundFunction): void; // 789 -> 10517
declare function GETDEFAULTWINDOWMODE(int0: int, int1: int, int2: int, int3: int): unknown_int; // 801 -> 10109
declare function MINIMENU_CLOSE(): void; // 2110 -> 10014
declare function branch_eq_long(...args: any[]): any; // 1182 -> 10153
declare function ADD_LONG(long0: long, long1: long): long; // 31 -> 10238
declare function CLIENTTYPE(): unknown_int; // 522 -> 10120
declare function CC_SETMOUSEOVERCURSOR(int0: unknown_int): void; // 1566 -> 10301
declare function IF_SETMODELORTHOG(int0: unknown_int, int1: unknown_int): void; // 268 -> 10034
declare function IF_GRID_GETNUMROWS(int0: number): number; // 347 -> 10648
declare function IF_GRID_GETNUMCOLUMNS(int0: number): number; // 1507 -> 10647
declare function IF_GETCHILDSPACING(int0: component): int; // 2150 -> 10646
declare function IF_GRID_GETCELLHEIGHT(int0: component): int; // 1775 -> 10645
declare function CC_SETONHORIZONTALPINCH(int0: unknown_int, int1: unknown_int, int2: int, int3: int, int4: unknown_int): [unknown_int, int]; // 880 -> 10644
declare function DETAIL_MUSICVOL(...args: any[]): any; // 810 -> 10159
declare function CC_SETPAUSETEXT(string0: string): void; // 292 -> 10025
declare function CC_SETRETEX(int0: unknown_int, int1: unknown_int, int2: material): void; // 144 -> 10749
declare function USERDETAIL_LOBBY_PLAYAGE(): unknown_int; // 1721 -> 10598
declare function SOUND_SPEECH_VOLUME(int0: vorbis, int1: unknown_int, int2: unknown_int, int3: unknown_int): void; // 1408 -> 10559
declare function ACHIEVEMENT_SPRITE(int0: achievement): graphic; // 1338 -> 10636
declare function ACHIEVEMENT_FINDPARENTS(int0: achievement): unknown_int; // 190 -> 10865
declare function ACHIEVEMENT_FINDNEXT(): achievement; // 1768 -> 10532
declare function ACHIEVEMENT_GETNAME(int0: achievement): string; // 45 -> 10561
declare function IF_SETOBJECT_HIGHRES(int0: obj, int1: unknown_int): void; // 728 -> 10037
declare function IF_NPC_SETCUSTOMBODYMODEL(int0: int, int1: model, int2: unknown_int): void; // 1782 -> 10702
declare function RESEND_UID_PASSPORT_REQUEST(): void; // 25 -> 10325
declare function CC_SETRECOL(int0: int, int1: int, int2: int): void; // 1099 -> 10880
declare function OC_WEARPOS2(int0: obj): unknown_int; // 751 -> 10487
declare function db_find_with_count(int0: unknown_int, int1: unknown_int, int2: unknown_int): int; // 1960 -> 10100
declare function CAM2_REMOVEALLEFFECTS(): void; // 1467 -> 10000
declare function CAM2_SETLOOKATENTITY_PLAYER(int0: int, int1: int, int2: int, int3: unknown_int): void; // 1058 -> 10442
declare function GET_MOUSEBUTTONS(): [unknown_int, unknown_int, unknown_int]; // 1043 -> 10667
declare function IF_SETONCLICKREPEAT(...args: any[]): any; // 799 -> 10618
declare function CC_SETONSTATTRANSMIT(vararg: BoundFunction): void; // 587 -> 10723
declare function mec_getparam(...args: any[]): any; // 312 -> 10192
declare function OPENURL_SHIM(string0: string, string1: string, string2: string, int0: unknown_int): void; // 1436 -> 10084
declare function IF_GETCHARINDEXATPOS(int0: int, int1: int, int2: component): int; // 1696 -> 10638
declare function LOGIN_ACCOUNTAPPEAL(string0: string): unknown_int; // 100 -> 10732
declare function MAP_ISOWNER(string0: unknown_string): unknown_int; // 412 -> 10614
declare function CREATE_SUGGEST_NAME_REQUEST(...args: any[]): any; // 1838 -> 10168
declare function URLENCODE(string0: string): string; // 2228 -> 10124
declare function CREATE_SUGGEST_NAME_REPLY(...args: any[]): any; // 2154 -> 10545
declare function CREATE_NAME_VALIDATE_REPLY(): unknown_int; // 322 -> 10572
declare function IF_CREATECHILD(int0: unknown_int, int1: int, int2: int, int3: component): void; // 2145 -> 10298
declare function SETOBJ(int0: unknown_int, int1: unknown_int): void; // 1578 -> 10804
declare function IF_CREATENESTED(int0: unknown_int, int1: int, int2: int, int3: int, int4: int, int5: component): unknown_int; // 1518 -> 10260
declare function CC_SETENABLED(int0: boolean): void; // 2221 -> 10087
declare function CC_SETFEEDBACKMODE(int0: unknown_int): void; // 1731 -> 10086
declare function CC_BUTTON_SETCANTOGGLE(int0: unknown_int): void; // 1188 -> 10129
declare function CC_BUTTON_SETTOGGLED(int0: boolean): void; // 788 -> 10128
declare function SOUND_GROUP_STOP(int0: unknown_int): void; // 711 -> 10184
declare function CC_CHECK_SET(int0: boolean): void; // 856 -> 10085
declare function CC_CHECK_SETALIGNMENT(...args: any[]): any; // 1138 -> 10046
declare function CC_CHECK_SETBUTTONSIZE(...args: any[]): any; // 399 -> 10045
declare function CC_SCROLLBAR_SETVISIBLE(int0: unknown_int): void; // 2050 -> 10138
declare function CC_LIST_SETENTRIES(int0: cs2enum): void; // 1739 -> 10676
declare function CC_LIST_SETISSELECTED(int0: int, int1: unknown_int, int2: unknown_int): void; // 1975 -> 10675
declare function CC_LIST_ADDENTRY(int0: int, string0: string, int1: unknown_int): unknown_int; // 836 -> 10531
declare function CC_LIST_CLEARSELECTION(): void; // 52 -> 10372
declare function CC_GRID_SETLAYOUTPARAMS(...args: any[]): any; // 1401 -> 10379
declare function CC_SETCHILDSPACING(...args: any[]): any; // 1423 -> 10353
declare function PRELOAD_PERCENT(): int; // 1654 -> 10712
declare function MAP_PRELOAD(int0: coordgrid): void; // 251 -> 10012
declare function CAM2_SETPOSITIONPOINTCOLLISION(int0: unknown_int): void; // 1356 -> 10370
declare function IF_SETOPKEYRATE(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int): void; // 1416 -> 10552
declare function WORLDMAP_3DVIEW_ACTIVE(...args: any[]): any; // 2235 -> 10967
declare function WORLDMAP_3DVIEW_DISABLE(...args: any[]): any; // 858 -> 10966
declare function CAM2_RESETSNAPDISTANCES(...args: any[]): any; // 1489 -> 10977
declare function COORD_GRIDTOFINE(int0: coordgrid, int1: unknown_int): unknown_string; // 1006 -> 10403
declare function WORLDMAP_GETCONFIGORIGIN(int0: maparea): coordgrid; // 59 -> 10131
declare function WORLDMAP_3DVIEW_ENABLE(...args: any[]): any; // 882 -> 10974
declare function CAM2_ENABLE(...args: any[]): any; // 1457 -> 10973
declare function CAM2_SETSNAPDISTANCES(...args: any[]): any; // 580 -> 10972
declare function COORDY_FINE(...args: any[]): any; // 421 -> 10402
declare function COORDX_FINE(...args: any[]): any; // 915 -> 10400
declare function COORDZ_FINE(...args: any[]): any; // 363 -> 10399
declare function CAM2_SETPOSITIONACCELERATION_AXIS(...args: any[]): any; // 152 -> 10971
declare function CAM2_SETPOSITIONMAXSPEED_AXIS(...args: any[]): any; // 1410 -> 10970
declare function CAM2_SETLOOKATACCELERATION_AXIS(...args: any[]): any; // 1572 -> 10969
declare function CAM2_SETLOOKATMAXSPEED_AXIS(...args: any[]): any; // 1683 -> 10968
declare function WORLDMAP_3DVIEW_GETCOORDFINE(...args: any[]): any; // 1703 -> 10795
declare function WORLDMAP_GETCONFIGBOUNDS(int0: maparea): [int, int, int, int]; // 1592 -> 10794
declare function CAM2_SETLOOKATPOINT_POINT(...args: any[]): any; // 177 -> 10440
declare function FPS_STATS(): [unknown_int, unknown_int, unknown_int]; // 568 -> 10610
declare function IF_GET_GAMESCREEN(): component; // 889 -> 10543
declare function PUSH_CONSTANT_INT(string0: unknown_string, int0: int): [string, int, unknown_int]; // 1324 -> 10574
declare function CAM2_ADDEFFECT_SHAKE(int0: unknown_int, int1: unknown_int, int2: unknown_int): unknown_int; // 1745 -> 10295
declare function VIEWPORT_GETEFFECTIVESIZE(): [int, int]; // 1477 -> 10538
declare function WORLDMAP_3DVIEW_SETLODDISTANCE(int0: unknown_int, int1: int): void; // 2204 -> 10548
declare function FORCE_INTERFACE_DRAG(): void; // 1770 -> 10586
declare function MAP_LOADINGSCREEN_ISOPEN(): unknown_int; // 556 -> 10558
declare function INVPOW(int0: int, int1: unknown_int): int; // 1576 -> 10506
declare function CC_GETDYNAMICLAYER(): unknown_int; // 1054 -> 10336
declare function CC_GETSCROLLY(int0: int): [int, int]; // 1168 -> 10628
declare function RUNWEIGHT_VISIBLE(): int; // 1172 -> 10226
declare function INTERPOLATE(int0: int, int1: int, int2: int, int3: int, int4: int): int; // 245 -> 10711
declare function IF_SETONCAMERAUPDATETRANSMIT(...args: any[]): any; // 743 -> 10051
declare function CAM2_SETSPRINGPROPERTIES(int0: int, int1: int, int2: int, int3: int): void; // 2106 -> 10656
declare function KEYHELD_ALT(): boolean; // 1958 -> 10140
declare function CC_SETOPKEYIGNOREHELD(int0: int): void; // 885 -> 10495
declare function CC_SETOPTKEYIGNOREHELD(): void; // 1088 -> 10357
declare function ACTIVECLANCHANNEL_FIND_AFFINED(int0: unknown_int): void; // 283 -> 10106
declare function ACHIEVEMENT_GETMEMBERS(int0: achievement): boolean; // 1508 -> 10741
declare function CAM2_UPDATEEFFECT_ZTILT(int0: unknown_int, int1: int): void; // 904 -> 10035
declare function CC_INPUT_SETUP(int0: unknown_int, int1: unknown_int, int2: unknown_int): void; // 105 -> 10090
declare function IGNORE_GETNOTES(int0: int): string; // 1079 -> 10700
declare function FRIEND_SETNOTES(string0: string, string1: string): void; // 335 -> 10473
declare function IGNORE_SETNOTES(string0: string, string1: string): void; // 1025 -> 10471
declare function CC_GETOP(int0: unknown_int): string; // 827 -> 10480
declare function IF_SETOBJECT_LONG(int0: unknown_int, long0: long, int1: component): void; // 1543 -> 10750
declare function IF_GETINVOBJECT(int0: component): obj; // 1843 -> 10584
declare function branch_lteq_long(...args: any[]): any; // 2117 -> 10491
declare function VIEWPORT_GETZOOM(): [int, int]; // 1303 -> 10461
declare function OC_TRADEABLE(int0: obj): unknown_int; // 2131 -> 10790
declare function CC_SETCLICKMASK(int0: unknown_int): void; // 942 -> 10754
declare function FROMDATE(...args: any[]): any; // 814 -> 10772
declare function IF_GETINVCOUNT(int0: component): unknown_int; // 284 -> 10583
declare function WORLDMAP_FLASHELEMENTCATEGORY(int0: unknown_int): void; // 470 -> 10782
declare function WORLDMAP_GETSIZE(): [int, int]; // 1949 -> 10777
declare function IF_SETGRAPHIC(int0: graphic, int1: component): void; // 191 -> 2105
declare function CC_SETOBJECT_HIGHRES(int0: obj): void; // 1824 -> 10315
declare function CC_PANEL_SETISVERTICAL(...args: any[]): any; // 1447 -> 10354
declare function IF_SETONVARTRANSMIT(int0: boolean): void; // 1449 -> 10013
declare function TTV_LIVESTREAMS_GETSTREAM_START(...args: any[]): any; // 1961 -> 10652
declare function TTV_LIVESTREAMS_GETSTREAM_NEXT(): [int, unknown_string, unknown_string, string, string]; // 1041 -> 10651
declare function TTV_LIVESTREAMS_UPDATE(): unknown_int; // 1957 -> 10417
declare function TTV_LOGIN(string0: string, string1: string): unknown_int; // 1032 -> 10578
declare function TTV_LIBRARY_GETSTATE(): unknown_int; // 111 -> 10826
declare function TTV_HASPREREQUISITES(): unknown_int; // 238 -> 10825
declare function OS_ISWINDOWS(): unknown_int; // 449 -> 10824
declare function OS_ISMAC(): unknown_int; // 1924 -> 10806
declare function OS_ISLINUX(): unknown_int; // 721 -> 10823
declare function TTV_LOGIN_GETSTATE(): unknown_int; // 1600 -> 10822
declare function TTV_STREAM_GETSTATE(): unknown_int; // 175 -> 10556
declare function TTV_STREAM_GETVIEWERS(): int; // 2214 -> 10555
declare function TTV_WEBCAM_GETDEVICE_BYUNIQUENAME(string0: string): [int, string, string]; // 1146 -> 10534
declare function TTV_WEBCAM_GETCAP_BYUNIQUEID(int0: int, int1: int): [int, int, int, int, int]; // 2086 -> 10744
declare function TTV_WEBCAM_GETDEVICE_COUNT(): int; // 1066 -> 10752
declare function TTV_WEBCAM_FLIP(int0: unknown_int, int1: unknown_int): void; // 562 -> 10763
declare function TTV_WEBCAM_SUPPORTED(...args: any[]): any; // 740 -> 10753
declare function TTV_WEBCAM_GETDEVICE_BYINDEX(int0: int): [int, string, string]; // 1273 -> 10751
declare function TTV_WEBCAM_GETCAP_BYINDEX(int0: int, int1: int): [int, int, int, int, int]; // 1442 -> 10743
declare function TTV_WEBCAM_GETCAP_COUNT(int0: int): int; // 43 -> 10745
declare function TTV_WEBCAM_START(int0: int, int1: int): unknown_int; // 1528 -> 10592
declare function TTV_WEBCAM_STOP(int0: int): unknown_int; // 2181 -> 10581
declare function TTV_STREAM_STOP(...args: any[]): any; // 1921 -> 10715
declare function TTV_STREAM_GETQUALITY(): unknown_int; // 985 -> 10633
declare function OS_PHYSICALMEMORYSIZE(int0: unknown_int, int1: unknown_int, string0: unknown_string): [unknown_int, unknown_int, string, int]; // 1929 -> 10144
declare function CC_GETGRAPHICDIMENSIONS(): [int, int]; // 1575 -> 10458
declare function LOGIN_REPLY(): int; // 1977 -> 10190
declare function GET_OBJ_OVERLAY_HEIGHT(): int; // 318 -> 10171
declare function GET_OBJ_SCREEN_POSITION(int0: int): [int, int, int]; // 1374 -> 10170
declare function GET_OBJ_BOUNDING_BOX(): [unknown_int, int, int, int, int]; // 1525 -> 10169
declare function GET_LOC_OVERLAY_HEIGHT(): int; // 826 -> 10177
declare function GET_LOC_SCREEN_POSITION(int0: int): [int, int, int]; // 1656 -> 10176
declare function GET_LOC_BOUNDING_BOX(): [unknown_int, int, int, int, int]; // 50 -> 10175
declare function CAM2_SETLOOKATENTITY_NPC(...args: any[]): any; // 435 -> 10285
declare function CAM2_SETPOSITIONENTITY_NPC(...args: any[]): any; // 1850 -> 10284
declare function PLAYER_GROUP_MEMBER_COUNT(): int; // 2225 -> 10550
declare function PLAYER_GROUP_MEMBER_GET_DISPLAYNAME(int0: int): string; // 272 -> 10549
declare function PLAYER_GROUP_MEMBER_IS_OWNER(int0: int): unknown_int; // 300 -> 10427
declare function PLAYER_GROUP_MEMBER_GET_RANK(int0: int): unknown_int; // 7 -> 10426
declare function IF_SETONPLAYERGROUPVARPTRANSMIT(...args: any[]): any; // 516 -> 10462
declare function PLAYER_GROUP_GET_MAX_SIZE(string0: string, string1: unknown_string): [string, string, int]; // 17 -> 10773
declare function PLAYER_GROUP_BANNED_COUNT(...args: any[]): any; // 1245 -> 10797
declare function PLAYER_GROUP_BANNED_GET_DISPLAYNAME(int0: int): string; // 1677 -> 10796
declare function CC_SETLINKPLAYERGROUP(int0: int, int1: unknown_int): void; // 304 -> 10629
declare function PLAYER_GROUP_GET_DISPLAYNAME(): string; // 468 -> 10809
declare function PLAYER_GROUP_MEMBER_GET_STATUS(int0: int): unknown_int; // 723 -> 10302
declare function PLAYER_GROUP_MEMBER_IS_ONLINE(int0: int): unknown_int; // 90 -> 10939
declare function PLAYER_GROUP_MEMBER_GET_LAST_SEEN_NODE_ID(int0: int): int; // 2064 -> 10936
declare function PLAYER_GROUP_MEMBER_GET_SAME_WORLD_VAR(int0: int, int1: unknown_int, int2: unknown_int): int; // 414 -> 10938
declare function PLAYER_GROUP_MEMBER_GET_TEAM(int0: int): int; // 1663 -> 10937
declare function PLAYER_GROUP_GET_OWNER_SLOT(int0: int): [unknown_int, unknown_int]; // 58 -> 10408
declare function PLAYER_GROUP_GET_OVERALL_STATUS(): unknown_int; // 2166 -> 10862
declare function NOTIFICATIONS_OPENSETTINGS(): void; // 259 -> 10001
declare function CC_SETSTYLESHEET(...args: any[]): any; // 1519 -> 10451
declare function CC_RESUME_PAUSEBUTTON(): void; // 1207 -> 10117
declare function DATE_YEAR(): int; // 634 -> 10421
declare function lc_getparam(int0: loc, int1: unknown_int): unknown_int; // 1012 -> 10798
declare function CC_MODELGROUP_GETCAMERAYAWPITCHROLL(int0: fontmetrics): [int, unknown_int, unknown_int, unknown_int, unknown_int]; // 507 -> 10278
declare function SCALE_LONG(long0: long, long1: unknown_long, long2: unknown_long): long; // 1793 -> 10393
declare function TELEMETRY_GET_GROUP_INDEX(int0: int): int; // 1450 -> 10567
declare function TELEMETRY_GET_ROW_INDEX(int0: int, int1: int): int; // 67 -> 10566
declare function TELEMETRY_GET_GROUP_COUNT(): int; // 271 -> 10963
declare function TELEMETRY_GET_GROUP_ID(int0: int): int; // 1772 -> 10962
declare function TELEMETRY_GET_COLUMN_COUNT(int0: int): int; // 812 -> 10957
declare function TELEMETRY_GET_ROW_COUNT(int0: int): int; // 1481 -> 10961
declare function TELEMETRY_GET_ROW_ID(int0: int, int1: int): int; // 873 -> 10959
declare function TELEMETRY_GET_COLUMN_ID(int0: int, int1: int): int; // 2102 -> 10960
declare function TELEMETRY_GET_GRID_VALUE(int0: int, int1: int, int2: int): int; // 1089 -> 10564
declare function TELEMETRY_IS_ROW_PINNED(int0: int, int1: int): unknown_int; // 488 -> 10958
declare function TELEMETRY_GET_COLUMN_INDEX(int0: int, int1: int): int; // 436 -> 10565
declare function ACHIEVEMENT_FINDSUBCAT(int0: category, int1: category): int; // 1269 -> 10246
declare function CC_LIST_GETENABLED(...args: any[]): any; // 1459 -> 10602
declare function NOTIFICATIONS_ISLOCALSCHEDULED(...args: any[]): any; // 891 -> 10601
declare function AUTOSETUP_SETMIN(): void; // 1392 -> 10002
declare function IGNORE_GETNAME_UNFILTERED(): void; // 876 -> 10281
declare function IGNORE_GETNAME_UNFILTERED(...args: any[]): any; // 1208 -> 10780
declare function CC_SETONSCROLLWHEEL(vararg: BoundFunction): void; // 319 -> 10591
declare function UNKNOWN_COMMAND_120(int0: unknown_int, int1: graphic, int2: unknown_int): void; // 1248 -> 10418
declare function OS_DRIVER_VENDOR(): int; // 301 -> 10215
declare function CHAT_CLEAR(): void; // 1620 -> 10571
declare function CAM2_SETLOOKATORIENTATION_ZMOVEMENT(int0: int): void; // 418 -> 10707
declare function CAM2_SETLOOKATORIENTATION_XMOVEMENT(int0: int): void; // 2146 -> 10708
declare function CAM2_SETLOOKATORIENTATION_XROTATION(int0: int): void; // 1056 -> 10705
declare function CAM2_SETLOOKATORIENTATION_YROTATION(int0: int): void; // 1740 -> 10706
declare function IF_SETONGAMEPADBUTTON(...args: any[]): any; // 2209 -> 10526
declare function IF_SETONGAMEPADAXIS(...args: any[]): any; // 2138 -> 10525
declare function IF_SETONGAMEPADTRIGGER(...args: any[]): any; // 1887 -> 10524
declare function IF_SETONGAMEPADBUTTONHELD(...args: any[]): any; // 1181 -> 10523
declare function IF_LIST_SETISSELECTED(int0: int, int1: unknown_int, int2: unknown_int, int3: component): void; // 692 -> 10513
declare function CC_GETSCROLLHEIGHT(): int; // 1894 -> 10713
declare function CC_SETPARAM_STRING(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int): int; // 1231 -> 10649
declare function NOT(int0: int, int1: int): [int, int]; // 1810 -> 10742
declare function CC_TRIGGEROP(int0: unknown_int): void; // 1241 -> 10432
declare function ACHIEVEMENT_CATEGORY(int0: achievement): category; // 1396 -> 10352
declare function IF_SETONSTORETRANSMIT(int0: int): [int, string]; // 34 -> 10779
declare function PARALINE(string0: string, int0: int, int1: fontmetrics, int2: int): string; // 1866 -> 10704
declare function ACHIEVEMENT_TOTAL_RUNESCORE(): int; // 716 -> 10593
declare function ACHIEVEMENT_FINDCATEGORY(int0: category): int; // 999 -> 10236
declare function GETDEFAULTWINDOWMODE(...args: any[]): any; // 844 -> 10698
declare function IF_NPC_SETCUSTOMRECOL(...args: any[]): any; // 594 -> 10805
declare function SOUND_SYNTH_VOLUME(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int): void; // 247 -> 10760
declare function AUTOSETUP_DOSETUP(): unknown_int; // 316 -> 10299
declare function POP_INT_DISCARD(...args: any[]): any; // 571 -> 10381
declare function IF_SETFEEDBACKMODE(...args: any[]): any; // 122 -> 10380
declare function CC_SETHELD(...args: any[]): any; // 857 -> 10066
declare function SETDEFAULTCURSORS(): void; // 1766 -> 10053
declare function IF_SETONHOOK46(...args: any[]): any; // 864 -> 10376
declare function IF_SETPINCHDEADZONE(...args: any[]): any; // 469 -> 10468
declare function IF_SETPINCHFLAGS(...args: any[]): any; // 733 -> 10467
declare function IF_SETONVERTICALPINCH(...args: any[]): any; // 1010 -> 10466
declare function IF_SETONHORIZONTALPINCH(...args: any[]): any; // 1537 -> 10465
declare function DB_FIND_REFINE(int0: unknown_int, int1: int, int2: unknown_int): int; // 1556 -> 10709
declare function CHAT_GETNEXTUID(int0: int): int; // 1694 -> 10699
declare function IF_SET_GAMESCREEN_ENABLED(int0: unknown_int): void; // 629 -> 10247
declare function USERDETAIL_LOBBY_RECOVERYDAY(): unknown_int; // 1143 -> 10663
declare function BATTERY_GETLEVELPERCENT(...args: any[]): any; // 591 -> 10662
declare function BATTERY_ISCHARGING(...args: any[]): any; // 929 -> 10661
declare function OC_DESC(int0: obj): string; // 2185 -> 10573
declare function PLAYERCOUNTRY(): unknown_int; // 396 -> 10130
declare function FEDERATED_LOGIN(int0: unknown_int, int1: unknown_int): void; // 127 -> 10103
declare function FEDERATED_LOGIN_STATUS(): int; // 1406 -> 10293
declare function OPENSTORE(int0: unknown_int, string0: unknown_string): void; // 250 -> 10562
declare function LOGIN_INPROGRESS(...args: any[]): any; // 15 -> 10267
declare function SSO_DISPLAYNAME(): string; // 2055 -> 10434
declare function STEAM_SETACHIVEMENT(string0: string, int0: unknown_int, int1: unknown_int): unknown_int; // 927 -> 10227
declare function STEAM_STORESTATS(): unknown_int; // 174 -> 10005
declare function IF_SETDRAGDEADZONE(...args: any[]): any; // 526 -> 10334
declare function IF_SETDRAGDEADTIME(...args: any[]): any; // 1375 -> 10333
declare function ACHIEVEMENT_IS_CHECKLIST(int0: achievement): unknown_int; // 1939 -> 10272
declare function ACHIEVEMENT_ACHIEVEMENT_REQ_COUNT(int0: achievement): int; // 921 -> 10271
declare function ACHIEVEMENT_GETSUBCATCOUNT(int0: category, int1: unknown_int): unknown_int; // 2108 -> 10728
declare function ACHIEVEMENT_SUBCAT(int0: achievement): category; // 2217 -> 10351
declare function ACHIEVEMENT_FINDGRACED(): int; // 500 -> 10195
declare function CC_SETONMOUSEOVER(): unknown_int; // 1847 -> 10231
declare function CC_SETMODELLIGHTING(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: material): void; // 738 -> 10450
declare function SHOP_OPENCATEGORIES(int0: unknown_int, int1: unknown_int): void; // 455 -> 10044
declare function LOBBY_ENTERGAME(...args: any[]): any; // 134 -> 10311
declare function DETAILGET_SOUNDVOL(...args: any[]): any; // 2203 -> 10310
declare function DETAILGET_MUSICVOL(...args: any[]): any; // 1784 -> 10309
declare function DETAILGET_BGSOUNDVOL(...args: any[]): any; // 735 -> 10308
declare function DETAILGET_SPEECHVOL(...args: any[]): any; // 1514 -> 10307
declare function DETAILGET_LOGINVOL(): unknown_int; // 1286 -> 10306
declare function SHOP_APPLYPENDINGTRANSACTIONS(...args: any[]): any; // 171 -> 10091
declare function TOGGLEBIT(): unknown_int; // 22 -> 10164
declare function PRELOAD_DOWNLOAD_COMPLETE(): unknown_int; // 73 -> 10771
declare function PRELOAD_PROGRESS(): int; // 1779 -> 10770
declare function PRELOAD_DOWNLOAD_DOWNLOADEDSIZE(...args: any[]): any; // 572 -> 10769
declare function PRELOAD_DOWNLOAD_TOTALSIZE(...args: any[]): any; // 830 -> 10768
declare function PRELOAD_DOWNLOAD_RATE(...args: any[]): any; // 1589 -> 10767
declare function IF_GETMODELYOF(int0: unknown_int): void; // 1445 -> 10104
declare function NOTIFICATIONS_SENDLOCAL(string0: unknown_string, string1: unknown_string, int0: unknown_int, int1: int): unknown_int; // 2243 -> 10254
declare function SHOP_REQUESTDATA(...args: any[]): any; // 2100 -> 10316
declare function WORLDMAP_LISTELEMENT_START(int0: unknown_int, int1: int, int2: unknown_int, int3: unknown_int): unknown_int; // 1780 -> 10257
declare function IF_SETPLAYERHEAD_SELF(int0: unknown_int, int1: unknown_int): unknown_int; // 390 -> 10364
declare function CC_SCROLLBAR_SETUP(int0: unknown_int, int1: unknown_int, int2: unknown_int): void; // 2042 -> 10137
declare function IF_LIST_ADDENTRY(int0: unknown_int, string0: string, int1: unknown_int): unknown_int; // 183 -> 10095
declare function STYLESHEET_HAS_VALUE(int0: stylesheet, string0: string): unknown_int; // 157 -> 10484
declare function STYLESHEET_GET_PARENT_ID(int0: stylesheet): stylesheet; // 2211 -> 10483
declare function SETBIT_RANGE_TOINT(int0: int, int1: int, int2: unknown_int, int3: unknown_int): int; // 764 -> 10410
declare function SHOP_ISPRODUCTAVAILABLE(int0: unknown_int, int1: int): unknown_int; // 167 -> 10725
declare function IF_GETENABLED(int0: unknown_int): unknown_int; // 1646 -> 10431
declare function UI_GETCATEGORY(int0: int): int; // 1704 -> 10398
declare function CC_SETMODELORIGIN(int0: unknown_int, int1: unknown_int): void; // 370 -> 10800
declare function CC_GRID_GETNUMROWS(): number; // 1224 -> 10659
declare function CC_GRID_GETNUMCOLUMNS(): number; // 40 -> 10658
declare function IF_GRID_GETLAYOUTPARAMS(int0: component): [unknown_int, int, int]; // 606 -> 10738
declare function CC_TEXT_SETTRANS(...args: any[]): any; // 2136 -> 10714
declare function IF_DELETEALLNESTED(int0: unknown_int, int1: unknown_int, int2: unknown_int): unknown_int; // 1640 -> 10234
declare function IF_SETASPECT(int0: unknown_int, int1: unknown_int, int2: component): void; // 892 -> 10196
declare function UI_GETDYNID(int0: int): int; // 1813 -> 10397
declare function UNPACK_LONG(long0: long): [unknown_int, int]; // 1816 -> 10433
declare function IF_CHECK_SET(int0: boolean, int1: unknown_int): void; // 207 -> 10220
declare function ACHIEVEMENT_ALLPREREQMET(int0: achievement): unknown_int; // 1573 -> 10520
declare function DEEPLINK_COUNT(): int; // 2031 -> 10429
declare function DEEPLINK_GET(int0: int): unknown_int; // 1339 -> 10428
declare function DEEPLINK_CLEAR_INDEX(int0: unknown_int): void; // 1178 -> 10016
declare function ACTIVECHATPHRASE_PREPARE(): [number, number]; // 176 -> 10554
declare function DETAILGET_INTERFACESCALE(): number; // 115 -> 10553
declare function OC_COST(int0: obj): long; // 536 -> 10070
declare function MODULO_LONG(long0: long, long1: unknown_long): long; // 970 -> 10687
declare function MIN_LONG(long0: long, long1: long): long; // 1119 -> 10622
declare function INVOTHER_TOTAL(int0: unknown_int, int1: unknown_int): int; // 1023 -> 10542
declare function CHATPHRASE_GETDYNAMICCOMMANDCOUNT(int0: unknown_int, int1: unknown_int): void; // 388 -> 10665
declare function CUTSCENE2D_STOP(int0: unknown_int): void; // 286 -> 10021
declare function CC_SETONDRAG(int0: unknown_int): void; // 266 -> 10017
declare function CC_CAROUSEL_SETTEXTENTRIES(...args: any[]): any; // 1922 -> 10072
declare function CC_CAROUSEL_SETSELECTED(...args: any[]): any; // 222 -> 10071
declare function CC_CAROUSEL_SETICONENTRIES(...args: any[]): any; // 2039 -> 10073
declare function CC_PAGEDCAROUSEL_SETDYNAMICPAGECOUNT(int0: unknown_int): void; // 383 -> 10018
declare function CC_PAGEDCAROUSEL_SETSELECTED(int0: unknown_int, int1: unknown_int): void; // 484 -> 10182
declare function CC_COMBO_SETENTRIES(int0: cs2enum): void; // 661 -> 10674
declare function CC_COMBO_SELECT(int0: int, int1: unknown_int): unknown_int; // 1185 -> 10672
declare function CC_COMBO_ADDENTRY(int0: int, string0: string): unknown_int; // 1137 -> 10673
declare function CC_COMBO_CLEARENTRIES(): void; // 811 -> 10384
declare function CC_PAGEDLAYER_SETDYNAMICPAGECOUNT(int0: unknown_int): void; // 524 -> 10133
declare function CC_PAGEDLAYER_SETPAGELABELS(int0: unknown_int): void; // 861 -> 10132
declare function CC_PAGEDLAYER_SETPAGEICONS(int0: unknown_int): void; // 1662 -> 10134
declare function CC_PAGEDLAYER_SETACTIVEPAGE(int0: unknown_int, int1: unknown_int): void; // 380 -> 10183
declare function IF_RADIALPROGRESSOVERLAY_START(int0: unknown_int, int1: int, int2: unknown_int): void; // 1230 -> 10096
declare function CC_RADIALPROGRESSOVERLAY_START(int0: unknown_int, int1: int): void; // 960 -> 10074
declare function IF_RADIALPROGRESSOVERLAY_SET(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int): void; // 1039 -> 10079
declare function CC_RADIALPROGRESSOVERLAY_SET(int0: unknown_int, int1: unknown_int, int2: unknown_int): void; // 1595 -> 10055
declare function IF_RADIALPROGRESSOVERLAY_SETVALUE(int0: unknown_int, int1: unknown_int): void; // 1084 -> 10038
declare function CC_RADIALPROGRESSOVERLAY_SETVALUE(int0: unknown_int): void; // 1644 -> 10019
declare function CC_RADIOGROUP_SETSELECTIONLIMITS(int0: unknown_int, int1: unknown_int): void; // 1062 -> 10225
declare function CC_RADIOGROUP_SETOPTIONS(int0: unknown_int): void; // 1433 -> 10224
declare function CC_RADIOGROUP_CLEAROPTIONS(): void; // 547 -> 10056
declare function CC_RADIOGROUP_SETOPTIONSELECTED(int0: int, int1: unknown_int, int2: unknown_int): unknown_int; // 63 -> 10318
declare function CC_SLIDER_SETUP(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int): void; // 1726 -> 10269
declare function CC_SLIDER_SETUPENUM(int0: unknown_int): void; // 1274 -> 10268
declare function CC_RADIALPROGRESSOVERLAY_GETPROGRESS(): int; // 2077 -> 10580
declare function CC_SETONDROPDOWNSELECT(vararg: BoundFunction): void; // 1493 -> 10392
declare function CC_RADIOGROUP_ADDOPTION(...args: any[]): any; // 2084 -> 10849
declare function TEXT_GENDER(string0: unknown_string, string1: unknown_string, string2: unknown_string): [string, string]; // 1531 -> 10821
declare function CC_ANIM_PLAY(...args: any[]): any; // 260 -> 10624
declare function CC_ANIM_KILL(...args: any[]): any; // 340 -> 10625
declare function CC_UNKNOWN1(): int; // 1193 -> 10842
declare function CC_UNKNOWN2(): int; // 1404 -> 10787
declare function IF_SETPLAYERHEAD_SELF(int0: unknown_int): unknown_int; // 1753 -> 10404
declare function DETAIL_WATERDETAIL_HIGH(int0: unknown_int, int1: unknown_int, int2: unknown_int): unknown_int; // 2178 -> 10405
declare function IF_SETONDROPDOWNSELECT(int0: unknown_int, string0: string, int1: unknown_int): unknown_int; // 648 -> 10385
declare function DB_FIND_GET(int0: int): dbrow; // 1814 -> 10746
declare function unk10978(int0: number): void; // 1876 -> 10978
declare function unk10979(int0: number): void; // 310 -> 10979
declare function unk10980(int0: number): void; // 1458 -> 10980
declare function unk10981(int0: number): number; // 1368 -> 10981
declare function unk10982(long0: BigInt, int0: number): number; // 1063 -> 10982
declare function unk10983(int0: number): string; // 1755 -> 10983
declare function unk10984(int0: number): number; // 1468 -> 10984
declare function unk10985(int0: number, int1: number, int2: number): number; // 1102 -> 10985
declare function unk10986(int0: number): number; // 1930 -> 10986
declare function unk10987(...args: any[]): any; // 840 -> 10987
declare function unk10988(int0: number, int1: number): number; // 2176 -> 10988
declare function unk10989(): number; // 2026 -> 10989
declare function unk10990(): void; // 539 -> 10990
declare function unk10991(...args: any[]): any; // 1625 -> 10991
declare function unk10992(string0: string, int0: number, int1: number, int2: number): void; // 219 -> 10992
declare function unk10993(int0: number): number; // 457 -> 10993
declare function unk10994(int0: number, int1: number, int2: number): void; // 1152 -> 10994
declare function unk10995(int0: number): void; // 2118 -> 10995
declare function unk10996(): number; // 983 -> 10996
declare function unk10997(int0: number): void; // 18 -> 10997
declare function unk10998(): void; // 1541 -> 10998
declare function unk10999(int0: number, int1: number): number; // 871 -> 10999
declare function unk11000(string0: string): void; // 523 -> 11000
declare function unk11001(...args: any[]): any; // 1144 -> 11001
declare function unk11002(): number; // 2012 -> 11002
declare function unk11003(): number; // 1560 -> 11003
declare function unk11004(...args: any[]): any; // 228 -> 11004
declare function unk11005(...args: any[]): any; // 1992 -> 11005
declare function unk11006(int0: number): void; // 1897 -> 11006
declare function unk11007(int0: number): void; // 510 -> 11007
declare function unk11008(int0: number): void; // 511 -> 11008
declare function unk11009(...args: any[]): any; // 997 -> 11009
declare function unk11010(...args: any[]): any; // 984 -> 11010
declare function unk11011(int0: number, int1: number, int2: number): number; // 1488 -> 11011
declare function unk11012(string0: string, int0: number, int1: number): void; // 986 -> 11012
declare function unk11013(int0: number, int1: number, int2: number, int3: number): void; // 1474 -> 11013
declare function unk11014(int0: number, int1: number): number; // 755 -> 11014
declare function unk11015(int0: number): void; // 371 -> 11015
declare function unk11016(): number; // 898 -> 11016
declare function unk11017(string0: string): void; // 1191 -> 11017
declare function unk11018(int0: number): number; // 2016 -> 11018
declare function unk11019(...args: any[]): any; // 1536 -> 11019
declare function unk11020(int0: number): string; // 584 -> 11020
declare function unk11021(string0: string): string; // 69 -> 11021
declare function unk11022(string0: string): number; // 618 -> 11022
declare function unk11023(int0: number, int1: number, int2: number): void; // 439 -> 11023
declare function unk11024(): [number, number, number]; // 2045 -> 11024
declare function unk11025(int0: number): number; // 491 -> 11025
declare function unk11026(int0: number): number; // 1317 -> 11026
declare function unk11027(int0: number, string0: string): number; // 230 -> 11027
declare function unk11028(long0: BigInt, int0: number): BigInt; // 1741 -> 11028
declare function unk11029(long0: BigInt, int0: number): BigInt; // 160 -> 11029
declare function unk11030(vararg: BoundFunction): void; // 1596 -> 11030
declare function unk11031(string0: string): number; // 1879 -> 11031
declare function unk11032(int0: number, int1: number): number; // 1717 -> 11032
declare function unk11033(string0: string, int0: number): [number, number, number, BigInt, BigInt, number, BigInt, number, number, number, number, number, number]; // 967 -> 11033
declare function unk11034(int0: number, int1: number, int2: number): number; // 859 -> 11034
declare function unk11035(int0: number, int1: number, int2: number): number; // 1529 -> 11035
declare function unk11036(int0: number, int1: number): number; // 1055 -> 11036
declare function unk11037(int0: number): number; // 203 -> 11037
declare function unk11038(...args: any[]): any; // 2187 -> 11038
declare function unk11039(int0: number): void; // 377 -> 11039
declare function unk11040(vararg: BoundFunction): void; // 2007 -> 11040
declare function unk11041(int0: number): void; // 1554 -> 11041
declare function unk11042(int0: number, int1: number): void; // 1372 -> 11042
declare function unk11043(int0: number): void; // 1173 -> 11043
declare function unk11044(): void; // 109 -> 11044
declare function unk11045(): number; // 1361 -> 11045
declare function unk11046(int0: number): void; // 132 -> 11046
declare function unk11047(...args: any[]): any; // 637 -> 11047
declare function unk11048(...args: any[]): any; // 1462 -> 11048
declare function unk11049(string0: string, string1: string, string2: string, int0: number): number; // 315 -> 11049
declare function unk11050(): [number, number]; // 1542 -> 11050
declare function unk11051(int0: number): number; // 32 -> 11051
declare function unk11052(): number; // 498 -> 11052
declare function unk11053(long0: BigInt, int0: number): string; // 1927 -> 11053
declare function unk11054(): void; // 1680 -> 11054
declare function unk11055(...args: any[]): any; // 336 -> 11055
declare function unk11056(...args: any[]): any; // 2152 -> 11056
declare function unk11057(): void; // 683 -> 11057
declare function unk11058(int0: number): [number, string, number, string, string, string, string, number, string, number, number]; // 1947 -> 11058
declare function unk11059(): void; // 402 -> 11059
declare function unk11060(int0: number): number; // 1123 -> 11060
declare function unk11061(): void; // 212 -> 11061
declare function unk11062(): void; // 670 -> 11062
declare function unk11063(int0: number, int1: number): number; // 775 -> 11063
declare function unk11064(int0: number): number; // 1263 -> 11064
declare function unk11065(int0: number): number; // 1665 -> 11065
declare function unk11066(int0: number): number; // 656 -> 11066
declare function unk11067(int0: number): number; // 1132 -> 11067
declare function unk11068(int0: number, int1: number): number; // 474 -> 11068
declare function unk11069(...args: any[]): any; // 1351 -> 11069
declare function unk11070(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void; // 1647 -> 11070
declare function unk11071(...args: any[]): any; // 1684 -> 11071
declare function unk11072(int0: number, int1: number, int2: number): number; // 143 -> 11072
declare function unk11073(int0: number): number; // 213 -> 11073
declare function unk11074(int0: number): number; // 1359 -> 11074
declare function unk11075(): number; // 631 -> 11075
declare function unk11076(): number; // 139 -> 11076
declare function unk11077(int0: number): [number, number]; // 332 -> 11077
declare function unk11078(): number; // 579 -> 11078
declare function unk11079(int0: number): [number, number]; // 1613 -> 11079
declare function unk11080(int0: number, int1: number): string; // 1888 -> 11080
declare function unk11081(...args: any[]): any; // 1347 -> 11081
declare function unk11082(int0: number, int1: number, int2: number, int3: number, int4: number): void; // 954 -> 11082
declare function unk11083(int0: number, string0: string, string1: string): void; // 1577 -> 11083
declare function unk11084(string0: string, string1: string): number; // 1151 -> 11084
declare function unk11085(...args: any[]): any; // 1900 -> 11085
declare function unk11086(int0: number, int1: number, int2: number): void; // 2092 -> 11086
declare function unk11087(...args: any[]): any; // 660 -> 11087
declare function unk11088(int0: number, int1: number): number; // 549 -> 11088
declare function unk11089(int0: number, int1: number): number; // 1639 -> 11089
declare function unk11090(int0: number, int1: number): number; // 1366 -> 11090
declare function unk11091(int0: number, int1: number): number; // 1483 -> 11091
declare function unk11092(int0: number, int1: number): number; // 1801 -> 11092
declare function unk11093(int0: number, int1: number): number; // 1862 -> 11093
declare function unk11094(int0: number, int1: number): number; // 1727 -> 11094
declare function unk11095(int0: number): number; // 1460 -> 11095
declare function unk11096(int0: number): number; // 1033 -> 11096
declare function unk11097(...args: any[]): any; // 1210 -> 11097
declare function unk11098(...args: any[]): any; // 2197 -> 11098
declare function unk11099(int0: number, string0: string): void; // 1858 -> 11099
declare function unk11100(): [number, number, string, number, string, number, number, string]; // 1252 -> 11100
declare function unk11101(): [number, number, string, number, string, number, number, string]; // 1353 -> 11101
declare function unk11102(): number; // 1072 -> 11102
declare function unk11103(): number; // 2231 -> 11103
declare function unk11104(...args: any[]): any; // 1258 -> 11104
declare function unk11105(...args: any[]): any; // 1080 -> 11105
declare function unk11106(): void; // 61 -> 11106
declare function unk11107(int0: number, int1: number, int2: number): void; // 573 -> 11107
declare function unk11108(...args: any[]): any; // 1082 -> 11108
declare function unk11109(...args: any[]): any; // 531 -> 11109
declare function unk11110(): number; // 1617 -> 11110
declare function unk11111(int0: number): number; // 1997 -> 11111
declare function unk11112(...args: any[]): any; // 930 -> 11112
declare function unk11113(): number; // 1754 -> 11113
declare function unk11114(): number; // 1571 -> 11114
declare function unk11115(): number; // 170 -> 11115
declare function unk11116(): number; // 1950 -> 11116
declare function unk11117(vararg: BoundFunction): void; // 849 -> 11117
declare function unk11118(int0: number): number; // 837 -> 11118
declare function unk11119(string0: string): number; // 2107 -> 11119
declare function unk11120(int0: number): number; // 232 -> 11120
declare function unk11121(int0: number): number; // 339 -> 11121
declare function unk11122(...args: any[]): any; // 995 -> 11122
declare function unk11123(int0: number): void; // 2143 -> 11123
declare function unk11124(): number; // 663 -> 11124
declare function unk11125(int0: number): number; // 1527 -> 11125
declare function unk11126(string0: string): void; // 651 -> 11126
declare function unk11127(string0: string, int0: number): void; // 1309 -> 11127
declare function unk11128(): void; // 528 -> 11128
declare function unk11129(): void; // 66 -> 11129
declare function unk11130(int0: number, int1: number, int2: number, int3: number, int4: number): [number, number]; // 458 -> 11130
declare function unk11131(int0: number): number; // 444 -> 11131
declare function unk11132(int0: number): [number, number]; // 795 -> 11132
declare function unk11133(...args: any[]): any; // 1667 -> 11133
declare function unk11134(...args: any[]): any; // 237 -> 11134
declare function unk11135(int0: number): number; // 1257 -> 11135
declare function unk11136(...args: any[]): any; // 1345 -> 11136
declare function unk11137(...args: any[]): any; // 1326 -> 11137
declare function unk11138(...args: any[]): any; // 1851 -> 11138
declare function unk11139(...args: any[]): any; // 1948 -> 11139
declare function unk11140(...args: any[]): any; // 806 -> 11140
declare function unk11141(): number; // 151 -> 11141
declare function unk11142(): number; // 1470 -> 11142
declare function unk11143(): number; // 974 -> 11143
declare function unk11144(): void; // 1417 -> 11144
declare function unk11145(): number; // 624 -> 11145
declare function unk11146(...args: any[]): any; // 82 -> 11146
declare function unk11147(...args: any[]): any; // 1664 -> 11147
declare function unk11148(...args: any[]): any; // 379 -> 11148
declare function unk11149(...args: any[]): any; // 759 -> 11149
declare function unk11150(...args: any[]): any; // 173 -> 11150
declare function unk11151(int0: number, int1: number, int2: number): void; // 121 -> 11151
declare function unk11152(int0: number): number; // 328 -> 11152
declare function unk11153(int0: number): [number, number]; // 2195 -> 11153
declare function unk11154(int0: number): number; // 565 -> 11154
declare function unk11155(int0: number, int1: number, int2: number): number; // 1608 -> 11155
declare function unk11156(...args: any[]): any; // 1817 -> 11156
declare function unk11157(...args: any[]): any; // 1112 -> 11157
declare function unk11158(...args: any[]): any; // 93 -> 11158
declare function unk11159(int0: number, int1: number, int2: number): number; // 125 -> 11159
declare function unk11160(int0: number, int1: number): number; // 1236 -> 11160
declare function unk11161(...args: any[]): any; // 2111 -> 11161
declare function unk11162(int0: number, int1: number, int2: number): number; // 564 -> 11162
declare function unk11163(int0: number, int1: number): number; // 128 -> 11163
declare function unk11164(...args: any[]): any; // 2175 -> 11164
declare function unk11165(int0: number, int1: number, int2: number): number; // 1715 -> 11165
declare function unk11166(int0: number, int1: number): number; // 0 -> 11166
declare function unk11167(...args: any[]): any; // 685 -> 11167
declare function unk11168(int0: number, int1: number, int2: number): number; // 924 -> 11168
declare function unk11169(int0: number, int1: number): number; // 2022 -> 11169
declare function unk11170(...args: any[]): any; // 1046 -> 11170
declare function unk11171(int0: number, int1: number, int2: number): number; // 481 -> 11171
declare function unk11172(int0: number, int1: number, int2: number): number; // 1192 -> 11172
declare function unk11173(...args: any[]): any; // 2043 -> 11173
