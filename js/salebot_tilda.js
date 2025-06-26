if (SalebotTildaIntegration == undefined) {
    var domain_with_protocol = "https://salebot.pro"
    var scripts = document.getElementsByTagName('script');
    var myScript = scripts[scripts.length - 1];
    if (myScript.src.includes("localhost:3000")) {
        domain_with_protocol = "http://localhost:3000"
    } else if (myScript.src.includes("salebot.ai")) {
        domain_with_protocol = "https://salebot.ai"
    } else if (myScript.src.includes("salebot.zmservice.ru")) {
        domain_with_protocol = "https://salebot.zmservice.ru"
    }
    var quizWarn = false;

    var countries = {
        "+7": ["Kazakhstan (Қазақстан)", "kz", "7", '(812) 345-67-89', [3, 3, 2, 2], true, undefined, 11],
        "7": ["Russia (Россия)", "ru", "7", "(912) 345-67-89", [3, 3, 2, 2], true, 8, 11],
        "380": ["Ukraine (Україна)", "ua", "380", '98 123 4567', [2, 3, 4], true, 0, 12],
        "93": ["Afghanistan (‫افغانستان‬‎)", "af", "93", undefined, undefined, false, undefined, 12],
        "355": ["Albania (Shqipëri)", "al", "355", undefined, undefined, false, undefined, 12],
        "213": ["Algeria (‫الجزائر‬‎)", "dz", "213", undefined, undefined, false, undefined, 12],
        "1684": ["American Samoa", "as", "1684", undefined, undefined, false, undefined, 11],
        "376": ["Andorra", "ad", "376", undefined, undefined, false, undefined, 12],
        "244": ["Angola", "ao", "244", undefined, undefined, false, undefined, 11],
        "1264": ["Anguilla", "ai", "1264", undefined, undefined, false, undefined, 11],
        "1268": ["Antigua and Barbuda", "ag", "1268", undefined, undefined, false, undefined, 11],
        "54": ["Argentina", "ar", "54", undefined, undefined, false, undefined, 12],
        "374": ["Armenia (Հայաստան)", "am", "374", undefined, undefined, true, undefined, 11],
        "297": ["Aruba", "aw", "297", undefined, undefined, false, undefined, 11],
        "61": ["Australia", "au", "61", 'XXX-XXXXXXX', [3,7], false, undefined, 11],
        "43": ["Austria (Österreich)", "at", "43", 'XXX-XXXXXXXX', [3,8], false, undefined, 12],
        "994": ["Azerbaijan (Azərbaycan)", "az", "994", '778-456765', [3, 6], true, undefined, 12],
        "1242": ["Bahamas", "bs", "1242",undefined, undefined, false, undefined, 11],
        "973": ["Bahrain (‫البحرين‬‎)", "bh", "973", undefined, undefined, false, undefined, 11],
        "880": ["Bangladesh (বাংলাদেশ)", "bd", "880",undefined, undefined, false, undefined, 11],
        "1246": ["Barbados", "bb", "1246",undefined, undefined, false, undefined, 11],
        "375": ["Belarus (Беларусь)", "by", "375",undefined, undefined, true, undefined, 12],
        "32": ["Belgium (België)", "be", "32",undefined, undefined, false, undefined, 11],
        "501": ["Belize", "bz", "501",undefined, undefined, false, undefined, 11],
        "229": ["Benin (Bénin)", "bj", "229",undefined, undefined, false, undefined, 11],
        "1441": ["Bermuda", "bm", "1441",undefined, undefined, false, undefined, 11],
        "975": ["Bhutan (འབྲུག)", "bt", "975",undefined, undefined, false, undefined, 11],
        "591": ["Bolivia", "bo", "591",undefined, undefined, false, undefined, 11],
        "387": ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387",undefined, undefined, false, undefined, 11],
        "267": ["Botswana", "bw", "267",undefined, undefined, false, undefined, 11],
        "55": ["Brazil (Brasil)", "br", "55",undefined, undefined, false, undefined, 11],
        "246": ["British Indian Ocean Territory", "io", "246",undefined, undefined, false, undefined, 11],
        "1284": ["British Virgin Islands", "vg", "1284",undefined, undefined, false, undefined, 11],
        "673": ["Brunei", "bn", "673",undefined, undefined, false, undefined, 11],
        "359": ["Bulgaria (България)", "bg", "359",'XXX-XXXXXX', [3,6], true, undefined, 12],
        "226": ["Burkina Faso", "bf", "226",undefined, undefined, false, undefined, 11],
        "257": ["Burundi (Uburundi)", "bi", "257",undefined, undefined, false, undefined, 11],
        "855": ["Cambodia (កម្ពុជា)", "kh", "855",undefined, undefined, false, undefined, 11],
        "237": ["Cameroon (Cameroun)", "cm", "237",undefined, undefined, false, undefined, 11],
        "238": ["Cape Verde (Kabu Verdi)", "cv", "238",undefined, undefined, false, undefined, 11],
        "599": ["Caribbean Netherlands", "bq", "599",undefined, undefined, false, undefined, 11],
        "1345": ["Cayman Islands", "ky", "1345",undefined, undefined, false, undefined, 11],
        "236": ["Central African Republic (République centrafricaine)", "cf", "236",undefined, undefined, false, undefined, 11],
        "235": ["Chad (Tchad)", "td", "235",undefined, undefined, false, undefined, 11],
        "56": ["Chile", "cl", "56",undefined, undefined, false, undefined, 11],
        "86": ["China (中国)", "cn", "86", '132-37648956', [3, 8], false, undefined, 13],
        "57": ["Colombia", "co", "57",undefined, undefined, false, undefined, 11],
        "269": ["Comoros (‫جزر القمر‬‎)", "km", "269",undefined, undefined, false, undefined, 11],
        "243": ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243",undefined, undefined, false, undefined, 11],
        "242": ["Congo (Republic) (Congo-Brazzaville)", "cg", "242",undefined, undefined, false, undefined, 11],
        "682": ["Cook Islands", "ck", "682",undefined, undefined, false, undefined, 11],
        "506": ["Costa Rica", "cr", "506",undefined, undefined, false, undefined, 11],
        "225": ["Côte d’Ivoire", "ci", "225",undefined, undefined, false, undefined, 11],
        "385": ["Croatia (Hrvatska)", "hr", "385",undefined, undefined, false, undefined, 11],
        "53": ["Cuba", "cu", "53",undefined, undefined, false, undefined, 11],
        "357": ["Cyprus (Κύπρος)", "cy", "357",undefined, undefined, true, undefined, 11],
        "420": ["Czech Republic (Česká republika)", "cz", "420",'XXX-XXX-XXX', [3, 3, 3], true, undefined, 12],
        "45": ["Denmark (Danmark)", "dk", "45",undefined, undefined, false, undefined, 11],
        "253": ["Djibouti", "dj", "253",undefined, undefined, false, undefined, 11],
        "1767": ["Dominica", "dm", "1767",undefined, undefined, false, undefined, 11],
        "593": ["Ecuador", "ec", "593",undefined, undefined, false, undefined, 11],
        "20": ["Egypt (‫مصر‬‎)", "eg", "20",undefined, undefined, true, undefined, 11],
        "503": ["El Salvador", "sv", "503",undefined, undefined, false, undefined, 11],
        "240": ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240",undefined, undefined, false, undefined, 11],
        "291": ["Eritrea", "er", "291",undefined, undefined, false, undefined, 11],
        "372": ["Estonia (Eesti)", "ee", "372",undefined, undefined, true, undefined, 11],
        "251": ["Ethiopia", "et", "251",undefined, undefined, false, undefined, 11],
        "500": ["Falkland Islands (Islas Malvinas)", "fk", "500",undefined, undefined, false, undefined, 11],
        "298": ["Faroe Islands (Føroyar)", "fo", "298",undefined, undefined, false, undefined, 11],
        "679": ["Fiji", "fj", "679",undefined, undefined, false, undefined, 11],
        "358": ["Finland (Suomi)", "fi", "358",'XXX-XXX-XXX', [3, 3, 3], false, undefined, 12],
        "33": ["France", "fr", "33",undefined, undefined, false, undefined, 11],
        "594": ["French Guiana (Guyane française)", "gf", "594",undefined, undefined, false, undefined, 11],
        "689": ["French Polynesia (Polynésie française)", "pf", "689",undefined, undefined, false, undefined, 11],
        "241": ["Gabon", "ga", "241",undefined, undefined, false, undefined, 11],
        "220": ["Gambia", "gm", "220",undefined, undefined, false, undefined, 11],
        "995": ["Georgia (საქართველო)", "ge", "995",'595-999-567', [3, 3, 3], true, undefined, 11],
        "49": ["Germany (Deutschland)", "de", "49", '176-64348956', [3, 8], false, undefined, 12],
        "233": ["Ghana (Gaana)", "gh", "233",undefined, undefined, false, undefined, 11],
        "350": ["Gibraltar", "gi", "350",undefined, undefined, false, undefined, 11],
        "30": ["Greece (Ελλάδα)", "gr", "30",undefined, undefined, false, undefined, 11],
        "299": ["Greenland (Kalaallit Nunaat)", "gl", "299",undefined, undefined, false, undefined, 11],
        "1473": ["Grenada", "gd", "1473",undefined, undefined, false, undefined, 11],
        "590": ["Guadeloupe", "gp", "590",undefined, undefined, false, undefined, 11],
        "1671": ["Guam", "gu", "1671",undefined, undefined, false, undefined, 11],
        "502": ["Guatemala", "gt", "502",undefined, undefined, false, undefined, 11],
        "224": ["Guinea (Guinée)", "gn", "224",undefined, undefined, false, undefined, 11],
        "245": ["Guinea-Bissau (Guiné Bissau)", "gw", "245",undefined, undefined, false, undefined, 11],
        "592": ["Guyana", "gy", "592",undefined, undefined, false, undefined, 11],
        "509": ["Haiti", "ht", "509",undefined, undefined, false, undefined, 11],
        "504": ["Honduras", "hn", "504",undefined, undefined, true, undefined, 11],
        "852": ["Hong Kong (香港)", "hk", "852",undefined, undefined, false, undefined, 11],
        "36": ["Hungary (Magyarország)", "hu", "36",undefined, undefined, true, undefined, 11],
        "354": ["Iceland (Ísland)", "is", "354",undefined, undefined, false, undefined, 11],
        "91": ["India (भारत)", "in", "91",undefined, undefined, false, undefined, 11],
        "62": ["Indonesia", "id", "62", '153-37648956', [3, 8], false, undefined, 13],
        "98": ["Iran (‫ایران‬‎)", "ir", "98",undefined, undefined, true, undefined, 11],
        "964": ["Iraq (‫العراق‬‎)", "iq", "964",undefined, undefined, true, undefined, 11],
        "353": ["Ireland", "ie", "353",undefined, undefined, false, undefined, 11],
        "972": ["Israel (‫ישראל‬‎)", "il", "972", '3-3764-8956', [1, 4, 4], true, undefined, 12],
        "39": ["Italy (Italia)", "it", "39",'XXX-XXX-XXXX', [3, 3, 4], false, undefined, 12],
        "1876": ["Jamaica", "jm", "1876",undefined, undefined, false, undefined, 11],
        "81": ["Japan (日本)", "jp", "81",'XXX-XXX-XXX', [3, 3, 4], false, undefined, 11],
        "962": ["Jordan (‫الأردن‬‎)", "jo", "962",undefined, undefined, false, undefined, 11],
        "254": ["Kenya", "ke", "254",undefined, undefined, false, undefined, 11],
        "686": ["Kiribati", "ki", "686",undefined, undefined, false, undefined, 11],
        "965": ["Kuwait (‫الكويت‬‎)", "kw", "965",undefined, undefined, false, undefined, 11],
        "996": ["Kyrgyzstan (Кыргызстан)", "kg", "996",'779-456765', [3, 6], true, undefined, 12],
        "856": ["Laos (ລາວ)", "la", "856",undefined, undefined, false, undefined, 11],
        "371": ["Latvia (Latvija)", "lv", "371",undefined, undefined, true, undefined, 11],
        "961": ["Lebanon (‫لبنان‬‎)", "lb", "961",undefined, undefined, false, undefined, 11],
        "266": ["Lesotho", "ls", "266",undefined, undefined, false, undefined, 11],
        "231": ["Liberia", "lr", "231",undefined, undefined, false, undefined, 11],
        "218": ["Libya (‫ليبيا‬‎)", "ly", "218",undefined, undefined, true, undefined, 11],
        "423": ["Liechtenstein", "li", "423",undefined, undefined, false, undefined, 11],
        "370": ["Lithuania (Lietuva)", "lt", "370",undefined, undefined, false, undefined, 11],
        "352": ["Luxembourg", "lu", "352",undefined, undefined, false, undefined, 11],
        "853": ["Macau (澳門)", "mo", "853",undefined, undefined, false, undefined, 11],
        "389": ["Macedonia (FYROM) (Македонија)", "mk", "389",undefined, undefined, false, undefined, 11],
        "261": ["Madagascar (Madagasikara)", "mg", "261",undefined, undefined, false, undefined, 11],
        "265": ["Malawi", "mw", "265",undefined, undefined, false, undefined, 11],
        "60": ["Malaysia", "my", "60",undefined, undefined, false, undefined, 11],
        "960": ["Maldives", "mv", "960",undefined, undefined, false, undefined, 11],
        "223": ["Mali", "ml", "223",undefined, undefined, false, undefined, 11],
        "356": ["Malta", "mt", "356",undefined, undefined, false, undefined, 11],
        "692": ["Marshall Islands", "mh", "692",undefined, undefined, false, undefined, 11],
        "596": ["Martinique", "mq", "596",undefined, undefined, false, undefined, 11],
        "222": ["Mauritania (‫موريتانيا‬‎)", "mr", "222",undefined, undefined, false, undefined, 11],
        "230": ["Mauritius (Moris)", "mu", "230",undefined, undefined, false, undefined, 11],
        "52": ["Mexico (México)", "mx", "52",undefined, undefined, false, undefined, 11],
        "691": ["Micronesia", "fm", "691",undefined, undefined, false, undefined, 11],
        "373": ["Moldova (Republica Moldova)", "md", "373",undefined, undefined, true, undefined, 11],
        "377": ["Monaco", "mc", "377",undefined, undefined, false, undefined, 11],
        "976": ["Mongolia (Монгол)", "mn", "976",undefined, undefined, true, undefined, 11],
        "382": ["Montenegro (Crna Gora)", "me", "382",undefined, undefined, false, undefined, 11],
        "1664": ["Montserrat", "ms", "1664",undefined, undefined, false, undefined, 11],
        "212": ["Morocco (‫المغرب‬‎)", "ma", "212","649-999995", [3,6], false, undefined, 12],
        "258": ["Mozambique (Moçambique)", "mz", "258",undefined, undefined, false, undefined, 11],
        "95": ["Myanmar (Burma) (မြန်မာ)", "mm", "95",undefined, undefined, false, undefined, 11],
        "264": ["Namibia (Namibië)", "na", "264",undefined, undefined, false, undefined, 11],
        "674": ["Nauru", "nr", "674",undefined, undefined, false, undefined, 11],
        "977": ["Nepal (नेपाल)", "np", "977",undefined, undefined, false, undefined, 11],
        "31": ["Netherlands (Nederland)", "nl", "31",undefined, undefined, false, undefined, 11],
        "687": ["New Caledonia (Nouvelle-Calédonie)", "nc", "687",undefined, undefined, false, undefined, 11],
        "64": ["New Zealand", "nz", "64", 'XXX-XXXXXXX', [3,7], false, undefined, 12],
        "505": ["Nicaragua", "ni", "505",undefined, undefined, false, undefined, 11],
        "227": ["Niger (Nijar)", "ne", "227",undefined, undefined, false, undefined, 11],
        "234": ["Nigeria", "ng", "234",undefined, undefined, false, undefined, 11],
        "683": ["Niue", "nu", "683",undefined, undefined, false, undefined, 11],
        "672": ["Norfolk Island", "nf", "672",undefined, undefined, false, undefined, 11],
        "850": ["Korea North (조선 민주주의 인민 공화국)", "kp", "850",undefined, undefined, false, undefined, 11],
        "1670": ["Northern Mariana Islands", "mp", "1670",undefined, undefined, false, undefined, 11],
        "47": ["Norway (Norge)", "no", "47",undefined, undefined, false, undefined, 10],
        "968": ["Oman (‫عُمان‬‎)", "om", "968",undefined, undefined, false, undefined, 11],
        "92": ["Pakistan (‫پاکستان‬‎)", "pk", "92",undefined, undefined, true, undefined, 11],
        "680": ["Palau", "pw", "680",undefined, undefined, false, undefined, 11],
        "970": ["Palestine (‫فلسطين‬‎)", "ps", "970",undefined, undefined, false, undefined, 11],
        "507": ["Panama (Panamá)", "pa", "507",undefined, undefined, false, undefined, 11],
        "675": ["Papua New Guinea", "pg", "675",undefined, undefined, false, undefined, 11],
        "595": ["Paraguay", "py", "595",undefined, undefined, false, undefined, 11],
        "51": ["Peru (Perú)", "pe", "51",undefined, undefined, false, undefined, 11],
        "63": ["Philippines", "ph", "63",undefined, undefined, false, undefined, 11],
        "48": ["Poland (Polska)", "pl", "48",undefined, undefined, true, undefined, 11],
        "351": ["Portugal", "pt", "351", 'XX-XXX-XXXX', [2,3,4], false, undefined, 11],
        "974": ["Qatar (‫قطر‬‎)", "qa", "974",undefined, undefined, false, undefined, 11],
        "262": ["Réunion (La Réunion)", "re", "262",undefined, undefined, false, undefined, 11],
        "40": ["Romania (România)", "ro", "40",undefined, undefined, true, undefined, 11],
        "250": ["Rwanda", "rw", "250",undefined, undefined, false, undefined, 11],
        "290": ["Saint Helena", "sh", "290",undefined, undefined, false, undefined, 11],
        "1869": ["Saint Kitts and Nevis", "kn", "1869",undefined, undefined, false, undefined, 11],
        "1758": ["Saint Lucia", "lc", "1758",undefined, undefined, false, undefined, 11],
        "508": ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508",undefined, undefined, false, undefined, 11],
        "1784": ["Saint Vincent and the Grenadines", "vc", "1784",undefined, undefined, false, undefined, 11],
        "685": ["Samoa", "ws", "685",undefined, undefined, false, undefined, 11],
        "378": ["San Marino", "sm", "378",undefined, undefined, false, undefined, 11],
        "239": ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239",undefined, undefined, false, undefined, 11],
        "966": ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966",undefined, undefined, true, undefined, 11],
        "221": ["Senegal (Sénégal)", "sn", "221",undefined, undefined, false, undefined, 11],
        "381": ["Serbia (Србија)", "rs", "381", "XXX-XXX-XXX", undefined, true, undefined, 9],
        "248": ["Seychelles", "sc", "248",undefined, undefined, false, undefined, 11],
        "232": ["Sierra Leone", "sl", "232",undefined, undefined, false, undefined, 11],
        "65": ["Singapore", "sg", "65",undefined, undefined, false, undefined, 11],
        "1721": ["Sint Maarten", "sx", "1721",undefined, undefined, false, undefined, 11],
        "421": ["Slovakia (Slovensko)", "sk", "421",undefined, undefined, true, undefined, 11],
        "386": ["Slovenia (Slovenija)", "si", "386",undefined, undefined, true, undefined, 11],
        "677": ["Solomon Islands", "sb", "677",undefined, undefined, false, undefined, 11],
        "252": ["Somalia (Soomaaliya)", "so", "252",undefined, undefined, false, undefined, 11],
        "27": ["South Africa", "za", "27",undefined, undefined, false, undefined, 11],
        "82": ["Korea South (대한민국)", "kr", "82", "010-3456-7859", [3, 4, 4], false, undefined, 13],
        "211": ["South Sudan (‫جنوب السودان‬‎)", "ss", "211",undefined, undefined, false, undefined, 11],
        "34": ["Spain (España)", "es", "34",'XXX-XXX-XXX', [3, 3, 4], false, undefined, 11],
        "94": ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94",undefined, undefined, false, undefined, 11],
        "249": ["Sudan (‫السودان‬‎)", "sd", "249",undefined, undefined, true, undefined, 11],
        "597": ["Suriname", "sr", "597",undefined, undefined, false, undefined, 11],
        "268": ["Swaziland", "sz", "268",undefined, undefined, false, undefined, 11],
        "46": ["Sweden (Sverige)", "se", "46",undefined, undefined, false, undefined, 11],
        "41": ["Switzerland (Schweiz)", "ch", "41",undefined, undefined, false, undefined, 11],
        "963": ["Syria (‫سوريا‬‎)", "sy", "963",undefined, undefined, true, undefined, 11],
        "886": ["Taiwan (台灣)", "tw", "886",undefined, undefined, false, undefined, 11],
        "992": ["Tajikistan", "tj", "992",undefined, undefined, false, undefined, 11],
        "255": ["Tanzania", "tz", "255",undefined, undefined, false, undefined, 11],
        "66": ["Thailand (ไทย)", "th", "66",undefined, undefined, false, undefined, 11],
        "670": ["Timor-Leste", "tl", "670",undefined, undefined, false, undefined, 11],
        "228": ["Togo", "tg", "228",undefined, undefined, false, undefined, 11],
        "690": ["Tokelau", "tk", "690",undefined, undefined, false, undefined, 11],
        "676": ["Tonga", "to", "676",undefined, undefined, false, undefined, 11],
        "1868": ["Trinidad and Tobago", "tt", "1868",undefined, undefined, false, undefined, 11],
        "216": ["Tunisia (‫تونس‬‎)", "tn", "216",undefined, undefined, false, undefined, 11],
        "90": ["Turkey (Türkiye)", "tr", "90",undefined, undefined, false, undefined, 11],
        "993": ["Turkmenistan", "tm", "993",undefined, undefined, true, undefined, 11],
        "1649": ["Turks and Caicos Islands", "tc", "1649",undefined, undefined, false, undefined, 11],
        "688": ["Tuvalu", "tv", "688",undefined, undefined, false, undefined, 11],
        "1340": ["U.S. Virgin Islands", "vi", "1340",undefined, undefined, false, undefined, 11],
        "256": ["Uganda", "ug", "256",undefined, undefined, false, undefined, 11],
        "971": ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971","XXX-XXX-XXX", [3,3,3], true, undefined, 11],
        "+1": ["Canada", "ca", "1",undefined, undefined, false, undefined, 11],
        "44": ["United Kingdom", "gb", "44","XXXX-XXXXXX", [4,6], true, undefined, 12],
        "1": ["United States", "us", "1",undefined, undefined, true, undefined, 11],
        "598": ["Uruguay", "uy", "598",undefined, undefined, false, undefined, 11],
        "998": ["Uzbekistan (Oʻzbekiston)", "uz", "998","XX-XXX-XX-XX", [2,3,2,2], true, undefined, 12],
        "678": ["Vanuatu", "vu", "678",undefined, undefined, false, undefined, 11],
        "58": ["Venezuela", "ve", "58",undefined, undefined, true, undefined, 11],
        "84": ["Vietnam (Việt Nam)", "vn", "84",undefined, undefined, true, undefined, 11],
        "681": ["Wallis and Futuna", "wf", "681",undefined, undefined, false, undefined, 11],
        "967": ["Yemen (‫اليمن‬‎)", "ye", "967",undefined, undefined, false, undefined, 11],
        "260": ["Zambia", "zm", "260",undefined, undefined, false, undefined, 11],
        "263": ["Zimbabwe", "zw", "263",undefined, undefined, false, undefined, 11]
    }
    var letter_code = [
        ['a', '🇦'],
        ['b', '🇧'],
        ['c', '🇨'],
        ['d', '🇩'],
        ['e', '🇪'],
        ['f', '🇫'],
        ['g', '🇬'],
        ['h', '🇭'],
        ['i', '🇮'],
        ['j', '🇯'],
        ['k', '🇰'],
        ['l', '🇱'],
        ['m', '🇲'],
        ['n', '🇳'],
        ['o', '🇴'],
        ['p', '🇵'],
        ['q', '🇶'],
        ['r', '🇷'],
        ['s', '🇸'],
        ['t', '🇹'],
        ['u', '🇺'],
        ['v', '🇻'],
        ['w', '🇼'],
        ['x', '🇽'],
        ['y', '🇾'],
        ['z', '🇿']
    ];
    function quizWarning (type) {
        if(quizWarn) return
        quizWarn = true
        $('.salebot-notification--' + type).show()
        $('.salebot-notification--warning').css('opacity', 1).show().animate({
            opacity: 1
        }, 1000, function() {
            $('.salebot-notification--warning').animate({
                opacity: 0
            }, 500, function(){
                $('.salebot-notification--warning').hide().css('opacity', 1)
                $('.salebot-notification--' + type).hide()
                quizWarn = false
            })
        })
    }

    // var prod = "https://salebot.pro"
    // var test = "https://salebot.zmservice.ru"
    // var local = "http://localhost:3000"
    // var domain_with_protocol = prod
    function createHref(className, askPhone, askEmail, askName, name_important, askFbCookie, askGaCookie, askYmCookie, askRsCookie, askFbcCookie, validatePhone, validateEmail, askComagicCookie, askIpAddr, askUserAgent) {

        var el = $("." + className).parents(".sb_block")
        var privacyPolicy = el.find('input[name="temrscheckbox"]').prop('checked')
        var personalPrivacyPolicy = el.find('.personal_privacy_input').is(':checked')
        var phoneValue = el.find('.phone_input').val()
        var emailValue = el.find(".email_input").val()
        var nameValue = el.find(".name_input").val()
        var mainHref = $("." + className).attr("data-url")
        name_important = name_important == "true"
        askPhone = askPhone == "true"
        validatePhone = validatePhone == "true"
        askEmail = askEmail == "true"
        validateEmail = validateEmail == "true"
        askUserAgent = askUserAgent == "true"
        askIpAddr = askIpAddr != "false" ? askIpAddr : false
        var phone = ""
        var email = ""
        var name = ""
        var counter = 0
        if(askIpAddr){
            mainHref = mainHref + `&ip_addr=${askIpAddr}`
        }
        if(askUserAgent){
            mainHref = mainHref + `&user_agent=${window.navigator.userAgent.replace(/;/g, "%3B")}`
        }
        if (phoneValue != undefined && askPhone) {
            if (phoneValue) {
                phoneValue = (el.find('.select_mask_code').text() + phoneValue).replace(/[+|| ]/g, "")
            }
            if (validatePhone) {
                if (phoneValue.match(/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/g) != null) {
                    phone = "&phone=" + phoneValue
                    mainHref = mainHref + phone
                    counter++
                } else {
                    el.find(".invalid-feedback_phone_validation").css("display", "block")
                }
            } else {
                if(phoneValue) {
                    phone = "&phone=" + phoneValue
                    mainHref = mainHref + phone
                }
                counter++
            }
        } else {
            counter++
        }
        if (emailValue != undefined && askEmail) {
            if (validateEmail) {
                if (emailValue.match(/[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-z0-9](?:[A-z0-9-]*[A-z0-9])?\.)+[A-z0-9](?:[A-z0-9-]*[A-z0-9])?/g) != null) {
                    email = emailValue != "" ? "&email=" + emailValue.match(/([A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-z0-9](?:[A-z0-9-]*[A-z0-9])?\.)+[A-z0-9](?:[A-z0-9-]*[A-z0-9])?)/g)[0] : ''
                    mainHref = mainHref + email
                    counter++
                } else {
                    el.find(".invalid-feedback_email_validation").css("display", "block")
                }
            } else {
                email = emailValue != "" ? "&email=" + emailValue : ''
                mainHref = mainHref + email
                counter++
            }
        } else {
            counter++
        }
        if (nameValue != undefined && askName == "true") {
            if (nameValue != '' || !name_important) {
                name = nameValue != "" ? "&name_from_ml=" + nameValue : ''
                mainHref = mainHref + name
                counter++
            } else {
                el.find(".invalid-feedback_name").css("display", "block")
            }
        } else {
            counter++
        }
        let quiz_return = false
        el.find(".ml_quiz").each(function(){
            let quiz_element = $(this)
            let important = quiz_element.find(".ml_quiz_important").text().includes("true")
            let variable = quiz_element.find(".ml_quiz_variable").text()
            let type = quiz_element.find(".ml_quiz_type").text()
            let value = ''
            if(type === "radio"){
                value = quiz_element.find("input:checked[type='radio']").parent().find("span").text()
            } else if (type === "text"){
                value = quiz_element.find(".ml_quiz_free_answer").val()
            } else if (type === "checkbox"){
                quiz_element.find("input:checked[type='checkbox']").each(function(){
                    value += $(this).parent().find("span").text() + '; '
                })
            } else if (type === "select"){
                value = quiz_element.find(".ml_quiz_total_answer").text()
            }
            value = encodeURIComponent(value)
            if(important && !value){
                quiz_return = true
                quizWarning("quiz");
                //// ЗДЕСЬ
            }
            if(value){
                mainHref += `&${variable}=${value}`
            }
        })
        if(quiz_return){
            return
        }
        if (privacyPolicy == false){
            quizWarning ("privacy")
            return
        }
        if (personalPrivacyPolicy == false){
            quizWarning ("personal-privacy")
            return
        }
        if (counter === 3) {
            let lnk = mainHref + mini_landing_init(askFbCookie, askGaCookie, askYmCookie, askRsCookie, askFbcCookie, askComagicCookie)
            console.log(lnk)
            if(typeof fbq != "undefined"){
                fbq('track', 'Lead');
            }
            console.log(lnk)
            if(!lnk.includes("?")){
                lnk = lnk.replace("&", "?")
            }
            function getParamsObject(url) {
                let params = url.split('?')[1]
                let paramsArray = params.split('&')
                let paramsObject = {}
                paramsArray.forEach(function(param) {
                    let keyValue = param.split('=')
                    let key = decodeURIComponent(keyValue[0])
                    let value = decodeURIComponent(keyValue[1] || '')
                    paramsObject[key] = value
                });
                return paramsObject
            }

            function getUrlWithoutParams(url) {
                return url.split('?')[0]
            }

            let urlWithoutParams = getUrlWithoutParams(lnk)
            let dataParamsObj = getParamsObject(lnk)

            if(window.Telegram){
                window.Telegram.WebApp.close()
            } else {
                $.ajax({
                    url: urlWithoutParams.replace('salebot.pro', 'sbsite.pro'),
                    type: "POST",
                    data: dataParamsObj,
                    success: function (data, textStatus, xhr) {
                        if (data.redirect_to) {
                            window.location.href = data.redirect_to
                        } else {
                            console.log("Совпадений не найдено");
                        }
                    },
                    error: function () {
                        console.log('error')
                    },
                })
            }
        }
    }
    // ЭТО ДЛЯ КВИЗОВ ИЗ СЕКЦИЙ
    function regularQuizWarning(item) {
        $(item).closest('.ml_quiz').find('.invalid-feedback_quiz').show()
    }
    function quizWarningHide() {
        $(".ml_quiz").on('click', function() {
            $(this).find('.invalid-feedback_quiz').hide()
        })
    }
    function buttonColorsHover() {
        $('.create_order_salebot_crm').each((index, item) => {
            $(item)
                .on('mouseenter', function() {
                    const hoverColor = $(this).attr('hoverColor')
                    const hoverBackgroundColor = $(this).attr('hoverBackgroundColor')
                    if(hoverColor?.length > 0 || hoverBackgroundColor?.length > 0 ) {
                        $(this).css({
                            color: hoverColor,
                            background: hoverBackgroundColor
                        })
                    }
                })
                .on('mouseleave', function() {
                    const textColor = $(this).attr('textColor') || 'black'
                    const backgroundColor = $(this).attr('backgroundColor') || 'transparent'
                    $(this).css({
                        color: textColor,
                        background: backgroundColor
                    })
                })
        })
    }
    function grabParams(this_elem){
        let personalPrivacyInput = this_elem.parents(".salebot-form__container").find('.personal_privacy_input')
        let privacyInput = this_elem.parents(".salebot-form__container").find('.privacy_input')
        let privacyPolicy = privacyInput.prop('checked')
        let validationSuccess = true
        let params = {}
        this_elem.parents(".salebot-form__container").find(".ml_quiz").each(function (index, item) {
            let important = $(item).find(".ml_quiz_important").text() === "true"
            let variable = $(item).find('.ml_quiz_variable').text()
            let type = $(item).find(".ml_quiz_type").text()
            let values, value
            if (important) {
                values = validationFunctions[type](item, validationSuccess, important)
                validationSuccess = values.validation !== undefined? values.validation : values.validationSuccess
                value = values.value
            } else {
                values = validationFunctions[type](item, validationSuccess, important)
                value = values.value
            }
            if(validationSuccess && quizValidationTypes[type]) {
                params[variable] = decodeURIComponent(value)
            }
            if(validationSuccess && !quizValidationTypes[type]) {
                let obj = variablesFunctions[type + "_obj"](item, important)
                params[obj.name] = decodeURIComponent(obj.value)
            }
            if (!validationSuccess || (privacyInput.length > 0 && !privacyPolicy)) {
                this_elem.removeClass('disabled')
            }
            if (personalPrivacyInput.length > 0 && !personalPrivacyInput.is(':checked')){
                this_elem.removeClass('disabled')
            }
        })
        if (window.passedCaptcha !== undefined && !window.passedCaptcha[id_for_buttons]) {
            quizWarning ("recaptcha")
            return false
        }
        if (privacyInput.length > 0 && !privacyPolicy){
            quizWarning ("privacy")
        }
        if (personalPrivacyInput.length > 0 && !personalPrivacyInput.is(':checked')){
            quizWarning ("personal-privacy")
            return false
        }
        if(!validationSuccess){
            quizWarning ("quiz")
        }
        if(!validationSuccess || (privacyInput.length > 0 && !privacyPolicy)) {
            return false
        }
        return params
    }
    function successMessage(){
        $('.go_to_payment_btn').on("click", function(e){
            e.preventDefault()
            e.stopPropagation()
            let url = $(this).attr("href")
            let params = grabParams($(this))
            if (!params) {
                return
            }

            let project_id = $(this).find(".payment_info_project_id").text()
            let product_name = $(this).find(".payment_info_name").text()
            let product_description = $(this).find(".payment_info_description").text()
            let client_id = $(this).find(".payment_info_client_id").text()
            let state_id = $(this).find(".payment_info_state_id").text()
            let cost = $(this).find(".payment_info_price").text()

            let order_data = {
                order: {
                    cost: cost,
                    new_client_name: params.name_from_ml,
                    new_client_phone: params.phone,
                    new_client_email: params.email,
                    client_id: client_id,
                    state_id: state_id,
                    name: product_name,
                    description: product_description,
                    variables: JSON.stringify({
                        client_name: params.name_from_ml,
                        client_phone: params.phone,
                        client_comment: params.email
                    })
                },
                skip_auth: true
            }
            const domains = {
                "salebot.zmservice.ru": "https://salebot.zmservice.ru",
                "localhost": "http://localhost:3000",
                "salebot.ai": "https://salebot.ai"
            }
            const domain_with_protocol = domains[location.hostname] || "https://salebot.pro"

            $.ajax({
                url: `${domain_with_protocol}/projects/${project_id}/orders`,
                method: "POST",
                data: order_data,
                success: function (data) {
                    $.ajax({
                        url: url,
                        type: "POST",
                        data: params,
                        success: function (data){
                            let link_to_move = data.payment_link
                            if(link_to_move){
                                const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
                                const isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)

                                if (isIOS || isSafari) {
                                    window.location.href = link_to_move
                                }else{
                                    window.open(link_to_move)
                                }
                            }
                        },
                        error: function (data){
                            console.log("DATA ERROR" + data)
                        }
                    })
                },
            })
        })

        $('.create_order_salebot_crm').on('click', function (e){
            e.preventDefault()
            e.stopPropagation()

            let domain_with_protocol = "https://salebot.pro"
            let scripts = document.getElementsByTagName('script');
            let myScript = scripts[scripts.length - 1];
            if (myScript.src.includes("localhost:3000")) {
                domain_with_protocol = "http://localhost:3000"
            } else if (myScript.src.includes("salebot.zmservice.ru")) {
                domain_with_protocol = "https://salebot.zmservice.ru"
            }

            if ($(this).hasClass('disabled')) {
                return
            }

            let url = `${domain_with_protocol}${$(this).attr("href")}`
            let target = $(this)
            let personalPrivacyInput = $(this).parents(".salebot-form__container").find('.personal_privacy_input')
            let privacyInput = $(this).parents(".salebot-form__container").find('.privacy_input')
            let privacyPolicy = privacyInput.prop('checked')
            let validationSuccess = true
            let params = {}
            let data = {state_id: $(this).attr("state_id")}
            let redirectLink = $(this).parents('.link_group').find('.success_redirect_link').attr('href')
            let redirectLinkTarget = $(this).parents('.link_group').find('.success_redirect_link').attr('target')
            let isPassParams = $(this).parents('.link_group').find('.is_pass_params').text() === 'true'
            let optionOrderClient = $(this).parents('.salebot-form__container').find('.option_order_client').text()

            data["option_type_client"] = optionOrderClient

            target.addClass('disabled')

            $(this).parents(".salebot-form__container").find(".ml_quiz").each(function (index, item) {
                let important = $(item).find(".ml_quiz_important").text() === "true"
                let variable = $(item).find('.ml_quiz_variable').text()
                let type = $(item).find(".ml_quiz_type").text()
                let values, value
                if (important) {
                    values = validationFunctions[type](item, validationSuccess, important)
                    validationSuccess = values.validation !== undefined? values.validation : values.validationSuccess
                    value = values.value
                } else {
                    values = validationFunctions[type](item, validationSuccess, important)
                    value = values.value
                }
                if(validationSuccess && quizValidationTypes[type]) {
                    params[variable] = decodeURIComponent(value)
                }
                console.log('type1')
                console.log(type)
                if(validationSuccess && !quizValidationTypes[type]) {
                    console.log(type)
                    let obj = variablesFunctions[`${type}_obj`](item, important)
                    params[obj.name] = decodeURIComponent(obj.value)
                }
                if (!validationSuccess || (privacyInput.length > 0 && !privacyPolicy)) {
                    $(target).removeClass('disabled')
                }
            })
            if (privacyInput.length > 0 && !privacyPolicy){
                quizWarning ("privacy")
            }
            if (personalPrivacyInput.length > 0 && !personalPrivacyInput.is(':checked')){
                quizWarning ("personal-privacy")
                return false
            }
            if(!validationSuccess){
                quizWarning ("quiz")
            }
            if(!validationSuccess || privacyInput.length > 0 && !privacyPolicy) {
                return
            }
            data.variables = params

            $.ajax({
                url,
                type: "POST",
                data,
                params,
                target,
                success: function (data){
                    $(target).parents('.salebot-landing__section').find('.success_order_message').removeClass('hidden')
                    setTimeout(function (){
                        $('.success_order_message').addClass('hidden')
                        $(target).removeClass('disabled')
                    },4000)
                    if (redirectLink !== undefined) {
                        let userParams = new URLSearchParams(params).toString()
                        let locationHref = window.location.href
                        let locationParams = ''
                        let fullLinkParams = userParams

                        if (locationHref.includes('?')) {
                            let result = locationHref.split('?')[1]
                            if (result !== '') {
                                locationParams = new URLSearchParams(result).toString()
                                fullLinkParams = locationParams + '&' + userParams
                            }
                        }

                        if (isPassParams && redirectLink.includes('?')) {
                            let result = redirectLink.split('?')[1]
                            if (result !== '') {
                                redirectLink += '&' + fullLinkParams
                            } else {
                                redirectLink += fullLinkParams
                            }
                        } else if (isPassParams) {
                            redirectLink += '?' + fullLinkParams
                        }

                        window.open(redirectLink, redirectLinkTarget)
                    }
                },
                error: function(data){
                    setTimeout(function (){
                        $(target).removeClass('disabled')
                    }, 4000)
                }
            })
        })
    }

    var quizCalendarObj = null
    function quizCalendar() {
        this.quizCreateCalendar = $('.quiz_create_calendar')
        this.quizRenderInputs = () => {
            this.quizCreateCalendar.each((index, item) => {
                $(item).addClass(`quiz_create_calendar_${index}`)
            })

            this.quizCreateCalendar.each(function (index, item) {
                const classList = item.className.split(' ').join('.')
                createCalendar({
                    selector: `.${classList}`,
                    write_in_input: [`.${classList}`]
                })
            })
        }
        this.constructor = () => {
            this.quizRenderInputs()
        }
        this.constructor()
    }

    var  validationFunctions = {
        numeric: function (item, validationSuccess, important) {
            let value = $(item).find(".ml_quiz_free_answer").val()
            let validation = value.length > 0
            if(!validation && important) regularQuizWarning(item)
            if (validationSuccess === false) return {validationSuccess, value}
            return {validation, value}
        },
        name: function (item, validationSuccess, important) {
            let value = $(item).find(".name_input").val()
            let validation = value.replaceAll(' ', '').length > 0
            if (!validation && important) $(item).find(".invalid-feedback_name").css("display", "block")
            if (validationSuccess === false) return {validationSuccess, value}
            return {validation, value}
        },
        phone: function (item, validationSuccess, important) {
            let phoneValue = ($(item).find('.select_mask_code').text() + $(item).find('.phone_input').val()).replace(/[+|| ]/g, "")
            let validation
            let value = ""
            let phone_length = countries[$(item).find('.select_mask_code').text().split("+")[1]][7]
            if (phoneValue.match(/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/g) != null && (phoneValue.length == phone_length || phoneValue.length == phone_length+1)) {
                validation = true
            } else {
                validation = false
                if(important) {
                    $(item).find(".invalid-feedback_phone_validation").css("display", "block")
                }
            }
            if (validationSuccess === false) return  {validationSuccess, value}
            return {validation, value}
        },
        email: function (item, validationSuccess, important) {
            let value = $(item).find(".email_input").val()
            let validation
            if (value.match(/[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-z0-9](?:[A-z0-9-]*[A-z0-9])?\.)+[A-z0-9](?:[A-z0-9-]*[A-z0-9])?/g) != null) {
                validation = true
            } else {
                validation = false
                if(important) {
                    $(item).find(".invalid-feedback_email_validation").css("display", "block")
                }
            }

            if (validationSuccess === false) return {validationSuccess, value}
            return {validation, value}
        },
        select: function (item, validationSuccess, important) {
            let value = $(item).find(".ml_quiz_total_answer").text()
            let validation = value.length > 0
            if(!validation && important) regularQuizWarning(item)
            if (validationSuccess === false) return {validationSuccess, value}
            return {validation, value}
        },
        checkbox: function (item, validationSuccess, important) {
            let validation = ''
            let value = ""
            $(item).find("input:checked[type='checkbox']").each(function(){
                value += $(this).parent().find("span").eq(0).text() + '; '
            })
            validation = value.length > 0
            if(!validation && important) regularQuizWarning(item)
            if (validationSuccess === false) return {validationSuccess, value}
            return {validation, value}
        },
        radio: function (item, validationSuccess, important) {
            const checkedItem = $(item).find("input:checked[type='radio']")
            let value = $(item).find("input:checked[type='radio']").parent().find("span").eq(0).text()
            if(checkedItem.attr('data-fa-type')) {
                value = $(item).find('textarea').val().trim()
            }
            let validation = value.length > 0
            if(!validation && important) regularQuizWarning(item)
            if (validationSuccess === false) return {validationSuccess, value}
            return {validation, value}
        },
        text: function (item, validationSuccess, important) {
            let value = $(item).find(".ml_quiz_free_answer").val()
            let validation = value.length > 0
            if(!validation && important) regularQuizWarning(item)
            if (validationSuccess === false) return {validationSuccess, value}
            return {validation, value}
        },
        quiz_calendar: function (item, validationSuccess, important) {
            let value = $(item).find(".quiz_create_calendar").val()
            let validation = value.length > 0
            if(!validation && important) regularQuizWarning(item)
            if (validationSuccess === false) return {validationSuccess, value}
            return {validation, value}
        }
    }

    var quizValidationTypes = {
        'name': false,
        'phone': false,
        'email': false,
        'select': true,
        'checkbox': true,
        'radio': true,
        'text': true,
        'quiz_calendar': true,
        'numeric': true
    }

    var variablesFunctions = {
        phone: function(item, important) {
            let phoneValue = $(item).find('.phone_input').val()
            let value = ""
            if(phoneValue !== undefined && phoneValue) {
                phoneValue = ($(item).find('.select_mask_code').text() + phoneValue).replace(/[+|| ]/g, "")
                value = "&phone=" + phoneValue
            }
            return value
        },
        email : function(item, important) {
            let value
            let emailValue = $(item).find(".email_input").val()
            if(important) {
                value = emailValue !== ""? "&email=" + emailValue.match(/([A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-z0-9](?:[A-z0-9-]*[A-z0-9])?\.)+[A-z0-9](?:[A-z0-9-]*[A-z0-9])?)/g)[0] : ''
            } else {
                value = emailValue !== "" ? "&email=" + emailValue : ''
            }
            return value
        },
        name: function(item, notUsed) {
            let value
            let nameValue = $(item).find(".name_input").val()
            value = nameValue != "" ? "&name_from_ml=" + decodeURIComponent(nameValue) : ''
            return value
        },
        phone_obj: function(item, important) {
            let phoneValue = $(item).find('.phone_input').val()
            if(phoneValue !== undefined && phoneValue) {
                phoneValue = ($(item).find('.select_mask_code').text() + phoneValue).replace(/[+|| ]/g, "")
            }
            return {name: "phone", value: encodeURIComponent(phoneValue)}
        },
        email_obj : function(item, important) {
            let value
            let emailValue = $(item).find(".email_input").val()
            if(important) {
                value = emailValue !== ""? emailValue.match(/([A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-z0-9](?:[A-z0-9-]*[A-z0-9])?\.)+[A-z0-9](?:[A-z0-9-]*[A-z0-9])?)/g)[0] : ''
            } else {
                value = emailValue !== "" ? emailValue : ''
            }
            return {name: "email", value: encodeURIComponent(value)}
        },
        name_obj: function(item, notUsed) {
            let nameValue = $(item).find(".name_input").val()
            return {name: "name_from_ml", value: decodeURIComponent(nameValue)}
        }
    }
    var quizWarningIsOff = true

    function quizTextArea() {
        $('.ml_quiz_textarea').off().on('input', function() {
            let val = $(this).val().replace(/\n\r?/g, '<br />');
            let span = $(this).closest('.ml_quiz_answers_container').find('.text-area-span')
            $(span).html(val)
            let height = $(span).height()
            if(height <= 200) {
                $(this).height(height).css("overflow", "hidden")
            } else {
                $(this).height(200).css("overflow", "auto")
            }
        })
    }

    function formCreateHref (className, quizzes_array, id_for_buttons, askFbCookie, askGaCookie, askYmCookie, askRsCookie, askFbcCookie,  askComagicCookie, askUserAgent, askIpAddr) {
        if(quizWarningIsOff) {
            quizWarningHide()
            quizWarningIsOff = false
        }
        let currentForm = $('.' + `${id_for_buttons}`)
        let validationSuccess = true
        let button = currentForm.find(`.${className}`)
        let mainHref = button.attr("data-url")
        let random_id = currentForm.attr('data-random_id')
        askUserAgent = askUserAgent == "true"
        askIpAddr = askIpAddr != "false" ? askIpAddr : false

        if(askIpAddr){
            mainHref = mainHref + `&ip_addr=${askIpAddr}`
        }
        if(askUserAgent){
            mainHref = mainHref + `&user_agent=${encodeURIComponent(window.navigator.userAgent.replace(/;/g, "%3B"))}`
        }
        currentForm.find(".ml_quiz").each(function (index, item) {
            let important = $(item).find(".ml_quiz_important").text() === "true"
            let variable = $(item).find('.ml_quiz_variable').text()
            let type = $(item).find(".ml_quiz_type").text()
            let values, value
            if (important) {
                values = validationFunctions[type](item, validationSuccess, important)
                validationSuccess = values.validation !== undefined? values.validation : values.validationSuccess
                value = values.value
            } else {
                values = validationFunctions[type](item, validationSuccess, important)
                value = values.value
            }
            if(validationSuccess && quizValidationTypes[type]) {
                value = encodeURIComponent(value)
                mainHref += `&${variable}=${value}`
            }
            if(validationSuccess && !quizValidationTypes[type]) {
                mainHref += variablesFunctions[type](item, important)
            }
        })

        if(!validationSuccess){
            quizWarning ("quiz")
        }
        if(!validationSuccess || !privacyValidation(currentForm)) {
            return
        }
        let lnk = mainHref + mini_landing_init(askFbCookie, askGaCookie, askYmCookie, askRsCookie, askFbcCookie, askComagicCookie)  + `&SBRandomId=${random_id}`

        if(typeof fbq != "undefined"){
            fbq('track', 'Lead');
        }

        if(!lnk.includes("?")){
            lnk = lnk.replace("&", "?")
        }

        function getParamsObject(url) {
            let params = url.split('?')[1]
            let paramsArray = params.split('&')
            let paramsObject = {}
            paramsArray.forEach(function(param) {
                let keyValue = param.split('=')
                let key = decodeURIComponent(keyValue[0])
                let value = decodeURIComponent(keyValue[1] || '')
                paramsObject[key] = value
            });
            return paramsObject
        }

        function getUrlWithoutParams(url) {
            return url.split('?')[0]
        }

        let urlWithoutParams = getUrlWithoutParams(lnk)
        let dataParamsObj = getParamsObject(lnk)

        if(window.Telegram && window.location.href.includes('#tgWebAppData=')){
            quizBtn.css('pointer-events', 'none')
            textQuizBtn.css('display', 'none')
            loaderQuizBtn.css('display', 'flex')

            $.ajax({
                url: urlWithoutParams.replace('salebot.pro', 'sbsite.pro'),
                type: "POST",
                data: dataParamsObj,
                success: function (res) {
                    quizBtn.css('pointer-events', 'auto')
                    textQuizBtn.css('display', 'inline-block')
                    loaderQuizBtn.css('display', 'none')
                    window.Telegram.WebApp.close()
                },
                error: function (res) {
                    quizBtn.css('pointer-events', 'auto')
                    textQuizBtn.css('display', 'inline-block')
                    loaderQuizBtn.css('display', 'none')
                    window.Telegram.WebApp.close()
                },
                timeout: 5000
            })

        } else {
            $.ajax({
                url: urlWithoutParams.replace('salebot.pro', 'sbsite.pro'),
                type: "POST",
                data: dataParamsObj,
                success: function (data, textStatus, xhr) {
                    if (data.redirect_to) {
                        window.location.href = data.redirect_to
                    } else {
                        console.log("Совпадений не найдено");
                    }
                },
                error: function () {
                    console.log('error')
                },
            })
        }
    }


    function retarded(className) {
        if ($("." + className).val() != '') {
            $("." + className + "_invalid").css("display", 'none')
        }
    }

    function copy_func() {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(".message_to_copy").text()).select();
        document.execCommand("copy");
        $temp.remove();
        $(".copy_popup").slideDown()
        setTimeout(function () {
            $(".copy_popup").slideUp()
        }, 4000)
    }
    function mini_landing_init(askFbCookie, askGaCookie, askYmCookie, askRsCookie, askFbcCookie, askComagicCookie) {
        function get_cookie(cookie_name) {
            if (cookie_name == '') return false
            var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');

            if (results)
                return (unescape(results[2]));
            else
                return false;
        }

        var fbc_cookie = askFbcCookie ? '_fbc' : ''
        var fb_cookie = askFbCookie ? '_fbp' : ''
        var ga_cookie = askGaCookie ? '_ga' : ''
        var ym_cookie = askYmCookie ? '_ym_uid' : ''
        var rs_cookie = askRsCookie ? 'roistat_visit' : ''
        var comagic_cookie = askComagicCookie ? '_comagic_idzLMDd' : ''


        var cookies_names = [fb_cookie, ga_cookie, ym_cookie, rs_cookie, fbc_cookie, comagic_cookie];
        var cookie_string = ''
        if (typeof Comagic != 'undefined') {
            let cm_cookie = Comagic.getSessionId()
            console.log(cm_cookie)
            if (cm_cookie) {
                cookie_string += `&comagic_cookie='${cm_cookie}'`;
            }
        }
        Array.prototype.forEach.call(cookies_names, function (cookie_name) {
            let cookie_val = get_cookie(cookie_name); //id фейсбука для примера
            if (cookie_name == "_comagic_idzLMDd" && cookie_val !== false) {
                cookie_val = cookie_val.split(".")[1]
            }
            if (cookie_val !== false) {
                cookie_string += "&" + cookie_name + "='" + cookie_val + "'";
            }
        });
        $(".ml_quiz_total_answer").off("click")
        $(".ml_quiz_total_answer").on("click", function(){
            console.log('quiz click')
            if ($(this).closest('.ml_quiz_answers_container').find(".ml_quiz_answers").css('display') === "none") {
                $(this).closest('.ml_quiz_answers_container').addClass('select_active').find(".ml_quiz_answers").show()
            } else {
                $(this).closest('.ml_quiz_answers_container').removeClass('select_active').find(".ml_quiz_answers").hide()
            }
        })
        $('.ml_quiz_answers_container .ml_quiz_select_text_div').remove()
        $(".ml_quiz_answer").off("click")
        $(".ml_quiz_answer").on("click", function(){
            $(this).parents(".ml_quiz_answers_container").removeClass('select_active').find(".ml_quiz_total_answer").text($(this).text())
            if ($(this).attr('data-tariff')){
              $(this).parents(".ml_quiz_answers_container").find(".ml_quiz_total_answer").attr('data-tariff', $(this).attr('data-tariff'))
            }
        })
        $(document).mouseup(function (e) {
            $(".ml_quiz_answers").map((index,item) => {
                if(e.target === $(item).parent().find('.ml_quiz_total_answer')[0]) {
                } else {
                    $(item).hide()
                    $(item).parents(".ml_quiz_answers_container").removeClass('select_active')
                }
            })
        })
        return cookie_string
    }
    function temporary() {
        // Временный фикс так как аякс не пашет
        let mask_svg =  document.querySelector('.select-mask-svg')
        let mask = document.querySelector('.select-mask')
        mask.classList.remove('hidden')
        mask_svg.classList.add('hidden')
    }
    function setListeners() {
        $('.link_group a').on('auxclick contextmenu', function(e) {
            e.preventDefault()
            $(this).click()
        })
    }
    function setInputHandlerForNumericForm() {
        $('.quiz_numeric').each(function () {
            let input = $(this).find('.numeric_answer')
            let isFloat = $(this).find('.ml_quiz_isFloat').text() === 'true'
            input.on('input', function () {
                let value = $(this).val()
                if (!isFloat) {
                    $(this).val(parseInt(value.replace(/[^\d]/g, '')) || '0')
                }
            })
        });
    }
    async function GetIP () {
        /*
        chatter.salebot.pro - прод
        chatter.zmservice.ru  - тестовый
         */
        const loc = $('.sb_block').attr('data-loc')
        if(loc) {
            let check = 0
            const interval = setInterval(function() {
                check+=1
                setPhone(loc.toLowerCase())
                console.log(check)
                if(check > 3) {
                    clearInterval(interval)
                }
            }, 1000)
        } else {
            let url = window.location.hostname === "salebot.zmservice.ru" ? "chatter.zmservice.ru" : "chatter.salebot.pro"
            $.ajax({
                url: `https://${url}/api/minilanding/ip_to_country_code`,
                type: "GET",
                success: function (res) {
                    let check = 0
                    const interval = setInterval(function() {
                        check+=1
                        setPhone(JSON.parse(res)['answer']['country'].toLowerCase())
                        if(check > 3) {
                            clearInterval(interval)
                        }
                    }, 1000)
                },
                error: function (res) {
                    console.log('error')
                    console.log(res)
                    $(function (){
                        setPhone("ru")
                    })
                },
                timeout: 1000
            })
        }
    }
    function setPhone(countryCode) {
        $(Object.keys(countries)).each(function (index, key) {
            if (countries[key][1] === countryCode) {
                let count = 0;
                let items = $('.select-mask__item .select_mask_description')
                $(items).each(function (index, item) {
                    let auto_ip = $(item).closest('.wh-form-field').find('.phone_auto_ip').text() === "true"
                    count ++
                    if (auto_ip) {
                        let text = `${countries[key][0]}+${countries[key][2]}`
                        let item_text = $(item).text().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
                        if (item_text === text) {
                            $(item).closest('.select-mask__item').trigger('click')
                            $(item).closest('.input-phone-wrapper').find('.select-mask-svg').hide()
                            $(item).closest('.input-phone-wrapper').find('.select-mask').removeClass('hidden')
                            count = 0
                        }
                    }
                    if(count === items.length + 1) {
                        $(item).closest('.input-phone-wrapper').find('.select-mask-svg').hide()
                        $(item).closest('.input-phone-wrapper').find('.select-mask').removeClass('hidden')
                    }
                })
            }
        })
    }

    function setConditionHandler(quizzesWithAction) {
        quizzesWithAction.each(function () {
            const json = JSON.parse($(this).find('.ml_quiz_json').text())
            const conditionAction = json.conditionAction
            const conditionAnswers = JSON.parse(json.conditionAnswer).map(item => item.id)
            const conditionCondition = json.conditionCondition
            let check = true
            conditionAnswers.forEach(item => {
                const quiz = $(`.ml_quiz[data-id=${item}]`)
                const type = $(quiz).find(".ml_quiz_type").text()
                const {validation} = validationFunctions[type](quiz, true)
                if (conditionCondition === 'answered') {
                    if (!validation) {
                        check = false
                    }
                } else {
                    if (validation) {
                        check = false
                    }
                }
                $(quiz).attr('data-answered', check)
            })
            if (conditionAction.length > 0 && conditionAnswers.length > 0 && conditionCondition.length > 0 && conditionAnswers !== '[]') {
                if (conditionAction === 'show') {
                    $(this).toggle(check)
                } else {
                    $(this).toggle(!check)
                }
            }
        })
    }

    function conditionQuiz() {
        let quizzes = $('.ml_quiz')
        let quizzesWithAction = quizzes.filter((index, item) => $(item).attr('data-action') === 'show' || $(item).attr('data-action') === 'hide')
        if (quizzesWithAction.length < 1) return
        quizzesWithAction.attr('data-answered', 'false')
        quizzes.each(function () {
            const currentQuiz = $(this)
            const json = JSON.parse(currentQuiz.find('.ml_quiz_json').text())
            if (json.conditionAction.length > 0 && json.conditionCondition.length > 0 && json.conditionAnswer.length > 0 && json.conditionAnswer !== '[]') {
                const act = json.conditionAction === 'show'
                const cond = json.conditionCondition === 'answered'
                if (act ^ cond) {
                    currentQuiz.show()
                } else {
                    currentQuiz.hide()
                }
            }
            currentQuiz.on('input click', function () {
                setConditionHandler(quizzesWithAction)
            })
        })
    }

    var defaultVariables = {
        phone: 'phone',
        email: 'email',
        name: 'name'
    }

    function privacyValidation(form) {
        if (form.length > 1) form = $(document.activeElement).closest(form)
        let privacyInput = form.find('.privacy_input')
        let personalPrivacyInput = form.find('.personal_privacy_input')
        if (personalPrivacyInput.length > 0 && !personalPrivacyInput.prop('checked')) {
            quizWarning("personal-privacy")
            return false
        }
        if (privacyInput.length > 0 && !privacyInput.prop('checked')) {
            quizWarning("privacy")
            return false
        }
        return true
    }

    function customFormValidation(form) {
      let phoneValid = true
      let emailValid = true
      const phoneInput = $(form).find('.phone_input')
      const emailInput = $(form).find('.email_input')
      let phoneValue = ''
      let email = ''

      if (phoneInput.length) {
        phoneValue = ($(form).find('.select_mask_code').text() + phoneInput.val()).replace(/[+|| ]/g, "")
        const phoneMask = $(form).find('.select_mask_code').text().split("+")[1]
        let phone_length = countries[phoneMask][7]
        const additional = phoneMask === "372" ? -1 : 1
        if(phoneInput.val().trim().length > 0) {
          if (phoneValue.match(/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/g) === null || (phoneValue.length !== phone_length && phoneValue.length !== phone_length + additional)) {
            phoneValid = false
            $(form).find(".invalid-feedback_phone_validation").css("display", "block")
          }
        }
      }

      if (emailInput.length) {
        email = emailInput.val();
        if(email.trim().length > 0) {
          if (email.match(/[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-z0-9](?:[A-z0-9-]*[A-z0-9])?\.)+[A-z0-9](?:[A-z0-9-]*[A-z0-9])?/g) === null) {
            emailValid = false
            $(form).find(".invalid-feedback_email_validation").css("display", "block")
          }
        }
      }

      return {
        valid: emailValid && phoneValid,
        phone: phoneValue,
        email: email
      }
    }
    function surveyForm(){
        $('.create_quizz_btn').off('click').on('click', function (){
            const link = `${domain_with_protocol}${$(this).attr("data-link")}`
            const params = JSON.parse($(this).attr("data-params"))
            let questions = []
            let orderNumbers = []
            let types = []
            let important = []
            let variables = []
            let answers = []
            let checkImportant = []
            let quizCalendar = []
            let json = {}
            let AnswersJson = {}
            let select_section_count = 0
            const dataInfo = $(this).attr("data-info").split(' ')
            $(this).closest('.salebot-form__container').find('.ml_quiz').map((index, item) => {
                if ($(item).hasClass('quiz_name') || $(item).hasClass('quiz_email') || $(item).hasClass('quiz_phone')){
                    questions.push($(item).find('.salebot-label').text())
                } else {
                    questions.push($(item).find('.ml_quiz_question').text())
                }
                let elementClassName = $(item).attr('class').split(" ")[1]
                switch (elementClassName){
                    case "quiz_checkbox":
                        AnswersJson = {}
                        $(item).find('.salebot-checkbox').map((num, elem) => {
                            AnswersJson[$(elem).find('span').text()] = '0'
                            if ($(elem).find('input').prop("checked")) {
                                AnswersJson[$(elem).find('span').text()] = '1'
                            }
                        })
                        if ($(item).find('.ml_quiz_important').text() === "true") {
                            let checkStatusArr = []
                            $(item).find('.salebot-checkbox').map((num, elem) => {
                                if ($(elem).find('input').prop("checked")) {
                                    checkStatusArr.push(true)
                                } else {
                                    checkStatusArr.push(false)
                                }
                            })
                            if (checkStatusArr.includes(true)){
                                checkImportant.push(true)
                            } else {
                                checkImportant.push(false)
                            }
                        }
                        answers.push(AnswersJson)
                        break
                    case "quiz_radio":
                        AnswersJson = {}
                        $(item).find('.salebot-radio').map((num, elem) => {
                            const input = $(elem).find('input')
                            AnswersJson[$(elem).find('span').text()] = `${+input.is(':checked')}`
                            if(input.attr('data-fa-type') && input.is(':checked')) {
                                const val = $(elem).find('textarea').val().trim()
                                if(val.length > 0) {
                                    AnswersJson[val] = "1"
                                    delete AnswersJson[$(elem).find('span').text()]
                                } else {
                                    AnswersJson[$(elem).find('span').text()] = "0"
                                }
                            }
                        })
                        answers.push(AnswersJson)
                        if ($(item).find('.ml_quiz_important').text() === "true") {
                            let chackStatusArr = []
                            $(item).find('.salebot-radio').map((num, elem) => {
                                const input = $(elem).find('input')
                                if(input.attr('data-fa-type')) {
                                    chackStatusArr.push($(elem).find('textarea').val().trim().length > 0)
                                } else {
                                    chackStatusArr.push(input.is(":checked"))
                                }
                            })
                            if (chackStatusArr.includes(true)){
                                checkImportant.push(true)
                            } else {
                                checkImportant.push(false)
                            }
                        }
                        break
                    case "quiz_email":
                        answers.push($(item).find('.email_input').val())
                        if ($(item).find('.ml_quiz_important').text() === "true") {
                            if ($(item).find('.email_input').val() === "") {
                                checkImportant.push(false)
                            } else {
                                checkImportant.push(true)
                            }
                        }
                        break
                    case "quiz_phone":
                        let phoneCode = $(item).find('.select_mask_code').text()
                        let phoneNum = $(item).find('.phone_input').val()
                        answers.push(phoneCode + phoneNum)
                        if ($(item).find('.ml_quiz_important').text() === "true") {
                            if ($(item).find('.phone_input').val() === "") {
                                checkImportant.push(false)
                            } else {
                                checkImportant.push(true)
                            }
                        }
                        break
                    case "quiz_select":
                        AnswersJson = {}
                        $('.quiz_select').map((index, item) => {
                            if (index === select_section_count)
                                $(item).find('.ml_quiz_answer').map((i, element) => {
                                    AnswersJson[$(element).text()] = '0'
                                    $(element).closest('.salebot-form__container').find('.ml_quiz_total_answer').map((ind, it) => {
                                        if ($(element).text() === $(it).text()) {
                                            AnswersJson[$(it).text()] = '1'
                                        }
                                    })
                                })
                        })
                        answers.push(AnswersJson)
                        if ($(item).find('.ml_quiz_important').text() === "true") {
                            if ($(item).find('.ml_quiz_total_answer').text() === "") {
                                checkImportant.push(false)
                            } else {
                                checkImportant.push(true)
                            }
                        }
                        select_section_count++
                        break
                    case "quiz_text":
                        answers.push($(item).find('.ml_quiz_textarea').val())
                        if ($(item).find('.ml_quiz_important').text() === "true") {
                            if ($(item).find('.ml_quiz_textarea').val() === "") {
                                checkImportant.push(false)
                            } else {
                                checkImportant.push(true)
                            }
                        }
                        break
                    case "quiz_numeric":
                        answers.push($(item).find('.numeric_answer').val())
                        if ($(item).find('.ml_quiz_important').text() === "true") {
                            if ($(item).find('.numeric_answer').val() === "") {
                                checkImportant.push(false)
                            } else {
                                checkImportant.push(true)
                            }
                        }
                        break
                    case "quiz_name":
                        answers.push($(item).find('.name_input').val())
                        if ($(item).find('.ml_quiz_important').text() === "true") {
                            if ($(item).find('.name_input').val() === "") {
                                checkImportant.push(false)
                            } else {
                                checkImportant.push(true)
                            }
                        }
                        break
                    case "quiz_quiz_calendar":
                        answers.push($(item).find('.quiz_create_calendar').val())
                        if ($(item).find('.ml_quiz_important').text() === "true") {
                            if ($(item).find('.quiz_create_calendar').val() === "") {
                                checkImportant.push(false)
                            } else {
                                checkImportant.push(true)
                            }
                        }
                        break
                }
                orderNumbers.push(index)
                types.push($(item).find('.ml_quiz_type').text())
                important.push($(item).find('.ml_quiz_important').text())
                variables.push($(item).find('.ml_quiz_variable').text())
            })
            // console.log(checkImportant)

            for (let i = 0; i < questions.length; i++){
                let resObj = {
                    "question": questions[i],
                    "answer": answers[i],
                    "type": types[i],
                    "important": important[i],
                    "variable": variables[i],
                    "project_id": dataInfo[0],
                    "mini_landing_page_id": dataInfo[1],
                    "mini_landing_page_section_id": dataInfo[2]
                }
                json[orderNumbers[i]] = resObj
            }

            let formData = new FormData();
            formData.append("data", JSON.stringify(json))
            if ($('.ml_proxy')) formData.append("proxy_id", $('.ml_proxy').eq(0).text())
            let bodyQuizz = $(this).closest('.body_quizz')
            if (bodyQuizz.find(".registration_on_course").text() === "true"){
              formData.append("tariff_id", bodyQuizz.find('.ml_quiz_total_answer[data-tariff]').attr('data-tariff'))
            }
            let form = $(this).closest('section').find('.body_quizz')

            if (checkImportant.includes(false)){
                $(this).siblings('.incorrect_form_warning').removeClass('hidden')
                let requiredInputs = form.find('.ml-quiz-required--true').closest('.ml_quiz_answers_container').find('input, textarea, .ml_quiz_total_answer')
                let requiredCheckbox = requiredInputs.filter('[type="checkbox"], [type="radio"]')
                requiredInputs.each(function (){
                    if (!$(this).attr('data-style')) {
                        $(this).attr('data-style', $(this).attr('style'))
                    }
                })

                requiredInputs.filter(function () { return !this.value }).css({'border-color': '#e56e86'})
                requiredCheckbox.not(requiredCheckbox.filter(':checked').closest('.ml_quiz_answers_container').find('input')).css({'box-shadow': '0px 0px 0px 1px #e56e86'})
                setTimeout(()=>{
                    $(this).siblings('.incorrect_form_warning').addClass('hidden')
                    $('.create_quizz_btn').css('pointer-events', 'auto')
                    requiredInputs.each(function (){
                        $(this).attr('style', $(this).attr('data-style'))
                    })
                },2000)
            }else if(!customFormValidation(form).valid || !privacyValidation(form)){
              $('.create_quizz_btn > .text').show()
              $('.create_quizz_btn > .button_spinner').addClass('hidden')
              $('.create_quizz_btn').css('pointer-events', 'auto')
            } else {
                $(this).siblings('.incorrect_form_warning').addClass('hidden')
                $.ajax({
                    url: link,
                    type: "POST",
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (res) {
                        console.log("success")
                        if (params['link']) {
                            let getParams = []
                            let locationHref = window.location.href
                            let locationParams = ''
                            let redirectLink = params['link']

                            Object.keys(json).forEach(function (key) {
                                let item = json[key];

                                if (typeof item['answer'] === 'object') {
                                    Object.keys(item['answer']).forEach(subKey => {
                                        if (item['answer'][subKey] === '1') {
                                            getParams.push(`${encodeURIComponent(defaultVariables[item['type']] || item['variable'])}=${encodeURIComponent(subKey)}`)
                                        }
                                    })
                                } else if (item['answer'].length > 0) {
                                    getParams.push(`${encodeURIComponent(defaultVariables[json[key]['type']] || json[key]['variable'])}=${encodeURIComponent(json[key]['answer'])}`)
                                }
                            })

                            let fullLinkParams = getParams.join('&')

                            if (locationHref.includes('?')) {
                                let result = locationHref.split('?')[1]
                                if (result !== '') {
                                    locationParams = new URLSearchParams(result).toString()
                                    fullLinkParams = locationParams + '&' + getParams.join('&')
                                }
                            }

                            if (params['getParamsCheck'] && redirectLink.includes('?')) {
                                let result = params['link'].split('?')[1]
                                if (result !== '') {
                                    redirectLink += '&' + fullLinkParams
                                } else {
                                    redirectLink += fullLinkParams
                                }
                            } else if (params['getParamsCheck']) {
                                redirectLink += '?' + fullLinkParams
                            }

                            window.open(redirectLink, params['targetLink'])
                        } else {
                            alert(`${params['tooltipText']}` || "Форма успешно отправлена")
                        }
                      if (res && res.redirect_url){
                        location.href = res.redirect_url
                      }
                    },
                    error: function () {
                        console.log("error")
                        alert("Произошла ошибка")
                    }
                })
            }


        })
    }
    function initializeSwiperQuiz(parent) {
        let swiper = new Swiper(".swiper-page-quiz", {
            slidesPerView: 1,
            spaceBetween: 16,
            simulateTouch: false,
            // autoHeight: true,
            loop: false,
        })

        const body = $(parent).find('.body_quizz')
        const separator = $(body).find('.quiz_separator, .quiz_progress')
        const header = $(parent).find('.header_quizz')

        const initSecondSwiper = () => {
            const viewResults = $(body).find('.result_container-slide:not(:hidden)').length
            console.log('initSecondSwiper')
            let swiper2 = new Swiper(".result_container-swiper", {
                slidesPerView: viewResults >= 3 ? 3 : 2,
                spaceBetween: 8,
                // simulateTouch: true,
                loop: false,
                navigation: {
                    nextEl: ".result_container-swiper .swiper-button-next",
                    prevEl: ".result_container-swiper .swiper-button-prev",
                },
                slideActiveClass: 'result_container-slide-active',
                slideClass: 'result_container-slide',
                slideNextClass: 'result_container-slide-next',
                slidePrevClass: 'result_container-slide-prev',
                breakpoints: {
                    800: {
                        slidesPerView: 1,
                    }
                },
            })
        }

        let pagesQuiz = $(body).find('.swiper-slide')
        let warning = $(body).find('.incorrect_form_warning-pages')
        const haveStartPage = $(body).find('.swiper-page-quiz .swiper-wrapper').attr('data-haveStartPage') === 'true'

        $(body).find('.next_btn-start').on('click', function () {
            swiper.slideNext()
            $(body).find('.link_group').show()
            header.show()
            separator.show()
            progressBar()
        })

        $(body).find('.previous_btn').on('click', function () {
            if (swiper.activeIndex === 0 || (swiper.activeIndex === 1 && haveStartPage)) {

            } else {
                swiper.slidePrev()
                btnHandler()
                progressBar()
            }
        })

        $(body).find('.create_quizz_btn-page').off('.nextSlide').on('click.nextSlide', function () {
            swiper.slideNext()
            btnHandler()
            executeCondition()
            initSecondSwiper()
            header.hide()
            separator.hide()
        })

        $(body).find('.next_btn').on('click', function () {
            let form = $(this).closest('.body_quizz')
            if (customFormValidation(form).valid && !checkImportantPages().includes(false)) {
                swiper.slideNext()
                btnHandler()
            }
            progressBar()
        })

        function progressBar() {
            const progressLabel = $(body).find('.progress_group__label span')
            const progress = $(body).find('.quiz_progress__bar')
            let countPages = swiper.slides.length - 1
            let current = swiper.activeIndex
            if (haveStartPage) {
                countPages -= 1
                current -= 1
            }
            const percent = (current < 0 ? 0 : current / countPages) * 100
            $(progress).css('width', `${percent}%`)
            progressLabel.text(Math.round(percent) + '%')
        }

        function executeCondition() {
            const results = $(body).find('.result_container-slide')
            results.each(function () {
                const json = JSON.parse($(this).attr('data-item'))
                const operator = json['operator']
                const conditions = json['conditions']
                let bool = []
                conditions.forEach((item) => {
                    const question = $(`.ml_quiz[data-id=${item.questionId}]`)
                    switch (item.type) {
                        case 'text':
                            if (item.answersType === 'include') {
                                bool.push($(question).find('.ml_quiz_textarea').val().includes(item.answers))
                            } else {
                                bool.push(!$(question).find('.ml_quiz_textarea').val().includes(item.answers))
                            }
                            break
                        case 'select':
                            bool.push($(question).find('.ml_quiz_total_answer').text() === item.answers)
                            break
                        case 'checkbox':
                            let arr = []
                            $(question).find('.salebot-checkbox').each(function () {
                                if ($(this).find('input').is(':checked')) {
                                    arr.push($(this).find('span').text().replace(/(?:<).*?(?:>)/gm, ''))
                                }
                            })
                            bool.push(arr.toString() === item.answers.toString())
                            break
                        case 'radio':
                            let ans = ''
                            $(question).find('.salebot-radio').each(function () {
                                if ($(this).find('input').is(':checked')) {
                                    ans = $(this).find('.span_answer').text()
                                }
                            })
                            bool.push(ans === item.answers)
                            break
                        default:
                            break
                    }
                })
                console.log('bool', bool)
                if (operator === 'or') {
                    if (bool.includes(true)) {
                        $(this).show()
                    } else {
                        $(this).hide()
                    }
                } else {
                    const countTrue = bool.filter(item => item).length
                    if (countTrue === bool.length) {
                        $(this).show()
                    } else {
                        $(this).hide()
                    }
                }
            })
        }

        function checkImportantPages() {
            let checks = []
            let quizesInPage = $(pagesQuiz[swiper.activeIndex]).find('.ml_quiz')
            quizesInPage.each(function () {
                let quizType = $(this).attr('class').split(" ")[1]
                switch (quizType) {
                    case "quiz_checkbox":
                        if ($(this).find('.ml_quiz_important').text() === "true") {
                            let checkStatusArr = []
                            $(this).find('.salebot-checkbox').map((num, elem) => {
                                if ($(elem).find('input').prop("checked")) {
                                    checkStatusArr.push(true)
                                } else {
                                    checkStatusArr.push(false)
                                }
                            })
                            let val = checkStatusArr.includes(true)
                            checks.push(val)
                            if (!val) {
                                showWarning($(this).find('input'))
                            }
                        }
                        break
                    case "quiz_radio":
                        if ($(this).find('.ml_quiz_important').text() === "true") {
                            let chackStatusArr = []
                            $(this).find('.salebot-radio').map((num, elem) => {
                                const input = $(elem).find('input')
                                if (input.attr('data-fa-type')) {
                                    chackStatusArr.push($(elem).find('textarea').val().trim().length > 0)
                                } else {
                                    chackStatusArr.push(input.is(":checked"))
                                }
                            })
                            let val = chackStatusArr.includes(true)
                            checks.push(val)
                            if (!val) {
                                showWarning($(this).find('input'))
                            }
                        }
                        break
                    case "quiz_email":
                        if ($(this).find('.ml_quiz_important').text() === "true") {
                            let val = $(this).find('.email_input').val() !== ''
                            checks.push(val)
                            if (!val) {
                                showWarning($(this).find('.email_input'))
                            }
                        }
                        break
                    case "quiz_phone":
                        if ($(this).find('.ml_quiz_important').text() === "true") {
                            let val = $(this).find('.phone_input').val() !== ''
                            checks.push(val)
                            if (!val) {
                                showWarning($(this).find('.phone_input'))
                            }
                        }
                        break
                    case "quiz_select":
                        if ($(this).find('.ml_quiz_important').text() === "true") {
                            let val = $(this).find('.ml_quiz_total_answer').text() === ''
                            checks.push(val)
                            if (!val) {
                                showWarning($(this).find('.ml_quiz_total_answer'))
                            }
                        }
                        break
                    case "quiz_text":
                        if ($(this).find('.ml_quiz_important').text() === "true") {
                            let val = $(this).find('.ml_quiz_textarea').val() !== ''
                            checks.push(val)
                            if (!val) {
                                showWarning($(this).find('.ml_quiz_textarea'))
                            }
                        }
                        break
                    case "quiz_numeric":
                        if ($(this).find('.ml_quiz_important').text() === "true") {
                            let val = $(this).find('.numeric_answer').val() !== ''
                            checks.push(val)
                            if (!val) {
                                showWarning($(this).find('.numeric_answer'))
                            }
                        }
                        break
                    case "quiz_name":
                        if ($(this).find('.ml_quiz_important').text() === "true") {
                            let val = $(this).find('.name_input').val() !== ''
                            checks.push(val)
                            if (!val) {
                                showWarning($(this).find('.name_input'))
                            }
                        }
                        break
                    case "quiz_quiz_calendar":
                        if ($(this).find('.ml_quiz_important').text() === "true") {
                            let val = $(this).find('.quiz_create_calendar').val() !== ''
                            checks.push(val)
                            if (!val) {
                                showWarning($(this).find('.quiz_create_calendar'))
                            }
                        }
                        break
                }
            })
            return checks
        }

        function showWarning(quiz) {
            $(quiz).attr('data-style', $(quiz).attr('style'))
            if ($(quiz).hasClass('custom_border_quiz_checkbox') || $(quiz).hasClass('custom_border_quiz_radio')) {
                $(quiz).css('box-shadow', '0px 0px 0px 1px #e56e86')
            } else {
                $(quiz).css('border-color', '#e56e86')
            }
            $(warning).removeClass('hidden')
            setTimeout(function () {
                $(quiz).attr('style', $(quiz).attr('data-style'))
                $(warning).addClass('hidden')
            }, 2000)
        }

        function btnHandler() {
            $(body).find('.next_btn').show()
            $(body).find('.create_quizz_btn-page').hide()
            header.show()
            separator.show()
            btnsViews()
        }

        //init
        btnsViews()
        function btnsViews() {
            if (!swiper?.slides) return
            const linkGroup = $(body).find('.link_group')
            const nextBtn = $(body).find('.next_btn')
            const prevBtn = $(body).find('.previous_btn')
            const createQuizBtn = $(body).find('.create_quizz_btn-page')

            if (swiper.activeIndex === 0 || (swiper.activeIndex === 1 && haveStartPage)) {
                $(prevBtn).attr('disable', 'true')
            } else {
                $(prevBtn).attr('disable', 'false')
            }

            if (swiper.activeIndex === 0) {
                createQuizBtn.hide()
                if (haveStartPage) {
                    linkGroup.hide()
                    header.hide()
                    separator.hide()
                }
            } else if (swiper.activeIndex === swiper.slides.length - 2) {
                nextBtn.hide()
                createQuizBtn.show()
            } else if (swiper.activeIndex === swiper.slides.length - 1) {
                linkGroup.hide()
            } else {
                linkGroup.show()
                createQuizBtn.hide()
            }
        }
    }
    function checkEnter(event) {
        if (event.key === "Enter") {
            event.preventDefault()
        }
    }
    var counter_arr = []
    var SalebotTildaIntegration = (function () {
        var blocks_count = 0

        return {
            init: function (options) {
                if (document.getElementsByClassName("salebot_tilda_block")[blocks_count]) {
                    let block = document.getElementsByClassName("salebot_tilda_block")[blocks_count]
                    let ident = Math.random().toString(36).slice(2)
                    counter_arr.push(ident)
                    block.classList.add(ident)
                    initTildaBlock(options, block, ident)
                    blocks_count += 1
                } else if (document.getElementById("salebot_tilda_block")) {
                    let block = document.getElementById("salebot_tilda_block")
                    let ident = Math.random().toString(36).slice(2)
                    block.classList.add(ident)
                    initTildaBlock(options, block, ident)
                }
            }
        }

        function initTildaBlock(options, block, identifier) {
            var xhr = new XMLHttpRequest();
            var link = document.createElement("link")
            var link1 = document.createElement("link")
            var script2 = document.createElement("script")
            var script3 = document.createElement("script")
            var script4 = document.createElement("script")
            var script5 = document.createElement("script")
            var script6 = document.createElement("script")
            var initer = function (ident) {
                var prev_pat_num = 1
                var html_to_append = ''

                function get_flag(country_code) {
                    letter_code.forEach(function (item) {
                        let rexExp = new RegExp(item[0], 'g')
                        country_code = country_code.replace(rexExp, item[1])
                    })
                    return country_code
                }

                function resize_input() {
                }

                function get_country_arr(str) {
                    let item = countries[str]
                    if (item == undefined) {
                        if (str.length <= 1) {
                            return undefined
                        }
                        return get_country_arr(str.slice(0, str.length - 1))
                    } else {
                        return item
                    }
                }

                function phone_enter(flag, identifier, placeholder) {
                    $(ident + ' .select_mask_country').html(flag)
                    $(ident + ' .select_mask_code').text(identifier)
                    $(ident + ' .phone_input').attr("placeholder", placeholder)
                    resize_input()
                }

                function not_valid(t) {
                    let select_mask = $(ident + ' .select-mask')
                    let phone_input = $(ident + ' .phone_input')
                    t.val(t.val().replace(/[^0-9 || +]/g, ''))
                    select_mask.css('transition', '0.1s');
                    // select_mask.css('background', '#fbcbcb');
                    phone_input.css('transition', '0.1s');
                    // phone_input.css('background', '#fbcbcb');
                    // setTimeout(function () {
                    //     select_mask.css('background', 'white')
                    //     phone_input.css('background', 'white')
                    // }, 100)
                }

                $(".copy_button").click(copy_func)

                function init_phone_input() {
                    $(ident + '  .select_mask_country').html(get_flag($(ident + ' .phone_select_country').text()))
                    let trigger = $(ident + '  .phone_select_type').text()
                    console.log(ident + '  .phone_select_type')
                    let cc = Object.values(countries).filter(function (i) {
                        if (trigger == 'popular') {
                            return i[5]
                        } else {
                            return trigger == 'simple';
                        }
                    })
                    if (cc.length == 0) {
                        cc = []
                        JSON.parse($(ident + '  .phone_select_type').text()).forEach(function (i) {
                            cc.push(countries[i])
                        })
                    }
                    cc.sort(function (a, b) {
                        if (a < b) {
                            return -1;
                        } else if (a > b) {
                            return 1;
                        } else {
                            return 0;
                        }
                    }).forEach(i => {
                        html_to_append += '<div class="select-mask__item"><div class="select_mask_description">' + get_flag(i[1]) + i[0] + ('+' + i[2]) + '</div><div class="hidden country_flag">' + get_flag(i[1]) + '</div><div class="hidden ident">' + '+' + i[2] + '</div><div class="hidden placeholder">' + (i[3] != undefined ? i[3] : "09812345678") + '</div></div>'
                    })
                    $(ident + ' .select-mask__select').append(html_to_append)
                    $(ident + ' .select-mask').Emoji()
                    $(ident + ' .phone_input').on('input', function (e) {
                        if ($(ident + ' .phone_input').val().match(/[^0-9 || +]/g) != null) {
                            not_valid($(ident + ' .phone_input'))
                        }
                        let item = countries[$('.select_mask_code').text().split("+")[1]] || []
                        let total_count = 0
                        if(item[2] && $('.phone_input').val().startsWith("+7")){
                            $('.phone_input').val($('.phone_input').val())
                        }
                        if ($(ident + ' .phone_input').val().split('+').length > 1) {
                            let item = get_country_arr($(ident + ' .phone_input').val().replace(/ /g, '').split('+')[1])
                            if (item != undefined) {
                                let placeholder = item[3] != undefined ? item[3] : '09812345678'
                                $(ident + '  .phone_input').val($(ident + ' .phone_input').val().split('+' + item[2])[1])
                                phone_enter(emojiParser(get_flag(item[1]), 'https://salebot.pro/images/emoji_picker/apple40/', true, 'emoji', 'png'), '+' + item[2], placeholder)
                            }
                        }
                        if (item[6] != undefined &&
                            $(ident + ' .phone_input').val().length > 1 &&
                            $(ident + ' .phone_input').val().startsWith(item[6])) {
                            $(ident + ' .phone_input').val($(ident + ' .phone_input').val().substr(1))
                        }
                        let l = $(ident + ' .phone_input').val().replace(/ /g, '').length
                        if (item[4] != undefined) {
                            item[4].forEach(function (i) {
                                total_count += i
                            })
                            if (l <= total_count) {
                                let pat = item[4]
                                let pat_num;
                                if (l < pat[0]) {
                                    pat_num = 1
                                } else if (l < (pat[0] + pat[1])) {
                                    pat_num = 2
                                } else if (l < (pat[0] + pat[1] + pat[2])) {
                                    pat_num = 3
                                } else if (l < (pat[0] + pat[1] + pat[2] + pat[3])) {
                                    pat_num = 4
                                } else if (l < (pat[0] + pat[1] + pat[2] + pat[3] + pat[4])) {
                                    pat_num = 5
                                }
                                if (prev_pat_num < pat_num) {
                                    $(ident + '  .phone_input').val($(ident + ' .phone_input').val() + ' ')
                                }
                                prev_pat_num = pat_num
                            } else {
                                total_count += $(ident + ' .phone_input').val().split(' ').length - 1
                                $(ident + '  .phone_input').val($(ident + ' .phone_input').val().slice(0, total_count))
                                not_valid($(ident + ' .phone_input'))
                            }
                        } else {
                            total_count = 13 - $(ident + '  .select_mask_code').text().length
                            // if(item?.length > 0) {
                            //     total_count = item[item.length - 1] - $(ident + '  .select_mask_code').text().length - 1
                            // }
                            if (l > total_count) {
                                total_count += $(ident + ' .phone_input').val().split(' ').length - 1
                                $(ident + '  .phone_input').val($(ident + ' .phone_input').val().slice(0, total_count))
                                not_valid($(ident + ' .phone_input'))
                            }
                        }
                    })
                    $(ident + '  .select-mask__trigger').click(function () {
                        $(ident + ' .select-mask__select').show()
                    })
                    $(ident + '  .select-mask__item').click(function () {
                        let flag = $(this).find('.country_flag').html()
                        let ident = $(this).find('.ident').text()
                        let placeholder = $(this).find('.placeholder').text()
                        phone_enter(flag, ident, placeholder)
                    })
                    $(document).mouseup(function (e) {
                        $(ident + ' .select-mask__select').hide()
                    })
                    resize_input()
                }
                function phoneEdit() {
                    let el = $(this)
                    setTimeout(function(){
                        let countryCode = $('.input-phone-wrapper .select_mask_code').text().replaceAll('+', '')
                        let arr = countries[countryCode]
                        let mask = arr[4]
                        let beauty_val = ""
                        let current_val = el.val().replace(/ /g, "")
                        if(mask){
                            let usedCount = 0
                            mask.forEach(function(count, index, arr){
                                if(usedCount < current_val.length){
                                    beauty_val += (arr.length > index-1 ? " " : "") + current_val.slice(usedCount, usedCount + count)
                                    usedCount += count
                                }
                            })
                        }
                        beauty_val ? el.val(beauty_val) : null
                    }, 10)
                }

                if ($(ident + ' .phone_input_container').length > 0) {
                    init_phone_input()
                    $('.input-phone-wrapper input').on('paste', phoneEdit);
                }
            }
            link.href = `${domain_with_protocol}/css/salebot_tilda.css`
            link.rel = 'stylesheet'
            link.type = 'text/css'
            link.media = 'all'
            link1.href = `https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css`
            link1.rel = 'stylesheet'
            link1.type = 'text/css'
            link1.media = 'all'
            script2.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
            script2.type = "text/javascript"
            script2.async = "async"
            script3.src = `${domain_with_protocol}/js/emojis.js`
            script3.type = "text/javascript"
            script3.async = "async"
            script4.src = `https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js`
            script4.type = "text/javascript"
            script4.async = "async"
            script5.src = `${domain_with_protocol}/js/calendarCreator.js`
            script5.type = "text/javascript"
            script5.async = "async"
            script6.src = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js"
            script6.type = "text/javascript"
            script5.async = "async"
            xhr.open('GET', `${domain_with_protocol}/projects/${options.project_id}/tilda_view/${options.guid}${location.search}`, true);
            if (typeof $ == "undefined" || typeof jQuery == "undefined") {
                document.getElementsByTagName("head")[0].append(script2)
            } else {
                document.getElementsByTagName("head")[0].append(script3)
            }
            script2.onload = function () {
                document.getElementsByTagName("head")[0].append(script3)
            }
            script3.onload = function () {
                document.getElementsByTagName("head")[0].append(script4)
            }
            script4.onload = function () {
                document.getElementsByTagName("head")[0].append(script5)
            }
            script5.onload = function () {
                document.getElementsByTagName("head")[0].append(script6)
            }
            script6.onload = function () {
                document.getElementsByTagName("head")[0].append(link1)
            }
            link1.onload = function () {
                document.getElementsByTagName("head")[0].append(link)
            }
            link.onload = function () {
                xhr.send();
            }
            xhr.onload = function (e) {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        if (xhr.responseText.startsWith('{"description":')) {
                            let response = JSON.parse(xhr.responseText)
                            return console.log(response.description)
                        }
                        block.innerHTML = xhr.responseText
                        initer("." + identifier)
                        try{
                            var save_fbp = document.getElementById("save_fbp").innerText == "true";
                            var save_ga = document.getElementById("save_ga").innerText == "true";
                            var save_ym_uid = document.getElementById("save_ym_uid").innerText == "true";
                            var save_roistat_visit = document.getElementById("save_roistat_visit").innerText == "true";
                            var save_comagic = document.getElementById("save_comagic").innerText == "true";
                            // pixels
                            var fb_pixel = document.getElementById("fb_pixel") ? document.getElementById("fb_pixel").innerText : false;
                            var vk_pixel = document.getElementById("vk_pixel") ? document.getElementById("vk_pixel").innerText : false;
                            var comagic_id = document.getElementById("comagic_id") ? document.getElementById("comagic_id").innerText : false;

                            if (comagic_id) {
                                $('head').append(`
                                <script type="text/javascript">
                                    var __cs = __cs || [];
                                    __cs.push(["setCsAccount", "${comagic_id}"]);
                                </script>
                                <script type="text/javascript" async src="https://app.comagic.ru/static/cs.min.js"></script>
                            `)
                            }
                            if (fb_pixel) {
                                !function (f, b, e, v, n, t, s) {
                                    if (f.fbq) return;
                                    n = f.fbq = function () {
                                        n.callMethod ?
                                            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                                    };
                                    if (!f._fbq) f._fbq = n;
                                    n.push = n;
                                    n.loaded = !0;
                                    n.version = '2.0';
                                    n.queue = [];
                                    t = b.createElement(e);
                                    t.async = !0;
                                    t.src = v;
                                    s = b.getElementsByTagName(e)[0];
                                    s.parentNode.insertBefore(t, s)
                                }(window, document, 'script',
                                    'https://connect.facebook.net/en_US/fbevents.js');
                                fbq('init', fb_pixel);
                                fbq('track', 'PageView');
                                $(".sb_btn, .btn_new, modern_btn").click(function () {
                                    fbq('track', 'Lead');
                                })
                            }
                            if (vk_pixel) {
                                var t = document.createElement("script");
                                t.type = "text/javascript";
                                t.async = !0;
                                t.src = "https://vk.com/js/api/openapi.js?168";
                                t.onload = function () {
                                    VK.Retargeting.Init(vk_pixel);
                                    VK.Retargeting.Hit()
                                    VK.Retargeting.Event("View")
                                    VK.Goal("view_content")
                                };
                                document.head.appendChild(t)
                                $(".sb_btn, .btn_new, modern_btn").click(function () {
                                    VK.Retargeting.Event("Subscribe")
                                    VK.Goal("conversion")
                                })
                            }
                        } catch (e) {
                            console.error(e)
                        }
                        mini_landing_init(save_fbp || false, save_ga || false, save_ym_uid || false, save_roistat_visit || false, save_comagic || false)
                    }
                    GetIP()
                    quizTextArea()
                    setListeners()
                    buttonColorsHover()
                    successMessage()
                    quizCalendar()
                    surveyForm()
                    setInputHandlerForNumericForm()
                    conditionQuiz()
                    initializeSwiperQuiz($('.salebot-landing__section-inner[data-is_quiz_page=true]'))
                }
            }
        }
    })
    ();
}