const axios = require('axios')

function data(s) {
    return {"semesters":{"departments":[{"id":"1","title":"ACCOUNTING","abbreviation":"ACCT"},{"id":"2","title":"ACTUARIAL SCIENCE","abbreviation":"ACSCI"},{"id":"3","title":"ADVERTISING","abbreviation":"ADVRT"},{"id":"4","title":"AEROSPACE ENGINEERING","abbreviation":"AER E"},{"id":"5","title":"AFRICAN AND AFRICAN AMERICAN STUDIES","abbreviation":"AF AM"},{"id":"6","title":"AGRICULTURAL AND BIOSYSTEMS ENGINEERING","abbreviation":"A B E"},{"id":"7","title":"AGRICULTURAL EDUCATION & STUDIES","abbreviation":"AGEDS"},{"id":"8","title":"AGRONOMY","abbreviation":"AGRON"},{"id":"9","title":"AIR FORCE AEROSPACE STUDIES","abbreviation":"AFAS"},{"id":"10","title":"AMERICAN INDIAN STUDIES","abbreviation":"AM IN"},{"id":"11","title":"AMERICAN SIGN LANGUAGE","abbreviation":"ASL"},{"id":"12","title":"ANIMAL ECOLOGY","abbreviation":"A ECL"},{"id":"13","title":"ANIMAL SCIENCE","abbreviation":"AN S"},{"id":"14","title":"ANTHROPOLOGY","abbreviation":"ANTHR"},{"id":"15","title":"APPAREL, EVENTS, AND HOSPITALITY MANAGEM","abbreviation":"AESHM"},{"id":"16","title":"APPAREL, MERCHANDISING, AND DESIGN","abbreviation":"A M D"},{"id":"17","title":"ARABIC","abbreviation":"ARABC"},{"id":"18","title":"ARCHITECTURE","abbreviation":"ARCH"},{"id":"19","title":"ART EDUCATION","abbreviation":"ARTED"},{"id":"20","title":"ART HISTORY","abbreviation":"ART H"},{"id":"21","title":"ASTRONOMY & ASTROPHYSICS","abbreviation":"ASTRO"},{"id":"22","title":"ATHLETIC TRAINING","abbreviation":"A TR"},{"id":"23","title":"ATHLETICS","abbreviation":"ATH"},{"id":"24","title":"BIOCHEM, BIOPHYSICS & MOLECULAR BIO","abbreviation":"BBMB"},{"id":"25","title":"BIOINFORMATICS & COMPUTATIONAL BIOL-UG","abbreviation":"BCBIO"},{"id":"26","title":"BIOINFORMATICS AND COMPUTATIONAL BIOL","abbreviation":"BCB"},{"id":"27","title":"BIOLOGICAL/PRE-MEDICAL ILLUSTRATION","abbreviation":"BPM I"},{"id":"28","title":"BIOLOGY","abbreviation":"BIOL"},{"id":"29","title":"BIOMEDICAL ENGINEERING","abbreviation":"B M E"},{"id":"30","title":"BIOMEDICAL SCIENCES","abbreviation":"B M S"},{"id":"31","title":"BUSINESS ADMINISTRATION","abbreviation":"BUSAD"},{"id":"32","title":"CHEMICAL ENGINEERING","abbreviation":"CH E"},{"id":"33","title":"CHEMISTRY","abbreviation":"CHEM"},{"id":"34","title":"CHINESE","abbreviation":"CHIN"},{"id":"35","title":"CIVIL ENGINEERING","abbreviation":"C E"},{"id":"36","title":"CLASSICAL STUDIES","abbreviation":"CL ST"},{"id":"37","title":"COMMUNICATION DISORDERS","abbreviation":"CMDIS"},{"id":"38","title":"COMMUNICATION STUDIES","abbreviation":"COMST"},{"id":"39","title":"COMMUNITY & REGIONAL PLANNING","abbreviation":"C R P"},{"id":"40","title":"COMMUNITY DEVELOPMENT","abbreviation":"C DEV"},{"id":"41","title":"COMPUTER ENGINEERING","abbreviation":"CPR E"},{"id":"42","title":"COMPUTER SCIENCE","abbreviation":"COM S"},{"id":"43","title":"CONSTRUCTION ENGINEERING","abbreviation":"CON E"},{"id":"44","title":"CRIMINAL JUSTICE","abbreviation":"C J"},{"id":"45","title":"CYBER SECURITY","abbreviation":"CYBSC"},{"id":"46","title":"CYBER SECURITY ENGINEERING","abbreviation":"CYB E"},{"id":"47","title":"CYBER-PHYSICAL SYSTEMS","abbreviation":"CPS"},{"id":"48","title":"DANCE","abbreviation":"DANCE"},{"id":"49","title":"DATA SCIENCE","abbreviation":"DS"},{"id":"50","title":"DESIGN","abbreviation":"DES"},{"id":"51","title":"DESIGN STUDIES","abbreviation":"DSN S"},{"id":"52","title":"DIETETICS","abbreviation":"DIET"},{"id":"53","title":"EARLY CHILDCARE EDUCATION AND PROGRAMMIN","abbreviation":"E C P"},{"id":"54","title":"ECOLOGY & EVOLUTIONARY BIOLOGY","abbreviation":"EEB"},{"id":"55","title":"ECOLOGY, EVOLUTION & ORGANISMAL BIOL","abbreviation":"EEOB"},{"id":"56","title":"ECONOMICS","abbreviation":"ECON"},{"id":"57","title":"EDUCATION","abbreviation":"EDUC"},{"id":"58","title":"EDUCATIONAL ADMINISTRATION","abbreviation":"EDADM"},{"id":"59","title":"EDUCATIONAL LEADERSHIP & POLICY ST","abbreviation":"EL PS"},{"id":"60","title":"ELECTRICAL ENGINEERING","abbreviation":"E E"},{"id":"61","title":"ENGINEERING","abbreviation":"ENGR"},{"id":"62","title":"ENGINEERING MECHANICS","abbreviation":"E M"},{"id":"63","title":"ENGLISH","abbreviation":"ENGL"},{"id":"64","title":"ENTOMOLOGY","abbreviation":"ENT"},{"id":"65","title":"ENTREPRENEURSHIP","abbreviation":"ENTSP"},{"id":"66","title":"ENVIRONMENTAL ENGINEERING","abbreviation":"ENV E"},{"id":"67","title":"ENVIRONMENTAL SCIENCE","abbreviation":"ENSCI"},{"id":"68","title":"ENVIRONMENTAL STUDIES","abbreviation":"ENV S"},{"id":"69","title":"EVENT MANAGEMENT","abbreviation":"EVENT"},{"id":"70","title":"FAMILY & CONSUMER SCIENCES ED & STUDIES","abbreviation":"FCEDS"},{"id":"71","title":"FAMILY FINANCIAL PLANNING","abbreviation":"FFP"},{"id":"72","title":"FINANCE","abbreviation":"FIN"},{"id":"73","title":"FOOD SCIENCE & HUMAN NUTRITION","abbreviation":"FS HN"},{"id":"74","title":"FORESTRY","abbreviation":"FOR"},{"id":"75","title":"FRENCH","abbreviation":"FRNCH"},{"id":"76","title":"GENETICS","abbreviation":"GEN"},{"id":"77","title":"GENETICS - INTERDISCIPLINARY","abbreviation":"GENET"},{"id":"78","title":"GENETICS, DEVELOPMENT & CELL BIOL","abbreviation":"GDCB"},{"id":"79","title":"GEOLOGY","abbreviation":"GEOL"},{"id":"80","title":"GERMAN","abbreviation":"GER"},{"id":"81","title":"GERONTOLOGY","abbreviation":"GERON"},{"id":"82","title":"GLOBAL RESOURCE SYSTEMS","abbreviation":"GLOBE"},{"id":"83","title":"GRADUATE STUDIES","abbreviation":"GR ST"},{"id":"84","title":"GRAPHIC DESIGN","abbreviation":"ARTGR"},{"id":"85","title":"HEALTH STUDIES","abbreviation":"H S"},{"id":"86","title":"HEALTHCARE MANAGEMENT","abbreviation":"HCM"},{"id":"87","title":"HIGHER EDUCATION","abbreviation":"HG ED"},{"id":"88","title":"HISTORY","abbreviation":"HIST"},{"id":"89","title":"HONORS","abbreviation":"HON"},{"id":"90","title":"HORTICULTURE","abbreviation":"HORT"},{"id":"91","title":"HOSPITALITY MANAGEMENT","abbreviation":"HSP M"},{"id":"92","title":"HUMAN COMPUTER INTERACTION","abbreviation":"HCI"},{"id":"93","title":"HUMAN DEVELOPMENT & FAMILY STUDIES","abbreviation":"HD FS"},{"id":"94","title":"HUMAN SCIENCES","abbreviation":"H SCI"},{"id":"95","title":"IMMUNOBIOLOGY","abbreviation":"IMBIO"},{"id":"96","title":"INDUSTRIAL DESIGN","abbreviation":"IND D"},{"id":"97","title":"INDUSTRIAL ENGINEERING","abbreviation":"I E"},{"id":"98","title":"INTEGRATED STUDIO ARTS","abbreviation":"ARTIS"},{"id":"99","title":"INTERDISCIPLINARY GRADUATE STUDIES","abbreviation":"IGS"},{"id":"100","title":"INTERIOR DESIGN","abbreviation":"ARTID"},{"id":"101","title":"INTERNATIONAL STUDIES","abbreviation":"INTST"},{"id":"102","title":"JOURNALISM & MASS COMMUNICATION","abbreviation":"JL MC"},{"id":"103","title":"KINESIOLOGY","abbreviation":"KIN"},{"id":"104","title":"LANDSCAPE ARCHITECTURE","abbreviation":"L A"},{"id":"105","title":"LATIN","abbreviation":"LATIN"},{"id":"106","title":"LEADERSHIP STUDIES","abbreviation":"LD ST"},{"id":"107","title":"LEARNING AND LEADERSHIP SCIENCES","abbreviation":"L L S"},{"id":"108","title":"LEARNING TEAM","abbreviation":"L TM"},{"id":"109","title":"LIBERAL ARTS & SCIENCES","abbreviation":"LAS"},{"id":"110","title":"LIBRARY","abbreviation":"LIB"},{"id":"111","title":"LINGUISTICS","abbreviation":"LING"},{"id":"112","title":"MANAGEMENT","abbreviation":"MGMT"},{"id":"113","title":"MANAGEMENT INFORMATION SYSTEMS","abbreviation":"MIS"},{"id":"114","title":"MARKETING","abbreviation":"MKT"},{"id":"115","title":"MATERIALS ENGINEERING","abbreviation":"MAT E"},{"id":"116","title":"MATERIALS SCIENCE & ENGINEERING","abbreviation":"M S E"},{"id":"117","title":"MATHEMATICS","abbreviation":"MATH"},{"id":"118","title":"MECHANICAL ENGINEERING","abbreviation":"M E"},{"id":"119","title":"METEOROLOGY","abbreviation":"MTEOR"},{"id":"120","title":"MICROBIOLOGY","abbreviation":"MICRO"},{"id":"121","title":"MILITARY SCIENCE","abbreviation":"M S"},{"id":"122","title":"MOLECULAR CELLULAR DEV BIOLOGY","abbreviation":"MCDB"},{"id":"123","title":"MUSIC","abbreviation":"MUSIC"},{"id":"124","title":"NATURAL RESOURCE ECOLOGY AND MGMT","abbreviation":"NREM"},{"id":"125","title":"NAVAL SCIENCE","abbreviation":"N S"},{"id":"126","title":"NEUROSCIENCE","abbreviation":"NEURO"},{"id":"127","title":"NURSING","abbreviation":"NRS"},{"id":"128","title":"NUTRITIONAL SCIENCES","abbreviation":"NUTRS"},{"id":"129","title":"ORGANIZATION FOR TROPICAL STUDIES","abbreviation":"OTS"},{"id":"130","title":"PERFORMING ARTS","abbreviation":"PERF"},{"id":"131","title":"PHILOSOPHY","abbreviation":"PHIL"},{"id":"132","title":"PHYSICS","abbreviation":"PHYS"},{"id":"133","title":"PLANT BIOLOGY","abbreviation":"PLBIO"},{"id":"134","title":"PLANT PATHOLOGY","abbreviation":"PL P"},{"id":"135","title":"POLITICAL SCIENCE","abbreviation":"POL S"},{"id":"136","title":"PORTUGUESE","abbreviation":"PORT"},{"id":"137","title":"PSYCHOLOGY","abbreviation":"PSYCH"},{"id":"138","title":"PUBLIC RELATIONS","abbreviation":"P R"},{"id":"139","title":"RELIGIOUS STUDIES","abbreviation":"RELIG"},{"id":"140","title":"RESEARCH & EVALUATION","abbreviation":"RESEV"},{"id":"141","title":"RUSSIAN","abbreviation":"RUS"},{"id":"142","title":"SEED TECHNOLOGY AND BUSINESS","abbreviation":"STB"},{"id":"143","title":"SOCIOLOGY","abbreviation":"SOC"},{"id":"144","title":"SOFTWARE ENGINEERING","abbreviation":"S E"},{"id":"145","title":"SPANISH","abbreviation":"SPAN"},{"id":"146","title":"SPECIAL EDUCATION","abbreviation":"SP ED"},{"id":"147","title":"SPEECH COMMUNICATION","abbreviation":"SP CM"},{"id":"148","title":"STATISTICS","abbreviation":"STAT"},{"id":"149","title":"SUPPLY CHAIN MANAGEMENT","abbreviation":"SCM"},{"id":"150","title":"SUSTAINABLE AGRICULTURE","abbreviation":"SUSAG"},{"id":"151","title":"SUSTAINABLE ENVIRONMENTS","abbreviation":"SUS E"},{"id":"152","title":"TECHNOLOGY SYSTEMS MANAGEMENT","abbreviation":"TSM"},{"id":"153","title":"THEATRE","abbreviation":"THTRE"},{"id":"154","title":"TOXICOLOGY","abbreviation":"TOX"},{"id":"155","title":"TRANSPORTATION","abbreviation":"TRANS"},{"id":"156","title":"U.S. LATINO/A STUDIES","abbreviation":"US LS"},{"id":"157","title":"UNIVERSITY STUDIES","abbreviation":"U ST"},{"id":"158","title":"URBAN DESIGN","abbreviation":"URB D"},{"id":"159","title":"VET DIAGNOSTIC & PRODUCTION AN MED","abbreviation":"VDPAM"},{"id":"160","title":"VETERINARY CLINICAL SCIENCES","abbreviation":"V C S"},{"id":"161","title":"VETERINARY MICROBIOLOGY & PREV MED","abbreviation":"V MPM"},{"id":"162","title":"VETERINARY PATHOLOGY","abbreviation":"V PTH"},{"id":"163","title":"WIND ENERGY SCIENCE, ENGINEERING AND POL","abbreviation":"WESEP"},{"id":"164","title":"WISE","abbreviation":"WISE"},{"id":"165","title":"WOMEN'S AND GENDER STUDIES","abbreviation":"WGS"},{"id":"166","title":"WORLD FILM STUDIES","abbreviation":"W F S"},{"id":"167","title":"WORLD LANGUAGES AND CULTURES","abbreviation":"WLC"},{"id":"168","title":"YOUTH","abbreviation":"YTH"}],"semesters":[{"id":2,"code":"S","year":"2022","preliminary":"","current":"Y","lastChanged":"2022-02-12T02:13:40.875+00:00","semNum":"1","semesterTitle":"Spring 2022","formattedStartDateTime":"Sat Feb 12 02:13:40 GMT 2022"},{"id":3,"code":"1","year":"2022","preliminary":"","current":"N","lastChanged":"2022-02-12T02:14:16.444+00:00","semNum":"3","semesterTitle":"Summer 2022","formattedStartDateTime":"Sat Feb 12 02:14:16 GMT 2022"},{"id":1,"code":"F","year":"2022","preliminary":"Y","current":"N","lastChanged":"2022-02-12T02:12:45.964+00:00","semNum":"5","semesterTitle":"Tentative Fall 2022","formattedStartDateTime":"Sat Feb 12 02:12:45 GMT 2022"}],"formDefaults":{"courseCredits":{"0.0":"0.0","0.5":"0.5","1.0":"1.0","2.0":"2.0","3.0":"3.0","4.0":"4.0","5.0":"5.0","6.0":"6.0"},"courseLevels":{"100":"100 Level Courses","200":"200 Level Courses","300":"300 Level Courses","400":"400 Level Courses","500":"500 Level Courses","600":"600 Level Courses","000":"Developmental Courses"},"courseRequirements":{"N":"None","D":"U.S. Diversity","I":"International Perspectives"},"courseTypes":{"All":"All","WWW":"Online (WWW)","EX":"Experimental","SAT":"Satisfactory/Fail","HYB":"Hybrid","FF":"Face-to-Face"}}},"defSem":2,"selectedTerm":2,"selectedDepartment":s,"courseNumber":"","startTime":"","stopTime":""}
}

