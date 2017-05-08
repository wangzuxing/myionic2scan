import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public scannedText: string;

  constructor(public navCtrl: NavController, public barcodeScanner: BarcodeScanner) {

  }

  scan() {
        this.barcodeScanner.scan().then((barcodeData) => {
           if (barcodeData.cancelled) {
               console.log("User cancelled the action!");
              return false;
           }
           console.log("Scanned successfully!");
           console.log(barcodeData);
           this.scannedText=JSON.stringify(barcodeData);
        }, (err) => {
           console.log(err);
        });
   }

  //cordova.InAppBrowser.open(url, "_system", "location=true");
    
    //scan(){
    //    cordova.plugins.barcodeScanner.scan((result) => {
    //       cordova.InAppBrowser.open(result.text, '_system', 'location=yes');
    //    }, (error) => {
    //       this.nav.present(Alert.create({
    //           title: "Scan",
    //           subTitle: error,
    //           buttons: ["Close"]
    //       }));
    //    });
    //}
}
