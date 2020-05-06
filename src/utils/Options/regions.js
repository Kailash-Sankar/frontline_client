// source https://github.com/Dhaneshmonds/webiste-utilities/blob/master/state-districts.json
const regions = [
  /*
  {
    id: "1",
    type: "Union Territory",
    capital: "Mayabunder",
    value: "AN",
    label: "Andaman and Nicobar Islands",
    children: [
      {
        value: "1",
        label: "Nicobar"
      },
      {
        value: "2",
        label: "North and Mvaluedle Andaman"
      },
      {
        value: "3",
        label: "South Andaman"
      }
    ]
  },
  {
    id: "2",
    type: "State",
    capital: "Amaravati",
    value: "AP",
    label: "Andhra Pradesh",
    children: [
      {
        value: "1",
        label: "Anantapur"
      },
      {
        value: "2",
        label: "Chittoor"
      },
      {
        value: "3",
        label: "East Godavari"
      },
      {
        value: "4",
        label: "Guntur"
      },
      {
        value: "5",
        label: "Krishna"
      },
      {
        value: "6",
        label: "Kurnool"
      },
      {
        value: "7",
        label: "Nellore"
      },
      {
        value: "8",
        label: "Prakasam"
      },
      {
        value: "9",
        label: "Srikakulam"
      },
      {
        value: "10",
        label: "Visakhapatnam"
      },
      {
        value: "11",
        label: "Vizianagaram"
      },
      {
        value: "12",
        label: "West Godavari"
      },
      {
        value: "13",
        label: "YSR Kadapa"
      }
    ]
  },
  {
    id: "3",
    type: "State",
    capital: "Itanagar",
    value: "AR",
    label: "Arunachal Pradesh",
    children: [
      {
        value: "1",
        label: "Tawang"
      },
      {
        value: "2",
        label: "West Kameng"
      },
      {
        value: "3",
        label: "East Kameng"
      },
      {
        value: "4",
        label: "Papum Pare"
      },
      {
        value: "5",
        label: "Kurung Kumey"
      },
      {
        value: "6",
        label: "Kra Daadi"
      },
      {
        value: "7",
        label: "Lower Subansiri"
      },
      {
        value: "8",
        label: "Upper Subansiri"
      },
      {
        value: "9",
        label: "West Siang"
      },
      {
        value: "10",
        label: "East Siang"
      },
      {
        value: "11",
        label: "Siang"
      },
      {
        value: "12",
        label: "Upper Siang"
      },
      {
        value: "13",
        label: "Lower Siang"
      },
      {
        value: "14",
        label: "Lower Dibang Valley"
      },
      {
        value: "15",
        label: "Dibang Valley"
      },
      {
        value: "16",
        label: "Anjaw"
      },
      {
        value: "17",
        label: "Lohit"
      },
      {
        value: "18",
        label: "Namsai"
      },
      {
        value: "19",
        label: "Changlang"
      },
      {
        value: "20",
        label: "Tirap"
      },
      {
        value: "21",
        label: "Longding"
      }
    ]
  },
  {
    id: "4",
    type: "State",
    capital: "Dispur",
    value: "AS",
    label: "Assam",
    children: [
      {
        value: "1",
        label: "Baksa"
      },
      {
        value: "2",
        label: "Barpeta"
      },
      {
        value: "3",
        label: "Biswanath"
      },
      {
        value: "4",
        label: "Bongaigaon"
      },
      {
        value: "5",
        label: "Cachar"
      },
      {
        value: "6",
        label: "Charavalueeo"
      },
      {
        value: "7",
        label: "Chirang"
      },
      {
        value: "8",
        label: "Darrang"
      },
      {
        value: "9",
        label: "Dhemaji"
      },
      {
        value: "10",
        label: "Dhubri"
      },
      {
        value: "11",
        label: "Dibrugarh"
      },
      {
        value: "12",
        label: "Goalpara"
      },
      {
        value: "13",
        label: "Golaghat"
      },
      {
        value: "14",
        label: "Hailakandi"
      },
      {
        value: "15",
        label: "Hojai"
      },
      {
        value: "16",
        label: "Jorhat"
      },
      {
        value: "17",
        label: "Kamrup Metropolitan"
      },
      {
        value: "18",
        label: "Kamrup"
      },
      {
        value: "19",
        label: "Karbi Anglong"
      },
      {
        value: "20",
        label: "Karimganj"
      },
      {
        value: "21",
        label: "Kokrajhar"
      },
      {
        value: "22",
        label: "Lakhimpur"
      },
      {
        value: "23",
        label: "Majuli"
      },
      {
        value: "24",
        label: "Morigaon"
      },
      {
        value: "25",
        label: "Nagaon"
      },
      {
        value: "26",
        label: "Nalbari"
      },
      {
        value: "27",
        label: "Dima Hasao"
      },
      {
        value: "28",
        label: "Sivasagar"
      },
      {
        value: "29",
        label: "Sonitpur"
      },
      {
        value: "30",
        label: "South Salmara-Mankachar"
      },
      {
        value: "31",
        label: "Tinsukia"
      },
      {
        value: "32",
        label: "Udalguri"
      },
      {
        value: "33",
        label: "West Karbi Anglong"
      }
    ]
  },
  {
    id: "5",
    type: "State",
    capital: "Patna",
    value: "BR",
    label: "Bihar",
    children: [
      {
        value: "1",
        label: "Araria"
      },
      {
        value: "2",
        label: "Arwal"
      },
      {
        value: "3",
        label: "Aurangabad"
      },
      {
        value: "4",
        label: "Banka"
      },
      {
        value: "5",
        label: "Begusarai"
      },
      {
        value: "6",
        label: "Bhagalpur"
      },
      {
        value: "7",
        label: "Bhojpur"
      },
      {
        value: "8",
        label: "Buxar"
      },
      {
        value: "9",
        label: "Darbhanga"
      },
      {
        value: "10",
        label: "East Champaran (Motihari)"
      },
      {
        value: "11",
        label: "Gaya"
      },
      {
        value: "12",
        label: "Gopalganj"
      },
      {
        value: "13",
        label: "Jamui"
      },
      {
        value: "14",
        label: "Jehanabad"
      },
      {
        value: "15",
        label: "Kaimur (Bhabua)"
      },
      {
        value: "16",
        label: "Katihar"
      },
      {
        value: "17",
        label: "Khagaria"
      },
      {
        value: "18",
        label: "Kishanganj"
      },
      {
        value: "19",
        label: "Lakhisarai"
      },
      {
        value: "20",
        label: "Madhepura"
      },
      {
        value: "21",
        label: "Madhubani"
      },
      {
        value: "22",
        label: "Munger (Monghyr)"
      },
      {
        value: "23",
        label: "Muzaffarpur"
      },
      {
        value: "24",
        label: "Nalanda"
      },
      {
        value: "25",
        label: "Nawada"
      },
      {
        value: "26",
        label: "Patna"
      },
      {
        value: "27",
        label: "Purnia (Purnea)"
      },
      {
        value: "28",
        label: "Rohtas"
      },
      {
        value: "29",
        label: "Saharsa"
      },
      {
        value: "30",
        label: "Samastipur"
      },
      {
        value: "31",
        label: "Saran"
      },
      {
        value: "32",
        label: "Sheikhpura"
      },
      {
        value: "33",
        label: "Sheohar"
      },
      {
        value: "34",
        label: "Sitamarhi"
      },
      {
        value: "35",
        label: "Siwan"
      },
      {
        value: "36",
        label: "Supaul"
      },
      {
        value: "37",
        label: "Vaishali"
      },
      {
        value: "38",
        label: "West Champaran"
      }
    ]
  },
  {
    id: "6",
    type: "Union Territory",
    capital: "Chandigarh",
    value: "CG",
    label: "Chandigarh",
    children: [
      {
        value: "1",
        label: "Chandigarh"
      }
    ]
  },
  {
    id: "7",
    type: "State",
    capital: "Bilaspur (Judiciary), Raipur",
    value: "CH",
    label: "Chhattisgarh",
    children: [
      {
        value: "1",
        label: "Balod"
      },
      {
        value: "2",
        label: "Baloda Bazar"
      },
      {
        value: "3",
        label: "Balrampur"
      },
      {
        value: "4",
        label: "Bastar"
      },
      {
        value: "5",
        label: "Bemetara"
      },
      {
        value: "6",
        label: "Bijapur"
      },
      {
        value: "7",
        label: "Bilaspur"
      },
      {
        value: "8",
        label: "Dantewada (South Bastar)"
      },
      {
        value: "9",
        label: "Dhamtari"
      },
      {
        value: "10",
        label: "Durg"
      },
      {
        value: "11",
        label: "Gariyaband"
      },
      {
        value: "12",
        label: "Janjgir-Champa"
      },
      {
        value: "13",
        label: "Jashpur"
      },
      {
        value: "14",
        label: "Kabirdham (Kawardha)"
      },
      {
        value: "15",
        label: "Kanker (North Bastar)"
      },
      {
        value: "16",
        label: "Kondagaon"
      },
      {
        value: "17",
        label: "Korba"
      },
      {
        value: "18",
        label: "Korea (Koriya)"
      },
      {
        value: "19",
        label: "Mahasamund"
      },
      {
        value: "20",
        label: "Mungeli"
      },
      {
        value: "21",
        label: "Narayanpur"
      },
      {
        value: "22",
        label: "Raigarh"
      },
      {
        value: "23",
        label: "Raipur"
      },
      {
        value: "24",
        label: "Rajnandgaon"
      },
      {
        value: "25",
        label: "Sukma"
      },
      {
        value: "26",
        label: "Surajpur  "
      },
      {
        value: "27",
        label: "Surguja"
      }
    ]
  },
  {
    id: "8",
    type: "Union Territory",
    capital: "Silvassa",
    value: "DH",
    label: "Dadra and Nagar Haveli",
    children: [
      {
        value: "1",
        label: "Dadra & Nagar Haveli"
      }
    ]
  },
  {
    id: "9",
    type: "Union Territory",
    capital: "Daman",
    value: "DD",
    label: "Daman and Diu",
    children: [
      {
        value: "1",
        label: "Daman"
      },
      {
        value: "2",
        label: "Diu"
      }
    ]
  },
  {
    id: "10",
    type: "National Capital Territory",
    capital: "New Delhi",
    value: "DL",
    label: "Delhi",
    children: [
      {
        value: "1",
        label: "Central Delhi"
      },
      {
        value: "2",
        label: "East Delhi"
      },
      {
        value: "3",
        label: "New Delhi"
      },
      {
        value: "4",
        label: "North Delhi"
      },
      {
        value: "5",
        label: "North East  Delhi"
      },
      {
        value: "6",
        label: "North West  Delhi"
      },
      {
        value: "7",
        label: "Shahdara"
      },
      {
        value: "8",
        label: "South Delhi"
      },
      {
        value: "9",
        label: "South East Delhi"
      },
      {
        value: "10",
        label: "South West  Delhi"
      },
      {
        value: "11",
        label: "West Delhi"
      }
    ]
  },
  {
    id: "11",
    type: "State",
    capital: "Panaji",
    value: "GA",
    label: "Goa",
    children: [
      {
        value: "1",
        label: "North Goa"
      },
      {
        value: "2",
        label: "South Goa"
      }
    ]
  },
  {
    id: "12",
    type: "State",
    capital: "Gandhinagar",
    value: "GJ",
    label: "Gujarat",
    children: [
      {
        value: "1",
        label: "Ahmedabad"
      },
      {
        value: "2",
        label: "Amreli"
      },
      {
        value: "3",
        label: "Anand"
      },
      {
        value: "4",
        label: "Aravalli"
      },
      {
        value: "5",
        label: "Banaskantha (Palanpur)"
      },
      {
        value: "6",
        label: "Bharuch"
      },
      {
        value: "7",
        label: "Bhavnagar"
      },
      {
        value: "8",
        label: "Botad"
      },
      {
        value: "9",
        label: "Chhota Udepur"
      },
      {
        value: "10",
        label: "Dahod"
      },
      {
        value: "11",
        label: "Dangs (Ahwa)"
      },
      {
        value: "12",
        label: "Devbhoomi Dwarka"
      },
      {
        value: "13",
        label: "Gandhinagar"
      },
      {
        value: "14",
        label: "Gir Somnath"
      },
      {
        value: "15",
        label: "Jamnagar"
      },
      {
        value: "16",
        label: "Junagadh"
      },
      {
        value: "17",
        label: "Kachchh"
      },
      {
        value: "18",
        label: "Kheda (Nadiad)"
      },
      {
        value: "19",
        label: "Mahisagar"
      },
      {
        value: "20",
        label: "Mehsana"
      },
      {
        value: "21",
        label: "Morbi"
      },
      {
        value: "22",
        label: "Narmada (Rajpipla)"
      },
      {
        value: "23",
        label: "Navsari"
      },
      {
        value: "24",
        label: "Panchmahal (Godhra)"
      },
      {
        value: "25",
        label: "Patan"
      },
      {
        value: "26",
        label: "Porbandar"
      },
      {
        value: "27",
        label: "Rajkot"
      },
      {
        value: "28",
        label: "Sabarkantha (Himmatnagar)"
      },
      {
        value: "29",
        label: "Surat"
      },
      {
        value: "30",
        label: "Surendranagar"
      },
      {
        value: "31",
        label: "Tapi (Vyara)"
      },
      {
        value: "32",
        label: "Vadodara"
      },
      {
        value: "33",
        label: "Valsad"
      }
    ]
  },
  {
    id: "13",
    type: "State",
    capital: "Chandigarh",
    value: "HR",
    label: "Haryana",
    children: [
      {
        value: "1",
        label: "Ambala"
      },
      {
        value: "2",
        label: "Bhiwani"
      },
      {
        value: "3",
        label: "Charkhi Dadri"
      },
      {
        value: "4",
        label: "Farvalueabad"
      },
      {
        value: "5",
        label: "Fatehabad"
      },
      {
        value: "6",
        label: "Gurgaon"
      },
      {
        value: "7",
        label: "Hisar"
      },
      {
        value: "8",
        label: "Jhajjar"
      },
      {
        value: "9",
        label: "Jind"
      },
      {
        value: "10",
        label: "Kaithal"
      },
      {
        value: "11",
        label: "Karnal"
      },
      {
        value: "12",
        label: "Kurukshetra"
      },
      {
        value: "13",
        label: "Mahendragarh"
      },
      {
        value: "14",
        label: "Mewat"
      },
      {
        value: "15",
        label: "Palwal"
      },
      {
        value: "16",
        label: "Panchkula"
      },
      {
        value: "17",
        label: "Panipat"
      },
      {
        value: "18",
        label: "Rewari"
      },
      {
        value: "19",
        label: "Rohtak"
      },
      {
        value: "20",
        label: "Sirsa"
      },
      {
        value: "21",
        label: "Sonipat"
      },
      {
        value: "22",
        label: "Yamunanagar"
      }
    ]
  },
  {
    id: "14",
    type: "State",
    capital: "Shimla",
    value: "HP",
    label: "Himachal Pradesh",
    children: [
      {
        value: "1",
        label: "Bilaspur"
      },
      {
        value: "2",
        label: "Chamba"
      },
      {
        value: "3",
        label: "Hamirpur"
      },
      {
        value: "4",
        label: "Kangra"
      },
      {
        value: "5",
        label: "Kinnaur"
      },
      {
        value: "6",
        label: "Kullu"
      },
      {
        value: "7",
        label: "Lahaul &amp; Spiti"
      },
      {
        value: "8",
        label: "Mandi"
      },
      {
        value: "9",
        label: "Shimla"
      },
      {
        value: "10",
        label: "Sirmaur (Sirmour)"
      },
      {
        value: "11",
        label: "Solan"
      },
      {
        value: "12",
        label: "Una"
      }
    ]
  },
  {
    id: "15",
    type: "Union Territory",
    capital: "Jammu (Winter), Srinagar (Summer)",
    value: "JK",
    label: "Jammu and Kashmir",
    children: [
      {
        value: "1",
        label: "Anantnag"
      },
      {
        value: "2",
        label: "Bandipore"
      },
      {
        value: "3",
        label: "Baramulla"
      },
      {
        value: "4",
        label: "Budgam"
      },
      {
        value: "5",
        label: "Doda"
      },
      {
        value: "6",
        label: "Ganderbal"
      },
      {
        value: "7",
        label: "Jammu"
      },
      {
        value: "8",
        label: "Kargil"
      },
      {
        value: "9",
        label: "Kathua"
      },
      {
        value: "10",
        label: "Kishtwar"
      },
      {
        value: "11",
        label: "Kulgam"
      },
      {
        value: "12",
        label: "Kupwara"
      },
      {
        value: "13",
        label: "Leh"
      },
      {
        value: "14",
        label: "Poonch"
      },
      {
        value: "15",
        label: "Pulwama"
      },
      {
        value: "16",
        label: "Rajouri"
      },
      {
        value: "17",
        label: "Ramban"
      },
      {
        value: "18",
        label: "Reasi"
      },
      {
        value: "19",
        label: "Samba"
      },
      {
        value: "20",
        label: "Shopian"
      },
      {
        value: "21",
        label: "Srinagar"
      },
      {
        value: "22",
        label: "Udhampur"
      }
    ]
  },
  {
    id: "16",
    type: "State",
    capital: "Ranchi",
    value: "JH",
    label: "Jharkhand",
    children: [
      {
        value: "1",
        label: "Bokaro"
      },
      {
        value: "2",
        label: "Chatra"
      },
      {
        value: "3",
        label: "Deoghar"
      },
      {
        value: "4",
        label: "Dhanbad"
      },
      {
        value: "5",
        label: "Dumka"
      },
      {
        value: "6",
        label: "East Singhbhum"
      },
      {
        value: "7",
        label: "Garhwa"
      },
      {
        value: "8",
        label: "Girvalueih"
      },
      {
        value: "9",
        label: "Godda"
      },
      {
        value: "10",
        label: "Gumla"
      },
      {
        value: "11",
        label: "Hazaribag"
      },
      {
        value: "12",
        label: "Jamtara"
      },
      {
        value: "13",
        label: "Khunti"
      },
      {
        value: "14",
        label: "Koderma"
      },
      {
        value: "15",
        label: "Latehar"
      },
      {
        value: "16",
        label: "Lohardaga"
      },
      {
        value: "17",
        label: "Pakur"
      },
      {
        value: "18",
        label: "Palamu"
      },
      {
        value: "19",
        label: "Ramgarh"
      },
      {
        value: "20",
        label: "Ranchi"
      },
      {
        value: "21",
        label: "Sahibganj"
      },
      {
        value: "22",
        label: "Seraikela-Kharsawan"
      },
      {
        value: "23",
        label: "Simdega"
      },
      {
        value: "24",
        label: "West Singhbhum"
      }
    ]
  },
  */
  {
    id: "17",
    type: "State",
    capital: "Bengaluru",
    value: "KA",
    label: "Karnataka",
    children: [
      {
        value: "1",
        label: "Bagalkot"
      },
      {
        value: "2",
        label: "Ballari (Bellary)"
      },
      {
        value: "3",
        label: "Belagavi (Belgaum)"
      },
      {
        value: "4",
        label: "Bengaluru (Bangalore) Rural"
      },
      {
        value: "5",
        label: "Bengaluru (Bangalore) Urban"
      },
      {
        value: "6",
        label: "Bidar"
      },
      {
        value: "7",
        label: "Chamarajanagar"
      },
      {
        value: "8",
        label: "Chikballapur"
      },
      {
        value: "9",
        label: "Chikkamagaluru (Chikmagalur)"
      },
      {
        value: "10",
        label: "Chitradurga"
      },
      {
        value: "11",
        label: "Dakshina Kannada"
      },
      {
        value: "12",
        label: "Davangere"
      },
      {
        value: "13",
        label: "Dharwad"
      },
      {
        value: "14",
        label: "Gadag"
      },
      {
        value: "15",
        label: "Hassan"
      },
      {
        value: "16",
        label: "Haveri"
      },
      {
        value: "17",
        label: "Kalaburagi (Gulbarga)"
      },
      {
        value: "18",
        label: "Kodagu"
      },
      {
        value: "19",
        label: "Kolar"
      },
      {
        value: "20",
        label: "Koppal"
      },
      {
        value: "21",
        label: "Mandya"
      },
      {
        value: "22",
        label: "Mysuru (Mysore)"
      },
      {
        value: "23",
        label: "Raichur"
      },
      {
        value: "24",
        label: "Ramanagara"
      },
      {
        value: "25",
        label: "Shivamogga (Shimoga)"
      },
      {
        value: "26",
        label: "Tumakuru (Tumkur)"
      },
      {
        value: "27",
        label: "Udupi"
      },
      {
        value: "28",
        label: "Uttara Kannada (Karwar)"
      },
      {
        value: "29",
        label: "Vijayapura (Bijapur)"
      },
      {
        value: "30",
        label: "Yadgir"
      }
    ]
  },
  /*
  {
    id: "18",
    type: "State",
    capital: "Thiruvananthapuram",
    value: "KL",
    label: "Kerala",
    children: [
      {
        value: "1",
        label: "Alappuzha"
      },
      {
        value: "2",
        label: "Ernakulam"
      },
      {
        value: "3",
        label: "valueukki"
      },
      {
        value: "4",
        label: "Kannur"
      },
      {
        value: "5",
        label: "Kasaragod"
      },
      {
        value: "6",
        label: "Kollam"
      },
      {
        value: "7",
        label: "Kottayam"
      },
      {
        value: "8",
        label: "Kozhikode"
      },
      {
        value: "9",
        label: "Malappuram"
      },
      {
        value: "10",
        label: "Palakkad"
      },
      {
        value: "11",
        label: "Pathanamthitta"
      },
      {
        value: "12",
        label: "Thiruvananthapuram"
      },
      {
        value: "13",
        label: "Thrissur"
      },
      {
        value: "14",
        label: "Wayanad"
      }
    ]
  },
  {
    id: "19",
    type: "Union Territory",
    capital: "Leh, Kargil",
    value: "LA",
    label: "Ladakh",
    children: [
      {
        value: "1",
        label: "Kargil"
      },
      {
        value: "2",
        label: "Leh"
      }
    ]
  },
  {
    id: "20",
    type: "Union Territory",
    capital: "Kavaratti",
    value: "LD",
    label: "Lakshadweep",
    children: [
      {
        value: "1",
        label: "Agatti"
      },
      {
        value: "2",
        label: "Amini"
      },
      {
        value: "3",
        label: "Androth"
      },
      {
        value: "4",
        label: "Bithra"
      },
      {
        value: "5",
        label: "Chethlath"
      },
      {
        value: "6",
        label: "Kavaratti"
      },
      {
        value: "7",
        label: "Kadmath"
      },
      {
        value: "8",
        label: "Kalpeni"
      },
      {
        value: "9",
        label: "Kilthan"
      },
      {
        value: "10",
        label: "Minicoy"
      }
    ]
  },
  {
    id: "21",
    type: "State",
    capital: "Bhopal",
    value: "MP",
    label: "Madhya Pradesh",
    children: [
      {
        value: "1",
        label: "Agar Malwa"
      },
      {
        value: "2",
        label: "Alirajpur"
      },
      {
        value: "3",
        label: "Anuppur"
      },
      {
        value: "4",
        label: "Ashoknagar"
      },
      {
        value: "5",
        label: "Balaghat"
      },
      {
        value: "6",
        label: "Barwani"
      },
      {
        value: "7",
        label: "Betul"
      },
      {
        value: "8",
        label: "Bhind"
      },
      {
        value: "9",
        label: "Bhopal"
      },
      {
        value: "10",
        label: "Burhanpur"
      },
      {
        value: "11",
        label: "Chhatarpur"
      },
      {
        value: "12",
        label: "Chhindwara"
      },
      {
        value: "13",
        label: "Damoh"
      },
      {
        value: "14",
        label: "Datia"
      },
      {
        value: "15",
        label: "Dewas"
      },
      {
        value: "16",
        label: "Dhar"
      },
      {
        value: "17",
        label: "Dindori"
      },
      {
        value: "18",
        label: "Guna"
      },
      {
        value: "19",
        label: "Gwalior"
      },
      {
        value: "20",
        label: "Harda"
      },
      {
        value: "21",
        label: "Hoshangabad"
      },
      {
        value: "22",
        label: "Indore"
      },
      {
        value: "23",
        label: "Jabalpur"
      },
      {
        value: "24",
        label: "Jhabua"
      },
      {
        value: "25",
        label: "Katni"
      },
      {
        value: "26",
        label: "Khandwa"
      },
      {
        value: "27",
        label: "Khargone"
      },
      {
        value: "28",
        label: "Mandla"
      },
      {
        value: "29",
        label: "Mandsaur"
      },
      {
        value: "30",
        label: "Morena"
      },
      {
        value: "31",
        label: "Narsinghpur"
      },
      {
        value: "32",
        label: "Neemuch"
      },
      {
        value: "33",
        label: "Panna"
      },
      {
        value: "34",
        label: "Raisen"
      },
      {
        value: "35",
        label: "Rajgarh"
      },
      {
        value: "36",
        label: "Ratlam"
      },
      {
        value: "37",
        label: "Rewa"
      },
      {
        value: "38",
        label: "Sagar"
      },
      {
        value: "39",
        label: "Satna"
      },
      {
        value: "40",
        label: "Sehore"
      },
      {
        value: "41",
        label: "Seoni"
      },
      {
        value: "42",
        label: "Shahdol"
      },
      {
        value: "43",
        label: "Shajapur"
      },
      {
        value: "44",
        label: "Sheopur"
      },
      {
        value: "45",
        label: "Shivpuri"
      },
      {
        value: "46",
        label: "Svaluehi"
      },
      {
        value: "47",
        label: "Singrauli"
      },
      {
        value: "48",
        label: "Tikamgarh"
      },
      {
        value: "49",
        label: "Ujjain"
      },
      {
        value: "50",
        label: "Umaria"
      },
      {
        value: "51",
        label: "Vvalueisha"
      }
    ]
  },
  {
    id: "22",
    type: "State",
    capital: "Mumbai",
    value: "MH",
    label: "Maharashtra",
    children: [
      {
        value: "1",
        label: "Ahmednagar"
      },
      {
        value: "2",
        label: "Akola"
      },
      {
        value: "3",
        label: "Amravati"
      },
      {
        value: "4",
        label: "Aurangabad"
      },
      {
        value: "5",
        label: "Beed"
      },
      {
        value: "6",
        label: "Bhandara"
      },
      {
        value: "7",
        label: "Buldhana"
      },
      {
        value: "8",
        label: "Chandrapur"
      },
      {
        value: "9",
        label: "Dhule"
      },
      {
        value: "10",
        label: "Gadchiroli"
      },
      {
        value: "11",
        label: "Gondia"
      },
      {
        value: "12",
        label: "Hingoli"
      },
      {
        value: "13",
        label: "Jalgaon"
      },
      {
        value: "14",
        label: "Jalna"
      },
      {
        value: "15",
        label: "Kolhapur"
      },
      {
        value: "16",
        label: "Latur"
      },
      {
        value: "17",
        label: "Mumbai City"
      },
      {
        value: "18",
        label: "Mumbai Suburban"
      },
      {
        value: "19",
        label: "Nagpur"
      },
      {
        value: "20",
        label: "Nanded"
      },
      {
        value: "21",
        label: "Nandurbar"
      },
      {
        value: "22",
        label: "Nashik"
      },
      {
        value: "23",
        label: "Osmanabad"
      },
      {
        value: "24",
        label: "Palghar"
      },
      {
        value: "25",
        label: "Parbhani"
      },
      {
        value: "26",
        label: "Pune"
      },
      {
        value: "27",
        label: "Raigad"
      },
      {
        value: "28",
        label: "Ratnagiri"
      },
      {
        value: "29",
        label: "Sangli"
      },
      {
        value: "30",
        label: "Satara"
      },
      {
        value: "31",
        label: "Sindhudurg"
      },
      {
        value: "32",
        label: "Solapur"
      },
      {
        value: "33",
        label: "Thane"
      },
      {
        value: "34",
        label: "Wardha"
      },
      {
        value: "35",
        label: "Washim"
      },
      {
        value: "36",
        label: "Yavatmal"
      }
    ]
  },
  {
    id: "23",
    type: "State",
    capital: "Imphal",
    value: "MN",
    label: "Manipur",
    children: [
      {
        value: "1",
        label: "Bishnupur"
      },
      {
        value: "2",
        label: "Chandel"
      },
      {
        value: "3",
        label: "Churachandpur"
      },
      {
        value: "4",
        label: "Imphal East"
      },
      {
        value: "5",
        label: "Imphal West"
      },
      {
        value: "6",
        label: "Jiribam"
      },
      {
        value: "7",
        label: "Kakching"
      },
      {
        value: "8",
        label: "Kamjong"
      },
      {
        value: "9",
        label: "Kangpokpi"
      },
      {
        value: "10",
        label: "Noney"
      },
      {
        value: "11",
        label: "Pherzawl"
      },
      {
        value: "12",
        label: "Senapati"
      },
      {
        value: "13",
        label: "Tamenglong"
      },
      {
        value: "14",
        label: "Tengnoupal"
      },
      {
        value: "15",
        label: "Thoubal"
      },
      {
        value: "16",
        label: "Ukhrul"
      }
    ]
  },
  {
    id: "24",
    type: "State",
    capital: "Shillong",
    value: "ML",
    label: "Meghalaya",
    children: [
      {
        value: "1",
        label: "East Garo Hills"
      },
      {
        value: "2",
        label: "East Jaintia Hills"
      },
      {
        value: "3",
        label: "East Khasi Hills"
      },
      {
        value: "4",
        label: "North Garo Hills"
      },
      {
        value: "5",
        label: "Ri Bhoi"
      },
      {
        value: "6",
        label: "South Garo Hills"
      },
      {
        value: "7",
        label: "South West Garo Hills "
      },
      {
        value: "8",
        label: "South West Khasi Hills"
      },
      {
        value: "9",
        label: "West Garo Hills"
      },
      {
        value: "10",
        label: "West Jaintia Hills"
      },
      {
        value: "11",
        label: "West Khasi Hills"
      }
    ]
  },
  {
    id: "25",
    type: "State",
    capital: "Aizawl",
    value: "MZ",
    label: "Mizoram",
    children: [
      {
        value: "1",
        label: "Aizawl"
      },
      {
        value: "2",
        label: "Champhai"
      },
      {
        value: "3",
        label: "Kolasib"
      },
      {
        value: "4",
        label: "Lawngtlai"
      },
      {
        value: "5",
        label: "Lunglei"
      },
      {
        value: "6",
        label: "Mamit"
      },
      {
        value: "7",
        label: "Saiha"
      },
      {
        value: "8",
        label: "Serchhip"
      }
    ]
  },
  {
    id: "26",
    type: "State",
    capital: "Kohima",
    value: "NL",
    label: "Nagaland",
    children: [
      {
        value: "1",
        label: "Dimapur"
      },
      {
        value: "2",
        label: "Kiphire"
      },
      {
        value: "3",
        label: "Kohima"
      },
      {
        value: "4",
        label: "Longleng"
      },
      {
        value: "5",
        label: "Mokokchung"
      },
      {
        value: "6",
        label: "Mon"
      },
      {
        value: "7",
        label: "Peren"
      },
      {
        value: "8",
        label: "Phek"
      },
      {
        value: "9",
        label: "Tuensang"
      },
      {
        value: "10",
        label: "Wokha"
      },
      {
        value: "11",
        label: "Zunheboto"
      }
    ]
  },
  {
    id: "27",
    type: "State",
    capital: "Bhubaneswar",
    value: "OR",
    label: "Odisha",
    children: [
      {
        value: "1",
        label: "Angul"
      },
      {
        value: "2",
        label: "Balangir"
      },
      {
        value: "3",
        label: "Balasore"
      },
      {
        value: "4",
        label: "Bargarh"
      },
      {
        value: "5",
        label: "Bhadrak"
      },
      {
        value: "6",
        label: "Boudh"
      },
      {
        value: "7",
        label: "Cuttack"
      },
      {
        value: "8",
        label: "Deogarh"
      },
      {
        value: "9",
        label: "Dhenkanal"
      },
      {
        value: "10",
        label: "Gajapati"
      },
      {
        value: "11",
        label: "Ganjam"
      },
      {
        value: "12",
        label: "Jagatsinghapur"
      },
      {
        value: "13",
        label: "Jajpur"
      },
      {
        value: "14",
        label: "Jharsuguda"
      },
      {
        value: "15",
        label: "Kalahandi"
      },
      {
        value: "16",
        label: "Kandhamal"
      },
      {
        value: "17",
        label: "Kendrapara"
      },
      {
        value: "18",
        label: "Kendujhar (Keonjhar)"
      },
      {
        value: "19",
        label: "Khordha"
      },
      {
        value: "20",
        label: "Koraput"
      },
      {
        value: "21",
        label: "Malkangiri"
      },
      {
        value: "22",
        label: "Mayurbhanj"
      },
      {
        value: "23",
        label: "Nabarangpur"
      },
      {
        value: "24",
        label: "Nayagarh"
      },
      {
        value: "25",
        label: "Nuapada"
      },
      {
        value: "26",
        label: "Puri"
      },
      {
        value: "27",
        label: "Rayagada"
      },
      {
        value: "28",
        label: "Sambalpur"
      },
      {
        value: "29",
        label: "Sonepur"
      },
      {
        value: "30",
        label: "Sundargarh"
      }
    ]
  },
  {
    id: "28",
    type: "Union Territory",
    capital: "Puducherry",
    value: "PY",
    label: "Puducherry",
    children: [
      {
        value: "1",
        label: "Karaikal"
      },
      {
        value: "2",
        label: "Mahe"
      },
      {
        value: "3",
        label: "Pondicherry"
      },
      {
        value: "4",
        label: "Yanam"
      }
    ]
  },
  {
    id: "29",
    type: "State",
    capital: "Chandigarh",
    value: "PB",
    label: "Punjab",
    children: [
      {
        value: "1",
        label: "Amritsar"
      },
      {
        value: "2",
        label: "Barnala"
      },
      {
        value: "3",
        label: "Bathinda"
      },
      {
        value: "4",
        label: "Farvaluekot"
      },
      {
        value: "5",
        label: "Fatehgarh Sahib"
      },
      {
        value: "6",
        label: "Fazilka"
      },
      {
        value: "7",
        label: "Ferozepur"
      },
      {
        value: "8",
        label: "Gurdaspur"
      },
      {
        value: "9",
        label: "Hoshiarpur"
      },
      {
        value: "10",
        label: "Jalandhar"
      },
      {
        value: "11",
        label: "Kapurthala"
      },
      {
        value: "12",
        label: "Ludhiana"
      },
      {
        value: "13",
        label: "Mansa"
      },
      {
        value: "14",
        label: "Moga"
      },
      {
        value: "15",
        label: "Muktsar"
      },
      {
        value: "16",
        label: "Nawanshahr (Shahvalue Bhagat Singh Nagar)"
      },
      {
        value: "17",
        label: "Pathankot"
      },
      {
        value: "18",
        label: "Patiala"
      },
      {
        value: "19",
        label: "Rupnagar"
      },
      {
        value: "20",
        label: "Sahibzada Ajit Singh Nagar (Mohali)"
      },
      {
        value: "21",
        label: "Sangrur"
      },
      {
        value: "22",
        label: "Tarn Taran"
      }
    ]
  },
  {
    id: "30",
    type: "State",
    capital: "Jaipur",
    value: "RJ",
    label: "Rajasthan",
    children: [
      {
        value: "1",
        label: "Ajmer"
      },
      {
        value: "2",
        label: "Alwar"
      },
      {
        value: "3",
        label: "Banswara"
      },
      {
        value: "4",
        label: "Baran"
      },
      {
        value: "5",
        label: "Barmer"
      },
      {
        value: "6",
        label: "Bharatpur"
      },
      {
        value: "7",
        label: "Bhilwara"
      },
      {
        value: "8",
        label: "Bikaner"
      },
      {
        value: "9",
        label: "Bundi"
      },
      {
        value: "10",
        label: "Chittorgarh"
      },
      {
        value: "11",
        label: "Churu"
      },
      {
        value: "12",
        label: "Dausa"
      },
      {
        value: "13",
        label: "Dholpur"
      },
      {
        value: "14",
        label: "Dungarpur"
      },
      {
        value: "15",
        label: "Hanumangarh"
      },
      {
        value: "16",
        label: "Jaipur"
      },
      {
        value: "17",
        label: "Jaisalmer"
      },
      {
        value: "18",
        label: "Jalore"
      },
      {
        value: "19",
        label: "Jhalawar"
      },
      {
        value: "20",
        label: "Jhunjhunu"
      },
      {
        value: "21",
        label: "Jodhpur"
      },
      {
        value: "22",
        label: "Karauli"
      },
      {
        value: "23",
        label: "Kota"
      },
      {
        value: "24",
        label: "Nagaur"
      },
      {
        value: "25",
        label: "Pali"
      },
      {
        value: "26",
        label: "Pratapgarh"
      },
      {
        value: "27",
        label: "Rajsamand"
      },
      {
        value: "28",
        label: "Sawai Madhopur"
      },
      {
        value: "29",
        label: "Sikar"
      },
      {
        value: "30",
        label: "Sirohi"
      },
      {
        value: "31",
        label: "Sri Ganganagar"
      },
      {
        value: "32",
        label: "Tonk"
      },
      {
        value: "33",
        label: "Udaipur"
      }
    ]
  },
  {
    id: "31",
    type: "State",
    capital: "Gangtok",
    value: "SK",
    label: "Sikkim",
    children: [
      {
        value: "1",
        label: "East Sikkim"
      },
      {
        value: "2",
        label: "North Sikkim"
      },
      {
        value: "3",
        label: "South Sikkim"
      },
      {
        value: "4",
        label: "West Sikkim"
      }
    ]
  },
  {
    id: "32",
    type: "State",
    capital: "Chennai",
    value: "TN",
    label: "Tamil Nadu",
    children: [
      {
        value: "1",
        label: "Ariyalur"
      },
      {
        value: "2",
        label: "Chennai"
      },
      {
        value: "3",
        label: "Coimbatore"
      },
      {
        value: "4",
        label: "Cuddalore"
      },
      {
        value: "5",
        label: "Dharmapuri"
      },
      {
        value: "6",
        label: "Dindigul"
      },
      {
        value: "7",
        label: "Erode"
      },
      {
        value: "8",
        label: "Kanchipuram"
      },
      {
        value: "9",
        label: "Kanyakumari"
      },
      {
        value: "10",
        label: "Karur"
      },
      {
        value: "11",
        label: "Krishnagiri"
      },
      {
        value: "12",
        label: "Madurai"
      },
      {
        value: "13",
        label: "Nagapattinam"
      },
      {
        value: "14",
        label: "Namakkal"
      },
      {
        value: "15",
        label: "Nilgiris"
      },
      {
        value: "16",
        label: "Perambalur"
      },
      {
        value: "17",
        label: "Pudukkottai"
      },
      {
        value: "18",
        label: "Ramanathapuram"
      },
      {
        value: "19",
        label: "Salem"
      },
      {
        value: "20",
        label: "Sivaganga"
      },
      {
        value: "21",
        label: "Thanjavur"
      },
      {
        value: "22",
        label: "Theni"
      },
      {
        value: "23",
        label: "Thoothukudi (Tuticorin)"
      },
      {
        value: "24",
        label: "Tiruchirappalli"
      },
      {
        value: "25",
        label: "Tirunelveli"
      },
      {
        value: "26",
        label: "Tiruppur"
      },
      {
        value: "27",
        label: "Tiruvallur"
      },
      {
        value: "28",
        label: "Tiruvannamalai"
      },
      {
        value: "29",
        label: "Tiruvarur"
      },
      {
        value: "30",
        label: "Vellore"
      },
      {
        value: "31",
        label: "Viluppuram"
      },
      {
        value: "32",
        label: "Virudhunagar"
      }
    ]
  },
  {
    id: "33",
    type: "State",
    capital: "Hyderabad",
    value: "TS",
    label: "Telangana",
    children: [
      {
        value: "1",
        label: "Adilabad"
      },
      {
        value: "2",
        label: "Bhadradri Kothagudem"
      },
      {
        value: "3",
        label: "Hyderabad"
      },
      {
        value: "4",
        label: "Jagtial"
      },
      {
        value: "5",
        label: "Jangaon"
      },
      {
        value: "6",
        label: "Jayashankar Bhoopalpally"
      },
      {
        value: "7",
        label: "Jogulamba Gadwal"
      },
      {
        value: "8",
        label: "Kamareddy"
      },
      {
        value: "9",
        label: "Karimnagar"
      },
      {
        value: "10",
        label: "Khammam"
      },
      {
        value: "11",
        label: "Komaram Bheem Asifabad"
      },
      {
        value: "12",
        label: "Mahabubabad"
      },
      {
        value: "13",
        label: "Mahabubnagar"
      },
      {
        value: "14",
        label: "Mancherial"
      },
      {
        value: "15",
        label: "Medak"
      },
      {
        value: "16",
        label: "Medchal"
      },
      {
        value: "17",
        label: "Nagarkurnool"
      },
      {
        value: "18",
        label: "Nalgonda"
      },
      {
        value: "19",
        label: "Nirmal"
      },
      {
        value: "20",
        label: "Nizamabad"
      },
      {
        value: "21",
        label: "Peddapalli"
      },
      {
        value: "22",
        label: "Rajanna Sircilla"
      },
      {
        value: "23",
        label: "Rangareddy"
      },
      {
        value: "24",
        label: "Sangareddy"
      },
      {
        value: "25",
        label: "Svaluedipet"
      },
      {
        value: "26",
        label: "Suryapet"
      },
      {
        value: "27",
        label: "Vikarabad"
      },
      {
        value: "28",
        label: "Wanaparthy"
      },
      {
        value: "29",
        label: "Warangal (Rural)"
      },
      {
        value: "30",
        label: "Warangal (Urban)"
      },
      {
        value: "31",
        label: "Yadadri Bhuvanagiri"
      }
    ]
  },
  {
    id: "34",
    type: "State",
    capital: "Agartala",
    value: "TR",
    label: "Tripura",
    children: [
      {
        value: "1",
        label: "Dhalai"
      },
      {
        value: "2",
        label: "Gomati"
      },
      {
        value: "3",
        label: "Khowai"
      },
      {
        value: "4",
        label: "North Tripura"
      },
      {
        value: "5",
        label: "Sepahijala"
      },
      {
        value: "6",
        label: "South Tripura"
      },
      {
        value: "7",
        label: "Unakoti"
      },
      {
        value: "8",
        label: "West Tripura"
      }
    ]
  },
  {
    id: "35",
    type: "State",
    capital: "Lucknow",
    value: "UP",
    label: "Uttar Pradesh",
    children: [
      {
        value: "1",
        label: "Agra"
      },
      {
        value: "2",
        label: "Aligarh"
      },
      {
        value: "3",
        label: "Allahabad"
      },
      {
        value: "4",
        label: "Ambedkar Nagar"
      },
      {
        value: "5",
        label: "Amethi (Chatrapati Sahuji Mahraj Nagar)"
      },
      {
        value: "6",
        label: "Amroha (J.P. Nagar)"
      },
      {
        value: "7",
        label: "Auraiya"
      },
      {
        value: "8",
        label: "Azamgarh"
      },
      {
        value: "9",
        label: "Baghpat"
      },
      {
        value: "10",
        label: "Bahraich"
      },
      {
        value: "11",
        label: "Ballia"
      },
      {
        value: "12",
        label: "Balrampur"
      },
      {
        value: "13",
        label: "Banda"
      },
      {
        value: "14",
        label: "Barabanki"
      },
      {
        value: "15",
        label: "Bareilly"
      },
      {
        value: "16",
        label: "Basti"
      },
      {
        value: "17",
        label: "Bhadohi"
      },
      {
        value: "18",
        label: "Bijnor"
      },
      {
        value: "19",
        label: "Budaun"
      },
      {
        value: "20",
        label: "Bulandshahr"
      },
      {
        value: "21",
        label: "Chandauli"
      },
      {
        value: "22",
        label: "Chitrakoot"
      },
      {
        value: "23",
        label: "Deoria"
      },
      {
        value: "24",
        label: "Etah"
      },
      {
        value: "25",
        label: "Etawah"
      },
      {
        value: "26",
        label: "Faizabad"
      },
      {
        value: "27",
        label: "Farrukhabad"
      },
      {
        value: "28",
        label: "Fatehpur"
      },
      {
        value: "29",
        label: "Firozabad"
      },
      {
        value: "30",
        label: "Gautam Buddha Nagar"
      },
      {
        value: "31",
        label: "Ghaziabad"
      },
      {
        value: "32",
        label: "Ghazipur"
      },
      {
        value: "33",
        label: "Gonda"
      },
      {
        value: "34",
        label: "Gorakhpur"
      },
      {
        value: "35",
        label: "Hamirpur"
      },
      {
        value: "36",
        label: "Hapur (Panchsheel Nagar)"
      },
      {
        value: "37",
        label: "Hardoi"
      },
      {
        value: "38",
        label: "Hathras"
      },
      {
        value: "39",
        label: "Jalaun"
      },
      {
        value: "40",
        label: "Jaunpur"
      },
      {
        value: "41",
        label: "Jhansi"
      },
      {
        value: "42",
        label: "Kannauj"
      },
      {
        value: "43",
        label: "Kanpur Dehat"
      },
      {
        value: "44",
        label: "Kanpur Nagar"
      },
      {
        value: "45",
        label: "Kanshiram Nagar (Kasganj)"
      },
      {
        value: "46",
        label: "Kaushambi"
      },
      {
        value: "47",
        label: "Kushinagar (Padrauna)"
      },
      {
        value: "48",
        label: "Lakhimpur - Kheri"
      },
      {
        value: "49",
        label: "Lalitpur"
      },
      {
        value: "50",
        label: "Lucknow"
      },
      {
        value: "51",
        label: "Maharajganj"
      },
      {
        value: "52",
        label: "Mahoba"
      },
      {
        value: "53",
        label: "Mainpuri"
      },
      {
        value: "54",
        label: "Mathura"
      },
      {
        value: "55",
        label: "Mau"
      },
      {
        value: "56",
        label: "Meerut"
      },
      {
        value: "57",
        label: "Mirzapur"
      },
      {
        value: "58",
        label: "Moradabad"
      },
      {
        value: "59",
        label: "Muzaffarnagar"
      },
      {
        value: "60",
        label: "Pilibhit"
      },
      {
        value: "61",
        label: "Pratapgarh"
      },
      {
        value: "62",
        label: "RaeBareli"
      },
      {
        value: "63",
        label: "Rampur"
      },
      {
        value: "64",
        label: "Saharanpur"
      },
      {
        value: "65",
        label: "Sambhal (Bhim Nagar)"
      },
      {
        value: "66",
        label: "Sant Kabir Nagar"
      },
      {
        value: "67",
        label: "Shahjahanpur"
      },
      {
        value: "68",
        label: "Shamali (Prabuddh Nagar)"
      },
      {
        value: "69",
        label: "Shravasti"
      },
      {
        value: "70",
        label: "Svaluedharth Nagar"
      },
      {
        value: "71",
        label: "Sitapur"
      },
      {
        value: "72",
        label: "Sonbhadra"
      },
      {
        value: "73",
        label: "Sultanpur"
      },
      {
        value: "74",
        label: "Unnao"
      },
      {
        value: "75",
        label: "Varanasi"
      }
    ]
  },
  {
    id: "36",
    type: "State",
    capital: "Dehradun",
    value: "UK",
    label: "Uttarakhand",
    children: [
      {
        value: "1",
        label: "Almora"
      },
      {
        value: "2",
        label: "Bageshwar"
      },
      {
        value: "3",
        label: "Chamoli"
      },
      {
        value: "4",
        label: "Champawat"
      },
      {
        value: "5",
        label: "Dehradun"
      },
      {
        value: "6",
        label: "Harvaluewar"
      },
      {
        value: "7",
        label: "Nainital"
      },
      {
        value: "8",
        label: "Pauri Garhwal"
      },
      {
        value: "9",
        label: "Pithoragarh"
      },
      {
        value: "10",
        label: "Rudraprayag"
      },
      {
        value: "11",
        label: "Tehri Garhwal"
      },
      {
        value: "12",
        label: "Udham Singh Nagar"
      },
      {
        value: "13",
        label: "Uttarkashi"
      }
    ]
  },
  {
    id: "37",
    type: "State",
    capital: "Kolkata",
    value: "WB",
    label: "West Bengal",
    children: [
      {
        value: "1",
        label: "Alipurduar"
      },
      {
        value: "2",
        label: "Bankura"
      },
      {
        value: "3",
        label: "Birbhum"
      },
      {
        value: "4",
        label: "Burdwan (Bardhaman)"
      },
      {
        value: "5",
        label: "Cooch Behar"
      },
      {
        value: "6",
        label: "Dakshin Dinajpur (South Dinajpur)"
      },
      {
        value: "7",
        label: "Darjeeling"
      },
      {
        value: "8",
        label: "Hooghly"
      },
      {
        value: "9",
        label: "Howrah"
      },
      {
        value: "10",
        label: "Jalpaiguri"
      },
      {
        value: "11",
        label: "Kalimpong"
      },
      {
        value: "12",
        label: "Kolkata"
      },
      {
        value: "13",
        label: "Malda"
      },
      {
        value: "14",
        label: "Murshvalueabad"
      },
      {
        value: "15",
        label: "Nadia"
      },
      {
        value: "16",
        label: "North 24 Parganas"
      },
      {
        value: "17",
        label: "Paschim Medinipur (West Medinipur)"
      },
      {
        value: "18",
        label: "Purba Medinipur (East Medinipur)"
      },
      {
        value: "19",
        label: "Purulia"
      },
      {
        value: "20",
        label: "South 24 Parganas"
      },
      {
        value: "21",
        label: "Uttar Dinajpur (North Dinajpur)"
      }
    ]
  }
  */
];

export default regions;
