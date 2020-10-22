
## Android Studio 

npx @capacitor/cli open android


### Run
ionic capacitor run android
npm run build && ionic capacitor copy android

#### Sync Changes over to Android
npx cap sync android
* then click the refresh button in android studio



#### Figure out hot reload
ionic capacitor run android -l --external


add to AndroidManifest.xml
```xml
        android:usesCleartextTraffic="true"

```

##### capacitor.config.json
if you want to have hot reloading then add this line
```
"server" : {
        "url" : "http://10.0.2.2:3000/"
}
```
