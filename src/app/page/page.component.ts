import {ElementRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {concat, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormControl } from '@angular/forms';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';




@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
  
})
export class PageComponent implements OnInit {
  
  @ViewChild('googleMap', { static: true })
  googleMapRef: ElementRef;
  map: google.maps.Map;
	myControl = new FormControl();
  New_Lat=0;
  New_Long=0;
  options: any = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas (the)",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia (Plurinational State of)",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory (the)",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cmeroon",
  "Canada",
  "Cayman Islands (the)",
  "Central African Republic (the)",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands (the)",
  "Colombia",
  "Comoros (the)",
  "Congo (the Democratic Republic of the)",
  "Congo (the)",
  "Cook Islands (the)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Côte d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic (the)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands (the) [Malvinas]",
  "Faroe Islands (the)",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories (the)",
  "Gabon",
  "Gambia (the)",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (the Democratic People's Republic of)",
  "Korea (the Republic of)",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic ",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands (the)",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia ",
  "Moldova (the Republic of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger (the)",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of North Macedonia",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Réunion",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin ",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten Dutch",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan (the)",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom ",
  "United States Minor Outlying Islands",
  "United States of America",
  "united states",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Viet Nam",
  "Virgin Islands(British)",
  "Virgin Islands(U.S.)",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Åland Islands",
];


  collection = [];
  
  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
    
    }
    
    countrylist =[
      {
            "country" : "Albania",
            "alpha2" : "AL",
            "alpha3" : "ALB",
            "numeric" : 8,
            "latitude" : 41,
            "longitude" : 20
          },
      {
            "country" : "Algeria",
            "alpha2" : "DZ",
            "alpha3" : "DZA",
            "numeric" : 12,
            "latitude" : 28,
            "longitude" : 3
          },
      {
            "country" : "American Samoa",
            "alpha2" : "AS",
            "alpha3" : "ASM",
            "numeric" : 16,
            "latitude" : -14.3333,
            "longitude" : -170
          },
      {
            "country" : "Andorra",
            "alpha2" : "AD",
            "alpha3" : "AND",
            "numeric" : 20,
            "latitude" : 42.5,
            "longitude" : 1.6
          },
      {
            "country" : "Angola",
            "alpha2" : "AO",
            "alpha3" : "AGO",
            "numeric" : 24,
            "latitude" : -12.5,
            "longitude" : 18.5
          },
        ]
  page: number = 1;
  public p: number;
  

  filteredOptions: Observable<any[]>;
  username:any="";
  public maps: google.maps.Map;
  

 
 
  ngOnInit() {   
  this.initMap()
    this.username= localStorage.getItem("username");
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );}
    

initMap(){
  this.maps = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: this.New_Lat, lng: this.New_Long },
    zoom: 5,
  });
  const marker = new google.maps.Marker({
    position: { lat: this.New_Lat, lng: this.New_Long
     },
    map: this.maps,
});}

  btnclickevent(){
   document.getElementById('login1').innerHTML = "text change successfully";
  }


  textchange(args){
    //console.log("In textchange",args);
    //console.log("In textchange",args[0]);
    //console.log("countries list is",this.countrylist)
    // return;
    let filterList = this.countrylist.filter((a)=> a.country==args[0]);
    setTimeout(() => {
      if(filterList!=null && filterList != undefined && filterList!=[]){
        ////console.log("In filterList",filterList);
        this.New_Lat = filterList[0].latitude;
    this.New_Long = filterList[0].longitude;
        setTimeout(() => {
      this.initMap();
    }, 100)
      }
    }, 100);
  }
    private _filter(val: any): any[] {
      this.p = 1;
      const filterValue = val.toLowerCase();
      const directMatch = this.options.filter(entry => entry.toLowerCase().startsWith(filterValue));
      const myArr = this.options.filter(function(entry){
        
        var strings = entry.split(" ") 
        if (strings.length>1){
        for ( var s=1;s<strings.length; s++)
        {
          if (directMatch.indexOf(strings[s].toLowerCase().startsWith(filterValue))== -1){
            return strings[s].toLowerCase().startsWith(filterValue);   
         }
       }
     }
    })
    const indirectMatch = this.options.filter(function(entry){
        var strings = entry.split(" ")
        
      if (strings.length>1){
        for ( var j=3;j<strings.length; j++)
        {
          if (directMatch.indexOf(strings[j].toLowerCase().startsWith(filterValue))== -1){
            return strings[j].toLowerCase().startsWith(filterValue);
         }}
        }}); 
    
    ///console.log("indirect match are",indirectMatch);
         /// console.log("direct match are",directMatch);
          ///console.log("myArr match are",myArr);
      var result = directMatch.sort().concat(myArr.sort());
      var index = this.countrylist.findIndex(con => con.country === "Algeria")
      //console.log("index for algerai is",index)
      //console.log("other details for algeria is",this.countrylist[index])
      //console.log("selected values are",result)
      if(val != null && val != "" && val != undefined){
        this.textchange(result);
      }else{
        this.New_Lat=0;
        this.New_Long=0;
      }
      return result;    
    }  

    }



  

