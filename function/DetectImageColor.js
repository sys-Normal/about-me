const targets = doc.querySelectorAll('.simple_contents');
const colorThief = new ColorThief();

function DetectImageColor() {
    if(IsValid(targets)){
        targets.forEach((target, index) => {
            // Log(target)
            let image = target.querySelector('.hisotry_capture');
            // image.setAttribute('crossOrigin', '');
            // Log(image);
            if(IsValid(image)){
                const pickedColor = colorThief.getColor(image);
                Log(pickedColor)
            }
        })
    }
}

// DetectImageColor();