const types = ["ACCT", "ACSCI", "ADVRT", "AER E", "AF AM", "A B E", "AGEDS", "AGRON", "AFAS", "AM IN", "ASL", "A ECL", "AN S", "ANTHR", "AESHM", "A M D", "ARABC", "ARCH", "ARTED", "ART H", "ASTRO", "A TR", "ATH", "BBMB", "BCBIO", "BCB", "BPM I", "BIOL", "B M E", "B M S", "BUSAD", "CH E", "CHEM", "CHIN", "C E", "CL ST", "CMDIS", "COMST", "C R P", "C DEV", "CPR E", "COM S", "CON E", "C J", "CYBSC", "CYB E", "CPS", "DANCE", "DS", "DES", "DSN S", "DIET", "E C P", "EEB", "EEOB", "ECON", "EDUC", "EDADM", "EL PS", "E E", "ENGR", "E M", "ENGL", "ENT", "ENTSP", "ENV E", "ENSCI", "ENV S", "EVENT", "FCEDS", "FFP", "FIN", "FS HN", "FOR", "FRNCH", "GEN", "GENET", "GDCB", "GEOL", "GER", "GERON", "GLOBE", "GR ST", "ARTGR", "H S", "HCM", "HG ED", "HIST", "HON", "HORT", "HSP M", "HCI", "HD FS", "H SCI", "IMBIO", "IND D", "I E", "ARTIS", "IGS", "ARTID", "INTST", "JL MC", "KIN", "L A", "LATIN", "LD ST", "L L S", "L TM", "LAS", "LIB", "LING", "MGMT", "MIS", "MKT", "MAT E", "M S E", "MATH", "M E", "MTEOR", "MICRO", "M S", "MCDB", "MUSIC", "NREM", "N S", "NEURO", "NRS", "NUTRS", "OTS", "PERF", "PHIL", "PHYS", "PLBIO", "PL P", "POL S", "PORT", "PSYCH", "P R", "RELIG", "RESEV", "RUS", "STB", "SOC", "S E", "SPAN", "SP ED", "SP CM", "STAT", "SCM", "SUSAG", "SUS E", "TSM", "THTRE", "TOX", "TRANS", "US LS", "U ST", "URB D", "VDPAM", "V C S", "V MPM", "V PTH", "WESEP", "WISE", "WGS", "W F S", "WLC", "YTH"]
// const types = ["MUSIC"];

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const doSomething = async () => {
    for (let o = 0; o < types.length; o++) {
        await sleep(1000)
        axios
            .post('https://classes.iastate.edu/app/rest/courses/preferences', data(types[o]))
            .then(res => {
                axios
                    .post('http://localhost:8080/classes', res.data.response, {
                        headers: {
                            // Overwrite Axios's automatically set Content-Type
                            'Content-Type': 'application/json'
                        }
                    })
                    .catch(error => {
                        console.error(error)
                    })
                // break;

                // console.log(res.data.response[0])
            })
            .catch(error => {
                console.error(error)
            })
    }
}

doSomething()