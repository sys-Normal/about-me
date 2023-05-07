function ToggleBackgroundColor(){
    const target = doc.querySelectorAll('#toggleBGC');    
    if(IsValid(target) && target.length !== 0){
        const showLog = (value) => {
            value.classList.toggle('whiteBackgroundColor ');                   
        }
        target.forEach(showLog)
    }
}

function DetectNowScrollTop() {

    if(IsValid(IsOnScrollTop)){

        const CheckScrollTop = () => {

            const nowScrollPosition = window.scrollY;

            if(IsValid(nowScrollPosition) && nowScrollPosition !== 0){
                if(IsOnScrollTop){
                    // Log(`이제 더이상 스크롤이 최상단이 아닙니다`)               
                    IsOnScrollTop = false;
                    ToggleBackgroundColor();
                    
                }
            }else{
                // Log(`현재 스크롤이 최상단에 위치합니다`)          
                IsOnScrollTop = true;
                ToggleBackgroundColor();
            }
        }

        window.addEventListener('scroll', CheckScrollTop)
    }
}

if(IsLoadingDone){
    DetectNowScrollTop();
}
