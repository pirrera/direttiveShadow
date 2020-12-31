import { Color } from '@nativescript/core/color';
import { isAndroid, ioIos } from '@nativescript/core/platform'



export default function shadow(el) {
    el.nativeView.on('loaded', (args) => {
        const nsView = args.object;
        const nsColorShadow = new Color('black');


        if (ioIos) {
            const iosView = nsView.ios;
            iosView.layer.masksToBounds = false;
            iosView.layer.shadowColor = nsColorShadow.ios.CGColor;
            iosView.layer.shadowOpacity = .3;
            iosView.layer.shadowOffset = CGSizeMake(0, 2);

        } else if (isAndroid) {
            const nsViewColor = nsView.backgroundColor;
            const finalColor = nsViewColor ? nsViewColor.android : new Color('white').android;
            const androidView = nsView.android;
            androidView.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(finalColor));

            if (nsView.text) {
                androidView.setShadowLayer(20, 0, 0, nsColorShadow.android);
            } else {
                androidView.setElevation(10.0);
            }
        }


    });



} 