/*
sample request for : http://geotest.chalkdigital.com:5502/api/templates
{
    "id":"src/assets/templates/fbSquareTemplate2.pug";
    "export":true;
    "Line1": "Let's get your home sold!";
    "Line2": "I’m your neighborhood real estate expert. You’ll find there’s nobody more qualified to help you sell your home.";
    "bigMainImgSrc":"https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit;q_75;w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/goldenislesga/CVBPhoto-February-2019_0C003ED0-448C-4911-AE2198128EFA8A3E_b7582a6b-c6da-4bdd-997ed0d3c2308ac0.jpg";
    "bigLogoImgSrc":"https://s3.amazonaws.com/cd_cdn/logos/bhlxy.png";
    "bigheadShotSrc":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3XwcO-eFlWDhc2rJT0cOaaYcPa38k48jJlg&usqp=CAU";
    "smallMainImgSrc":"https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit;q_75;w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/goldenislesga/CVBPhoto-February-2019_0C003ED0-448C-4911-AE2198128EFA8A3E_b7582a6b-c6da-4bdd-997ed0d3c2308ac0.jpg";
    "smallLogoImgSrc":"https://s3.amazonaws.com/cd_cdn/logos/bhlxy.png";
    "smallheadShotSrc":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3XwcO-eFlWDhc2rJT0cOaaYcPa38k48jJlg&usqp=CAU";
    "agentName":"Kailash Sanwal";
    "agentEmail":"kailash@chalkdigital.com";
    "agentPhone":"92919201920";
    "companyLogo":"https://s3.amazonaws.com/cd_cdn/hsf_logos/GA306_H_Seal_wht_rgb-1718x800";
    "templateSpecificData":{
        "searchImg":"https://s3.amazonaws.com/cd_cdn/image/search.png";
        "clickHere":"https://geoad.chalkdigital.com/assets/wa_detail.png"
    }
  }
  */
 declare interface PuppiteerRequest {
  templateId:string;
  size:string;
  export:boolean;
  Line1: string;
  Line2: string;
  bigMainImgSrc:string;
  bigLogoImgSrc:string;
  bigheadShotSrc:string;
  smallMainImgSrc?:string;
  smallLogoImgSrc?:string;
  smallheadShotSrc?:string;
  agentName:string;
  agentEmail:string;
  agentPhone:string;
  companyLogo:string;
  searchImg?:string;
  clickHere:string
}

declare interface Carousel {
  template: string;
  counter: number;
  templateId:string;
  selected:boolean
}

declare interface TemplateCollection {
  id:string;
  name:string;
  supportedSizes:string[];
  '300x250'?:Carousel;
  '320x50'?:Carousel;
  '160x600'?:Carousel;
  '300x600'?:Carousel;
  '728x90'?:Carousel;
  '1200x628'?:Carousel;
  '1200x1200'?:Carousel
}

declare interface TemplateApiResponse {
  collections:TemplateCollection[];
  logo:string;
}