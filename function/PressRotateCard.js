const click_area = doc.querySelector('.profile_flip_container');
const change_target = doc.querySelector('.flip_card');

function PressRotateCard (event) {
    if(IsValid(change_target)){
        change_target.classList.toggle('flip_active');
    }
}

if(IsValid(click_area)){
    click_area.addEventListener('click', PressRotateCard)

}