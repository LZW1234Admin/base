// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
//import { InstApi } from "../../apis/inst.api.js";
import { BoybabyApi } from "../../apis/boybaby.api.js";
import { GirlbabyApi } from "../../apis/girlbaby.api.js";
class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  onMyShow() {
    var that = this;
    //var instapi = new InstApi();
    var boybaby = new BoybabyApi();
    var girlbaby = new GirlbabyApi();

   // instapi.indexbanner({}, (indexbanner) => {
   //   this.Base.setMyData({ indexbanner });
  //  });
    boybaby.boybabylist({}, (boybabylist) => {
      this.Base.setMyData({ boybabylist });
    });
    girlbaby.girlbabylist({}, (girlbabylist) => {
      this.Base.setMyData({ girlbabylist });
    });

  }
}

var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;

Page(body)

