

export default function doubleTap(el) {
    
    el.nativeView.on('doubleTap', () => {
       
            el.nativeView.visibility="collapse";

    });
}