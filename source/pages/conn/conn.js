// pages/content/content.js
import {AppBase} from "../../appbase";
import {ApiConfig} from "../../apis/apiconfig";
import {InstApi} from "../../apis/inst.api.js";
import {XinggeApi} from "../../apis/xingge.api.js";
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
    var instapi = new InstApi();
    var xinggeApi = new XinggeApi();

    instapi.indexbanner({}, (indexbanner) => {
      this.Base.setMyData({
        indexbanner
      });
    });

    xinggeApi.xinggelist({}, (xinggelist) => {

      for (var i = 0; i < xinggelist.length; i++) {
        xinggelist[i].xz = false;
      }
      this.Base.setMyData({
        xinggelist
      });
    });
  }

  onBon() {
    wx.navigateTo({
      url: '/pages/chose/chose',
    })

  }
  qqq(e) {
    console.log(e);

    var xinggelist = this.Base.getMyData().xinggelist;
    xinggelist[e.currentTarget.dataset.id].xz = !xinggelist[e.currentTarget.dataset.id].xz;
    var qqq = xinggelist.filter((item) => {
      return item.xz == true
    })

    if (qqq.length > 5) {
      return
    }
    console.log(xinggelist);
    this.Base.setMyData({
      xinggelist: xinggelist
    });
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.onBon = content.onBon;
body.qqq = content.qqq;
Page(body)