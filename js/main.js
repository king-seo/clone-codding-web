const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
//Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('tab-border');
    //Grab content item from DOM
    const tabContentItems = document.querySelector(`#${this.id}-content`);
    //add show class
    tabContentItems.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click - 탭을 '클릭'하면 selectItem작동
tabItems.forEach(item => item.addEventListener('click', selectItem));